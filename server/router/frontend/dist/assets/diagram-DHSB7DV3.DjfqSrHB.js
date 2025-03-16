import{p as w}from"./chunk-IUKPXING.BdDeEUI0.js";import{_ as s,s as B,g as S,v as F,t as z,a as P,b as W,G as v,L as T,f as A,A as D,H as _,I as E,l as x}from"./mermaid-vendor.YaF7NM7v.js";import{p as L}from"./gitGraph-YCYPL57B.CLAkp-Qp.js";import"./react-vendor.DIaRSUZC.js";import"./utils-vendor.gMQV7HrB.js";var C={packet:[]},m=structuredClone(C),N=E.packet,I=s(()=>{const t=v({...N,..._().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),Y=s(()=>m.packet,"getPacket"),G=s(t=>{t.length>0&&m.packet.push(t)},"pushWord"),H=s(()=>{D(),m=structuredClone(C)},"clear"),h={pushWord:G,getPacket:Y,getConfig:I,clear:H,setAccTitle:W,getAccTitle:P,setDiagramTitle:z,getDiagramTitle:F,getAccDescription:S,setAccDescription:B},M=1e4,O=s(t=>{w(t,h);let e=-1,o=[],n=1;const{bitsPerRow:i}=h.getConfig();for(let{start:r,end:a,label:p}of t.blocks){if(a&&a<r)throw new Error("Packet block ".concat(r," - ").concat(a," is invalid. End must be greater than start."));if(r!==e+1)throw new Error("Packet block ".concat(r," - ").concat(a!=null?a:r," is not contiguous. It should start from ").concat(e+1,"."));for(e=a!=null?a:r,x.debug("Packet block ".concat(r," - ").concat(e," with label ").concat(p));o.length<=i+1&&h.getPacket().length<M;){const[b,c]=K({start:r,end:a,label:p},n,i);if(o.push(b),b.end+1===n*i&&(h.pushWord(o),o=[],n++),!c)break;({start:r,end:a,label:p}=c)}}h.pushWord(o)},"populate"),K=s((t,e,o)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error("Block start ".concat(t.start," is greater than block end ").concat(t.end,"."));return t.end+1<=e*o?[t,void 0]:[{start:t.start,end:e*o-1,label:t.label},{start:e*o,end:t.end,label:t.label}]},"getNextFittingBlock"),R={parse:s(async t=>{const e=await L("packet",t);x.debug(e),O(e)},"parse")},U=s((t,e,o,n)=>{const i=n.db,r=i.getConfig(),{rowHeight:a,paddingY:p,bitWidth:b,bitsPerRow:c}=r,u=i.getPacket(),l=i.getDiagramTitle(),g=a+p,d=g*(u.length+1)-(l?0:a),k=b*c+2,f=T(e);f.attr("viewbox","0 0 ".concat(k," ").concat(d)),A(f,d,k,r.useMaxWidth);for(const[$,y]of u.entries())X(f,y,$,r);f.append("text").text(l).attr("x",k/2).attr("y",d-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),X=s((t,e,o,{rowHeight:n,paddingX:i,paddingY:r,bitWidth:a,bitsPerRow:p,showBits:b})=>{const c=t.append("g"),u=o*(n+r)+r;for(const l of e){const g=l.start%p*a+1,d=(l.end-l.start+1)*a-i;if(c.append("rect").attr("x",g).attr("y",u).attr("width",d).attr("height",n).attr("class","packetBlock"),c.append("text").attr("x",g+d/2).attr("y",u+n/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(l.label),!b)continue;const k=l.end===l.start,f=u-2;c.append("text").attr("x",g+(k?d/2:0)).attr("y",f).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(l.start),k||c.append("text").attr("x",g+d).attr("y",f).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(l.end)}},"drawWord"),j={draw:U},q={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},J=s(({packet:t}={})=>{const e=v(q,t);return"\n	.packetByte {\n		font-size: ".concat(e.byteFontSize,";\n	}\n	.packetByte.start {\n		fill: ").concat(e.startByteColor,";\n	}\n	.packetByte.end {\n		fill: ").concat(e.endByteColor,";\n	}\n	.packetLabel {\n		fill: ").concat(e.labelColor,";\n		font-size: ").concat(e.labelFontSize,";\n	}\n	.packetTitle {\n		fill: ").concat(e.titleColor,";\n		font-size: ").concat(e.titleFontSize,";\n	}\n	.packetBlock {\n		stroke: ").concat(e.blockStrokeColor,";\n		stroke-width: ").concat(e.blockStrokeWidth,";\n		fill: ").concat(e.blockFillColor,";\n	}\n	")},"styles"),at={parser:R,db:h,renderer:j,styles:J};export{at as diagram};
