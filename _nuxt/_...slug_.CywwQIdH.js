import{d as S,ap as A,aq as f,b as i,c as d,n as c,E as t,aj as _,j as L,t as C,f as b,e as p,g as v,F as H,ah as M,ai as k,ak as w,ab as O,ao as ue,w as U,aL as re,l as oe,am as pe,an as ee,ac as R,D as z,aM as E,at as q,y as D,aN as ge,aO as me,aP as be,aQ as ye,r as T,H as fe,aR as he,aS as ve,u as ke,aT as xe,k as _e,v as we,aU as te,aV as $e,aW as Ce,aw as ae,aX as ne,aY as Se,aZ as Ae,s as se,a_ as Ue}from"./entry.B73qqNWq.js";import ze from"./ContentRenderer.SWq4iBBm.js";import"./ContentRendererMarkdown.vue.DU9XQ4Df.js";import"./MDCRenderer.CCm8c6i-.js";const Oe={wrapper:{base:"flex items-center align-center text-center w-full",horizontal:"flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs"}},je={class:"flex flex-col lg:flex-row items-start gap-6"},Ie={class:"flex-1"},Le=S({inheritAttrs:!1,__name:"PageHeader",props:{headline:{type:String,default:void 0},title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const r={wrapper:"relative border-b border-gray-200 dark:border-gray-800 py-8",container:"flex flex-col lg:flex-row lg:items-center lg:justify-between",headline:"mb-3 text-sm/6 font-semibold text-primary flex items-center gap-1.5",title:"text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight",description:"mt-4 text-lg text-gray-500 dark:text-gray-400",icon:{wrapper:"flex",base:"w-10 h-10 flex-shrink-0 text-primary"},links:"flex flex-wrap items-center gap-1.5 mt-4 lg:mt-0"},l=e,{ui:n,attrs:a}=A("page.header",f(l,"ui"),r,f(l,"class"),!0);return(o,s)=>{var m;const g=O,y=ue;return i(),d("div",w({class:t(n).wrapper},t(a)),[e.headline||o.$slots.headline?(i(),d("div",{key:0,class:c(t(n).headline)},[_(o.$slots,"headline",{},()=>[L(C(e.headline),1)])],2)):b("",!0),p("div",je,[e.icon||o.$slots.icon?(i(),d("div",{key:0,class:c(t(n).icon.wrapper)},[_(o.$slots,"icon",{},()=>[v(g,{name:e.icon,class:c(t(n).icon.base)},null,8,["name","class"])])],2)):b("",!0),p("div",Ie,[p("div",{class:c(t(n).container)},[p("h1",{class:c(t(n).title)},[_(o.$slots,"title",{},()=>[L(C(e.title),1)])],2),(m=e.links)!=null&&m.length||o.$slots.links?(i(),d("div",{key:0,class:c(t(n).links)},[_(o.$slots,"links",{},()=>[(i(!0),d(H,null,M(e.links,(h,u)=>(i(),k(y,w({key:u},{...h,target:h.target||"_blank",color:h.color||"white"},{onClick:h.click}),null,16,["onClick"]))),128))])],2)):b("",!0)],2),e.description||o.$slots.description?(i(),d("p",{key:0,class:c(t(n).description)},[_(o.$slots,"description",{},()=>[L(C(e.description),1)])],2)):b("",!0),_(o.$slots,"default")])])],16)}}}),Be=S({inheritAttrs:!1,__name:"ContentSurroundLink",props:{link:{type:Object,required:!0},icon:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const r={wrapper:"block px-6 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group",icon:{wrapper:"inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50",base:"w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary"},title:"font-medium text-gray-900 dark:text-white text-[15px] mb-1",description:"text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"},l=e,{ui:n,attrs:a}=A("content.surround.link",f(l,"ui"),r,f(l,"class"),!0);return(o,s)=>{const g=O,y=re;return i(),k(y,w({to:e.link._path,class:t(n).wrapper},t(a)),{default:U(()=>[e.icon||e.link.icon?(i(),d("div",{key:0,class:c(t(n).icon.wrapper)},[v(g,{name:e.icon||e.link.icon,class:c(t(n).icon.base)},null,8,["name","class"])],2)):b("",!0),p("p",{class:c(t(n).title)},C(e.link.title),3),p("p",{class:c(t(n).description)},C(e.link.description),3)]),_:1},16,["to","class"])}}}),Pe={key:1,class:"hidden sm:block"},Te=S({inheritAttrs:!1,__name:"ContentSurround",props:{surround:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const r={wrapper:"grid gap-8 sm:grid-cols-2",icon:{prev:"i-heroicons-arrow-left-20-solid",next:"i-heroicons-arrow-right-20-solid"},link:{}},l=e,{ui:n,attrs:a}=A("content.surround",f(l,"ui"),r,f(l,"class"),!0),[o,s]=l.surround||[];return(g,y)=>{const m=Be;return i(),d("div",w({class:t(n).wrapper},t(a)),[t(o)?(i(),k(m,{key:0,link:t(o),ui:t(n).link,icon:t(n).icon.prev},null,8,["link","ui","icon"])):(i(),d("span",Pe," ")),t(s)?(i(),k(m,{key:2,link:t(s),ui:t(n).link,icon:t(n).icon.next,class:"text-right"},null,8,["link","ui","icon"])):b("",!0)],16)}}}),He=S({inheritAttrs:!1,__name:"PageBody",props:{prose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const r={wrapper:"mt-8 pb-24",prose:"prose prose-primary dark:prose-invert max-w-none"},l=e,{ui:n,attrs:a}=A("page.body",f(l,"ui"),r,f(l,"class"),!0);return(o,s)=>(i(),d("div",w({class:[t(n).wrapper,e.prose&&t(n).prose]},t(a)),[_(o.$slots,"default")],16))}}),P=pe(ee.ui.strategy,ee.ui.divider,Oe),Ne=S({components:{UIcon:O,UAvatar:R},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>P.default.size,validator(e){return Object.keys(P.border.size.horizontal).includes(e)||Object.keys(P.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:r,attrs:l}=A("divider",f(e,"ui"),P),n=z(()=>E(q(r.value.wrapper.base,r.value.wrapper[e.orientation]),e.class)),a=z(()=>q(r.value.container.base,r.value.container[e.orientation])),o=z(()=>q(r.value.border.base,r.value.border[e.orientation],r.value.border.size[e.orientation][e.size],r.value.border.type[e.type]));return{ui:r,attrs:l,wrapperClass:n,containerClass:a,borderClass:o}}});function qe(e,r,l,n,a,o){const s=O,g=R;return i(),d("div",w({class:e.wrapperClass},e.attrs),[p("div",{class:c(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(i(),d(H,{key:0},[p("div",{class:c(e.containerClass)},[_(e.$slots,"default",{},()=>[e.label?(i(),d("span",{key:0,class:c(e.ui.label)},C(e.label),3)):e.icon?(i(),k(s,{key:1,name:e.icon,class:c(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(i(),k(g,w({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):b("",!0)])],2),p("div",{class:c(e.borderClass)},null,2)],64)):b("",!0)],16)}const Ee=oe(Ne,[["render",qe]]),Me=S({inheritAttrs:!1,__name:"PageLinks",props:{title:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const r=D(),l=z(()=>({wrapper:"space-y-3",title:"text-sm/6 font-semibold flex items-center gap-1.5",container:"space-y-3 lg:space-y-1.5",base:"flex items-center gap-1.5",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{base:"w-5 h-5 flex-shrink-0"},avatar:{base:"self-center",size:"2xs"},externalIcon:{name:r.ui.icons.external,base:"w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"},label:"text-sm/6 font-medium relative"})),n=e,{ui:a,attrs:o}=A("page.links",f(n,"ui"),l,f(n,"class"),!0);return(s,g)=>{const y=O,m=R,h=me;return i(),d("div",w({class:t(a).wrapper},t(o)),[e.title||s.$slots.title?(i(),d("p",{key:0,class:c(t(a).title)},[_(s.$slots,"title",{},()=>[L(C(e.title),1)])],2)):b("",!0),p("div",{class:c(t(a).container)},[_(s.$slots,"default",{},()=>[(i(!0),d(H,null,M(e.links,(u,x)=>(i(),k(h,w({key:x},t(ge)(u),{class:t(a).base,"active-class":t(a).active,"inactive-class":t(a).inactive,onClick:u.click}),{default:U(()=>[u.icon?(i(),k(y,{key:0,name:u.icon,class:c(t(E)(t(a).icon.base,u.iconClass))},null,8,["name","class"])):b("",!0),u.avatar?(i(),k(m,w({key:1},{size:t(a).avatar.size,...u.avatar},{class:t(E)(t(a).avatar.base,u.avatarClass)}),null,16,["class"])):b("",!0),p("span",{class:c(t(a).label)},[L(C(u.label)+" ",1),u.target==="_blank"?(i(),k(y,{key:0,name:t(a).externalIcon.name,class:c(t(a).externalIcon.base)},null,8,["name","class"])):b("",!0)],2)]),_:2},1040,["class","active-class","inactive-class","onClick"]))),128))])],2)],16)}}}),Re={},De={class:"relative group/ad border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-700 p-2 w-full transition-colors"},Ve=p("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),Fe={class:"flex flex-col items-center mt-2 text-center"},Je={class:"inline-flex gap-1.5"},Ke=p("img",{src:"https://lightxi.com/assets/images/logo.png",alt:"Logo",class:"h-5 w-auto"},null,-1),Qe=p("p",{class:"text-sm text-gray-500 dark:text-gray-400 group-hover/ad:text-gray-700 dark:group-hover/ad:text-gray-200 mt-1 transition-colors"}," 新一代云计算平台 ",-1);function We(e,r){const l=re,n=be,a=ye;return i(),d("div",De,[v(l,{to:"https://lightxi.com/",class:"focus:outline-none",tabindex:"-1",target:"_blank"},{default:U(()=>[Ve]),_:1}),v(n,{light:"https://7.isyangs.cn/1/65eb26fbe43b4-1.png",dark:"https://7.isyangs.cn/1/65eb26fbe43b4-1.png",alt:"晞云云计算",loading:"lazy",class:"w-full"}),p("div",Fe,[p("div",Je,[Ke,v(a,{variant:"subtle",size:"xs",label:"晞云云计算",class:"font-semibold rounded"})]),Qe])])}const Xe=oe(Re,[["render",We]]),Ye=()=>{const e=T(),r=T([]),l=T([]),n=o=>{o.forEach(s=>{const g=s.target.id;s.isIntersecting?r.value=[...r.value,g]:r.value=r.value.filter(y=>y!==g)})},a=o=>{o.forEach(s=>{e.value&&e.value.observe(s)})};return fe(r,(o,s)=>{o.length===0?l.value=s:l.value=o}),he(()=>e.value=new IntersectionObserver(n)),ve(()=>{var o;return(o=e.value)==null?void 0:o.disconnect()}),{visibleHeadings:r,activeHeadings:l,updateHeadings:a}},Ze=["href","onClick"],ie=S({inheritAttrs:!1,__name:"ContentTocLinks",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},emits:["move"],setup(e,{emit:r}){const l={wrapper:"space-y-1",base:"block text-sm/6 truncate",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",depth:"ml-3"},n=e,a=r,o=ke(),s=_e(),{activeHeadings:g,updateHeadings:y}=Ye(),{ui:m,attrs:h}=A("content.toc.links",f(n,"ui"),l,f(n,"class"),!0);s.hooks.hookOnce("page:finish",()=>{y([...document.querySelectorAll("h2"),...document.querySelectorAll("h3")])});const u=x=>{const j=encodeURIComponent(x);o.push(`#${j}`),a("move",x)};return(x,j)=>{var B;const N=ie;return(B=e.links)!=null&&B.length?(i(),d("ul",w({key:0,class:t(m).wrapper},t(h)),[(i(!0),d(H,null,M(e.links,$=>(i(),d("li",{key:$.text,class:c([t(m).wrapper,$.depth===3&&t(m).depth])},[p("a",{href:`#${$.id}`,class:c([t(m).base,t(g).includes($.id)?t(m).active:t(m).inactive]),onClick:xe(V=>u($.id),["prevent"])},C($.text),11,Ze),$.children?(i(),k(N,{key:0,links:$.children},null,8,["links"])):b("",!0)],2))),128))],16)):b("",!0)}}}),Ge=S({inheritAttrs:!1,__name:"ContentToc",props:{title:{type:String,default:"Table of Contents"},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const r=D(),l=z(()=>({wrapper:"sticky top-[--header-height] bg-background/75 backdrop-blur -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))]",container:{base:"py-3 lg:py-8 border-b border-dashed border-gray-200 dark:border-gray-800 lg:border-0 space-y-3",empty:"lg:py-8 space-y-3"},button:{base:"flex items-center gap-1.5 lg:cursor-text lg:select-text w-full group",label:"font-semibold text-sm/6 truncate",trailingIcon:{name:r.ui.icons.chevron,base:"w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90"}},links:{}})),n=e,{ui:a,attrs:o}=A("content.toc",f(n,"ui"),l,f(n,"class"),!0),s=T(!1);return(g,y)=>{var u,x;const m=O,h=ie;return i(),d("nav",w({class:t(a).wrapper},t(o)),[p("div",{class:c([(u=e.links)!=null&&u.length?t(a).container.base:t(a).container.empty])},[_(g.$slots,"top"),(x=e.links)!=null&&x.length?(i(),d("button",{key:0,class:c(t(a).button.base),tabindex:"-1",onClick:y[0]||(y[0]=j=>s.value=!t(s))},[p("span",{class:c(t(a).button.label)},C(e.title),3),v(m,{name:t(a).button.trailingIcon.name,class:c(["lg:!hidden",[t(a).button.trailingIcon.base,t(s)?t(a).button.trailingIcon.active:t(a).button.trailingIcon.inactive]])},null,8,["name","class"])],2)):b("",!0),v(h,{links:e.links,ui:t(a).links,class:c([t(s)?"lg:block":"hidden lg:block"])},null,8,["links","ui","class"]),_(g.$slots,"bottom")],2)],16)}}}),et={key:1},rt=S({__name:"[...slug]",async setup(e){let r,l;const n=we(),{toc:a,seo:o}=D(),{data:s}=([r,l]=te(()=>ne(n.path,()=>se(n.path).findOne(),"$aROEKgqrzL")),r=await r,l(),r);if(!s.value)throw $e({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:g}=([r,l]=te(()=>ne(`${n.path}-surround`,()=>se().where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(Ue(n.path)))),r=await r,l(),r);Ce({title:s.value.title,ogTitle:`${s.value.title} - ${o==null?void 0:o.siteName}`,description:s.value.description,ogDescription:s.value.description});const y=z(()=>Se(s.value)),m=z(()=>{var h,u,x;return[((h=a==null?void 0:a.bottom)==null?void 0:h.edit)&&{icon:"i-heroicons-pencil-square",label:"Edit this page",to:`${a.bottom.edit}/${(u=s==null?void 0:s.value)==null?void 0:u._file}`,target:"_blank"},...((x=a==null?void 0:a.bottom)==null?void 0:x.links)||[]].filter(Boolean)});return(h,u)=>{const x=Le,j=ze,N=Te,B=He,$=Ee,V=Me,le=Xe,ce=Ge,de=Ae;return i(),k(de,null,ae({default:U(()=>[v(x,{title:t(s).title,description:t(s).description,links:t(s).links,headline:t(y)},null,8,["title","description","links","headline"]),v(B,{prose:""},{default:U(()=>{var I;return[t(s).body?(i(),k(j,{key:0,value:t(s)},null,8,["value"])):b("",!0),(I=t(g))!=null&&I.length?(i(),d("hr",et)):b("",!0),v(N,{surround:t(g)},null,8,["surround"])]}),_:1})]),_:2},[t(s).toc!==!1?{name:"right",fn:U(()=>{var I,F,J,K;return[v(ce,{title:(I=t(a))==null?void 0:I.title,links:(J=(F=t(s).body)==null?void 0:F.toc)==null?void 0:J.links},ae({_:2},[(K=t(a))!=null&&K.bottom?{name:"bottom",fn:U(()=>{var Q,W,X,Y,Z,G;return[p("div",{class:c(["hidden lg:block space-y-6",{"!mt-6":(X=(W=(Q=t(s).body)==null?void 0:Q.toc)==null?void 0:W.links)==null?void 0:X.length}])},[(G=(Z=(Y=t(s).body)==null?void 0:Y.toc)==null?void 0:Z.links)!=null&&G.length?(i(),k($,{key:0,type:"dashed"})):b("",!0),v(V,{title:t(a).bottom.title,links:t(m)},null,8,["title","links"])],2),v($,{type:"dashed"}),v(le)]}),key:"0"}:void 0]),1032,["title","links"])]}),key:"0"}:void 0]),1024)}}});export{rt as default};
