import{S as _}from"./index-Dg_4Jaqk.js";import{r as u,w as y,G as r,x as n,H as k,z as c,I as h,L as z,M as V,J as C,B as b,C as S}from"./frappe-ui-2-dobwEi.js";const x={class:"space-y-1"},w={key:0,class:"block text-xs text-ink-gray-5"},B={class:"flex text-center"},M=["onMouseover"],$={__name:"Rating",props:{id:{type:String,default:""},modelValue:{type:Number,default:0},label:{type:String,default:""},size:{type:String,default:"md"}},emits:["update:modelValue"],setup(m,{emit:d}){const s=m,p=e=>{let t=[{sm:"size-4",md:"size-5",lg:"size-6",xl:"size-7"}[s.size]];return e<=l.value&&e>a.value?t.push("fill-yellow-200"):e<=a.value&&t.push("fill-yellow-500"),t.join(" ")},v=d,a=u(s.modelValue),l=u(0);let f=e=>{v("update:modelValue",e)};function g(e){f(e),a.value=e}return y(()=>s.modelValue,e=>{a.value=e}),(e,t)=>(n(),r("div",x,[s.label?(n(),r("label",w,h(s.label),1)):k("",!0),c("div",B,[(n(),r(z,null,V(5,o=>c("div",{onMouseover:i=>l.value=o,onMouseleave:t[0]||(t[0]=i=>l.value=0)},[C(S(_),{class:b(["fill-gray-400 text-gray-50 stroke-1 mr-1 cursor-pointer",p(o)]),onClick:i=>g(o)},null,8,["class","onClick"])],40,M)),64))])]))}};export{$ as _};
//# sourceMappingURL=Rating-Q1BiCrZ4.js.map
