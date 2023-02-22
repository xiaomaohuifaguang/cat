import{E as k,T as F}from"./@wangeditor-8deb763a.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import{ag as n,o as u,c as m,Y as e,S as o,W as _,F as B,a7 as N,a as g,R as W}from"./@vue-7d2f9555.js";import{H as z,F as S}from"./Footer-9ae761f5.js";import{c as O}from"./main-bc28cff1.js";import{E as j}from"./element-plus-34b8252a.js";import"./axios-6667cfca.js";import"./form-data-d2a9677b.js";import"./pinia-5b755875.js";import"./vue-router-772342d5.js";import"./lodash-es-6689e95d.js";import"./@vueuse-1843ab21.js";import"./@element-plus-d297b0db.js";import"./@popperjs-c75af06c.js";import"./@ctrl-43a4208a.js";import"./dayjs-b3a9045c.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-2b76be69.js";const G={components:{Editor:k,Toolbar:F},props:{modelValue:{type:String,default:"<p></p>"},placeholder:{type:String,default:"请输入内容..."},htmlToText:{type:String,default:""}},data(){return{editor:null,valueHtml:this.modelValue,toolbarConfig:{},editorConfig:{placeholder:this.placeholder,MENU_CONF:{uploadImage:{server:"/api/upload"}}},mode:"default"}},methods:{handleCreated(r){this.editor=r}},watch:{valueHtml(r){var t=this.editor.getText();this.$emit("update:modelValue",r),this.$emit("getText",t)}},created(){}},M={style:{border:"2px solid #eee","border-radius":"10px"}};function P(r,t,x,h,l,d){const c=n("Toolbar"),i=n("Editor");return u(),m("div",M,[e(c,{style:{"border-bottom":"1px solid #ccc"},editor:l.editor,defaultConfig:l.toolbarConfig,mode:l.mode},null,8,["editor","defaultConfig","mode"]),e(i,{style:{height:"90vh","overflow-y":"hidden"},modelValue:l.valueHtml,"onUpdate:modelValue":t[0]||(t[0]=s=>l.valueHtml=s),defaultConfig:l.editorConfig,mode:l.mode,onOnCreated:d.handleCreated},null,8,["modelValue","defaultConfig","mode","onOnCreated"])])}const I=f(G,[["render",P]]),L={components:{Header:z,Footer:S,WangEditor:I},data(){return{catUtils:O(),article:{id:"",title:"aaa1aa",contentHtml:"自知则知之contentText",contentText:"自知则知之contentText",public:!0,label:"default"},options:[{value:"default",label:"默认"},{value:"java",label:"java"},{value:"前端",label:"前端"},{value:"后端",label:"后端"},{value:"vue",label:"vue"}]}},methods:{getText(r){this.article.contentText=r},release(){var r=this;this.catUtils.httpClient({url:"/api/article/add",data:r.article,success:function(t){t.code===0||j.alert(t.message)}})}},mounted(){},unmounted(){}},R=g("div",{style:{"margin-right":"10px"}},"分类",-1),Y={style:{width:"100%","text-align":"center","margin-top":"10px"}};function q(r,t,x,h,l,d){const c=n("Header"),i=n("el-col"),s=n("el-row"),b=n("el-input"),p=n("el-button"),v=n("el-option"),V=n("CirclePlus"),y=n("el-icon"),T=n("el-select"),C=n("el-checkbox"),E=n("el-switch"),w=n("el-card"),H=n("WangEditor"),U=n("Footer");return u(),m("div",null,[e(s,null,{default:o(()=>[e(i,null,{default:o(()=>[e(c)]),_:1})]),_:1}),e(s,null,{default:o(()=>[e(i,{span:16,offset:4},{default:o(()=>[e(w,null,{default:o(()=>[e(s,{style:{"margin-bottom":"10px"}},{default:o(()=>[e(i,{span:19},{default:o(()=>[e(b,{modelValue:l.article.title,"onUpdate:modelValue":t[0]||(t[0]=a=>l.article.title=a),placeholder:"标题",size:"large",maxlength:"32"},null,8,["modelValue"])]),_:1}),e(i,{span:4,offset:1},{default:o(()=>[e(p,{type:"primary",style:{width:"100%",height:"100%"},onClick:d.release},{default:o(()=>[_("发布")]),_:1},8,["onClick"])]),_:1})]),_:1}),e(s,{style:{"margin-bottom":"10px"}},{default:o(()=>[e(i,{class:"vertical_main"},{default:o(()=>[R,e(T,{modelValue:l.article.label,"onUpdate:modelValue":t[2]||(t[2]=a=>l.article.label=a),placeholder:"选择",size:"large",style:{"margin-right":"10px"}},{default:o(()=>[(u(!0),m(B,null,N(l.options,a=>(u(),W(v,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128)),g("div",Y,[e(p,{type:"primary",size:"default",onClick:t[1]||(t[1]=()=>{}),style:{width:"80%"}},{default:o(()=>[e(y,null,{default:o(()=>[e(V)]),_:1}),_("新增分类")]),_:1})])]),_:1},8,["modelValue"]),e(C,{modelValue:l.article.public,"onUpdate:modelValue":t[3]||(t[3]=a=>l.article.public=a),label:"公开",size:"large",border:""},null,8,["modelValue"]),e(E,{modelValue:l.article.public,"onUpdate:modelValue":t[4]||(t[4]=a=>l.article.public=a),class:"ml-2","inline-prompt":"",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},"active-text":"公开","inactive-text":"私有"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(s,null,{default:o(()=>[e(i,{span:16,offset:4},{default:o(()=>[e(H,{modelValue:l.article.contentHtml,"onUpdate:modelValue":t[5]||(t[5]=a=>l.article.contentHtml=a),htmlToText:l.article.contentText,onGetText:d.getText},null,8,["modelValue","htmlToText","onGetText"])]),_:1})]),_:1}),e(s,null,{default:o(()=>[e(i,null,{default:o(()=>[e(U)]),_:1})]),_:1})])}const pe=f(L,[["render",q]]);export{pe as default};
