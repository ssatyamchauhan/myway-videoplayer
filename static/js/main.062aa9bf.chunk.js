(this.webpackJsonpvideoplayer=this.webpackJsonpvideoplayer||[]).push([[0],{23:function(t,e,n){t.exports=n(45)},28:function(t,e,n){},43:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),l=n(2),s=n.n(l),o=(n(28),n(8)),r=n(4),c=n(13),d=n(14),u=n(19),h=n(15),f=(n(43),n(70)),v=function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(c.a)(this,Object(d.a)(e).call(this))).onEnd=function(){if(t.state.listOfLink.length){var e=t.state.listOfLink.slice(1,t.state.listOfLink.length);t.setState({listOfLink:e,videoId:e[0]})}},t.onError=function(){if(console.log("this is not a valid Url"),t.state.listOfLink.length){var e=t.state.listOfLink.slice(1,t.state.listOfLink.length);t.setState({listOfLink:e,videoId:e[0]})}},t.addLink=function(e){if(("Enter"===e.key||"Enter"===e.target.id)&&null!==t.state.link){var n;n=t.state.link.match(/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/);var i=t.state.listOfLink;i.push(n[1]),t.setState({listOfLink:i,link:""},(function(){return console.log(t.state.listOfLink)}))}},t.state={listOfLink:["hiu9WSl4OKg"],link:null,videoId:null},t}return Object(u.a)(e,t),Object(r.a)(e,[{key:"_onReady",value:function(t){t.target.playVideo()}},{key:"componentDidMount",value:function(){this.state.listOfLink.length&&this.setState({videoId:this.state.listOfLink[0]})}},{key:"render",value:function(){var t=this,e=this.state.listOfLink.map((function(t,e){return a.a.createElement("li",{key:e},"Link"+(e+1))}));return a.a.createElement("div",null,a.a.createElement("nav",null,a.a.createElement("div",{className:"nav-wrapper"},a.a.createElement("i",{id:"Enter",className:"material-icons prefix add-button",onClick:this.addLink},"queue"),a.a.createElement(f.a,{onKeyPress:this.addLink,style:{width:"500px",float:"right"},onChange:function(e){return t.setState({link:e.target.value})},value:this.state.link,required:!0,id:"standard-required"}))),a.a.createElement("div",{className:"main"},a.a.createElement("div",{className:"video-player"},a.a.createElement(h.a,{className:"youtube",videoId:this.state.videoId,opts:{marginTop:"100",height:"390",width:"640",playerVars:{autoplay:1}},onEnd:this.onEnd,onError:this.onError,onReady:this._onReady})),a.a.createElement("div",{className:"listoflink"},a.a.createElement("ul",null,e))))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.062aa9bf.chunk.js.map