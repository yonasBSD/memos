System.register(["./mui-vendor-legacy.DYmTMD2B.js","./app-legacy.CVYr41OX.js","./utils-vendor-legacy.4FVC2SsJ.js","./react-vendor-legacy.dIDhV_HT.js"],(function(e,s){"use strict";var a,t,l,i,r,o,n,c,d,m,u,f,g,p;return{setters:[e=>{a=e.j},e=>{t=e.u,l=e.a,i=e.b,r=e.w,o=e.e,n=e.d,c=e.f,d=e.L,m=e.g,u=e.i,f=e.h},e=>{g=e.o},e=>{p=e.a}],execute:function(){e("P",g((()=>{const e=t(),s=l(),g=i(!1),[x,h]=p.useState("demo"===r.state.profile.mode?"yourselfhosted":""),[j,y]=p.useState("demo"===r.state.profile.mode?"yourselfhosted":""),[w,v]=p.useState(!0),b=async()=>{if(""!==x&&""!==j&&!g.isLoading){try{g.setLoading(),await m.signIn({username:x,password:j,neverExpire:w}),await u(),s("/")}catch(e){console.error(e),f.error(e.details||"Failed to sign in.")}g.setFinish()}};return a.jsxs("form",{className:"w-full mt-2",onSubmit:e=>{e.preventDefault(),b()},children:[a.jsxs("div",{className:"flex flex-col justify-start items-start w-full gap-4",children:[a.jsxs("div",{className:"w-full flex flex-col justify-start items-start",children:[a.jsx("span",{className:"leading-8 text-gray-600",children:e("common.username")}),a.jsx(o,{className:"w-full bg-white dark:bg-black",size:"lg",type:"text",readOnly:g.isLoading,placeholder:e("common.username"),value:x,autoComplete:"username",autoCapitalize:"off",spellCheck:!1,onChange:e=>{const s=e.target.value;h(s)},required:!0})]}),a.jsxs("div",{className:"w-full flex flex-col justify-start items-start",children:[a.jsx("span",{className:"leading-8 text-gray-600",children:e("common.password")}),a.jsx(o,{className:"w-full bg-white dark:bg-black",size:"lg",type:"password",readOnly:g.isLoading,placeholder:e("common.password"),value:j,autoComplete:"password",autoCapitalize:"off",spellCheck:!1,onChange:e=>{const s=e.target.value;y(s)},required:!0})]})]}),a.jsx("div",{className:"flex flex-row justify-start items-center w-full mt-6",children:a.jsx(n,{label:e("common.remember-me"),checked:w,onChange:e=>v(e.target.checked)})}),a.jsx("div",{className:"flex flex-row justify-end items-center w-full mt-6",children:a.jsxs(c,{type:"submit",color:"primary",size:"lg",fullWidth:!0,disabled:g.isLoading,onClick:b,children:[e("common.sign-in"),g.isLoading&&a.jsx(d,{className:"w-5 h-auto ml-2 animate-spin opacity-60"})]})})]})})))}}}));
