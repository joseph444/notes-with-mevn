(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"668b":function(t,a,s){"use strict";var i=s("e9cc"),e=s.n(i);e.a},a017:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col s12 m12 l12 p-2"},[s("div",{staticClass:"align-left",on:{click:t.previous}},[s("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"}})])]),s("div",{staticClass:"col offset-l4 offset-m2 offset-s2 s8 m8 l4"},[s("div",{staticClass:"card"},[t.isEmpty?t._e():s("div",{staticClass:"card-content"},[t.editMode?s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col s12 input-field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.data["title"],expression:"data['title']"}],staticClass:"validate",attrs:{type:"text"},domProps:{value:t.data["title"]},on:{input:function(a){a.target.composing||t.$set(t.data,"title",a.target.value)}}}),s("label",{attrs:{for:""}},[t._v("name")])]),s("div",{staticClass:"col s12 input-field"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data["body"],expression:"data['body']"}],staticClass:"materialize-textarea",domProps:{value:t.data["body"]},on:{input:function(a){a.target.composing||t.$set(t.data,"body",a.target.value)}}}),s("label",{attrs:{for:""}},[t._v("body")])]),s("div",{staticClass:"col-s12 center-align"},[s("button",{staticClass:"btn green darken-2",on:{click:t.Edit}},[t._v("Edit")]),s("button",{staticClass:"btn red lighten-2",on:{click:t.CancelEdit}},[t._v("Cancel")])])])]):s("div",[s("div",{staticClass:"right-align",on:{click:t.edit}},[s("i",{staticClass:"fa fa-pencil-square",attrs:{"aria-hidden":"true"}})]),s("div",{staticClass:"right-align",on:{click:function(a){return t.deleteIt(t.data["_id"])}}},[s("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})]),s("h6",{staticClass:"card-title"},[t._v(t._s(t.data["title"]))]),s("p",[t._v(t._s(t.data["body"]))])])]),t.isEmpty?s("div",{staticClass:"card-content"},[s("h6",{staticClass:"card-title"},[t._v("Sorry No Such Note exists")])]):t._e()])])])},e=[],o={props:["id"],created:function(){var t=this;console.log(this.id),this.$http.get(this.$store.state.api+"post/".concat(this.id,"/show")).then((function(a){"ok"===a.data.status&&(t.data=a.data.data,t.data._id||(t.isEmpty=!1))})).catch((function(t){console.log(t)}))},data:function(){return{isEmpty:!1,data:{},editMode:!1}},methods:{edit:function(t){this.editMode=!0},previous:function(t){this.$router.go(-1)},deleteIt:function(t){var a=this;this.$store.commit("deleteNote",t),this.$http.delete(this.$store.state.api+"post/"+t+"/delete").then((function(t){"ok"===t.data.status||(console.log(t.data.message),alert("Some error Occured")),a.previous("ok")})).catch((function(t){console.log(t)}))},Edit:function(t){var a=this,s={name:this.data.title,body:this.data.body};this.$http.put(this.$store.state.api+"post/".concat(this.data._id,"/edit"),s).then((function(t){a.editMode=!1,"ok"===t.data.status?a.$store.commit("editANote",a.data):console.log(t.data.message)})).catch((function(t){return console.log(t)}))},CancelEdit:function(t){var a=this;this.editMode=!1,this.$http.get(this.$store.state.api+"post/".concat(this.id,"/show")).then((function(t){"ok"===t.data.status&&(a.data=t.data.data,a.data._id||(a.isEmpty=!1))})).catch((function(t){console.log(t)}))}}},d=o,c=(s("668b"),s("2877")),n=Object(c["a"])(d,i,e,!1,null,"2752d4c0",null);a["default"]=n.exports},e9cc:function(t,a,s){}}]);
//# sourceMappingURL=about.b75407af.js.map