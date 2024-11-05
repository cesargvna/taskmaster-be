import{d as t,j as e,r as d,e as E,f as P,g as B,c as I,F as M,a as F,B as p,E as u,h as z,i as U,b as D}from"./index-Dvao5RbO.js";import{M as R,I as g,a as j}from"./Modal-jWOiGQx3.js";const A=t.svg`
  width: 40px;
  height: 40px;
  cursor: pointer;
`,L=()=>e.jsxs(A,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M15 3a2 2 0 0 1 1.995 1.85l.005 .15a1 1 0 0 0 .883 .993l.117 .007h1a3 3 0 0 1 2.995 2.824l.005 .176v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9a3 3 0 0 1 2.824 -2.995l.176 -.005h1a1 1 0 0 0 1 -1a2 2 0 0 1 1.85 -1.995l.15 -.005h6zm-3 7a3 3 0 0 0 -2.985 2.698l-.011 .152l-.004 .15l.004 .15a3 3 0 1 0 2.996 -3.15z"})]}),T=({closeModal:o,userId:x})=>{const[s,C]=d.useState(null),[r,k]=d.useState(null),S=i=>{var h;const n=(h=i.target.files)==null?void 0:h[0];if(n){k(n);const l=new FileReader;l.onloadend=()=>{C(l.result)},l.readAsDataURL(n)}},m=async i=>{if(i.preventDefault(),r){const n=await B(x,r);console.log(n),n.success?I.success(n.message):I.error("Error al subir la imagen"),o()}};return e.jsxs($,{onSubmit:m,children:[e.jsx(G,{type:"file",accept:"image/*",onChange:S}),s&&e.jsx(N,{children:e.jsx(O,{src:s,alt:"Vista previa"})}),e.jsxs(V,{children:[e.jsx(E,{type:"button",onClick:o,children:"Cancel"}),e.jsx(P,{type:"submit",children:"Upload"})]})]})},$=t.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`,G=t.input`
  margin-bottom: 10px;
`,N=t.div`
  width: 200px;
  height: 200px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`,O=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-top: 10px;
`,V=t.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`,H="http://localhost:3000",te=()=>{const[o,x]=d.useState(!1),[s,C]=d.useState(null),[r,k]=d.useState({name:!0,email:!0,phone:!0,password:!0}),S=()=>x(!0),m=()=>x(!1),i=a=>{k(c=>({...c,[a]:!c[a]}))},n=async()=>{const{data:a}=await z();a.data&&C(a.data)};d.useEffect(()=>{n()},[]);const h=async a=>{const{data:c}=await U(""+(s==null?void 0:s.id),a);c.success?I.success(c.message):I.error(c.message)},l={email:(s==null?void 0:s.email)||"",name:(s==null?void 0:s.name)||"",phone:(s==null?void 0:s.phone)||"",password:"",image:(s==null?void 0:s.image)||""};return e.jsx(q,{children:e.jsx(J,{children:e.jsxs(K,{children:[e.jsxs(Q,{children:[e.jsx(Y,{src:H+(s==null?void 0:s.image),children:e.jsx(Z,{onClick:S,children:e.jsx(L,{})})}),e.jsx(W,{children:l.name}),e.jsx(R,{open:o,onClose:m,title:"Título del Modal",children:e.jsx(T,{userId:""+(s==null?void 0:s.id),closeModal:m})})]}),e.jsx(X,{children:e.jsxs(_,{children:[e.jsx("h2",{children:"Profile Details"}),e.jsx(M,{enableReinitialize:!0,initialValues:l,onSubmit:a=>{h(a)},children:e.jsxs(F,{children:[e.jsxs(b,{children:[e.jsx(w,{children:"Name"}),e.jsxs(v,{children:[e.jsx(f,{type:"name",name:"name",disabled:r.name}),e.jsx(g,{onClick:()=>i("name")}),e.jsx(p,{type:"submit",children:e.jsx(j,{})})]}),e.jsx(u,{name:"name",component:y})]}),e.jsxs(b,{children:[e.jsx(w,{children:"Email"}),e.jsxs(v,{children:[e.jsx(f,{type:"email",name:"email",disabled:r.email}),e.jsx(g,{onClick:()=>i("email")}),e.jsx(p,{type:"submit",children:e.jsx(j,{})})]}),e.jsx(u,{name:"email",component:y})]}),e.jsxs(b,{children:[e.jsx(w,{children:"Phone"}),e.jsxs(v,{children:[e.jsx(f,{type:"phone",name:"phone",disabled:r.phone}),e.jsx(g,{onClick:()=>i("phone")}),e.jsx(p,{type:"submit",children:e.jsx(j,{})})]}),e.jsx(u,{name:"phone",component:y})]}),e.jsxs(b,{children:[e.jsx(w,{children:"Password"}),e.jsxs(v,{children:[e.jsx(f,{type:"password",name:"password",disabled:r.password,placeholder:"********"}),e.jsx(g,{onClick:()=>i("password")}),e.jsx(p,{type:"submit",children:e.jsx(j,{})})]}),e.jsx(u,{name:"email",component:y})]})]})})]})})]})})})},q=t.div`
  width: 100vw;
  margin-top: 76px;
`,J=t.div`
  width: 90%;
  margin: 0 auto;
`,K=t.section`
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #f0f0f0;
`,Q=t.section`
  flex: 1;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,W=t.h4`
  text-align: center;
`,X=t.section`
  flex: 2;
  color: #000;
`,Y=t.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  background: ${({src:o})=>o?`url(${o})`:"#c0c5cf"};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`,Z=t.div`
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
`,_=t.div`
  max-width: 500px;
  margin: 0 auto;
  color: #000;
  padding: 20px; /* Ajustado el padding */
`,b=t.div`
  width: 100%;
  margin-bottom: 20px;
`,f=t(D)`
  width: 100%;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  box-sizing: border-box;
`,w=t.label`
  font-size: 1.2rem;
  margin-bottom: 10px;
  display: block;
`,y=t.div`
  color: red;
`,v=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;export{te as default};
