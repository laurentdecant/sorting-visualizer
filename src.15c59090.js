parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"mGa6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.insertionSort=exports.selectionSort=exports.bubbleSort=exports.randomize=void 0;const t=t=>{for(let e=0;e<t.length;e++)t[e]=e+1;for(let e=0;e<t.length;e++){const o=Math.floor(Math.random()*(t.length-1-e)+e);[t[e],t[o]]=[t[o],t[e]]}};exports.randomize=t;const e=async(t,e)=>{for(let o=t.length-1;o>0;o--)for(let r=0;r<o;r++)await e(r,r+1),t[r]>t[r+1]&&([t[r],t[r+1]]=[t[r+1],t[r]],await e(r,r+1));await e()};exports.bubbleSort=e;const o=async(t,e)=>{for(let o=0;o<t.length;o++){let r=o;for(let a=o+1;a<t.length;a++)await e(a,r),t[a]<t[r]&&(r=a);[t[o],t[r]]=[t[r],t[o]],await e(o,r)}await e()};exports.selectionSort=o;const r=async(t,e)=>{for(let o=0;o<t.length;o++)for(let r=o;r>0&&t[r-1]>t[r];r--)await e(r-1,r),[t[r-1],t[r]]=[t[r],t[r-1]],await e(r-1,r);await e()};exports.insertionSort=r;
},{}],"K0yk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.run=void 0;const e=(e,t)=>new Promise(o=>setTimeout(()=>{e(),o()},t));exports.run=e;
},{}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css");var e=require("./algorithms"),t=require("./utils");const s="red",n="green",r=100,l=10,a=(e,t)=>{const s=document.createElement("ul");for(let n=0;n<e.length;n++){const r=document.createElement("li");r.style.height=`${e[n]*(100/e.length)}%`,r.style.width=`${100/e.length}%`,s.appendChild(r),t[n]=r}document.getElementById("app").appendChild(s)},i=(e,n)=>{let r=[];return(...l)=>(0,t.run)(()=>{for(const t of r)n[t].classList.remove(s),n[t].style.height=`${e[t]*(100/n.length)}%`;for(const t of l)n[t].classList.add(s),n[t].style.height=`${e[t]*(100/n.length)}%`;r=l},10)},c=async e=>{await(0,t.run)(()=>{e[0].classList.add(s)},10);let r=e[0];for(const l of e.slice(1))await(0,t.run)(()=>{r.classList.replace(s,n),l.classList.add(s),r=l},10);await(0,t.run)(()=>{e[e.length-1].classList.replace(s,n)},10)},o=async t=>{const s=new Array(100);(0,e.randomize)(s);const n=new Array(100);a(s,n),await t(s,i(s,n)),c(n)};o(e.bubbleSort),o(e.selectionSort),o(e.insertionSort);
},{"./styles.css":"D9Nj","./algorithms":"mGa6","./utils":"K0yk"}]},{},["H99C"], null)
//# sourceMappingURL=/src.15c59090.js.map