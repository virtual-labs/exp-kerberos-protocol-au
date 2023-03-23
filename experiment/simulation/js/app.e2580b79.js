(function(){"use strict";var t={7267:function(t,e,n){var i=n(9242),o=n(3396);const s=(0,o._)("nav",null,null,-1);function r(t,e){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[s,(0,o.Wm)(n)],64)}var l=n(89);const a={},c=(0,l.Z)(a,[["render",r]]);var d=c,u=n(678);n(7514),n(9791);const f=(0,u.p7)({history:(0,u.PP)("/"),routes:[{path:"/",name:"experiment-view",component:()=>Promise.resolve().then(n.bind(n,7514))},{path:"/simulation",name:"simulation-view",component:()=>Promise.resolve().then(n.bind(n,9791))}]});var h=f;(0,i.ri)(d).use(h).mount("#app")},7514:function(t,e,n){n.r(e),n.d(e,{default:function(){return yt}});var i=n(3396),o=n(7139),s=n(9242),r=n.p+"img/workstation.38593c56.svg",l=n.p+"img/server.9bcd39ee.svg";const a={class:"flex-box"},c={class:"rem-space"},d={class:"col-1"},u={class:"row-3"},f={class:"row-3-content-space"},h=(0,i._)("div",{class:"content"},[(0,i._)("h3",null,"Steps: "),(0,i._)("p",null," To begin the authentication process, the client asks for a Ticket Granting Ticket from the Authentication Server housed inside the Key Distribution Center. "),(0,i._)("br")],-1),p={class:"content"},m=(0,i._)("h3",null,"Draw Line",-1),g=(0,i._)("p",null," After choosing the source and target computers, choose the label of the line and click on Create Line to draw the line. Also, choose the options and computers in the right order to complete the experiment. ",-1),v=["value"],y=(0,i._)("br",null,null,-1),b={class:"button-row"},w={class:"network-row"},k=(0,i._)("img",{src:r,width:"150",height:"150",alt:"computer"},null,-1),x=[k],C=(0,i._)("span",null,"Key Distribution Center (KDC)",-1),_=(0,i._)("img",{src:l,width:"180",alt:"computer"},null,-1),S=[C,_],L=(0,i._)("span",null,"Ticket Granting Server (TGT)",-1),I=(0,i._)("img",{src:l,width:"180",alt:"computer"},null,-1),E=[L,I],T=(0,i._)("span",null,"Server",-1),B=(0,i._)("img",{src:l,width:"180",alt:"computer"},null,-1),O=[T,B];function M(t,e,n,r,l,k){const C=(0,i.up)("StyledButton"),_=(0,i.up)("EndSystemComponent"),L=(0,i.up)("NetworkInteractionComponent");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",c,[(0,i._)("div",d,[(0,i._)("div",u,[(0,i._)("div",f,[h,(0,i._)("div",p,[m,g,(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>l.selectedOption=t)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.rightOptions,((t,e)=>((0,i.wg)(),(0,i.iD)("option",{value:t.text,key:e},(0,o.zw)(t.text),9,v)))),128))],512),[[s.bM,l.selectedOption]]),(0,i._)("button",{onClick:e[1]||(e[1]=(...t)=>k.generateLine&&k.generateLine(...t))},"Create Line"),y])]),(0,i._)("div",b,[(0,i.Wm)(C,{text:"Verify","click-function":k.verify,disable:t.disableButton},null,8,["click-function","disable"]),(0,i.Wm)(C,{text:"Reset","click-function":k.reset,disable:t.disableButton},null,8,["click-function","disable"])])]),(0,i._)("div",w,[(0,i.Wm)(L,{ref:"childComponentRef"},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{class:"box",id:"client",top:"73%",left:"10%",ref:"computer1"},{default:(0,i.w5)((()=>[(0,i._)("div",{class:"computer-wrapper",onClick:e[2]||(e[2]=t=>k.handleElementClick("client")),style:(0,o.j5)([{"border-radius":"5px"},{border:"client"===l.source?"3px solid red":"client"===l.destination?"3px solid blue":"none"}])},x,4)])),_:1},512),(0,i.Wm)(_,{class:"box",id:"server1",top:"5%",left:"40%"},{default:(0,i.w5)((()=>[(0,i._)("div",{class:"computer-wrapper",onClick:e[3]||(e[3]=t=>k.handleElementClick("server1")),style:(0,o.j5)([{"border-radius":"5px"},{border:"server1"===l.source?"3px solid red":"server1"===l.destination?"3px solid blue":"none"}])},S,4)])),_:1}),(0,i.Wm)(_,{class:"box",id:"server2",top:"5%",left:"77%"},{default:(0,i.w5)((()=>[(0,i._)("div",{class:"computer-wrapper",onClick:e[4]||(e[4]=t=>k.handleElementClick("server2")),style:(0,o.j5)([{"border-radius":"5px"},{border:"server2"===l.source?"3px solid red":"server2"===l.destination?"3px solid blue":"none"}])},E,4)])),_:1}),(0,i.Wm)(_,{class:"box",id:"server3",top:"65%",left:"78%"},{default:(0,i.w5)((()=>[(0,i._)("div",{class:"computer-wrapper",onClick:e[5]||(e[5]=t=>k.handleElementClick("server3")),style:(0,o.j5)([{"border-radius":"5px"},{border:"server3"===l.source?"3px solid red":"server3"===l.destination?"3px solid blue":"none"}])},O,4)])),_:1})])),_:1},512)])])])])}n(7658);const A=t=>((0,i.dD)("data-v-a42d58b6"),t=t(),(0,i.Cn)(),t),P={id:"top-bar"},D=A((()=>(0,i._)("div",{class:"side-space"},null,-1))),j={class:"title"},W=A((()=>(0,i._)("div",{class:"side-space"},[(0,i._)("button",{class:"submit-report"},"Report a Bug")],-1)));function H(t,e,n,s,r,l){return(0,i.wg)(),(0,i.iD)("div",P,[D,(0,i._)("div",j,(0,o.zw)(n.title),1),W])}var G={name:"TopBar",props:{title:{type:String,default:"Packet Simulator"}}},N=n(89);const R=(0,N.Z)(G,[["render",H],["__scopeId","data-v-a42d58b6"]]);var z=R;const V=["disabled"];function F(t,e,n,s,r,l){return(0,i.wg)(),(0,i.iD)("button",{style:(0,o.j5)(l.buttonStyle),onClick:e[0]||(e[0]=(...t)=>n.clickFunction&&n.clickFunction(...t)),disabled:n.disable,class:"styled-button"},(0,o.zw)(n.text),13,V)}var $={name:"StyledButton",props:{backgroundColor:{type:String,default:"#288EC8"},textColor:{type:String,default:"white"},text:{type:String,default:"Button"},clickFunction:{type:Function,default:()=>{}},disable:{type:Boolean,default:!1},invisible:{type:Boolean,default:!1}},computed:{buttonStyle(){return{backgroundColor:this.backgroundColor,color:this.textColor,visibility:this.invisible?"hidden":"visible"}}}};const Z=(0,N.Z)($,[["render",F],["__scopeId","data-v-a67e5656"]]);var K=Z;const Y=t=>((0,i.dD)("data-v-be0ac436"),t=t(),(0,i.Cn)(),t),q={id:"margin-container"},U={id:"root"},J=Y((()=>(0,i._)("svg",{id:"lineCanvas"},null,-1))),Q={id:"overlay"};function X(t,e,n,o,s,r){return(0,i.wg)(),(0,i.iD)("div",q,[(0,i._)("div",U,[J,(0,i._)("div",Q,[(0,i.WI)(t.$slots,"default",{},void 0,!0)])])])}var tt={name:"NetworkInteractionComponent",props:{onPackageAnimationEnd:{type:Function},onPackageReachDestination:{type:Function}},mounted(){let t=document.getElementById("margin-container").getBoundingClientRect(),e=t.width-50+"px",n=t.height-50+"px";document.getElementById("root").style.width=e,document.getElementById("root").style.height=n,document.getElementById("lineCanvas").style.width=e,document.getElementById("lineCanvas").style.height=n,document.getElementById("overlay").style.width=e,document.getElementById("overlay").style.height=n},methods:{drawSVGLine(t,e,n,i,o,s){let r=document.getElementById("lineCanvas"),l=document.createElementNS("http://www.w3.org/2000/svg","line");o?l.setAttribute("style","stroke:"+o+";stroke-width:1"):l.setAttribute("style","stroke:rgb(0,0,0);stroke-width:1"),l.setAttribute("x1",t),l.setAttribute("y1",e),l.setAttribute("x2",n),l.setAttribute("y2",i);let a=document.createElementNS("http://www.w3.org/2000/svg","polygon"),c=document.createElementNS("http://www.w3.org/2000/svg","polygon"),d=Math.atan2(i-e,n-t),u=10,f=[[t,e],[t+u*Math.cos(d+Math.PI/6),e+u*Math.sin(d+Math.PI/6)],[t+u*Math.cos(d-Math.PI/6),e+u*Math.sin(d-Math.PI/6)]],h=[[n,i],[n+u*Math.cos(d+Math.PI/6),i+u*Math.sin(d+Math.PI/6)],[n+u*Math.cos(d-Math.PI/6),i+u*Math.sin(d-Math.PI/6)]];a.setAttribute("transform","rotate("+d+" "+t+" "+e+")"),c.setAttribute("transform","rotate("+d+" "+n+" "+i+")"),a.setAttribute("points",f.map((t=>t.join(","))).join(" ")),c.setAttribute("points",h.map((t=>t.join(","))).join(" ")),a.setAttribute("style","fill:rgb(0,0,0);stroke:rgb(0,0,0);stroke-width:1"),c.setAttribute("style","fill:rgb(0,0,0);stroke:rgb(0,0,0);stroke-width:1");let p=[.3*(n-t),.3*(i-e)],m=[.3*(t-n),.3*(e-i)];if(a.setAttribute("transform","translate("+p.join(",")+")"),c.setAttribute("transform","translate("+m.join(",")+")"),r.appendChild(a),r.appendChild(c),r.appendChild(l),s){let o=document.createElementNS("http://www.w3.org/2000/svg","text");o.setAttribute("x",(t+n)/2),o.setAttribute("y",(e+i)/2-7),o.setAttribute("text-anchor","middle"),o.setAttribute("alignment-baseline","middle"),o.setAttribute("font-size","8px"),o.setAttribute("font-weight","500"),o.setAttribute("fill","black"),o.setAttribute("transform","rotate("+180*Math.atan((i-e)/(n-t))/Math.PI+" "+(t+n)/2+" "+(e+i)/2+")"),o.innerHTML=s,r.appendChild(o)}},animatePackage(t,e,n,i){let o=document.getElementById(e),s=document.getElementById(t),r=document.getElementById(n),l=document.getElementById("overlay");if(!o||!s||!r||!l)return;let a=40,c=o.offsetHeight/2,d=r.offsetLeft+r.offsetWidth,u=r.offsetTop+r.offsetHeight;o.remove(),l.appendChild(o),o.style.left=d+"px",o.style.top=u+"px";let f=r.offsetLeft+r.offsetWidth/2-a,h=r.offsetTop+r.offsetHeight/2-c;o.style.left=f+"px",o.style.top=h+"px";let p=async()=>{if(f=Math.round(f),h=Math.round(h),o.offsetLeft===f&&o.offsetTop===h){let t=s.offsetLeft+s.offsetWidth/2-a,n=s.offsetTop+s.offsetHeight/2-c;o.style.left=t+"px",o.style.top=n+"px";let r=async()=>{if(t=Math.round(t),n=Math.round(n),o.offsetLeft===t&&o.offsetTop===n){let t=s.offsetLeft+s.offsetWidth,n=s.offsetTop+s.offsetHeight;o.style.left=t+"px",o.style.top=n+"px";let r=()=>{o.offsetLeft===t&&o.offsetTop===n?(this.onPackageAnimationEnd&&this.onPackageAnimationEnd(e),i&&i()):setTimeout((()=>{r()}),100)};r()}else setTimeout((()=>{r()}),100)};r().then((()=>{this.onPackageReachDestination&&this.onPackageReachDestination(e)}))}else setTimeout((()=>{p()}),500)};p()},arrangePackages(t,e){if(!t)return;let n=document.getElementById(t),i=document.getElementById("overlay"),o=n.offsetLeft+n.offsetWidth,s=n.offsetTop+n.offsetHeight;for(let r=0;r<e.length;r++){console.log(e[r],"error");let t=document.getElementById(e[r]);i.appendChild(t),t.style.left=o+"px",t.style.top=s+"px";let n=o+15*r,l=s+15*r;t.style.left=n+"px",t.style.top=l+"px"}},drawLine(t,e,n,i){let o=document.getElementById(t),s=document.getElementById(e);if(!o||!s)return;let r=o.offsetLeft+o.offsetWidth/2,l=o.offsetTop+o.offsetHeight/2,a=s.offsetLeft+s.offsetWidth/2,c=s.offsetTop+s.offsetHeight/2;n||(n="black"),i?this.drawSVGLine(r,l,a,c,n,i):this.drawSVGLine(r,l,a,c,n)},drawLineOffset(t,e,n,i,o,s,r){let l=document.getElementById(t),a=document.getElementById(e);if(!l||!a)return;let c=l.offsetLeft+l.offsetWidth/2,d=l.offsetTop+l.offsetHeight/2,u=a.offsetLeft+a.offsetWidth/2,f=a.offsetTop+a.offsetHeight/2;if(i)if(r){let t=c-n/2,e=u-n/2;this.drawSVGLine(t,d,e,f,o,s)}else{let t=c+n/2,e=u+n/2;this.drawSVGLine(t,d,e,f,o,s)}else if(r){let t=d-n/2,e=f-n/2;this.drawSVGLine(c,t,u,e,o,s)}else{let t=d+n/2,e=f+n/2;this.drawSVGLine(c,t,u,e,o,s)}},drawMultipleLinesOffset(t,e,n,i){let o=document.getElementById(t),s=document.getElementById(e);if(!o||!s)return;let r=o.offsetLeft+o.offsetWidth/2,l=o.offsetTop+o.offsetHeight/2,a=s.offsetLeft+s.offsetWidth/2,c=s.offsetTop+s.offsetHeight/2,d=a-r,u=c-l,f=Math.sqrt(d*d+u*u);d/=f,u/=f;let h=u,p=-d,m=n.length*i,g=(m-i)/2;for(let v=0;v<n.length;v++){let e=n[v],o=r+h*(g-v*i),s=l+p*(g-v*i),d=a+h*(g-v*i),u=c+p*(g-v*i);e.towards===t?this.drawSVGLine(o,s,d,u,e.color,e.text):this.drawSVGLine(d,u,o,s,e.color,e.text)}},clearLines(){let t=document.getElementById("lineCanvas");t.parentNode.replaceChild(t.cloneNode(!1),t)}}};const et=(0,N.Z)(tt,[["render",X],["__scopeId","data-v-be0ac436"]]);var nt=et;const it=["id"],ot={id:"endSystemVector"},st=["id"];function rt(t,e,n,s,r,l){const a=(0,i.up)("PackageComponent");return(0,i.wg)(),(0,i.iD)("div",{class:(0,o.C_)([n.Class,"rootElementEndSystem"]),id:n.Id,style:(0,o.j5)({top:n.top,left:n.left})},[(0,i._)("div",ot,[(0,i.WI)(t.$slots,"default",{},void 0,!0)]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.packageInfo,((t,e)=>((0,i.wg)(),(0,i.iD)("div",{key:e},[t.packageId?((0,i.wg)(),(0,i.iD)("div",{key:0,style:(0,o.j5)([{position:"absolute",right:"-88px"},{transition:"ease-in-out "+(t.animationSeconds??1)+"s",visibility:t.displayPackage?"visible":"hidden"}]),id:t.packageId,class:"package"},[(0,i.Wm)(a,{data:t.data,"background-color":t.packageBackgroundColor},null,8,["data","background-color"])],12,st)):(0,i.kq)("",!0)])))),128))],14,it)}const lt={class:"packageText"},at={key:0,class:"dash"};function ct(t,e,n,s,r,l){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",{id:"packageBox",style:(0,o.j5)({backgroundColor:n.backgroundColor})},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.data,((t,e)=>((0,i.wg)(),(0,i.iD)("div",{key:t.id},[(0,i._)("div",lt,(0,o.zw)(t),1),l.addDash(e)?((0,i.wg)(),(0,i.iD)("div",at)):(0,i.kq)("",!0)])))),128))],4)])}var dt={name:"PackageComponent",methods:{addDash(t){return this.data.length!==t+1}},props:{data:{type:Array},backgroundColor:{type:String,default:"#ABFF8E"}}};const ut=(0,N.Z)(dt,[["render",ct],["__scopeId","data-v-f0687b40"]]);var ft=ut,ht={name:"EndSystemComponent",components:{PackageComponent:ft},props:{Class:{type:String},Id:{type:String},top:{type:String},left:{type:String},packageInfo:{type:[Object]}},computed:{packagePosition(){return"-50px"}}};const pt=(0,N.Z)(ht,[["render",rt],["__scopeId","data-v-0ce0fef6"]]);var mt=pt,gt={name:"App",mounted(){this.rightOptions=this.rightOptions.map((t=>({value:t,sort:Math.random()}))).sort(((t,e)=>t.sort-e.sort)).map((({value:t})=>t)),this.selectedOption=this.rightOptions[0].text},data(){return{source:"",selectedOption:"",destination:"",clickCount:0,lines:{},rightOptions:[{text:"Client request TGT from KDC",source:"client",destination:"server1",index:1},{text:"Authentication service sends encrypted TGT and session key",source:"server1",destination:"client",index:2},{text:"Client requests ticket from TGS with TGT and session key",source:"client",destination:"server2",index:3},{text:"TGS sends Encrypted session key & ticket to client",source:"server2",destination:"client",index:4},{text:"Client sends service ticket to server",source:"client",destination:"server3",index:5},{text:"Server verifies service ticket & gives service access to client",source:"server3",destination:"client",index:6}],currentLineSize:1}},methods:{handleElementClick(t){if(this.source===t||this.destination===t)return this.source="",this.destination="",void(this.clickCount=0);0===this.clickCount?(this.source=t,this.clickCount++):1===this.clickCount&&(this.destination=t,this.clickCount++)},correct1(t){var e=document.getElementById("snackbar");e.innerHTML=t,e.style.backgroundColor="green",e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3)},incorrect(t){var e=document.getElementById("snackbar");e.innerHTML=t,e.style.backgroundColor="red",e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),7e3)},reset(){this.$refs.childComponentRef.clearLines(),this.source="",this.destination="",this.clickCount=0,this.currentLineSize=1,this.lines={}},verify(){let t=this.flattenLinesObject(),e=!0;for(let n=0;n<t.length;n++){let i=t[n],o=this.rightOptions.find((t=>t.text===i.option));if(o.text!==i.option||o.source!==i.source||o.destination!==i.destination||o.index!==i.index){i.color="red",this.$refs.childComponentRef.clearLines();for(let t in this.lines)this.$refs.childComponentRef.drawMultipleLinesOffset(this.lines[t][0].source,this.lines[t][0].destination,this.lines[t],30);e=!1}else{i.color="green",this.$refs.childComponentRef.clearLines();for(let t in this.lines)this.$refs.childComponentRef.drawMultipleLinesOffset(this.lines[t][0].source,this.lines[t][0].destination,this.lines[t],30)}}t.length!==this.rightOptions.length&&(e=!1),e?this.correct1("You got it right!"):this.incorrect("You got it wrong!")},flattenLinesObject(){let t=[];for(let e in this.lines)t=t.concat(this.lines[e]);return t},generateLine(){if(this.source&&this.destination&&this.selectedOption){this.$refs.childComponentRef.clearLines();let t="";t=this.lines[this.source+"-"+this.destination]?this.source+"-"+this.destination:this.lines[this.destination+"-"+this.source]?this.destination+"-"+this.source:this.source+"-"+this.destination,this.lines[t]?this.lines[t].length<3?this.lines[t].push({color:"black",text:this.currentLineSize+" ."+this.selectedOption,option:this.selectedOption,source:this.source,destination:this.destination,towards:this.destination,index:this.currentLineSize}):alert("You can't add more than 3 lines between 2 nodes"):this.lines[t]=[{color:"black",text:this.currentLineSize+" ."+this.selectedOption,option:this.selectedOption,source:this.source,destination:this.destination,towards:this.destination,index:this.currentLineSize}];for(let e in this.lines)this.$refs.childComponentRef.drawMultipleLinesOffset(this.lines[e][0].source,this.lines[e][0].destination,this.lines[e],30);this.source="",this.destination="",this.clickCount=0,this.currentLineSize++}}},components:{EndSystemComponent:mt,NetworkInteractionComponent:nt,TopBar:z,StyledButton:K}};const vt=(0,N.Z)(gt,[["render",M]]);var yt=vt},9791:function(t,e,n){n.r(e),n.d(e,{default:function(){return a}});var i=n(3396);function o(t,e){return(0,i.wg)(),(0,i.iD)("main")}var s=n(89);const r={},l=(0,s.Z)(r,[["render",o]]);var a=l}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,s){if(!i){var r=1/0;for(d=0;d<t.length;d++){i=t[d][0],o=t[d][1],s=t[d][2];for(var l=!0,a=0;a<i.length;a++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](i[a])}))?i.splice(a--,1):(l=!1,s<r&&(r=s));if(l){t.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[i,o,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/exp-kerberos-protocol-au/simulation/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,s,r=i[0],l=i[1],a=i[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(a)var d=a(n)}for(e&&e(i);c<r.length;c++)s=r[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(d)},i=self["webpackChunkexp_5"]=self["webpackChunkexp_5"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(7267)}));i=n.O(i)})();
//# sourceMappingURL=app.e2580b79.js.map