(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{312:function(i,t,o){},327:function(i,t,o){"use strict";o(312)},339:function(i,t,o){"use strict";o.r(t);const n={timer:null,show:"show",hide:"hide",second:8888,callback:null};var a={name:"Notification",data:()=>({notification:{type:"default",msg:"DEFAULT",state:"hide"}}),computed:{icon(){switch(this.notification.type){case"error":return'<i class="fas fa-exclamation fa-fw"></i>';case"warning":return'<i class="fas fa-exclamation-triangle fa-fw"></i>';default:return'<i class="fas fa-exclamation-circle fa-fw"></i>'}}},methods:{stopNotificationTimeout(){window.clearTimeout(n.timer)},runNotificationTimeout(){n.timer=window.setTimeout(()=>{window.clearTimeout(n.timer),n.timer=null,this.notification.state=n.hide,"function"==typeof n.callback&&(n.callback(this.notification),n.callback=null)},n.second)},showNotification(i,t,o){this.stopNotificationTimeout(),"function"==typeof o&&(n.callback=o),this.notification.type=i,this.notification.msg=t,this.notification.state=n.show,this.runNotificationTimeout()}}},e=(o(327),o(2)),s=Object(e.a)(a,(function(){var i=this,t=i.$createElement,o=i._self._c||t;return o("div",{class:"Notification "+i.notification.type+" "+i.notification.state},[o("div",{staticClass:"frame",on:{mouseover:i.stopNotificationTimeout,mouseout:i.runNotificationTimeout}},[o("div",{staticClass:"inner"},[o("div",{staticClass:"icon",domProps:{innerHTML:i._s(i.icon)}}),i._v(" "),o("div",{staticClass:"msg",domProps:{innerHTML:i._s(i.notification.msg)}})])])])}),[],!1,null,"3429fdee",null);t.default=s.exports}}]);