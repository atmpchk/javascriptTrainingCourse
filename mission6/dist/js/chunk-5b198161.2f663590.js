(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b198161"],{"057f":function(t,r,n){var o=n("fc6a"),i=n("241c").f,e={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(r){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==e.call(t)?s(t):i(o(t))}},"746f":function(t,r,n){var o=n("428f"),i=n("5135"),e=n("e538"),c=n("9bf2").f;t.exports=function(t){var r=o.Symbol||(o.Symbol={});i(r,t)||c(r,t,{value:e.f(t)})}},"8dc4":function(t,r,n){"use strict";n.r(r);var o=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"card border-0 shadow-sm"},[n("img",{staticClass:"card-img-top",attrs:{src:t.product.imageUrl[0]}}),n("div",{staticClass:"card-body"},[n("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(t.product.category))]),n("h5",{staticClass:"card-title"},[t._v(t._s(t.product.title))]),n("p",{staticClass:"card-text"},[t._v(t._s(t.product.content))]),t.product.description?n("p",{staticClass:"alert alert-warning small"},[t._v(t._s(t.product.description))]):t._e(),n("p",{staticClass:"card-text text-right"},[t._v(t._s(t._f("formatCurrency")(t.product.price)))])]),n("div",{staticClass:"card-footer"},[n("div",{staticClass:"d-flex justify-content-around row"},[n("button",{staticClass:"col-5 btn btn-outline-secondary btn-sm",attrs:{type:"button",disabled:t.isLoading||t.product.description},on:{click:function(r){return t.routeToThisProduct(t.product)}}},[t.isLoading?n("i",{staticClass:"spinner-grow spinner-grow-sm"}):t._e(),t._v(" 詳細資訊 ")]),n("button",{staticClass:"col-5 btn btn-outline-primary btn-sm",attrs:{type:"button",disabled:t.isLoading||t.inCart},on:{click:function(r){return t.putToCart(t.product)}}},[t.isLoading?n("i",{staticClass:"spinner-grow spinner-grow-sm"}):t._e(),t._v(" 加入購物車 ")])])])])},i=[],e=(n("a4d3"),n("e01a"),n("99af"),{props:["product","inCart"],data:function(){return{apiInfo:{forCart:"/ec/shopping",forProduct:"/ec/product"},isLoading:!1}},computed:{},watch:{$route:function(t){t.params.id===this.product.id&&this.updateThisProduct()}},methods:{putToCart:function(t){var r=this;this.isLoading=!0,this.axios.post(this.apiInfo.forCart,{product:t.id,quantity:1}).then((function(){r.$emit("put-to-cart",t.id),r.isLoading=!1})).catch((function(t){r.isLoading=!1,console.log(t)}))},routeToThisProduct:function(t){this.$router.push("/products/".concat(t.id))},updateThisProduct:function(){var t=this;this.isLoading=!0,this.axios.get("".concat(this.apiInfo.forProduct,"/").concat(this.product.id)).then((function(r){t.product.description=r.data.data.description,t.isLoading=!1})).catch((function(r){t.isLoading=!1,console.log(r)}))}}}),c=e,s=n("2877"),a=Object(s["a"])(c,o,i,!1,null,null,null);r["default"]=a.exports},a4d3:function(t,r,n){"use strict";var o=n("23e7"),i=n("da84"),e=n("d066"),c=n("c430"),s=n("83ab"),a=n("4930"),u=n("fdbf"),f=n("d039"),d=n("5135"),l=n("e8b5"),p=n("861d"),b=n("825a"),g=n("7b0b"),h=n("fc6a"),v=n("c04e"),y=n("5c6c"),m=n("7c73"),w=n("df75"),S=n("241c"),C=n("057f"),O=n("7418"),_=n("06cf"),P=n("9bf2"),j=n("d1e7"),L=n("9112"),T=n("6eeb"),x=n("5692"),k=n("f772"),$=n("d012"),E=n("90e3"),N=n("b622"),I=n("e538"),J=n("746f"),F=n("d44e"),q=n("69f3"),D=n("b727").forEach,Q=k("hidden"),U="Symbol",W="prototype",z=N("toPrimitive"),A=q.set,B=q.getterFor(U),G=Object[W],H=i.Symbol,K=e("JSON","stringify"),M=_.f,R=P.f,V=C.f,X=j.f,Y=x("symbols"),Z=x("op-symbols"),tt=x("string-to-symbol-registry"),rt=x("symbol-to-string-registry"),nt=x("wks"),ot=i.QObject,it=!ot||!ot[W]||!ot[W].findChild,et=s&&f((function(){return 7!=m(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,r,n){var o=M(G,r);o&&delete G[r],R(t,r,n),o&&t!==G&&R(G,r,o)}:R,ct=function(t,r){var n=Y[t]=m(H[W]);return A(n,{type:U,tag:t,description:r}),s||(n.description=r),n},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},at=function(t,r,n){t===G&&at(Z,r,n),b(t);var o=v(r,!0);return b(n),d(Y,o)?(n.enumerable?(d(t,Q)&&t[Q][o]&&(t[Q][o]=!1),n=m(n,{enumerable:y(0,!1)})):(d(t,Q)||R(t,Q,y(1,{})),t[Q][o]=!0),et(t,o,n)):R(t,o,n)},ut=function(t,r){b(t);var n=h(r),o=w(n).concat(bt(n));return D(o,(function(r){s&&!dt.call(n,r)||at(t,r,n[r])})),t},ft=function(t,r){return void 0===r?m(t):ut(m(t),r)},dt=function(t){var r=v(t,!0),n=X.call(this,r);return!(this===G&&d(Y,r)&&!d(Z,r))&&(!(n||!d(this,r)||!d(Y,r)||d(this,Q)&&this[Q][r])||n)},lt=function(t,r){var n=h(t),o=v(r,!0);if(n!==G||!d(Y,o)||d(Z,o)){var i=M(n,o);return!i||!d(Y,o)||d(n,Q)&&n[Q][o]||(i.enumerable=!0),i}},pt=function(t){var r=V(h(t)),n=[];return D(r,(function(t){d(Y,t)||d($,t)||n.push(t)})),n},bt=function(t){var r=t===G,n=V(r?Z:h(t)),o=[];return D(n,(function(t){!d(Y,t)||r&&!d(G,t)||o.push(Y[t])})),o};if(a||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,r=E(t),n=function(t){this===G&&n.call(Z,t),d(this,Q)&&d(this[Q],r)&&(this[Q][r]=!1),et(this,r,y(1,t))};return s&&it&&et(G,r,{configurable:!0,set:n}),ct(r,t)},T(H[W],"toString",(function(){return B(this).tag})),T(H,"withoutSetter",(function(t){return ct(E(t),t)})),j.f=dt,P.f=at,_.f=lt,S.f=C.f=pt,O.f=bt,I.f=function(t){return ct(N(t),t)},s&&(R(H[W],"description",{configurable:!0,get:function(){return B(this).description}}),c||T(G,"propertyIsEnumerable",dt,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:H}),D(w(nt),(function(t){J(t)})),o({target:U,stat:!0,forced:!a},{for:function(t){var r=String(t);if(d(tt,r))return tt[r];var n=H(r);return tt[r]=n,rt[n]=r,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(d(rt,t))return rt[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),o({target:"Object",stat:!0,forced:!a,sham:!s},{create:ft,defineProperty:at,defineProperties:ut,getOwnPropertyDescriptor:lt}),o({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),o({target:"Object",stat:!0,forced:f((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(g(t))}}),K){var gt=!a||f((function(){var t=H();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));o({target:"JSON",stat:!0,forced:gt},{stringify:function(t,r,n){var o,i=[t],e=1;while(arguments.length>e)i.push(arguments[e++]);if(o=r,(p(r)||void 0!==t)&&!st(t))return l(r)||(r=function(t,r){if("function"==typeof o&&(r=o.call(this,t,r)),!st(r))return r}),i[1]=r,K.apply(null,i)}})}H[W][z]||L(H[W],z,H[W].valueOf),F(H,U),$[Q]=!0},e01a:function(t,r,n){"use strict";var o=n("23e7"),i=n("83ab"),e=n("da84"),c=n("5135"),s=n("861d"),a=n("9bf2").f,u=n("e893"),f=e.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var d={},l=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),r=this instanceof l?new f(t):void 0===t?f():f(t);return""===t&&(d[r]=!0),r};u(l,f);var p=l.prototype=f.prototype;p.constructor=l;var b=p.toString,g="Symbol(test)"==String(f("test")),h=/^Symbol\((.*)\)[^)]+$/;a(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,r=b.call(t);if(c(d,t))return"";var n=g?r.slice(7,-1):r.replace(h,"$1");return""===n?void 0:n}}),o({global:!0,forced:!0},{Symbol:l})}},e538:function(t,r,n){var o=n("b622");r.f=o}}]);
//# sourceMappingURL=chunk-5b198161.2f663590.js.map