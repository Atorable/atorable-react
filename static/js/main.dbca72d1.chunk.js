(this["webpackJsonpatorable-react-example"]=this["webpackJsonpatorable-react-example"]||[]).push([[0],{106:function(e,t,n){e.exports=n(233)},107:function(e,t,n){},125:function(e,t){},127:function(e,t){},137:function(e,t){},142:function(e,t){},145:function(e,t){},146:function(e,t){},148:function(e,t){},149:function(e,t){},151:function(e,t){},153:function(e,t){},173:function(e,t){},179:function(e,t){},181:function(e,t){},182:function(e,t){},183:function(e,t){},186:function(e,t){},188:function(e,t){},189:function(e,t){},192:function(e,t){},193:function(e,t){},196:function(e,t){},199:function(e,t){},200:function(e,t){},227:function(e,t){},233:function(e,t,n){"use strict";n.r(t);n(107);var a=n(0),r=n.n(a),o=n(28),c=n.n(o),i=n(97),l=new(n.n(i).a);l.on("error",(function(e){console.log("err",e)}));var u=function(e,t){"string"!==typeof e&&(e=e.default);var n=l.get(e);if(n){var a=n;a.name?t(a):l.on("torrent",(function(e){(null===a||void 0===a?void 0:a.infoHash)===(null===e||void 0===e?void 0:e.infoHash)&&t(e)}))}else l.add(e,(function(e){t(e)}))},s=function(e,t){e.files.forEach((function(e){t(e)}))},m=function(e){var t=Object(a.useState)(),n=t[0],r=t[1],o=Object(a.useState)(),c=o[0],i=o[1],l=function(e){r(e),e.getBlobURL((function(e,t){if(e)throw e;i(t)}))},m=function(e){s(e,l)};return Object(a.useEffect)((function(){return u(e.magnetLink,m),function(){}}),[]),Object(a.createElement)(a.Fragment,null,Object(a.createElement)("img",{src:c,alt:null===n||void 0===n?void 0:n.name,width:e.width,height:e.height,sizes:e.sizes,style:e.style}))},d=function(e){var t=Object(a.useRef)(null),n=Object(a.useState)(),r=n[0],o=n[1],c=Object(a.useState)(),i=c[0],l=c[1],m=function(e){e.name.includes(".mp4")&&(o(e),e.getBlobURL((function(e,t){if(e)throw e;l(t)})))},d=function(e){s(e,m)};return Object(a.useEffect)((function(){return u(e.magnetLink,d),function(){}}),[]),Object(a.createElement)(a.Fragment,null,i?null:Object(a.createElement)("h2",{style:{color:"orange"}},"Loading"),Object(a.createElement)("video",{width:e.width,height:e.height,controls:!0,autoPlay:!0,muted:!0,ref:t,src:i},Object(a.createElement)("source",{type:e.type}),"Your browser does not support the video tag.",null===r||void 0===r?void 0:r.name))},p=function(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){var n={autoplay:e.autoplay,muted:!0},a=function(e){e.name.includes(".mp4")&&e.renderTo(t.current,n,(function(e,t){if(e)throw e;console.log("New DOM node with the content",t)}))};return u(e.magnetLink,(function(e){s(e,a)})),function(){}}),[]),Object(a.createElement)(a.Fragment,null,Object(a.createElement)("video",{width:e.width,height:e.height,controls:!0,muted:!0,ref:t},Object(a.createElement)("source",{type:"video/mp4"}),"Your browser does not support the video tag."))},f=function(e){var t=e.children,n=Object(a.useState)(),r=n[0],o=n[1],c=function(e){var n=a.Children.map(t,(function(t){return Object(a.cloneElement)(t,{torrent:e})}));o(n)};return Object(a.useEffect)((function(){return u(e.magnetLink,c),function(){}}),[]),Object(a.createElement)(a.Fragment,null,r)},h=function(e){var t=Object(a.useState)(),n=t[0],r=t[1],o=Object(a.useState)(),c=o[0],i=o[1],l=function(e){r(e),e.getBlobURL((function(e,t){if(e)throw e;i(t)}))};return Object(a.useEffect)((function(){var t;return t=e.torrent,s(t,l),function(){}}),[]),Object(a.createElement)(a.Fragment,null,Object(a.createElement)("img",{src:c,alt:null===n||void 0===n?void 0:n.name,width:e.width,height:e.height,sizes:e.sizes,style:e.style}))},g=n(267),F=n(275),b=n(276),E=n(271),A=n(274),v=n(273),k=n(272),w=n(266),j=n(270),y=n(268),O=n(234),x=n(265),S=n(269),C=n(264);function L(){return r.a.createElement(O.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(C.a,{color:"inherit",href:"https://github.com/sergethompson/atorable-react"},"atorable-react")," ",(new Date).getFullYear(),".")}var z=Object(x.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})),B=[1,2,3],N="magnet:?xt=urn:btih:dc94d0d5b4a4ca82bbe4d335ddb65ef7ea3de374&dn=DSC4470.jpg&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FDSC4470.jpg&xs=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FDSC4470.torrent";function R(){var e=z();return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null),r.a.createElement(g.a,{position:"relative"},r.a.createElement(y.a,null,r.a.createElement(b.a,{className:e.icon}),r.a.createElement(O.a,{variant:"h6",color:"inherit",noWrap:!0},"atorable-react"))),r.a.createElement("main",null,r.a.createElement("div",{className:e.heroContent},r.a.createElement(S.a,{maxWidth:"sm"},r.a.createElement(O.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"atorable-react"),r.a.createElement(O.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"React component that processes a"," ",r.a.createElement(C.a,{color:"inherit",href:"https://webtorrent.io/"},"Webtorrent")," ","magnet uri and makes the resulting file available for viewing or other custom uses."),r.a.createElement("div",{className:e.heroButtons},r.a.createElement(j.a,{container:!0,spacing:2,justifyContent:"center"},r.a.createElement(j.a,{item:!0},r.a.createElement(F.a,{variant:"contained",color:"primary"},"Main call to action")),r.a.createElement(j.a,{item:!0},r.a.createElement(F.a,{variant:"outlined",color:"primary"},"Secondary action")))))),r.a.createElement(S.a,{className:e.cardGrid,maxWidth:"md"},r.a.createElement(d,{width:"320",height:"240",type:"video/mp4",magnetLink:"magnet:?xt=urn:btih:17a613e4a81e52cf41cab72157a24faecaa8f2f5&dn=GOPR0093.mp4&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FGOPR0093.mp4&xs=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FGOPR0093.torrent"}),r.a.createElement(p,{width:"320",height:"240",autoplay:!0,magnetLink:"magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent"}),r.a.createElement("br",null),r.a.createElement(m,{magnetLink:N,style:{border:"solid"}}),r.a.createElement(f,{magnetLink:N},r.a.createElement(h,null))),r.a.createElement(S.a,{className:e.cardGrid,maxWidth:"md"},r.a.createElement(j.a,{container:!0,spacing:4},B.map((function(t){return r.a.createElement(j.a,{item:!0,key:t,xs:12,sm:6,md:4},r.a.createElement(E.a,{className:e.card},r.a.createElement(k.a,{className:e.cardMedia,image:"https://github.com/Atorable/atorable-loader/blob/main/atorable.png",title:"atorable-react"}),r.a.createElement(v.a,{className:e.cardContent},r.a.createElement(O.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Heading"),r.a.createElement(O.a,null,"This is a media card. You can use this section to describe the content.")),r.a.createElement(A.a,null,r.a.createElement(F.a,{size:"small",color:"primary"},"View"),r.a.createElement(F.a,{size:"small",color:"primary"},"Edit"))))}))))),r.a.createElement("footer",{className:e.footer},r.a.createElement(O.a,{variant:"h6",align:"center",gutterBottom:!0},"Footer"),r.a.createElement(O.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Something here to give the footer a purpose!"),r.a.createElement(L,null)))}c.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.dbca72d1.chunk.js.map