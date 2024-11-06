import{d as n,j as e,r as d,e as S,f as P,g as B,c as x,F,a as M,B as u,E as g,h as z,i as U,b as D}from"./index-DO84e-pt.js";import{M as R,I as j,a as b}from"./Modal-DrJZtND2.js";const A=n.svg`
  width: 40px;
  height: 40px;
  cursor: pointer;
`,L=()=>e.jsxs(A,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M15 3a2 2 0 0 1 1.995 1.85l.005 .15a1 1 0 0 0 .883 .993l.117 .007h1a3 3 0 0 1 2.995 2.824l.005 .176v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9a3 3 0 0 1 2.824 -2.995l.176 -.005h1a1 1 0 0 0 1 -1a2 2 0 0 1 1.85 -1.995l.15 -.005h6zm-3 7a3 3 0 0 0 -2.985 2.698l-.011 .152l-.004 .15l.004 .15a3 3 0 1 0 2.996 -3.15z"})]}),T=({closeModal:i,userId:m})=>{const[s,C]=d.useState(null),[r,k]=d.useState(null),E=o=>{var p;const t=(p=o.target.files)==null?void 0:p[0];if(t){k(t);const c=new FileReader;c.onloadend=()=>{C(c.result)},c.readAsDataURL(t)}},h=async o=>{o.preventDefault();try{if(r){const t=await B(m,r);t.success?x.success(t.message):x.error("Error al subir la imagen"),i()}}catch{x.error("Error al subir la imagen"),i()}};return e.jsxs($,{onSubmit:h,children:[e.jsx(G,{type:"file",accept:"image/*",onChange:E}),s&&e.jsx(N,{children:e.jsx(O,{src:s,alt:"Vista previa"})}),e.jsxs(V,{children:[e.jsx(S,{type:"button",onClick:i,children:"Cancel"}),e.jsx(P,{type:"submit",children:"Upload"})]})]})},$=n.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`,G=n.input`
  margin-bottom: 10px;
`,N=n.div`
  width: 200px;
  height: 200px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`,O=n.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-top: 10px;
`,V=n.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`,H="",ne=()=>{const[i,m]=d.useState(!1),[s,C]=d.useState(null),[r,k]=d.useState({name:!0,email:!0,phone:!0,password:!0}),E=()=>m(!0),h=()=>m(!1),o=a=>{k(l=>({...l,[a]:!l[a]}))},t=async()=>{const{data:a}=await z();a.data&&C(a.data)};d.useEffect(()=>{t()},[]);const p=async a=>{const{data:l}=await U(""+(s==null?void 0:s.id),a);l.success?x.success(l.message):x.error(l.message)},c={email:(s==null?void 0:s.email)||"",name:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||"",password:"",image:(s==null?void 0:s.image)||""};return e.jsx(q,{children:e.jsx(J,{children:e.jsxs(K,{children:[e.jsxs(Q,{children:[e.jsx(Y,{src:H+(s==null?void 0:s.image),children:e.jsx(Z,{onClick:E,children:e.jsx(L,{})})}),e.jsx(W,{children:c.name}),e.jsx(R,{open:i,onClose:h,title:"Título del Modal",children:e.jsx(T,{userId:""+(s==null?void 0:s.id),closeModal:h})})]}),e.jsx(X,{children:e.jsxs(_,{children:[e.jsx("h2",{children:"Profile Details"}),e.jsx(F,{enableReinitialize:!0,initialValues:c,onSubmit:a=>{p(a)},children:e.jsxs(M,{children:[e.jsxs(f,{children:[e.jsx(y,{children:"Name"}),e.jsxs(I,{children:[e.jsx(w,{type:"name",name:"name",disabled:r.name}),e.jsx(j,{onClick:()=>o("name")}),e.jsx(u,{type:"submit",children:e.jsx(b,{})})]}),e.jsx(g,{name:"name",component:v})]}),e.jsxs(f,{children:[e.jsx(y,{children:"Email"}),e.jsxs(I,{children:[e.jsx(w,{type:"email",name:"email",disabled:r.email}),e.jsx(j,{onClick:()=>o("email")}),e.jsx(u,{type:"submit",children:e.jsx(b,{})})]}),e.jsx(g,{name:"email",component:v})]}),e.jsxs(f,{children:[e.jsx(y,{children:"Phone"}),e.jsxs(I,{children:[e.jsx(w,{type:"phone",name:"phone",disabled:r.phone}),e.jsx(j,{onClick:()=>o("phone")}),e.jsx(u,{type:"submit",children:e.jsx(b,{})})]}),e.jsx(g,{name:"phone",component:v})]}),e.jsxs(f,{children:[e.jsx(y,{children:"Password"}),e.jsxs(I,{children:[e.jsx(w,{type:"password",name:"password",disabled:r.password,placeholder:"********"}),e.jsx(j,{onClick:()=>o("password")}),e.jsx(u,{type:"submit",children:e.jsx(b,{})})]}),e.jsx(g,{name:"email",component:v})]})]})})]})})]})})})},q=n.div`
  width: 100vw;
  margin-top: 76px;
`,J=n.div`
  width: 90%;
  margin: 0 auto;
`,K=n.section`
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #f0f0f0;
`,Q=n.section`
  flex: 1;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,W=n.h4`
  text-align: center;
`,X=n.section`
  flex: 2;
  color: #000;
`,Y=n.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  background: ${({src:i})=>i?`url(${i})`:"#c0c5cf"};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`,Z=n.div`
  width: 150px;
  height: 150px;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    display: none;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    & svg {
      display: block;
    }
  }
`,_=n.div`
  max-width: 500px;
  margin: 0 auto;
  color: #000;
  padding: 20px; /* Ajustado el padding */
`,f=n.div`
  width: 100%;
  margin-bottom: 20px;
`,w=n(D)`
  width: 100%;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  box-sizing: border-box;
`,y=n.label`
  font-size: 1.2rem;
  margin-bottom: 10px;
  display: block;
`,v=n.div`
  color: red;
`,I=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;export{ne as default};
