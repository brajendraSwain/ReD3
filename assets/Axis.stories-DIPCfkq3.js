import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{t as bt,c as Qe,i as qe,a as Ae,f as St,b as be,d as Dt,e as Ye,g as kt,A as H,l as F,h as Lt}from"./Axis-DIDJYMyg.js";import"./iframe-DbaQb1ny.js";import"./preload-helper-D9Z9MdNV.js";function Ge(e,t){e=e.slice();var n=0,r=e.length-1,c=e[n],o=e[r],s;return o<c&&(s=n,n=r,r=s,s=c,c=o,o=s),e[n]=t.floor(c),e[r]=t.ceil(o),e}function We(e){return Math.log(e)}function He(e){return Math.exp(e)}function vt(e){return-Math.log(-e)}function Ft(e){return-Math.exp(-e)}function At(e){return isFinite(e)?+("1e"+e):e<0?0:e}function Yt(e){return e===10?At:e===Math.E?Math.exp:t=>Math.pow(e,t)}function Wt(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}function Oe(e){return(t,n)=>-e(-t,n)}function Ht(e){const t=e(We,He),n=t.domain;let r=10,c,o;function s(){return c=Wt(r),o=Yt(r),n()[0]<0?(c=Oe(c),o=Oe(o),e(vt,Ft)):e(We,He),t}return t.base=function(l){return arguments.length?(r=+l,s()):r},t.domain=function(l){return arguments.length?(n(l),s()):n()},t.ticks=l=>{const y=n();let m=y[0],g=y[y.length-1];const M=g<m;M&&([m,g]=[g,m]);let p=c(m),x=c(g),C,S;const W=l==null?10:+l;let Y=[];if(!(r%1)&&x-p<W){if(p=Math.floor(p),x=Math.ceil(x),m>0){for(;p<=x;++p)for(C=1;C<r;++C)if(S=p<0?C/o(-p):C*o(p),!(S<m)){if(S>g)break;Y.push(S)}}else for(;p<=x;++p)for(C=r-1;C>=1;--C)if(S=p>0?C/o(-p):C*o(p),!(S<m)){if(S>g)break;Y.push(S)}Y.length*2<W&&(Y=Ae(m,g,W))}else Y=Ae(p,x,Math.min(x-p,W)).map(o);return M?Y.reverse():Y},t.tickFormat=(l,y)=>{if(l==null&&(l=10),y==null&&(y=r===10?"s":","),typeof y!="function"&&(!(r%1)&&(y=St(y)).precision==null&&(y.trim=!0),y=be(y)),l===1/0)return y;const m=Math.max(1,r*l/t.ticks().length);return g=>{let M=g/o(Math.round(c(g)));return M*r<r-.5&&(M*=r),M<=m?y(g):""}},t.nice=()=>n(Ge(n(),{floor:l=>o(Math.floor(c(l))),ceil:l=>o(Math.ceil(c(l)))})),t}function Xe(){const e=Ht(bt()).domain([1,10]);return e.copy=()=>Qe(e,Xe()).base(e.base()),qe.apply(e,arguments),e}const xe=new Date,Me=new Date;function U(e,t,n,r){function c(o){return e(o=arguments.length===0?new Date:new Date(+o)),o}return c.floor=o=>(e(o=new Date(+o)),o),c.ceil=o=>(e(o=new Date(o-1)),t(o,1),e(o),o),c.round=o=>{const s=c(o),l=c.ceil(o);return o-s<l-o?s:l},c.offset=(o,s)=>(t(o=new Date(+o),s==null?1:Math.floor(s)),o),c.range=(o,s,l)=>{const y=[];if(o=c.ceil(o),l=l==null?1:Math.floor(l),!(o<s)||!(l>0))return y;let m;do y.push(m=new Date(+o)),t(o,l),e(o);while(m<o&&o<s);return y},c.filter=o=>U(s=>{if(s>=s)for(;e(s),!o(s);)s.setTime(s-1)},(s,l)=>{if(s>=s)if(l<0)for(;++l<=0;)for(;t(s,-1),!o(s););else for(;--l>=0;)for(;t(s,1),!o(s););}),n&&(c.count=(o,s)=>(xe.setTime(+o),Me.setTime(+s),e(xe),e(Me),Math.floor(n(xe,Me))),c.every=o=>(o=Math.floor(o),!isFinite(o)||!(o>0)?null:o>1?c.filter(r?s=>r(s)%o===0:s=>c.count(0,s)%o===0):c)),c}const me=U(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);me.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?U(t=>{t.setTime(Math.floor(t/e)*e)},(t,n)=>{t.setTime(+t+n*e)},(t,n)=>(n-t)/e):me);me.range;const z=1e3,A=z*60,I=A*60,N=I*24,Se=N*7,je=N*30,Ce=N*365,_=U(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*z)},(e,t)=>(t-e)/z,e=>e.getUTCSeconds());_.range;const De=U(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*z)},(e,t)=>{e.setTime(+e+t*A)},(e,t)=>(t-e)/A,e=>e.getMinutes());De.range;const Ot=U(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*A)},(e,t)=>(t-e)/A,e=>e.getUTCMinutes());Ot.range;const ke=U(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*z-e.getMinutes()*A)},(e,t)=>{e.setTime(+e+t*I)},(e,t)=>(t-e)/I,e=>e.getHours());ke.range;const jt=U(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*I)},(e,t)=>(t-e)/I,e=>e.getUTCHours());jt.range;const J=U(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*A)/N,e=>e.getDate()-1);J.range;const Le=U(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/N,e=>e.getUTCDate()-1);Le.range;const zt=U(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/N,e=>Math.floor(e/N));zt.range;function R(e){return U(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,n)=>{t.setDate(t.getDate()+n*7)},(t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*A)/Se)}const de=R(0),fe=R(1),It=R(2),Nt=R(3),Q=R(4),Pt=R(5),Vt=R(6);de.range;fe.range;It.range;Nt.range;Q.range;Pt.range;Vt.range;function Z(e){return U(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCDate(t.getUTCDate()+n*7)},(t,n)=>(n-t)/Se)}const $e=Z(0),ge=Z(1),Bt=Z(2),Rt=Z(3),q=Z(4),Zt=Z(5),Et=Z(6);$e.range;ge.range;Bt.range;Rt.range;q.range;Zt.range;Et.range;const ve=U(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());ve.range;const _t=U(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());_t.range;const P=U(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());P.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:U(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,n)=>{t.setFullYear(t.getFullYear()+n*e)});P.range;const B=U(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());B.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:U(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n*e)});B.range;function Qt(e,t,n,r,c,o){const s=[[_,1,z],[_,5,5*z],[_,15,15*z],[_,30,30*z],[o,1,A],[o,5,5*A],[o,15,15*A],[o,30,30*A],[c,1,I],[c,3,3*I],[c,6,6*I],[c,12,12*I],[r,1,N],[r,2,2*N],[n,1,Se],[t,1,je],[t,3,3*je],[e,1,Ce]];function l(m,g,M){const p=g<m;p&&([m,g]=[g,m]);const x=M&&typeof M.range=="function"?M:y(m,g,M),C=x?x.range(m,+g+1):[];return p?C.reverse():C}function y(m,g,M){const p=Math.abs(g-m)/M,x=Dt(([,,W])=>W).right(s,p);if(x===s.length)return e.every(Ye(m/Ce,g/Ce,M));if(x===0)return me.every(Math.max(Ye(m,g,M),1));const[C,S]=s[p/s[x-1][2]<s[x][2]/p?x-1:x];return C.every(S)}return[l,y]}const[qt,Gt]=Qt(P,ve,de,J,ke,De);function Ue(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function we(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function G(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}function Xt(e){var t=e.dateTime,n=e.date,r=e.time,c=e.periods,o=e.days,s=e.shortDays,l=e.months,y=e.shortMonths,m=X(c),g=$(c),M=X(o),p=$(o),x=X(s),C=$(s),S=X(l),W=$(l),Y=X(y),ye=$(y),O={a:ft,A:gt,b:dt,B:ht,c:null,d:Be,e:Be,f:Mn,g:Fn,G:Yn,H:yn,I:Tn,j:xn,L:Je,m:Cn,M:Un,p:pt,q:yt,Q:Ee,s:_e,S:wn,u:bn,U:Sn,V:Dn,w:kn,W:Ln,x:null,X:null,y:vn,Y:An,Z:Wn,"%":Ze},j={a:Tt,A:xt,b:Mt,B:Ct,c:null,d:Re,e:Re,f:zn,g:Qn,G:Gn,H:Hn,I:On,j:jn,L:et,m:In,M:Nn,p:Ut,q:wt,Q:Ee,s:_e,S:Pn,u:Vn,U:Bn,V:Rn,w:Zn,W:En,x:null,X:null,y:_n,Y:qn,Z:Xn,"%":Ze},Te={a:ot,A:it,b:st,B:ct,c:ut,d:Pe,e:Pe,f:gn,g:Ne,G:Ie,H:Ve,I:Ve,j:un,L:fn,m:cn,M:ln,p:at,q:sn,Q:hn,s:pn,S:mn,u:tn,U:nn,V:rn,w:en,W:an,x:lt,X:mt,y:Ne,Y:Ie,Z:on,"%":dn};O.x=u(n,O),O.X=u(r,O),O.c=u(t,O),j.x=u(n,j),j.X=u(r,j),j.c=u(t,j);function u(i,f){return function(d){var a=[],k=-1,T=0,L=i.length,v,V,Fe;for(d instanceof Date||(d=new Date(+d));++k<L;)i.charCodeAt(k)===37&&(a.push(i.slice(T,k)),(V=ze[v=i.charAt(++k)])!=null?v=i.charAt(++k):V=v==="e"?" ":"0",(Fe=f[v])&&(v=Fe(d,V)),a.push(v),T=k+1);return a.push(i.slice(T,k)),a.join("")}}function D(i,f){return function(d){var a=G(1900,void 0,1),k=K(a,i,d+="",0),T,L;if(k!=d.length)return null;if("Q"in a)return new Date(a.Q);if("s"in a)return new Date(a.s*1e3+("L"in a?a.L:0));if(f&&!("Z"in a)&&(a.Z=0),"p"in a&&(a.H=a.H%12+a.p*12),a.m===void 0&&(a.m="q"in a?a.q:0),"V"in a){if(a.V<1||a.V>53)return null;"w"in a||(a.w=1),"Z"in a?(T=we(G(a.y,0,1)),L=T.getUTCDay(),T=L>4||L===0?ge.ceil(T):ge(T),T=Le.offset(T,(a.V-1)*7),a.y=T.getUTCFullYear(),a.m=T.getUTCMonth(),a.d=T.getUTCDate()+(a.w+6)%7):(T=Ue(G(a.y,0,1)),L=T.getDay(),T=L>4||L===0?fe.ceil(T):fe(T),T=J.offset(T,(a.V-1)*7),a.y=T.getFullYear(),a.m=T.getMonth(),a.d=T.getDate()+(a.w+6)%7)}else("W"in a||"U"in a)&&("w"in a||(a.w="u"in a?a.u%7:"W"in a?1:0),L="Z"in a?we(G(a.y,0,1)).getUTCDay():Ue(G(a.y,0,1)).getDay(),a.m=0,a.d="W"in a?(a.w+6)%7+a.W*7-(L+5)%7:a.w+a.U*7-(L+6)%7);return"Z"in a?(a.H+=a.Z/100|0,a.M+=a.Z%100,we(a)):Ue(a)}}function K(i,f,d,a){for(var k=0,T=f.length,L=d.length,v,V;k<T;){if(a>=L)return-1;if(v=f.charCodeAt(k++),v===37){if(v=f.charAt(k++),V=Te[v in ze?f.charAt(k++):v],!V||(a=V(i,d,a))<0)return-1}else if(v!=d.charCodeAt(a++))return-1}return a}function at(i,f,d){var a=m.exec(f.slice(d));return a?(i.p=g.get(a[0].toLowerCase()),d+a[0].length):-1}function ot(i,f,d){var a=x.exec(f.slice(d));return a?(i.w=C.get(a[0].toLowerCase()),d+a[0].length):-1}function it(i,f,d){var a=M.exec(f.slice(d));return a?(i.w=p.get(a[0].toLowerCase()),d+a[0].length):-1}function st(i,f,d){var a=Y.exec(f.slice(d));return a?(i.m=ye.get(a[0].toLowerCase()),d+a[0].length):-1}function ct(i,f,d){var a=S.exec(f.slice(d));return a?(i.m=W.get(a[0].toLowerCase()),d+a[0].length):-1}function ut(i,f,d){return K(i,t,f,d)}function lt(i,f,d){return K(i,n,f,d)}function mt(i,f,d){return K(i,r,f,d)}function ft(i){return s[i.getDay()]}function gt(i){return o[i.getDay()]}function dt(i){return y[i.getMonth()]}function ht(i){return l[i.getMonth()]}function pt(i){return c[+(i.getHours()>=12)]}function yt(i){return 1+~~(i.getMonth()/3)}function Tt(i){return s[i.getUTCDay()]}function xt(i){return o[i.getUTCDay()]}function Mt(i){return y[i.getUTCMonth()]}function Ct(i){return l[i.getUTCMonth()]}function Ut(i){return c[+(i.getUTCHours()>=12)]}function wt(i){return 1+~~(i.getUTCMonth()/3)}return{format:function(i){var f=u(i+="",O);return f.toString=function(){return i},f},parse:function(i){var f=D(i+="",!1);return f.toString=function(){return i},f},utcFormat:function(i){var f=u(i+="",j);return f.toString=function(){return i},f},utcParse:function(i){var f=D(i+="",!0);return f.toString=function(){return i},f}}}var ze={"-":"",_:" ",0:"0"},w=/^\s*\d+/,$t=/^%/,Jt=/[\\^$*+?|[\]().{}]/g;function h(e,t,n){var r=e<0?"-":"",c=(r?-e:e)+"",o=c.length;return r+(o<n?new Array(n-o+1).join(t)+c:c)}function Kt(e){return e.replace(Jt,"\\$&")}function X(e){return new RegExp("^(?:"+e.map(Kt).join("|")+")","i")}function $(e){return new Map(e.map((t,n)=>[t.toLowerCase(),n]))}function en(e,t,n){var r=w.exec(t.slice(n,n+1));return r?(e.w=+r[0],n+r[0].length):-1}function tn(e,t,n){var r=w.exec(t.slice(n,n+1));return r?(e.u=+r[0],n+r[0].length):-1}function nn(e,t,n){var r=w.exec(t.slice(n,n+2));return r?(e.U=+r[0],n+r[0].length):-1}function rn(e,t,n){var r=w.exec(t.slice(n,n+2));return r?(e.V=+r[0],n+r[0].length):-1}function an(e,t,n){var r=w.exec(t.slice(n,n+2));return r?(e.W=+r[0],n+r[0].length):-1}function Ie(e,t,n){var r=w.exec(t.slice(n,n+4));return r?(e.y=+r[0],n+r[0].length):-1}function Ne(e,t,n){var r=w.exec(t.slice(n,n+2));return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function on(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6));return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function sn(e,t,n){var r=w.exec(t.slice(n,n+1));return r?(e.q=r[0]*3-3,n+r[0].length):-1}function cn(e,t,n){var r=w.exec(t.slice(n,n+2));return r?(e.m=r[0]-1,n+r[0].length):-1}function Pe(e,t,n){var r=w.exec(t.slice(n,n+2));return r?(e.d=+r[0],n+r[0].length):-1}function un(e,t,n){var r=w.exec(t.slice(n,n+3));return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function Ve(e,t,n){var r=w.exec(t.slice(n,n+2));return r?(e.H=+r[0],n+r[0].length):-1}function ln(e,t,n){var r=w.exec(t.slice(n,n+2));return r?(e.M=+r[0],n+r[0].length):-1}function mn(e,t,n){var r=w.exec(t.slice(n,n+2));return r?(e.S=+r[0],n+r[0].length):-1}function fn(e,t,n){var r=w.exec(t.slice(n,n+3));return r?(e.L=+r[0],n+r[0].length):-1}function gn(e,t,n){var r=w.exec(t.slice(n,n+6));return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function dn(e,t,n){var r=$t.exec(t.slice(n,n+1));return r?n+r[0].length:-1}function hn(e,t,n){var r=w.exec(t.slice(n));return r?(e.Q=+r[0],n+r[0].length):-1}function pn(e,t,n){var r=w.exec(t.slice(n));return r?(e.s=+r[0],n+r[0].length):-1}function Be(e,t){return h(e.getDate(),t,2)}function yn(e,t){return h(e.getHours(),t,2)}function Tn(e,t){return h(e.getHours()%12||12,t,2)}function xn(e,t){return h(1+J.count(P(e),e),t,3)}function Je(e,t){return h(e.getMilliseconds(),t,3)}function Mn(e,t){return Je(e,t)+"000"}function Cn(e,t){return h(e.getMonth()+1,t,2)}function Un(e,t){return h(e.getMinutes(),t,2)}function wn(e,t){return h(e.getSeconds(),t,2)}function bn(e){var t=e.getDay();return t===0?7:t}function Sn(e,t){return h(de.count(P(e)-1,e),t,2)}function Ke(e){var t=e.getDay();return t>=4||t===0?Q(e):Q.ceil(e)}function Dn(e,t){return e=Ke(e),h(Q.count(P(e),e)+(P(e).getDay()===4),t,2)}function kn(e){return e.getDay()}function Ln(e,t){return h(fe.count(P(e)-1,e),t,2)}function vn(e,t){return h(e.getFullYear()%100,t,2)}function Fn(e,t){return e=Ke(e),h(e.getFullYear()%100,t,2)}function An(e,t){return h(e.getFullYear()%1e4,t,4)}function Yn(e,t){var n=e.getDay();return e=n>=4||n===0?Q(e):Q.ceil(e),h(e.getFullYear()%1e4,t,4)}function Wn(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+h(t/60|0,"0",2)+h(t%60,"0",2)}function Re(e,t){return h(e.getUTCDate(),t,2)}function Hn(e,t){return h(e.getUTCHours(),t,2)}function On(e,t){return h(e.getUTCHours()%12||12,t,2)}function jn(e,t){return h(1+Le.count(B(e),e),t,3)}function et(e,t){return h(e.getUTCMilliseconds(),t,3)}function zn(e,t){return et(e,t)+"000"}function In(e,t){return h(e.getUTCMonth()+1,t,2)}function Nn(e,t){return h(e.getUTCMinutes(),t,2)}function Pn(e,t){return h(e.getUTCSeconds(),t,2)}function Vn(e){var t=e.getUTCDay();return t===0?7:t}function Bn(e,t){return h($e.count(B(e)-1,e),t,2)}function tt(e){var t=e.getUTCDay();return t>=4||t===0?q(e):q.ceil(e)}function Rn(e,t){return e=tt(e),h(q.count(B(e),e)+(B(e).getUTCDay()===4),t,2)}function Zn(e){return e.getUTCDay()}function En(e,t){return h(ge.count(B(e)-1,e),t,2)}function _n(e,t){return h(e.getUTCFullYear()%100,t,2)}function Qn(e,t){return e=tt(e),h(e.getUTCFullYear()%100,t,2)}function qn(e,t){return h(e.getUTCFullYear()%1e4,t,4)}function Gn(e,t){var n=e.getUTCDay();return e=n>=4||n===0?q(e):q.ceil(e),h(e.getUTCFullYear()%1e4,t,4)}function Xn(){return"+0000"}function Ze(){return"%"}function Ee(e){return+e}function _e(e){return Math.floor(+e/1e3)}var E,he;$n({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function $n(e){return E=Xt(e),he=E.format,E.parse,E.utcFormat,E.utcParse,E}function Jn(e){return new Date(e)}function Kn(e){return e instanceof Date?+e:+new Date(+e)}function nt(e,t,n,r,c,o,s,l,y,m){var g=kt(),M=g.invert,p=g.domain,x=m(".%L"),C=m(":%S"),S=m("%I:%M"),W=m("%I %p"),Y=m("%a %d"),ye=m("%b %d"),O=m("%B"),j=m("%Y");function Te(u){return(y(u)<u?x:l(u)<u?C:s(u)<u?S:o(u)<u?W:r(u)<u?c(u)<u?Y:ye:n(u)<u?O:j)(u)}return g.invert=function(u){return new Date(M(u))},g.domain=function(u){return arguments.length?p(Array.from(u,Kn)):p().map(Jn)},g.ticks=function(u){var D=p();return e(D[0],D[D.length-1],u??10)},g.tickFormat=function(u,D){return D==null?Te:m(D)},g.nice=function(u){var D=p();return(!u||typeof u.range!="function")&&(u=t(D[0],D[D.length-1],u??10)),u?p(Ge(D,u)):g},g.copy=function(){return Qe(g,nt(e,t,n,r,c,o,s,l,y,m))},g}function rt(){return qe.apply(nt(qt,Gt,P,ve,de,J,ke,De,_,he).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}const pe=({children:e,width:t=500,height:n=300})=>b.jsx("svg",{width:t,height:n,style:{border:"1px solid #ccc"},children:e}),er=["Apple","Banana","Cherry","Date","Elderberry"],or={title:"Components/Axis",component:H,parameters:{layout:"centered",docs:{description:{component:"A flexible, reusable D3 axis component that supports various scale types and orientations. Perfect for building different types of charts."}}},tags:["autodocs"],decorators:[e=>b.jsx(pe,{children:b.jsx(e,{})})],argTypes:{scale:{description:"D3 scale function",control:!1},orientation:{description:"Axis orientation",control:"select",options:["top","bottom","left","right"]},tickCount:{description:"Number of ticks",control:{type:"range",min:2,max:20,step:1}},tickSize:{description:"Tick size in pixels",control:{type:"range",min:0,max:20,step:1}},tickPadding:{description:"Tick padding",control:{type:"range",min:0,max:20,step:1}},label:{description:"Axis label",control:"text"},labelOffset:{description:"Label offset from axis",control:{type:"range",min:10,max:80,step:5}},animationDuration:{description:"Animation duration in milliseconds",control:{type:"range",min:0,max:1e3,step:50}}}},ee={args:{scale:F().domain([0,100]).range([50,450]),orientation:"bottom",transform:"translate(0, 250)",label:"Linear Scale",tickCount:6},parameters:{docs:{description:{story:"Bottom-oriented axis with linear scale."}}}},te={args:{scale:F().domain([0,100]).range([250,50]),orientation:"left",transform:"translate(50, 0)",label:"Values",tickCount:6},parameters:{docs:{description:{story:"Left-oriented axis with linear scale."}}}},ne={args:{scale:rt().domain([new Date("2024-01-01"),new Date("2024-06-01")]).range([50,450]),orientation:"bottom",transform:"translate(0, 250)",label:"Time Period",tickFormat:he("%b %Y")},parameters:{docs:{description:{story:"Time scale with custom date formatting."}}}},re={args:{scale:Lt().domain(er).range([50,450]).padding(.1),orientation:"bottom",transform:"translate(0, 250)",label:"Categories"},parameters:{docs:{description:{story:"Band scale for categorical data."}}}},ae={args:{scale:F().domain([0,100]).range([250,50]),orientation:"left",transform:"translate(50, 0)",label:"Values with Grid",tickCount:6,grid:{show:!0,size:400,style:{stroke:"#e0e0e0",opacity:"0.5"}}},decorators:[e=>b.jsxs(pe,{width:500,height:300,children:[b.jsx(e,{}),b.jsx(H,{scale:F().domain([0,50]).range([50,450]),orientation:"bottom",transform:"translate(0, 250)",label:"X Values"})]})],parameters:{docs:{description:{story:"Axis with grid lines for better data reading."}}}},oe={args:{scale:F().domain([0,100]).range([50,450]),orientation:"bottom",transform:"translate(0, 250)",label:"Styled Axis",tickCount:8,tickSize:10,tickPadding:10,style:{color:"#4a90e2",fontSize:"14px",fontWeight:"bold"}},parameters:{docs:{description:{story:"Axis with custom styling and colors."}}}},ie={args:{scale:Xe().domain([1,1e3]).range([250,50]),orientation:"left",transform:"translate(50, 0)",label:"Log Scale",tickFormat:be(".0s")},parameters:{docs:{description:{story:"Logarithmic scale with scientific notation formatting."}}}},se={args:{scale:F().domain([0,100]).range([50,450]),orientation:"bottom",transform:"translate(0, 250)",label:"Custom Ticks",tickValues:[0,25,50,75,100],tickFormat:e=>`${e}%`},parameters:{docs:{description:{story:"Axis with custom tick values and percentage formatting."}}}},ce={render:()=>b.jsxs(pe,{width:600,height:400,children:[b.jsx(H,{scale:F().domain([0,100]).range([80,520]),orientation:"bottom",transform:"translate(0, 320)",label:"Bottom Axis",tickCount:6}),b.jsx(H,{scale:F().domain([0,100]).range([80,520]),orientation:"top",transform:"translate(0, 80)",label:"Top Axis",tickCount:6}),b.jsx(H,{scale:F().domain([0,50]).range([320,80]),orientation:"left",transform:"translate(80, 0)",label:"Left Axis",tickCount:6}),b.jsx(H,{scale:F().domain([0,50]).range([320,80]),orientation:"right",transform:"translate(520, 0)",label:"Right Axis",tickCount:6})]}),parameters:{docs:{description:{story:"Demonstration of all four axis orientations together."}}}},ue={render:()=>{const e=rt().domain([new Date("2024-01-01"),new Date("2024-12-31")]).range([80,520]),t=F().domain([0,100]).range([320,80]);return b.jsxs(pe,{width:600,height:400,children:[b.jsx(H,{scale:t,orientation:"left",transform:"translate(80, 0)",grid:{show:!0,size:440,style:{stroke:"#f0f0f0",opacity:"0.8"}}}),b.jsx(H,{scale:e,orientation:"bottom",transform:"translate(0, 320)",grid:{show:!0,size:240,style:{stroke:"#f0f0f0",opacity:"0.8"}}}),b.jsx(H,{scale:t,orientation:"left",transform:"translate(80, 0)",label:"Revenue ($000)",tickCount:6,tickFormat:be("$,.0f")}),b.jsx(H,{scale:e,orientation:"bottom",transform:"translate(0, 320)",label:"Time Period",tickFormat:he("%b")}),b.jsx("path",{d:"M80,200 L150,180 L220,160 L290,140 L360,120 L430,100 L500,110 L520,90",fill:"none",stroke:"#4a90e2",strokeWidth:"2"})]})},parameters:{docs:{description:{story:"Example showing how axes work together in a chart context with grid lines and sample data."}}}},le={args:{scale:F().domain([0,100]).range([50,450]),orientation:"bottom",transform:"translate(0, 250)",label:"Interactive Axis",tickCount:5,tickSize:6,tickPadding:3,animationDuration:300},parameters:{docs:{description:{story:"Use the controls panel to experiment with different axis configurations."}}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  args: {
    scale: d3.scaleLinear().domain([0, 100]).range([50, 450]),
    orientation: "bottom",
    transform: "translate(0, 250)",
    label: "Linear Scale",
    tickCount: 6
  },
  parameters: {
    docs: {
      description: {
        story: "Bottom-oriented axis with linear scale."
      }
    }
  }
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  args: {
    scale: d3.scaleLinear().domain([0, 100]).range([250, 50]),
    orientation: "left",
    transform: "translate(50, 0)",
    label: "Values",
    tickCount: 6
  },
  parameters: {
    docs: {
      description: {
        story: "Left-oriented axis with linear scale."
      }
    }
  }
}`,...te.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  args: {
    scale: d3.scaleTime().domain([new Date("2024-01-01"), new Date("2024-06-01")]).range([50, 450]),
    orientation: "bottom",
    transform: "translate(0, 250)",
    label: "Time Period",
    tickFormat: d3.timeFormat("%b %Y")
  },
  parameters: {
    docs: {
      description: {
        story: "Time scale with custom date formatting."
      }
    }
  }
}`,...ne.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  args: {
    scale: d3.scaleBand().domain(categoricalData).range([50, 450]).padding(0.1),
    orientation: "bottom",
    transform: "translate(0, 250)",
    label: "Categories"
  },
  parameters: {
    docs: {
      description: {
        story: "Band scale for categorical data."
      }
    }
  }
}`,...re.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  args: {
    scale: d3.scaleLinear().domain([0, 100]).range([250, 50]),
    orientation: "left",
    transform: "translate(50, 0)",
    label: "Values with Grid",
    tickCount: 6,
    grid: {
      show: true,
      size: 400,
      style: {
        stroke: "#e0e0e0",
        opacity: "0.5"
      }
    }
  },
  decorators: [Story => <AxisWrapper width={500} height={300}>
        <Story />
        {/* Add a bottom axis for reference */}
        <Axis scale={d3.scaleLinear().domain([0, 50]).range([50, 450])} orientation="bottom" transform="translate(0, 250)" label="X Values" />
      </AxisWrapper>],
  parameters: {
    docs: {
      description: {
        story: "Axis with grid lines for better data reading."
      }
    }
  }
}`,...ae.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  args: {
    scale: d3.scaleLinear().domain([0, 100]).range([50, 450]),
    orientation: "bottom",
    transform: "translate(0, 250)",
    label: "Styled Axis",
    tickCount: 8,
    tickSize: 10,
    tickPadding: 10,
    style: {
      color: "#4a90e2",
      fontSize: "14px",
      fontWeight: "bold"
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Axis with custom styling and colors."
      }
    }
  }
}`,...oe.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  args: {
    scale: d3.scaleLog().domain([1, 1000]).range([250, 50]),
    orientation: "left",
    transform: "translate(50, 0)",
    label: "Log Scale",
    tickFormat: d3.format(".0s")
  },
  parameters: {
    docs: {
      description: {
        story: "Logarithmic scale with scientific notation formatting."
      }
    }
  }
}`,...ie.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  args: {
    scale: d3.scaleLinear().domain([0, 100]).range([50, 450]),
    orientation: "bottom",
    transform: "translate(0, 250)",
    label: "Custom Ticks",
    tickValues: [0, 25, 50, 75, 100],
    tickFormat: d => \`\${d}%\`
  },
  parameters: {
    docs: {
      description: {
        story: "Axis with custom tick values and percentage formatting."
      }
    }
  }
}`,...se.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  render: () => <AxisWrapper width={600} height={400}>
      {/* Bottom axis */}
      <Axis scale={d3.scaleLinear().domain([0, 100]).range([80, 520])} orientation="bottom" transform="translate(0, 320)" label="Bottom Axis" tickCount={6} />

      {/* Top axis */}
      <Axis scale={d3.scaleLinear().domain([0, 100]).range([80, 520])} orientation="top" transform="translate(0, 80)" label="Top Axis" tickCount={6} />

      {/* Left axis */}
      <Axis scale={d3.scaleLinear().domain([0, 50]).range([320, 80])} orientation="left" transform="translate(80, 0)" label="Left Axis" tickCount={6} />

      {/* Right axis */}
      <Axis scale={d3.scaleLinear().domain([0, 50]).range([320, 80])} orientation="right" transform="translate(520, 0)" label="Right Axis" tickCount={6} />
    </AxisWrapper>,
  parameters: {
    docs: {
      description: {
        story: "Demonstration of all four axis orientations together."
      }
    }
  }
}`,...ce.parameters?.docs?.source}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`{
  render: () => {
    const xScale = d3.scaleTime().domain([new Date("2024-01-01"), new Date("2024-12-31")]).range([80, 520]);
    const yScale = d3.scaleLinear().domain([0, 100]).range([320, 80]);
    return <AxisWrapper width={600} height={400}>
        {/* Grid background */}
        <Axis scale={yScale} orientation="left" transform="translate(80, 0)" grid={{
        show: true,
        size: 440,
        style: {
          stroke: "#f0f0f0",
          opacity: "0.8"
        }
      }} />

        <Axis scale={xScale} orientation="bottom" transform="translate(0, 320)" grid={{
        show: true,
        size: 240,
        style: {
          stroke: "#f0f0f0",
          opacity: "0.8"
        }
      }} />

        {/* Main axes */}
        <Axis scale={yScale} orientation="left" transform="translate(80, 0)" label="Revenue ($000)" tickCount={6} tickFormat={d3.format("$,.0f")} />

        <Axis scale={xScale} orientation="bottom" transform="translate(0, 320)" label="Time Period" tickFormat={d3.timeFormat("%b")} />

        {/* Sample data line */}
        <path d="M80,200 L150,180 L220,160 L290,140 L360,120 L430,100 L500,110 L520,90" fill="none" stroke="#4a90e2" strokeWidth="2" />
      </AxisWrapper>;
  },
  parameters: {
    docs: {
      description: {
        story: "Example showing how axes work together in a chart context with grid lines and sample data."
      }
    }
  }
}`,...ue.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  args: {
    scale: d3.scaleLinear().domain([0, 100]).range([50, 450]),
    orientation: "bottom",
    transform: "translate(0, 250)",
    label: "Interactive Axis",
    tickCount: 5,
    tickSize: 6,
    tickPadding: 3,
    animationDuration: 300
  },
  parameters: {
    docs: {
      description: {
        story: "Use the controls panel to experiment with different axis configurations."
      }
    }
  }
}`,...le.parameters?.docs?.source}}};const ir=["LinearBottom","LinearLeft","TimeScale","BandScale","WithGridLines","CustomStyling","LogScale","CustomTickValues","MultipleOrientations","ChartExample","Playground"];export{re as BandScale,ue as ChartExample,oe as CustomStyling,se as CustomTickValues,ee as LinearBottom,te as LinearLeft,ie as LogScale,ce as MultipleOrientations,le as Playground,ne as TimeScale,ae as WithGridLines,ir as __namedExportsOrder,or as default};
