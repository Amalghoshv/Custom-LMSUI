var B=Object.defineProperty;var k=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var j=(m,r,n)=>r in m?B(m,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):m[r]=n,_=(m,r)=>{for(var n in r||(r={}))I.call(r,n)&&j(m,n,r[n]);if(k)for(var n of k(r))L.call(r,n)&&j(m,n,r[n]);return m};import{j as b,a as R,s as G,f as M,d as g,G as w,z as o,J as i,C as t,aG as A,y,a5 as c,I as d,K as x,P as u,T as K,v as W,a9 as X,F as H,x as f}from"./frappe-ui-2-dobwEi.js";import{$ as Q,a0 as Y,a1 as Z,s as C}from"./index-Dg_4Jaqk.js";const ee={class:""},le={class:"sticky top-0 z-10 flex items-center justify-between border-b bg-surface-white px-3 py-2.5 sm:px-5"},ae={class:"py-5"},oe={class:"container border-b mb-4 pb-4"},se={class:"text-lg font-semibold mb-4"},te={class:"grid grid-cols-2 gap-4"},ne={class:"mt-4"},ie={class:"block text-ink-gray-5 text-xs mb-1"},re={class:"container mb-4 pb-4"},me={class:"text-lg font-semibold mb-4"},de={class:"grid grid-cols-2 gap-4"},ue={class:"block text-ink-gray-5 text-xs mb-1 mt-4"},pe={class:"mb-4"},be={key:1,class:""},ce={class:"flex items-center"},_e={class:"border rounded-md p-2 mr-2"},ge={class:"flex flex-col"},ye={class:"text-sm text-ink-gray-4 mt-1"},ke={__name:"JobCreation",props:{jobName:{type:String,default:"new"}},setup(m){const r=M("$user"),n=H(),p=m,J=b({url:"frappe.client.insert",makeParams(l){var e;return{doc:_({doctype:"Job Opportunity",company_logo:(e=a.image)==null?void 0:e.file_url},a)}}}),T=b({url:"frappe.client.set_value",makeParams(l){return{doctype:"Job Opportunity",name:p.jobName,fieldname:_({company_logo:a.image.file_url},a)}}}),v=b({url:"frappe.client.get",makeParams(l){return{doctype:"Job Opportunity",name:p.jobName}},onSuccess(l){Object.keys(l).forEach(e=>{Object.hasOwn(a,e)&&(a[e]=l[e])}),l.company_logo&&F.reload({image:l.company_logo})}}),F=b({url:"lms.lms.api.get_file_info",makeParams(l){return{file_url:l.image}},auto:!1,onSuccess(l){a.image=l}}),a=R({job_title:"",location:"",type:"Full Time",status:"Open",company_name:"",company_website:"",image:null,description:"",company_email_address:""});G(()=>{r.data||(window.location.href="/login"),p.jobName!="new"&&v.reload()});const N=()=>{v.data?O():S()},S=()=>{J.submit({},{onSuccess(l){n.push({name:"JobDetail",params:{job:l.name}})},onError(l){var e;C("Error",((e=l.messages)==null?void 0:e[0])||l,"x")}})},O=()=>{T.submit({},{onSuccess(l){n.push({name:"JobDetail",params:{job:l.name}})},onError(l){var e;C("Error",((e=l.messages)==null?void 0:e[0])||l,"x")}})},U=l=>{a.image=l},E=()=>{a.image=null},D=l=>{let e=l.name.split(".").pop().toLowerCase();if(!["jpg","jpeg","png"].includes(e))return"Only image file is allowed."},$=g(()=>[{label:"Full Time",value:"Full Time"},{label:"Part Time",value:"Part Time"},{label:"Contract",value:"Contract"},{label:"Freelance",value:"Freelance"}]),q=g(()=>[{label:"Open",value:"Open"},{label:"Closed",value:"Closed"}]),P=g(()=>[{label:"Jobs",route:{name:"Jobs"}},{label:p.jobName=="new"?"New Job":"Edit Job",route:{name:"JobCreation"}}]);return(l,e)=>(f(),w("div",ee,[o("header",le,[i(t(A),{items:P.value},null,8,["items"]),i(t(x),{variant:"solid",onClick:e[0]||(e[0]=s=>N())},{default:y(()=>[c(d(l.__("Save")),1)]),_:1})]),o("div",ae,[o("div",oe,[o("div",se,d(l.__("Job Details")),1),o("div",te,[o("div",null,[i(t(u),{modelValue:a.job_title,"onUpdate:modelValue":e[1]||(e[1]=s=>a.job_title=s),label:l.__("Title"),class:"mb-4",required:!0},null,8,["modelValue","label"]),i(t(u),{modelValue:a.location,"onUpdate:modelValue":e[2]||(e[2]=s=>a.location=s),label:l.__("Location"),required:!0},null,8,["modelValue","label"])]),o("div",null,[i(t(u),{modelValue:a.type,"onUpdate:modelValue":e[3]||(e[3]=s=>a.type=s),label:l.__("Type"),type:"select",options:$.value,class:"mb-4",required:!0},null,8,["modelValue","label","options"]),i(t(u),{modelValue:a.status,"onUpdate:modelValue":e[4]||(e[4]=s=>a.status=s),label:l.__("Status"),type:"select",options:q.value,required:!0},null,8,["modelValue","label","options"])])]),o("div",ne,[o("label",ie,[c(d(l.__("Description"))+" ",1),e[11]||(e[11]=o("span",{class:"text-ink-red-3"},"*",-1))]),i(t(K),{content:a.description,onChange:e[5]||(e[5]=s=>a.description=s),editable:!0,fixedMenu:!0,editorClass:"prose-sm max-w-none border-b border-x bg-surface-gray-2 rounded-b-md py-1 px-2 min-h-[7rem] mb-4"},null,8,["content"])])]),o("div",re,[o("div",me,d(l.__("Company Details")),1),o("div",de,[o("div",null,[i(t(u),{modelValue:a.company_name,"onUpdate:modelValue":e[6]||(e[6]=s=>a.company_name=s),label:l.__("Company Name"),class:"mb-4",required:!0},null,8,["modelValue","label"]),i(t(u),{modelValue:a.company_website,"onUpdate:modelValue":e[7]||(e[7]=s=>a.company_website=s),label:l.__("Company Website"),required:!0},null,8,["modelValue","label"])]),o("div",null,[i(t(u),{modelValue:a.company_email_address,"onUpdate:modelValue":e[8]||(e[8]=s=>a.company_email_address=s),label:l.__("Company Email Address"),class:"mb-4",required:!0},null,8,["modelValue","label"]),o("label",ue,[c(d(l.__("Company Logo"))+" ",1),e[12]||(e[12]=o("span",{class:"text-ink-red-3"},"*",-1))]),a.image?(f(),w("div",be,[o("div",ce,[o("div",_e,[i(t(Q),{class:"h-5 w-5 stroke-1.5 text-ink-gray-7"})]),o("div",ge,[o("span",null,d(a.image.file_name),1),o("span",ye,d(t(Y)(a.image.file_size)),1)]),i(t(Z),{onClick:e[10]||(e[10]=s=>E()),class:"bg-surface-gray-3 rounded-md cursor-pointer stroke-1.5 w-5 h-5 p-1 ml-4"})])])):(f(),W(t(X),{key:0,fileTypes:["image/*"],validateFile:D,onSuccess:e[9]||(e[9]=s=>U(s))},{default:y(({file:s,progress:h,uploading:V,openFileSelector:z})=>[o("div",pe,[i(t(x),{onClick:z,loading:V},{default:y(()=>[c(d(V?`Uploading ${h}%`:"Upload an image"),1)]),_:2},1032,["onClick","loading"])])]),_:1}))])])])])]))}};export{ke as default};
//# sourceMappingURL=JobCreation-07kYlMaI.js.map
