(this.webpackJsonpgallery=this.webpackJsonpgallery||[]).push([[0],{76:function(e,t,a){},77:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(10),r=a.n(c),s=(a(76),a(77),a(132)),o=a(88),l=a(133),d=a(13),j=a(141),u=a(128),b=a(131),p=a(58),x=a.n(p),m=a(5);function O(e){var t=e.image,a=Object(i.useState)(),n=Object(d.a)(a,2),c=n[0],r=n[1],s=Object(i.useState)(),o=Object(d.a)(s,2),l=o[0],p=o[1];Object(i.useEffect)((function(){if(c){var e=URL.createObjectURL(c);return p(e),console.log(e),document.querySelector(".MuiGrid-root").insertAdjacentHTML("beforeend",'<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-3 MuiGrid-grid-lg-4">\n        <div class="MuiPaper-root makeStyles-paper-2 MuiPaper-elevation1 MuiPaper-rounded">\n        <h1>Adding files</h1>\n\n        <button class="MuiButtonBase-root MuiButton-root MuiButton-text" tabindex="0" type="button"><span class="MuiButton-label">\n          <div class="cardAdd">\n            <img class="card-img card card-img" src="'.concat(e,'">\n          </div>\n        </div>')),function(){return URL.revokeObjectURL(e)}}p(void 0)}),[c]);return null!=t.photo?Object(m.jsx)(u.a,{children:Object(m.jsx)("div",{lassName:"card",onClick:O,children:Object(m.jsx)(j.a.Img,{className:"card",src:t.photo})})}):Object(m.jsx)(u.a,{type:"file",children:Object(m.jsxs)("div",{className:"cardAdd",children:[c&&Object(m.jsx)(j.a.Img,{className:"card card-img",src:l}),Object(m.jsxs)(b.a,{color:"primary",children:[Object(m.jsx)("input",{className:"input",type:"file",onChange:function(e){r(e.target.files[0]);var a=Array.from(e.target.files);a.forEach((function(e){t=Array.from(t),t=e,console.log(a)}))}}),Object(m.jsx)(x.a,{})]})]})})}var h=Object(s.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function g(e){var t=h();return Object(m.jsx)("div",{className:t.root,children:Object(m.jsx)(l.a,{container:!0,spacing:3,children:e.photos.map((function(e){return Object(m.jsx)(l.a,{item:!0,lg:4,xs:12,sm:6,md:3,children:Object(m.jsx)(o.a,{className:t.paper,children:Object(m.jsx)(O,{image:e})})})}))})})}var f=a(135),v=a(140),y=a(136),M=a(138),N=a(137),k=a(59),S=a.n(k),C=a(60),G=a.n(C),w=a(139),A=a(142),B=a(134),L=a(89),I=a(51),P=a.n(I),z=Object(s.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{display:"flex",flexDirection:"column",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),U=function(){var e=z(),t=Object(i.useState)(!1),a=Object(d.a)(t,2),n=a[0],c=a[1];return Object(m.jsx)("div",{className:"modal",children:Object(m.jsxs)("div",{className:"modal_content",children:[Object(m.jsx)(u.a,{className:"authbtn",endIcon:Object(m.jsx)(P.a,{}),onClick:function(){c(!0)},variant:"contained",style:{background:"#ff9800",color:"#fff"},children:"Sign Up"}),Object(m.jsx)(A.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:n,onClose:function(){c(!1)},closeAfterTransition:!0,BackdropComponent:B.a,BackdropProps:{timeout:500},children:Object(m.jsx)(L.a,{in:n,children:Object(m.jsxs)("div",{className:e.paper,children:[Object(m.jsx)("h2",{children:" Create new account"}),Object(m.jsxs)("div",{children:[Object(m.jsx)(w.a,{label:"Size",id:"filled-size-small",defaultValue:"Small",variant:"filled",size:"small"}),Object(m.jsx)(w.a,{label:"Size",id:"filled-size-normal",defaultValue:"Normal",variant:"filled"})]}),Object(m.jsx)(b.a,{"aria-label":"like",children:Object(m.jsx)(P.a,{})})]})})})]})})};function F(){var e=Object(i.useState)(!0),t=Object(d.a)(e,1)[0];return Object(m.jsx)(v.a,{sx:{flexGrow:1},children:Object(m.jsx)(f.a,{position:"static",children:Object(m.jsxs)(y.a,{children:[Object(m.jsx)(N.a,{edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(m.jsx)(S.a,{})}),Object(m.jsx)(M.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"My gallery"}),Object(m.jsx)(U,{}),t&&Object(m.jsx)("div",{children:Object(m.jsx)(N.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",children:Object(m.jsx)(G.a,{})})})]})})})}var R=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(F,{}),Object(m.jsx)("div",{className:"photoGrid",children:Object(m.jsx)(g,{photos:[{photo:"./images/bag.jpg",id:1},{photo:"./images/walk.jpg",id:2},{photo:"./images/sunset.jpg",id:3},{photo:"./images/sunrise.jpg",id:4},{photo:"./images/300x200.jpg"},{adding:""}]})})]})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,144)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),i(e),n(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root")),T()}},[[85,1,2]]]);
//# sourceMappingURL=main.38eacb11.chunk.js.map