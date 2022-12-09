(this["webpackJsonpmern.ecommerce.client"]=this["webpackJsonpmern.ecommerce.client"]||[]).push([[39],{2783:function(t,e){e.__esModule=!0,e.default={body:'<path fill="currentColor" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"/>',width:24,height:24}},3625:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return B}));var c=n(3),i=n(28),a=n(16),o=n(26),r=n(200),l=n.n(r),s=n(6),d=n(2772),u=n(2655),j=n(199),b=n(2776),O=n(3098),h=n(618),p=n(2727),f=n(2770),g=n(2742),m=n(2743),x=n(305),v=n(2720),C=n(92),y=n(1),k=n(35),w=n(400),I=n(47),S=n(389),_=n(2882),E=n(218),L=n(0),W=Object(s.a)("div")((function(t){var e=t.theme;return{position:"relative",width:"100%",paddingTop:e.spacing(2),paddingBottom:e.spacing(10),backgroundColor:e.palette.grey["light"===e.palette.mode?100:800]}}));function B(){var t=Object(w.a)(),e=Object(I.a)().t,n=Object(C.b)(),r=Object(k.h)(),s=t.get("b"),B=t.get("c"),P=t.get("search"),U=Object(C.c)((function(t){return t.searchProduct})),z=U.isInitialized,A=U.categoryOpts,J=U.brandOpts,M=U.selectedCategories,R=U.selectedBrands,T=U.list,X=U.isLoading,q=U.pagination,D=Object(y.useState)(decodeURIComponent(P||"")),H=Object(a.a)(D,2),K=H[0],N=H[1],V=Object(y.useState)([]),F=Object(a.a)(V,2),G=F[0],Q=F[1],Y=Object(y.useState)(1),Z=Object(a.a)(Y,2),$=Z[0],tt=Z[1];Object(y.useEffect)((function(){n(Object(E.b)())}),[n]),Object(y.useEffect)((function(){var t=Object(i.a)(A.filter((function(t){return null===B||void 0===B?void 0:B.split(",").includes(t.slug)})));n(Object(E.f)(t));var e=Object(i.a)(J.filter((function(t){return null===s||void 0===s?void 0:s.split(",").includes(t.slug)})));n(Object(E.e)(e));var c=R.map((function(t){return t._id})).join(","),a=M.map((function(t){return t._id})).join(",");n(Object(E.d)({search:K,category:a,brand:c,page:$,limit:10}))}),[n,z,B,s,P,$]),Object(y.useEffect)((function(){Q(1===$?Object(i.a)(T):function(t){return[].concat(Object(i.a)(t),Object(i.a)(T))})}),[T]);var et=function(){Q((function(t){return[]}));var t=R.map((function(t){return t.slug})).join(","),e=M.map((function(t){return t.slug})).join(",");tt(1),n(Object(E.d)({search:K,page:$,limit:10})),r("/q?c=".concat(e,"&b=").concat(t,"&search=").concat(encodeURIComponent(K)))};return Object(L.jsx)(S.a,{title:e("home.page-title"),id:"move_top",children:Object(L.jsx)(W,{children:Object(L.jsx)(d.a,{maxWidth:"lg",children:Object(L.jsx)(u.a,{spacing:5,children:Object(L.jsxs)(j.a,{children:[Object(L.jsx)(b.a,{sx:{marginBottom:1,padding:2},children:Object(L.jsx)(O.a,{children:Object(L.jsxs)(u.a,{spacing:2,children:[Object(L.jsx)(h.a,{variant:"h5",component:"h2",children:e("products.heading").toUpperCase()}),Object(L.jsx)(p.a,{fullWidth:!0,label:e("products.name"),value:K,onChange:function(t){N(t.target.value)},onKeyDown:function(t){"Enter"===t.key&&et()},InputProps:{startAdornment:Object(L.jsx)(f.a,{position:"start",children:Object(L.jsx)(o.Icon,{icon:l.a})})}}),Object(L.jsx)(j.a,{children:Object(L.jsxs)(g.a,{container:!0,spacing:2,children:[Object(L.jsx)(g.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(m.a,{multiple:!0,fullWidth:!0,options:A,getOptionLabel:function(t){return t.name},value:M,filterSelectedOptions:!0,renderInput:function(t){return Object(L.jsx)(p.a,Object(c.a)(Object(c.a)({},t),{},{label:e("dashboard.categories.title")}))},onChange:function(t,e){n(Object(E.f)(e))}})}),Object(L.jsx)(g.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(m.a,{multiple:!0,fullWidth:!0,options:J,getOptionLabel:function(t){return null===t||void 0===t?void 0:t.name},value:R,filterSelectedOptions:!0,renderInput:function(t){return Object(L.jsx)(p.a,Object(c.a)(Object(c.a)({},t),{},{label:e("dashboard.brands.title")}))},onChange:function(t,e){n(Object(E.e)(e))}})})]})}),Object(L.jsx)(j.a,{children:Object(L.jsx)(x.a,{variant:"contained",color:"primary",sx:{paddingX:5},onClick:et,children:e("home.search")})}),Object(L.jsx)(h.a,{variant:"body2",sx:{color:"text.secondary"},children:X?"\u0110ang t\xecm ki\u1ebfm":"T\xecm th\u1ea5y ".concat((null===q||void 0===q?void 0:q.total)||0,"/").concat((null===q||void 0===q?void 0:q.countAll)||0," s\u1ea3n ph\u1ea9m")})]})})}),Object(L.jsx)(_.b,{products:G,isLoading:X}),(null===q||void 0===q?void 0:q.hasNextPage)&&Object(L.jsx)(j.a,{sx:{display:"flex",justifyContent:"center",mt:3},children:Object(L.jsx)(v.a,{variant:"outlined",sx:{backgroundColor:"white",width:"50%"},onClick:function(){tt((function(t){return t+1}))},loading:X,children:"Xem th\xeam"})})]})})})})})}}}]);
//# sourceMappingURL=39.69671ab4.chunk.js.map