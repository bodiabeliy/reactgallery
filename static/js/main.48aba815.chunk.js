(this.webpackJsonpgallery=this.webpackJsonpgallery||[]).push([[0],{89:function(e,t,a){},90:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),c=a.n(r),s=(a(89),a(90),a(146)),o=a(102),d=a(147),l=a(12),j=a(159),b=a(141),p=a(144),u=a(63),h=a.n(u),x=a(160),m=a(145),O=a(101),g=a(4);function f(e){var t=e.image,a=Object(n.useState)(!1),i=Object(l.a)(a,2),r=i[0],c=i[1],s=Object(n.useState)(),o=Object(l.a)(s,2),d=o[0],u=o[1],f=Object(n.useState)(),v=Object(l.a)(f,2),y=v[0],w=v[1];Object(n.useEffect)((function(e){if(d){console.log(d.name);var t=URL.createObjectURL(d);return w(t),document.querySelector(".MuiGrid-root").insertAdjacentHTML("beforeend",'\n      <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-3 MuiGrid-grid-lg-4">\n      <p>Upload images: </p>\n        <div class="MuiPaper-root makeStyles-paper-2 MuiPaper-elevation1 MuiPaper-rounded">\n        <button class="MuiButtonBase-root MuiButton-root MuiButton-text" tabindex="0" type="button"><span class="MuiButton-label">\n          <div class="cardAdd">\n          <h3>'.concat(d.name,'</h3>\n            <img class="card-img card card-img" src="').concat(t,'">\n          </div>\n        </div>')),function(){return URL.revokeObjectURL(t)}}w(void 0)}),[d]);return null!=t.photo?Object(g.jsx)(b.a,{children:Object(g.jsx)("div",{lassName:"card",children:Object(g.jsx)(j.a.Img,{className:"card",src:t.photo})})}):Object(g.jsxs)(b.a,{type:"file",children:[Object(g.jsxs)("div",{className:"cardAdd",children:[d&&Object(g.jsx)(j.a.Img,{className:"card card-img",src:y,onClick:function(){c(!0)}}),Object(g.jsxs)(p.a,{color:"primary",children:[Object(g.jsx)("input",{className:"input",type:"file",onChange:function(e){u(e.target.files[0]),Array.from(e.target.files).forEach((function(e){}))}}),Object(g.jsx)(h.a,{})]})]}),Object(g.jsx)(x.a,{className:"modalPhoto","aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:r,onClose:function(){c(!1)},closeAfterTransition:!0,BackdropComponent:m.a,BackdropProps:{timeout:500},children:Object(g.jsx)(O.a,{in:r,children:Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{className:"modal_header",children:" More information"}),Object(g.jsx)("div",{children:Object(g.jsx)(j.a.Img,{className:"card",src:t.photo})}),Object(g.jsx)(b.a,{className:"modalBtn",variant:"contained",color:"default",style:{background:"#ff9800",color:"white",marginTop:"20px"},children:"Add account"})]})})})]})}var v=Object(s.a)((function(e){return{root:{flexGrow:1,marginTop:"50px"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function y(e){var t=v();return Object(g.jsxs)("div",{className:t.root,children:[Object(g.jsx)("h1",{children:"System Images:"}),Object(g.jsx)(d.a,{container:!0,spacing:3,children:e.photos.map((function(e){return Object(g.jsx)(d.a,{item:!0,lg:4,xs:12,sm:6,md:3,children:Object(g.jsx)(o.a,{className:t.paper,children:Object(g.jsx)(f,{image:e})})})}))})]})}var w=a(150),N=a(158),S=a(14),k=a(57),C=a(3),B=a(15),M=a(161),P=a(149),G=a(151),T=a(148),A=a(48),I=a(154),L=a(152),U=a(72),E=a(65),R=a.n(E),F=a(153),D=a(68),H=a.n(D),_=a(69),z=a.n(_),J=a(103),q=a(155),K=a(156),Q=a(70),V=a.n(Q),W=a(71),X=a.n(W),Y=a(67),Z=a.n(Y),$=a(157),ee=a(64),te=a.n(ee),ae=Object(s.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{display:"flex",flexDirection:"column",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),ne=function(){var e=ae(),t=Object(n.useState)(!1),a=Object(l.a)(t,2),i=a[0],r=a[1];return Object(g.jsx)("div",{className:"modal",children:Object(g.jsxs)("div",{className:"modal_content",children:[Object(g.jsx)(b.a,{className:"authbtn",endIcon:Object(g.jsx)(te.a,{}),onClick:function(){r(!0)},variant:"contained",style:{background:"#ff9800",color:"#fff"},children:"Sign Up"}),Object(g.jsx)(x.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:i,onClose:function(){r(!1)},closeAfterTransition:!0,BackdropComponent:m.a,BackdropProps:{timeout:500},children:Object(g.jsx)(O.a,{in:i,children:Object(g.jsxs)("div",{className:e.paper,children:[Object(g.jsx)("h2",{className:"modal_header",children:" Create new account"}),Object(g.jsxs)("div",{children:[Object(g.jsx)($.a,{helperText:"Please enter your username",id:"demo-helper-text-aligned",label:"username"}),Object(g.jsx)($.a,{helperText:"Please enter your password",id:"demo-helper-text-aligned-no-helper",label:"password"})]}),Object(g.jsx)(b.a,{className:"modalBtn",variant:"contained",color:"default",style:{background:"#ff9800",color:"white",marginTop:"20px"},children:"Add account"})]})})})]})})},ie=a(66),re=a.n(ie),ce=300,se=Object(s.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% + ".concat(ce/.7,"px)"),marginLeft:-300,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:ce,flexShrink:0},drawerPaper:{width:ce},drawerHeader:Object(k.a)(Object(k.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-300},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function oe(){var e=Object(n.useState)(!0),t=Object(l.a)(e,1)[0],a=se(),i=Object(B.a)(),r=Object(n.useState)(!1),c=Object(l.a)(r,2),s=c[0],o=c[1],d=Object(n.useState)(null),j=Object(l.a)(d,2),b=j[0],p=j[1],u=Boolean(b),h=function(){p(!1)};return Object(g.jsxs)("div",{className:a.root,children:[Object(g.jsx)(P.a,{}),Object(g.jsx)(w.a,{position:"fixed",className:Object(C.a)(a.appBar,Object(S.a)({},a.appBarShift,s)),children:Object(g.jsxs)(G.a,{children:[Object(g.jsx)(L.a,{onClick:function(){o(!0)},edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(g.jsx)(R.a,{})}),Object(g.jsx)(A.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Photos"}),Object(g.jsx)(ne,{}),t&&Object(g.jsxs)("div",{children:[Object(g.jsx)(L.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",onClick:function(e){p(e.currentTarget)},children:Object(g.jsx)(re.a,{})}),Object(g.jsxs)(L.a,{color:"inherit",children:[Object(g.jsxs)(U.a,{id:"menu-appbar",anchorEl:b,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:h,children:[Object(g.jsx)(F.a,{onClick:h,children:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"}),Object(g.jsx)(F.a,{onClick:h,children:"English"})]}),Object(g.jsx)(Z.a,{})]})]})]})}),Object(g.jsxs)(M.a,{className:a.drawer,variant:"persistent",anchor:"left",open:s,classes:{paper:a.drawerPaper},children:[Object(g.jsx)("div",{className:a.drawerHeader,children:Object(g.jsx)(L.a,{onClick:function(){o(!1)},children:"ltr"===i.direction?Object(g.jsxs)("div",{children:["Options",Object(g.jsx)(H.a,{})]}):Object(g.jsx)(z.a,{})})}),Object(g.jsx)(I.a,{}),Object(g.jsx)(T.a,{children:["Inbox","Starred","Send email","Drafts"].map((function(e,t){return Object(g.jsxs)(J.a,{button:!0,children:[Object(g.jsx)(q.a,{children:t%2===0?Object(g.jsx)(V.a,{}):Object(g.jsx)(X.a,{})}),Object(g.jsx)(K.a,{primary:e})]},e)}))}),Object(g.jsx)(I.a,{})]})]})}function de(){return Object(g.jsx)(N.a,{sx:{flexGrow:1},children:Object(g.jsx)(w.a,{position:"static",children:Object(g.jsx)(oe,{})})})}var le=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(de,{}),Object(g.jsx)("div",{className:"photoGrid",children:Object(g.jsx)(y,{photos:[{photo:"./images/bag.jpg",id:1},{photo:"./images/walk.jpg",id:2},{photo:"./images/sunset.jpg",id:3},{photo:"./images/sunrise.jpg",id:4},{photo:"./images/300x200.jpg"},{adding:""}]})})]})},je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,163)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))};c.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(le,{})}),document.getElementById("root")),je()}},[[98,1,2]]]);
//# sourceMappingURL=main.48aba815.chunk.js.map