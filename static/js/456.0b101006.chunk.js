/*! For license information please see 456.0b101006.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[456],{9355:function(t,r,e){e.d(r,{Hg:function(){return h},M1:function(){return v},Pg:function(){return p},V0:function(){return m},tx:function(){return y}});var n=e(1413),o=e(5861),i=e(1243);function a(){a=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var i=r&&r.prototype instanceof y?r:y,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:E(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var p="suspendedStart",d="executing",v="completed",g={};function y(){}function b(){}function m(){}var w={};l(w,c,(function(){return this}));var x=Object.getPrototypeOf,j=x&&x(x(S([])));j&&j!==e&&n.call(j,c)&&(w=j);var L=m.prototype=y.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function Z(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function E(r,e,n){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=f(r,e,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=f(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return b.prototype=m,o(L,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:b,configurable:!0}),b.displayName=l(m,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},k(Z.prototype),l(Z.prototype,u,(function(){return this})),r.AsyncIterator=Z,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new Z(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(L),l(L,s,"Generator"),l(L,c,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=S,N.prototype={constructor:N,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;P(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:S(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}var c="/trending/movie/day",u="/movie/",s="search/movie",l={method:"GET",baseURL:"https://api.themoviedb.org/3/",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODkwOTU0MWQ1MjM2ZGRhNDNmOWVhNGI5N2VlZDA1NCIsInN1YiI6IjY1MDA0MWFmZTBjYTdmMDBjYmVhN2YxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KMhjiI3nUTqduooQ-82TXACriU726sX4ViPAF8iUjDs"}};function h(t){return f.apply(this,arguments)}function f(){return(f=(0,o.Z)(a().mark((function t(r){var e,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.request("".concat(c),(0,n.Z)((0,n.Z)({},l),{},{signal:r.signal}));case 2:return e=t.sent,o=e.data,t.abrupt("return",o.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t,r){return d.apply(this,arguments)}function d(){return(d=(0,o.Z)(a().mark((function t(r,e){var o,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.request("".concat(u).concat(r),(0,n.Z)((0,n.Z)({},l),{},{signal:e.signal}));case 2:return o=t.sent,c=o.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,r){return g.apply(this,arguments)}function g(){return(g=(0,o.Z)(a().mark((function t(r,e){var o,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.request("".concat(u).concat(r,"/credits"),(0,n.Z)((0,n.Z)({},l),{},{signal:e.signal}));case 2:return o=t.sent,c=o.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t,r){return b.apply(this,arguments)}function b(){return(b=(0,o.Z)(a().mark((function t(r,e){var o,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.request("".concat(u).concat(r,"/reviews"),(0,n.Z)((0,n.Z)({},l),{},{signal:e.signal}));case 2:return o=t.sent,c=o.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t,r){return w.apply(this,arguments)}function w(){return(w=(0,o.Z)(a().mark((function t(r,e){var o,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.request("".concat(s),(0,n.Z)((0,n.Z)({},l),{},{params:{query:r,include_adult:"false",page:"1"},signal:e.signal}));case 2:return o=t.sent,c=o.data,t.abrupt("return",c.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},4680:function(t,r,e){e.d(r,{j:function(){return i}});var n,o=e(168),i=e(5867).ZP.div(n||(n=(0,o.Z)(["\n  font-size: 24px;\n  color: red;\n  text-align: center;\n  padding: 24px;\n"])))},5308:function(t,r,e){e.d(r,{O:function(){return b}});var n,o,i,a,c=e(7689),u=e(168),s=e(1087),l=e(5867),h=l.ZP.li(n||(n=(0,u.Z)(["\n  flex-basis: calc((100% - 5 * 28px) / 6);\n"]))),f=(0,l.ZP)(s.rU)(o||(o=(0,u.Z)(["\n  display: inline-block;\n  border: 1px solid #blue;\n  border-radius: 12px;\n  transition: transform 250ms linear, box-shadow 250ms linear;\n  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);\n\n  & img {\n    border-top-right-radius: 12px;\n    border-top-left-radius: 12px;\n  }\n\n  & p {\n    margin: 12px;\n    font-size: 18px;\n    font-weight: 700;\n    letter-spacing: 1.24;\n    color: #000000;\n  }\n\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n  }\n"]))),p=e(9529),d=e(184);function v(t){var r=t.movie,e=(0,c.TH)();return(0,d.jsx)(h,{children:(0,d.jsxs)(f,{to:"/movies/".concat(r.id),state:{from:e},children:[r.poster_path?(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w185/".concat(r.poster_path),alt:r.title}):(0,d.jsx)(p.j9,{}),(0,d.jsx)("p",{children:r.title})]})})}var g=l.ZP.h1(i||(i=(0,u.Z)(["\n  font-size: 36px;\n  font-weight: 700;\n  margin-bottom: 36px;\n"]))),y=l.ZP.ul(a||(a=(0,u.Z)(["\n  display: flex;\n  justify-content: left;\n  gap: 28px;\n  flex-wrap: wrap;\n"])));function b(t){var r=t.title,e=t.movieList;return(0,d.jsxs)(d.Fragment,{children:[0!==e.length&&(0,d.jsx)(g,{children:r}),(0,d.jsx)(y,{children:e.map((function(t){return(0,d.jsx)(v,{movie:t},t.id)}))})]})}},9529:function(t,r,e){e.d(r,{dj:function(){return u},j9:function(){return l},yk:function(){return s}});var n,o,i,a=e(168),c=e(5867),u=c.ZP.div(n||(n=(0,a.Z)(["\n  display: block;\n  width: 100%;\n  height: 220px;\n  border: 1px solid #cccccc;\n  position: relative;\n  top: 0;\n  left: 0;\n  line-height: inherit;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-image: url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg);\n"]))),s=c.ZP.div(o||(o=(0,a.Z)(["\n  display: block;\n  min-width: 342px;\n  width: 342px;\n  height: 512px;\n  background-color: #dbdbdb;\n  border: 1px solid #cccccc;\n  border-radius: 12px;\n  box-shadow: 3px 3px 10px black;\n  position: relative;\n  top: 0;\n  left: 0;\n  line-height: inherit;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-image: url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg);\n"]))),l=c.ZP.div(i||(i=(0,a.Z)(["\n  display: block;\n  min-width: 182px;\n  width: 182px;\n  height: 274px;\n  background-color: #dbdbdb;\n  border: 1px solid #cccccc;\n  border-radius: 12px;\n  box-shadow: 3px 3px 10px black;\n  position: relative;\n  top: 0;\n  left: 0;\n  line-height: inherit;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-image: url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg);\n"])))},4056:function(t,r,e){e.r(r),e.d(r,{default:function(){return O}});var n,o,i,a,c=e(5861),u=e(9439),s=e(2791),l=e(1087),h=e(3430),f=e(4680),p=e(9355),d=e(9085),v=e(168),g=e(5867),y=e.p+"static/media/search.2d752e5a52fc6075b345.png",b=g.ZP.form(n||(n=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  border: 1px solid #051182;\n  border-radius: 16px;\n  margin-bottom: 24px;\n"]))),m=g.ZP.button(o||(o=(0,v.Z)(["\n  display: block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-color: inherit;\n  background-image: url(",");\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  z-index: 1200;\n\n  &:hover {\n    opacity: 1;\n  }\n"])),y),w=g.ZP.span(i||(i=(0,v.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),x=g.ZP.input(a||(a=(0,v.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),j=e(184),L=function(){var t=(0,l.lr)(),r=(0,u.Z)(t,2),e=r[0],n=r[1];return(0,j.jsxs)(b,{onSubmit:function(t){var r;t.preventDefault(),n({}),""!==(null!==(r=e.get("q"))&&void 0!==r?r:"")?n(e):d.Am.warning("Enter a value in the search bar")},children:[(0,j.jsx)(m,{type:"submit",children:(0,j.jsx)(w,{children:"Search"})}),(0,j.jsx)(x,{type:"text",name:"movie",value:e.q,onChange:function(t){e.set("q",t.target.value.trim().toLowerCase())},placeholder:"Search movie"})]})},k=e(3459),Z=e(5308);function E(){E=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:Z(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var f="suspendedStart",p="executing",d="completed",v={};function g(){}function y(){}function b(){}var m={};s(m,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(S([])));x&&x!==e&&n.call(x,a)&&(m=x);var j=b.prototype=g.prototype=Object.create(m);function L(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function Z(r,e,n){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=h(r,e,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=h(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return y.prototype=b,o(j,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:y,configurable:!0}),y.displayName=s(b,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},L(k.prototype),s(k.prototype,c,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new k(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(j),s(j,u,"Generator"),s(j,a,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=S,N.prototype={constructor:N,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;P(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:S(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),v}},r}function O(){var t,r=(0,s.useState)([]),e=(0,u.Z)(r,2),n=e[0],o=e[1],i=(0,s.useState)(!1),a=(0,u.Z)(i,2),d=a[0],v=a[1],g=(0,s.useState)(!1),y=(0,u.Z)(g,2),b=y[0],m=y[1],w=(0,l.lr)(),x=null!==(t=(0,u.Z)(w,1)[0].get("q"))&&void 0!==t?t:"",O=(0,s.useRef)();return(0,s.useEffect)((function(){if(""!==x)return O.current&&O.current.abort(),O.current=new AbortController,function(){t.apply(this,arguments)}(),function(){O.current.abort()};function t(){return(t=(0,c.Z)(E().mark((function t(){var r;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(!0),m(!1),t.next=5,(0,p.V0)(x,O.current);case 5:0===(r=t.sent).length&&o([]),o(r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),"ERR_CANCELED"!==t.t0.code&&m(!0);case 13:return t.prev=13,v(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))).apply(this,arguments)}}),[x]),(0,j.jsxs)(k.GH,{children:[(0,j.jsx)(L,{}),x&&(0!==n.length?(0,j.jsx)(Z.O,{title:"Searching results",movieList:n}):(0,j.jsx)(f.j,{children:(0,j.jsx)("p",{children:"Sorry, but there are not movies for your search."})})),d&&(0,j.jsx)(h.g4,{height:"80",width:"80",radius:"9",color:"#3F51B5",ariaLabel:"three-dots-loading",wrapperStyle:{justifyContent:"center"},wrapperClassName:"",visible:!0}),b&&!d&&(0,j.jsx)(f.j,{children:(0,j.jsx)("p",{children:"OOPS! There was an ERROR!"})})]})}}}]);
//# sourceMappingURL=456.0b101006.chunk.js.map