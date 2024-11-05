import{k as j,l as s,m as g,u as f,j as e,F as v,E as n,d as o,c as p,a as y,b as h}from"./index-Dvao5RbO.js";import{c as k}from"./task.service-DIumFebm.js";const w=j({name:s().required("Nombre es requerido"),description:s().min(10,"La descripción debe tener al menos 10 caracteres").max(500,"La descripción no puede exceder los 500 caracteres"),fechaVencimiento:g().min(new Date,"La fecha debe ser futura"),priority:s().oneOf(["low","medium","high"],"Seleccione una prioridad válida"),status:s().oneOf(["pending","in_progress","completed"],"Seleccione un estado válido"),category:s().oneOf(["personal","work","student","other"],"Seleccione un estado válido")}),T=()=>{const u=f(),x={name:"",description:"",fechaVencimiento:"",priority:"low",status:"pending",category:"personal"},b=async r=>{const a={...r,description:r.description?r.description:null,fechaVencimiento:r.fechaVencimiento?r.fechaVencimiento:null};try{const{data:m}=await k(a);m.success&&(p.success("Tarea creada con éxito"),u("/protected/dashboard"))}catch{p.error("Error al crear la tarea")}};return e.jsx(v,{initialValues:x,validationSchema:w,onSubmit:b,children:({setFieldValue:r})=>e.jsxs(C,{children:[e.jsx("h2",{children:" Create Task"}),e.jsxs(F,{children:[e.jsxs(i,{children:[e.jsx(t,{htmlFor:"name",children:"Nombre"}),e.jsx(d,{id:"name",name:"name",type:"text"}),e.jsx(n,{name:"name",component:c})]}),e.jsxs(i,{children:[e.jsx(t,{htmlFor:"description",children:"Descripción"}),e.jsx(d,{id:"description",name:"description",as:"textarea",rows:"4"}),e.jsx(n,{name:"description",component:c})]}),e.jsxs(i,{children:[e.jsx(t,{htmlFor:"fechaVencimiento",children:"Fecha de Vencimiento"}),e.jsx(d,{id:"fechaVencimiento",name:"fechaVencimiento",type:"date"}),e.jsx(n,{name:"fechaVencimiento",component:c})]}),e.jsxs(i,{children:[e.jsx(t,{htmlFor:"priority",children:"Prioridad"}),e.jsxs(l,{id:"priority",name:"priority",as:"select",onChange:a=>{r("priority",a.target.value)},children:[e.jsx("option",{value:"",children:"Selecciona una prioridad"}),e.jsx("option",{value:"low",children:"Baja"}),e.jsx("option",{value:"medium",children:"Media"}),e.jsx("option",{value:"high",children:"Alta"})]}),e.jsx(n,{name:"priority",component:c})]}),e.jsxs(i,{children:[e.jsx(t,{htmlFor:"status",children:"Estado"}),e.jsxs(l,{id:"status",name:"status",as:"select",onChange:a=>{r("status",a.target.value)},children:[e.jsx("option",{value:"",children:"Selecciona un estado"}),e.jsx("option",{value:"pending",children:"Pendiente"}),e.jsx("option",{value:"in_progress",children:"En Progreso"}),e.jsx("option",{value:"completed",children:"Completada"})]}),e.jsx(n,{name:"status",component:c})]}),e.jsxs(i,{children:[e.jsx(t,{htmlFor:"category",children:"Categoría"}),e.jsxs(l,{id:"category",name:"category",as:"select",onChange:a=>{r("category",a.target.value)},children:[e.jsx("option",{value:"",children:"Selecciona una categoría"}),e.jsx("option",{value:"work",children:"Trabajo"}),e.jsx("option",{value:"personal",children:"Personal"}),e.jsx("option",{value:"student",children:"Estudio"}),e.jsx("option",{value:"other",children:"Otro"})]}),e.jsx(n,{name:"category",component:c})]}),e.jsx(S,{type:"submit",children:"Crear Tarea"})]})]})})},C=o.div`
  width: 100vw;
  height: calc(100vh - 70px);
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,F=o(y)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  width: 500px;
  max-width: 600px;
  max-height: 80vh; /* Define un máximo para la altura */
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;

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
`,i=o.div`
  display: flex;
  flex-direction: column;
`,t=o.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`,d=o(h)`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`,l=o(h)`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
`,c=o.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,S=o.button`
  padding: 0.75rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;export{T as default};
