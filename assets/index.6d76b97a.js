import{d as b,u as H,r as R,E as U,a as G,b as a,o as l,c as g,e as d,t as f,F as w,f as L,n as J,g as i,w as n,h as y,i as h,j as E,k as x,l as z,m as W,p as Q,q as X,s as Y,v as Z,x as B,y as D,z as P,A as O,B as ee,C as te,D as oe,G as ne,H as ae,I as le,J as se,K as re,L as ie,M as ce,N as ue,O as _e,P as de}from"./vendor.9be6d6ff.js";const pe=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}};pe();var c=Bbob;const q=[{name:"Home",path:"/"},{name:"Articles",path:"/articles/scroll"},{name:"Categories",path:"/filter/categories"},{name:"Tags",path:"/filter/tags"},{name:"About",path:"/about"}];const me={key:0,class:"nav-wrapper"},fe={class:"nav-container"},he=["id"],j=b({props:{mode:{type:String,default:"horizontal"},readyClick:{type:Function,default:void 0}},setup(m){const s=m;let t=H();return(u,e)=>{const o=R("router-link"),r=U,_=G;return a(s).mode=="horizontal"?(l(),g("div",me,[d("h1",{class:"title",onClick:e[0]||(e[0]=p=>a(t).push("/"))},f(a(c).meta.blogName),1),d("div",fe,[(l(!0),g(w,null,L(a(q),(p,k)=>(l(),g("div",{id:`nav-item-${p.path}`,class:J([a(t).currentRoute.value.path==p.path?"nav-item-selected":"","nav-item"])},[i(o,{class:"nav-item-a",to:p.path},{default:n(()=>[y(f(p.name),1)]),_:2},1032,["to"])],10,he))),256))])])):a(s).mode=="vertical"?(l(),h(_,{key:1,router:"","default-active":a(t).currentRoute.value.path},{default:n(()=>[(l(!0),g(w,null,L(a(q),(p,k)=>(l(),h(r,{key:k,index:p.path},{default:n(()=>[y(f(p.name),1)]),_:2},1032,["index"]))),128))]),_:1},8,["default-active"])):E("",!0)}}});const ve={class:"copyright"},ge=d("a",{class:"beautifulLink",href:"https://github.com/Reknij/Bbob"},"Bbob",-1),ye=y(" & default "),ke=b({setup(m){return(s,t)=>(l(),g("p",ve,[y(" \xA9 2022 "+f(a(c).meta.author)+" Powered by ",1),ge,ye]))}});let M=x(!0),S,be;const V=()=>{S&&window.innerWidth<S||be?M.value=!1:M.value=!0};V();window.onresize=V;function xe(m){S=m,V()}const $e={class:"container"},Ce=d("div",{class:"menu"},null,-1),we=d("div",{class:"menu"},null,-1),Ee=d("div",{class:"menu"},null,-1),Le=[Ce,we,Ee],Ae=b({setup(m){let s=H(),t=x(!1);return(u,e)=>{const o=W;return l(),g("div",$e,[i(o,{size:"100%",modelValue:a(t),"onUpdate:modelValue":e[0]||(e[0]=r=>z(t)?t.value=r:t=r),direction:"ltr"},{default:n(()=>[i(j,{mode:"vertical","ready-click":()=>z(t)?t.value=!1:t=!1},null,8,["ready-click"])]),_:1},8,["modelValue"]),d("div",{class:"menu-container",onClick:e[1]||(e[1]=r=>z(t)?t.value=!0:t=!0)},Le),d("h1",{class:"oneLine",onClick:e[2]||(e[2]=r=>a(s).push("/"))},f(a(c).meta.blogName),1)])}}});const Te=b({setup(m){return xe(768),(s,t)=>{const u=Q,e=R("router-view"),o=X,r=Y,_=Z,p=B;return l(),h(p,{id:"app-container"},{default:n(()=>[i(_,null,{default:n(()=>[i(u,null,{default:n(()=>[a(M)?(l(),h(j,{key:0})):(l(),h(Ae,{key:1}))]),_:1}),i(o,null,{default:n(()=>[i(e)]),_:1}),i(r,null,{default:n(()=>[i(ke)]),_:1})]),_:1})]),_:1})}}});const Ie=y("Categories"),Ne=y("Tags"),F=b({props:{mode:{type:String,default:"default"},source:{type:Array,default:[]},defineSource:{type:Boolean,default:!1}},setup(m){const s=m;let t=x([]);s.defineSource?D(()=>s.source,()=>t.value=s.source):t.value=c.blog.links,t.value.length>0&&(t.value[0].size="large",t.value[0].type="primary"),s.mode=="default"&&t.value.length>6&&(t.value=t.value.slice(0,5));const u=()=>{s.mode=="scroll"&&c.api.nextLinkInfos(e=>{e&&(e.forEach(o=>{t.value.push(o)}),c.blog.links=t.value)})};return(e,o)=>{const r=R("router-link"),_=P,p=O,k=B,$=ee,A=te,C=oe;return ne((l(),h(A,null,{default:n(()=>[(l(!0),g(w,null,L(a(t),(v,T)=>(l(),h($,{key:T,size:v.size,type:v.type,timestamp:v.date},{default:n(()=>[i(k,null,{default:n(()=>[d("h3",null,[i(r,{class:"articleTitle",to:`/article?address=${v.address}`},{default:n(()=>[y(f(v.title),1)]),_:2},1032,["to"])]),v.categories?(l(),h(p,{key:0,"content-position":"left"},{default:n(()=>[i(_,{effect:"dark",type:"warning"},{default:n(()=>[Ie]),_:1})]),_:1})):E("",!0),v.categories?(l(!0),g(w,{key:1},L(v.categories,(I,N)=>(l(),h(_,{class:"tagItem",key:N,type:"warning"},{default:n(()=>[y(f(I),1)]),_:2},1024))),128)):E("",!0),v.tags?(l(),h(p,{key:2,"content-position":"left"},{default:n(()=>[i(_,{effect:"dark",type:"success"},{default:n(()=>[Ne]),_:1})]),_:1})):E("",!0),v.tags?(l(!0),g(w,{key:3},L(v.tags,(I,N)=>(l(),h(_,{class:"tagItem",key:N,type:"success"},{default:n(()=>[y(f(I),1)]),_:2},1024))),128)):E("",!0)]),_:2},1024)]),_:2},1032,["size","type","timestamp"]))),128))]),_:1})),[[C,u]])}}}),ze=b({setup(m){return document.title=c.meta.blogName,(s,t)=>(l(),h(F))}});const Be={id:"parent"},Me={id:"content"},Re=d("span",{id:"htmlContent"},null,-1),Se=d("h4",null,"Table of content",-1),Ve=["innerHTML"],Fe=y("Toc"),He=b({setup(m){const s="No exists article!",u=ie().query;let e=x({title:s,date:s});c.api.getArticleFromAddress(u.address,r=>{let _=document.getElementById("htmlContent");e.value=r,_&&r.contentParsed&&(_.innerHTML=r.contentParsed,ae.highlightAll()),document.title=r.title}),le(()=>(document.title=c.meta.blogName,!0));let o=x(!1);return(r,_)=>{const p=B,k=W,$=se,A=re;return l(),g("div",Be,[d("div",Me,[i(p,null,{default:n(()=>[Re]),_:1}),a(e).toc?(l(),h(k,{key:0,size:a(M)?"50%":"100%",modelValue:a(o),"onUpdate:modelValue":_[0]||(_[0]=C=>z(o)?o.value=C:o=C),direction:"ltr"},{title:n(()=>[Se]),default:n(()=>[d("div",null,[d("span",{innerHTML:a(e).toc},null,8,Ve)])]),_:1},8,["size","modelValue"])):E("",!0),i(A,{style:{"margin-left":"90%"},offset:80,position:"bottom"},{default:n(()=>[i($,{onClick:_[1]||(_[1]=C=>z(o)?o.value=!a(o):o=!a(o)),type:"primary"},{default:n(()=>[Fe]),_:1})]),_:1})])])}}}),We=b({props:{mode:{type:String,default:"categories"}},setup(m){const s=m;let t=x("Categories"),u=x(c.blog.categories),e=c.api.getLinkInfosWithCategory,o=x([]),r=x("");const _=k=>{o.value=k},p=(k,$)=>{k?(r.value=$,e($,_)):(r.value="",o.value=[])};return D(()=>s.mode,()=>{o.value=[],r.value="",s.mode=="categories"?(t.value="Categories",e=c.api.getLinkInfosWithCategory,u.value=c.blog.categories):s.mode=="tags"&&(t.value="Tags",e=c.api.getLinkInfosWithTag,u.value=c.blog.tags)}),(k,$)=>{const A=P,C=O,v=ce;return l(),g(w,null,[i(C,{"content-position":"left"},{default:n(()=>[i(A,{effect:"dark",type:"warning"},{default:n(()=>[y(f(a(t)),1)]),_:1})]),_:1}),a(u).length?(l(!0),g(w,{key:0},L(a(u),(T,I)=>(l(),h(v,{class:"tagItem",key:I,type:"warning",checked:a(r)==T,onChange:N=>p(N,T)},{default:n(()=>[y(f(T),1)]),_:2},1032,["checked","onChange"]))),128)):E("",!0),i(F,{style:{"margin-top":"10px"},source:a(o),"define-source":"",mode:"all"},null,8,["source"])],64)}}}),De=b({setup(m){return(s,t)=>{const u=B;return l(),g("div",null,[i(u,null,{header:n(()=>[d("h2",null,"I am "+f(a(c).meta.author),1)]),default:n(()=>[d("p",null,f(a(c).meta.description),1)]),_:1}),i(u,{style:{"margin-top":"10px"}},{header:n(()=>[d("h2",null,"About "+f(a(c).meta.blogName),1)]),default:n(()=>[d("p",null,f(a(c).meta.about),1)]),_:1})])}}}),Pe=[{path:"/",component:ze},{path:"/articles/:mode",component:F,props:!0},{path:"/article",component:He},{path:"/filter/:mode",component:We,props:!0},{path:"/about",component:De}],Oe=ue({history:_e("/"),routes:Pe});let K=de(Te);K.use(Oe);K.mount("#app");
