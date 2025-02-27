import{r as B,s as M,f as V,F as E,j,d as y,w,G as h,H as v,C as a,z as t,J as u,aG as I,v as C,y as d,a5 as L,I as m,K as Q,L as A,M as G,B as H,ao as K,Q as O,aH as J,ay as Y,x as l}from"./frappe-ui-2-dobwEi.js";import{_ as W}from"./CourseCard-BgWpu12I.js";import{u as X,a as Z,b as ee,P as T,B as se}from"./index-Dg_4Jaqk.js";import"./UserAvatar-B6Y_HQLv.js";import"./CourseInstructors-EkUm29JR.js";const ae={key:0},te={class:"sticky top-0 z-10 flex items-center justify-between border-b bg-surface-white px-3 py-2.5 sm:px-5"},re={class:"flex space-x-2 justify-end"},oe={class:""},ne={key:0,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-7 my-5 mx-5"},ie={key:1,class:"p-5 italic text-ink-gray-4"},le={key:1,class:"grid grid-cols-3 p-5"},ce={class:"bg-surface-menu-bar py-32 px-5 rounded-md"},ue={class:"flex flex-col items-center text-center space-y-2"},de={class:"font-medium"},me={class:"text-ink-gray-7 text-sm leading-4"},_e={key:2,class:"text-center p-5 text-ink-gray-5 mt-52 w-3/4 md:w-1/2 mx-auto space-y-2"},ge={class:"text-xl font-medium"},pe={class:"leading-5"},xe={__name:"Courses",setup(he){var P;const b=V("searchQuery"),_=X(),r=V("$user"),x=B(!1),z=E(),R=Z();M(()=>{U();let e=new URLSearchParams(location.search);e.has("category")&&_.setCategory(e.get("category"))});const U=()=>{var e,s;R.learningPaths.data&&(!((e=r.data)!=null&&e.is_moderator)||!((s=r.data)!=null&&s.is_instructor))&&z.push({name:"Programs"})},o=j({url:"lms.lms.utils.get_courses",cache:["courses",(P=r.data)==null?void 0:P.email,_.currentCategory],auto:!0,makeParams(){return console.log("API Params:",{category:_.currentCategory}),{category:_.currentCategory||null}}}),N=B(0);let k;const q=y(()=>{var e,s;return k=[],g("Live"),g("New"),g("Upcoming"),r.data&&(g("Enrolled"),(r.data.is_moderator||r.data.is_instructor||(s=(e=o.data)==null?void 0:e.created)!=null&&s.length)&&g("Created"),r.data.is_moderator&&g("Under Review")),k}),g=e=>{let s=D(e.toLowerCase().split(" ").join("_"));k.push({label:e,courses:y(()=>s),count:y(()=>s.length)})},D=e=>{let s=o.data[e]||[];if(b.value){let c=b.value.toLowerCase();s=s.filter(p=>p.title.toLowerCase().includes(c)||p.short_introduction.toLowerCase().includes(c)||p.tags.filter(f=>f.toLowerCase().includes(c)).length)}return _.currentCategory&&(s=s.filter(c=>c.category===_.currentCategory)),s};j({url:"lms.lms.api.get_categories",makeParams(){return{doctype:"LMS Course",filters:{published:1}}},cache:["courseCategories"],auto:!0,transform(e){e.unshift({label:"",value:null})}}),w(o,()=>{o.data&&Object.keys(o.data).forEach(e=>{o.data[e].length&&(x.value=!0)})}),w(()=>_.currentCategory,e=>{let s=new URLSearchParams(location.search);e?s.set("category",e):s.delete("category"),history.pushState(null,"",`${location.pathname}?${s.toString()}`),o.reload()}),w(()=>b.value,e=>{console.log("Search query changed:",e),o.reload()});const F=y(()=>({title:"Courses",description:"All Courses divided by categories"}));return ee(F),(e,s)=>{var p,f,S,$;const c=Y("router-link");return a(o).data?(l(),h("div",ae,[t("header",te,[u(a(I),{class:"h-7",items:[{label:e.__("Courses"),route:{name:"Courses"}}]},null,8,["items"]),t("div",re,[s[1]||(s[1]=t("div",{class:"w-40 md:w-44"},null,-1)),(p=a(r).data)!=null&&p.is_moderator||(f=a(r).data)!=null&&f.is_instructor?(l(),C(c,{key:0,to:{name:"CourseForm",params:{courseName:"new"}}},{default:d(()=>[u(a(Q),{variant:"solid"},{prefix:d(()=>[u(a(T),{class:"h-4 w-4"})]),default:d(()=>[L(" "+m(e.__("New")),1)]),_:1})]),_:1})):v("",!0)])]),t("div",oe,[x.value?(l(),C(a(J),{key:0,as:"div",modelValue:N.value,"onUpdate:modelValue":s[0]||(s[0]=n=>N.value=n),tablistClass:"overflow-x-visible flex-wrap !gap-3 md:flex-nowrap",tabs:q.value},{tab:d(({tab:n,selected:i})=>[t("div",null,[t("button",{class:H(["group -mb-px flex items-center gap-2 overflow-hidden border-b border-transparent py-2.5 text-base text-ink-gray-5 duration-300 ease-in-out hover:border-outline-gray-3 hover:text-ink-gray-9",{"text-ink-gray-9":i}])},[n.icon?(l(),C(K(n.icon),{key:0,class:"h-5"})):v("",!0),L(" "+m(e.__(n.label))+" ",1),u(a(O),{theme:"gray"},{default:d(()=>[L(m(n.count),1)]),_:2},1024)],2)])]),"tab-panel":d(({tab:n})=>[n.courses&&n.courses.value.length?(l(),h("div",ne,[(l(!0),h(A,null,G(n.courses.value,i=>(l(),C(c,{to:i.membership&&i.current_lesson?{name:"Lesson",params:{courseName:i.name,chapterNumber:i.current_lesson.split("-")[0],lessonNumber:i.current_lesson.split("-")[1]}}:i.membership?{name:"Lesson",params:{courseName:i.name,chapterNumber:1,lessonNumber:1}}:{name:"CourseDetail",params:{courseName:i.name}}},{default:d(()=>[u(W,{course:i},null,8,["course"])]),_:2},1032,["to"]))),256))])):(l(),h("div",ie,m(e.__("No {0} courses").format(n.label.toLowerCase())),1))]),_:1},8,["modelValue","tabs"])):!a(o).loading&&((S=a(r).data)!=null&&S.is_moderator||($=a(r).data)!=null&&$.is_instructor)?(l(),h("div",le,[u(c,{to:{name:"CourseForm",params:{courseName:"new"}}},{default:d(()=>[t("div",ce,[t("div",ue,[u(a(T),{class:"size-10 stroke-1 text-ink-gray-8 p-1 rounded-full border bg-surface-white"}),t("div",de,m(e.__("Create a Course")),1),t("span",me,m(e.__("You can add chapters and lessons to it.")),1)])])]),_:1})])):!a(o).loading&&!x.value?(l(),h("div",_e,[u(a(se),{class:"size-10 mx-auto stroke-1 text-ink-gray-4"}),t("div",ge,m(e.__("No courses found")),1),t("div",pe,m(e.__("There are no courses available at the moment. Keep an eye out, fresh learning experiences are on the way soon!")),1)])):v("",!0)])])):v("",!0)}}};export{xe as default};
//# sourceMappingURL=Courses-QARcs0C6.js.map
