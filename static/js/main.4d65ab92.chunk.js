(this["webpackJsonpmy-chat"]=this["webpackJsonpmy-chat"]||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);var s=a(4),n=a(3),c=a.n(n),i=a(24),r=a.n(i),o=(a(109),a(34)),l=a(35),h=a(45),m=a(37),u=a(36),p=(a(110),a(103).a.initializeApp({apiKey:"AIzaSyCZwGh3SRL48GsSHm6hEzr_LckVYR-2TwE",authDomain:"my-chat-6a7c4.firebaseapp.com",databaseURL:"https://my-chat-6a7c4.firebaseio.com",projectId:"my-chat-6a7c4",storageBucket:"my-chat-6a7c4.appspot.com",messagingSenderId:"887027834815",appId:"1:887027834815:web:226738c2e97547696bcb0a"}).database()),j=a(44),b=a.n(j),g=a(99),d=a.n(g),x=a(72),O=a.n(x),f=a(100),C=a.n(f),v=a(101),y=a.n(v),_={chip:{margin:4},wrapper:{display:"flex",flexWrap:"wrap"}},k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"Message",children:Object(s.jsx)(O.a,{children:Object(s.jsxs)(C.a,{disabled:"true",children:[Object(s.jsx)(d.a,{className:"",src:this.props.message.profile_image}),Object(s.jsxs)("span",{style:{marginBottom:-5},children:["@",this.props.message.user_name]}),Object(s.jsx)("div",{className:"",children:Object(s.jsx)(y.a,{style:_.chip,children:this.props.message.text})})]})})})}}]),a}(c.a.Component),N=a(102),B=a.n(N),T=a(51),S=a.n(T),w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)(b.a,{children:Object(s.jsxs)("div",{className:"ChatBox",children:[Object(s.jsxs)("div",{className:"",children:[Object(s.jsx)(S.a,{name:"user_name",onChange:this.props.onTextChange,className:"",placeholder:"Name"}),Object(s.jsx)("br",{}),Object(s.jsx)(S.a,{name:"profile_image",onChange:this.props.onTextChange,className:"",placeholder:"Profile Image URL"})]}),Object(s.jsx)(S.a,{rows:"4",multiLine:"true",name:"text",className:"",onChange:this.props.onTextChange}),Object(s.jsx)(B.a,{primary:"true",label:"Send",className:"",onClick:this.props.onButtonClick})]})})}}]),a}(c.a.Component),L=p.ref("messages"),I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).onTextChange=s.onTextChange.bind(Object(h.a)(s)),s.onButtonClick=s.onButtonClick.bind(Object(h.a)(s)),s.state={text:"",user_name:"",profile_image:"",messages:[]},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)(b.a,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("div",{className:"App-header",children:Object(s.jsx)("h2",{children:"Chat\u30a2\u30d7\u30ea"})}),Object(s.jsx)("div",{className:"MessageList",children:this.state.messages.map((function(e,t){return Object(s.jsx)(k,{message:e},t)}))}),Object(s.jsx)(w,{onTextChange:this.onTextChange,onButtonClick:this.onButtonClick})]})})}},{key:"onTextChange",value:function(e){"user_name"==e.target.name?this.setState({user_name:e.target.value}):"profile_image"==e.target.name?this.setState({profile_image:e.target.value}):"text"==e.target.name&&this.setState({text:e.target.value})}},{key:"onButtonClick",value:function(){""!=this.state.user_name?""!=this.state.text?L.push({user_name:this.state.user_name,profile_image:this.state.profile_image,text:this.state.text}):alert("text empty"):alert("user_name empty")}},{key:"componentWillMount",value:function(){var e=this;L.on("child_added",(function(t){var a=t.val(),s=e.state.messages;s.push({text:a.text,user_name:a.user_name,profile_image:a.profile_image}),e.setState({messages:s})}))}}]),a}(n.Component),A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,252)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};r.a.render(Object(s.jsx)(I,{}),document.getElementById("root")),A()}},[[251,1,2]]]);
//# sourceMappingURL=main.4d65ab92.chunk.js.map