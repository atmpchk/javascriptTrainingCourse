(function(e){function t(t){for(var r,a,o=t[0],u=t[1],l=t[2],d=0,f=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c={app:0},i=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-05c1df11":"d288f2c2","chunk-2d0e1b36":"8d4a49c3","chunk-2d0e4bf7":"2de7d970","chunk-5b198161":"2f663590","chunk-a3d00b82":"c2d4b945","chunk-a41ce01c":"7713a03a","chunk-c8003718":"519b36b1"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-05c1df11":1,"chunk-a41ce01c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-05c1df11":"907afccf","chunk-2d0e1b36":"31d6cfe0","chunk-2d0e4bf7":"31d6cfe0","chunk-5b198161":"31d6cfe0","chunk-a3d00b82":"31d6cfe0","chunk-a41ce01c":"88c26829","chunk-c8003718":"31d6cfe0"}[e]+".css",c=u.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===c))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){l=f[o],d=l.getAttribute("data-href");if(d===r||d===c)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var r=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],s.parentNode.removeChild(s),n(i)},s.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(s)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=o(e);var f=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(s);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}c[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/javascriptTrainingCourse/mission6/dist/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var s=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("4de4"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],i=(n("5c0b"),n("2877")),o={},u=Object(i["a"])(o,a,c,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("首頁")]),e._v(" | "),n("router-link",{attrs:{to:"/products"}},[e._v("產品列表")]),e._v(" | "),n("router-link",{attrs:{to:"/cart"}},[e._v("購物車")]),e._v(" | "),n("router-link",{attrs:{to:"/checkOut"}},[e._v("結帳")]),e._v(" | "),n("router-link",{attrs:{to:"/checkOutFinished"}},[e._v("結帳完成")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("關於我們")])],1),n("router-view")],1)},s=[],h={name:"Attraction"},p=h,m=Object(i["a"])(p,f,s,!1,null,null,null),_=m.exports;r["a"].use(d["a"]);var b=[{path:"/",name:"Attraction",component:_,children:[{path:"",name:"attraction.index",component:function(){return n.e("chunk-05c1df11").then(n.bind(null,"4fa0"))}},{path:"products",name:"attraction.products",component:function(){return n.e("chunk-c8003718").then(n.bind(null,"347e"))},children:[{path:":id",name:"attraction.products.id",component:function(){return n.e("chunk-5b198161").then(n.bind(null,"8dc4"))}}]},{path:"cart",name:"attraction.cart",component:function(){return n.e("chunk-a3d00b82").then(n.bind(null,"48af"))}},{path:"checkOut",name:"attraction.checkOut",component:function(){return n.e("chunk-2d0e1b36").then(n.bind(null,"7c0d"))}},{path:"checkOutFinished",name:"attraction.checkOutFinished",component:function(){return n.e("chunk-2d0e4bf7").then(n.bind(null,"9219"))}},{path:"about",name:"attraction.about",component:function(){return n.e("chunk-a41ce01c").then(n.bind(null,"d376"))}}]}],v=new d["a"]({routes:b}),g=v,k=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0});function y(e){return null===e||void 0===e?"":k.format(e)}var O=y,w=(n("99af"),n("bc3a")),x=n.n(w),j=n("a7fe"),E=n.n(j);function S(e){x.a.defaults.baseURL=e}function P(){S("".concat("https://course-ec-api.hexschool.io/api/").concat("840d218c-ef17-4e49-90d3-cfef6170a5e5","/"))}r["a"].use(E.a,x.a);n("4989");var T=n("1157"),C=n.n(T);window.$=C.a;var A=n("9062"),L=n.n(A);n("e40d");r["a"].component("Loading",L.a);n("4160"),n("b64b"),n("159b");var N=n("7bb1"),F=n("4c93"),q=n("596a");Object.keys(F).forEach((function(e){Object(N["d"])(e,F[e])})),Object(N["c"])({classes:{valid:"is-valid",invalid:"is-invalid"}}),Object(N["e"])("tw",q),r["a"].component("ValidationProvider",N["b"]),r["a"].component("ValidationObserver",N["a"]),r["a"].config.productionTip=!1,P(),r["a"].filter("formatCurrency",O),new r["a"]({router:g,render:function(e){return e(l)}}).$mount("#app")},"596a":function(e){e.exports=JSON.parse('{"code":"zh_TW","names":{"name":"收件人姓名","email":"E-mail","tel":"電話","address":"地址","payment":"付款方式"},"messages":{"alpha":"{_field_} 須以英文組成","alpha_dash":"{_field_} 須以英數、斜線及底線組成","alpha_num":"{_field_} 須以英數組成","alpha_spaces":"{_field_} 須以英文及空格組成","between":"{_field_} 須介於 {min} 至 {max}之間","confirmed":" {_field_} 不一致","digits":"{_field_} 須為 {length} 位數字","dimensions":"{_field_} 圖片尺寸不正確。須為 {width} x {height} 像素","email":"{_field_} 須為有效的電子信箱","excluded":"{_field_} 的選項無效","ext":"{_field_} 須為有效的檔案","image":"{_field_} 須為圖片","oneOf":"{_field_} 的選項無效","integer":"{_field_} 須為整數","length":"{_field_} 的長度須為 {length}","max":"{_field_} 不能大於 {length} 個字元","max_value":"{_field_} 不得大於 {max}","mimes":"{_field_} 須為有效的檔案類型","min":"{_field_} 不能小於 {length} 個字元","min_value":"{_field_} 不得小於 {min}","numeric":"{_field_} 須為數字","regex":"{_field_} 的格式錯誤","required":"{_field_} 為必填","required_if":"{_field_} 為必填","size":"{_field_} 的檔案須小於 {size}KB"}}')},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.59721664.js.map