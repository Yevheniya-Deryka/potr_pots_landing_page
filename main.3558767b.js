parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";window.addEventListener("hashchange",function(){"#nav-menu"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")});var e=document.querySelector(".form"),t=document.querySelectorAll(".js-test");function o(e){e.preventDefault(),t.forEach(function(e){e.value=""})}e.addEventListener("submit",o);var l=document.querySelector(".modal__button--1"),d=document.querySelector(".modal__card--1");l.addEventListener("click",function(){d.classList.toggle("modal__card--visible"),l.classList.toggle("modal__button--pressed")});var c=document.querySelector(".modal__button--2"),n=document.querySelector(".modal__card--2");c.addEventListener("click",function(){n.classList.toggle("modal__card--visible"),c.classList.toggle("modal__button--pressed")});var a=document.querySelector(".modal__button--3"),s=document.querySelector(".modal__card--3");a.addEventListener("click",function(){s.classList.toggle("modal__card--visible"),a.classList.toggle("modal__button--pressed")});var r=document.querySelector(".modal__button--4"),i=document.querySelector(".modal__card--4");r.addEventListener("click",function(){i.classList.toggle("modal__card--visible"),r.classList.toggle("modal__button--pressed")});var u=document.querySelector(".modal__button--5"),_=document.querySelector(".modal__card--5");u.addEventListener("click",function(){_.classList.toggle("modal__card--visible"),u.classList.toggle("modal__button--pressed")});var m=new Swiper(".swiper",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.3558767b.js.map