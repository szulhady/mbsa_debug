(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{530:function(e,t,o){var content=o(590);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(22).default)("bac02f94",content,!0,{sourceMap:!1})},589:function(e,t,o){"use strict";o(530)},590:function(e,t,o){var r=o(21)(!1);r.push([e.i,".v-card__title[data-v-e6f18c86]{font-size:1rem;padding:8px 10px 8px 20px;color:#f0f8ff}.level[data-v-e6f18c86]{height:37vh}",""]),e.exports=r},608:function(e,t,o){"use strict";o.r(t);o(60);var r,l=o(85),n={data:function(){return{dataWeek1:[0,0,0,0,0,0,0],dataWeek2:[0,0,0,0,0,0,0],dataWeek3:[0,0,0,0,0,0,0],dataWeek4:[0,0,0,0,0,0,0],dataWeek5:[0,0,0,0,0,0,0],dataWeek6:[0,0,0,0,0,0,0],option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{textStyle:{color:"white"}},grid:{y:60,y2:40,x2:15},xAxis:{type:"value",axisLabel:{textStyle:{color:"white"},clickable:!0,interval:0,formatter:function(e,t){return t%2!=0?void 0:e}}},yAxis:{axisLabel:{textStyle:{color:"white"}},type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},series:[{name:"Week 1",type:"bar",stack:"total",barGap:"-100%",barCategoryGap:"20%",label:{show:!0},emphasis:{focus:"series"},data:this.dataWeek1},{name:"Week 2",type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:this.dataWeek2},{name:"Week 3",type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:this.dataWeek3},{name:"Week 4",type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:this.dataWeek4},{name:"Week 5",type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:this.dataWeek5},{name:"Week 6",type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:this.dataWeek6}]}}},mounted:function(){var e=this;setTimeout((function(){(r=e.$echarts.init(document.getElementById(e.id))).setOption(e.option,!0),window.addEventListener("resize",(function(){r.resize()}))}),1),this.getData()},methods:{getData:function(){var e=this;this.$axios.$get("https://soap.txio.live/api/total/weekday",{}).then((function(t){console.log(t),e.dataWeek1=t.dataWeek1,e.dataWeek2=t.dataWeek2,e.dataWeek3=t.dataWeek3,e.dataWeek4=t.dataWeek4,e.dataWeek5=t.dataWeek5,e.dataWeek6=t.dataWeek6})).catch((function(e){console.log(e)}))}},updated:function(){var option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{textStyle:{color:"white"}},grid:{y:60,y2:40,x2:15},xAxis:{type:"value",axisLabel:{textStyle:{color:"white"},clickable:!0,interval:0,formatter:function(e,t){return t%2!=0?void 0:e}}},yAxis:{axisLabel:{textStyle:{color:"white"}},type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},series:[{name:"Week 1",type:"bar",stack:"total",barGap:"-100%",barCategoryGap:"20%",label:{show:!0},emphasis:{focus:"series"},data:this.dataWeek1},{name:"Week 2",type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:this.dataWeek2},{name:"Week 3",type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:this.dataWeek3},{name:"Week 4",type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:this.dataWeek4},{name:"Week 5",type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:this.dataWeek5},{name:"Week 6",type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:this.dataWeek6}]};setTimeout((function(){r.setOption(option,!0),window.addEventListener("resize",(function(){r.resize()}))}),1)},props:["id"],computed:Object(l.d)({url:function(e){return e.url}})},d=(o(589),o(41)),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"level"},[o("div",{staticStyle:{width:"100%",height:"100%","min-height":"200px"},attrs:{id:e.id,dataWeek1:e.dataWeek1}})])}),[],!1,null,"e6f18c86",null);t.default=component.exports}}]);