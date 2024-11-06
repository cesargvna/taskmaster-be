import{d as e,j as o}from"./index-DO84e-pt.js";const n=e.svg`
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    stroke: green;
  }
`,d=e.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;

  &:hover {
    stroke: red;
  }
`,j=({onClick:t})=>o.jsxs(n,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",onClick:t,children:[o.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.jsx("path",{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"}),o.jsx("path",{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"}),o.jsx("path",{d:"M16 5l3 3"})]}),v=()=>o.jsxs(n,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",type:"submit",children:[o.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.jsx("path",{d:"M5 12l5 5l10 -10"})]}),g=({onClick:t})=>o.jsxs(d,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",onClick:t,children:[o.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.jsx("path",{d:"M4 7l16 0"}),o.jsx("path",{d:"M10 11l0 6"}),o.jsx("path",{d:"M14 11l0 6"}),o.jsx("path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"}),o.jsx("path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"})]}),w=({onClick:t})=>o.jsx(n,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",onClick:t,children:o.jsx("path",{d:"M19 13h-6v6a1 1 0 01-2 0v-6H5a1 1 0 010-2h6V5a1 1 0 012 0v6h6a1 1 0 010 2z"})}),f=({open:t,onClose:r,title:s,children:i})=>o.jsx(l,{open:t,children:o.jsxs(a,{children:[o.jsxs(h,{children:[o.jsx(c,{children:s}),o.jsx(x,{onClick:r,children:"×"})]}),o.jsx(p,{children:i})]})}),l=e.div`
  display: ${({open:t})=>t?"flex":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`,a=e.div`
  background-color: #fff;
  min-heigth: 400px;
  max-height: 600px;
  border-radius: 10px;
  padding: 20px;
  position: relative;
`,h=e.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,c=e.h2`
  margin: 0;
  font-size: 1.5rem;
`,x=e.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`,p=e.div`
  flex-grow: 1;
  overflow-y: auto;
`;export{j as I,f as M,v as a,w as b,g as c};
