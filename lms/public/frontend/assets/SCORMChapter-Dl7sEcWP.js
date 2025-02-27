import{r as p,aK as T,a8 as $,at as D,f as V,j as P,d as M,G as d,z as c,H as R,J as N,C as r,aG as k,I as G,y as z,a5 as B,K as O,L as j,S as A,x as m}from"./frappe-ui-2-dobwEi.js";import{k as F,b as J}from"./index-Dg_4Jaqk.js";const W=F("sidebar",()=>{const l=p(!1),i=p(!0);return localStorage.getItem("isSidebarCollapsed")&&(l.value=JSON.parse(localStorage.getItem("isSidebarCollapsed"))),localStorage.getItem("isWebpagesCollapsed")&&(i.value=JSON.parse(localStorage.getItem("isWebpagesCollapsed"))),{isSidebarCollapsed:l,isWebpagesCollapsed:i}}),q={class:"sticky top-0 z-10 flex items-center justify-between border-b bg-surface-white px-3 py-2.5 sm:px-5"},K={key:0},H=["src"],Y={key:1},Q={class:"text-center pt-10 px-5 md:px-0 pb-10"},U={class:"text-center"},X={class:"mb-4"},te={__name:"SCORMChapter",props:{courseName:{type:String,required:!0},chapterName:{type:String,required:!0}},setup(l){var b,h;const i=W(),o=V("$user"),S=p(!1),a=l;T(()=>{i.isSidebarCollapsed=!0,y()});const t=$({doctype:"Course Chapter",name:a.chapterName,auto:!0,cache:["chapter",a.chapterName],onSuccess(e){f.submit()}}),u=D({doctype:"LMS Enrollment",fields:["member","course"],filters:{course:a.courseName,member:(b=o.data)==null?void 0:b.name},auto:!0,cache:["enrollments",a.courseName,(h=o.data)==null?void 0:h.name]}),_=e=>{var s;return e=="cmi.core.lesson_status"?((s=f.data)==null?void 0:s.status)=="Complete"?"passed":"incomplete":""},g=(e,s)=>{e=="cmi.core.lesson_status"&&s=="passed"&&w()},w=()=>{A("lms.lms.doctype.course_lesson.course_lesson.save_progress",{lesson:t.doc.lessons[0].lesson,course:a.courseName})},f=P({url:"frappe.client.get_value",makeParams(e){var s,n;return{doctype:"LMS Course Progress",fieldname:"status",filters:{member:(s=o.data)==null?void 0:s.name,lesson:t.doc.lessons[0].lesson,chapter:t.doc.name,course:(n=t.doc)==null?void 0:n.course}}},onSuccess(e){S.value=!0}}),x=()=>{var e;u.insert.submit({course:a.courseName,member:(e=o.data)==null?void 0:e.name},{onSuccess(s){window.location.reload()}})},y=()=>{window.API_1484_11={Initialize:()=>"true",Terminate:()=>"true",GetValue:e=>(console.log(`GET: ${e}`),_(e)),SetValue:(e,s)=>(console.log(`SET: ${e} to value: ${s}`),g(e,s),"true"),Commit:()=>"true",GetLastError:()=>"0",GetErrorString:()=>"",GetDiagnostic:()=>""},window.API={LMSInitialize:()=>"true",LMSFinish:()=>"true",LMSGetValue:e=>(console.log(`GET: ${e}`),_(e)),LMSSetValue:(e,s)=>(console.log(`SET: ${e} to value: ${s}`),g(e,s),"true"),LMSCommit:()=>"true",LMSGetLastError:()=>"0",LMSGetErrorString:()=>"",LMSGetDiagnostic:()=>""}},E=M(()=>{var e,s;return[{label:"Courses",route:{name:"Courses"}},{label:(e=t.doc)==null?void 0:e.course_title,route:{name:"CourseDetail",params:{courseName:a.courseName}}},{label:(s=t.doc)==null?void 0:s.title}]}),I=M(()=>{var e,s;return{title:(e=t==null?void 0:t.doc)==null?void 0:e.title,description:__("This is a chapter in the course {0}").format((s=t==null?void 0:t.doc)==null?void 0:s.course_title)}});return J(I),(e,s)=>{var n,C,v,L;return m(),d(j,null,[c("header",q,[N(r(k),{class:"h-7",items:E.value},null,8,["items"])]),S.value&&((n=r(u).data)!=null&&n.length||(C=r(o).data)!=null&&C.is_moderator||(v=r(o).data)!=null&&v.is_instructor)?(m(),d("div",K,[c("iframe",{src:r(t).doc.launch_file,class:"w-full h-screen"},null,8,H)])):(L=r(u).data)!=null&&L.length?R("",!0):(m(),d("div",Y,[c("div",Q,[c("div",U,[c("div",X,G(e.__("You are not enrolled in this course. Please enroll to access this lesson.")),1),N(r(O),{variant:"solid",onClick:s[0]||(s[0]=Z=>x())},{default:z(()=>[B(G(e.__("Start Learning")),1)]),_:1})])])]))],64)}}};export{te as default};
//# sourceMappingURL=SCORMChapter-Dl7sEcWP.js.map
