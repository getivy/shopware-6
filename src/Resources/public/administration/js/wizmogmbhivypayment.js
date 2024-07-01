!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/bundles/administration/",n(n.s="o58F")}({"1ik/":function(t,e){t.exports='<template>\n    <div>\n        <button id="ivypayment.config.button" class="sw-button" @click="check"> {{ $tc(\'ivy-api-test-button.button\') }}</button>\n    </div>\n</template>\n\n'},"6lCP":function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var a=Shopware.Classes.ApiService,l=Shopware.Application,f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}(l,t);var e,n,s,u=c(l);function l(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ivy-api-test";return i(this,l),u.call(this,t,e,n)}return e=l,(n=[{key:"check",value:function(t){var e=this.getBasicHeaders({});return this.httpClient.post("_action/".concat(this.getApiBasePath(),"/verify"),t,{headers:e}).then((function(t){return a.handleResponse(t)}))}}])&&o(e.prototype,n),s&&o(e,s),l}(a);l.addServiceProvider("ivyApiTest",(function(t){var e=l.getContainer("init");return new f(e.httpClient,t.loginService)}))},YvXM:function(t){t.exports=JSON.parse('{"ivy-api-test-button":{"title":"API Test","success":"Connection was successfully tested","error":"Connection could not be established. Please check the api key.","errorMissingFields":"Please fill in the following fields in your Ivy merchant account: ","button":"check integration"}}')},mykX:function(t){t.exports=JSON.parse('{"ivy-api-test-button":{"title":"Ivy API Test","success":"Verbindung wurde erfolgreich getestet","error":"Verbindung konnte nicht hergestellt werden. Bitte prüfe den API Key.","errorMissingFields":"In deinem Ivy Merchant Account müssen folgende Felder noch ausgefüllt werden:  ","button":"Zugangsdaten testen"}}')},o58F:function(t,e,n){"use strict";n.r(e);n("6lCP");var i=n("1ik/"),o=n.n(i),r=Shopware,c=r.Component,s=r.Mixin;c.register("ivy-api-production-test-button",{template:o.a,props:["label"],inject:["ivyApiTest"],mixins:[s.getByName("notification")],data:function(){return{isLoading:!1,isSaveSuccessful:!1}},computed:{pluginConfig:function(){for(var t=this.$parent;void 0===t.actualConfigData;)t=t.$parent;return t.actualConfigData.null}},methods:{saveFinish:function(){this.isSaveSuccessful=!1},check:function(){var t=this;this.isLoading=!0,this.pluginConfig.environment="Production",this.ivyApiTest.check(this.pluginConfig).then((function(e){e.success?(t.isSaveSuccessful=!0,t.createNotificationSuccess({title:t.$tc("ivy-api-test-button.title"),message:t.$tc("ivy-api-test-button.success")})):t.createNotificationError({title:t.$tc("ivy-api-test-button.title"),message:e.message.length>0?t.$tc("ivy-api-test-button.errorMissingFields")+e.message:t.$tc("ivy-api-test-button.error")}),t.isLoading=!1}))}}});var u=n("zEbA"),a=n.n(u),l=Shopware,f=l.Component,p=l.Mixin;f.register("ivy-api-sandbox-test-button",{template:a.a,props:["label"],inject:["ivyApiTest"],mixins:[p.getByName("notification")],data:function(){return console.log(1),{isLoading:!1,isSaveSuccessful:!1}},computed:{pluginConfig:function(){for(var t=this.$parent;void 0===t.actualConfigData;)t=t.$parent;return t.actualConfigData.null}},methods:{saveFinish:function(){this.isSaveSuccessful=!1},check:function(){var t=this;this.isLoading=!0,this.pluginConfig.environment="Sandbox",this.ivyApiTest.check(this.pluginConfig).then((function(e){e.success?(t.isSaveSuccessful=!0,t.createNotificationSuccess({title:t.$tc("ivy-api-test-button.title"),message:t.$tc("ivy-api-test-button.success")})):t.createNotificationError({title:t.$tc("ivy-api-test-button.title"),message:e.message.length>0?t.$tc("ivy-api-test-button.errorMissingFields")+e.message:t.$tc("ivy-api-test-button.error")}),t.isLoading=!1}))}}});var y=n("mykX"),v=n("YvXM");Shopware.Locale.extend("de-DE",y),Shopware.Locale.extend("en-GB",v)},zEbA:function(t,e){t.exports='<template>\n    <div>\n        <button id="ivypayment.config.button" class="sw-button" @click="check"> {{ $tc(\'ivy-api-test-button.button\') }}</button>\n    </div>\n</template>\n'}});