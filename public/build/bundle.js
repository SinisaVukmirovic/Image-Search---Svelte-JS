var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function f(){return t=" ",document.createTextNode(t);var t}function s(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function d(t,n){t.value=null==n?"":n}let g;function m(t){g=t}const p=[],$=[],y=[],b=[],x=Promise.resolve();let v=!1;function _(t){y.push(t)}let w=!1;const E=new Set;function S(){if(!w){w=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];m(n),C(n.$$)}for(p.length=0;$.length;)$.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];E.has(n)||(E.add(n),n())}y.length=0}while(p.length);for(;b.length;)b.pop()();v=!1,w=!1,E.clear()}}function C(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const A=new Set;function I(t,n){-1===t.$$.dirty[0]&&(p.push(t),v||(v=!0,x.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function N(c,u,a,l,f,s,h=[-1]){const d=g;m(c);const p=u.props||{},$=c.$$={fragment:null,ctx:null,props:s,update:t,not_equal:f,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:e(),dirty:h};let y=!1;if($.ctx=a?a(c,p,(t,n,...e)=>{const r=e.length?e[0]:n;return $.ctx&&f($.ctx[t],$.ctx[t]=r)&&($.bound[t]&&$.bound[t](r),y&&I(c,t)),n}):[],$.update(),y=!0,r($.before_update),$.fragment=!!l&&l($.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);$.fragment&&$.fragment.l(t),t.forEach(i)}else $.fragment&&$.fragment.c();u.intro&&((b=c.$$.fragment)&&b.i&&(A.delete(b),b.i(x))),function(t,e,c){const{fragment:u,on_mount:a,on_destroy:i,after_update:l}=t.$$;u&&u.m(e,c),_(()=>{const e=a.map(n).filter(o);i?i.push(...e):r(e),t.$$.on_mount=[]}),l.forEach(_)}(c,u.target,u.anchor),S()}var b,x;m(d)}function j(t,n,e){const r=t.slice();return r[5]=n[e],r}function k(t){let n,e;return{c(){n=l("img"),h(n,"id","searchingImg"),n.src!==(e="../searching.gif")&&h(n,"src","../searching.gif"),h(n,"alt","Searching...")},m(t,e){a(t,n,e)},d(t){t&&i(n)}}}function q(t){let n,e;return{c(){n=l("img"),n.src!==(e=t[5])&&h(n,"src",e),h(n,"alt",t[0])},m(t,e){a(t,n,e)},p(t,r){4&r&&n.src!==(e=t[5])&&h(n,"src",e),1&r&&h(n,"alt",t[0])},d(t){t&&i(n)}}}function L(n){let e,o,c,g,m,p,$,y,b,x,v,_,w,E,S,C,A=n[1]&&k(),I=n[2],N=[];for(let t=0;t<I.length;t+=1)N[t]=q(j(n,I,t));return{c(){e=l("div"),o=l("h1"),o.textContent="Svelte Image Search",c=f(),g=l("h4"),g.textContent="with Nature Images API",m=f(),p=l("form"),$=l("label"),$.textContent="Search:",y=f(),b=l("input"),x=f(),v=l("button"),v.textContent="Search",_=f(),A&&A.c(),w=f(),E=l("section");for(let t=0;t<N.length;t+=1)N[t].c();h($,"for","search-term"),h(b,"type","text"),h(b,"name","search-term"),h(v,"type","submit"),h(E,"class","images"),h(e,"class","app")},m(t,r){a(t,e,r),u(e,o),u(e,c),u(e,g),u(e,m),u(e,p),u(p,$),u(p,y),u(p,b),d(b,n[0]),u(p,x),u(p,v),u(e,_),A&&A.m(e,null),u(e,w),u(e,E);for(let t=0;t<N.length;t+=1)N[t].m(E,null);var i;S||(C=[s(b,"input",n[4]),s(p,"submit",(i=n[3],function(t){return t.preventDefault(),i.call(this,t)}))],S=!0)},p(t,[n]){if(1&n&&b.value!==t[0]&&d(b,t[0]),t[1]?A||(A=k(),A.c(),A.m(e,w)):A&&(A.d(1),A=null),5&n){let e;for(I=t[2],e=0;e<I.length;e+=1){const r=j(t,I,e);N[e]?N[e].p(r,n):(N[e]=q(r),N[e].c(),N[e].m(E,null))}for(;e<N.length;e+=1)N[e].d(1);N.length=I.length}},i:t,o:t,d(t){t&&i(e),A&&A.d(),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(N,t),S=!1,r(C)}}}function O(t,n,e){let r="",o=!1,c=[];return[r,o,c,async function(){console.log(r),e(1,o=!0),e(2,c=[]),e(2,c=await async function(t){const n=await fetch("https://nature-image-api.now.sh/search?q="+t);return(await n.json()).images.map(({image:t})=>t)}(r)),console.log(c),e(1,o=!1)},function(){r=this.value,e(0,r)}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}{constructor(t){super(),N(this,t,O,L,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
