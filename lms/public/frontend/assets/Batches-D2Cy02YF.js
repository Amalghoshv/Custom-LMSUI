import{G as u,x as l,z as o,H as h,I as i,a5 as V,J as m,C as s,L,M as N,v as k,B as H,r as f,f as T,s as J,at as W,w as X,d as U,aG as Z,y as x,K as j,aL as ee,P as te,aM as ae,ay as se}from"./frappe-ui-2-dobwEi.js";import{l as le,m as F,G as ne,b as oe,P as re,B as ie}from"./index-Dg_4Jaqk.js";import{_ as ce}from"./DateRange-t2dZCPMC.js";import{_ as ue}from"./CourseInstructors-EkUm29JR.js";import{_ as de}from"./UserAvatar-B6Y_HQLv.js";const me={class:"flex flex-col border-2 hover:bg-surface-gray-2 rounded-md p-4 h-full",style:{"min-height":"150px"}},he={class:"text-lg leading-5 font-semibold mb-2 text-ink-gray-9"},ve={key:0,class:"text-xs bg-green-100 text-green-700 self-start px-2 py-0.5 rounded-md"},_e={key:0},fe={key:1},ge={key:1,class:"text-xs bg-red-100 text-red-700 self-start px-2 py-0.5 rounded-md"},be={class:"short-introduction text-sm text-ink-gray-7"},ye={key:2,class:"font-semibold text-ink-gray-9 mb-4"},pe={class:"flex flex-col space-y-2 mt-auto"},xe={class:"flex items-center text-sm text-ink-gray-7"},ke={key:0,class:"flex items-center text-sm text-ink-gray-7"},$e={key:3,class:"flex avatar-group overlap mt-4"},we={__name:"BatchCard",props:{batch:{type:Object,default:null}},setup(a){return(r,$)=>{var w;return l(),u("div",me,[o("div",he,i(a.batch.title),1),a.batch.seat_count&&a.batch.seats_left>0?(l(),u("div",ve,[V(i(a.batch.seats_left)+" ",1),a.batch.seats_left>1?(l(),u("span",_e,i(r.__("Seats Left")),1)):a.batch.seats_left==1?(l(),u("span",fe,i(r.__("Seat Left")),1)):h("",!0)])):a.batch.seat_count&&a.batch.seats_left<=0?(l(),u("div",ge,i(r.__("Sold Out")),1)):h("",!0),o("div",be,i(a.batch.description),1),a.batch.amount?(l(),u("div",ye,i(a.batch.price),1)):h("",!0),o("div",pe,[m(ce,{startDate:a.batch.start_date,endDate:a.batch.end_date,class:"text-sm text-ink-gray-7"},null,8,["startDate","endDate"]),o("div",xe,[m(s(le),{class:"h-4 w-4 stroke-1.5 mr-2 text-ink-gray-7"}),o("span",null,i(s(F)(a.batch.start_time))+" - "+i(s(F)(a.batch.end_time)),1)]),a.batch.timezone?(l(),u("div",ke,[m(s(ne),{class:"h-4 w-4 stroke-1.5 mr-2 text-ink-gray-5"}),o("span",null,i(a.batch.timezone),1)])):h("",!0)]),(w=a.batch.instructors)!=null&&w.length?(l(),u("div",$e,[o("div",{class:H(["h-6 mr-1",{"avatar-group overlap":a.batch.instructors.length>1}])},[(l(!0),u(L,null,N(a.batch.instructors,D=>(l(),k(de,{user:D},null,8,["user"]))),256))],2),m(ue,{instructors:a.batch.instructors},null,8,["instructors"])])):h("",!0)])}}},Be={class:"sticky flex items-center justify-between top-0 z-10 border-b bg-surface-white px-3 py-2.5 sm:px-5"},Ce={class:"p-5 pb-10"},Ue={class:"flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:items-center justify-between mb-5"},De={class:"text-lg font-semibold"},Ve={class:"flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-2"},Le={class:"grid grid-cols-2 gap-2"},Me={class:"min-w-40 lg:min-w-0 lg:w-32 xl:w-40"},Se={key:0,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"},Ye={key:1,class:"flex flex-col items-center justify-center text-sm text-ink-gray-5 italic mt-48"},Te={class:"text-lg font-medium mb-1"},je={class:"leading-5 w-2/5 text-center"},Fe={key:2,class:"flex justify-center mt-5"},Oe={__name:"Batches",setup(a){var M,S;const r=T("$user"),$=T("$dayjs"),w=f(0),D=f(20),g=f([]),b=f(null),y=f(""),n=f({}),v=f((M=r.data)!=null&&M.is_student?"All":"Upcoming"),p=f("start_date");J(()=>{A(),B(),g.value=[{label:"",value:null}]});const A=()=>{let t=new URLSearchParams(location.search);y.value=t.get("title")||"",b.value=t.get("category")||null},_=W({doctype:"LMS Batch",url:"lms.lms.utils.get_batches",cache:["batches",(S=r.data)==null?void 0:S.name],pageLength:D.value,start:w.value,onSuccess(t){let e=t.map(c=>c.category);e=e.filter((c,C)=>e.indexOf(c)===C&&c),g.value.length<=e.length&&R(t)}}),B=()=>{P(),_.update({filters:n.value,orderBy:p.value}),_.reload()},P=()=>{z(),E(),O(),G(),K()},z=()=>{b.value?n.value.category=b.value:delete n.value.category},E=()=>{y.value?n.value.title=["like",`%${y.value}%`]:delete n.value.title},O=()=>{var t,e;p.value="start_date",r.data&&(v.value=="Enrolled"&&((t=r.data)!=null&&t.is_student)?(n.value.enrolled=1,delete n.value.start_date,delete n.value.published,p.value="start_date desc"):(e=r.data)!=null&&e.is_student?delete n.value.enrolled:(delete n.value.start_date,delete n.value.published,p.value="start_date desc",v.value=="Upcoming"?(n.value.start_date=[">=",$().format("YYYY-MM-DD")],n.value.published=1,p.value="start_date"):v.value=="Archived"?n.value.start_date=["<=",$().format("YYYY-MM-DD")]:v.value=="Unpublished"&&(n.value.published=0)))},G=()=>{var t;(!r.data||(t=r.data)!=null&&t.is_student&&v.value!="Enrolled")&&(n.value.start_date=[">=",$().format("YYYY-MM-DD")],n.value.published=1)},K=()=>{let t=new URLSearchParams(location.search),e={title:y.value,category:b.value};Object.keys(e).forEach(c=>{e[c]?t.set(c,e[c]):t.delete(c)}),history.replaceState({},"",`${location.pathname}?${t.toString()}`)},R=t=>{t.forEach(e=>{e.category&&!g.value.find(c=>c.value===e.category)&&g.value.push({label:e.category,value:e.category})})};X(v,()=>{B()}),U(()=>{var e;let t=[{label:__(""),value:null},{label:__("Upcoming"),value:"Upcoming"},{label:__("Archived"),value:"Archived"}];return(e=r.data)!=null&&e.is_moderator&&t.push({label:__("Unpublished"),value:"Unpublished"}),t});const q=U(()=>{var e;let t=[{label:__("All")}];return(e=r.data)!=null&&e.is_student?t.push({label:__("Enrolled")}):(t.push({label:__("Upcoming")}),t.push({label:__("Archived")}),t.push({label:__("Unpublished")})),t}),I=U(()=>[{label:__("Batches"),route:{name:"Batches"}}]),Q=U(()=>({title:"Batches",description:"All upcoming batches."}));return oe(Q),(t,e)=>{var C,Y;const c=se("router-link");return l(),u(L,null,[o("header",Be,[m(s(Z),{items:I.value},null,8,["items"]),(C=s(r).data)!=null&&C.is_moderator?(l(),k(c,{key:0,to:{name:"BatchForm",params:{batchName:"new"}}},{default:x(()=>[m(s(j),{variant:"solid"},{prefix:x(()=>[m(s(re),{class:"h-4 w-4 stroke-1.5"})]),default:x(()=>[V(" "+i(t.__("New")),1)]),_:1})]),_:1})):h("",!0)]),o("div",Ce,[o("div",Ue,[o("div",De,i(t.__("All Batches")),1),o("div",Ve,[s(r).data?(l(),k(s(ee),{key:0,buttons:q.value,modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=d=>v.value=d)},null,8,["buttons","modelValue"])):h("",!0),o("div",Le,[m(s(te),{modelValue:y.value,"onUpdate:modelValue":e[1]||(e[1]=d=>y.value=d),placeholder:t.__("Search by Title"),type:"text",class:"min-w-40 lg:min-w-0 lg:w-32 xl:w-40",onInput:e[2]||(e[2]=d=>B())},null,8,["modelValue","placeholder"]),o("div",Me,[g.value.length?(l(),k(s(ae),{key:0,modelValue:b.value,"onUpdate:modelValue":e[3]||(e[3]=d=>b.value=d),options:g.value,placeholder:t.__("Category"),onChange:e[4]||(e[4]=d=>B())},null,8,["modelValue","options","placeholder"])):h("",!0)])])])]),(Y=s(_).data)!=null&&Y.length?(l(),u("div",Se,[(l(!0),u(L,null,N(s(_).data,d=>(l(),k(c,{to:{name:"BatchDetail",params:{batchName:d.name}}},{default:x(()=>[m(we,{batch:d},null,8,["batch"])]),_:2},1032,["to"]))),256))])):s(_).list.loading?h("",!0):(l(),u("div",Ye,[m(s(ie),{class:"size-10 mx-auto stroke-1 text-ink-gray-4"}),o("div",Te,i(t.__("No batches found")),1),o("div",je,i(t.__("There are no batches matching the criteria. Keep an eye out, fresh learning experiences are on the way soon!")),1)])),!s(_).list.loading&&s(_).hasNextPage?(l(),u("div",Fe,[m(s(j),{onClick:e[5]||(e[5]=d=>s(_).next())},{default:x(()=>[V(i(t.__("Load More")),1)]),_:1})])):h("",!0)])],64)}}};export{Oe as default};
//# sourceMappingURL=Batches-D2Cy02YF.js.map
