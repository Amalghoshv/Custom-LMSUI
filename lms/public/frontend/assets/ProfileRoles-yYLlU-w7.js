import{r as ref,j as createResource,G as createElementBlock,z as createBaseVNode,I as toDisplayString,J as createVNode,ap as withModifiers,C as unref,P as _sfc_main$1,x as openBlock}from"./frappe-ui-2-dobwEi.js";import{y as convertToTitleCase,s as showToast}from"./index-Dg_4Jaqk.js";const _hoisted_1={class:"mt-7"},_hoisted_2={class:"mb-3 text-lg font-semibold text-ink-gray-9"},_hoisted_3={class:"flex flex-col md:flex-row gap-4 md:gap-0 justify-between w-3/4 mt-5"},_sfc_main={__name:"ProfileRoles",props:{profile:{type:Object,required:!0}},setup(__props){const moderator=ref(!1),course_creator=ref(!1),batch_evaluator=ref(!1),lms_student=ref(!1),props=__props;createResource({url:"lms.lms.utils.get_roles",makeParams(a){var e;return{name:(e=props.profile.data)==null?void 0:e.name}},auto:!0,onSuccess(data){let roles=["moderator","course_creator","batch_evaluator","lms_student"];for(let role of roles)data[role]&&(eval(role).value=!0)}});const updateRole=createResource({url:"lms.overrides.user.save_role",makeParams(a){var e;return{user:(e=props.profile.data)==null?void 0:e.name,role:a.role,value:a.value}}}),changeRole=role=>{updateRole.submit({role:convertToTitleCase(role.split("_").join(" ")),value:eval(role).value},{onSuccess(a){showToast("Success","Role updated successfully","check")}})};return(a,e)=>(openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",_hoisted_2,toDisplayString(a.__("Settings")),1),createBaseVNode("div",_hoisted_3,[createVNode(unref(_sfc_main$1),{label:a.__("Moderator"),modelValue:moderator.value,"onUpdate:modelValue":e[0]||(e[0]=o=>moderator.value=o),type:"checkbox",onChange:e[1]||(e[1]=withModifiers(o=>changeRole("moderator"),["stop"]))},null,8,["label","modelValue"]),createVNode(unref(_sfc_main$1),{label:a.__("Course Creator"),modelValue:course_creator.value,"onUpdate:modelValue":e[2]||(e[2]=o=>course_creator.value=o),type:"checkbox",onChange:e[3]||(e[3]=withModifiers(o=>changeRole("course_creator"),["stop"]))},null,8,["label","modelValue"]),createVNode(unref(_sfc_main$1),{label:a.__("Evaluator"),modelValue:batch_evaluator.value,"onUpdate:modelValue":e[4]||(e[4]=o=>batch_evaluator.value=o),type:"checkbox",onChange:e[5]||(e[5]=withModifiers(o=>changeRole("batch_evaluator"),["stop"]))},null,8,["label","modelValue"]),createVNode(unref(_sfc_main$1),{label:a.__("Student"),modelValue:lms_student.value,"onUpdate:modelValue":e[6]||(e[6]=o=>lms_student.value=o),type:"checkbox",onChange:e[7]||(e[7]=withModifiers(o=>changeRole("lms_student"),["stop"]))},null,8,["label","modelValue"])])]))}};export{_sfc_main as default};
//# sourceMappingURL=ProfileRoles-yYLlU-w7.js.map
