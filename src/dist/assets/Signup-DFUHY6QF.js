import{k as h,l as o,o as x,u,j as e,F as j,a as b,E as s,d as r,t as f,c,b as g}from"./index-Bq3Yk58B.js";const w=h({name:o().required("Nombre es requerido"),email:o().email("Email inválido").required("Email es requerido"),phone:o().min(10,"El número de teléfono debe tener al menos 10 dígitos").required("Teléfono es requerido"),password:o().min(6,"La contraseña debe tener al menos 6 caracteres").required("Contraseña es requerida"),confirmPassword:o().oneOf([x("password")],"Las contraseñes no coinciden").required("Confirmar contraseña es requerido")}),k=()=>{const l=u(),p=async d=>{try{const m=await f(d);m.data.success&&c.success(m.data.message),l("/login")}catch{c.error("Error al registrar el usuario")}};return e.jsx(j,{initialValues:{name:"",email:"",phone:"",password:"",confirmPassword:""},validationSchema:w,onSubmit:d=>{p(d)},children:()=>e.jsx(F,{children:e.jsx(v,{children:e.jsxs(y,{children:[e.jsx(q,{children:"Registro"}),e.jsxs(b,{children:[e.jsxs(n,{children:[e.jsx(a,{htmlFor:"name",children:"Nombre"}),e.jsx(i,{type:"text",id:"name",name:"name"}),e.jsx(s,{name:"name",component:t})]}),e.jsxs(n,{children:[e.jsx(a,{htmlFor:"email",children:"Email"}),e.jsx(i,{type:"email",id:"email",name:"email"}),e.jsx(s,{name:"email",component:t})]}),e.jsxs(n,{children:[e.jsx(a,{htmlFor:"phone",children:"Teléfono"}),e.jsx(i,{type:"text",id:"phone",name:"phone"}),e.jsx(s,{name:"phone",component:t})]}),e.jsxs(n,{children:[e.jsx(a,{htmlFor:"password",children:"Contraseña"}),e.jsx(i,{type:"password",id:"password",name:"password"}),e.jsx(s,{name:"password",component:t})]}),e.jsxs(n,{children:[e.jsx(a,{htmlFor:"confirmPassword",children:"Confirmar Contraseña"}),e.jsx(i,{type:"password",id:"confirmPassword",name:"confirmPassword"}),e.jsx(s,{name:"confirmPassword",component:t})]}),e.jsx(E,{type:"submit",children:"Registrar"})]})]})})})})},F=r.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`,v=r.div`
  width: 500px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  overflow: hidden; /* Oculta el desbordamiento */
`,y=r.div`
  padding: 20px;
`,q=r.h2`
  text-align: center;
`,n=r.div`
  margin-bottom: 1rem;
`,a=r.label`
  display: block;
  margin-bottom: 0.4rem;
  font-weight: bold;
`,i=r(g)`
  width: 100%;
  padding: 0.4rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`,t=r.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  min-height: 1.25rem; /* Ajusta este valor según sea necesario */
`,E=r.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;export{k as default};
