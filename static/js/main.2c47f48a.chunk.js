(this.webpackJsonpgallery=this.webpackJsonpgallery||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),c=a.n(i),s=(a(104),a(105),a(164)),o=a(86),l=a(165),d=a(13),j=a(178),b=a(160),u=a(163),p=a(74),h=a.n(p),x=a(73),O=a.n(x),m=a(124),g=a(119),f=a(120),v=a(4);function y(e){var t=e.image,a=Object(n.useState)(!1),r=Object(d.a)(a,2),i=r[0],c=r[1];var s=Object(n.useState)(),o=Object(d.a)(s,2),l=o[0],p=o[1],x=Object(n.useState)(),y=Object(d.a)(x,2),k=y[0],w=y[1];Object(n.useEffect)((function(e){if(l){var t=URL.createObjectURL(l);return w(t),document.querySelector(".MuiGrid-root").insertAdjacentHTML("beforeend",'\n      <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-3 MuiGrid-grid-lg-4">\n      <p>Upload images: <b>'.concat(function(e){if(0===e)return"0 Byte";var t=parseInt(Math.floor(Math.log(e)/Math.log(1024)));return Math.round(e/Math.pow(1024,t))+" "+["Bytes","KB","MB","GB","TB"][t]}(l.size),'</b></p>\n        <div class="MuiPaper-root makeStyles-paper-2 MuiPaper-elevation1 MuiPaper-rounded">\n        <button class="MuiButtonBase-root MuiButton-root MuiButton-text" tabindex="0" type="button"><span class="MuiButton-label">\n          <div class="cardAdd">\n          <h3>').concat(l.name,'</h3>\n            <img class="card-img card card-img" src="').concat(t,'">\n          </div>\n        </div>')),function(){return URL.revokeObjectURL(t)}}w(void 0)}),[l]);return null!=t.photo?Object(v.jsx)(b.a,{children:Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)(j.a.Img,{className:"card",src:t.photo}),Object(v.jsx)(b.a,{className:"authbtn",startIcon:Object(v.jsx)(O.a,{}),onClick:function(){c(!0)},variant:"contained",style:{background:"#ff9800",color:"#fff"},children:"Show details"}),Object(v.jsx)(m.a,{className:"modalPhoto","aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:i,onClose:function(){c(!1)},closeAfterTransition:!0,BackdropComponent:g.a,BackdropProps:{timeout:500},children:Object(v.jsx)(f.a,{in:i,children:Object(v.jsxs)("div",{children:[Object(v.jsxs)("h2",{className:"modal_header",children:[" ",t.name]}),Object(v.jsx)(j.a.Img,{className:"cardModal",src:t.photo})]})})})]})}):Object(v.jsx)(b.a,{type:"file",children:Object(v.jsxs)("div",{className:"cardAdd",children:[l&&Object(v.jsx)(j.a.Img,{className:"card card-img",src:k}),Object(v.jsxs)(u.a,{color:"primary",children:[Object(v.jsx)("input",{className:"input",type:"file",onChange:function(e){p(e.target.files[0]),Array.from(e.target.files).forEach((function(e){}))}}),Object(v.jsx)(h.a,{})]})]})})}var k=Object(s.a)((function(e){return{root:{flexGrow:1,marginTop:"50px"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function w(e){var t=k();return Object(v.jsxs)("div",{className:t.root,children:[Object(v.jsx)("h1",{children:"System Images:"}),Object(v.jsx)(l.a,{container:!0,spacing:3,children:e.photos.map((function(e){return Object(v.jsx)(l.a,{item:!0,lg:4,xs:12,sm:6,md:3,children:Object(v.jsx)(o.a,{className:t.paper,children:Object(v.jsx)(y,{image:e})})})}))})]})}var N=a(168),S=a(177),B=a(16),M=a(63),C=a(3),G=a(19),P=a(172),T=a(167),A=a(169),I=a(166),L=a(54),U=a(173),E=a(170),F=a(83),R=a(76),z=a.n(R),H=a(171),_=a(79),q=a.n(_),D=a(80),J=a.n(D),K=a(122),Q=a(174),V=a(175),W=a(78),X=a.n(W),Y=a(176),Z=a(75),$=a.n(Z),ee=a(66);function te(){var e=Object(ee.b)().enqueueSnackbar;return Object(v.jsx)(r.a.Fragment,{children:Object(v.jsx)(b.a,{onClick:function(){var t=Boolean(!1);!0===t&&e("Account successful created!",{variant:"success"}),!1===t&&e("field username or password don`t must be empty!",{variant:"error"})},className:"modalBtn",variant:"contained",color:"default",style:{background:"#ff9800",color:"white",marginTop:"20px"},children:"Add account"})})}function ae(){return Object(v.jsx)(ee.a,{maxSnack:3,children:Object(v.jsx)(te,{})})}var ne=Object(s.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{display:"flex",flexDirection:"column",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),re=function(){var e=ne(),t=Object(n.useState)(!1),a=Object(d.a)(t,2),r=a[0],i=a[1];return Object(v.jsx)("div",{className:"modal",children:Object(v.jsxs)("div",{className:"modal_content",children:[Object(v.jsx)(b.a,{className:"authbtn",endIcon:Object(v.jsx)($.a,{}),onClick:function(){console.log(r),i(!0)},variant:"contained",style:{background:"#ff9800",color:"#fff"},children:"Sign Up"}),Object(v.jsx)(m.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:r,onClose:function(){console.log(r),i(!1)},closeAfterTransition:!0,BackdropComponent:g.a,BackdropProps:{timeout:500},children:Object(v.jsx)(f.a,{in:r,children:Object(v.jsxs)("div",{className:e.paper,children:[Object(v.jsx)("h2",{className:"modal_header",children:" Create new account"}),Object(v.jsxs)("div",{children:[Object(v.jsx)(Y.a,{helperText:"Please enter your username",id:"demo-helper-text-aligned",label:"username"}),Object(v.jsx)(Y.a,{helperText:"Please enter your password",id:"demo-helper-text-aligned-no-helper",label:"password"})]}),Object(v.jsx)(ae,{})]})})})]})})},ie=a(77),ce=a.n(ie),se=a(82),oe=a.n(se),le=a(81),de=a.n(le),je=a(53),be=a(12),ue=300,pe=Object(s.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% + ".concat(ue/.7,"px)"),marginLeft:-300,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:ue,flexShrink:0},drawerPaper:{width:ue},drawerHeader:Object(M.a)(Object(M.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-300},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function he(e){var t=Object(n.useState)(!0),a=Object(d.a)(t,1)[0],r=pe(),i=Object(G.a)(),c=Object(n.useState)(!1),s=Object(d.a)(c,2),o=s[0],l=s[1],j=Object(n.useState)(null),b=Object(d.a)(j,2),u=b[0],p=b[1],h=Boolean(u),x=function(){p(!1)};return Object(v.jsxs)("div",{className:r.root,children:[Object(v.jsx)(T.a,{}),Object(v.jsx)(N.a,{position:"fixed",className:Object(C.a)(r.appBar,Object(B.a)({},r.appBarShift,o)),children:Object(v.jsxs)(A.a,{children:[Object(v.jsx)(E.a,{onClick:function(){l(!0),console.log(e)},edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(v.jsx)(z.a,{})}),Object(v.jsx)(L.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Photos"}),Object(v.jsx)(re,{}),a&&Object(v.jsxs)("div",{children:[Object(v.jsx)(E.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",onClick:function(e){p(e.currentTarget)},children:Object(v.jsx)(ce.a,{})}),Object(v.jsxs)(E.a,{color:"inherit",children:[Object(v.jsx)(F.a,{id:"menu-appbar",anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:h,onClose:x,children:Object(v.jsxs)(je.a,{children:[Object(v.jsx)(H.a,{onClick:x,children:Object(v.jsx)(be.a,{children:Object(v.jsx)(je.b,{className:"link",to:"/russian",children:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"})})}),Object(v.jsx)(H.a,{onClick:x,children:Object(v.jsx)(be.a,{children:Object(v.jsx)(je.b,{className:"link",to:"/",children:"English"})})})]})}),Object(v.jsx)(X.a,{})]})]})]})}),Object(v.jsxs)(P.a,{className:r.drawer,variant:"persistent",anchor:"left",open:o,classes:{paper:r.drawerPaper},children:[Object(v.jsx)("div",{className:r.drawerHeader,children:Object(v.jsx)(E.a,{onClick:function(){l(!1)},children:"ltr"===i.direction?Object(v.jsxs)("div",{children:["Options",Object(v.jsx)(q.a,{})]}):Object(v.jsx)(J.a,{})})}),Object(v.jsx)(U.a,{}),Object(v.jsx)(I.a,{children:["Total size","User photos"].map((function(e,t){return Object(v.jsxs)(K.a,{button:!0,children:[Object(v.jsx)(Q.a,{children:t%2===0?Object(v.jsx)(de.a,{}):Object(v.jsx)(oe.a,{})}),Object(v.jsx)(V.a,{primary:e})]},e)}))}),Object(v.jsx)(U.a,{})]})]})}function xe(){return Object(v.jsx)(S.a,{sx:{flexGrow:1},children:Object(v.jsx)(N.a,{position:"static",children:Object(v.jsx)(he,{})})})}var Oe=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(xe,{}),Object(v.jsx)("div",{className:"photoGrid",children:Object(v.jsx)(w,{photos:[{photo:"./images/bag.jpg",id:1,name:"Night bag"},{photo:"./images/walk.jpg",id:2,name:"Alley"},{photo:"./images/sunset.jpg",id:3,name:"Sunset"},{photo:"./images/sunrise.jpg",id:4,name:"Sunrise"},{photo:"./images/300x200.jpg",name:"fon"},{adding:"",name:""}]})})]})},me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,180)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))};c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(Oe,{})}),document.getElementById("root")),me()}},[[117,1,2]]]);
//# sourceMappingURL=main.2c47f48a.chunk.js.map