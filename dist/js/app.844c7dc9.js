(function(){var t={8943:function(t){t.exports=[{Item_id:1,image:"../images/ambulance.jpg",question:"furniture","":null,_1:null,_2:null,_3:null},{Item_id:2,image:"../images/bathrobe.jpg",question:"a plant","":null,_1:null,_2:null,_3:null},{Item_id:3,image:"../images/bed.jpg",question:"a vehicle","":null,_1:null,_2:null,_3:null},{Item_id:4,image:"../images/bedsidetable.jpg",question:"grass","":null,_1:null,_2:null,_3:null}]},4933:function(t,e,n){"use strict";var r=n(144),i=n(6168),o=n.n(i),u=n(9469),a=function(){var t=this,e=t._self._c;return e("Experiment",{attrs:{title:"typicality_norms","image-assets":t.pictures}},[e("InstructionScreen",{attrs:{title:"Welcome"}},[t._v(" Thank you for participating in our study. "),e("br"),t._v(" In this study, you will rate pictures of objects for how well they fit a "),e("strong",[t._v("label")]),t._v(". ")]),t._l(t.trialData,(function(n,r){return[e("SliderScreen",{attrs:{initial:50,min:1,progress:r/t.trialData.length,"option-left":"Very atypical","option-right":"Very typical"},scopedSlots:t._u([{key:"stimulus",fn:function(){return[e("img",{attrs:{src:n.image}}),e("p",[t._v("How typical is this for "),e("strong",[t._v(t._s(n.question))]),t._v("?")])]},proxy:!0}],null,!0)})]})),e("PostTestScreen"),e("SubmitResultsScreen")],2)},l=[],c=n(6486),s=n.n(c),f=n(8943),p=n.n(f),d={name:"App",data(){return{trialData:s().shuffle(p()),pictures:p().map((t=>t.image))}},computed:{_(){return s()}}},m=d,g=n(1001),v=(0,g.Z)(m,a,l,!1,null,null,null),h=v.exports,b={experimentId:"1",serverUrl:"https://magpie-demo.herokuapp.com/",socketUrl:"wss://magpie-demo.herokuapp.com/socket",completionUrl:"https://...",contactEmail:"kristina.kobrock@uos.de",mode:"debug",language:"en"};r["default"].config.productionTip=!1,r["default"].use(o(),{prefix:"Canvas"}),r["default"].use(u.ZP,b),new r["default"]({render:t=>t(h)}).$mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var u=1/0;for(s=0;s<t.length;s++){r=t[s][0],i=t[s][1],o=t[s][2];for(var a=!0,l=0;l<r.length;l++)(!1&o||u>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(a=!1,o<u&&(u=o));if(a){t.splice(s--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var s=t.length;s>0&&t[s-1][2]>o;s--)t[s]=t[s-1];t[s]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+".450ff732.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="typicality-norms:";n.l=function(r,i,o,u){if(t[r])t[r].push(i);else{var a,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var f=c[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+o){a=f;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+o),a.src=r),t[r]=[i];var p=function(e,n){a.onerror=a.onload=null,clearTimeout(d);var i=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(t){return t(n)})),e)return e(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,r){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(n,r){i=t[e]=[n,r]}));r.push(i[2]=o);var u=n.p+n.u(e),a=new Error,l=function(r){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+u+")",a.name="ChunkLoadError",a.type=o,a.request=u,i[1](a)}};n.l(u,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,u=r[0],a=r[1],l=r[2],c=0;if(u.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)var s=l(n)}for(e&&e(r);c<u.length;c++)o=u[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(s)},r=self["webpackChunktypicality_norms"]=self["webpackChunktypicality_norms"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4933)}));r=n.O(r)})();
//# sourceMappingURL=app.844c7dc9.js.map