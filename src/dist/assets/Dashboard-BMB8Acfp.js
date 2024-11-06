import{d as r,r as p,j as e,F as q,a as K,B as m,E as f,b as Q,c as k,u as U,A}from"./index-Ckew7bru.js";import{I as b,a as y,b as W,c as N,M as X}from"./Modal-4R-Pd6I8.js";import{u as Y,c as Z,g as ee,d as ne,s as oe}from"./task.service--ChJW9oM.js";const re=({task:n})=>{const[c,h]=p.useState({name:!0,description:!0,fechaVencimiento:!0,priority:!0,status:!0,category:!0}),a=t=>{h(s=>({...s,[t]:!s[t]}))},l=async t=>{const s={...t,description:t.description?t.description:null,fechaVencimiento:t.fechaVencimiento?t.fechaVencimiento:null};try{(await Y(""+(n==null?void 0:n.id),s)).data&&k.success("Task updated successfully")}catch{k.error("Error updating task")}},u={name:(n==null?void 0:n.name)||"",description:(n==null?void 0:n.description)||"",fechaVencimiento:(n==null?void 0:n.fechaVencimiento)||"",priority:(n==null?void 0:n.priority)||"",status:(n==null?void 0:n.status)||"",category:(n==null?void 0:n.category)||""};return e.jsx(te,{children:e.jsx(ie,{children:e.jsx(se,{children:e.jsx(q,{enableReinitialize:!0,initialValues:u,onSubmit:t=>{l(t)},children:({setFieldValue:t})=>e.jsx(K,{children:e.jsxs(ae,{children:[e.jsxs(de,{children:[e.jsxs(C,{children:[e.jsx(w,{children:"Name"}),e.jsxs(S,{children:[e.jsx(v,{type:"name",name:"name",disabled:c.name}),e.jsx(b,{onClick:()=>a("name")}),e.jsx(m,{type:"submit",children:e.jsx(y,{})})]}),e.jsx(f,{name:"name",component:I})]}),e.jsxs(C,{children:[e.jsx(w,{children:"Description"}),e.jsxs(S,{children:[e.jsx(v,{as:"textarea",name:"description",disabled:c.description}),e.jsx(b,{onClick:()=>a("description")}),e.jsx(m,{type:"submit",children:e.jsx(y,{})})]}),e.jsx(f,{name:"description",component:I})]}),e.jsxs(C,{children:[e.jsx(w,{children:"Fecha de Vencimiento"}),e.jsxs(S,{children:[e.jsx(v,{type:"date",name:"fechaVencimiento",disabled:c.fechaVencimiento}),e.jsx(b,{onClick:()=>a("fechaVencimiento")}),e.jsx(m,{type:"submit",children:e.jsx(y,{})})]}),e.jsx(f,{name:"fechaVencimiento",component:I})]})]}),e.jsxs(ce,{children:[e.jsxs(C,{children:[e.jsx(w,{children:"State"}),e.jsxs(S,{children:[e.jsxs(v,{as:"select",name:"status",disabled:c.status,onChange:s=>{t("status",s.target.value)},children:[e.jsx("option",{value:"",children:n==null?void 0:n.status}),e.jsx("option",{value:"pending",children:"Do"}),e.jsx("option",{value:"in_progress",children:"In Progress"}),e.jsx("option",{value:"completed",children:"Done"})]}),e.jsx(b,{onClick:()=>a("status")}),e.jsx(m,{type:"submit",children:e.jsx(y,{})})]}),e.jsx(f,{name:"status",component:I})]}),e.jsxs(C,{children:[e.jsx(w,{children:"Prioriry"}),e.jsxs(S,{children:[e.jsxs(v,{as:"select",name:"priority",disabled:c.priority,onChange:s=>{t("priority",s.target.value)},children:[e.jsx("option",{value:"",children:n==null?void 0:n.priority}),e.jsx("option",{value:"low",children:"Baja"}),e.jsx("option",{value:"medium",children:"Media"}),e.jsx("option",{value:"high",children:"Alta"})]}),e.jsx(b,{onClick:()=>a("priority")}),e.jsx(m,{type:"submit",children:e.jsx(y,{})})]}),e.jsx(f,{name:"priority",component:I})]}),e.jsxs(C,{children:[e.jsx(w,{children:"Category"}),e.jsxs(S,{children:[e.jsxs(v,{as:"select",name:"category",disabled:c.category,onChange:s=>{t("category",s.target.value)},children:[e.jsx("option",{value:"",children:n==null?void 0:n.category}),e.jsx("option",{value:"personal",children:"Personal"}),e.jsx("option",{value:"work",children:"Trabajo"}),e.jsx("option",{value:"student",children:"Estudio"}),e.jsx("option",{value:"other",children:"Otros"})]}),e.jsx(b,{onClick:()=>a("category")}),e.jsx(m,{type:"submit",children:e.jsx(y,{})})]}),e.jsx(f,{name:"priority",component:I})]})]})]})})})})})})},te=r.section`
  width: 700px;
  display: flex;
  flex-wrap: wrap;
`,ie=r.section`
  width: 100%;
  color: #000;
`,se=r.div`
  margin: 0 auto;
  color: #000;
  padding: 20px; /* Ajustado el padding */
`,ae=r.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`,ce=r.div`
  flex: 1;
