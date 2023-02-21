import{C as L,c as z,l as S}from"./main-26783c8c.js";import{E as g,a as P}from"./element-plus-34b8252a.js";import{ag as i,o as w,c as A,Y as e,S as t,a as r,W as d,T as y,Z as v,X as U,M as Z,ay as N,az as O}from"./@vue-7d2f9555.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";const H={components:{CatInput:L},data(){return{catUtils:z(),loginData:S(),isLogin:!1,header_img_isOpen:!1,loginModal:!1,loginType:1,sendButton:!1,sendButtonType:"primary",timeCount:0,sendCodeText:"发送",loginUser:{id:"",userAccount:"1",userMail:"",userPassword:"1",userNickname:"",createTime:"",updateTime:"",temp_mail_code:"",temp_token:""}}},methods:{header_change(n){this.header_img_isOpen=n},changeAccount(){this.logout(),this.loginModal=!0},sendCode(){var n=this.vertify("userMail");if(n){var o=this;o.sendButton=!0,o.sendButtonType="info",o.timeCount=60;var u=setInterval(()=>{o.timeCount--,o.timeCount<=0&&(o.sendButton=!1,o.sendButtonType="primary",clearInterval(u))},1e3);this.catUtils.httpClient({url:"/api/code",data:{type:"login",mail:this.loginUser.userMail},success:function(a){a.code===0||g.alert(a.message)}})}},loginModalOpen(){var n=this;n.loginData.getIsLogin()||(n.loginModal=!0)},login(){var n=this;switch(n.loginType){case 1:{if(!n.vertify("userAccount"))return;break}case 2:{if(!(n.vertify("userAccount")&&n.vertify("userMail")))return;break}}const o=P.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});n.catUtils.httpClient({url:"/api/getToken",data:{type:n.loginType,user:n.loginUser},success:function(u){o.close(),u.code===0?(n.loginData.setIsLogin(!0,u.data),n.loginModal=!1):g.alert(u.message)}})},logout(){var n=this;const o=localStorage.getItem("isLogin");if(!(o!=null?JSON.parse(o):null)){n.loginData.setIsLogin(!1,null);return}n.catUtils.httpClient({url:"/api/logout",success:function(a){a.code===0?n.loginData.setIsLogin(!1,null):g.alert(a.message)}})},vertify(n){var o=this;switch(n){case"userAccount":{var u=/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/,a=u.test(o.loginUser.userAccount);if(!a)return g.alert("账号规则(字母开头，允许5-16字节，允许字母数字下划线"),!1;break}case"userPassword":{var u=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_,.?+-]).{8,16}$/,a=u.test(o.loginUser.userPassword);if(!a)return g.alert("密码规则(必须包含大小写字母和数字的组合，特殊字符(!@#$%^&*_,.?+-)，长度在8-16之间)"),!1;break}case"userMail":{var u=/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/,a=u.test(o.loginUser.userMail);if(!a)return g.alert("邮箱格式不正确"),!1;break}default:return!0}return!0}},mounted(){},unmounted(){}};const h=n=>(N("data-v-731a9087"),n=n(),O(),n),J={class:"vertical_main"},R=h(()=>r("div",{class:"fill_row"},null,-1)),W={class:"vertical_main"},X={class:"vertical_main"},Y={class:"error_picture"},j={class:"user_info_dropdown"},q={class:"user_info_nickname"},G=h(()=>r("div",{class:"user_info_description"}," 此时情绪此时天，无事小神仙 ",-1)),K=h(()=>r("div",{class:"user_info_vip"}," v8 ",-1)),Q=h(()=>r("div",null,[r("div",null,"小猫会发光")],-1)),$={style:{}};function ee(n,o,u,a,l,_){const C=i("el-menu-item"),p=i("el-button"),F=i("PictureRounded"),V=i("el-icon"),T=i("el-image"),k=i("el-divider"),B=i("el-dropdown-item"),D=i("el-dropdown-menu"),I=i("el-dropdown"),M=i("el-menu"),c=i("el-col"),m=i("el-row"),f=i("CatInput"),E=i("el-link"),b=i("el-dialog");return w(),A("div",null,[e(M,{mode:"horizontal",ellipsis:!1,router:"true","default-active":n.$route.path,class:"_menu_main"},{default:t(()=>[r("div",J,[r("span",{class:"home_name",onClick:o[0]||(o[0]=s=>n.$router.push({path:"/"}))},"小猫会发光")]),e(C,{index:"/login"},{default:t(()=>[d("关于")]),_:1}),e(C,{index:"/article/edit"},{default:t(()=>[d("发布")]),_:1}),R,y(r("div",W,[e(p,{type:"primary",size:"default",onClick:_.loginModalOpen},{default:t(()=>[d("登录")]),_:1},8,["onClick"]),e(p,{type:"primary",size:"default",onClick:o[1]||(o[1]=s=>n.$router.push("/register"))},{default:t(()=>[d("注册")]),_:1})],512),[[v,!l.loginData.getIsLogin()]]),y(r("div",X,[e(I,{onVisibleChange:_.header_change},{dropdown:t(()=>[r("div",j,[r("div",q,U(l.loginData.userInfo.userNickname),1),G,K,e(k),e(D,null,{default:t(()=>[e(B,{onClick:_.changeAccount},{default:t(()=>[d("切换账号")]),_:1},8,["onClick"]),e(B,{onClick:_.logout},{default:t(()=>[d("退出登录")]),_:1},8,["onClick"])]),_:1})])]),default:t(()=>[e(T,{class:Z(l.header_img_isOpen?"header_img_open":"header_img_close"),src:"/logo.png"},{error:t(()=>[r("div",Y,[e(V,null,{default:t(()=>[e(F)]),_:1})])]),_:1},8,["class"])]),_:1},8,["onVisibleChange"])],512),[[v,l.loginData.getIsLogin()]])]),_:1},8,["default-active"]),e(b,{modelValue:l.loginModal,"onUpdate:modelValue":o[10]||(o[10]=s=>l.loginModal=s),center:"",draggable:"",width:"30%","destroy-on-close":"true","close-on-click-modal":"false",style:{"border-radius":"10px"}},{header:t(()=>[Q]),default:t(()=>[r("div",$,[e(m,{gutter:"20"},{default:t(()=>[e(c,{span:8,style:{"text-align":"center"}},{default:t(()=>[e(p,{type:l.loginType===1?"primary":"info",text:"",round:"",onClick:o[2]||(o[2]=s=>l.loginType=1)},{default:t(()=>[d("账号登录")]),_:1},8,["type"])]),_:1}),e(c,{span:8,style:{"text-align":"center"}},{default:t(()=>[e(p,{type:l.loginType===2?"primary":"info",text:"",round:"",onClick:o[3]||(o[3]=s=>l.loginType=2)},{default:t(()=>[d("邮箱登录")]),_:1},8,["type"])]),_:1}),e(c,{span:8,style:{"text-align":"center"}},{default:t(()=>[e(p,{type:l.loginType===3?"primary":"info",text:"",round:"",onClick:o[4]||(o[4]=s=>l.loginType=3)},{default:t(()=>[d("扫码登录")]),_:1},8,["type"])]),_:1})]),_:1}),e(k),y(e(m,null,{default:t(()=>[e(c,null,{default:t(()=>[e(f,{modelValue:l.loginUser.userAccount,"onUpdate:modelValue":o[5]||(o[5]=s=>l.loginUser.userAccount=s),placeholder:"账号",icon:"User"},null,8,["modelValue"])]),_:1}),e(c,{style:{"margin-top":"20px"}},{default:t(()=>[e(f,{modelValue:l.loginUser.userPassword,"onUpdate:modelValue":o[6]||(o[6]=s=>l.loginUser.userPassword=s),placeholder:"密码",type:"password",icon:"Lock"},null,8,["modelValue"])]),_:1})]),_:1},512),[[v,l.loginType==1]]),y(e(m,null,{default:t(()=>[e(c,null,{default:t(()=>[e(f,{modelValue:l.loginUser.userAccount,"onUpdate:modelValue":o[7]||(o[7]=s=>l.loginUser.userAccount=s),placeholder:"账号",icon:"User"},null,8,["modelValue"])]),_:1}),e(c,{style:{"margin-top":"20px"}},{default:t(()=>[e(f,{modelValue:l.loginUser.userMail,"onUpdate:modelValue":o[8]||(o[8]=s=>l.loginUser.userMail=s),placeholder:"邮箱",icon:"Message"},null,8,["modelValue"])]),_:1}),e(c,{style:{"margin-top":"20px"},span:18},{default:t(()=>[e(f,{modelValue:l.loginUser.temp_mail_code,"onUpdate:modelValue":o[9]||(o[9]=s=>l.loginUser.temp_mail_code=s),placeholder:"验证码",icon:"Code"},null,8,["modelValue"])]),_:1}),e(c,{span:6},{default:t(()=>[e(p,{type:l.sendButtonType,round:"",style:{width:"100%","margin-top":"20px",height:"40px"},onClick:_.sendCode,disabled:l.sendButton},{default:t(()=>[d(U(l.sendButton?l.timeCount:"发送"),1)]),_:1},8,["type","onClick","disabled"])]),_:1})]),_:1},512),[[v,l.loginType==2]]),e(m,null,{default:t(()=>[e(c,null,{default:t(()=>[e(p,{type:"primary",round:"",style:{width:"100%","margin-top":"20px",height:"40px"},onClick:_.login},{default:t(()=>[d("登录")]),_:1},8,["onClick"])]),_:1})]),_:1}),e(m,{style:{"margin-top":"10px"}},{default:t(()=>[e(c,{span:4,offset:20},{default:t(()=>[e(E,{type:"info",href:"/register"},{default:t(()=>[d("立即注册")]),_:1})]),_:1})]),_:1})])]),_:1},8,["modelValue"])])}const ue=x(H,[["render",ee],["__scopeId","data-v-731a9087"]]),oe={data(){return{}},methods:{},mounted(){},unmounted(){}};function te(n,o,u,a,l,_){return w(),A("div",null," Footer ")}const ae=x(oe,[["render",te]]);export{ae as F,ue as H};
