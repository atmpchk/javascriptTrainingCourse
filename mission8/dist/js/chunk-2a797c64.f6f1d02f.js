(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a797c64"],{"057f":function(t,r,i){var n=i("fc6a"),e=i("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return e(t)}catch(r){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?c(t):e(n(t))}},1276:function(t,r,i){"use strict";var n=i("d784"),e=i("44e7"),o=i("825a"),a=i("1d80"),c=i("4840"),s=i("8aa5"),u=i("50c4"),f=i("14c3"),d=i("9263"),l=i("d039"),p=[].push,h=Math.min,g=4294967295,v=!l((function(){return!RegExp(g,"y")}));n("split",2,(function(t,r,i){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var n=String(a(this)),o=void 0===i?g:i>>>0;if(0===o)return[];if(void 0===t)return[n];if(!e(t))return r.call(n,t,o);var c,s,u,f=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,v=new RegExp(t.source,l+"g");while(c=d.call(v,n)){if(s=v.lastIndex,s>h&&(f.push(n.slice(h,c.index)),c.length>1&&c.index<n.length&&p.apply(f,c.slice(1)),u=c[0].length,h=s,f.length>=o))break;v.lastIndex===c.index&&v.lastIndex++}return h===n.length?!u&&v.test("")||f.push(""):f.push(n.slice(h)),f.length>o?f.slice(0,o):f}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:r.call(this,t,i)}:r,[function(r,i){var e=a(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,e,i):n.call(String(e),r,i)},function(t,e){var a=i(n,t,this,e,n!==r);if(a.done)return a.value;var d=o(t),l=String(this),p=c(d,RegExp),b=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),y=new p(v?d:"^(?:"+d.source+")",m),w=void 0===e?g:e>>>0;if(0===w)return[];if(0===l.length)return null===f(y,l)?[l]:[];var I=0,S=0,C=[];while(S<l.length){y.lastIndex=v?S:0;var x,P=f(y,v?l:l.slice(S));if(null===P||(x=h(u(y.lastIndex+(v?0:S)),l.length))===I)S=s(l,S,b);else{if(C.push(l.slice(I,S)),C.length===w)return C;for(var O=1;O<=P.length-1;O++)if(C.push(P[O]),C.length===w)return C;S=I=x}}return C.push(l.slice(I)),C}]}),!v)},"13d5":function(t,r,i){"use strict";var n=i("23e7"),e=i("d58f").left,o=i("a640"),a=i("ae40"),c=o("reduce"),s=a("reduce",{1:0});n({target:"Array",proto:!0,forced:!c||!s},{reduce:function(t){return e(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},1732:function(t,r,i){"use strict";var n=i("ce93"),e=i.n(n);e.a},"25f0":function(t,r,i){"use strict";var n=i("6eeb"),e=i("825a"),o=i("d039"),a=i("ad6d"),c="toString",s=RegExp.prototype,u=s[c],f=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=c;(f||d)&&n(RegExp.prototype,c,(function(){var t=e(this),r=String(t.source),i=t.flags,n=String(void 0===i&&t instanceof RegExp&&!("flags"in s)?a.call(t):i);return"/"+r+"/"+n}),{unsafe:!0})},"347e":function(t,r,i){"use strict";i.r(r);var n=function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",[i("loading",{attrs:{active:t.isLoading,"is-full-page":t.isFullPageLoading},on:{"update:active":function(r){t.isLoading=r}}}),t._m(0),i("div",{staticClass:"container mt-md-5 mt-3 mb-7"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"list-group list-group-flush"},[i("button",{staticClass:"list-group-item list-group-item-action border-top",class:{active:"*"===t.currGroup},attrs:{type:"button"},on:{click:function(r){return t.switchGroup("*")}}},[t._v(" 所有美味 ")]),t.haveFavorites?i("button",{staticClass:"list-group-item list-group-item-action",class:{active:"favorited"===t.currGroup},attrs:{type:"button"},on:{click:function(r){return t.switchGroup("favorited")}}},[t._v(" 就是享要 "),i("i",{staticClass:"fas fa-heart"})]):t._e(),t._l(Object.keys(t.groupedProducts),(function(r,n){return i("button",{key:r,staticClass:"list-group-item list-group-item-action",class:t.listGroupStyles(n),attrs:{type:"button"},on:{click:function(i){return t.switchGroup(r)}}},[t._v(" "+t._s(r)+" ")])}))],2)]),i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"row"},t._l(t.filteredProducts,(function(r){return i("div",{key:r.id,staticClass:"col-md-6"},[i("product",{attrs:{product:r,"in-cart":t.isInCart(r),favorited:t.isFavorite(r)},on:{"put-to-cart":t.putToCart,"toggle-favorite":t.toggleFavorite}})],1)})),0)])])])],1)},e=[function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",{staticClass:"position-relative d-flex align-items-center justify-content-center",staticStyle:{"min-height":"400px"}},[i("div",{staticClass:"position-absolute jumbotron-img"}),i("h2",{staticClass:"font-weight-bold"},[t._v("只溶於口、不溶於手")])])}],o=(i("99af"),i("4de4"),i("c740"),i("caad"),i("c975"),i("d81d"),i("a434"),i("b64b"),i("d3b7"),i("ac1f"),i("25f0"),i("2532"),i("3ca3"),i("1276"),i("ddb0"),function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",{staticClass:"card border-0 mb-4 position-relative position-relative"},[i("div",{staticClass:"responsive-rectangle"},[i("router-link",{attrs:{to:"/product/"+t.product.id}},[i("img",{staticClass:"card-img-top rounded-0",attrs:{src:t.product.imageUrl[0],alt:"..."}})])],1),i("a",{staticClass:"text-dark",attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.toggleFavorite(t.product)}}},[t.favorited?i("i",{staticClass:"fas fa-heart position-absolute",staticStyle:{right:"16px",top:"16px"}}):i("i",{staticClass:"far fa-heart position-absolute",staticStyle:{right:"16px",top:"16px"}})]),i("div",{staticClass:"card-body p-0"},[i("h4",{staticClass:"mb-0 mt-3 pl-1"},[i("router-link",{attrs:{to:"/product/"+t.product.id}},[t._v(" "+t._s(t.product.title)+" ")])],1),i("p",{staticClass:"card-text mb-0 pl-1"},[t._v(" "+t._s(t._f("formatCurrency")(t.product.price))+" ")]),i("p",{staticClass:"text-muted mt-3"})])])}),a=[],c=(i("a4d3"),i("e01a"),{props:["product","inCart","favorited"],data:function(){return{apiInfo:{forCart:"/ec/shopping",forProduct:"/ec/product"},isLoading:!1}},computed:{},watch:{$route:function(t){t.params.id===this.product.id&&this.updateThisProduct()}},methods:{putToCart:function(t){var r=this;this.isLoading=!0,this.axios.post(this.apiInfo.forCart,{product:t.id,quantity:1}).then((function(){r.$emit("put-to-cart",t.id),r.isLoading=!1})).catch((function(t){r.isLoading=!1,console.log(t)}))},routeToThisProduct:function(t){this.$router.push("/product/".concat(t.id))},updateThisProduct:function(){var t=this;this.isLoading=!0,this.axios.get("".concat(this.apiInfo.forProduct,"/").concat(this.product.id)).then((function(r){t.product.description=r.data.data.description,t.isLoading=!1})).catch((function(r){t.isLoading=!1,console.log(r)}))},toggleFavorite:function(t){this.$emit("toggle-favorite",t.id)}}}),s=c,u=(i("4759"),i("2877")),f=Object(u["a"])(s,o,a,!1,null,"f2d46336",null),d=f.exports;i("13d5");function l(t,r){return t.reduce((function(t,i){var n=i[r];if(!t[n]){var e={};e[n]=[],Object.assign(t,e)}return t[n].push(i),t}),{})}var p=l,h={components:{Product:d},data:function(){return{apiInfo:{forCart:"/ec/shopping",forProducts:"/ec/products"},productIdsInCart:[],products:[],currGroup:"*",isLoading:!1,isFullPageLoading:!0,pagination:{},favoriteInfo:{key:"hexSchoolFavorites",content:[]}}},computed:{isInCart:function(){var t=this;return function(r){return t.productIdsInCart.includes(r.id)}},groupedProducts:function(){return p(this.products,"category")},filteredProducts:function(){var t=this;return"*"===this.currGroup?this.products:"favorited"===this.currGroup?this.products.filter((function(r){return t.favoriteInfo.content.includes(r.id)})):this.groupedProducts[this.currGroup]},listGroupStyles:function(){var t=this;return function(r){return{active:r===Object.keys(t.groupedProducts).findIndex((function(r){return r===t.currGroup})),"border-bottom":r===Object.keys(t.groupedProducts).length-1}}},isFavorite:function(){var t=this;return function(r){return t.favoriteInfo.content.includes(r.id)}},haveFavorites:function(){return this.favoriteInfo.content.length>0}},created:function(){this.currGroup=this.$route.params.category?this.$route.params.category:"*",this.favoriteInfo.content=window.localStorage.getItem(this.favoriteInfo.key)?window.localStorage.getItem(this.favoriteInfo.key).split(","):[]},mounted:function(){var t=this;this.isLoading=!0,Promise.all([this.getProductIdsInCart(),this.getProducts()]).then((function(r){t.setProductIdsInCart(r[0]),t.setProducts(r[1]),t.isLoading=!1})).catch((function(r){t.isLoading=!1,console.log(r)}))},methods:{switchGroup:function(t){this.currGroup=t,this.$router.push("/products/".concat(t))},givePage:function(t){return t||(this.pagination.current_page||1)},getProductIdsInCart:function(t){return this.axios.get("".concat(this.apiInfo.forCart,"?page=").concat(this.givePage(t)))},setProductIdsInCart:function(t){this.productIdsInCart=t.data.data.map((function(t){return t.product.id}))},getProducts:function(t){return this.axios.get("".concat(this.apiInfo.forProducts,"?page=").concat(this.givePage(t)))},setProducts:function(t){this.products=t.data.data,this.pagination=t.data.meta.pagination},putToCart:function(t){this.productIdsInCart.push(t)},toggleFavorite:function(t){var r=this.favoriteInfo.content.indexOf(t);r>-1?this.favoriteInfo.content.splice(r,1):this.favoriteInfo.content.push(t),this.trySwitchFilterWhenFavoritesEmpty();var i=window.localStorage;i.setItem(this.favoriteInfo.key,this.favoriteInfo.content.toString())},trySwitchFilterWhenFavoritesEmpty:function(){this.haveFavorites||(this.currGroup="*",this.$router.push("/products/*"))}}},g=h,v=(i("1732"),Object(u["a"])(g,n,e,!1,null,"40d1bfbc",null));r["default"]=v.exports},"3ca3":function(t,r,i){"use strict";var n=i("6547").charAt,e=i("69f3"),o=i("7dd0"),a="String Iterator",c=e.set,s=e.getterFor(a);o(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,r=s(this),i=r.string,e=r.index;return e>=i.length?{value:void 0,done:!0}:(t=n(i,e),r.index+=t.length,{value:t,done:!1})}))},4759:function(t,r,i){"use strict";var n=i("dce0"),e=i.n(n);e.a},"746f":function(t,r,i){var n=i("428f"),e=i("5135"),o=i("e538"),a=i("9bf2").f;t.exports=function(t){var r=n.Symbol||(n.Symbol={});e(r,t)||a(r,t,{value:o.f(t)})}},a4d3:function(t,r,i){"use strict";var n=i("23e7"),e=i("da84"),o=i("d066"),a=i("c430"),c=i("83ab"),s=i("4930"),u=i("fdbf"),f=i("d039"),d=i("5135"),l=i("e8b5"),p=i("861d"),h=i("825a"),g=i("7b0b"),v=i("fc6a"),b=i("c04e"),m=i("5c6c"),y=i("7c73"),w=i("df75"),I=i("241c"),S=i("057f"),C=i("7418"),x=i("06cf"),P=i("9bf2"),O=i("d1e7"),k=i("9112"),_=i("6eeb"),j=i("5692"),F=i("f772"),E=i("d012"),G=i("90e3"),L=i("b622"),$=i("e538"),T=i("746f"),R=i("d44e"),N=i("69f3"),J=i("b727").forEach,W=F("hidden"),A="Symbol",D="prototype",q=L("toPrimitive"),M=N.set,Q=N.getterFor(A),U=Object[D],z=e.Symbol,B=o("JSON","stringify"),H=x.f,K=P.f,V=S.f,X=O.f,Y=j("symbols"),Z=j("op-symbols"),tt=j("string-to-symbol-registry"),rt=j("symbol-to-string-registry"),it=j("wks"),nt=e.QObject,et=!nt||!nt[D]||!nt[D].findChild,ot=c&&f((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,r,i){var n=H(U,r);n&&delete U[r],K(t,r,i),n&&t!==U&&K(U,r,n)}:K,at=function(t,r){var i=Y[t]=y(z[D]);return M(i,{type:A,tag:t,description:r}),c||(i.description=r),i},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},st=function(t,r,i){t===U&&st(Z,r,i),h(t);var n=b(r,!0);return h(i),d(Y,n)?(i.enumerable?(d(t,W)&&t[W][n]&&(t[W][n]=!1),i=y(i,{enumerable:m(0,!1)})):(d(t,W)||K(t,W,m(1,{})),t[W][n]=!0),ot(t,n,i)):K(t,n,i)},ut=function(t,r){h(t);var i=v(r),n=w(i).concat(ht(i));return J(n,(function(r){c&&!dt.call(i,r)||st(t,r,i[r])})),t},ft=function(t,r){return void 0===r?y(t):ut(y(t),r)},dt=function(t){var r=b(t,!0),i=X.call(this,r);return!(this===U&&d(Y,r)&&!d(Z,r))&&(!(i||!d(this,r)||!d(Y,r)||d(this,W)&&this[W][r])||i)},lt=function(t,r){var i=v(t),n=b(r,!0);if(i!==U||!d(Y,n)||d(Z,n)){var e=H(i,n);return!e||!d(Y,n)||d(i,W)&&i[W][n]||(e.enumerable=!0),e}},pt=function(t){var r=V(v(t)),i=[];return J(r,(function(t){d(Y,t)||d(E,t)||i.push(t)})),i},ht=function(t){var r=t===U,i=V(r?Z:v(t)),n=[];return J(i,(function(t){!d(Y,t)||r&&!d(U,t)||n.push(Y[t])})),n};if(s||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,r=G(t),i=function(t){this===U&&i.call(Z,t),d(this,W)&&d(this[W],r)&&(this[W][r]=!1),ot(this,r,m(1,t))};return c&&et&&ot(U,r,{configurable:!0,set:i}),at(r,t)},_(z[D],"toString",(function(){return Q(this).tag})),_(z,"withoutSetter",(function(t){return at(G(t),t)})),O.f=dt,P.f=st,x.f=lt,I.f=S.f=pt,C.f=ht,$.f=function(t){return at(L(t),t)},c&&(K(z[D],"description",{configurable:!0,get:function(){return Q(this).description}}),a||_(U,"propertyIsEnumerable",dt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:z}),J(w(it),(function(t){T(t)})),n({target:A,stat:!0,forced:!s},{for:function(t){var r=String(t);if(d(tt,r))return tt[r];var i=z(r);return tt[r]=i,rt[i]=r,i},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(d(rt,t))return rt[t]},useSetter:function(){et=!0},useSimple:function(){et=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:lt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:ht}),n({target:"Object",stat:!0,forced:f((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(g(t))}}),B){var gt=!s||f((function(){var t=z();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}));n({target:"JSON",stat:!0,forced:gt},{stringify:function(t,r,i){var n,e=[t],o=1;while(arguments.length>o)e.push(arguments[o++]);if(n=r,(p(r)||void 0!==t)&&!ct(t))return l(r)||(r=function(t,r){if("function"==typeof n&&(r=n.call(this,t,r)),!ct(r))return r}),e[1]=r,B.apply(null,e)}})}z[D][q]||k(z[D],q,z[D].valueOf),R(z,A),E[W]=!0},ce93:function(t,r,i){},d58f:function(t,r,i){var n=i("1c0b"),e=i("7b0b"),o=i("44ad"),a=i("50c4"),c=function(t){return function(r,i,c,s){n(i);var u=e(r),f=o(u),d=a(u.length),l=t?d-1:0,p=t?-1:1;if(c<2)while(1){if(l in f){s=f[l],l+=p;break}if(l+=p,t?l<0:d<=l)throw TypeError("Reduce of empty array with no initial value")}for(;t?l>=0:d>l;l+=p)l in f&&(s=i(s,f[l],l,u));return s}};t.exports={left:c(!1),right:c(!0)}},dce0:function(t,r,i){},ddb0:function(t,r,i){var n=i("da84"),e=i("fdbc"),o=i("e260"),a=i("9112"),c=i("b622"),s=c("iterator"),u=c("toStringTag"),f=o.values;for(var d in e){var l=n[d],p=l&&l.prototype;if(p){if(p[s]!==f)try{a(p,s,f)}catch(g){p[s]=f}if(p[u]||a(p,u,d),e[d])for(var h in o)if(p[h]!==o[h])try{a(p,h,o[h])}catch(g){p[h]=o[h]}}}},e01a:function(t,r,i){"use strict";var n=i("23e7"),e=i("83ab"),o=i("da84"),a=i("5135"),c=i("861d"),s=i("9bf2").f,u=i("e893"),f=o.Symbol;if(e&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var d={},l=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),r=this instanceof l?new f(t):void 0===t?f():f(t);return""===t&&(d[r]=!0),r};u(l,f);var p=l.prototype=f.prototype;p.constructor=l;var h=p.toString,g="Symbol(test)"==String(f("test")),v=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,r=h.call(t);if(a(d,t))return"";var i=g?r.slice(7,-1):r.replace(v,"$1");return""===i?void 0:i}}),n({global:!0,forced:!0},{Symbol:l})}},e538:function(t,r,i){var n=i("b622");r.f=n}}]);
//# sourceMappingURL=chunk-2a797c64.f6f1d02f.js.map