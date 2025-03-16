System.register(["./chunk-4IRHCMPZ-legacy.BgxbFe04.js","./mermaid-vendor-legacy.CXJ3QjYr.js","./graph-legacy.FlF_t-Ri.js","./layout-legacy.BBfE06kv.js","./chunk-2O5F6CEG-legacy.oxKmSZ3d.js","./react-vendor-legacy.dIDhV_HT.js","./utils-vendor-legacy.4FVC2SsJ.js"],(function(t,e){"use strict";var a,i,n,r,d,s,o,g,c,h,l,p,x,u;return{setters:[t=>{a=t.s,i=t.a,n=t.S},t=>{r=t._,d=t.c,s=t.e,o=t.l,g=t.f,c=t.m,h=t.V,l=t.a0,p=t.u},t=>{x=t.G},t=>{u=t.l},null,null,null],execute:function(){var e,f={},y=r(((t,e)=>{f[t]=e}),"set"),w=r((t=>f[t]),"get"),m=r((()=>Object.keys(f)),"keys"),b=r((()=>m().length),"size"),B={get:w,set:y,keys:m,size:b},k=r((t=>t.append("circle").attr("class","start-state").attr("r",d().state.sizeUnit).attr("cx",d().state.padding+d().state.sizeUnit).attr("cy",d().state.padding+d().state.sizeUnit)),"drawStartState"),S=r((t=>t.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",d().state.textHeight).attr("class","divider").attr("x2",2*d().state.textHeight).attr("y1",0).attr("y2",0)),"drawDivider"),E=r(((t,e)=>{const a=t.append("text").attr("x",2*d().state.padding).attr("y",d().state.textHeight+2*d().state.padding).attr("font-size",d().state.fontSize).attr("class","state-title").text(e.id),i=a.node().getBBox();return t.insert("rect",":first-child").attr("x",d().state.padding).attr("y",d().state.padding).attr("width",i.width+2*d().state.padding).attr("height",i.height+2*d().state.padding).attr("rx",d().state.radius),a}),"drawSimpleState"),N=r(((t,e)=>{const a=r((function(t,e,a){const i=t.append("tspan").attr("x",2*d().state.padding).text(e);a||i.attr("dy",d().state.textHeight)}),"addTspan"),i=t.append("text").attr("x",2*d().state.padding).attr("y",d().state.textHeight+1.3*d().state.padding).attr("font-size",d().state.fontSize).attr("class","state-title").text(e.descriptions[0]).node().getBBox(),n=i.height,s=t.append("text").attr("x",d().state.padding).attr("y",n+.4*d().state.padding+d().state.dividerMargin+d().state.textHeight).attr("class","state-description");let o=!0,g=!0;e.descriptions.forEach((function(t){o||(a(s,t,g),g=!1),o=!1}));const c=t.append("line").attr("x1",d().state.padding).attr("y1",d().state.padding+n+d().state.dividerMargin/2).attr("y2",d().state.padding+n+d().state.dividerMargin/2).attr("class","descr-divider"),h=s.node().getBBox(),l=Math.max(h.width,i.width);return c.attr("x2",l+3*d().state.padding),t.insert("rect",":first-child").attr("x",d().state.padding).attr("y",d().state.padding).attr("width",l+2*d().state.padding).attr("height",h.height+n+2*d().state.padding).attr("rx",d().state.radius),t}),"drawDescrState"),v=r(((t,e,a)=>{const i=d().state.padding,n=2*d().state.padding,r=t.node().getBBox(),s=r.width,o=r.x,g=t.append("text").attr("x",0).attr("y",d().state.titleShift).attr("font-size",d().state.fontSize).attr("class","state-title").text(e.id),c=g.node().getBBox().width+n;let h,l=Math.max(c,s);l===s&&(l+=n);const p=t.node().getBBox();e.doc,h=o-i,c>s&&(h=(s-l)/2+i),Math.abs(o-p.x)<i&&c>s&&(h=o-(c-s)/2);const x=1-d().state.textHeight;return t.insert("rect",":first-child").attr("x",h).attr("y",x).attr("class",a?"alt-composit":"composit").attr("width",l).attr("height",p.height+d().state.textHeight+d().state.titleShift+1).attr("rx","0"),g.attr("x",h+i),c<=s&&g.attr("x",o+(l-n)/2-c/2+i),t.insert("rect",":first-child").attr("x",h).attr("y",d().state.titleShift-d().state.textHeight-d().state.padding).attr("width",l).attr("height",3*d().state.textHeight).attr("rx",d().state.radius),t.insert("rect",":first-child").attr("x",h).attr("y",d().state.titleShift-d().state.textHeight-d().state.padding).attr("width",l).attr("height",p.height+3+2*d().state.textHeight).attr("rx",d().state.radius),t}),"addTitleAndBox"),M=r((t=>(t.append("circle").attr("class","end-state-outer").attr("r",d().state.sizeUnit+d().state.miniPadding).attr("cx",d().state.padding+d().state.sizeUnit+d().state.miniPadding).attr("cy",d().state.padding+d().state.sizeUnit+d().state.miniPadding),t.append("circle").attr("class","end-state-inner").attr("r",d().state.sizeUnit).attr("cx",d().state.padding+d().state.sizeUnit+2).attr("cy",d().state.padding+d().state.sizeUnit+2))),"drawEndState"),z=r(((t,e)=>{let a=d().state.forkWidth,i=d().state.forkHeight;if(e.parentId){let t=a;a=i,i=t}return t.append("rect").style("stroke","black").style("fill","black").attr("width",a).attr("height",i).attr("x",d().state.padding).attr("y",d().state.padding)}),"drawForkJoinState"),H=r(((t,e,a,i)=>{let n=0;const r=i.append("text");r.style("text-anchor","start"),r.attr("class","noteText");let s=t.replace(/\r\n/g,"<br/>");s=s.replace(/\n/g,"<br/>");const o=s.split(c.lineBreakRegex);let g=1.25*d().state.noteMargin;for(const c of o){const t=c.trim();if(t.length>0){const i=r.append("tspan");i.text(t),0===g&&(g+=i.node().getBBox().height),n+=g,i.attr("x",e+d().state.noteMargin),i.attr("y",a+n+1.25*d().state.noteMargin)}}return{textWidth:r.node().getBBox().width,textHeight:n}}),"_drawLongText"),T=r(((t,e)=>{e.attr("class","state-note");const a=e.append("rect").attr("x",0).attr("y",d().state.padding),i=e.append("g"),{textWidth:n,textHeight:r}=H(t,0,0,i);return a.attr("height",r+2*d().state.noteMargin),a.attr("width",n+2*d().state.noteMargin),a}),"drawNote"),D=r((function(t,e){const a=e.id,i={id:a,label:e.id,width:0,height:0},n=t.append("g").attr("id",a).attr("class","stateGroup");"start"===e.type&&k(n),"end"===e.type&&M(n),"fork"!==e.type&&"join"!==e.type||z(n,e),"note"===e.type&&T(e.note.text,n),"divider"===e.type&&S(n),"default"===e.type&&0===e.descriptions.length&&E(n,e),"default"===e.type&&e.descriptions.length>0&&N(n,e);const r=n.node().getBBox();return i.width=r.width+2*d().state.padding,i.height=r.height+2*d().state.padding,B.set(a,i),i}),"drawState"),G=0,L=r((function(t,e,a){const i=r((function(t){switch(t){case n.relationType.AGGREGATION:return"aggregation";case n.relationType.EXTENSION:return"extension";case n.relationType.COMPOSITION:return"composition";case n.relationType.DEPENDENCY:return"dependency"}}),"getRelationType");e.points=e.points.filter((t=>!Number.isNaN(t.y)));const s=e.points,g=h().x((function(t){return t.x})).y((function(t){return t.y})).curve(l),x=t.append("path").attr("d",g(s)).attr("id","edge"+G).attr("class","transition");let u="";if(d().state.arrowMarkerAbsolute&&(u=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,u=u.replace(/\(/g,"\\("),u=u.replace(/\)/g,"\\)")),x.attr("marker-end","url("+u+"#"+i(n.relationType.DEPENDENCY)+"End)"),void 0!==a.title){const i=t.append("g").attr("class","stateLabel"),{x:n,y:r}=p.calcLabelPosition(e.points),s=c.getRows(a.title);let g=0;const h=[];let l=0,x=0;for(let t=0;t<=s.length;t++){const e=i.append("text").attr("text-anchor","middle").text(s[t]).attr("x",n).attr("y",r+g),a=e.node().getBBox();if(l=Math.max(l,a.width),x=Math.min(x,a.x),o.info(a.x,n,r+g),0===g){const t=e.node().getBBox();g=t.height,o.info("Title height",g,r)}h.push(e)}let u=g*s.length;if(s.length>1){const t=(s.length-1)*g*.5;h.forEach(((e,a)=>e.attr("y",r+a*g-t))),u=g*s.length}const f=i.node().getBBox();i.insert("rect",":first-child").attr("class","box").attr("x",n-l/2-d().state.padding/2).attr("y",r-u/2-d().state.padding/2-3.5).attr("width",l+d().state.padding).attr("height",u+d().state.padding),o.info(f)}G++}),"drawEdge"),O={},j=r((function(){}),"setConf"),A=r((function(t){t.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")}),"insertMarkers"),P=r((function(t,a,i,n){e=d().state;const r=d().securityLevel;let c;"sandbox"===r&&(c=s("#i"+a));const h=s("sandbox"===r?c.nodes()[0].contentDocument.body:"body"),l="sandbox"===r?c.nodes()[0].contentDocument:document;o.debug("Rendering diagram "+t);const p=h.select(`[id='${a}']`);A(p);const x=n.db.getRootDoc();C(x,p,void 0,!1,h,l,n);const u=e.padding,f=p.node().getBBox(),y=f.width+2*u,w=f.height+2*u;g(p,w,1.75*y,e.useMaxWidth),p.attr("viewBox",`${f.x-e.padding}  ${f.y-e.padding} `+y+" "+w)}),"draw"),R=r((t=>t?t.length*e.fontSizeFactor:1),"getLabelWidth"),C=r(((t,a,i,n,r,d,s)=>{const g=new x({compound:!0,multigraph:!0});let h,l=!0;for(h=0;h<t.length;h++)if("relation"===t[h].stmt){l=!1;break}i?g.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:l?1:e.edgeLengthFactor,nodeSep:l?1:50,isMultiGraph:!0}):g.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:l?1:e.edgeLengthFactor,nodeSep:l?1:50,ranker:"tight-tree",isMultiGraph:!0}),g.setDefaultEdgeLabel((function(){return{}}));const p=s.db.getStates(),f=s.db.getRelations(),y=Object.keys(p);for(const o of y){const t=p[o];let c;if(i&&(t.parentId=i),t.doc){let i=a.append("g").attr("id",t.id).attr("class","stateGroup");c=C(t.doc,i,t.id,!n,r,d,s);{i=v(i,t,n);let a=i.node().getBBox();c.width=a.width,c.height=a.height+e.padding/2,O[t.id]={y:e.compositTitleSize}}}else c=D(a,t,g);if(t.note){const e={descriptions:[],id:t.id+"-note",note:t.note,type:"note"},i=D(a,e,g);"left of"===t.note.position?(g.setNode(c.id+"-note",i),g.setNode(c.id,c)):(g.setNode(c.id,c),g.setNode(c.id+"-note",i)),g.setParent(c.id,c.id+"-group"),g.setParent(c.id+"-note",c.id+"-group")}else g.setNode(c.id,c)}o.debug("Count=",g.nodeCount(),g);let w=0;f.forEach((function(t){w++,o.debug("Setting edge",t),g.setEdge(t.id1,t.id2,{relation:t,width:R(t.title),height:e.labelHeight*c.getRows(t.title).length,labelpos:"c"},"id"+w)})),u(g),o.debug("Graph after layout",g.nodes());const m=a.node();g.nodes().forEach((function(t){void 0!==t&&void 0!==g.node(t)?(o.warn("Node "+t+": "+JSON.stringify(g.node(t))),r.select("#"+m.id+" #"+t).attr("transform","translate("+(g.node(t).x-g.node(t).width/2)+","+(g.node(t).y+(O[t]?O[t].y:0)-g.node(t).height/2)+" )"),r.select("#"+m.id+" #"+t).attr("data-x-shift",g.node(t).x-g.node(t).width/2),d.querySelectorAll("#"+m.id+" #"+t+" .divider").forEach((t=>{const e=t.parentElement;let a=0,i=0;e&&(e.parentElement&&(a=e.parentElement.getBBox().width),i=parseInt(e.getAttribute("data-x-shift"),10),Number.isNaN(i)&&(i=0)),t.setAttribute("x1",0-i+8),t.setAttribute("x2",a-i-8)}))):o.debug("No Node "+t+": "+JSON.stringify(g.node(t)))}));let b=m.getBBox();g.edges().forEach((function(t){void 0!==t&&void 0!==g.edge(t)&&(o.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(g.edge(t))),L(a,g.edge(t),g.edge(t).relation))})),b=m.getBBox();const B={id:i||"root",label:i||"root",width:0,height:0};return B.width=b.width+2*e.padding,B.height=b.height+2*e.padding,o.debug("Doc rendered",B,g),B}),"renderDoc"),U={setConf:j,draw:P};t("diagram",{parser:i,get db(){return new n(1)},renderer:U,styles:a,init:r((t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute}),"init")})}}}));
