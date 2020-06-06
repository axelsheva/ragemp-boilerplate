!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).i18next=t()}(this,function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(n){return(t="function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)})(n)}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){n(e,t,r[t])})}return e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?s(e):n}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var g={type:"logger",log:function(e){this.output("log",e)},warn:function(e){this.output("warn",e)},error:function(e){this.output("error",e)},output:function(e,t){var n;console&&console[e]&&(n=console)[e].apply(n,p(t))}},h=new(function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,e),this.init(t,n)}return a(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||g,this.options=t,this.debug=t.debug}},{key:"setDebug",value:function(e){this.debug=e}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}},{key:"deprecate",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(e,t,n,r){return r&&!this.debug?null:("string"==typeof e[0]&&(e[0]="".concat(n).concat(this.prefix," ").concat(e[0])),this.logger[t](e))}},{key:"create",value:function(t){return new e(this.logger,r({},{prefix:"".concat(this.prefix,":").concat(t,":")},this.options))}}]),e}()),d=function(){function e(){o(this,e),this.observers={}}return a(e,[{key:"on",value:function(e,t){var n=this;return e.split(" ").forEach(function(e){n.observers[e]=n.observers[e]||[],n.observers[e].push(t)}),this}},{key:"off",value:function(e,t){var n=this;this.observers[e]&&this.observers[e].forEach(function(){if(t){var r=n.observers[e].indexOf(t);r>-1&&n.observers[e].splice(r,1)}else delete n.observers[e]})}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.observers[e]&&[].concat(this.observers[e]).forEach(function(e){e.apply(void 0,n)});this.observers["*"]&&[].concat(this.observers["*"]).forEach(function(t){t.apply(t,[e].concat(n))})}}]),e}();function v(){var e,t,n=new Promise(function(n,r){e=n,t=r});return n.resolve=e,n.reject=t,n}function y(e){return null==e?"":""+e}function m(e,t,n){function r(e){return e&&e.indexOf("###")>-1?e.replace(/###/g,"."):e}function o(){return!e||"string"==typeof e}for(var i="string"!=typeof t?[].concat(t):t.split(".");i.length>1;){if(o())return{};var a=r(i.shift());!e[a]&&n&&(e[a]=new n),e=e[a]}return o()?{}:{obj:e,k:r(i.shift())}}function b(e,t,n){var r=m(e,t,Object);r.obj[r.k]=n}function k(e,t){var n=m(e,t),r=n.obj,o=n.k;if(r)return r[o]}function x(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var S={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function w(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,function(e){return S[e]}):e}var O=function(e){function t(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};return o(this,t),n=u(this,l(t).call(this)),d.call(s(n)),n.data=e||{},n.options=r,void 0===n.options.keySeparator&&(n.options.keySeparator="."),n}return f(t,d),a(t,[{key:"addNamespaces",value:function(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}},{key:"removeNamespaces",value:function(e){var t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}},{key:"getResource",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator,i=[e,t];return n&&"string"!=typeof n&&(i=i.concat(n)),n&&"string"==typeof n&&(i=i.concat(o?n.split(o):n)),e.indexOf(".")>-1&&(i=e.split(".")),k(this.data,i)}},{key:"addResource",value:function(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},i=this.options.keySeparator;void 0===i&&(i=".");var a=[e,t];n&&(a=a.concat(i?n.split(i):n)),e.indexOf(".")>-1&&(r=t,t=(a=e.split("."))[1]),this.addNamespaces(t),b(this.data,a,r),o.silent||this.emit("added",e,t,n,r)}},{key:"addResources",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var o in n)"string"!=typeof n[o]&&"[object Array]"!==Object.prototype.toString.apply(n[o])||this.addResource(e,t,o,n[o],{silent:!0});r.silent||this.emit("added",e,t,n)}},{key:"addResourceBundle",value:function(e,t,n,o,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},s=[e,t];e.indexOf(".")>-1&&(o=n,n=t,t=(s=e.split("."))[1]),this.addNamespaces(t);var u=k(this.data,s)||{};o?function e(t,n,r){for(var o in n)o in t?"string"==typeof t[o]||t[o]instanceof String||"string"==typeof n[o]||n[o]instanceof String?r&&(t[o]=n[o]):e(t[o],n[o],r):t[o]=n[o];return t}(u,n,i):u=r({},u,n),b(this.data,s,u),a.silent||this.emit("added",e,t,n)}},{key:"removeResourceBundle",value:function(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}},{key:"hasResourceBundle",value:function(e,t){return void 0!==this.getResource(e,t)}},{key:"getResourceBundle",value:function(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?r({},{},this.getResource(e,t)):this.getResource(e,t)}},{key:"getDataByLanguage",value:function(e){return this.data[e]}},{key:"toJSON",value:function(){return this.data}}]),t}(),R={processors:{},addPostProcessor:function(e){this.processors[e.name]=e},handle:function(e,t,n,r,o){var i=this;return e.forEach(function(e){i.processors[e]&&(t=i.processors[e].process(t,n,r,o))}),t}},j=function(e){function n(e){var t,r,i,a,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o(this,n),t=u(this,l(n).call(this)),d.call(s(t)),r=["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat"],i=e,a=s(t),r.forEach(function(e){i[e]&&(a[e]=i[e])}),t.options=c,void 0===t.options.keySeparator&&(t.options.keySeparator="."),t.logger=h.create("translator"),t}return f(n,d),a(n,[{key:"changeLanguage",value:function(e){e&&(this.language=e)}},{key:"exists",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}},n=this.resolve(e,t);return n&&void 0!==n.res}},{key:"extractFromKey",value:function(e,t){var n=t.nsSeparator||this.options.nsSeparator;void 0===n&&(n=":");var r=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,o=t.ns||this.options.defaultNS;if(n&&e.indexOf(n)>-1){var i=e.split(n);(n!==r||n===r&&this.options.ns.indexOf(i[0])>-1)&&(o=i.shift()),e=i.join(r)}return"string"==typeof o&&(o=[o]),{key:e,namespaces:o}}},{key:"translate",value:function(e,n){var o=this;if("object"!==t(n)&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),n||(n={}),null==e)return"";Array.isArray(e)||(e=[String(e)]);var i=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator,a=this.extractFromKey(e[e.length-1],n),s=a.key,u=a.namespaces,l=u[u.length-1],c=n.lng||this.language,f=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&"cimode"===c.toLowerCase()){if(f){var p=n.nsSeparator||this.options.nsSeparator;return l+p+s}return s}var g=this.resolve(e,n),h=g&&g.res,d=g&&g.usedKey||s,v=g&&g.exactUsedKey||s,y=Object.prototype.toString.apply(h),m=void 0!==n.joinArrays?n.joinArrays:this.options.joinArrays,b=!this.i18nFormat||this.i18nFormat.handleAsObject;if(b&&h&&("string"!=typeof h&&"boolean"!=typeof h&&"number"!=typeof h)&&["[object Number]","[object Function]","[object RegExp]"].indexOf(y)<0&&("string"!=typeof m||"[object Array]"!==y)){if(!n.returnObjects&&!this.options.returnObjects)return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),this.options.returnedObjectHandler?this.options.returnedObjectHandler(d,h,n):"key '".concat(s," (").concat(this.language,")' returned an object instead of string.");if(i){var k="[object Array]"===y,x=k?[]:{},S=k?v:d;for(var w in h)if(Object.prototype.hasOwnProperty.call(h,w)){var O="".concat(S).concat(i).concat(w);x[w]=this.translate(O,r({},n,{joinArrays:!1,ns:u})),x[w]===O&&(x[w]=h[w])}h=x}}else if(b&&"string"==typeof m&&"[object Array]"===y)(h=h.join(m))&&(h=this.extendTranslation(h,e,n));else{var R=!1,j=!1;if(!this.isValidLookup(h)&&void 0!==n.defaultValue){if(R=!0,void 0!==n.count){var L=this.pluralResolver.getSuffix(c,n.count);h=n["defaultValue".concat(L)]}h||(h=n.defaultValue)}this.isValidLookup(h)||(j=!0,h=s);var N=n.defaultValue&&n.defaultValue!==h&&this.options.updateMissing;if(j||R||N){this.logger.log(N?"updateKey":"missingKey",c,l,s,N?n.defaultValue:h);var C=[],P=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if("fallback"===this.options.saveMissingTo&&P&&P[0])for(var E=0;E<P.length;E++)C.push(P[E]);else"all"===this.options.saveMissingTo?C=this.languageUtils.toResolveHierarchy(n.lng||this.language):C.push(n.lng||this.language);var F=function(e,t){o.options.missingKeyHandler?o.options.missingKeyHandler(e,l,t,N?n.defaultValue:h,N,n):o.backendConnector&&o.backendConnector.saveMissing&&o.backendConnector.saveMissing(e,l,t,N?n.defaultValue:h,N,n),o.emit("missingKey",e,l,t,h)};if(this.options.saveMissing){var A=void 0!==n.count&&"string"!=typeof n.count;this.options.saveMissingPlurals&&A?C.forEach(function(e){o.pluralResolver.getPluralFormsOfKey(e,s).forEach(function(t){return F([e],t)})}):F(C,s)}}h=this.extendTranslation(h,e,n,g),j&&h===s&&this.options.appendNamespaceToMissingKey&&(h="".concat(l,":").concat(s)),j&&this.options.parseMissingKeyHandler&&(h=this.options.parseMissingKeyHandler(h))}return h}},{key:"extendTranslation",value:function(e,t,n,o){var i=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,n,o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init(r({},n,{interpolation:r({},this.options.interpolation,n.interpolation)}));var a=n.replace&&"string"!=typeof n.replace?n.replace:n;this.options.interpolation.defaultVariables&&(a=r({},this.options.interpolation.defaultVariables,a)),e=this.interpolator.interpolate(e,a,n.lng||this.language,n),!1!==n.nest&&(e=this.interpolator.nest(e,function(){return i.translate.apply(i,arguments)},n)),n.interpolation&&this.interpolator.reset()}var s=n.postProcess||this.options.postProcess,u="string"==typeof s?[s]:s;return null!=e&&u&&u.length&&!1!==n.applyPostProcessor&&(e=R.handle(u,e,t,n,this)),e}},{key:"resolve",value:function(e){var t,n,r,o,i,a=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e&&(e=[e]),e.forEach(function(e){if(!a.isValidLookup(t)){var u=a.extractFromKey(e,s),l=u.key;n=l;var c=u.namespaces;a.options.fallbackNS&&(c=c.concat(a.options.fallbackNS));var f=void 0!==s.count&&"string"!=typeof s.count,p=void 0!==s.context&&"string"==typeof s.context&&""!==s.context,g=s.lngs?s.lngs:a.languageUtils.toResolveHierarchy(s.lng||a.language,s.fallbackLng);c.forEach(function(e){a.isValidLookup(t)||(i=e,g.forEach(function(n){if(!a.isValidLookup(t)){o=n;var i,u,c=l,g=[c];if(a.i18nFormat&&a.i18nFormat.addLookupKeys)a.i18nFormat.addLookupKeys(g,l,n,e,s);else f&&(i=a.pluralResolver.getSuffix(n,s.count)),f&&p&&g.push(c+i),p&&g.push(c+="".concat(a.options.contextSeparator).concat(s.context)),f&&g.push(c+=i);for(;u=g.pop();)a.isValidLookup(t)||(r=u,t=a.getResource(n,e,u,s))}}))})}}),{res:t,usedKey:n,exactUsedKey:r,usedLng:o,usedNS:i}}},{key:"isValidLookup",value:function(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}},{key:"getResource",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}}]),n}();function L(e){return e.charAt(0).toUpperCase()+e.slice(1)}var N=function(){function e(t){o(this,e),this.options=t,this.whitelist=this.options.whitelist||!1,this.logger=h.create("languageUtils")}return a(e,[{key:"getScriptPartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return null;var t=e.split("-");return 2===t.length?null:(t.pop(),this.formatLanguageCode(t.join("-")))}},{key:"getLanguagePartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return e;var t=e.split("-");return this.formatLanguageCode(t[0])}},{key:"formatLanguageCode",value:function(e){if("string"==typeof e&&e.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],n=e.split("-");return this.options.lowerCaseLng?n=n.map(function(e){return e.toLowerCase()}):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=L(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=L(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=L(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}},{key:"isWhitelisted",value:function(e){return("languageOnly"===this.options.load||this.options.nonExplicitWhitelist)&&(e=this.getLanguagePartFromCode(e)),!this.whitelist||!this.whitelist.length||this.whitelist.indexOf(e)>-1}},{key:"getFallbackCodes",value:function(e,t){if(!e)return[];if("string"==typeof e&&(e=[e]),"[object Array]"===Object.prototype.toString.apply(e))return e;if(!t)return e.default||[];var n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e.default),n||[]}},{key:"toResolveHierarchy",value:function(e,t){var n=this,r=this.getFallbackCodes(t||this.options.fallbackLng||[],e),o=[],i=function(e){e&&(n.isWhitelisted(e)?o.push(e):n.logger.warn("rejecting non-whitelisted language code: ".concat(e)))};return"string"==typeof e&&e.indexOf("-")>-1?("languageOnly"!==this.options.load&&i(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&i(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&i(this.getLanguagePartFromCode(e))):"string"==typeof e&&i(this.formatLanguageCode(e)),r.forEach(function(e){o.indexOf(e)<0&&i(n.formatLanguageCode(e))}),o}}]),e}(),C=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","id","ja","jbo","ka","kk","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he"],nr:[1,2,20,21],fc:22}],P={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(0===e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&e<=4?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:e<7?2:e<11?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0===e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(1==e?0:0===e||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(1===e?0:2===e?1:(e<0||e>10)&&e%10==0?2:3)}};var E=function(){function e(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,e),this.languageUtils=t,this.options=r,this.logger=h.create("pluralResolver"),this.rules=(n={},C.forEach(function(e){e.lngs.forEach(function(t){n[t]={numbers:e.nr,plurals:P[e.fc]}})}),n)}return a(e,[{key:"addRule",value:function(e,t){this.rules[e]=t}},{key:"getRule",value:function(e){return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}},{key:"needsPlural",value:function(e){var t=this.getRule(e);return t&&t.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(e,t){var n=this,r=[],o=this.getRule(e);return o?(o.numbers.forEach(function(o){var i=n.getSuffix(e,o);r.push("".concat(t).concat(i))}),r):r}},{key:"getSuffix",value:function(e,t){var n=this,r=this.getRule(e);if(r){var o=r.noAbs?r.plurals(t):r.plurals(Math.abs(t)),i=r.numbers[o];this.options.simplifyPluralSuffix&&2===r.numbers.length&&1===r.numbers[0]&&(2===i?i="plural":1===i&&(i=""));var a=function(){return n.options.prepend&&i.toString()?n.options.prepend+i.toString():i.toString()};return"v1"===this.options.compatibilityJSON?1===i?"":"number"==typeof i?"_plural_".concat(i.toString()):a():"v2"===this.options.compatibilityJSON?a():this.options.simplifyPluralSuffix&&2===r.numbers.length&&1===r.numbers[0]?a():this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString()}return this.logger.warn("no plural rule found for: ".concat(e)),""}}]),e}(),F=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,e),this.logger=h.create("interpolator"),this.init(t,!0)}return a(e,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(arguments.length>1?arguments[1]:void 0)&&(this.options=e,this.format=e.interpolation&&e.interpolation.format||function(e){return e}),e.interpolation||(e.interpolation={escapeValue:!0});var t=e.interpolation;this.escape=void 0!==t.escape?t.escape:w,this.escapeValue=void 0===t.escapeValue||t.escapeValue,this.useRawValueToEscape=void 0!==t.useRawValueToEscape&&t.useRawValueToEscape,this.prefix=t.prefix?x(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?x(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?x(t.nestingPrefix):t.nestingPrefixEscaped||x("$t("),this.nestingSuffix=t.nestingSuffix?x(t.nestingSuffix):t.nestingSuffixEscaped||x(")"),this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var e="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(e,"g");var t="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(t,"g");var n="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(n,"g")}},{key:"interpolate",value:function(e,t,n,r){var o,i,a,s=this;function u(e){return e.replace(/\$/g,"$$$$")}var l=function(e){if(e.indexOf(s.formatSeparator)<0)return k(t,e);var r=e.split(s.formatSeparator),o=r.shift().trim(),i=r.join(s.formatSeparator).trim();return s.format(k(t,o),i,n)};this.resetRegExp();var c=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler;for(a=0;(o=this.regexpUnescape.exec(e))&&(i=l(o[1].trim()),e=e.replace(o[0],i),this.regexpUnescape.lastIndex=0,!(++a>=this.maxReplaces)););for(a=0;o=this.regexp.exec(e);){if(void 0===(i=l(o[1].trim())))if("function"==typeof c){var f=c(e,o,r);i="string"==typeof f?f:""}else this.logger.warn("missed to pass in variable ".concat(o[1]," for interpolating ").concat(e)),i="";else"string"==typeof i||this.useRawValueToEscape||(i=y(i));if(i=this.escapeValue?u(this.escape(i)):u(i),e=e.replace(o[0],i),this.regexp.lastIndex=0,++a>=this.maxReplaces)break}return e}},{key:"nest",value:function(e,t){var n,o,i=r({},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{});function a(e,t){if(e.indexOf(",")<0)return e;var n=e.split(",");e=n.shift();var o=n.join(",");o=(o=this.interpolate(o,i)).replace(/'/g,'"');try{i=JSON.parse(o),t&&(i=r({},t,i))}catch(t){this.logger.error("failed parsing options string in nesting for key ".concat(e),t)}return e}for(i.applyPostProcessor=!1;n=this.nestingRegexp.exec(e);){if((o=t(a.call(this,n[1].trim(),i),i))&&n[0]===e&&"string"!=typeof o)return o;"string"!=typeof o&&(o=y(o)),o||(this.logger.warn("missed to resolve ".concat(n[1]," for nesting ").concat(e)),o=""),e=e.replace(n[0],o),this.regexp.lastIndex=0}return e}}]),e}();function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var T=function(e){function t(e,n,r){var i,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return o(this,t),i=u(this,l(t).call(this)),d.call(s(i)),i.backend=e,i.store=n,i.languageUtils=r.languageUtils,i.options=a,i.logger=h.create("backendConnector"),i.state={},i.queue=[],i.backend&&i.backend.init&&i.backend.init(r,a.backend,a),i}return f(t,d),a(t,[{key:"queueLoad",value:function(e,t,n,r){var o=this,i=[],a=[],s=[],u=[];return e.forEach(function(e){var r=!0;t.forEach(function(t){var s="".concat(e,"|").concat(t);!n.reload&&o.store.hasResourceBundle(e,t)?o.state[s]=2:o.state[s]<0||(1===o.state[s]?a.indexOf(s)<0&&a.push(s):(o.state[s]=1,r=!1,a.indexOf(s)<0&&a.push(s),i.indexOf(s)<0&&i.push(s),u.indexOf(t)<0&&u.push(t)))}),r||s.push(e)}),(i.length||a.length)&&this.queue.push({pending:a,loaded:{},errors:[],callback:r}),{toLoad:i,pending:a,toLoadLanguages:s,toLoadNamespaces:u}}},{key:"loaded",value:function(e,t,n){var r=A(e.split("|"),2),o=r[0],i=r[1];t&&this.emit("failedLoading",o,i,t),n&&this.store.addResourceBundle(o,i,n),this.state[e]=t?-1:2;var a={};this.queue.forEach(function(n){var r,s,u,l,c,f;r=n.loaded,s=i,l=m(r,[o],Object),c=l.obj,f=l.k,c[f]=c[f]||[],u&&(c[f]=c[f].concat(s)),u||c[f].push(s),function(e,t){for(var n=e.indexOf(t);-1!==n;)e.splice(n,1),n=e.indexOf(t)}(n.pending,e),t&&n.errors.push(t),0!==n.pending.length||n.done||(Object.keys(n.loaded).forEach(function(e){a[e]||(a[e]=[]),n.loaded[e].length&&n.loaded[e].forEach(function(t){a[e].indexOf(t)<0&&a[e].push(t)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(function(e){return!e.done})}},{key:"read",value:function(e,t,n){var r=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:250,a=arguments.length>5?arguments[5]:void 0;return e.length?this.backend[n](e,t,function(s,u){s&&u&&o<5?setTimeout(function(){r.read.call(r,e,t,n,o+1,2*i,a)},i):a(s,u)}):a(null,{})}},{key:"prepareLoading",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();"string"==typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]);var i=this.queueLoad(e,t,r,o);if(!i.toLoad.length)return i.pending.length||o(),null;i.toLoad.forEach(function(e){n.loadOne(e)})}},{key:"load",value:function(e,t,n){this.prepareLoading(e,t,{},n)}},{key:"reload",value:function(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}},{key:"loadOne",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=A(e.split("|"),2),o=r[0],i=r[1];this.read(o,i,"read",null,null,function(r,a){r&&t.logger.warn("".concat(n,"loading namespace ").concat(i," for language ").concat(o," failed"),r),!r&&a&&t.logger.log("".concat(n,"loaded namespace ").concat(i," for language ").concat(o),a),t.loaded(e,r,a)})}},{key:"saveMissing",value:function(e,t,n,o,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};this.backend&&this.backend.create&&this.backend.create(e,t,n,o,null,r({},a,{isUpdate:i})),e&&e[0]&&this.store.addResource(e[0],t,n,o)}}]),t}();function V(e){return"string"==typeof e.ns&&(e.ns=[e.ns]),"string"==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.whitelist&&e.whitelist.indexOf("cimode")<0&&(e.whitelist=e.whitelist.concat(["cimode"])),e}function U(){}return new(function(e){function n(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;if(o(this,n),e=u(this,l(n).call(this)),d.call(s(e)),e.options=V(t),e.services={},e.logger=h,e.modules={external:[]},r&&!e.isInitialized&&!t.isClone){if(!e.options.initImmediate)return e.init(t,r),u(e,s(e));setTimeout(function(){e.init(t,r)},0)}return e}return f(n,d),a(n,[{key:"init",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;function i(e){return e?"function"==typeof e?new e:e:null}if("function"==typeof n&&(o=n,n={}),this.options=r({},{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,whitelist:!1,nonExplicitWhitelist:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:function(){},parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){var n={};if("object"===t(e[1])&&(n=e[1]),"string"==typeof e[1]&&(n.defaultValue=e[1]),"string"==typeof e[2]&&(n.tDescription=e[2]),"object"===t(e[2])||"object"===t(e[3])){var r=e[3]||e[2];Object.keys(r).forEach(function(e){n[e]=r[e]})}return n},interpolation:{escapeValue:!0,format:function(e,t,n){return e},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",maxReplaces:1e3}},this.options,V(n)),this.format=this.options.interpolation.format,o||(o=U),!this.options.isClone){this.modules.logger?h.init(i(this.modules.logger),this.options):h.init(null,this.options);var a=new N(this.options);this.store=new O(this.options.resources,this.options);var s=this.services;s.logger=h,s.resourceStore=this.store,s.languageUtils=a,s.pluralResolver=new E(a,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),s.interpolator=new F(this.options),s.backendConnector=new T(i(this.modules.backend),s.resourceStore,s,this.options),s.backendConnector.on("*",function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e.emit.apply(e,[t].concat(r))}),this.modules.languageDetector&&(s.languageDetector=i(this.modules.languageDetector),s.languageDetector.init(s,this.options.detection,this.options)),this.modules.i18nFormat&&(s.i18nFormat=i(this.modules.i18nFormat),s.i18nFormat.init&&s.i18nFormat.init(this)),this.translator=new j(this.services,this.options),this.translator.on("*",function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e.emit.apply(e,[t].concat(r))}),this.modules.external.forEach(function(t){t.init&&t.init(e)})}["getResource","addResource","addResources","addResourceBundle","removeResourceBundle","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(function(t){e[t]=function(){var n;return(n=e.store)[t].apply(n,arguments)}});var u=v(),l=function(){e.changeLanguage(e.options.lng,function(t,n){e.isInitialized=!0,e.logger.log("initialized",e.options),e.emit("initialized",e.options),u.resolve(n),o(t,n)})};return this.options.resources||!this.options.initImmediate?l():setTimeout(l,0),u}},{key:"loadResources",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U;if(!this.options.resources||this.options.partialBundledLanguages){if(this.language&&"cimode"===this.language.toLowerCase())return t();var n=[],r=function(t){t&&e.services.languageUtils.toResolveHierarchy(t).forEach(function(e){n.indexOf(e)<0&&n.push(e)})};if(this.language)r(this.language);else this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function(e){return r(e)});this.options.preload&&this.options.preload.forEach(function(e){return r(e)}),this.services.backendConnector.load(n,this.options.ns,t)}else t(null)}},{key:"reloadResources",value:function(e,t,n){var r=v();return e||(e=this.languages),t||(t=this.options.ns),n||(n=U),this.services.backendConnector.reload(e,t,function(e){r.resolve(),n(e)}),r}},{key:"use",value:function(e){return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&R.addPostProcessor(e),"3rdParty"===e.type&&this.modules.external.push(e),this}},{key:"changeLanguage",value:function(e,t){var n=this,r=v();this.emit("languageChanging",e);var o=function(e){e&&(n.language=e,n.languages=n.services.languageUtils.toResolveHierarchy(e),n.translator.language||n.translator.changeLanguage(e),n.services.languageDetector&&n.services.languageDetector.cacheUserLanguage(e)),n.loadResources(function(o){!function(e,o){n.translator.changeLanguage(o),o&&(n.emit("languageChanged",o),n.logger.log("languageChanged",o)),r.resolve(function(){return n.t.apply(n,arguments)}),t&&t(e,function(){return n.t.apply(n,arguments)})}(o,e)})};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(o):o(e):o(this.services.languageDetector.detect()),r}},{key:"getFixedT",value:function(e,n){var o=this,i=function e(n,i){var a=r({},i);if("object"!==t(i)){for(var s=arguments.length,u=new Array(s>2?s-2:0),l=2;l<s;l++)u[l-2]=arguments[l];a=o.options.overloadTranslationOptionHandler([n,i].concat(u))}return a.lng=a.lng||e.lng,a.lngs=a.lngs||e.lngs,a.ns=a.ns||e.ns,o.t(n,a)};return"string"==typeof e?i.lng=e:i.lngs=e,i.ns=n,i}},{key:"t",value:function(){var e;return this.translator&&(e=this.translator).translate.apply(e,arguments)}},{key:"exists",value:function(){var e;return this.translator&&(e=this.translator).exists.apply(e,arguments)}},{key:"setDefaultNamespace",value:function(e){this.options.defaultNS=e}},{key:"loadNamespaces",value:function(e,t){var n=this,r=v();return this.options.ns?("string"==typeof e&&(e=[e]),e.forEach(function(e){n.options.ns.indexOf(e)<0&&n.options.ns.push(e)}),this.loadResources(function(e){r.resolve(),t&&t(e)}),r):(t&&t(),Promise.resolve())}},{key:"loadLanguages",value:function(e,t){var n=v();"string"==typeof e&&(e=[e]);var r=this.options.preload||[],o=e.filter(function(e){return r.indexOf(e)<0});return o.length?(this.options.preload=r.concat(o),this.loadResources(function(e){n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}},{key:"dir",value:function(e){if(e||(e=this.languages&&this.languages.length>0?this.languages[0]:this.language),!e)return"rtl";return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e))>=0?"rtl":"ltr"}},{key:"createInstance",value:function(){return new n(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)}},{key:"cloneInstance",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:U,i=r({},this.options,t,{isClone:!0}),a=new n(i);return["store","services","language"].forEach(function(t){a[t]=e[t]}),a.translator=new j(a.services,a.options),a.translator.on("*",function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];a.emit.apply(a,[e].concat(n))}),a.init(i,o),a.translator.options=a.options,a}}]),n}())});
