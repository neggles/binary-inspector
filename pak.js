/*! For license information please see pak.js.LICENSE.txt */
(()=>{"use strict";var e,t={2408:(e,t,r)=>{var n=r(7418),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function E(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||b}function g(){}function S(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||b}E.prototype.isReactComponent={},E.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},E.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=E.prototype;var k=S.prototype=new g;k.constructor=S,n(k,E.prototype),k.isPureReactComponent=!0;var _={current:null},$=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,o={},a=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)$.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var c=Array(i),f=0;f<i;f++)c[f]=arguments[f+2];o.children=c}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:u,type:e,key:a,ref:l,props:o,_owner:_.current}}function U(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var x=/\/+/g,F=[];function R(e,t,r,n){if(F.length){var o=F.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function j(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>F.length&&F.push(e)}function P(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case u:case a:l=!0}}if(l)return r(n,e,""===t?"."+A(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var c=t+A(o=e[i],i);l+=P(o,c,r,n)}else if("function"==typeof(c=null===e||"object"!=typeof e?null:"function"==typeof(c=h&&e[h]||e["@@iterator"])?c:null))for(e=c.call(e),i=0;!(o=e.next()).done;)l+=P(o=o.value,c=t+A(o,i++),r,n);else if("object"===o)throw r=""+e,Error(v(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return l}function I(e,t,r){return null==e?0:P(e,"",t,r)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function T(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,n,r,(function(e){return e})):null!=e&&(U(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+r)),n.push(e))}function M(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(x,"$&/")+"/"),I(e,T,t=R(t,u,n,o)),j(t)}var B={current:null};function D(){var e=B.current;if(null===e)throw Error(v(321));return e}var q={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return M(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,L,t=R(null,null,t,r)),j(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!U(e))throw Error(v(143));return e}},t.Component=E,t.Fragment=l,t.Profiler=c,t.PureComponent=S,t.StrictMode=i,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,r){if(null==e)throw Error(v(267,e));var o=n({},e.props),a=e.key,l=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,i=_.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(f in t)$.call(t,f)&&!C.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==c?c[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){c=Array(f);for(var s=0;s<f;s++)c[s]=arguments[s+2];o.children=c}return{$$typeof:u,type:e.type,key:a,ref:l,props:o,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=U,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return D().useCallback(e,t)},t.useContext=function(e,t){return D().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return D().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return D().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return D().useLayoutEffect(e,t)},t.useMemo=function(e,t){return D().useMemo(e,t)},t.useReducer=function(e,t,r){return D().useReducer(e,t,r)},t.useRef=function(e){return D().useRef(e)},t.useState=function(e){return D().useState(e)},t.version="16.14.0"},3488:(e,t,r)=>{function n(e){return new Uint8Array(e.match(/[\da-f]{2}/gi).map((function(e){return parseInt(e,16)}))).buffer}function o(e){let t="",r=new Uint8Array(e);for(let e of r)t+=String.fromCharCode(e);return window.btoa(t)}function u(e){let t=window.atob(e),r=new Uint8Array(t.length);for(let e=0;e<t.length;e++)r[e]=t.charCodeAt(e);return r.buffer}function a(e){return e.split(/\r?\n/g)}r.d(t,{RG:()=>u,aS:()=>n,sM:()=>o,uq:()=>a})},6459:(e,t,r)=>{var n=r(7294),o=r(3935),u=r(1977),a=r(4051),l=r(1555),i=r(5114),c=r(3488),f=r(806),s=r(3855),p=r(5327),d=r(7343);class y extends n.Component{constructor(e){super(e),this.state={kind:"noData"}}componentDidMount(){if(d.e$("data")){let e=d.U2("data"),t=c.RG(e);this.loadBuffer(t)}}loadBuffer(e){d.t8("data",c.sM(e));let t=new u.a(e,0,e.byteLength);try{let e=this.props.inspect(t);this.setState({kind:"decodeSuccess",data:t,tree:e})}catch(e){this.setState({kind:"decodeFailure",data:t,error:e})}}render(){return n.createElement(n.Fragment,null,n.createElement(f.Y,{inputName:"input",defaultBase64:d.U2("data"),onBuffer:e=>this.loadBuffer(e)}),"decodeSuccess"==this.state.kind&&n.createElement(s.W,{tree:this.state.tree,data:this.state.data}),"decodeFailure"==this.state.kind&&n.createElement(a.Z,null,n.createElement(l.Z,null,n.createElement(i.Z,{variant:"danger"},n.createElement(i.Z.Heading,null,this.state.error.toString()),n.createElement("code",null,n.createElement("pre",null,this.state.error.stack)))),n.createElement(l.Z,null,n.createElement(p.V,{data:this.state.data}))),"noData"==this.state.kind&&n.createElement("div",null,"No data provided yet."))}}var m=r(2711);o.render(n.createElement(y,{inspect:function(e){let t=e.bytes(0,4),r=e.bytes(4,4),n=e.bytes(8,4),o=function(e,t){let r=e.chunks(64).map((e=>function(e,t){let r=e.bytes(0,56).nullTerminated(),n=e.bytes(56,4),o=e.bytes(60,4),u=t.bytes(n.readUIntLE(),o.readUIntLE());return{entry:new m.m(`File Table Entry: ${r.readUTF8()}`,e,[new m.m(`Name: ${r.readUTF8()}`,r),new m.m(`File Offset: ${n.readUIntLE()}`,n),new m.m(`File Size: ${o.readUIntLE()}`,o)]),contents:new m.m(`File Contents: ${r.readUTF8()}`,u)}}(e,t)));return{table:new m.m("File Table",e,r.map((e=>e.entry))),contents:new m.m("File Contents",e,r.map((e=>e.contents)))}}(e.bytes(r.readUIntLE(),n.readUIntLE()),e);return new m.m("Quake PAK",e,[new m.m(`Magic: ${t.readUTF8()}`,t),new m.m(`File Table Offset: ${r.readUIntLE()}`,r),new m.m(`File Table Size: ${n.readUIntLE()}`,n),o.table,o.contents])}}),document.getElementById("root"))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var u=r[e]={exports:{}};return t[e].call(u.exports,u,u.exports,n),u.exports}n.m=t,e=[],n.O=(t,r,o,u)=>{if(!r){var a=1/0;for(f=0;f<e.length;f++){for(var[r,o,u]=e[f],l=!0,i=0;i<r.length;i++)(!1&u||a>=u)&&Object.keys(n.O).every((e=>n.O[e](r[i])))?r.splice(i--,1):(l=!1,u<a&&(a=u));if(l){e.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}u=u||0;for(var f=e.length;f>0&&e[f-1][2]>u;f--)e[f]=e[f-1];e[f]=[r,o,u]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={389:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,u,[a,l,i]=r,c=0;if(a.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(i)var f=i(n)}for(t&&t(r);c<a.length;c++)u=a[c],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(f)},r=self.webpackChunkbinary_inspectors=self.webpackChunkbinary_inspectors||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[763,850],(()=>n(6459)));o=n.O(o)})();