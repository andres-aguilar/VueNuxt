(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{111:function(t,e,n){"use strict";var r=n(33);n.n(r).a},112:function(t,e,n){(t.exports=n(25)(!1)).push([t.i,"\n.__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0\n}\n.__nuxt-error-page .error{max-width:450px\n}\n.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px\n}\n.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px\n}\n.__nuxt-error-page a{color:#7f828b!important;text-decoration:none\n}\n.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px\n}",""])},125:function(t,e,n){"use strict";var r=n(34);n.n(r).a},126:function(t,e,n){(t.exports=n(25)(!1)).push([t.i,"\n.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999\n}",""])},129:function(t,e,n){var r=n(130);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(26).default)("7655a927",r,!0,{sourceMap:!1})},130:function(t,e,n){(t.exports=n(25)(!1)).push([t.i,".container{transition:all .4 ease-in}.page-enter-active,.page-leave-active{transition:opacity .5s}.page-enter,.page-leave-active{opacity:0}",""])},131:function(t,e,n){"use strict";n.r(e);n(51),n(83),n(84);var r=n(19),o=n.n(r),a=(n(45),n(35),n(89),n(3)),i=n.n(a),s=(n(90),n(91),n(65),n(47),n(67),n(66),n(95),n(107),n(0)),u={},c=n(20),p=n.n(c),l=n(74),h=n.n(l),f=n(50),d=function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,169)).then(function(t){return t.default||t})},m=function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,168)).then(function(t){return t.default||t})};s.a.use(f.a),window.history.scrollRestoration="manual";var x=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var v=n(75),g=n.n(v).a,y={name:"nuxt-child",functional:!0,props:["keepAlive","keepAliveProps"],render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var a=n,i=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=i[u]||s,p={};_.forEach(function(t){void 0!==c[t]&&(p[t]=c[t])});var l={};b.forEach(function(t){"function"==typeof c[t]&&(l[t]=c[t].bind(a))});var h=l.beforeEnter;l.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),h)return h.call(a,t)};var f=[t("router-view",r)];return void 0!==o.keepAlive&&(f=[t("keep-alive",{props:o.keepAliveProps},f)]),t("transition",{props:p,on:l},f)}},_=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],b=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],w={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},C={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},k=(n(111),n(18)),$=Object(k.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null);$.options.__file="nuxt-error.vue";var R=$.exports,E=(n(113),n(114),n(115),n(117),n(119),n(120),n(123),n(124),function(){return{}});function A(t,e){var n=t.options.data||E;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),p()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function T(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function S(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function j(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function N(t){return Promise.all(j(t,function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",r.components[o]=T(e));case 5:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function O(t){return P.apply(this,arguments)}function P(){return(P=i()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:return t.abrupt("return",p()({},e,{meta:S(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function q(t,e){return L.apply(this,arguments)}function L(){return(L=i()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/VueNuxt/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var a=o()(n);if("number"==typeof t||"undefined"!==a&&"object"!==a||(r=n||{},n=t,a=o()(n),t=302),"object"===a&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=H(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=10;break}return t.next=9,O(n.route);case 9:e.context.route=t.sent;case 10:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=16;break}return t.next=15,O(n.from);case 15:e.context.from=t.sent;case 16:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function D(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function M(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash)}function I(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},s=i.pretty?J:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var p,l=a[c.name];if(null==l){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(p=s(l[h]),!e[u].test(p))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===h?c.prefix:c.delimiter)+p}}else{if(p=c.asterisk?encodeURI(l).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(l),!e[u].test(p))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+p+'"');o+=c.prefix+p}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=U.exec(t));){var u=n[0],c=n[1],p=n.index;if(i+=t.slice(a,p),a=p+u.length,c)i+=c[1];else{var l=t[a],h=n[2],f=n[3],d=n[4],m=n[5],x=n[6],v=n[7];i&&(r.push(i),i="");var g=null!=h&&null!=l&&l!==h,y="+"===x||"*"===x,_="?"===x||"*"===x,b=n[2]||s,w=d||m;r.push({name:f||o++,prefix:h||"",delimiter:b,optional:_,repeat:y,partial:g,asterisk:!!v,pattern:w?K(w):v?".*":"[^"+B(b)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))}function z(t,e){var n={},r=p()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var U=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function J(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function B(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function K(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function H(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/");return 2===(a=s.split("#")).length&&(s=a[0],o=a[1]),i+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=o?"#"+o:""}var Q={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||I(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:y,NuxtError:R}},V={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,throttle:200,duration:5e3,height:"2px",color:"black",failedColor:"red"}},methods:{start:function(){var t=this;return this.canSuccess=!0,this._throttle&&clearTimeout(this._throttle),this._timer&&(clearInterval(this._timer),this._timer=null,this.percent=0),this._throttle=setTimeout(function(){t.show=!0,t._cut=1e4/Math.floor(t.duration),t._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100)},this.throttle),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,clearTimeout(this._throttle),this._throttle=null,setTimeout(function(){t.show=!1,s.a.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},F=(n(125),Object(k.a)(V,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,null,null,null));F.options.__file="nuxt-loading.vue";var X=F.exports,W=(n(127),n(129),Object(k.a)({},function(){var t=this.$createElement;return(this._self._c||t)("nuxt")},[],!1,null,null,null));W.options.__file="default.vue";var G={_default:W.exports},Y={head:{meta:[],link:[],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),a=t("transition",{props:{name:"layout",mode:"out-in"}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,a])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.a.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&G["_"+t]||(t="default"),this.layoutName=t,this.layout=G["_"+t],this.layout},loadLayout:function(t){return t&&G["_"+t]||(t="default"),Promise.resolve(G["_"+t])}},components:{NuxtLoading:X}};s.a.component(g.name,g),s.a.component(y.name,y),s.a.component(w.name,w),s.a.component(Q.name,Q),s.a.use(h.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var Z={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function tt(){return(tt=i()(regeneratorRuntime.mark(function t(e){var n,r,o,a,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new f.a({mode:"history",base:"/VueNuxt/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:x,routes:[{path:"/albums/:id?",component:d,name:"albums-id"},{path:"/",component:m,name:"index"}],fallback:!1});case 2:return n=t.sent,r=p()({router:n,nuxt:{defaultTransition:Z,transitions:[Z],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},Z,{name:t}):Object.assign({},Z,t):Z}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},Y),o=e?e.next:function(t){return r.router.push(t)},e?a=n.resolve(e.url).route:(i=M(n.options.base),a=n.resolve(i).route),t.next=8,q(r,{route:a,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";s.a[n]||(s.a[n]=!0,s.a.use(function(){s.a.prototype.hasOwnProperty(t)||Object.defineProperty(s.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))}),t.next=12;break;case 12:return t.abrupt("return",{app:r,router:n});case 13:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var et,nt,rt=[],ot=window.__NUXT__||{};function at(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function it(t,e,n){return st.apply(this,arguments)}function st(){return(st=i()(regeneratorRuntime.mark(function t(e,n,r){var o,a,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!et.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?z(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,N(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function ut(t,e){return ot.serverRendered&&e&&A(t,e),t._Ctor=t,t}function ct(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof u[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),u[t])}),!a)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():D(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function pt(t,e,n){return lt.apply(this,arguments)}function lt(){return(lt=i()(regeneratorRuntime.mark(function t(e,n,r){var o,a,i,u,c,p,l,h,f,d,m,x,v,g,y,_,b=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return rt=e===n?[]:S(n,o=[]).map(function(t,e){return I(n.matched[o[e]].path)(n.params)}),a=!1,i=function(t){n.path===t.path&&b.$loading.finish&&b.$loading.finish(),n.path!==t.path&&b.$loading.pause&&b.$loading.pause(),a||(a=!0,r(t))},t.next=7,q(et,{route:e,from:n,next:i.bind(this)});case 7:if(this._dateLastError=et.nuxt.dateErr,this._hadError=!!et.nuxt.err,(c=S(e,u=[])).length){t.next=25;break}return t.next=14,ct.call(this,c,et.context);case 14:if(!a){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof R.layout?R.layout(et.context):R.layout);case 18:return p=t.sent,t.next=21,ct.call(this,c,et.context,p);case 21:if(!a){t.next=23;break}return t.abrupt("return");case 23:return et.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(at(c,e,n)),t.prev=27,t.next=30,ct.call(this,c,et.context);case 30:if(!a){t.next=32;break}return t.abrupt("return");case 32:if(!et.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(l=c[0].options.layout)&&(l=l(et.context)),t.next=38,this.loadLayout(l);case 38:return l=t.sent,t.next=41,ct.call(this,c,et.context,l);case 41:if(!a){t.next=43;break}return t.abrupt("return");case 43:if(!et.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:h=!0,t.prev=46,f=!0,d=!1,m=void 0,t.prev=50,x=c[Symbol.iterator]();case 52:if(f=(v=x.next()).done){t.next=64;break}if("function"==typeof(g=v.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,g.options.validate(et.context);case 58:if(h=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:f=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),d=!0,m=t.t0;case 70:t.prev=70,t.prev=71,f||null==x.return||x.return();case 73:if(t.prev=73,!d){t.next=76;break}throw m;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(h){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=I(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,b._pathChanged&&b._queryChanged||t._path!==rt[n])t._dataRefresh=!0;else if(!b._pathChanged&&b._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return b._diffQuery[t]}))}if(!b._hadError&&b._isMounted&&!t._dataRefresh)return Promise.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,i=!!t.options.fetch,s=a&&i?30:45;if(a){var c=D(t.options.asyncData,et.context).then(function(e){A(t,e),b.$loading.increase&&b.$loading.increase(s)});o.push(c)}if(b.$loading.manual=!1===t.options.loading,i){var p=t.options.fetch(et.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){b.$loading.increase&&b.$loading.increase(s)}),o.push(p)}return Promise.all(o)}));case 89:a||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=111;break;case 92:if(t.prev=92,t.t2=t.catch(27),t.t2){t.next=98;break}t.t2={},t.next=100;break;case 98:if("ERR_REDIRECT"!==t.t2.message){t.next=100;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,t.t2));case 100:return rt=[],y=t.t2.response&&t.t2.response.status,t.t2.statusCode=t.t2.statusCode||t.t2.status||y||500,w=t.t2,s.a.config.errorHandler&&s.a.config.errorHandler(w),"function"==typeof(_=R.layout)&&(_=_(et.context)),t.next=108,this.loadLayout(_);case 108:this.error(t.t2),this.$nuxt.$emit("routeChanged",e,n,t.t2),r(!1);case 111:case"end":return t.stop()}var w},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function ht(t,e){j(t,function(t,e,n,r){return"object"!==o()(t)||t.options||((t=s.a.extend(t))._Ctor=t,n.components[r]=t),t})}function ft(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?R.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(et.context)),this.setLayout(e)}function dt(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=S(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.a.set(t.$data,r,n[r])}}),ft.call(n,t)})}function mt(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),nt.afterEach(function(e,n){s.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function xt(){return(xt=i()(regeneratorRuntime.mark(function t(e){var n,r,o,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return et=e.app,nt=e.router,t.next=4,Promise.all((void 0,c=M((u=nt).options.base,u.options.mode),j(u.match(c),function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o,a){var i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return i=ut(T(e),ot.data?ot.data[a]:null),r.components[o]=i,t.abrupt("return",i);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,a){return t.apply(this,arguments)}}())));case 4:return n=t.sent,r=new s.a(et),o=ot.layout||"default",t.next=9,r.loadLayout(o);case 9:if(r.setLayout(o),a=function(){r.$mount("#__nuxt"),s.a.nextTick(function(){mt(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(at(n,nt.currentRoute)),rt=nt.currentRoute.matched.map(function(t){return I(t.path)(nt.currentRoute.params)})),r.$loading={},ot.error&&r.error(ot.error),nt.beforeEach(it.bind(r)),nt.beforeEach(pt.bind(r)),nt.afterEach(ht),nt.afterEach(dt.bind(r)),!ot.serverRendered){t.next=22;break}return a(),t.abrupt("return");case 22:pt.call(r,nt.currentRoute,nt.currentRoute,function(t){if(!t)return ht(nt.currentRoute,nt.currentRoute),ft.call(r,nt.currentRoute),void a();nt.push(t,function(){return a()},function(t){if(!t)return a();console.error(t)})});case 23:case"end":return t.stop()}var u,c},t,this)}))).apply(this,arguments)}Object.assign(s.a.config,{silent:!0,performance:!1}),function(t){return tt.apply(this,arguments)}().then(function(t){return xt.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},33:function(t,e,n){var r=n(112);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(26).default)("45b1ddea",r,!0,{sourceMap:!1})},34:function(t,e,n){var r=n(126);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(26).default)("fd547dac",r,!0,{sourceMap:!1})},77:function(t,e,n){t.exports=n(131)}},[[77,5,2,6]]]);