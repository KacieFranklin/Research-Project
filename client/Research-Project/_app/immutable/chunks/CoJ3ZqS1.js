import{S as x,an as K,ao as j,W as y,ap as z,o as c,U as l,a9 as b,aq as L,P as C,ar as G,g as V,X as Z,as as $,at as W,v as U,K as X,au as F,av as H,u as M,aw as J,ax as Q,ab as k,ay as p,az as ee,V as re,aA as ae,aB as ne}from"./CQYI_NzY.js";function h(t,v=null,S){if(typeof t!="object"||t===null||x in t)return t;const P=V(t);if(P!==K&&P!==j)return t;var f=new Map,g=Z(t),o=y(0);g&&f.set("length",y(t.length));var I;return new Proxy(t,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&G();var n=f.get(e);return n===void 0?(n=y(r.value),f.set(e,n)):b(n,h(r.value,I)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,y(l));else{if(g&&typeof e=="string"){var n=f.get("length"),a=Number(e);Number.isInteger(a)&&a<n.v&&b(n,a)}b(r,l),Y(o)}return!0},get(i,e,r){var d;if(e===x)return t;var n=f.get(e),a=e in i;if(n===void 0&&(!a||(d=L(i,e))!=null&&d.writable)&&(n=y(h(a?i[e]:l,I)),f.set(e,n)),n!==void 0){var s=c(n);return s===l?void 0:s}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var n=f.get(e);n&&(r.value=c(n))}else if(r===void 0){var a=f.get(e),s=a==null?void 0:a.v;if(a!==void 0&&s!==l)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return r},has(i,e){var s;if(e===x)return!0;var r=f.get(e),n=r!==void 0&&r.v!==l||Reflect.has(i,e);if(r!==void 0||C!==null&&(!n||(s=L(i,e))!=null&&s.writable)){r===void 0&&(r=y(n?h(i[e],I):l),f.set(e,r));var a=c(r);if(a===l)return!1}return n},set(i,e,r,n){var w;var a=f.get(e),s=e in i;if(g&&e==="length")for(var d=r;d<a.v;d+=1){var m=f.get(d+"");m!==void 0?b(m,l):d in i&&(m=y(l),f.set(d+"",m))}a===void 0?(!s||(w=L(i,e))!=null&&w.writable)&&(a=y(void 0),b(a,h(r,I)),f.set(e,a)):(s=a.v!==l,b(a,h(r,I)));var _=Reflect.getOwnPropertyDescriptor(i,e);if(_!=null&&_.set&&_.set.call(n,r),!s){if(g&&typeof e=="string"){var O=f.get("length"),A=Number(e);Number.isInteger(A)&&A>=O.v&&b(O,A+1)}Y(o)}return!0},ownKeys(i){c(o);var e=Reflect.ownKeys(i).filter(a=>{var s=f.get(a);return s===void 0||s.v!==l});for(var[r,n]of f)n.v!==l&&!(r in i)&&e.push(r);return e},setPrototypeOf(){z()}})}function Y(t,v=1){b(t,t.v+v)}let N=!1;function te(t){var v=N;try{return N=!1,[t(),N]}finally{N=v}}function fe(t,v,S,P){var B;var f=(S&ee)!==0,g=!k||(S&p)!==0,o=(S&J)!==0,I=(S&ae)!==0,i=!1,e;o?[e,i]=te(()=>t[v]):e=t[v];var r=x in t||Q in t,n=o&&(((B=L(t,v))==null?void 0:B.set)??(r&&v in t&&(u=>t[v]=u)))||void 0,a=P,s=!0,d=!1,m=()=>(d=!0,s&&(s=!1,I?a=M(P):a=P),a);e===void 0&&P!==void 0&&(n&&g&&$(),e=m(),n&&n(e));var _;if(g)_=()=>{var u=t[v];return u===void 0?m():(s=!0,d=!1,u)};else{var O=(f?U:X)(()=>t[v]);O.f|=W,_=()=>{var u=c(O);return u!==void 0&&(a=void 0),u===void 0?a:u}}if((S&F)===0)return _;if(n){var A=t.$$legacy;return function(u,R){return arguments.length>0?((!g||!R||A||i)&&n(R?_():u),u):_()}}var w=!1,T=!1,D=re(e),E=U(()=>{var u=_(),R=c(D);return w?(w=!1,T=!0,R):(T=!1,D.v=u)});return f||(E.equals=H),function(u,R){if(ne!==null&&(w=T,_(),c(D)),arguments.length>0){const q=R?c(E):g&&o?h(u):u;return E.equals(q)||(w=!0,b(D,q),d&&a!==void 0&&(a=q),M(()=>c(E))),u}return c(E)}}export{h as a,fe as p};
