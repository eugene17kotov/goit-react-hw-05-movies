"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[914],{1074:function(n,r,t){t.d(r,{O:function(){return g}});var e,a,i,c,o,u=t(6871),s=t(8360),p=t(168),d=t(501),f=t(6444),l=(0,f.ZP)(d.rU)(e||(e=(0,p.Z)(["\n  display: block;\n  text-decoration: none;\n  height: 100%;\n  border: 1px solid blue;\n  border-radius: 10px;\n  overflow: hidden;\n  background-color: #282c34;\n  color: #b2b3f6;\n  box-shadow: 5px 5px 5px #282c34;\n  transition: all 0.2s ease-in-out;\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 10px 10px 10px #282c34;\n  }\n"]))),x=f.ZP.img(a||(a=(0,p.Z)(["\n  width: 100%;\n  height: 100%;\nobject-fit: cover;"]))),h=f.ZP.div(i||(i=(0,p.Z)(["\n  display: block;\n  height: 300px;\n"]))),v=f.ZP.div(c||(c=(0,p.Z)(["\n  padding: 15px;\n  p:first-child {\n    margin-bottom: 10px;\n  }\n"]))),m=f.ZP.span(o||(o=(0,p.Z)(["\n  padding: 5px;\n  background-color: ",";\n  border-radius: 10px;\n  color: ",";\n"])),(function(n){var r=n.rating;return r>6?"#6c3":r>=4&&r<=6?"#fc3":"#f00"}),(function(n){var r=n.rating;return r>=4&&r<=6?"black":"white"})),b=t(184),g=function(n){var r=n.movies,t=(0,u.TH)();return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(s.x,{as:"ul",display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gridGap:"20px",gridAutoRows:"auto",children:r.map((function(n){var r=n.id,e=n.title,a=n.poster,i=n.vote_average;return(0,b.jsx)("li",{children:(0,b.jsxs)(l,{to:"/movies/".concat(r),state:{from:t},children:[(0,b.jsx)(h,{children:(0,b.jsx)(x,{src:a,alt:e})}),(0,b.jsxs)(v,{children:[(0,b.jsx)("p",{children:(0,b.jsx)("b",{children:e})}),(0,b.jsxs)("p",{children:[(0,b.jsx)("b",{children:"Rating: "}),(0,b.jsx)(m,{rating:i.toFixed(2),children:i.toFixed(2)})]})]})]})},r)}))})})}},5914:function(n,r,t){t.r(r),t.d(r,{default:function(){return h}});var e,a=t(5861),i=t(885),c=t(7757),o=t.n(c),u=t(2791),s=t(4390),p=t(1074),d=t(8360),f=t(168),l=t(6444).ZP.h1(e||(e=(0,f.Z)(["\ntext-align: center;\n  margin-bottom: 30px;\n  font-size: 70px;\n  font-weight: 600;\n  color: #1e489c;\n  background-clip: text;\n  -webkit-background-clip: text;\n"]))),x=t(184),h=function(){var n=(0,u.useState)([]),r=(0,i.Z)(n,2),t=r[0],e=r[1];return(0,u.useEffect)((function(){var n=function(){var n=(0,a.Z)(o().mark((function n(){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.LZ)();case 2:r=n.sent,t=r.map((function(n){return{id:n.id,title:n.title,poster:"https://image.tmdb.org/t/p/w500"+n.poster_path,vote_average:n.vote_average}})),e(t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,x.jsxs)(d.x,{p:"30px 0",children:[(0,x.jsx)(l,{children:"Trending Today"}),t&&(0,x.jsx)(p.O,{movies:t})]})}},4390:function(n,r,t){t.d(r,{LZ:function(){return s},h6:function(){return l},jD:function(){return f},u6:function(){return p},zV:function(){return d}});var e=t(5861),a=t(7757),i=t.n(a),c=t(4569),o=t.n(c);o().defaults.baseURL="https://api.themoviedb.org/3";var u="6f3a72a470b06bab99f8d69f54b4e2d3",s=function(){var n=(0,e.Z)(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("/trending/movie/day",{params:{api_key:u}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(i().mark((function n(r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("/search/movie",{params:{api_key:u,include_adult:!1,query:r}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(i().mark((function n(r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("/movie/".concat(r),{params:{api_key:u}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(i().mark((function n(r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("/movie/".concat(r,"/credits"),{params:{api_key:u}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(i().mark((function n(r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("/movie/".concat(r,"/reviews"),{params:{api_key:u}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=914.397e719d.chunk.js.map