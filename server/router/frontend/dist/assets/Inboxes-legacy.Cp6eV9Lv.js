System.register(["./mui-vendor-legacy.DYmTMD2B.js","./utils-vendor-legacy.4FVC2SsJ.js","./react-vendor-legacy.dIDhV_HT.js","./app-legacy.CVYr41OX.js","./message-circle-legacy.B9iB2NZT.js","./mermaid-vendor-legacy.CXJ3QjYr.js","./highlight-vendor-legacy.CLg3VipY.js","./katex-vendor-legacy.C64AXX5g.js","./leaflet-vendor-legacy.DCz_1vRz.js"],(function(e,t){"use strict";var s,a,l,r,i,c,n,o,m,x,d,u,f,y,j,g,h,p,v,b,w,N,k;return{setters:[e=>{s=e.j,a=e.T},e=>{l=e.o,r=e.s},e=>{i=e.a},e=>{c=e.m,n=e.u,o=e.a,m=e.p,x=e.C,d=e.F,u=e.G,f=e.A,y=e.c,j=e.H,g=e.L,h=e.V,p=e.o,v=e.n,b=e.J,w=e.E,N=e.K},e=>{k=e.M},null,null,null,null],execute:function(){
/**
       * @license lucide-react v0.453.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
const t=c("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]),E=({inbox:e})=>{const l=n(),r=o(),c=m(),[p,v]=i.useState(void 0),[b,w]=i.useState(void 0),[N,E]=i.useState(!1);x((async()=>{if(!e.activityId)return;const t=await d.getActivity({name:`${u}${e.activityId}`});if(t.payload?.memoComment){const s=t.payload.memoComment,a=await c.getOrFetchMemoByName(s.relatedMemo,{skipStore:!0});v(a);const l=await f.getOrFetchUserByName(e.sender);w(l),E(!0)}}),[e.activityId]);const A=async(t=!1)=>{await f.updateInbox({name:e.name,status:j.ARCHIVED},["status"]),t||h.success(l("message.archived-successfully"))};return s.jsxs("div",{className:"w-full flex flex-row justify-start items-start gap-3",children:[s.jsx("div",{className:y("shrink-0 mt-2 p-2 rounded-full border",e.status===j.UNREAD?"border-blue-600 text-blue-600 bg-blue-50 dark:bg-zinc-800":"border-gray-500 text-gray-500 bg-gray-50 dark:bg-zinc-800"),children:s.jsx(a,{title:"Comment",placement:"bottom",children:s.jsx(k,{className:"w-4 sm:w-5 h-auto"})})}),s.jsx("div",{className:y("border w-full p-2 px-3 rounded-lg flex flex-col justify-start items-start gap-1 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-700",e.status!==j.UNREAD&&"opacity-60"),children:N?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"w-full flex flex-row justify-between items-center",children:[s.jsx("span",{className:"text-sm text-gray-500",children:e.createTime?.toLocaleString()}),s.jsx("div",{children:e.status===j.UNREAD&&s.jsx(a,{title:l("common.archive"),placement:"top",children:s.jsx(t,{className:"w-4 h-auto cursor-pointer text-gray-400 hover:text-blue-600",onClick:()=>A()})})})]}),s.jsx("p",{className:"text-base leading-tight cursor-pointer text-gray-500 dark:text-gray-400 hover:underline hover:text-blue-600",onClick:async()=>{p&&(r(`/${p.name}`),e.status===j.UNREAD&&A(!0))},children:l("inbox.memo-comment",{user:b?.nickname||b?.username,memo:p?.name,interpolation:{escapeValue:!1}})})]}):s.jsx("div",{className:"w-full flex flex-row justify-center items-center my-2",children:s.jsx(g,{className:"animate-spin text-zinc-500"})})})]})};e("default",l((()=>{const e=n(),{md:t}=p(),a=r(f.state.inboxes,(e=>e.status===j.UNREAD?0:e.status===j.ARCHIVED?1:2));return i.useEffect((()=>{f.fetchInboxes()}),[]),s.jsxs("section",{className:"@container w-full max-w-5xl min-h-full flex flex-col justify-start items-center sm:pt-3 md:pt-6 pb-8",children:[!t&&s.jsx(v,{}),s.jsx("div",{className:"w-full px-4 sm:px-6",children:s.jsxs("div",{className:"w-full shadow flex flex-col justify-start items-start px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 text-black dark:text-gray-300",children:[s.jsx("div",{className:"relative w-full flex flex-row justify-between items-center",children:s.jsxs("p",{className:"py-1 flex flex-row justify-start items-center select-none opacity-80",children:[s.jsx(b,{className:"w-6 h-auto mr-1 opacity-80"}),s.jsx("span",{className:"text-lg",children:e("common.inbox")})]})}),s.jsxs("div",{className:"w-full h-auto flex flex-col justify-start items-start px-2 pb-4",children:[0===a.length&&s.jsxs("div",{className:"w-full mt-4 mb-8 flex flex-col justify-center items-center italic",children:[s.jsx(w,{}),s.jsx("p",{className:"mt-4 text-gray-600 dark:text-gray-400",children:e("message.no-data")})]}),s.jsx("div",{className:"flex flex-col justify-start items-start w-full mt-4 gap-4",children:a.map((e=>{if(e.type===N.MEMO_COMMENT)return s.jsx(E,{inbox:e},`${e.name}-${e.status}`)}))})]})]})})]})})))}}}));
