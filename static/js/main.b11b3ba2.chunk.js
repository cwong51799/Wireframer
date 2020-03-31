(this.webpackJsonpwireframer=this.webpackJsonpwireframer||[]).push([[0],{240:function(e){e.exports=JSON.parse('{"wireframes":[{"name":"Wireframe Test 1","dimensionX":1200,"dimensionY":900,"key":0,"lastAccessed":"","controls":[{"key":0,"positionX":50,"positionY":50,"width":100,"height":200,"text":"I\'m the container","textSize":12,"backgroundColor":"#56a986","borderColor":"#930af5","borderThickness":5,"borderRadius":2,"type":"container"},{"key":1,"positionX":250,"positionY":100,"width":100,"height":200,"text":"I\'m the label","textSize":12,"backgroundColor":"#4307f8","borderColor":"#21bdde","borderThickness":1.5,"borderRadius":2,"type":"label"},{"key":2,"positionX":500,"positionY":200,"width":100,"height":200,"text":"I\'m the button","textSize":12,"backgroundColor":"#8fbb44","borderColor":"#14ebae","borderThickness":1.5,"borderRadius":2,"type":"button"},{"key":3,"positionX":800,"positionY":600,"width":100,"height":200,"text":"I\'m the textfield","textSize":12,"backgroundColor":"#8fbb44","borderColor":"#14ebae","borderThickness":1.5,"borderRadius":2,"type":"textfield"}]},{"name":"Wireframe Test 2","dimensionX":600,"dimensionY":500,"key":1,"lastAccessed":"","controls":[{"key":0,"positionX":0,"positionY":0,"width":400,"height":400,"text":"I\'m a wireframe with one big control!","textSize":50,"backgroundColor":"#d12333","borderColor":"#1100ff","borderThickness":5,"borderRadius":2,"type":"label"}]}]}')},245:function(e,t,r){e.exports=r(541)},250:function(e,t,r){},251:function(e,t,r){},252:function(e,t,r){},253:function(e,t,r){},541:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(35),i=r.n(o),l=(r(250),r(251),r(252),r(253),r(18)),s=r(41),c=r(14),d=r(17),u=r(16),h=r(7),p=r(8),m=r(9),f=r(10),b=r(19),g=r(240),v=function(e){Object(f.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(h.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).handleClear=function(){var e=Object(b.getFirestore)();e.collection("users").get().then((function(t){t.forEach((function(t){e.collection("users").doc(t.id).update({wireframes:[]})}))}))},e.handleReset=function(){var e=Object(b.getFirestore)();e.collection("users").get().then((function(t){t.forEach((function(t){e.collection("users").doc(t.id).update({wireframes:g.wireframes})}))}))},e}return Object(p.a)(r,[{key:"render",value:function(){return this.props.profile.administrator?a.a.createElement("div",{className:"testDiv"},a.a.createElement("button",{className:"testButton",onClick:this.handleClear},"Clear Database"),a.a.createElement("button",{className:"testButton",onClick:this.handleReset},"Reset Database"),a.a.createElement("p",null,a.a.createElement("a",{href:"https://console.firebase.google.com/u/0/project/wireframer-41732/database"},"Link to my database."))):a.a.createElement(s.a,{to:"/"})}}]),r}(a.a.Component),C=Object(d.b)((function(e){return{auth:e.firebase.auth,firebase:e.firebase,profile:e.firebase.profile}}))(v),E=r(6);function w(){return{type:"REGISTER_SUCCESS"}}function y(e){return{type:"REGISTER_ERROR",error:e}}function O(){return{type:"LOGOUT_SUCCESS"}}var k=function(e){Object(f.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(h.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).handleLogout=function(){var t=e.props.firebase;e.props.signOut(t)},e}return Object(p.a)(r,[{key:"render",value:function(){var e=this.props.profile;return a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(l.c,{to:"/",onClick:this.handleLogout},"Log Out")),a.a.createElement("li",null,a.a.createElement(l.c,{to:"/",className:"btn btn-floating pink lighten-1"},e.initials)))}}]),r}(a.a.Component),S=Object(c.d)(Object(u.firebaseConnect)(),Object(d.b)(null,(function(e){return{signOut:function(t){return e(function(e){return function(t,r){e.auth().signOut().then((function(){t(O)}))}}(t))}}})))(k),j=function(e){Object(f.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(h.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={switch:1},e}return Object(p.a)(r,[{key:"refresh",value:function(){this.setState({})}},{key:"render",value:function(){var e=this,t=window.location.href.includes("/#/login");return a.a.createElement("ul",{className:"right"},t?a.a.createElement("li",{onClick:function(t){return e.refresh()}},a.a.createElement(l.b,{to:"/register"},"Register")):a.a.createElement("li",{onClick:function(t){return e.refresh()}},a.a.createElement(l.b,{to:"/login"},"Login")))}}]),r}(a.a.Component),x=function(e){Object(f.a)(r,e);var t=Object(m.a)(r);function r(){return Object(h.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){var e=this.props,t=e.auth,r=e.profile,n=t.uid?a.a.createElement(S,{profile:r}):a.a.createElement(j,null),o=r.administrator;return a.a.createElement(E.Navbar,{alignLinks:"right",brand:a.a.createElement(l.c,{to:"/",className:"brand-logo center"},"Wireframer"),menuIcon:a.a.createElement(E.Icon,null,"menu"),center:!0,options:{draggable:!0,edge:"left",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:200,preventScrolling:!0}},o?a.a.createElement(l.c,{to:"/databaseTester"},"Database"):a.a.createElement("p",null),n)}}]),r}(n.Component),N=Object(c.d)(Object(u.firebaseConnect)(),Object(d.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})))(x),B=r(62),R=r(28),T=r(61),I=function(e){Object(f.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(h.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={email:"",password:""},e.handleChange=function(t){var r=t.target;e.setState((function(e){return Object(R.a)({},e,Object(B.a)({},r.id,r.value))}))},e.handleSubmit=function(t){t.preventDefault();var r=Object(T.a)(e),n=r.props,a=r.state,o={firebase:n.firebase,credentials:Object(R.a)({},a)};n.login(o)},e}return Object(p.a)(r,[{key:"render",value:function(){var e=this.props,t=e.auth,r=e.authError;return t.uid?a.a.createElement(s.a,{to:"/"}):a.a.createElement("div",null,a.a.createElement(E.TextInput,{icon:"email",label:"Email",id:"email",onChange:this.handleChange}),a.a.createElement(E.TextInput,{icon:"lock",label:"Password",password:!0,id:"password",onChange:this.handleChange}),a.a.createElement(E.Button,{node:"button",style:{marginRight:"5px"},waves:"light",onClick:this.handleSubmit},"Login"),r?a.a.createElement("div",{className:"red-text center"},a.a.createElement("p",null,r)):null)}}]),r}(n.Component),F=Object(c.d)(Object(u.firebaseConnect)(),Object(d.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{login:function(t){return e(function(e){var t=e.credentials,r=e.firebase;return function(e,n){r.auth().signInWithEmailAndPassword(t.email,t.password).then((function(){console.log("LOGIN_SUCCESS"),e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}}(t))}}})))(I),W=function(e){Object(f.a)(r,e);var t=Object(m.a)(r);function r(){return Object(h.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return a.a.createElement("option",{default:!0,key:this.props.key},this.props.wireframe.name)}}]),r}(n.Component),D=r(40),z=function(e){Object(f.a)(r,e);var t=Object(m.a)(r);function r(e){var n;return Object(h.a)(this,r),(n=t.call(this,e)).state={control:n.props.control,newPositionX:n.props.control.positionX,newPositionY:n.props.control.positionY},n.handleDragStop=function(e,t){var r=n.state.control;r.positionX=t.x,r.positionY=t.y},n.handleResizeStop=function(e,t,r,a,o){var i=a.width,l=a.height,s=n.props.control;s.width=s.width+i,s.height=s.height+l,n.setState({})},n}return Object(p.a)(r,[{key:"render",value:function(){var e=this,t=this.props.control,r={backgroundColor:t.backgroundColor,borderWidth:t.borderThickness+"px "+t.borderThickness+"px",borderRadius:t.borderRadius+"px",borderStyle:"solid",borderColor:t.borderColor,position:"absolute",width:t.width+"px",height:t.height+"px",fontSize:t.textSize+"px"};return a.a.createElement(D.a,{onDragStop:this.handleDragStop,onResizeStop:this.handleResizeStop,bounds:"parent",default:{x:t.positionX,y:t.positionY,width:r.width,height:r.height}},a.a.createElement("div",{className:this.props.theChosenControl?"box":"",style:{width:parseInt(t.width)+20+"px",height:parseInt(t.height)+"px"}},a.a.createElement("div",{className:"labelControl",style:r,onClick:function(r){return e.props.setControlBeingEdited(t.key,r)}},t.text)))}}]),r}(n.Component),A=function(e){Object(f.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(h.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={control:e.props.control,newPositionX:e.props.control.positionX,newPositionY:e.props.control.positionY},e.handleDragStop=function(t,r){var n=e.state.control;n.positionX=r.x,n.positionY=r.y},e.handleResizeStop=function(t,r,n,a,o){var i=a.width,l=a.height,s=e.props.control;s.width=s.width+i,s.height=s.height+l,e.setState({})},e}return Object(p.a)(r,[{key:"render",value:function(){var e=this,t=this.props.control,r={backgroundColor:t.backgroundColor,borderWidth:t.borderThickness+"px "+t.borderThickness+"px",borderRadius:t.borderRadius+"px",borderStyle:"solid",borderColor:t.borderColor,position:"absolute",width:t.width+"px",height:t.height+"px",fontSize:t.textSize+"px"};return a.a.createElement(D.a,{onDragStop:this.handleDragStop,onResizeStop:this.handleResizeStop,bounds:"parent",default:{x:t.positionX,y:t.positionY,width:r.width,height:r.height}},a.a.createElement("div",{className:this.props.theChosenControl?"box":"",style:{width:parseInt(t.width)+20+"px",height:parseInt(t.height)+"px"}},a.a.createElement("div",{className:"textfieldControl",style:r,onClick:function(r){return e.props.setControlBeingEdited(t.key,r)}},a.a.createElement(E.TextInput,{label:t.text,disabled:!0}))))}}]),r}(n.Component),P=function(e){Object(f.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(h.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={control:e.props.control,newPositionX:e.props.control.positionX,newPositionY:e.props.control.positionY},e.handleDragStop=function(t,r){var n=e.state.control;n.positionX=r.x,n.positionY=r.y},e.handleResizeStop=function(t,r,n,a,o){var i=a.width,l=a.height,s=e.props.control;s.width=s.width+i,s.height=s.height+l,e.setState({})},e}return Object(p.a)(r,[{key:"render",value:function(){var e=this,t=this.props.control,r={width:t.width+"px",height:t.height+"px",fontSize:t.textSize+"px",backgroundColor:t.backgroundColor,borderWidth:t.borderThickness+"px "+t.borderThickness+"px",borderRadius:t.borderRadius+"px",borderStyle:"solid",borderColor:t.borderColor};return a.a.createElement(D.a,{onDragStop:this.handleDragStop,onResizeStop:this.handleResizeStop,bounds:"parent",default:{x:t.positionX,y:t.positionY,width:r.width,height:r.height}},"   ",a.a.createElement("div",{className:this.props.theChosenControl?"box":"",style:{width:parseInt(t.width)+20+"px",height:parseInt(t.height)+"px"}},a.a.createElement(E.Button,{className:"buttonControl",node:"a",small:!0,style:r,onClick:function(r){return e.props.setControlBeingEdited(t.key,r)},waves:"light"}," ",t.text)))}}]),r}(n.Component),X=function(e){Object(f.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(h.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={control:e.props.control,newPositionX:e.props.control.positionX,newPositionY:e.props.control.positionY},e.handleDragStop=function(t,r){var n=e.props.control;n.positionX=r.x,n.positionY=r.y},e.handleResizeStop=function(t,r,n,a,o){var i=a.width,l=a.height,s=e.props.control;s.width=s.width+i,s.height=s.height+l,e.setState({})},e}return Object(p.a)(r,[{key:"render",value:function(){var e=this,t=this.props.control,r={backgroundColor:t.backgroundColor,borderWidth:t.borderThickness+"px "+t.borderThickness+"px",borderRadius:t.borderRadius+"px",borderStyle:"solid",borderColor:t.borderColor,position:"absolute",width:t.width+"px",height:t.height+"px",fontSize:t.textSize+"px"};return a.a.createElement(D.a,{onDragStop:this.handleDragStop,onResizeStop:this.handleResizeStop,bounds:"parent","stop-propagation":"true",default:{x:t.positionX,y:t.positionY,width:r.width,height:r.height}},a.a.createElement("div",{className:this.props.theChosenControl?"box":"",style:{width:parseInt(t.width)+20+"px",height:parseInt(t.height)+"px"}},a.a.createElement("div",{className:"containerControl",style:r,onClick:function(r){return e.props.setControlBeingEdited(t.key,r)}},t.text)))}}]),r}(n.Component),Y=function(e){Object(f.a)(r,e);var t=Object(m.a)(r);function r(e){return Object(h.a)(this,r),t.call(this,e)}return Object(p.a)(r,[{key:"render",value:function(){var e=this.props.control;return"container"===e.type?a.a.createElement(X,{control:e,setControlBeingEdited:this.props.setControlBeingEdited,theChosenControl:this.props.theChosenControl}):"label"===e.type?a.a.createElement(z,{control:e,setControlBeingEdited:this.props.setControlBeingEdited,theChosenControl:this.props.theChosenControl}):"button"===e.type?a.a.createElement(P,{control:e,setControlBeingEdited:this.props.setControlBeingEdited,theChosenControl:this.props.theChosenControl}):"textfield"===e.type?a.a.createElement(A,{control:e,setControlBeingEdited:this.props.setControlBeingEdited,theChosenControl:this.props.theChosenControl}):void 0}}]),r}(n.Component),L=r(50),_=r.n(L),U=function(e){Object(f.a)(r,e);var t=Object(m.a)(r);function r(e){var n;return Object(h.a)(this,r),(n=t.call(this,e)).state={wireframe:n.props.wireframe,controlBeingEdited:n.props.controlBeingEdited,updatable:!1},n.updateDimensions=function(){var e=n.props.wireframe,t=document.getElementById("dimensionXchange"),r=document.getElementById("dimensionYchange"),a=parseInt(t.value),o=parseInt(r.value);a>5e3||a<1||o>5e3||o<1||(e.dimensionX=a,e.dimensionY=o,n.setState({wireframe:e,updatable:!1}))},n.makeUpdatable=function(){n.setState({updatable:!0})},n}return Object(p.a)(r,[{key:"render",value:function(){var e=this,t=this.props.wireframe,r=this.props.setControlBeingEdited,n=this.props.controlBeingEdited;return a.a.createElement("div",{id:"editArea"},this.props.preview?a.a.createElement("div",null):a.a.createElement("div",{className:"wireframeDetails"},a.a.createElement("p",{className:"wireframeName"},t.name),a.a.createElement("p",null,"Width: "),a.a.createElement("input",{className:"numberInput",type:"number",id:"dimensionXchange",defaultValue:t.dimensionX,onChange:this.makeUpdatable}),a.a.createElement("p",null,"Height: "),a.a.createElement("input",{className:"numberInput",type:"number",id:"dimensionYchange",defaultValue:t.dimensionY,onChange:this.makeUpdatable}),a.a.createElement("p",null,a.a.createElement(_.a,{id:"updateBtn",onClick:this.updateDimensions,disabled:!this.state.updatable},"Update"))),a.a.createElement("div",{id:"wireframeZone",onClick:function(t){return e.props.deselectControl(t)},className:"normalZoom",style:{width:t.dimensionX,height:t.dimensionY}},this.props.wireframe.controls.map((function(e){return a.a.createElement(Y,{control:e,key:e.key,setControlBeingEdited:r,theChosenControl:e===n})}))))}}]),r}(n.Component),G=r(51),Z=(r(149),function(e){Object(f.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(h.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={usersWireframes:null,moveToWireframe:null,wireframeSelected:null,refresh:!1},e.randomAdjectives=["Fluffy","Pillow","Plant","Patience","Night","Homework","Costco","Salty","Baboon","Mirror","BigFan","Clock","Water","Doggo","Tree"],e.handleNewWireframe=function(t){var r=Object(b.getFirestore)(),n=e.props.auth.uid,a=e.state.usersWireframes,o=e.randomAdjectives[Math.floor(Math.random()*e.randomAdjectives.length)]+Math.floor(100*Math.random())+Math.floor(100*Math.random());a.push({controls:[],dimensionX:1e3,dimensionY:900,name:o,key:a.length,lastAccessed:""}),r.collection("users").doc(n).update({wireframes:a}),Object(G.a)("A new wireframe named "+o+" has been created."),e.setState({wireframeSelected:a[a.length-1]})},e.handleSelectChange=function(t){var r=document.getElementById("wireframeSelector").M_FormSelect.input.value,n=e.getWireframeOfName(r);e.setState({wireframeSelected:n})},e.moveToWireframe=function(t){var r=e.props.auth.uid,n=Object(b.getFirestore)(),a=e.state.usersWireframes,o=e.state.wireframeSelected;o.lastAccessed=(new Date).toISOString(),n.collection("users").doc(r).update({wireframes:a}),e.setState({moveToWireframe:o,mostRecentWireframe:o})},e.deleteWireframe=function(t){for(var r=e.state.usersWireframes,n=e.state.wireframeSelected.key,a=-1,o=0;o<r.length;o++)r[o].key===n&&(a=o);for(r.splice(a,1),o=a;o<r.length;o++)r[o].key=r[o].key-1;var i=e.props.auth.uid;Object(b.getFirestore)().collection("users").doc(i).update({wireframes:r}),Object(G.a)(e.state.wireframeSelected.name+" has been deleted."),e.setState({wireframeSelected:null,redirect:!e.state.redirect})},e}return Object(p.a)(r,[{key:"getUsersWireframes",value:function(){var e=this,t=this.props.auth.uid;Object(b.getFirestore)().collection("users").doc(t).get().then((function(t){return e.setState({usersWireframes:t.data().wireframes})}))}},{key:"isDuplicateName",value:function(e,t){for(var r=0;r<e.length;r++)if(e[r].name===t)return!0;return!1}},{key:"getWireframeOfName",value:function(e){for(var t=this.state.usersWireframes,r=0;r<t.length;r++)if(t[r].name===e)return t[r]}},{key:"reorderByAccessDate",value:function(e){e.sort((function(e,t){return e.lastAccessed>t.lastAccessed?(console.log(e.name+" was accessed more recently than "+t.name),-1):e.lastAccessed<t.lastAccessed?1:0})),this.fixKeys(e)}},{key:"fixKeys",value:function(e){for(var t=0;t<e.length;t++)e[t].key=t}},{key:"render",value:function(){var e=this,t=this.state.moveToWireframe,r=this.state.usersWireframes,n=this.state.wireframeSelected,o=null!=n?a.a.createElement(U,{wireframe:n,preview:!0}):a.a.createElement("div",null);return this.state.refresh?a.a.createElement(s.a,{to:"/"}):null!=t?a.a.createElement(s.a,{to:{pathname:"/editScreen",state:{wireframe:t,usersWireframes:this.state.usersWireframes}}}):this.props.auth.uid?null==this.state.usersWireframes?(this.getUsersWireframes(),a.a.createElement("div",null)):(this.reorderByAccessDate(r),a.a.createElement("div",{className:"homeScreen"},a.a.createElement("div",{className:"centerPage"},a.a.createElement(E.Select,{onChange:function(t){return e.handleSelectChange(t)},defaultValue:null!=n?n.name:"",id:"wireframeSelector",options:{classes:"",dropdownOptions:{alignment:"left",autoTrigger:!0,closeOnClick:!0,constrainWidth:!0,container:null,coverTrigger:!0,hover:!1,inDuration:150,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:250}}},a.a.createElement("option",{value:!1},"Select a Wireframe"),r.map((function(e){return a.a.createElement(W,{wireframe:e,key:e.key})}))),null!=this.state.wireframeSelected?a.a.createElement("div",{className:"selectedNotification"},"You have selected ",n.name):a.a.createElement("div",null,"You have not selected a wireframe yet."),a.a.createElement("div",{className:"wireframeOptions"},a.a.createElement(E.Button,{node:"button",type:"submit",waves:"light",disabled:null==n,onClick:function(t){return e.moveToWireframe(t)}},"Move to ",null!=n?n.name:"wireframe",a.a.createElement(E.Icon,{right:!0},"send")),a.a.createElement(E.Modal,{header:"Delete Wireframe",trigger:a.a.createElement(E.Button,{disabled:null==n,className:"deleteWireframeBtn",waves:"red",style:{marginRight:"5px"}},"Delete ",null!=n?n.name:"wireframe"),actions:[a.a.createElement(E.Button,{className:"modal-close",flat:!0}," Close "),a.a.createElement(E.Button,{flat:!0,className:"modal-close",onClick:function(t){return e.deleteWireframe(t)}},"Confirm")]},a.a.createElement("p",null,"Are you sure you want to delete ",null!=n?n.name:"this wireframe","? "),a.a.createElement("p",null,a.a.createElement("b",null,"This action is irreversible.")))),a.a.createElement(E.Button,{node:"button",type:"submit",waves:"light",className:"createNewWireframeBtn",onClick:this.handleNewWireframe},"Create a new wireframe!")),a.a.createElement("div",{className:"preview"},null!=n?"Preview of "+n.name:""),a.a.createElement("div",{className:"wireframePreview",disabled:!0},a.a.createElement("div",{className:"center"},o)))):a.a.createElement("div",null)}}]),r}(n.Component)),M=Object(c.d)(Object(d.b)((function(e){return{auth:e.firebase.auth}})),Object(u.firestoreConnect)([{collection:"wireframes"}]))(Z),V=function(e){Object(f.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(h.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){var r=t.target;e.setState((function(e){return Object(R.a)({},e,Object(B.a)({},r.id,r.value))}))},e.handleSubmit=function(t){t.preventDefault();var r=Object(T.a)(e),n=r.props,a=r.state,o=n.firebase,i=Object(R.a)({},a);n.register(i,o)},e}return Object(p.a)(r,[{key:"render",value:function(){var e=this,t=this.props,r=t.auth,n=t.authError;return r.uid?a.a.createElement(s.a,{to:"/"}):a.a.createElement("div",null,a.a.createElement(E.TextInput,{icon:"email",label:"Email",id:"email",onChange:this.handleChange}),a.a.createElement(E.TextInput,{icon:"lock",label:"Password",id:"password",password:!0,onChange:this.handleChange}),a.a.createElement(E.TextInput,{icon:"person_pin",label:"First Name",id:"firstName",onChange:this.handleChange}),a.a.createElement(E.TextInput,{icon:"person_pin",label:"Last Name",id:"lastName",onChange:this.handleChange}),a.a.createElement(E.Button,{node:"button",style:{marginRight:"5px"},waves:"light",onClick:function(t){return e.handleSubmit(t)}},"Register"),n?a.a.createElement("div",{className:"red-text center"},a.a.createElement("p",null,n)):null)}}]),r}(n.Component),K=Object(c.d)(Object(u.firebaseConnect)(),Object(d.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{register:function(t,r){return e(function(e,t){return function(r,n,a){var o=(0,a.getFirestore)();t.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return o.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:"".concat(e.firstName[0]).concat(e.lastName[0]),administrator:!1,wireframes:[]})})).then((function(){r(w)})).catch((function(e){r(y)}))}}(t,r))}}})))(V),H=r(156),J=function(e){Object(f.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(h.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={control:e.props.controlToEdit},e.handleChange=function(t){if(null!==e.props.controlToEdit){var r=t.target,n=e.props.controlToEdit;"controlText"===r.id&&(n.text=r.value,e.props.handlePropertyChange(),e.setState({control:n})),"controlTextSize"===r.id&&(n.textSize=r.value,e.props.handlePropertyChange(),e.setState({control:n})),"controlBorderThickness"===r.id&&(n.borderThickness=r.value,e.props.handlePropertyChange(),e.setState({control:n})),"controlBorderRadius"===r.id&&(n.borderRadius=r.value,e.props.handlePropertyChange(),e.setState({control:n}))}},e.handleBackgroundColorChange=function(t){if(null!==e.props.controlToEdit){var r=e.props.controlToEdit;void 0===t.hex?r.backgroundColor="#FFFFFF":r.backgroundColor=t.hex,e.props.handlePropertyChange(),e.setState({control:r})}},e.handleBorderColorChange=function(t){if(null!==e.props.controlToEdit){var r=e.props.controlToEdit;r.borderColor=t.hex,e.props.handlePropertyChange(),e.setState({control:r})}},e.setWhiteBackground=function(){e.handleBackgroundColorChange("#FFFFFF")},e}return Object(p.a)(r,[{key:"render",value:function(){var e=this.props.controlToEdit,t=null!=this.props.controlToEdit;return a.a.createElement("div",{className:"propertyEditor"},"Properties",a.a.createElement(E.TextInput,{placeholder:"Control Text",value:t?e.text:"",id:"controlText",onChange:this.handleChange}),a.a.createElement("div",{className:"property"},"Font-size:",a.a.createElement(E.TextInput,{type:"number",value:t?e.textSize:0,id:"controlTextSize",onChange:this.handleChange})),a.a.createElement("div",{className:"property"},"Background:",a.a.createElement(H.SliderPicker,{color:t?e.backgroundColor:"white",id:"backgroundColor",onChange:this.handleBackgroundColorChange}),a.a.createElement(_.a,{className:"backgroundClearBtn",flat:!0,onClick:this.setWhiteBackground},"Clear")),a.a.createElement("div",{className:"property"},"Border Color:",a.a.createElement(H.SliderPicker,{color:t?e.borderColor:"black",id:"borderColor",onChange:this.handleBorderColorChange})),a.a.createElement("div",{className:"property"},"Border Thickness:",a.a.createElement(E.TextInput,{type:"number",placeholder:"Thickness",value:t?e.borderThickness:0,id:"controlBorderThickness",onChange:this.handleChange})),a.a.createElement("div",{className:"property"},"Border Radius:",a.a.createElement(E.TextInput,{type:"number",placeholder:"Radius",value:t?e.borderRadius:0,id:"controlBorderRadius",onChange:this.handleChange})))}}]),r}(n.Component),Q=function(e){Object(f.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(h.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={closing:!1},e.closeWireframe=function(t){e.setState({closing:!0})},e.zoomIn=function(){var e=document.getElementById("wireframeZone"),t=e.getAttribute("class");"normalZoom"===t&&e.setAttribute("class","doubleZoom"),"halfZoom"===t&&e.setAttribute("class","normalZoom")},e.zoomOut=function(){var e=document.getElementById("wireframeZone"),t=e.getAttribute("class");"normalZoom"===t&&e.setAttribute("class","halfZoom"),"doubleZoom"===t&&e.setAttribute("class","normalZoom")},e}return Object(p.a)(r,[{key:"render",value:function(){var e=this;return this.state.closing?a.a.createElement(s.a,{to:"/"}):a.a.createElement("div",null,a.a.createElement("div",{className:"controlsRow1"},a.a.createElement(E.Button,{large:!0,flat:!0,node:"button",waves:"light",onClick:this.zoomIn},a.a.createElement(E.Icon,{small:!0},"zoom_in")),a.a.createElement(E.Button,{large:!0,flat:!0,node:"button",waves:"light",onClick:this.zoomOut},a.a.createElement(E.Icon,{small:!0},"zoom_out")),a.a.createElement(E.Button,{large:!0,flat:!0,node:"button",waves:"light",onClick:function(t){return e.props.saveData(t)}},"Save"),a.a.createElement(E.Button,{large:!0,flat:!0,node:"button",waves:"light",onClick:function(t){return e.closeWireframe(t)}},"Close")),a.a.createElement("div",{className:"controlsRow2"},a.a.createElement("div",{className:"controlOption"},a.a.createElement("div",{className:"containerControlOption",onClick:function(t){return e.props.createNewControl(t)}}),"Container"),a.a.createElement("div",{className:"controlOption"},a.a.createElement("div",{className:"labelControlOption",onClick:function(t){return e.props.createNewControl(t)}}," Prompt for Input"),"Label"),a.a.createElement("div",{className:"controlOption"},a.a.createElement("div",{className:"buttonControlOption"},a.a.createElement(E.Button,{node:"a",small:!0,style:{marginRight:"5px"},waves:"light",onClick:function(t){return e.props.createNewControl(t)}}," Submit")),"Button"),a.a.createElement("div",{className:"controlOption"},a.a.createElement("div",{className:"textFieldControlOption",onClick:function(t){return e.props.createNewControl(t)}},a.a.createElement(E.TextInput,{className:"textFieldControlOption",disabled:!0,label:"Input"}))),"Textfield"))}}]),r}(n.Component),q=function(e){Object(f.a)(r,e);var t=Object(m.a)(r);function r(e){var n;return Object(h.a)(this,r),(n=t.call(this,e)).saveData=function(e){var t=Object(b.getFirestore)(),r=n.state.wireframe,a=n.props.auth.uid,o=n.props.location.state.usersWireframes;o[r.key]=r,t.collection("users").doc(a).update({wireframes:o}),Object(G.a)("The wireframe has been saved.")},n.setControlBeingEdited=function(e,t){t.preventDefault();var r=n.state.wireframe.controls[e];n.setState(Object(R.a)({},n.state,{controlBeingEdited:r}))},n.deselectControl=function(e){"wireframeZone"===e.target.id&&n.setState({controlBeingEdited:null})},n.handlePropertyChange=function(e){n.setState({})},n.createNewControl=function(e){var t=e.target.className;if(null!=n.state.wireframe){var r=n.state.wireframe.controls;switch(t){case"containerControlOption":r.push({key:r.length,positionX:0,positionY:0,width:200,height:100,text:"",textSize:50,backgroundColor:"#FFFFFF",borderColor:"#000000",borderThickness:5,borderRadius:2,type:"container"});break;case"labelControlOption":r.push({key:r.length,className:"labelControl",positionX:0,positionY:0,width:200,height:50,text:"Prompt for Input",textSize:20,backgroundColor:"#FFFFFF",borderColor:"#000000",borderThickness:0,borderRadius:1,type:"label"});break;case"waves-effect waves-light btn-small":r.push({key:r.length,className:"buttonControl",positionX:0,positionY:0,width:92,height:32,text:"Submit",textSize:16,backgroundColor:"#26a69a",borderColor:"#000000",borderThickness:0,borderRadius:0,type:"button"});break;case"textFieldControlOption":r.push({key:r.length,className:"textfieldControl",positionX:0,positionY:0,width:200,height:100,text:"Input",textSize:16,backgroundColor:"#FFFFFF",borderColor:"#000000",borderThickness:1,borderRadius:0,type:"textfield"})}n.setState({})}},n.deleteControl=function(e){n.state.wireframe.controls.remove(n.state.controlBeingEdited)},void 0!==n.props.location.state&&(n.state={wireframe:n.props.location.state.wireframe,controlBeingEdited:null}),document.body.onkeydown=function(e){e.ctrlKey?null!=n.state.controlBeingEdited&&68===e.keyCode&&n.duplicateControl(n.state.controlBeingEdited):46===e.keyCode&&n.removeControl(n.state.controlBeingEdited)},n}return Object(p.a)(r,[{key:"duplicateControl",value:function(e){var t=this.state.wireframe.controls,r=Object.assign({},e);r.key=t.length,r.positionX=e.positionX+100,r.positionY=e.positionY+100,t.push(r),this.setState({})}},{key:"removeControl",value:function(e){var t=this.state.wireframe.controls;t.splice(e.key,1);for(var r=e.key;r<t.length;r++)t[r].key=t[r].key-1;this.setState({})}},{key:"render",value:function(){return null==this.state?a.a.createElement(s.a,{to:"/"}):a.a.createElement("div",{id:"editScreenParent"},a.a.createElement("div",{id:"controlSelectionDiv",className:"editScreenDiv"},a.a.createElement(Q,{createNewControl:this.createNewControl,saveData:this.saveData})),a.a.createElement("div",{id:"propertyEditorDiv",className:"editScreenDiv"},null==this.state.wireframe?a.a.createElement(J,null):a.a.createElement(J,{controlToEdit:this.state.controlBeingEdited,handlePropertyChange:this.handlePropertyChange})),a.a.createElement("div",{id:"editAreaDiv",className:"editScreenDiv"},a.a.createElement(U,{wireframe:this.state.wireframe,controlBeingEdited:this.state.controlBeingEdited,setControlBeingEdited:this.setControlBeingEdited,deselectControl:this.deselectControl})))}}]),r}(n.Component),$=Object(c.d)(Object(d.b)((function(e){return{auth:e.firebase.auth}})),Object(u.firestoreConnect)([{collection:"todoLists"}]))(q);G.a.configure();var ee=Object(c.d)(Object(u.firebaseConnect)(),Object(d.b)((function(e){return{auth:e.firebase.auth}})))((function(){return a.a.createElement(l.a,{basename:"/"},a.a.createElement("div",{className:"App"},a.a.createElement(N,null),a.a.createElement(s.b,{exact:!0,path:"/",component:M}),a.a.createElement(s.b,{path:"/databaseTester",component:C}),a.a.createElement(s.b,{path:"/login",component:F}),a.a.createElement(s.b,{path:"/register",component:K}),a.a.createElement(s.b,{path:"/editScreen",component:$}),a.a.createElement(s.b,{path:"/:any",component:M})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=r(244),re=r(157),ne=r.n(re);r(536),r(539);ne.a.initializeApp({apiKey:"AIzaSyBcA8HkDyfxfg9_13fPa-qWW5lTDnLnGLQ",authDomain:"wireframer-41732.firebaseapp.com",databaseURL:"https://wireframer-41732.firebaseio.com",projectId:"wireframer-41732",storageBucket:"wireframer-41732.appspot.com",messagingSenderId:"105065243096",appId:"1:105065243096:web:df1296bef069f9b04192ad",measurementId:"G-LQXQ86V256"});var ae=ne.a,oe={},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(R.a)({},e,{authError:"Login fail"});case"LOGIN_SUCCESS":return Object(R.a)({},e,{authError:null});case"LOGOUT_SUCCESS":return e;case"REGISTER_SUCCESS":return Object(R.a)({},e,{authError:null});case"REGISTER_ERROR":return Object(R.a)({},e,{authError:t.err.message});default:return e}},le={todoLists:[]},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;return t.type,e},ce=Object(c.c)({auth:ie,todoList:se,firestore:b.firestoreReducer,firebase:u.firebaseReducer}),de=function(e){Object(f.a)(r,e);var t=Object(m.a)(r);function r(e){var n;Object(h.a)(this,r),n=t.call(this,e);var a=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,o=Object(c.e)(ce,a(Object(c.a)(te.a.withExtraArgument({getFirebase:u.getFirebase,getFirestore:b.getFirestore})),Object(b.reduxFirestore)(ae))),i={firebase:ae,config:{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0},dispatch:o.dispatch,createFirestoreInstance:b.createFirestoreInstance};return n.state={store:o,rrfProps:i},n}return Object(p.a)(r,[{key:"render",value:function(){return a.a.createElement(d.a,{store:this.state.store},a.a.createElement(u.ReactReduxFirebaseProvider,this.state.rrfProps,a.a.createElement(ee,null)))}}]),r}(a.a.Component);i.a.render(a.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[245,1,2]]]);
//# sourceMappingURL=main.b11b3ba2.chunk.js.map