(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{641:function(t,e,i){"use strict";function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}class s extends HTMLElement{connectedCallback(){window.APlayer&&window.fetch&&(this._init(),this._parse())}disconnectedCallback(){this.lock||this.aplayer.destroy()}_camelize(t){return t.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(t,e)=>e.toUpperCase())}_init(){let t={};for(let e=0;e<this.attributes.length;e+=1)t[this._camelize(this.attributes[e].name)]=this.attributes[e].value;let e=["server","type","id","api","auth","auto","lock","name","title","artist","author","url","cover","pic","lyric","lrc"];this.meta={};for(var i=0;i<e.length;i++){let a=e[i];this.meta[a]=t[a],delete t[a]}this.config=t,this.api=this.meta.api||window.meting_api||"https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",this.meta.auto&&this._parse_link()}_parse_link(){let t=[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+).html","tencent","song"],["y.qq.com.*album/(\\w+).html","tencent","album"],["y.qq.com.*singer/(\\w+).html","tencent","artist"],["y.qq.com.*playsquare/(\\w+).html","tencent","playlist"],["y.qq.com.*playlist/(\\w+).html","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]];for(var e=0;e<t.length;e++){let i=t[e],a=new RegExp(i[0]).exec(this.meta.auto);if(null!==a)return this.meta.server=i[1],this.meta.type=i[2],void(this.meta.id=a[1])}}_parse(){if(this.meta.url){let t={name:this.meta.name||this.meta.title||"Audio name",artist:this.meta.artist||this.meta.author||"Audio artist",url:this.meta.url,cover:this.meta.cover||this.meta.pic,lrc:this.meta.lrc||this.meta.lyric||"",type:this.meta.type||"auto"};return t.lrc||(this.meta.lrcType=0),this.innerText&&(t.lrc=this.innerText,this.meta.lrcType=2),void this._loadPlayer([t])}let t=this.api.replace(":server",this.meta.server).replace(":type",this.meta.type).replace(":id",this.meta.id).replace(":auth",this.meta.auth).replace(":r",Math.random());fetch(t).then(t=>t.json()).then(t=>this._loadPlayer(t))}_loadPlayer(t){let e={audio:t,mutex:!0,lrcType:this.meta.lrcType||3,storageName:"metingjs"};if(t.length){let t=function(t){for(var e=1;e<arguments.length;e++){var i=null==arguments[e]?{}:arguments[e],s=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),s.forEach((function(e){a(t,e,i[e])}))}return t}({},e,this.config);for(let e in t)("true"===t[e]||"false"===t[e])&&(t[e]="true"===t[e]);let i=document.createElement("div");t.container=i,this.appendChild(i),this.aplayer=new APlayer(t)}}}console.log("\n %c MetingJS v2.0.1 %c https://github.com/metowolf/MetingJS \n","color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;"),window.customElements&&!window.customElements.get("meting-js")&&(window.MetingJSElement=s,window.customElements.define("meting-js",s))}}]);