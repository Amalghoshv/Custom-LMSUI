import{aq as N,ar as H,f as Y,r as S,a as L,j as g,w as z,d as j,v as C,x as _,y as m,z as n,J as l,I as v,H as R,C as a,D as w,K as h,a5 as E,aH as G,G as U,P as $,aI as J,q as A,at as K,b2 as W,L as Q}from"./frappe-ui-2-dobwEi.js";import{a7 as X,v as Z,t as ee,B as te,U as ae,o as se,l as le,m as B,$ as ne,V as oe,q as ie,s as I}from"./index-Dg_4Jaqk.js";import{_ as re}from"./Rating-Q1BiCrZ4.js";const ue={class:"flex text-base"},me={class:"flex flex-col w-1/2 p-5"},de={class:"text-lg font-semibold mb-4"},ce={class:"flex flex-col space-y-4 text-sm text-ink-gray-8"},ve={class:"flex items-center space-x-2 w-fit"},fe={class:"flex items-center space-x-2 w-fit"},_e={class:"flex items-center space-x-2 w-fit"},pe={class:"flex items-center space-x-2 w-fit"},be={class:"flex items-center space-x-2 w-fit"},ye={class:"flex items-center space-x-2 mt-auto"},xe={key:0,class:"flex flex-col space-y-4 p-5"},ke={class:"flex items-center justify-between"},he={key:1,class:"flex flex-col space-y-4 p-5"},Ve={__name:"Event",props:N({event:{type:[Object,null],required:!0}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(c){const f=H(c,"modelValue"),V=Y("$dayjs"),x=S(0),p=S(!1),i=c,o=L({}),s=L({}),k=g({url:"frappe.client.get_value",makeParams(e){return{doctype:"Property Setter",fieldname:"value",filters:{doc_type:"LMS Certificate",property:"default_print_format"}}},auto:!0,onSuccess(e){s.template=e.value}}),r=e=>{window.open(e,"_blank")},d=g({url:"lms.lms.api.save_evaluation_details",makeParams(e){return{member:i.event.member,course:i.event.course,batch_name:i.event.batch_name,date:i.event.date,start_time:i.event.start_time,end_time:i.event.end_time,status:o.status,rating:o.rating,summary:o.summary,evaluator:i.event.evaluator}},auto:!1,onSuccess(e){o.name=e.name}}),b=g({url:"frappe.client.get",makeParams(e){return{doctype:"LMS Certificate Evaluation",filters:{member:i.event.member,course:i.event.course}}},onSuccess(e){for(const t in e)t in o&&(o[t]=e[t]),t=="rating"&&(o.rating=e.rating*5),o.status=="Pass"&&(p.value=!0)},auto:!1}),P=()=>{d.submit({},{onSuccess:()=>{o.status=="Pass"?p.value=!0:f.value=!1,I(__("Success"),__("Evaluation saved successfully"),"check")}})},M=g({url:"lms.lms.api.save_certificate_details",makeParams(e){return{member:i.event.member,course:i.event.course,batch_name:i.event.batch_name,published:s.published,issue_date:s.issue_date,expiry_date:s.expiry_date,template:s.template,evaluator:i.event.evaluator}},auto:!1,onSuccess(e){s.name=e}}),D=g({url:"frappe.client.get",makeParams(e){return{doctype:"LMS Certificate",filters:{member:i.event.member,course:i.event.course}}},onSuccess(e){for(const t in e)t in s&&(s[t]=e[t]),s.name=e.name,p.value=!0},onError(e){s.template=k.data.value},auto:!1}),T=()=>{M.submit({},{onSuccess:()=>{I(__("Success"),__("Certificate saved successfully"),"check")}})};z(f,()=>{f.value&&(o.rating=0,o.status="Pending",o.summary="",b.reload(),s.published=!0,s.issue_date=V().format("YYYY-MM-DD"),s.expiry_date=null,s.template=null,s.name=null,D.reload())});const q=e=>{window.open(`/api/method/frappe.utils.print_format.download_pdf?doctype=LMS+Certificate&name=${e.name}&format=${encodeURIComponent(e.template)}`)},F=j(()=>[{value:"Pending",label:__("Pending")},{value:"In Progress",label:__("In Progress")},{value:"Pass",label:__("Pass")},{value:"Fail",label:__("Fail")}]),O=j(()=>{const e=[{label:__("Evaluation"),icon:X}];return p.value&&e.push({label:__("Certification"),icon:Z}),e});return(e,t)=>(_(),C(a(A),{modelValue:f.value,"onUpdate:modelValue":t[12]||(t[12]=y=>f.value=y),options:{size:"2xl"}},{body:m(()=>[n("div",ue,[n("div",me,[n("div",de,v(c.event.title),1),n("div",ce,[l(a(w),{text:e.__("Email ID")},{default:m(()=>[n("div",ve,[l(a(ee),{class:"h-4 w-4 stroke-1.5"}),n("span",null,v(c.event.member),1)])]),_:1},8,["text"]),l(a(w),{text:e.__("Course")},{default:m(()=>[n("div",fe,[l(a(te),{class:"h-4 w-4 stroke-1.5"}),n("span",null,v(c.event.course_title),1)])]),_:1},8,["text"]),c.event.batch_title?(_(),C(a(w),{key:0,text:e.__("Batch")},{default:m(()=>[n("div",_e,[l(a(ae),{class:"h-4 w-4 stroke-1.5"}),n("span",null,v(c.event.batch_title),1)])]),_:1},8,["text"])):R("",!0),l(a(w),{text:e.__("Date")},{default:m(()=>[n("div",pe,[l(a(se),{class:"h-4 w-4 stroke-1.5"}),n("span",null,v(a(V)(c.event.date).format("DD MMM YYYY")),1)])]),_:1},8,["text"]),l(a(w),{text:e.__("Time")},{default:m(()=>[n("div",be,[l(a(le),{class:"h-4 w-4 stroke-1.5"}),n("span",null,v(a(B)(c.event.start_time))+" - "+v(a(B)(c.event.end_time)),1)])]),_:1},8,["text"])]),n("div",ye,[s.name?(_(),C(a(h),{key:0,onClick:t[0]||(t[0]=y=>q(s)),class:"w-full"},{prefix:m(()=>[l(a(ne),{class:"h-4 w-4 stroke-1.5"})]),default:m(()=>[E(" "+v(e.__("View Certificate")),1)]),_:1})):(_(),C(a(h),{key:1,onClick:t[1]||(t[1]=y=>r(c.event.venue)),class:"w-full"},{prefix:m(()=>[l(a(oe),{class:"h-4 w-4 stroke-1.5"})]),default:m(()=>[n("span",null,v(e.__("Join Meeting")),1)]),_:1}))])]),l(a(G),{tabs:O.value,modelValue:x.value,"onUpdate:modelValue":t[11]||(t[11]=y=>x.value=y),class:"border-l w-1/2"},{default:m(({tab:y})=>[y.label=="Evaluation"?(_(),U("div",xe,[n("div",ke,[l(re,{modelValue:o.rating,"onUpdate:modelValue":t[2]||(t[2]=u=>o.rating=u),label:e.__("Rating")},null,8,["modelValue","label"]),l(a($),{type:"select",options:F.value,modelValue:o.status,"onUpdate:modelValue":t[3]||(t[3]=u=>o.status=u),label:e.__("Status"),class:"w-1/2"},null,8,["options","modelValue","label"])]),l(a(J),{modelValue:o.summary,"onUpdate:modelValue":t[4]||(t[4]=u=>o.summary=u),label:e.__("Summary"),rows:7},null,8,["modelValue","label"]),l(a(h),{variant:"solid",onClick:t[5]||(t[5]=u=>P())},{default:m(()=>[E(v(e.__("Save")),1)]),_:1})])):(_(),U("div",he,[l(a($),{type:"checkbox",modelValue:s.published,"onUpdate:modelValue":t[6]||(t[6]=u=>s.published=u),label:e.__("Published")},null,8,["modelValue","label"]),l(ie,{modelValue:s.template,"onUpdate:modelValue":t[7]||(t[7]=u=>s.template=u),label:e.__("Template"),doctype:"Print Format",filters:{doc_type:"LMS Certificate"}},null,8,["modelValue","label"]),l(a($),{type:"date",modelValue:s.issue_date,"onUpdate:modelValue":t[8]||(t[8]=u=>s.issue_date=u),label:e.__("Issue Date")},null,8,["modelValue","label"]),l(a($),{type:"date",modelValue:s.expiry_date,"onUpdate:modelValue":t[9]||(t[9]=u=>s.expiry_date=u),label:e.__("Expiry Date")},null,8,["modelValue","label"]),l(a(h),{variant:"solid",onClick:t[10]||(t[10]=u=>T())},{default:m(()=>[E(v(e.__("Save")),1)]),_:1})]))]),_:1},8,["tabs","modelValue"])])]),_:1},8,["modelValue"]))}},ge={class:"mt-7 mb-20"},we={class:"flex h-screen flex-col overflow-hidden"},Ce={class:"mb-2 flex justify-between"},$e={class:"text-lg text-ink-gray-9 font-semibold"},Se={class:"flex gap-x-1"},Ee={__name:"ProfileEvaluationSchedule",props:{profile:{type:Object,required:!0}},setup(c){var o,s;const f=Y("$user"),V=S(null),x=S(!1),p=K({doctype:"LMS Certificate Request",filters:{evaluator:(o=f.data)==null?void 0:o.name},fields:["name","member_name","member","course","course_title","batch_name","batch_title","evaluator","evaluator_name","date","start_time","end_time","google_meet_link"],auto:!0,orderBy:"creation desc",cache:["schedule",(s=f.data)==null?void 0:s.name],transform(k){return k.map(r=>{let d=Object.assign({},r);return d.title=`${r.member_name}'s Evaluation`,d.participant=r.member_name,d.id=r.name,d.venue=r.google_meet_link,d.fromDate=`${r.date} ${r.start_time}`,d.toDate=`${r.date} ${r.end_time}`,d.color="green",d})}}),i=k=>{V.value=k.calendarEvent,x.value=!0};return(k,r)=>{var d;return _(),U(Q,null,[n("div",ge,[n("div",we,[(d=a(p).data)!=null&&d.length?(_(),C(a(W),{key:0,config:{defaultMode:"Month",disableModes:["Day","Week"],redundantCellHeight:100,enableShortcuts:!1},events:a(p).data,onClick:r[0]||(r[0]=b=>i(b))},{header:m(({currentMonthYear:b,decrement:P,increment:M})=>[n("div",Ce,[n("span",$e,v(b),1),n("div",Se,[l(a(h),{onClick:D=>P(),variant:"ghost",class:"h-4 w-4",icon:"chevron-left"},null,8,["onClick"]),l(a(h),{onClick:D=>M(),variant:"ghost",class:"h-4 w-4",icon:"chevron-right"},null,8,["onClick"])])])]),_:1},8,["events"])):R("",!0)])]),l(Ve,{modelValue:x.value,"onUpdate:modelValue":r[1]||(r[1]=b=>x.value=b),event:V.value},null,8,["modelValue","event"])],64)}}};export{Ee as default};
//# sourceMappingURL=ProfileEvaluationSchedule-e4P2voYS.js.map
