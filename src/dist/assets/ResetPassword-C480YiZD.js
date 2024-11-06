import{k as x,l as t,o as w,r as b,u,p as g,j as r,F as f,f as h,d as s,q as P,a as j,b as v,E as C}from"./index-CM0Ivdlm.js";const y=x().shape({newPassword:t().min(8,"La contraseña debe tener al menos 8 caracteres").required("Campo obligatorio"),confirmPassword:t().oneOf([w("newPassword")],"Las contraseñas no coinciden").required("Campo obligatorio")}),S=()=>{const[e,a]=b.useState(""),d=u(),{token:l}=g(),m=async o=>{try{(await P(o,""+l)).data.success&&d("/login")}catch{a("Error al restablecer la contraseña"),setTimeout(()=>{a("")},3e3)}};return r.jsx(F,{children:r.jsx(f,{initialValues:{newPassword:"",confirmPassword:""},validationSchema:y,onSubmit:o=>{m(o.newPassword)},children:()=>r.jsxs(R,{children:[r.jsx(E,{children:"Restablecer Contraseña"}),e&&r.jsx(k,{children:e}),r.jsx(n,{htmlFor:"newPassword",children:"Nueva Contraseña"}),r.jsx(i,{type:"password",id:"newPassword",name:"newPassword"}),r.jsx(c,{name:"newPassword",component:"div"}),r.jsx(n,{htmlFor:"confirmPassword",children:"Confirmar Contraseña"}),r.jsx(i,{type:"password",id:"confirmPassword",name:"confirmPassword"}),r.jsx(c,{name:"confirmPassword",component:"div"}),r.jsx(h,{type:"submit",children:"Restablecer Contraseña"})]})})})},E=s.h2`
  font-size: 24px;
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
`,F=s.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  background-image: radial-gradient(
    circle at bottom,
    rgba(0, 180, 255, 0.5),
    rgba(0, 0, 0, 1)
  );

  display: flex;
  justify-content: center;
  align-items: center;
`,R=s(j)`
  width: 400px;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  padding: 20px;
  display: flex;
  flex-direction: column;
`,n=s.label`
  font-size: 16px;
  margin-bottom: 10px;
  color: #fff;
`,i=s(v)`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 16px;
`,c=s(C)`
  color: red;
  font-size: 16px;
`,k=s.div`
  background-color: rgba(255, 234, 229, 0.5);
  color: rgb(151, 6, 6);
  font-size: 14px;
  border: 1px solid rgb(255, 205, 199);
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 5px;
`;export{S as default};
