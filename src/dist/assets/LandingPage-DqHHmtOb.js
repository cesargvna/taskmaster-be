import{d as n,j as e,L as o}from"./index-mUtK9teQ.js";const t=n.nav`
  background-color: #1a1a1a;
  width: 100%;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,s=n.h1`
  font-size: 1.5rem;
  margin: 0;
`,a=n.div`
  display: flex;
  gap: 1rem;
`,i=n.button`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
`,c=n.button`
  background-color: #00bfff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
`,d=()=>e.jsxs(t,{children:[e.jsx(s,{children:"Task Manager"}),e.jsxs(a,{children:[e.jsx(o,{to:"/login",children:e.jsx(i,{children:"Iniciar sesión"})}),e.jsx(o,{to:"/signup",children:e.jsx(c,{children:"Registrarse"})})]})]}),g=n.footer`
  width: 100%;
  background-color: #1a1a1a;
  color: #fff;
  padding: 1rem;
  text-align: center;
`,l=()=>e.jsx(g,{children:"© 2023 Task Manager. Todos los derechos reservados."}),x=n.div`
  width: 100vw;
  height: 100vh;
`,f=n.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`,p=n.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`,r=n.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`,j=()=>e.jsx(x,{children:e.jsxs(f,{children:[e.jsx(d,{}),e.jsxs(p,{children:[e.jsx(r,{src:"imagen1.jpg",alt:"Imagen 1"}),e.jsx(r,{src:"imagen2.jpg",alt:"Imagen 2"}),e.jsx(r,{src:"imagen3.jpg",alt:"Imagen 3"})]}),e.jsx(l,{})]})});export{j as default};
