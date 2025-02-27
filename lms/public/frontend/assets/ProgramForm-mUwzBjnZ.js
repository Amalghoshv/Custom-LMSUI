import{r as h,a8 as J,d as C,G as p,z as d,H as V,J as o,C as e,aG as K,y as t,a5 as x,I as g,K as f,P as Q,aN as M,L as P,M as S,aP as T,aQ as D,aS as F,R as I,v as b,q as W,S as X,F as Y,x as n,aO as L}from"./frappe-ui-2-dobwEi.js";import{P as U,T as A,q as B,s as c}from"./index-Dg_4Jaqk.js";import{D as Z}from"./vuedraggable.umd-xDJT7alU.js";const ee={class:"sticky top-0 z-10 flex flex-col md:flex-row md:items-center justify-between border-b bg-surface-white px-3 py-2.5 sm:px-5"},se={key:0,class:"pt-5 px-5 w-3/4 mx-auto space-y-10"},ae={class:"flex items-center justify-between mb-2"},re={class:"text-lg font-semibold"},oe={class:"flex gap-2"},le={class:"flex items-center justify-between mb-2"},te={class:"text-lg font-semibold"},me={class:"flex gap-2"},ce={__name:"ProgramForm",props:{programName:{type:String,required:!0}},setup(j){const i=h(!1),_=h(null),v=h(null),w=h(null),q=Y(),y=j,l=J({doctype:"LMS Program",name:y.programName,auto:!0,cache:["program",y.programName]}),O=()=>{l.setValue.submit({program_courses:[...l.doc.program_courses,{course:v.value}]},{onSuccess(s){i.value=!1,v.value=null,c(__("Success"),__("Course added to program"),"check"),l.reload()},onError(s){var r;c("Error",((r=s.messages)==null?void 0:r[0])||s,"x")}})},R=()=>{l.setValue.submit({program_members:[...l.doc.program_members,{member:w.value}]},{onSuccess(s){i.value=!1,w.value=null,c(__("Success"),__("Member added to program"),"check"),l.reload()},onError(s){var r;c("Error",((r=s.messages)==null?void 0:r[0])||s,"x")}})},N=(s,r,a)=>{s=Array.from(s),l.setValue.submit({[a]:l.doc[a].filter(m=>!s.includes(m.name))},{onSuccess(m){r(),c(__("Success"),__("Items removed successfully"),"check"),l.reload()},onError(m){var u;c("Error",((u=m.messages)==null?void 0:u[0])||m,"x")}})},z=s=>{let r=s.from.dataset.idx,a=s.to.dataset.idx,m=l.doc.program_courses;m.splice(a,0,m.splice(r,1)[0]),m.forEach((u,k)=>{u.idx=k+1}),l.setValue.submit({program_courses:m},{onSuccess(u){c(__("Success"),__("Course moved successfully"),"check"),l.reload()},onError(u){var k;c("Error",((k=u.messages)==null?void 0:k[0])||u,"x")}})},G=()=>{X("frappe.model.rename_doc.update_document_title",{doctype:"LMS Program",docname:l.doc.name,name:l.doc.title}).then(s=>{q.push({name:"ProgramForm",params:{programName:s}})})},$=C(()=>[{label:"Title",key:"course_title",width:3},{label:"ID",key:"course",width:3}]),E=C(()=>[{label:"Member",key:"member",width:3,align:"left"},{label:"Full Name",key:"full_name",width:3,align:"left"},{label:"Progress (%)",key:"progress",width:3,align:"right"}]),H=C(()=>[{label:"Programs",route:{name:"Programs"}},{label:y.programName==="new"?"New Program":y.programName}]);return(s,r)=>(n(),p(P,null,[d("header",ee,[o(e(K),{items:H.value},null,8,["items"]),o(e(f),{variant:"solid",onClick:r[0]||(r[0]=a=>G())},{default:t(()=>[x(g(s.__("Save")),1)]),_:1})]),e(l).doc?(n(),p("div",se,[o(e(Q),{modelValue:e(l).doc.title,"onUpdate:modelValue":r[1]||(r[1]=a=>e(l).doc.title=a),label:s.__("Title")},null,8,["modelValue","label"]),d("div",null,[d("div",ae,[d("div",re,g(s.__("Program Courses")),1),o(e(f),{onClick:r[2]||(r[2]=()=>{_.value="course",i.value=!0})},{prefix:t(()=>[o(e(U),{class:"w-4 h-4"})]),default:t(()=>[x(" "+g(s.__("Add")),1)]),_:1})]),o(e(I),{columns:$.value,rows:e(l).doc.program_courses,"row-key":"name",options:{showTooltip:!1}},{default:t(()=>[o(e(M),{class:"mb-2 grid items-center space-x-4 rounded bg-surface-gray-2 p-2"},{default:t(()=>[(n(!0),p(P,null,S($.value,a=>(n(),b(e(L),{item:a},null,8,["item"]))),256))]),_:1}),o(e(T),null,{default:t(()=>[o(e(Z),{list:e(l).doc.program_courses,"item-key":"name",group:"items",onEnd:z,class:"cursor-move"},{item:t(({element:a})=>[o(e(D),{row:a},null,8,["row"])]),_:1},8,["list"])]),_:1}),o(e(F),null,{actions:t(({unselectAll:a,selections:m})=>[d("div",oe,[o(e(f),{variant:"ghost",onClick:u=>N(m,a,"program_courses")},{default:t(()=>[o(e(A),{class:"h-4 w-4 stroke-1.5"})]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["columns","rows"])]),d("div",null,[d("div",le,[d("div",te,g(s.__("Program Members")),1),o(e(f),{onClick:r[3]||(r[3]=()=>{_.value="member",i.value=!0})},{prefix:t(()=>[o(e(U),{class:"w-4 h-4"})]),default:t(()=>[x(" "+g(s.__("Add")),1)]),_:1})]),o(e(I),{columns:E.value,rows:e(l).doc.program_members,"row-key":"name",options:{showTooltip:!1}},{default:t(()=>[o(e(M),{class:"mb-2 grid items-center space-x-4 rounded bg-surface-gray-2 p-2"},{default:t(()=>[(n(!0),p(P,null,S(E.value,a=>(n(),b(e(L),{item:a},null,8,["item"]))),256))]),_:1}),o(e(T),null,{default:t(()=>[(n(!0),p(P,null,S(e(l).doc.program_members,a=>(n(),b(e(D),{row:a},null,8,["row"]))),256))]),_:1}),o(e(F),null,{actions:t(({unselectAll:a,selections:m})=>[d("div",me,[o(e(f),{variant:"ghost",onClick:u=>N(m,a,"program_members")},{default:t(()=>[o(e(A),{class:"h-4 w-4 stroke-1.5"})]),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["columns","rows"])])])):V("",!0),o(e(W),{modelValue:i.value,"onUpdate:modelValue":r[6]||(r[6]=a=>i.value=a),options:{title:_.value=="course"?s.__("New Program Course"):s.__("New Program Member"),actions:[{label:s.__("Add"),variant:"solid",onClick:()=>_.value=="course"?O(s.close):R(s.close)}]}},{"body-content":t(()=>[_.value=="course"?(n(),b(B,{key:0,modelValue:v.value,"onUpdate:modelValue":r[4]||(r[4]=a=>v.value=a),doctype:"LMS Course",filters:{disable_self_learning:1},label:s.__("Program Course"),description:s.__("Only courses for which self learning is disabled can be added to program.")},null,8,["modelValue","label","description"])):V("",!0),_.value=="member"?(n(),b(B,{key:1,modelValue:w.value,"onUpdate:modelValue":r[5]||(r[5]=a=>w.value=a),doctype:"User",filters:{ignore_user_type:1},label:s.__("Program Member")},null,8,["modelValue","label"])):V("",!0)]),_:1},8,["modelValue","options"])],64))}};export{ce as default};
//# sourceMappingURL=ProgramForm-mUwzBjnZ.js.map
