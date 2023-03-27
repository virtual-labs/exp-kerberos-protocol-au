(function(){"use strict";var e={7267:function(e,t,n){var i=n(9242),o=n(3396);const s=(0,o._)("nav",null,null,-1);function r(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[s,(0,o.Wm)(n)],64)}var l=n(89);const a={},c=(0,l.Z)(a,[["render",r]]);var d=c,u=n(678);n(8918),n(9791);const f=(0,u.p7)({history:(0,u.PP)("/"),routes:[{path:"/",name:"experiment-view",component:()=>Promise.resolve().then(n.bind(n,8918))},{path:"/simulation",name:"simulation-view",component:()=>Promise.resolve().then(n.bind(n,9791))}]});var p=f;(0,i.ri)(d).use(p).mount("#app")},8918:function(e,t,n){n.r(t),n.d(t,{default:function(){return we}});var i=n(3396),o=n(7139),s=n(9242),r=n.p+"img/workstation.38593c56.svg",l=n.p+"img/server.9bcd39ee.svg";const a={class:"flex-box"},c={class:"rem-space"},d={class:"col-1"},u={class:"row-3"},f={class:"row-3-content-space"},p=(0,i._)("div",{class:"content"},[(0,i._)("h3",null,"Steps: "),(0,i._)("p",null," Identify the right sequence of actions that take place for successful channel encryption using the Kerberos protocol. To verify the sequence at any point, click on the 'Verify' button. Click on 'Reset' to reset the experiment and start over. When done with all steps, click on Verify to complete the experiment. "),(0,i._)("br")],-1),h={class:"content"},m=(0,i._)("h3",null,"Draw Line",-1),g=(0,i._)("p",null," After choosing the source and target computers, choose the label of the line and click on Create Line to draw the line. Also, choose the options and computers in the right order to complete the experiment. ",-1),v=["value"],y=(0,i._)("br",null,null,-1),b=(0,i.uE)('<div style="align-items:start;justify-content:start;"><span style="display:flex;flex-direction:row;margin:10px;align-items:center;"><div style="margin-right:10px;" class="circle blue"></div> <p>Source computer</p></span><span style="display:flex;flex-direction:row;margin:10px;align-items:center;"><div style="margin-right:10px;" class="circle orange"></div> <p>Target computer</p></span></div>',1),w={class:"button-row"},k={class:"network-row"},x=(0,i._)("span",null,"Client",-1),C=(0,i._)("img",{src:r,width:"150",height:"150",alt:"computer"},null,-1),_=[x,C],S=(0,i._)("span",null,"Key Distribution Center (KDC)",-1),L=(0,i._)("img",{src:l,width:"180",alt:"computer"},null,-1),I=[S,L],E=(0,i._)("span",null,"Ticket Granting Server (TGT)",-1),T=(0,i._)("img",{src:l,width:"180",alt:"computer"},null,-1),B=[E,T],O=(0,i._)("span",null,"Server",-1),M=(0,i._)("img",{src:l,width:"180",alt:"computer"},null,-1),A=[O,M];function P(e,t,n,r,l,x){const C=(0,i.up)("StyledButton"),S=(0,i.up)("EndSystemComponent"),L=(0,i.up)("NetworkInteractionComponent");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",c,[(0,i._)("div",d,[(0,i._)("div",u,[(0,i._)("div",f,[p,(0,i._)("div",h,[m,g,(0,i.wy)((0,i._)("select",{style:{"text-overflow":"ellipsis","align-items":"start","justify-content":"start"},"onUpdate:modelValue":t[0]||(t[0]=e=>l.selectedOption=e)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.rightOptions,((e,t)=>((0,i.wg)(),(0,i.iD)("option",{value:e.text,key:t},(0,o.zw)(e.text),9,v)))),128))],512),[[s.bM,l.selectedOption]]),(0,i._)("button",{onClick:t[1]||(t[1]=(...e)=>x.generateLine&&x.generateLine(...e))},"Create Line"),y]),b]),(0,i._)("div",w,[(0,i.Wm)(C,{text:"Verify","click-function":x.verify,disable:e.disableButton},null,8,["click-function","disable"]),(0,i.Wm)(C,{text:"Reset","click-function":x.reset,disable:e.disableButton},null,8,["click-function","disable"])])]),(0,i._)("div",k,[(0,i.Wm)(L,{ref:"childComponentRef"},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{class:"box",id:"client",top:"73%",left:"10%",ref:"computer1"},{default:(0,i.w5)((()=>[(0,i._)("div",{class:"computer-wrapper",onClick:t[2]||(t[2]=e=>x.handleElementClick("client")),style:(0,o.j5)([{"border-radius":"5px"},{border:"client"===l.source?"3px solid red":"client"===l.destination?"3px solid blue":"none"}])},_,4)])),_:1},512),(0,i.Wm)(S,{class:"box",id:"server1",top:"5%",left:"40%"},{default:(0,i.w5)((()=>[(0,i._)("div",{class:"computer-wrapper",onClick:t[3]||(t[3]=e=>x.handleElementClick("server1")),style:(0,o.j5)([{"border-radius":"5px"},{border:"server1"===l.source?"3px solid red":"server1"===l.destination?"3px solid blue":"none"}])},I,4)])),_:1}),(0,i.Wm)(S,{class:"box",id:"server2",top:"5%",left:"77%"},{default:(0,i.w5)((()=>[(0,i._)("div",{class:"computer-wrapper",onClick:t[4]||(t[4]=e=>x.handleElementClick("server2")),style:(0,o.j5)([{"border-radius":"5px"},{border:"server2"===l.source?"3px solid red":"server2"===l.destination?"3px solid blue":"none"}])},B,4)])),_:1}),(0,i.Wm)(S,{class:"box",id:"server3",top:"65%",left:"78%"},{default:(0,i.w5)((()=>[(0,i._)("div",{class:"computer-wrapper",onClick:t[5]||(t[5]=e=>x.handleElementClick("server3")),style:(0,o.j5)([{"border-radius":"5px"},{border:"server3"===l.source?"3px solid red":"server3"===l.destination?"3px solid blue":"none"}])},A,4)])),_:1})])),_:1},512)])])])])}n(7658);const j=e=>((0,i.dD)("data-v-a42d58b6"),e=e(),(0,i.Cn)(),e),D={id:"top-bar"},W=j((()=>(0,i._)("div",{class:"side-space"},null,-1))),H={class:"title"},G=j((()=>(0,i._)("div",{class:"side-space"},[(0,i._)("button",{class:"submit-report"},"Report a Bug")],-1)));function N(e,t,n,s,r,l){return(0,i.wg)(),(0,i.iD)("div",D,[W,(0,i._)("div",H,(0,o.zw)(n.title),1),G])}var R={name:"TopBar",props:{title:{type:String,default:"Packet Simulator"}}},V=n(89);const z=(0,V.Z)(R,[["render",N],["__scopeId","data-v-a42d58b6"]]);var F=z;const $=["disabled"];function Z(e,t,n,s,r,l){return(0,i.wg)(),(0,i.iD)("button",{style:(0,o.j5)(l.buttonStyle),onClick:t[0]||(t[0]=(...e)=>n.clickFunction&&n.clickFunction(...e)),disabled:n.disable,class:"styled-button"},(0,o.zw)(n.text),13,$)}var q={name:"StyledButton",props:{backgroundColor:{type:String,default:"#288EC8"},textColor:{type:String,default:"white"},text:{type:String,default:"Button"},clickFunction:{type:Function,default:()=>{}},disable:{type:Boolean,default:!1},invisible:{type:Boolean,default:!1}},computed:{buttonStyle(){return{backgroundColor:this.backgroundColor,color:this.textColor,visibility:this.invisible?"hidden":"visible"}}}};const K=(0,V.Z)(q,[["render",Z],["__scopeId","data-v-a67e5656"]]);var Y=K;const U=e=>((0,i.dD)("data-v-be0ac436"),e=e(),(0,i.Cn)(),e),J={id:"margin-container"},Q={id:"root"},X=U((()=>(0,i._)("svg",{id:"lineCanvas"},null,-1))),ee={id:"overlay"};function te(e,t,n,o,s,r){return(0,i.wg)(),(0,i.iD)("div",J,[(0,i._)("div",Q,[X,(0,i._)("div",ee,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])])])}var ne={name:"NetworkInteractionComponent",props:{onPackageAnimationEnd:{type:Function},onPackageReachDestination:{type:Function}},mounted(){let e=document.getElementById("margin-container").getBoundingClientRect(),t=e.width-50+"px",n=e.height-50+"px";document.getElementById("root").style.width=t,document.getElementById("root").style.height=n,document.getElementById("lineCanvas").style.width=t,document.getElementById("lineCanvas").style.height=n,document.getElementById("overlay").style.width=t,document.getElementById("overlay").style.height=n},methods:{drawSVGLine(e,t,n,i,o,s){let r=document.getElementById("lineCanvas"),l=document.createElementNS("http://www.w3.org/2000/svg","line");o?l.setAttribute("style","stroke:"+o+";stroke-width:1"):l.setAttribute("style","stroke:rgb(0,0,0);stroke-width:1"),l.setAttribute("x1",e),l.setAttribute("y1",t),l.setAttribute("x2",n),l.setAttribute("y2",i);let a=document.createElementNS("http://www.w3.org/2000/svg","polygon"),c=document.createElementNS("http://www.w3.org/2000/svg","polygon"),d=Math.atan2(i-t,n-e),u=10,f=[[e,t],[e+u*Math.cos(d+Math.PI/6),t+u*Math.sin(d+Math.PI/6)],[e+u*Math.cos(d-Math.PI/6),t+u*Math.sin(d-Math.PI/6)]],p=[[n,i],[n+u*Math.cos(d+Math.PI/6),i+u*Math.sin(d+Math.PI/6)],[n+u*Math.cos(d-Math.PI/6),i+u*Math.sin(d-Math.PI/6)]];a.setAttribute("transform","rotate("+d+" "+e+" "+t+")"),c.setAttribute("transform","rotate("+d+" "+n+" "+i+")"),a.setAttribute("points",f.map((e=>e.join(","))).join(" ")),c.setAttribute("points",p.map((e=>e.join(","))).join(" ")),a.setAttribute("style","fill:rgb(0,0,0);stroke:rgb(0,0,0);stroke-width:1"),c.setAttribute("style","fill:rgb(0,0,0);stroke:rgb(0,0,0);stroke-width:1");let h=[.3*(n-e),.3*(i-t)],m=[.3*(e-n),.3*(t-i)];if(a.setAttribute("transform","translate("+h.join(",")+")"),c.setAttribute("transform","translate("+m.join(",")+")"),r.appendChild(a),r.appendChild(c),r.appendChild(l),s){let o=document.createElementNS("http://www.w3.org/2000/svg","text");o.setAttribute("x",(e+n)/2),o.setAttribute("y",(t+i)/2-7),o.setAttribute("text-anchor","middle"),o.setAttribute("alignment-baseline","middle"),o.setAttribute("font-size","8px"),o.setAttribute("font-weight","500"),o.setAttribute("fill","black"),o.setAttribute("transform","rotate("+180*Math.atan((i-t)/(n-e))/Math.PI+" "+(e+n)/2+" "+(t+i)/2+")"),o.innerHTML=s,r.appendChild(o)}},animatePackage(e,t,n,i){let o=document.getElementById(t),s=document.getElementById(e),r=document.getElementById(n),l=document.getElementById("overlay");if(!o||!s||!r||!l)return;let a=40,c=o.offsetHeight/2,d=r.offsetLeft+r.offsetWidth,u=r.offsetTop+r.offsetHeight;o.remove(),l.appendChild(o),o.style.left=d+"px",o.style.top=u+"px";let f=r.offsetLeft+r.offsetWidth/2-a,p=r.offsetTop+r.offsetHeight/2-c;o.style.left=f+"px",o.style.top=p+"px";let h=async()=>{if(f=Math.round(f),p=Math.round(p),o.offsetLeft===f&&o.offsetTop===p){let e=s.offsetLeft+s.offsetWidth/2-a,n=s.offsetTop+s.offsetHeight/2-c;o.style.left=e+"px",o.style.top=n+"px";let r=async()=>{if(e=Math.round(e),n=Math.round(n),o.offsetLeft===e&&o.offsetTop===n){let e=s.offsetLeft+s.offsetWidth,n=s.offsetTop+s.offsetHeight;o.style.left=e+"px",o.style.top=n+"px";let r=()=>{o.offsetLeft===e&&o.offsetTop===n?(this.onPackageAnimationEnd&&this.onPackageAnimationEnd(t),i&&i()):setTimeout((()=>{r()}),100)};r()}else setTimeout((()=>{r()}),100)};r().then((()=>{this.onPackageReachDestination&&this.onPackageReachDestination(t)}))}else setTimeout((()=>{h()}),500)};h()},arrangePackages(e,t){if(!e)return;let n=document.getElementById(e),i=document.getElementById("overlay"),o=n.offsetLeft+n.offsetWidth,s=n.offsetTop+n.offsetHeight;for(let r=0;r<t.length;r++){console.log(t[r],"error");let e=document.getElementById(t[r]);i.appendChild(e),e.style.left=o+"px",e.style.top=s+"px";let n=o+15*r,l=s+15*r;e.style.left=n+"px",e.style.top=l+"px"}},drawLine(e,t,n,i){let o=document.getElementById(e),s=document.getElementById(t);if(!o||!s)return;let r=o.offsetLeft+o.offsetWidth/2,l=o.offsetTop+o.offsetHeight/2,a=s.offsetLeft+s.offsetWidth/2,c=s.offsetTop+s.offsetHeight/2;n||(n="black"),i?this.drawSVGLine(r,l,a,c,n,i):this.drawSVGLine(r,l,a,c,n)},drawLineOffset(e,t,n,i,o,s,r){let l=document.getElementById(e),a=document.getElementById(t);if(!l||!a)return;let c=l.offsetLeft+l.offsetWidth/2,d=l.offsetTop+l.offsetHeight/2,u=a.offsetLeft+a.offsetWidth/2,f=a.offsetTop+a.offsetHeight/2;if(i)if(r){let e=c-n/2,t=u-n/2;this.drawSVGLine(e,d,t,f,o,s)}else{let e=c+n/2,t=u+n/2;this.drawSVGLine(e,d,t,f,o,s)}else if(r){let e=d-n/2,t=f-n/2;this.drawSVGLine(c,e,u,t,o,s)}else{let e=d+n/2,t=f+n/2;this.drawSVGLine(c,e,u,t,o,s)}},drawMultipleLinesOffset(e,t,n,i){let o=document.getElementById(e),s=document.getElementById(t);if(!o||!s)return;let r=o.offsetLeft+o.offsetWidth/2,l=o.offsetTop+o.offsetHeight/2,a=s.offsetLeft+s.offsetWidth/2,c=s.offsetTop+s.offsetHeight/2,d=a-r,u=c-l,f=Math.sqrt(d*d+u*u);d/=f,u/=f;let p=u,h=-d,m=n.length*i,g=(m-i)/2;for(let v=0;v<n.length;v++){let t=n[v],o=r+p*(g-v*i),s=l+h*(g-v*i),d=a+p*(g-v*i),u=c+h*(g-v*i);t.towards===e?this.drawSVGLine(o,s,d,u,t.color,t.text):this.drawSVGLine(d,u,o,s,t.color,t.text)}},clearLines(){let e=document.getElementById("lineCanvas");e.parentNode.replaceChild(e.cloneNode(!1),e)}}};const ie=(0,V.Z)(ne,[["render",te],["__scopeId","data-v-be0ac436"]]);var oe=ie;const se=["id"],re={id:"endSystemVector"},le=["id"];function ae(e,t,n,s,r,l){const a=(0,i.up)("PackageComponent");return(0,i.wg)(),(0,i.iD)("div",{class:(0,o.C_)([n.Class,"rootElementEndSystem"]),id:n.Id,style:(0,o.j5)({top:n.top,left:n.left})},[(0,i._)("div",re,[(0,i.WI)(e.$slots,"default",{},void 0,!0)]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.packageInfo,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t},[e.packageId?((0,i.wg)(),(0,i.iD)("div",{key:0,style:(0,o.j5)([{position:"absolute",right:"-88px"},{transition:"ease-in-out "+(e.animationSeconds??1)+"s",visibility:e.displayPackage?"visible":"hidden"}]),id:e.packageId,class:"package"},[(0,i.Wm)(a,{data:e.data,"background-color":e.packageBackgroundColor},null,8,["data","background-color"])],12,le)):(0,i.kq)("",!0)])))),128))],14,se)}const ce={class:"packageText"},de={key:0,class:"dash"};function ue(e,t,n,s,r,l){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",{id:"packageBox",style:(0,o.j5)({backgroundColor:n.backgroundColor})},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.data,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:e.id},[(0,i._)("div",ce,(0,o.zw)(e),1),l.addDash(t)?((0,i.wg)(),(0,i.iD)("div",de)):(0,i.kq)("",!0)])))),128))],4)])}var fe={name:"PackageComponent",methods:{addDash(e){return this.data.length!==e+1}},props:{data:{type:Array},backgroundColor:{type:String,default:"#ABFF8E"}}};const pe=(0,V.Z)(fe,[["render",ue],["__scopeId","data-v-f0687b40"]]);var he=pe,me={name:"EndSystemComponent",components:{PackageComponent:he},props:{Class:{type:String},Id:{type:String},top:{type:String},left:{type:String},packageInfo:{type:[Object]}},computed:{packagePosition(){return"-50px"}}};const ge=(0,V.Z)(me,[["render",ae],["__scopeId","data-v-0ce0fef6"]]);var ve=ge,ye={name:"App",mounted(){this.rightOptions=this.rightOptions.map((e=>({value:e,sort:Math.random()}))).sort(((e,t)=>e.sort-t.sort)).map((({value:e})=>e)),this.selectedOption=this.rightOptions[0].text},data(){return{source:"",selectedOption:"",destination:"",clickCount:0,lines:{},rightOptions:[{text:"Client request TGT from KDC",source:"client",destination:"server1",index:1},{text:"Authentication service sends encrypted TGT and session key",source:"server1",destination:"client",index:2},{text:"Client requests ticket from TGS with TGT and session key",source:"client",destination:"server2",index:3},{text:"TGS sends Encrypted session key & ticket to client",source:"server2",destination:"client",index:4},{text:"Client sends service ticket to server",source:"client",destination:"server3",index:5},{text:"Server verifies service ticket & gives service access to client",source:"server3",destination:"client",index:6}],currentLineSize:1}},methods:{handleElementClick(e){if(this.source===e||this.destination===e)return this.source="",this.destination="",void(this.clickCount=0);0===this.clickCount?(this.source=e,this.clickCount++):1===this.clickCount&&(this.destination=e,this.clickCount++)},correct1(e){var t=document.getElementById("snackbar");t.innerHTML=e,t.style.backgroundColor="green",t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),3e3)},incorrect(e){var t=document.getElementById("snackbar");t.innerHTML=e,t.style.backgroundColor="red",t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),7e3)},reset(){this.$refs.childComponentRef.clearLines(),this.source="",this.destination="",this.clickCount=0,this.currentLineSize=1,this.lines={}},verify(){let e=this.flattenLinesObject(),t=!0;for(let n=0;n<e.length;n++){let i=e[n],o=this.rightOptions.find((e=>e.text===i.option));if(o.text!==i.option||o.source!==i.source||o.destination!==i.destination||o.index!==i.index){i.color="red",this.$refs.childComponentRef.clearLines();for(let e in this.lines)this.$refs.childComponentRef.drawMultipleLinesOffset(this.lines[e][0].source,this.lines[e][0].destination,this.lines[e],30);t=!1}else{i.color="green",this.$refs.childComponentRef.clearLines();for(let e in this.lines)this.$refs.childComponentRef.drawMultipleLinesOffset(this.lines[e][0].source,this.lines[e][0].destination,this.lines[e],30)}}e.length!==this.rightOptions.length&&(t=!1),t?this.correct1("You got it right!"):this.incorrect("You got it wrong!")},flattenLinesObject(){let e=[];for(let t in this.lines)e=e.concat(this.lines[t]);return e},generateLine(){if(this.source&&this.destination&&this.selectedOption){this.$refs.childComponentRef.clearLines();let e="";e=this.lines[this.source+"-"+this.destination]?this.source+"-"+this.destination:this.lines[this.destination+"-"+this.source]?this.destination+"-"+this.source:this.source+"-"+this.destination,this.lines[e]?this.lines[e].length<3?this.lines[e].push({color:"black",text:this.currentLineSize+" ."+this.selectedOption,option:this.selectedOption,source:this.source,destination:this.destination,towards:this.destination,index:this.currentLineSize}):alert("You can't add more than 3 lines between 2 nodes"):this.lines[e]=[{color:"black",text:this.currentLineSize+" ."+this.selectedOption,option:this.selectedOption,source:this.source,destination:this.destination,towards:this.destination,index:this.currentLineSize}];for(let t in this.lines)this.$refs.childComponentRef.drawMultipleLinesOffset(this.lines[t][0].source,this.lines[t][0].destination,this.lines[t],30);this.source="",this.destination="",this.clickCount=0,this.currentLineSize++}}},components:{EndSystemComponent:ve,NetworkInteractionComponent:oe,TopBar:F,StyledButton:Y}};const be=(0,V.Z)(ye,[["render",P]]);var we=be},9791:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var i=n(3396);function o(e,t){return(0,i.wg)(),(0,i.iD)("main")}var s=n(89);const r={},l=(0,s.Z)(r,[["render",o]]);var a=l}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,s){if(!i){var r=1/0;for(d=0;d<e.length;d++){i=e[d][0],o=e[d][1],s=e[d][2];for(var l=!0,a=0;a<i.length;a++)(!1&s||r>=s)&&Object.keys(n.O).every((function(e){return n.O[e](i[a])}))?i.splice(a--,1):(l=!1,s<r&&(r=s));if(l){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[i,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/exp-kerberos-protocol-au/simulation/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,s,r=i[0],l=i[1],a=i[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(a)var d=a(n)}for(t&&t(i);c<r.length;c++)s=r[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},i=self["webpackChunkexp_5"]=self["webpackChunkexp_5"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(7267)}));i=n.O(i)})();
//# sourceMappingURL=app.342948c2.js.map