(this.webpackJsonpbooking=this.webpackJsonpbooking||[]).push([[0],{180:function(e,t,n){},182:function(e,t,n){},183:function(e){e.exports=JSON.parse("{}")},321:function(e,t,n){"use strict";n.r(t);var r=n(35),a=n(0),i=n.n(a),c=n(25),s=n.n(c),u=(n(180),n(38)),o=n.n(u),l=n(56),f=n(125),h=n(126),p=n(130),b=n(129),d=n(328),j=n(42),m=n(325),v=n(324),O=n(329),x=n(327),y=n(326),k=n(173),w=n(116),g=n.n(w),C=(n(182),n(183),d.a.Search);var S,F=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(f.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).save=function(){var t=Object(l.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e.props.form,e.props.edit(),e.setState({visible:!1});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.cancelModal=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.formRef.current.resetFields(),e.props.onCancel();case 2:case"end":return t.stop()}}),t)}))),e.onFinish=function(e){console.log("Received values of form: ",e)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.visible,n=(e.form,e.title),a=e.target;return console.log("target",a),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(x.a,{title:n,visible:t,onOk:this.save,onCancel:this.cancelModal,children:Object(r.jsxs)(y.a,{initialValues:{name:a?a.name:null,mobile:a?a.mobile:null},children:[Object(r.jsx)(y.a.Item,{name:"name",label:"Name",children:Object(r.jsx)(d.a,{})}),Object(r.jsx)(y.a.Item,{name:"mobile",label:"Mobile",children:Object(r.jsx)(d.a,{})})]})})})}}]),n}(i.a.Component),I=(S=function(e){return Object(r.jsxs)("div",{style:{padding:40},children:[Object(r.jsxs)("div",{style:{marginBottom:20},children:[Object(r.jsx)(j.a,{type:"primary",style:{marginRight:10},onClick:function(){return e.show()},children:"Add user"}),Object(r.jsx)(C,{placeholder:"search user",onSearch:function(t){return e.search(t)},style:{width:240}})]}),Object(r.jsx)(m.a,{dataSource:e.users,columns:[{title:"name",dataIndex:"name",key:"name",width:200,sorter:function(e,t){return e.name>t.name}},{title:"mobile",dataIndex:"mobile",key:"mobile",width:160,sorter:function(e,t){return e.mobile-t.mobile}},{title:"actions",key:"action",width:160,render:function(t,n){return Object(r.jsxs)("div",{children:[Object(r.jsx)("a",{onClick:function(){return e.show(n)},children:"modify"}),Object(r.jsx)(v.a,{type:"vertical"}),Object(r.jsx)(O.a,{title:"Confirm to delete?",onConfirm:function(){e.delete(n)},okText:"ok",cancelText:"cancel",children:Object(r.jsx)("a",{children:"delete"})})]})}}]}),Object(r.jsx)(F,{title:e.title,visible:e.visible,edit:function(t){return e.edit(t)},onCancel:e.cancel,target:e.user})]})},function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(f.a)(this,n),(r=t.call(this,e)).state={user:null,users:null,visible:!1,title:"Add user"},r}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchUsers();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchUsers",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=g.a.times(10,(function(e){return{name:"user"+e,mobile:"mobile"+e}})),this.setState({users:t});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=g.a.times(10,(function(e){return{name:"user"+e,mobile:"mobile"+e}})),this.setState({users:t?g.a.filter(n,{name:t}):n});case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"show",value:function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({visible:!0,user:t,title:t?"Edit user":"Add user"});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"edit",value:function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.cancel();case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"cancel",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({visible:!1,user:null});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k.b.success("deleted");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(r.jsx)(S,{user:this.state.user,users:this.state.users,title:this.state.title,visible:this.state.visible,cancel:function(){return e.cancel()},show:function(t){return e.show(t)},edit:function(t){return e.edit(t)},search:function(t){return e.search(t)}})}}]),n}(a.Component)),A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,330)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};s.a.render(Object(r.jsx)(I,{}),document.getElementById("root")),A()}},[[321,1,2]]]);
//# sourceMappingURL=main.72c239e8.chunk.js.map