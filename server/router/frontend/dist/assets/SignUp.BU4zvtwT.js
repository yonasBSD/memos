import{j as e}from"./mui-vendor.BwEHDYNi.js";import{u as y,a as N,b as v,w as u,e as d,f as k,L as b,g as S,i as C,h as L}from"./app.BmPucvBz.js";import{a as x,L as U}from"./react-vendor.DIaRSUZC.js";import{A as z}from"./AuthFooter.DLwdxxHu.js";import"./utils-vendor.gMQV7HrB.js";import"./mermaid-vendor.YaF7NM7v.js";import"./highlight-vendor.BCvQicfw.js";import"./katex-vendor.BOojJMwU.js";import"./leaflet-vendor.BDS7nALv.js";import"./LocaleSelect.qnFSfcoT.js";const D=()=>{var c,m;const s=y(),p=N(),a=v(!1),[l,f]=x.useState(""),[r,g]=x.useState(""),i=u.state.generalSetting,h=t=>{const o=t.target.value;f(o)},w=t=>{const o=t.target.value;g(o)},j=t=>{t.preventDefault(),n()},n=async()=>{if(!(l===""||r==="")&&!a.isLoading){try{a.setLoading(),await S.signUp({username:l,password:r}),await C(),p("/")}catch(t){console.error(t),L.error(t.details||"Sign up failed")}a.setFinish()}};return e.jsxs("div",{className:"py-4 sm:py-8 w-80 max-w-full min-h-[100svh] mx-auto flex flex-col justify-start items-center",children:[e.jsxs("div",{className:"w-full py-4 grow flex flex-col justify-center items-center",children:[e.jsxs("div",{className:"w-full flex flex-row justify-center items-center mb-6",children:[e.jsx("img",{className:"h-14 w-auto rounded-full shadow",src:((c=i.customProfile)==null?void 0:c.logoUrl)||"/logo.webp",alt:""}),e.jsx("p",{className:"ml-2 text-5xl text-black opacity-80 dark:text-gray-200",children:((m=i.customProfile)==null?void 0:m.title)||"Memos"})]}),i.disallowUserRegistration?e.jsx("p",{className:"w-full text-2xl mt-2 dark:text-gray-500",children:"Sign up is not allowed."}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"w-full text-2xl mt-2 dark:text-gray-500",children:s("auth.create-your-account")}),e.jsxs("form",{className:"w-full mt-2",onSubmit:j,children:[e.jsxs("div",{className:"flex flex-col justify-start items-start w-full gap-4",children:[e.jsxs("div",{className:"w-full flex flex-col justify-start items-start",children:[e.jsx("span",{className:"leading-8 text-gray-600",children:s("common.username")}),e.jsx(d,{className:"w-full bg-white dark:bg-black",size:"lg",type:"text",readOnly:a.isLoading,placeholder:s("common.username"),value:l,autoComplete:"username",autoCapitalize:"off",spellCheck:!1,onChange:h,required:!0})]}),e.jsxs("div",{className:"w-full flex flex-col justify-start items-start",children:[e.jsx("span",{className:"leading-8 text-gray-600",children:s("common.password")}),e.jsx(d,{className:"w-full bg-white dark:bg-black",size:"lg",type:"password",readOnly:a.isLoading,placeholder:s("common.password"),value:r,autoComplete:"password",autoCapitalize:"off",spellCheck:!1,onChange:w,required:!0})]})]}),e.jsx("div",{className:"flex flex-row justify-end items-center w-full mt-6",children:e.jsxs(k,{type:"submit",color:"primary",size:"lg",fullWidth:!0,disabled:a.isLoading,onClick:n,children:[s("common.sign-up"),a.isLoading&&e.jsx(b,{className:"w-5 h-auto ml-2 animate-spin opacity-60"})]})})]})]}),u.state.profile.owner?e.jsxs("p",{className:"w-full mt-4 text-sm",children:[e.jsx("span",{className:"dark:text-gray-500",children:s("auth.sign-in-tip")}),e.jsx(U,{to:"/auth",className:"cursor-pointer ml-2 text-blue-600 hover:underline",viewTransition:!0,children:s("common.sign-in")})]}):e.jsx("p",{className:"w-full mt-4 text-sm font-medium dark:text-gray-500",children:s("auth.host-tip")})]}),e.jsx(z,{})]})};export{D as default};
