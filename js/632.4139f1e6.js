"use strict";(self["webpackChunkboke"]=self["webpackChunkboke"]||[]).push([[632],{1632:function(t,s,e){e.r(s),e.d(s,{default:function(){return r}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"bx",on:{mousewheel:t.mouseindex,transitionend:t.mouseindexx}},[s("div",{ref:"boxs",staticClass:"boxa"},t._l(t.userOBJ,(function(e){return s("div",{key:e.id,staticClass:"releaseData"},[s("div",{staticClass:"box"},[s("div",{staticClass:"title"},[t._v(t._s(e.title))]),s("div",{staticClass:"text"},[t._v(t._s(e.text))])])])})),0),s("div",{staticClass:"toTop"},[s("div",{staticClass:"item"},[s("button",{on:{click:t.tohome}},[t._v("回到首页")])])])])},n=[],o=e(3822),d={name:"viewTwo",data(){return{indexd:0,io:!0}},methods:{slide(){this.$refs.boxs.style.transform=`translate(0,${100*-this.indexd}vh)`},mouseindex(t){this.io&&(this.io=!1,t.wheelDelta<0?(this.indexd===this.userOBJ.length-1&&(this.indexd-=1,this.io=!0,alert("到底了，没有了")),this.indexd++):(0===this.indexd&&(this.indexd=1,this.io=!0,alert("已经是第一个了")),this.indexd--),this.slide(this.indexd))},mouseindexx(){this.io=!0},tohome(){confirm("确认回到首页吗?")&&this.$router.push({name:"home"})}},computed:{...(0,o.rn)({userOBJ:t=>t.homeState.userinput})}},a=d,h=e(3736),l=(0,h.Z)(a,i,n,!1,null,"48fb5f31",null),r=l.exports}}]);
//# sourceMappingURL=632.4139f1e6.js.map