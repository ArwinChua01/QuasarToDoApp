(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"40d3":function(e,t,s){"use strict";var a=s("c8eb"),n=s.n(a);n.a},a751:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"bg-grey-3 column"},[s("div",{staticClass:"row q-pa-sm bg-primary"},[s("q-input",{staticClass:"col",attrs:{square:"",filled:"","bg-color":"white",placeholder:"Add task",dense:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTask(t)}},scopedSlots:e._u([{key:"append",fn:function(){return[s("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"add"},on:{click:e.addTask}})]},proxy:!0}]),model:{value:e.newTask,callback:function(t){e.newTask=t},expression:"newTask"}})],1),s("q-list",{staticClass:"bg-white",attrs:{separator:"",bordered:""}},e._l(e.tasks,(function(t,a){return s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.title,class:{"dome bg-blue-1":t.dome},attrs:{clickable:""},on:{click:function(e){t.dome=!t.dome}}},[s("q-item-section",{attrs:{avatar:""}},[s("q-checkbox",{staticClass:"no-pointer-events",attrs:{color:"primary"},model:{value:t.dome,callback:function(s){e.$set(t,"dome",s)},expression:"task.dome"}})],1),s("q-item-section",[s("q-item-label",[e._v(e._s(t.title))])],1),t.dome?s("q-item-section",{attrs:{side:""}},[s("q-btn",{attrs:{flat:"",round:"",dense:"",color:"primary",icon:"delete"},on:{click:function(t){return t.stopPropagation(),e.deleteTask(a)}}})],1):e._e()],1)})),1),e.tasks.length?e._e():s("div",{staticClass:"no-tasks absolute-center"},[s("q-icon",{attrs:{name:"check",size:"100px",color:"primary"}}),s("div",{staticClass:"text-h5 text-primary text-center"},[e._v("\n      No Tasks\n    ")])],1)],1)},n=[],i=(s("a434"),{data(){return{newTask:"",tasks:[]}},methods:{deleteTask(e){this.$q.dialog({title:"Confirm",message:"Delete this task?",cancel:!0,persistent:!0}).onOk((()=>{this.tasks.splice(e,1),this.$q.notify("Task Deleted")}))},addTask(){this.tasks.push({title:this.newTask,dome:!1}),this.newTask=""}}}),o=i,c=(s("40d3"),s("2877")),r=s("9989"),l=s("27f9"),d=s("9c40"),k=s("1c1c"),p=s("66e5"),u=s("4074"),m=s("8f8e"),b=s("0170"),f=s("0016"),h=s("714f"),q=s("eebe"),w=s.n(q),v=Object(c["a"])(o,a,n,!1,null,null,null);t["default"]=v.exports;w()(v,"components",{QPage:r["a"],QInput:l["a"],QBtn:d["a"],QList:k["a"],QItem:p["a"],QItemSection:u["a"],QCheckbox:m["a"],QItemLabel:b["a"],QIcon:f["a"]}),w()(v,"directives",{Ripple:h["a"]})},c8eb:function(e,t,s){}}]);