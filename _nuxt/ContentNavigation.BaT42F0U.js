import{d as c,bd as l,D as v,q as f,A as p,aX as g,br as m,bj as h,b8 as y,U as i,aL as _}from"./entry.B73qqNWq.js";const b=c({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(r){const{query:t}=l(r),n=v(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&f("dd-navigation").value){const{navigation:a}=p();return{navigation:a}}const{data:o}=await g(`content-navigation-${h(n.value)}`,()=>m(n.value));return{navigation:o}},render(r){const t=y(),{navigation:n}=r,o=e=>i(_,{to:e._path},()=>e.title),a=(e,u)=>i("ul",u?{"data-level":u}:null,e.map(s=>s.children?i("li",null,[o(s),a(s.children,u+1)]):i("li",null,o(s)))),d=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):d(n)}}),C=b;export{C as default};
