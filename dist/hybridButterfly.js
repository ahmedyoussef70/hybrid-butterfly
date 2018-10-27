!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.hybridButterfly=e():t.hybridButterfly=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}({11:function(t,e,n){"use strict";function i(t){return document.createElement(t)}function r(t){return document.createTextNode(t)}function s(t,e){for(var n in e)if("_eventsMap"===n)for(var i in e._eventsMap)t.addEventListener(i,e._eventsMap[i]);else t.setAttribute(n,e[n])}function o(){}function h(){}function a(){}function u(){}function c(t,e,n){return(c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var i=[null];i.push.apply(i,e);var r=new(Function.bind.apply(t,i));return n&&d(r,n.prototype),r}).apply(null,arguments)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}n.r(e);var p=function(){function t(){}var e=t.prototype;return e.lex=function(e,n,u,c,d,p){var f=this;for(this.text=e||"",this.index=0,this.currentLineNumber=1,this.tokens=[],this.relationsMap=c||[],this.parsingMode=null,this.contextMode=d||null,this.component=n,this.componentName=u,this.currentComponent={name:null,factory:null,children:[],args:[]},this.tagR1=/[a-zA-Z]/,this.tagR2=/-|\d/,this.whiteSpaceR=/\s/,this.forLoopR=/#for(?:\s+)?\((?:\s+)?(.+)(?:\s+)of(?:\s+)(.+)(?:\s+)?\)(?:\s+)?\[/g,this.ifR=/#if(?:\s+)?\((?:\s+)?([\S\s]*?)(?:\s+)?\)(?:\s+)?\[/g,this.escapeChars={b:"\b",f:"\f",n:"\n",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'};this.index<this.text.length;){var x=e[this.index];if(this.tagR1.test(x)){this.parsingMode===o&&this.resovleCurrentComponent(),this.parsingMode=i;var m=this.readTag();this.component&&this.component.components&&this.component.components[m.rawValue]?(this.parsingMode=o,this.currentComponent.factory=this.component.components[m.rawValue],this.currentComponent.name=this.component.components[m.rawValue].name):this.tokens.push(m)}else if(this.whiteSpaceR.test(x))"\n"===x&&(this.currentLineNumber+=1),this.index+=1;else if("["===x){if(!this.tokens.length)throw this.vizError(this.index,this.index+1),new Error("Can not declare children without a parent: line -> "+this.currentLineNumber+", index -> "+this.index+", char -> "+this.text[this.index]);this.relationsMap.push(this.tokens[this.tokens.length-1]),this.contextMode=a,this.index+=1}else if("]"===x)this.parsingMode===o&&this.resovleCurrentComponent(),this.relationsMap.pop(),this.contextMode=this.relationsMap.length?a:null,this.index+=1;else if("'"===x||'"'===x)this.parsingMode===o&&this.resovleCurrentComponent(),this.parsingMode=r,this.tokens.push(this.readText(x));else if("("===x)if(this.parsingMode===o)this.parsingMode=h,this.readComponentArgs(this.currentComponent.args),this.resovleCurrentComponent();else{if(!this.tokens.length)throw this.vizError(this.index,this.index+1),new Error("Can not attach attrs on null: "+(this.contextName?"Component -> "+this.contextName+",":"")+" line -> "+this.currentLineNumber+", index -> "+this.index+", char -> "+this.text[this.index]);this.parsingMode=s,this.tokens[this.tokens.length-1].attrs=this.readAttrs()}else if(","===x)this.index+=1;else if("#"===x){this.parsingMode===o&&this.resovleCurrentComponent(),this.forLoopR.lastIndex=this.ifR.lastIndex=this.index;var v=void 0;if(v=this.forLoopR.exec(this.text)){var g=v[1],w=v[2],M=v[0].indexOf(w);this.index+=M;var y=this.readStrExp(w);this.index+=v[0].length-M-w.length;var b=this.index,E=this.getBodyEndIndex(1),N=this.text.slice(b,E),_=-1,C=y();if(!Array.isArray(C))throw new Error("For loop collection must be an array -> "+w);var k=C,O=Array.isArray(k),T=0;for(k=O?k:k[Symbol.iterator]();;){var L,R;if(O){if(T>=k.length)break;R=k[T++]}else{if((T=k.next()).done)break;R=T.value}var V=R;_+=1,(new t).lex(N,l({},this.component,((L={})[g]=V,L.even=_%2==0,L.odd=_%2!=0,L.counter=_,L)),this.componentName,this.relationsMap,this.contextMode,!0).forEach(function(t){return f.tokens.push(t)})}}else{if(!(v=this.ifR.exec(this.text)))throw this.vizError(this.index,this.index+5),new Error("Invalid if/for syntax: "+(this.componentName?"Component -> "+this.componentName+",":"")+" line -> "+this.currentLineNumber);var z=v[1],j=v[0].indexOf(z);this.index+=j;var S=this.readStrExp(z);this.index+=v[0].length-j-z.length;var A=this.index,I=this.getBodyEndIndex(1);if(S()){var B=this.text.slice(A,I);(new t).lex(B,this.component,this.componentName,this.relationsMap,this.contextMode,!0).forEach(function(t){return f.tokens.push(t)})}else this.index=I+1}}else{if("{"!==x||"{"!==this.peak(1))throw this.vizError(this.index,this.index+1),new Error("Unknown char: line -> "+this.currentLineNumber+", index -> "+this.index+", char -> "+this.text[this.index]);this.parsingMode===o&&this.resovleCurrentComponent();var D=this.readExp(),U=D.expFunc,F=D.startIndex;this.tokens.push(this.makeToken(String(U()),F,r))}}return p||(this.tokens[0].component=this.component),this.tokens.length?this.tokens:[]},e.readComponentArgs=function(t){var e=u,n=u,i=this.index;for(this.index+=1;this.parsingMode===h;){var s=this.text[this.index];if(null==s)throw this.vizError(i,this.index),new Error("Missing a closing parenthesis: "+(this.componentName?"Component -> "+this.componentName+",":"")+" text -> "+this.text.slice(i,this.index));if("'"===s||'"'===s){if(e!==u)throw this.vizError(i,this.index),new Error("Missing comma: "+(this.componentName?"Component -> "+this.componentName+",":"")+" after -> "+this.text.slice(i,this.index));this.parsingMode=r,e=this.readText(s).rawValue,this.parsingMode=h}else if("{"===s&&"{"===this.peak(1)){if(n!==u)throw this.vizError(i,this.index),new Error("Missing comma: "+(this.componentName?"Component -> "+this.componentName+",":"")+" after -> "+this.text.slice(i,this.index));n=(0,this.readExp().expFunc)()}else if(","===s||")"===s)this.index+=1,e!==u&&(t.push(e),e=u),n!==u&&(t.push(n),n=u),")"===s&&(this.parsingMode=o);else{if(!this.whiteSpaceR.test(s))throw this.vizError(this.index,this.index+1),new Error("Unknown char: line -> "+this.currentLineNumber+", index -> "+this.index+", char -> "+this.text[this.index]);"\n"===s&&(this.currentLineNumber+=1),this.index+=1}}},e.resovleCurrentComponent=function(){var t=this,e=this.currentComponent.factory,n=c(e,this.currentComponent.args);n._isHybridButterflyComponent&&this.fLexer(n,e).forEach(function(e){return t.tokens.push(e)});this.currentComponent={name:null,factory:null,children:[],args:[]},this.parsingMode=null},e.fLexer=function(e,n){return(new t).lex(e.template(),e,n.name,this.relationsMap,this.contextMode)},e.readStrExp=function(t){return this.readExp(t.length).expFunc},e.getBodyEndIndex=function(t){for(;t;){var e=this.text[this.index];if(null==e)throw this.vizError(this.index-3,this.index+1),new Error("Missing a closing bracket: "+(this.componentName?"Component -> "+this.componentName+",":"")+" text -> "+this.text.slice(this.index-3,this.index+1));if("'"===e||'"'===e){var n=this.parsingMode;this.parsingMode=r;var i=this.readText(e);this.parsingMode=n,this.index=i.endIndex+2}else"["===e?(t+=1,this.index+=1):"]"===e?(t-=1,this.index+=1):this.index+=1}return this.index-1},e.peak=function(t){return this.text[this.index+t]},e.readTag=function(){var t="",e=this.index;for(t+=this.text[this.index],this.index+=1;this.parsingMode===i;){var n=this.text[this.index];if(null==n||!this.tagR1.test(n)&&!this.tagR2.test(n)){var r=this.makeToken(t,e);return t=e=null,this.parsingMode=null,r}t+=n,this.index+=1}},e.readText=function(t){var e="",n=t,i=this.index+1,s=!1;for(this.index+=1;this.parsingMode===r;){var o=this.text[this.index];if(null==o)throw this.vizError(i,this.index-1),new Error("Missing quote: line -> "+this.currentLineNumber+", index -> "+this.index+", text -> "+this.text.slice(i,this.index-1));if(s)e+=this.escapeChars[this.text[this.index]]||o,this.index+=1,s=!1;else if("\\"===o)s=!0,this.index+=1;else{if(o===n){var h=this.makeToken(e,i);return e=i=null,this.index+=1,h}"\n"===o&&(this.currentLineNumber+=1),e+=o,this.index+=1}}},e.readAttrs=function(){var t={_eventsMap:{}},e="",n="",i=!0,o=!1,h=!1,a=!1,u=this.index+1;for(this.index+=1;this.parsingMode===s;){var c=this.text[this.index];if(null==c)throw this.vizError(u,this.index),new Error("Missing a closing parenthesis: "+(this.componentName?"Component -> "+this.componentName+",":"")+" text -> "+this.text.slice(u,this.index));if(this.whiteSpaceR.test(c))e&&(h=!0),"\n"===c&&(this.currentLineNumber+=1),this.index+=1;else if(","===c||")"===c){if(e&&(a?(t._eventsMap[e]=n,a=!1):t[e]=n),e=n="",o=!1,i=!0,h=!1,this.index+=1,")"===c){var d=this.makeToken(t,u);return this.parsingMode=e=n=t=null,d}}else if(i)if("@"===c){if(h)throw this.vizError(u,this.index),new Error("Missing a comma: "+(this.componentName?"Component -> "+this.componentName+",":"")+" text -> "+this.text.slice(u,this.index));a=!0,this.index+=1}else if(this.tagR1.test(c)||e.length&&this.tagR2.test(c)){if(h)throw this.vizError(u,this.index),new Error("Missing a comma: "+(this.componentName?"Component -> "+this.componentName+",":"")+" text -> "+this.text.slice(u,this.index));e+=c,this.index+=1}else{if("="!==c)throw this.vizError(this.index,this.index+1),new Error("Attr keys must not have quotes or curly braces: line -> "+this.currentLineNumber+", index -> "+this.index+", char -> "+this.text[this.index]);o=!0,i=!1,h=!1,this.index+=1}else if(o)if("{"===c&&"{"===this.peak(1)){n=(0,this.readExp().expFunc)(),o=!1,i=!1,h=!0}else{if("'"!==c&&'"'!==c)throw this.vizError(this.index,this.index+1),new Error("Attr values must have quotes or curly braces: line -> "+this.currentLineNumber+", index -> "+this.index+", char -> "+this.text[this.index]);this.parsingMode=r;var l=this.readText(c);if(n=l.rawValue,a){var p=this.index;this.index=l.startIndex;var f=this.readStrExp(n);this.index=p,n=f}o=!1,i=!1,h=!0,this.parsingMode=s}else if(h)throw this.vizError(u,this.index),new Error("Missing a comma: "+(this.componentName?"Component -> "+this.componentName+",":"")+" text -> "+this.text.slice(u,this.index))}},e.readExp=function(t){var e=this,n=this.parsingMode,i=this.getResovableVars(t),r=i.startIndex,s=i.vars,o=i.exp,h=s.map(function(t){return e.component[t]}),a=s.indexOf("event");return this.parsingMode=n,{expFunc:function(t){a>=0&&(h[a]=t);try{return c(Function,s.concat(["return "+o])).apply(void 0,h)}catch(t){throw e.vizError(r,e.index),new Error(""+t)}},startIndex:r}},e.getResovableVars=function(t){var e=[],n="",i=this.index,s=!1,o=!1,h="";for(this.index+=null!=t?0:2;!o&&(null==t||t>0);){var a=this.text[this.index];if(null==a)throw this.vizError(i,this.index),new Error("Missing closing curly braces: "+(this.componentName?"Component -> "+this.componentName+",":"")+" text -> "+this.text.slice(i,this.index));if("'"===a||'"'===a){this.parsingMode=r;var u=this.readText(a);h+=a+u.rawValue+a,null!=t&&(t-=u.rawValue.length+2)}else if("<>=!|&~[],.()+-/%?:".includes(a)||a>=0||a<0){if(null!=t&&(t-=1),h+=a,s="."===a,n)if("false"===n||"true"===n||"NaN"===n||"null"===n||"undefined"===n)n="";else{var c=n.trim();-1===e.indexOf(c)&&e.push(c),n=""}this.index+=1}else if("}"===a&&"}"===this.peak(1)){if(n)if("false"===n||"true"===n||"NaN"===n||"null"===n||"undefined"===n)n="";else{var d=n.trim();-1===e.indexOf(d)&&e.push(d),n=""}o=!0,this.index+=2}else{if("}"===a)throw this.vizError(i,this.index+1),new Error("Missing closing curly braces: "+(this.componentName?"Component -> "+this.componentName+",":"")+" text -> "+this.text.slice(i,this.index+1));s?(null!=t&&(t-=1),h+=a,this.index+=1):(null!=t&&(t-=1),n+=a,h+=a,this.index+=1)}}if(n)if("false"===n||"true"===n||"NaN"===n||"null"===n||"undefined"===n)n="";else{var l=n.trim();-1===e.indexOf(l)&&e.push(l),n=""}return{startIndex:i,vars:e,exp:h}},e.makeToken=function(t,e,n){return{parsingMode:n||this.parsingMode,contextMode:this.contextMode,rawValue:t,startIndex:e,endIndex:this.index-1,lineNumber:this.currentLineNumber,parentToken:this.contextMode===a?this.relationsMap[this.relationsMap.length-1]:null,componentName:this.componentName,attrs:null,component:null}},e.vizError=function(t,e){var n;if("object"==typeof document&&(n=document.querySelector("body"))){var i="<pre>"+this.text.slice(0,t)+'<b style="color:orangered">'+this.text.slice(t,e)+"</b></pre>";n.innerHTML=i}},t}(),f={didMounts:[],willUnmounts:[]},x=function(){function t(){}var e=t.prototype;return e.build=function(t){var e=this;if(void 0===t&&(t=[]),this.tokens=t,this.vnt=[],this.tokensLength=this.tokens.length,this.tokensLength>0)return this.tokens.forEach(function(t){if(t.parentToken){var n=t.parentToken.children;n?n.push(t):t.parentToken.children=[t]}else e.vnt.push(t)}),this.vnt.length>1?this.vnt:this.vnt[0];throw new Error("VNT error: not enough tokens")},e.compile=function(t){if("[object Object]"===Object.prototype.toString.call(t))return this._compile(t);if("[object Array]"===Object.prototype.toString.call(t))throw new Error("VNT error: got more than 1 entry point")},e._compile=function(t){var e=this,n=t.rawValue,r=t.attrs,o=t.children,h=t.parsingMode,a=t.component,u=h(n);return a&&(a._setDOM(u),u._component=a,"function"==typeof a.didMount&&f.didMounts.push(a.didMount.bind(a))),h===i&&(u._tag=n),r?(s(u,r.rawValue),u._attrs=r.rawValue):u._attrs={},o&&o.forEach(function(t){return u.appendChild(e._compile(t))}),u},t}(),m=function(t){return function(e){return t._compile(e)}}(new x);function v(){if(f.didMounts.length){var t=f.didMounts.slice();f.didMounts=[],t.forEach(function(t){return t()})}}function g(t,e){w(t),function(){if(f.willUnmounts.length){var t=f.willUnmounts.slice();f.willUnmounts=[];for(var e=t.length-1;e>-1;e--)t[e]()}}(),e||t.remove()}function w(t){if(3!==t.nodeType)return 1===t.nodeType&&!t._component&&t.childNodes.length?M(t.childNodes):void(1===t.nodeType&&t._component&&t._component.willUnmount&&(f.willUnmounts.push(t._component.willUnmount.bind(t._component)),t.childNodes.length&&M(t.childNodes)))}function M(t){for(var e=0,n=t.length;e<n;)w(t[e]),e++}function y(t,e,n){var i=m(t);return g(e,!0),n.replaceChild(i,e),i}function b(t,e){if("function"==typeof t){var n;if(!(n=new t)._isHybridButterflyComponent)throw new Error(t.name+" must extend Component");window.hybridButterfly.appInstance=n;var i=new p,r=new x;if(!e||!e||!e.appendChild)throw new Error("render second argument must be a DOM element");return e.appendChild(r.compile(r.build(i.lex(n.template(),n,t.name)))),void v()}throw new Error("render first argument must be a class/constructor")}function E(){this.components={},this._isHybridButterflyComponent=!0}E.prototype.updateView=function(){var t=new p,e=new x,n=this.template();!function t(e,n,i){if(n&&null!=e)if(1===n.nodeType){if(e.rawValue!==n._tag)return y(e,n,i);if(e.component&&n._component){if(e.component.constructor.name!==n._component.constructor.name)return y(e,n,i);e.component._setDOM(n),n._component=Object.assign(n._component,e.component)}else if(e.component||n._component)return y(e,n,i);if(function(t,e){var n=t.attrs?t.attrs.rawValue:{};!function(t,e,n){for(var i in e)if("_eventsMap"===i)for(var r in e._eventsMap)n.removeEventListener(r,e._eventsMap[r]);else i in t||n.removeAttribute(i)}(n,e._attrs,e),function(t,e,n){for(var i in t)if("_eventsMap"===i)for(var r in t._eventsMap)n.addEventListener(r,t._eventsMap[r]);else e[i]!==t[i]&&n.setAttribute(i,t[i])}(n,e._attrs,e),e._attrs=n}(e,n),e.children)for(var s=0;s<e.children.length;s++)t(e.children[s],n.childNodes[s],n);var o=n.childNodes.length,h=e.children?e.children.length:0;if(o>h)for(;o-- >h;)g(n.childNodes[o])}else{if(3!==n.nodeType||e.parsingMode!==r)return y(e,n,i);e.rawValue!==n.nodeValue&&(n.nodeValue=e.rawValue)}else null==n&&e&&i.appendChild(m(e))}(e.build(t.lex(n,this,this.constructor.name)),this.DOM,this.DOM.parentNode),v()},E.prototype._setRouterMatch=function(t){this.routerMatch=t},E.prototype._setDOM=function(t){this.DOM=t},n.d(e,"Component",function(){return E}),n.d(e,"render",function(){return b})}})});