`,de=r.div`
  flex: 1;
`,C=r.div`
  width: 100%;
  margin-bottom: 20px;
`,v=r(Q)`
  width: 100%;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  box-sizing: border-box;
`,w=r.label`
  font-size: 1.2rem;
  margin-bottom: 10px;
  display: block;
`,I=r.div`
  color: red;
`,S=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,le=({setOrder:n,setSearch:c,search:h})=>{const a=U(),[l,u]=p.useState({priority:"",category:"",fechaVencimiento:""}),t=i=>{c(i.target.value)},s=i=>{console.log(i.target.value)},j=i=>{const d={...l,category:i.target.value};u(d),n(d)},E=i=>{const d={...l,priority:i.target.value};u(d),n(d)},g=i=>{const d={...l,fechaVencimiento:i.target.value};u(d),n(d)},V=()=>{a("/protected/tasks",{replace:!0})};return e.jsxs(pe,{children:[e.jsx(xe,{children:e.jsx(he,{type:"text",placeholder:"Search",value:h,onChange:t})}),e.jsxs(O,{onChange:s,children:[e.jsx("option",{value:"all",children:"Status"}),e.jsx("option",{value:"completed",children:"Completed"}),e.jsx("option",{value:"in_progress",children:"En Progreso"}),e.jsx("option",{value:"pending",children:"Pendiente"})]}),e.jsxs(O,{value:l.category,onChange:j,children:[e.jsx("option",{value:"",children:"Category"}),e.jsx("option",{value:"work",children:"Trabajo"}),e.jsx("option",{value:"personal",children:"Personal"}),e.jsx("option",{value:"student",children:"Estudio"}),e.jsx("option",{value:"other",children:"Otro"})]}),e.jsxs(O,{value:l.priority,onChange:E,children:[e.jsx("option",{value:"",children:"Priority"}),e.jsx("option",{value:"low",children:"Baja"}),e.jsx("option",{value:"medium",children:"Medio"}),e.jsx("option",{value:"high",children:"Alta"})]}),e.jsx(ue,{value:l.fechaVencimiento,type:"date",onChange:g}),e.jsx(W,{onClick:V})]})},pe=r.div`
  width: 100%;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`,xe=r.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,he=r.input`
  padding: 5px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  width: 300px;
  background-color: #2d2d2d;
  color: #fff;
  margin-right: 10px;
  outline: none;
`,ue=r.input`
  max-width: 200px;
  padding: 5px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #2d2d2d;
  color: #fff;
  margin-right: 10px;
  outline: none;
`,O=r.select`
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: #2d2d2d;
  color: #fff;
  outline: none;
