import{r as n,j as e,F as c,k as l,l as d,f as m,d as s,s as p,a as x,b as u,E as g}from"./index-DO84e-pt.js";const E=()=>{const[r,t]=n.useState(null),i=async o=>{try{const a=await p(o);console.log("error",a),t({type:"success",message:"Se ha enviado un correo con las instrucciones para restablecer tu contraseña"}),setTimeout(()=>{t(null)},3e3),o.email=""}catch{t({type:"error",message:"Error al enviar, verifica tu correo"}),setTimeout(()=>{t(null)},3e3),o.email=""}};return e.jsx(h,{children:e.jsx(c,{initialValues:{email:""},validationSchema:l({email:d().email().required("Campo obligatorio")}),onSubmit:o=>{i(o)},children:e.jsxs(b,{children:[e.jsx(f,{children:"Olvidaste tu contrasena?"}),r&&e.jsx(y,{success:r.type,children:r.message}),e.jsx(j,{type:"email",name:"email",placeholder:"Correo Electronico"}),e.jsx(v,{name:"email",component:"div"}),e.jsx(m,{type:"submit",children:"Enviar Instrucciones"})]})})})},h=s.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,f=s.h2`
  font-size: 24px;
  margin-bottom: 20px;
`,b=s(x)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,j=s(u)`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`,v=s(g)`
  color: red;
  font-size: 16px;
`,y=s.p`
  color: ${({success:r})=>r==="success"?"green":"red"};
  margin-top: 10px;
  font-size: 14px;
`;export{E as default};
