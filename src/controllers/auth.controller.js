import { v4 } from "uuid";
import {
  hashPassword,
  jwtEncode,
  verifyPassword,
  jwtDecode,
} from "../services/auth.service.js";
import { User } from "../database/models/index.js";
import { sendMail } from "../services/email.service.js";

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "User not found",
    });
  }

  const passwordVerified = await verifyPassword(password, user.password);
  if (!passwordVerified) {
    return res.status(401).json({
      success: false,
      message: "Invalid password",
    });
  }

  const now = new Date();
  const TWO_HURS_IN_MS = 60 * 60 * 2;
  const expiresIn = Math.floor(now.getTime() / 1000) + TWO_HURS_IN_MS;
  const issuedAt = Math.floor(now.getTime() / 1000);

  // const payload = {
  //   sub: user.id,
  //   exp: expiresIn,
  //   iat: issuedAt,
  //   iss: process.env.JWT_ISSUER,
  // }
  const payload = {
    id: user.id,
    email: user.email,
  };

  const token = await jwtEncode(payload);

  return res.status(200).json({
    success: true,
    data: {
      token,
      expiresIn,
    },
  });
}
export async function signup(req, res, next) {
  const { email, password, name, phone } = req.body;
  try {
    const passwordHash = await hashPassword(password);
    const created = await User.create({
      id: v4(),
      email: email,
      password: passwordHash,
      name: name,
      phone: phone,
    });
    console.log(created);
    // if (!created) {
    //   return res.status(500).send({
    //     success: false,
    //     message: "Failed to create user",
    //   });
    // }
    return res.status(201).send({
      success: true,
      message: "User created",
      data: created,
    });
  } catch (error) {
    next(error);
  }
}

export async function sendEmail(req, res) {
  const { email } = req.body;
  console.log("correo", email);
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }
  const payload = {
    id: user.id,
    email: user.email,
  };

  const token = await jwtEncode(payload);
  const local = "http://localhost:5173/reset-password/" + token;
  const render = "https://taskmaster-rpo2.onrender.com/reset-password/" + token;
  const payloadEmail = {
    to: email,
    subject: "Recover password",
    body: `
        <!DOCTYPE html>
          <html lang="en">
             <head>
             <meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <title>Password Reset</title>
             </head>
             <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; color: #333;">
             <div style="max-width: 500px; margin: 0 auto; background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
             <h2 style="text-align: center; color: #007bff;">Password Reset</h2>
<p>Hola,${user.name}</p>
<p>Usted solicitó restablecer su contraseña. Haga clic en el siguiente enlace para continuar:</p>
<p style="text-align: center;">
<a href="${render}" style="display: inline-block; padding: 10px 15px; color: #fff; background-color: #007bff; text-decoration: none; border-radius: 5px;">
Reset Password
</a>
</p>
<p>Si no solicitó esto, puede ignorar este correo electrónico.</p>
<p>¡Gracias!</p>
</div>
</body>
</html>`,
  };
  try {
    await sendMail(payloadEmail);
    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "failed to end email",
    });
  }
}

export async function resetPassword(req, res) {
  const { password, token } = req.body;
  const payload = await jwtDecode(token);
  const user = await User.findOne({
    where: {
      id: payload.id,
    },
  });
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }
  const passwordHash = await hashPassword(password);
  try {
    await User.update(
      {
        password: passwordHash,
      },
      {
        where: {
          id: payload.id,
        },
      },
    );
    return res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to reset password",
    });
  }
}