`,ke=()=>{const[n,c]=p.useState(!1),[h,a]=p.useState(!1),[l,u]=p.useState(null),[t,s]=p.useState([]),[j,E]=p.useState(null),[g,V]=p.useState(""),[i,d]=p.useState({priority:"",category:"",fechaVencimiento:""}),P=o=>{o&&u(o),c(!n)},G=async()=>{j&&await Z(j),z(),a(!h),E({name:""})},z=async()=>{const{data:o}=await ee();o.data&&s(o.data)},D=async o=>{try{const x=await ne(o);x.data.success&&(k.success(x.data.message),z())}catch{k.error("Error al eliminar la tarea")}},J=async()=>{try{const{data:o}=await oe(i);o.data&&s(o.data)}catch{k.error("No se encontraron tareas con esos criterios."),d({priority:"",category:"",fechaVencimiento:""})}},_=async()=>{t&&s(t.filter(o=>o.name.toLowerCase().includes(g)))};p.useEffect(()=>{i.priority||i.category||i.fechaVencimiento?J():g?_():z()},[g,i.category,i.priority,i.fechaVencimiento]);const H=e.jsx(T,{children:e.jsxs(be,{children:[e.jsx(Ce,{type:"text",placeholder:"Issue Name",onChange:o=>E({name:o.target.value})}),e.jsxs(ye,{children:[e.jsx(ve,{onClick:()=>a(!h),children:"Cancel"}),e.jsx(we,{onClick:G,children:"Create"})]})]})}),$=e.jsx(T,{onClick:()=>a(!h),children:e.jsx(fe,{children:"+ Create Issue"})});return e.jsxs(je,{children:[e.jsx(ge,{children:e.jsx(le,{setOrder:d,setSearch:V,search:g})}),e.jsxs(me,{children:[e.jsx(B,{children:e.jsxs(M,{children:[e.jsx("h2",{children:"DO"}),t&&t.map(o=>o.status==="pending"?e.jsx(T,{onClick:()=>P(o),children:e.jsxs(F,{children:[e.jsxs(L,{children:[" ",o.name]}),e.jsxs(R,{children:[e.jsx(N,{onClick:x=>{x.stopPropagation(),D(""+o.id)}}),e.jsx(A,{size:20,name:"Juan Perez",handleClick:()=>console.log("")})]})]})},o.id):null),h?H:$]})}),e.jsx(B,{children:e.jsxs(M,{children:[e.jsx("h2",{children:"IN PROGRESS"}),t&&t.map(o=>o.status==="in_progress"?e.jsx(T,{onClick:()=>P(o),children:e.jsxs(F,{children:[e.jsxs(L,{children:[" ",o.name]}),e.jsxs(R,{children:[e.jsx(N,{onClick:x=>{x.stopPropagation(),D(""+(o==null?void 0:o.id))}}),e.jsx(A,{size:20,name:"Juan Perez",handleClick:()=>console.log("")})]})]})},o.id):null)]})}),e.jsx(B,{children:e.jsxs(M,{children:[e.jsx("h2",{children:"DONE"}),t&&t.map(o=>o.status==="completed"?e.jsx(T,{onClick:()=>P(o),children:e.jsxs(F,{children:[e.jsxs(L,{children:[" ",o.name]}),e.jsxs(R,{children:[e.jsx(N,{onClick:x=>{x.stopPropagation(),D(""+o.id)}}),e.jsx(A,{size:20,name:"Juan Perez",handleClick:()=>console.log("")})]})]})},o.id):null)]})})]}),e.jsx(X,{title:"Issue Info",open:n,onClose:()=>c(!n),children:e.jsx(re,{task:l})})]})},je=r.div`
  margin-top: 70px;
  width: 100vw;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
`,ge=r.div`
  width: 90%;
  margin: 0 auto;
  position: sticky;
  top: 0;
  z-index: 0;
  padding: 10px 0;
`,me=r.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  padding: 10px;
  flex-grow: 1;
`,B=r.div`
  width: 100%;
  min-width: 300px;
  border-radius: 5px;

  /* Título de la columna (estático) */
  h2 {
    position: sticky;
    background-color: #f9f9f9;
    border-radius: 5px;
    top: 0;
    padding: 10px;
    width: 100%;
    text-align: center;
    z-index: 5;
  }
`,M=r.div`
  width: 100%;
  max-height: 450px; /* Ajusta esta altura según sea necesario */

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px; /* Ancho del scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #e0e0e0; /* Color del fondo del track */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #00c4cc; /* Color de la barra */
    border-radius: 10px;
    border: 2px solid #e0e0e0; /* Espacio entre la barra y el track */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #009fa8; /* Color cuando se pasa el cursor por la barra */
  }
`,T=r.div`
  margin-top: 10px;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);

  &:hover {
    background-color: #e8e8e8;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  }
`,F=r.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`,L=r.p`
  font-size: 1rem;
  font-weight: 400;
`,R=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,fe=r.span`
  font-size: 1rem;
  display: flex;
  justify-content: center;
`,be=r.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,ye=r.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`,Ce=r.input`
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
`,ve=r.button`
  border: none;
  border-radius: 5px;
  padding: 5px;
  background-color: #e57373;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #c62828;
  }
`,we=r.button`
  border: none;
  border-radius: 5px;
  padding: 5px;
  background-color: #00c4cc;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #009fa8;
  }
`;export{ke as default};
