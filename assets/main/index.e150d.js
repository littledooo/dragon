window.__require=function e(t,o,n){function c(i,u){if(!o[i]){if(!t[i]){var p=i.split("/");if(p=p[p.length-1],!t[p]){var s="function"==typeof __require&&__require;if(!u&&s)return s(p,!0);if(r)return r(p,!0);throw new Error("Cannot find module '"+i+"'")}i=p}var l=o[i]={exports:{}};t[i][0].call(l.exports,function(e){return c(t[i][1][e]||e)},l,l.exports,e,t,o,n)}return o[i].exports}for(var r="function"==typeof __require&&__require,i=0;i<n.length;i++)c(n[i]);return c}({NewScript:[function(e,t){"use strict";cc._RF.push(t,"00186hnWktDs5WQS6nVHgTI","NewScript"),cc.Class({extends:cc.Component,properties:{},start:function(){}}),cc._RF.pop()},{}],ScrollViewHack:[function(e,t,o){"use strict";cc._RF.push(t,"27a2fdQ4ulCAquhY7ZuI5wD","ScrollViewHack");var n,c=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),r=this&&this.__decorate||function(e,t,o,n){var c,r=arguments.length,i=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var u=e.length-1;u>=0;u--)(c=e[u])&&(i=(r<3?c(i):r>3?c(t,o,i):c(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,u=i.ccclass,p=i.property,s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mul=10,t}return c(t,e),t.prototype.onLoad=function(){this.node.on(cc.Node.EventType.MOUSE_WHEEL,this._onMouseWheel,this,!0)},t.prototype._onMouseWheel=function(e){e.setScrollData(e.getScrollX(),e.getScrollY()*this.mul),console.log(e.getScrollY())},r([p({tooltip:"\u6539\u53d8\u6eda\u8f6e\u79fb\u52a8\u8ddd\u79bb\u7684\u500d\u6570"})],t.prototype,"mul",void 0),r([u],t)}(cc.Component);o.default=s,cc._RF.pop()},{}],jumpScene:[function(e,t){"use strict";cc._RF.push(t,"8ee07WxM2VBvrZSNGlvRwcw","jumpScene"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){"changJing_jianJie"!=cc.director.getScene().name?this.node.on(cc.Node.EventType.MOUSE_DOWN,function(){cc.director.loadScene("changJing_jianJie")},this):this.node.on(cc.Node.EventType.MOUSE_DOWN,function(){cc.director.loadScene("changJing_shouYe")},this)}}),cc._RF.pop()},{}]},{},["NewScript","ScrollViewHack","jumpScene"]);