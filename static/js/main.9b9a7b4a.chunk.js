(this["webpackJsonpatorable-react-example"]=this["webpackJsonpatorable-react-example"]||[]).push([[0],{100:function(t,e){},110:function(t,e){},115:function(t,e){},118:function(t,e){},119:function(t,e){},121:function(t,e){},122:function(t,e){},124:function(t,e){},126:function(t,e){},146:function(t,e){},152:function(t,e){},154:function(t,e){},155:function(t,e){},156:function(t,e){},159:function(t,e){},161:function(t,e){},162:function(t,e){},165:function(t,e){},166:function(t,e){},169:function(t,e){},172:function(t,e){},173:function(t,e){},200:function(t,e){},202:function(t,e,n){},203:function(t,e,n){"use strict";n.r(e);n(80);var r=n(0),o=n.n(r),c=n(77),a=n.n(c),i=n(78),u=new(n.n(i).a);u.on("error",(function(t){console.log("err",t)}));var s=function(t,e){"string"!==typeof t&&(t=t.default);var n=u.get(t);if(n){var r=n;r.name?e(r):u.on("torrent",(function(t){(null===r||void 0===r?void 0:r.infoHash)===(null===t||void 0===t?void 0:t.infoHash)&&e(t)}))}else u.add(t,(function(t){e(t)}))},l=function(t,e){t.files.forEach((function(t){e(t)}))},f=function(t){var e=Object(r.useState)(),n=e[0],o=e[1],c=Object(r.useState)(),a=c[0],i=c[1],u=function(t){o(t),t.getBlobURL((function(t,e){if(t)throw t;i(e)}))},f=function(t){l(t,u)};return Object(r.useEffect)((function(){return s(t.magnetLink,f),function(){}}),[]),Object(r.createElement)(r.Fragment,null,Object(r.createElement)("img",{src:a,alt:null===n||void 0===n?void 0:n.name,width:t.width,height:t.height,sizes:t.sizes,style:t.style}))},d=function(t){var e=Object(r.useRef)(null),n=Object(r.useState)(),o=n[0],c=n[1],a=Object(r.useState)(),i=a[0],u=a[1],f=function(t){t.name.includes(".mp4")&&(c(t),t.getBlobURL((function(t,e){if(t)throw t;u(e)})))},d=function(t){l(t,f)};return Object(r.useEffect)((function(){return s(t.magnetLink,d),function(){}}),[]),Object(r.createElement)(r.Fragment,null,i?null:Object(r.createElement)("h2",{style:{color:"orange"}},"Loading"),Object(r.createElement)("video",{width:t.width,height:t.height,controls:!0,autoPlay:!0,muted:!0,ref:e,src:i},Object(r.createElement)("source",{type:t.type}),"Your browser does not support the video tag.",null===o||void 0===o?void 0:o.name))},F=function(t){var e=Object(r.useRef)(null);return Object(r.useEffect)((function(){var n={autoplay:t.autoplay,muted:!0},r=function(t){t.name.includes(".mp4")&&t.renderTo(e.current,n,(function(t,e){if(t)throw t;console.log("New DOM node with the content",e)}))};return s(t.magnetLink,(function(t){l(t,r)})),function(){}}),[]),Object(r.createElement)(r.Fragment,null,Object(r.createElement)("video",{width:t.width,height:t.height,controls:!0,muted:!0,ref:e},Object(r.createElement)("source",{type:"video/mp4"}),"Your browser does not support the video tag."))},p=function(t){var e=t.children,n=Object(r.useState)(),o=n[0],c=n[1],a=function(t){var n=r.Children.map(e,(function(e){return Object(r.cloneElement)(e,{torrent:t})}));c(n)};return Object(r.useEffect)((function(){return s(t.magnetLink,a),function(){}}),[]),Object(r.createElement)(r.Fragment,null,o)},m=function(t){var e=Object(r.useState)(),n=e[0],o=e[1],c=Object(r.useState)(),a=c[0],i=c[1],u=function(t){o(t),t.getBlobURL((function(t,e){if(t)throw t;i(e)}))};return Object(r.useEffect)((function(){var e;return e=t.torrent,l(e,u),function(){}}),[]),Object(r.createElement)(r.Fragment,null,Object(r.createElement)("img",{src:a,alt:null===n||void 0===n?void 0:n.name,width:t.width,height:t.height,sizes:t.sizes,style:t.style}))},h=(n(202),"magnet:?xt=urn:btih:dc94d0d5b4a4ca82bbe4d335ddb65ef7ea3de374&dn=DSC4470.jpg&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FDSC4470.jpg&xs=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FDSC4470.torrent"),g=function(){return o.a.createElement("div",null,o.a.createElement(d,{width:"320",height:"240",type:"video/mp4",magnetLink:"magnet:?xt=urn:btih:17a613e4a81e52cf41cab72157a24faecaa8f2f5&dn=GOPR0093.mp4&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FGOPR0093.mp4&xs=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FGOPR0093.torrent"}),o.a.createElement(F,{width:"320",height:"240",autoplay:!0,magnetLink:"magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent"}),o.a.createElement("br",null),o.a.createElement(f,{magnetLink:h,style:{border:"solid"}}),o.a.createElement(p,{magnetLink:h},o.a.createElement(m,null)))};a.a.render(o.a.createElement(g,null),document.getElementById("root"))},79:function(t,e,n){t.exports=n(203)},80:function(t,e,n){},98:function(t,e){}},[[79,1,2]]]);
//# sourceMappingURL=main.9b9a7b4a.chunk.js.map