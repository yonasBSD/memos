System.register(["./mui-vendor-legacy.DYmTMD2B.js","./app-legacy.CVYr41OX.js"],(function(e,a){"use strict";var t,s,c,n,r,l;return{setters:[e=>{t=e.j,s=e.S,c=e.a},e=>{n=e.m,r=e.u,l=e.N}],execute:function(){
/**
       * @license lucide-react v0.453.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */
const a=n("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),y=n("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),h=n("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]),p=n("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),o=["system","light","dark"];
/**
       * @license lucide-react v0.453.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */e("A",(e=>{const{onChange:a,value:n,className:l}=e,i=r();return t.jsx(s,{className:`!min-w-[10rem] w-auto whitespace-nowrap ${l??""}`,value:n,onChange:(e,t)=>{t&&(async e=>{a(e)})(t)},startDecorator:(e=>{const a="w-4 h-auto";return"light"===e?t.jsx(p,{className:a}):"dark"===e?t.jsx(y,{className:a}):t.jsx(h,{className:a})})(n),children:o.map((e=>t.jsx(c,{value:e,className:"whitespace-nowrap",children:i(`setting.appearance-option.${e}`)},e)))})})),e("L",(e=>{const{onChange:n,value:r,className:y}=e;return t.jsx(s,{className:`!min-w-[10rem] w-auto whitespace-nowrap ${y??""}`,startDecorator:t.jsx(a,{className:"w-4 h-auto"}),value:r,onChange:(e,a)=>(async e=>{n(e)})(a),children:l.map((e=>{try{const a=new Intl.DisplayNames([e],{type:"language"}).of(e);if(a)return t.jsx(c,{value:e,children:a.charAt(0).toUpperCase()+a.slice(1)},e)}catch(a){}return t.jsx(c,{value:e,children:e},e)}))})}))}}}));
