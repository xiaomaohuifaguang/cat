import{C,c as h,r as x}from"./main-bc28cff1.js";import{E as d}from"./element-plus-34b8252a.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{ag as m,aq as w,T as b,o as A,c as F,Y as t,S as u,W as _,X as V,a as c,ay as T,az as P}from"./@vue-7d2f9555.js";import"./axios-6667cfca.js";import"./form-data-d2a9677b.js";import"./pinia-5b755875.js";import"./vue-router-772342d5.js";import"./lodash-es-6689e95d.js";import"./@vueuse-1843ab21.js";import"./@element-plus-d297b0db.js";import"./@popperjs-c75af06c.js";import"./@ctrl-43a4208a.js";import"./dayjs-b3a9045c.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-2b76be69.js";const D={components:{CatInput:C},data(){return{user:{id:"",userAccount:"Abcd1234",userMail:"460676145@qq.com",userPassword:"Abcd1234..",userPasswordTemp:"Abcd1234..",userNickname:"张三",createTime:"",updateTime:"",temp_mail_code:"12345",temp_token:""},timeCount:0,sendButton:!1,sendButtonType:"primary",registerButton:!1,loading:!1,catUtils:h()}},methods:{sendCode(){var n=this.vertify("userMail");if(n){var e=this;e.sendButton=!0,e.sendButtonType="info",e.timeCount=60;var l=setInterval(()=>{e.timeCount--,e.timeCount<=0&&(e.sendButton=!1,e.sendButtonType="primary",clearInterval(l))},1e3);this.catUtils.httpClient({url:"/api/code",data:{type:"register",mail:this.user.userMail},success:function(o){o.code===0||d.alert(o.message)}})}},register(){var n=this.vertify("userAccount")&&this.vertify("userPassword")&&this.vertify("userPasswordTemp")?!this.vertify("userMail"):!0;if(!n){this.registerButton=!0;var e=this;this.loading=!0,this.catUtils.httpClient({url:"/api/register",data:this.user,success:function(l){e.registerButton=!1,e.loading=!1,l.code===0?d.alert("注册成功","",{confirmButtonText:"OK",callback:o=>{x.push({path:"/"})}}):d.alert(l.message)}})}},vertify(n){var e=this;switch(n){case"userAccount":{var l=/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/,o=l.test(e.user.userAccount);if(!o)return d.alert("账号规则(字母开头，允许5-16字节，允许字母数字下划线"),!1;break}case"userPassword":{var l=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_,.?+-]).{8,16}$/,o=l.test(e.user.userPassword);if(!o)return d.alert("密码规则(必须包含大小写字母和数字的组合，特殊字符(!@#$%^&*_,.?+-)，长度在8-16之间)"),!1;break}case"userPasswordTemp":{var l=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_,.?+-]).{8,16}$/,o=l.test(e.user.userPasswordTemp);if(!o)return d.alert("密码规则(必须包含大小写字母和数字的组合，特殊字符(!@#$%^&*_,.?+-)，长度在8-16之间)"),!1;if(this.user.userPassword!==e.user.userPasswordTemp)return d.alert("两次密码不一致"),!1;break}case"userMail":{var l=/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/,o=l.test(e.user.userMail);if(!o)return d.alert("邮箱格式不正确"),!1;break}default:return!0}return!0}},mounted(){},unmounted(){}};const g=n=>(T("data-v-1724a6ff"),n=n(),P(),n),E={style:{"min-height":"100vh"},"element-loading-text":"Loading..."},z=g(()=>c("div",{style:{"text-align":"center","margin-bottom":"30px","font-family":"华文新魏"}},[c("div",{style:{background:"linear-gradient(to right bottom, red, blue 70px)","-webkit-background-clip":"text",color:"transparent","font-size":"40px"}},"小猫会发光")],-1)),U=g(()=>c("span",{style:{color:"#fff","font-size":"5px","padding-left":"10px"}},"账号规则：字母开头，5-16字节，允许字母数字下划线",-1)),M=g(()=>c("span",{style:{color:"#fff","font-size":"5px","padding-left":"10px"}},"密码规则：必须包含大小写字母和数字的组合，特殊字符(!@#$%^&*_,.?+-)，长度在8-16之间",-1)),I={style:{color:"#fff","font-size":"5px","padding-left":"10px"}};function N(n,e,l,o,s,f){const p=m("CatInput"),a=m("el-col"),i=m("el-row"),y=m("el-button"),B=m("el-link"),v=w("loading");return b((A(),F("div",E,[t(i,null,{default:u(()=>[t(a,{span:8,offset:8,class:"main_form"},{default:u(()=>[z,t(i,null,{default:u(()=>[t(a,null,{default:u(()=>[t(p,{styles:"background-color:#fff;opacity: 0.7;",placeholder:"昵称",modelValue:s.user.userNickname,"onUpdate:modelValue":e[0]||(e[0]=r=>s.user.userNickname=r),icon:"Nickname",maxlength:"16"},null,8,["modelValue"])]),_:1})]),_:1}),t(i,null,{default:u(()=>[t(a,null,{default:u(()=>[t(p,{styles:"background-color:#fff;opacity: 0.7;",placeholder:"账号",modelValue:s.user.userAccount,"onUpdate:modelValue":e[1]||(e[1]=r=>s.user.userAccount=r),icon:"User",maxlength:"16",onBlur:e[2]||(e[2]=r=>f.vertify("userAccount"))},null,8,["modelValue"])]),_:1}),t(a,null,{default:u(()=>[U]),_:1})]),_:1}),t(i,null,{default:u(()=>[t(a,null,{default:u(()=>[t(p,{styles:"background-color:#fff;opacity: 0.7;",placeholder:"密码",modelValue:s.user.userPassword,"onUpdate:modelValue":e[3]||(e[3]=r=>s.user.userPassword=r),icon:"Lock",type:"password",maxlength:"16",onBlur:e[4]||(e[4]=r=>f.vertify("userPassword"))},null,8,["modelValue"])]),_:1}),t(a,null,{default:u(()=>[M]),_:1})]),_:1}),t(i,null,{default:u(()=>[t(a,null,{default:u(()=>[t(p,{styles:"background-color:#fff;opacity: 0.7;",placeholder:"再次确认",modelValue:s.user.userPasswordTemp,"onUpdate:modelValue":e[5]||(e[5]=r=>s.user.userPasswordTemp=r),icon:"Lock",type:"password",maxlength:"16",onBlur:e[6]||(e[6]=r=>f.vertify("userPasswordTemp"))},null,8,["modelValue"])]),_:1})]),_:1}),t(i,null,{default:u(()=>[t(a,null,{default:u(()=>[t(p,{styles:"background-color:#fff;opacity: 0.7;",placeholder:"邮箱",modelValue:s.user.userMail,"onUpdate:modelValue":e[7]||(e[7]=r=>s.user.userMail=r),icon:"Message",maxlength:"30"},null,8,["modelValue"])]),_:1})]),_:1}),t(i,null,{default:u(()=>[t(a,{span:18},{default:u(()=>[t(p,{styles:"background-color:#fff;opacity: 0.7;",placeholder:"验证码",modelValue:s.user.temp_mail_code,"onUpdate:modelValue":e[8]||(e[8]=r=>s.user.temp_mail_code=r),icon:"Code",maxlength:"5"},null,8,["modelValue"])]),_:1}),t(a,{span:6},{default:u(()=>[t(y,{type:s.sendButtonType,round:"",style:{width:"100%",height:"40px"},onClick:f.sendCode,disabled:s.sendButton},{default:u(()=>[_(V(s.sendButton?s.timeCount:"发送"),1)]),_:1},8,["type","onClick","disabled"])]),_:1})]),_:1}),t(i,{style:{"margin-top":"30px"}},{default:u(()=>[t(a,null,{default:u(()=>[t(y,{type:"primary",round:"",style:{width:"100%",height:"40px"},onClick:f.register,disabled:s.registerButton},{default:u(()=>[_("注册")]),_:1},8,["onClick","disabled"])]),_:1}),t(a,{style:{"margin-top":"10px"}},{default:u(()=>[c("span",I,[t(B,{type:"primary",underline:!1,href:"/"},{default:u(()=>[_("返回首页")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})])),[[v,s.loading]])}const se=k(D,[["render",N],["__scopeId","data-v-1724a6ff"]]);export{se as default};
