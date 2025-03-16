import{j as t,S as i,a as y}from"./mui-vendor.BwEHDYNi.js";import{m as o,u as m,N as u}from"./app.BmPucvBz.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=o("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=o("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=o("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=o("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),j=["system","light","dark"],M=h=>{const{onChange:l,value:r,className:n}=h,p=m(),e=a=>{const c="w-4 h-auto";return a==="light"?t.jsx(g,{className:c}):a==="dark"?t.jsx(x,{className:c}):t.jsx(k,{className:c})},s=async a=>{l(a)};return t.jsx(i,{className:"!min-w-[10rem] w-auto whitespace-nowrap ".concat(n!=null?n:""),value:r,onChange:(a,c)=>{c&&s(c)},startDecorator:e(r),children:j.map(a=>t.jsx(y,{value:a,className:"whitespace-nowrap",children:p("setting.appearance-option.".concat(a))},a))})},f=h=>{const{onChange:l,value:r,className:n}=h,p=async e=>{l(e)};return t.jsx(i,{className:"!min-w-[10rem] w-auto whitespace-nowrap ".concat(n!=null?n:""),startDecorator:t.jsx(d,{className:"w-4 h-auto"}),value:r,onChange:(e,s)=>p(s),children:u.map(e=>{try{const s=new Intl.DisplayNames([e],{type:"language"}).of(e);if(s)return t.jsx(y,{value:e,children:s.charAt(0).toUpperCase()+s.slice(1)},e)}catch(s){}return t.jsx(y,{value:e,children:e},e)})})};export{M as A,f as L};
