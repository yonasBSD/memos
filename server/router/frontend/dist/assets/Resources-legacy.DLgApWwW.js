System.register(["./mui-vendor-legacy.DYmTMD2B.js","./app-legacy.CVYr41OX.js","./mermaid-vendor-legacy.CXJ3QjYr.js","./react-vendor-legacy.dIDhV_HT.js","./utils-vendor-legacy.4FVC2SsJ.js","./highlight-vendor-legacy.CLg3VipY.js","./katex-vendor-legacy.C64AXX5g.js","./leaflet-vendor-legacy.DCz_1vRz.js"],(function(e,s){"use strict";var t,a,l,r,c,i,n,m,x,o,f,d,u,h,j,w,y,p,g,v;return{setters:[e=>{t=e.j,a=e.D,l=e.T},e=>{r=e.u,c=e.o,i=e.b,n=e.p,m=e.r,x=e.n,o=e.q,f=e.e,d=e.s,u=e.E,h=e.t,j=e.R,w=e.f,y=e.T},e=>{p=e.d},e=>{g=e.a},e=>{v=e.b},null,null,null],execute:function(){e("default",(()=>{const e=r(),{md:s}=c(),N=i(),[b,k]=g.useState({searchQuery:""}),T=n(),[z,D]=g.useState([]),F=z.filter((e=>v(e.filename,b.searchQuery))),M=function(e){const s=new Map;return e.sort(((e,s)=>p(s.createTime).unix()-p(e.createTime).unix())).forEach((e=>{const t=p(e.createTime).format("YYYY-MM");s.has(t)||s.set(t,[]),s.get(t)?.push(e)})),s}(F.filter((e=>e.memo))),Q=F.filter((e=>!e.memo));return g.useEffect((()=>{m.listResources({}).then((({resources:e})=>{D(e),N.setFinish(),Promise.all(e.map((e=>e.memo?T.getOrFetchMemoByName(e.memo):null)))}))}),[]),t.jsxs("section",{className:"@container w-full max-w-5xl min-h-full flex flex-col justify-start items-center sm:pt-3 md:pt-6 pb-8",children:[!s&&t.jsx(x,{}),t.jsx("div",{className:"w-full px-4 sm:px-6",children:t.jsxs("div",{className:"w-full shadow flex flex-col justify-start items-start px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 text-black dark:text-gray-300",children:[t.jsxs("div",{className:"relative w-full flex flex-row justify-between items-center",children:[t.jsxs("p",{className:"py-1 flex flex-row justify-start items-center select-none opacity-80",children:[t.jsx(o,{className:"w-6 h-auto mr-1 opacity-80"}),t.jsx("span",{className:"text-lg",children:e("common.resources")})]}),t.jsx("div",{children:t.jsx(f,{className:"max-w-[8rem]",placeholder:e("common.search"),startDecorator:t.jsx(d,{className:"w-4 h-auto"}),value:b.searchQuery,onChange:e=>k({...b,searchQuery:e.target.value})})})]}),t.jsx("div",{className:"w-full flex flex-col justify-start items-start mt-4 mb-6",children:N.isLoading?t.jsx("div",{className:"w-full h-32 flex flex-col justify-center items-center",children:t.jsx("p",{className:"w-full text-center text-base my-6 mt-8",children:e("resource.fetching-data")})}):t.jsx(t.Fragment,{children:0===F.length?t.jsxs("div",{className:"w-full mt-8 mb-8 flex flex-col justify-center items-center italic",children:[t.jsx(u,{}),t.jsx("p",{className:"mt-4 text-gray-600 dark:text-gray-400",children:e("message.no-data")})]}):t.jsxs("div",{className:"w-full h-auto px-2 flex flex-col justify-start items-start gap-y-8",children:[Array.from(M.entries()).map((([e,s])=>t.jsxs("div",{className:"w-full flex flex-row justify-start items-start",children:[t.jsxs("div",{className:"w-16 sm:w-24 pt-4 sm:pl-4 flex flex-col justify-start items-start",children:[t.jsx("span",{className:"text-sm opacity-60",children:p(e).year()}),t.jsx("span",{className:"font-medium text-xl",children:p(e).toDate().toLocaleString(h.language,{month:"short"})})]}),t.jsx("div",{className:"w-full max-w-[calc(100%-4rem)] sm:max-w-[calc(100%-6rem)] flex flex-row justify-start items-start gap-4 flex-wrap",children:s.map((e=>t.jsxs("div",{className:"w-24 sm:w-32 h-auto flex flex-col justify-start items-start",children:[t.jsx("div",{className:"w-24 h-24 flex justify-center items-center sm:w-32 sm:h-32 border dark:border-zinc-900 overflow-clip rounded-xl cursor-pointer hover:shadow hover:opacity-80",children:t.jsx(j,{resource:e,strokeWidth:.5})}),t.jsx("div",{className:"w-full max-w-full flex flex-row justify-between items-center mt-1 px-1",children:t.jsx("p",{className:"text-xs shrink text-gray-400 truncate",children:e.filename})})]},e.name)))})]},e))),Q.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(a,{}),t.jsxs("div",{className:"w-full flex flex-row justify-start items-start",children:[t.jsx("div",{className:"w-16 sm:w-24 sm:pl-4 flex flex-col justify-start items-start"}),t.jsxs("div",{className:"w-full max-w-[calc(100%-4rem)] sm:max-w-[calc(100%-6rem)] flex flex-row justify-start items-start gap-4 flex-wrap",children:[t.jsxs("div",{className:"w-full flex flex-row justify-start items-center gap-2",children:[t.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:e("resource.unused-resources")}),t.jsxs("span",{className:"text-gray-500 dark:text-gray-500 opacity-80",children:["(",Q.length,")"]}),t.jsx(l,{title:"Delete all",placement:"top",children:t.jsx(w,{size:"sm",variant:"plain",onClick:async()=>{if(window.confirm("Are you sure to delete all unused resources? This action cannot be undone.")){for(const e of Q)await m.deleteResource({name:e.name});D(z.filter((e=>e.memo)))}},children:t.jsx(y,{className:"w-4 h-auto opacity-60"})})})]}),Q.map((e=>t.jsxs("div",{className:"w-24 sm:w-32 h-auto flex flex-col justify-start items-start",children:[t.jsx("div",{className:"w-24 h-24 flex justify-center items-center sm:w-32 sm:h-32 border dark:border-zinc-900 overflow-clip rounded-xl cursor-pointer hover:shadow hover:opacity-80",children:t.jsx(j,{resource:e,strokeWidth:.5})}),t.jsx("div",{className:"w-full max-w-full flex flex-row justify-between items-center mt-1 px-1",children:t.jsx("p",{className:"text-xs shrink text-gray-400 truncate",children:e.filename})})]},e.name)))]})]})]})]})})})]})})]})}))}}}));
