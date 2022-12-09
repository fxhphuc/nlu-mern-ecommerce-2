(this["webpackJsonpmern.ecommerce.client"]=this["webpackJsonpmern.ecommerce.client"]||[]).push([[29],{2782:function(e,a){a.__esModule=!0,a.default={body:'<path fill="currentColor" d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM16 10.68L13.32 8l1.95-2L18 8.73z"/>',width:24,height:24}},2787:function(e,a,r){"use strict";r.d(a,"a",(function(){return b}));var t=r(3),n=r(24),s=r(169),c=r(2655),i=r(199),o=r(618),d=r(2749),l=r(29),u=r(0);function b(e){var a=e.links,r=e.action,b=e.heading,j=e.moreLink,h=void 0===j?[]:j,m=e.sx,x=Object(n.a)(e,["links","action","heading","moreLink","sx"]);return Object(u.jsxs)(c.a,{sx:m,mb:2,spacing:2,children:[Object(u.jsxs)(c.a,{direction:"row",alignItems:"center",children:[Object(u.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(u.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:b}),Object(u.jsx)(l.b,Object(t.a)({links:a},x))]}),r&&Object(u.jsx)(i.a,{sx:{flexShrink:0},children:r})]}),Object(s.isString)(h)?Object(u.jsx)(d.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(u.jsx)(d.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2791:function(e,a){a.__esModule=!0,a.default={body:'<path fill="currentColor" d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 16a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0zm0-11.67c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM16 16a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0z"/>',width:24,height:24}},2891:function(e,a,r){"use strict";function t(e){return e.charAt(0).toUpperCase()+e.substr(1)}r.d(a,"a",(function(){return t}))},3639:function(e,a,r){"use strict";r.r(a),r.d(a,"default",(function(){return F}));var t=r(16),n=r(26),s=r(5),c=r(2665),i=r(2891);function o(e){return Object(i.a)(e.toLowerCase())}var d=r(1),l=r(405),u=r.n(l),b=r(406),j=r.n(b),h=r(2772),m=r(2655),x=r(3637),p=r(3654),O=r(199),w=r(92),f=r(36),v=r(389),g=r(2787),P=r(10),k=r.n(P),S=r(17),C=r(232),N=r(231),q=r(125),y=r(2742),B=r(2776),z=r(618),A=r(305),I=r(2783),M=r.n(I),_=(r(2782),r(2791),r(29),r(0));function L(e){e.addressBook;return Object(_.jsx)(B.a,{sx:{p:3},children:Object(_.jsxs)(m.a,{spacing:3,alignItems:"flex-start",children:[Object(_.jsx)(z.a,{variant:"overline",sx:{color:"text.secondary"},children:"Billing Info"}),Object(_.jsx)(A.a,{size:"small",startIcon:Object(_.jsx)(n.Icon,{icon:M.a}),children:"Add new address"})]})})}function V(){var e=Object(w.c)((function(e){return e.user})),a=(e.cards,e.invoices,e.addressBook),r=Object(d.useState)(!1),n=Object(t.a)(r,2),s=(n[0],n[1],Object(q.b)().enqueueSnackbar,C.f().shape({cardName:C.h().required("Name is required"),cardNumber:C.h().required("Card number is required"),cardExpired:C.h().required("Card expired is required"),cardCvv:C.h().required("Cvv is required")}));Object(N.d)({initialValues:{cardName:"",cardNumber:"",cardExpired:"",cardCvv:""},validationSchema:s,onSubmit:function(){var e=Object(S.a)(k.a.mark((function e(a,r){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.setSubmitting,r.resetForm;case 1:case"end":return e.stop()}}),e)})));return function(a,r){return e.apply(this,arguments)}}()});return Object(_.jsx)(y.a,{container:!0,spacing:5,children:Object(_.jsx)(y.a,{item:!0,xs:12,md:12,children:Object(_.jsxs)(m.a,{spacing:3,children:[Object(_.jsxs)(B.a,{sx:{p:3},children:[Object(_.jsx)(z.a,{variant:"overline",sx:{mb:3,display:"block",color:"text.secondary"},children:"Your Plan"}),Object(_.jsx)(z.a,{variant:"h4",children:"Premium"}),Object(_.jsxs)(O.a,{sx:{mt:{xs:2,sm:0},position:{sm:"absolute"},top:{sm:24},right:{sm:24}},children:[Object(_.jsx)(A.a,{size:"small",color:"inherit",variant:"outlined",sx:{mr:1},children:"Cancel plan"}),Object(_.jsx)(A.a,{size:"small",variant:"outlined",children:"Upgrade plan"})]})]}),Object(_.jsx)(L,{addressBook:a})]})})})}var U=r(3),W=r(2727),E=r(2720);function T(){Object(q.b)().enqueueSnackbar;var e=C.f().shape({oldPassword:C.h().required("Old Password is required"),newPassword:C.h().min(6,"Password must be at least 6 characters").required("New Password is required"),confirmNewPassword:C.h().oneOf([C.g("newPassword"),null],"Passwords must match")}),a=Object(N.d)({initialValues:{oldPassword:"",newPassword:"",confirmNewPassword:""},validationSchema:e,onSubmit:function(){var e=Object(S.a)(k.a.mark((function e(a,r){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.setSubmitting;case 1:case"end":return e.stop()}}),e)})));return function(a,r){return e.apply(this,arguments)}}()}),r=a.errors,t=a.touched,n=a.isSubmitting,s=a.handleSubmit,c=a.getFieldProps;return Object(_.jsx)(B.a,{sx:{p:3},children:Object(_.jsx)(N.b,{value:a,children:Object(_.jsx)(N.a,{autoComplete:"off",noValidate:!0,onSubmit:s,children:Object(_.jsxs)(m.a,{spacing:3,alignItems:"flex-end",children:[Object(_.jsx)(W.a,Object(U.a)(Object(U.a)({},c("oldPassword")),{},{fullWidth:!0,autoComplete:"on",type:"password",label:"Old Password",error:Boolean(t.oldPassword&&r.oldPassword),helperText:t.oldPassword&&r.oldPassword})),Object(_.jsx)(W.a,Object(U.a)(Object(U.a)({},c("newPassword")),{},{fullWidth:!0,autoComplete:"on",type:"password",label:"New Password",error:Boolean(t.newPassword&&r.newPassword),helperText:t.newPassword&&r.newPassword||"Password must be minimum 6+"})),Object(_.jsx)(W.a,Object(U.a)(Object(U.a)({},c("confirmNewPassword")),{},{fullWidth:!0,autoComplete:"on",type:"password",label:"Confirm New Password",error:Boolean(t.confirmNewPassword&&r.confirmNewPassword),helperText:t.confirmNewPassword&&r.confirmNewPassword})),Object(_.jsx)(E.a,{type:"submit",variant:"contained",loading:n,children:"Save Changes"})]})})})})}function F(){var e=Object(d.useState)("change_password"),a=Object(t.a)(e,2),r=a[0],i=a[1],l=Object(w.b)();Object(d.useEffect)((function(){}),[l]);var b=[{value:"change_password",icon:Object(_.jsx)(n.Icon,{icon:u.a,width:20,height:20}),component:Object(_.jsx)(T,{})},{value:"billing",icon:Object(_.jsx)(n.Icon,{icon:j.a,width:20,height:20}),component:Object(_.jsx)(V,{})}];return Object(_.jsx)(v.a,{title:"User: Account Settings | Minimal-UI",children:Object(_.jsxs)(h.a,{children:[Object(_.jsx)(g.a,{heading:"Account",links:[{name:"Dashboard",href:f.b.app},{name:"User",href:f.b.app},{name:"Account Settings"}]}),Object(_.jsxs)(m.a,{spacing:5,children:[Object(_.jsx)(x.a,{value:r,scrollButtons:"auto",variant:"scrollable",allowScrollButtonsMobile:!0,onChange:function(e,a){i(a)},children:b.map((function(e){return Object(_.jsx)(p.a,{disableRipple:!0,label:(a=e.value,void 0===r&&(r={}),Object(c.a)(a,Object(s.a)({delimiter:" ",transform:o},r))),icon:e.icon,value:e.value},e.value);var a,r}))}),b.map((function(e){return e.value===r&&Object(_.jsx)(O.a,{children:e.component},e.value)}))]})]})})}}}]);
//# sourceMappingURL=29.369382a1.chunk.js.map