"use strict";var precacheConfig=[["/081e5e80dcab98f8c4f259c2e7149de3.gif","081e5e80dcab98f8c4f259c2e7149de3"],["/0ea7d965d4ac88295549c02312fb58d1.jpg","0ea7d965d4ac88295549c02312fb58d1"],["/23c893eaa8caee50a6d736679fdc4374.jpg","23c893eaa8caee50a6d736679fdc4374"],["/264fba8437f6a3773f5adc11ca8f7825.gif","264fba8437f6a3773f5adc11ca8f7825"],["/5d4108f28cb41244ec50c6e61ca21d45.gif","5d4108f28cb41244ec50c6e61ca21d45"],["/6605af8470e2de325fcab1f59e1ce67a.gif","6605af8470e2de325fcab1f59e1ce67a"],["/6d3994d5adf270a08f4c07076ec11ce5.gif","6d3994d5adf270a08f4c07076ec11ce5"],["/7ea7f6035868c278083e0fb8ff1204cd.png","7ea7f6035868c278083e0fb8ff1204cd"],["/a9052a3f785171a2d3f0d05a5243336c.gif","a9052a3f785171a2d3f0d05a5243336c"],["/a911b14c09160e67323f8d1636e8c1fc.gif","a911b14c09160e67323f8d1636e8c1fc"],["/assets/ballisticbreaker.jpg","f7acf9c0573eec4634b879292f1123d6"],["/assets/downloads-bg.jpg","cc21d65a246542d885a604119623d9b6"],["/assets/elpipe.png","7ea7f6035868c278083e0fb8ff1204cd"],["/assets/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["/assets/grayscale.js","cf0c6eede7253521bdfea6a9a949db9a"],["/assets/icons/android-chrome-192x192.png","59e221032ab061cad83b6ce2bcddbde8"],["/assets/icons/android-chrome-512x512.png","cf3fdf7af60a294d6d3f48cb7ad82488"],["/assets/icons/apple-touch-icon.png","a0e46feb3cc577478b127936e739dd08"],["/assets/icons/favicon-16x16.png","d712b605ed58419c7e6d4ab885d147b7"],["/assets/icons/favicon-32x32.png","2f7ce797cf8f198dedb9a9f38b7ef13b"],["/assets/icons/mstile-150x150.png","ba817517b2c4e1ba1ce802c4d4fafdb4"],["/assets/intro-bg.jpg","23c893eaa8caee50a6d736679fdc4374"],["/assets/jquery.min.js","4b57cf46dc8cb95c4cca54afc85e9540"],["/assets/popper.js","8925116b63282ad29fe2259ab4768694"],["/assets/script.min.js","9fd3637c22238480f4d199585a9b2174"],["/assets/scroll.js","d41d8cd98f00b204e9800998ecf8427e"],["/assets/submarine supertanker.png","fb43252269f8261b65019f14a76f9109"],["/assets/team/adam.gif","6d3994d5adf270a08f4c07076ec11ce5"],["/assets/team/jake.gif","081e5e80dcab98f8c4f259c2e7149de3"],["/assets/team/james.gif","5d4108f28cb41244ec50c6e61ca21d45"],["/assets/team/joel.gif","a911b14c09160e67323f8d1636e8c1fc"],["/assets/team/kaela.gif","a9052a3f785171a2d3f0d05a5243336c"],["/assets/team/kin.gif","264fba8437f6a3773f5adc11ca8f7825"],["/assets/team/peter.gif","ffd86e5eb00af15409aa855dad118899"],["/assets/team/philipp.gif","6605af8470e2de325fcab1f59e1ce67a"],["/assets/team/roger.jpg","0ea7d965d4ac88295549c02312fb58d1"],["/bundle.d9177.js","113845e27af0e7ec9df9d7074ce2249f"],["/cc21d65a246542d885a604119623d9b6.jpg","cc21d65a246542d885a604119623d9b6"],["/f7acf9c0573eec4634b879292f1123d6.jpg","f7acf9c0573eec4634b879292f1123d6"],["/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["/fb43252269f8261b65019f14a76f9109.png","fb43252269f8261b65019f14a76f9109"],["/ffd86e5eb00af15409aa855dad118899.gif","ffd86e5eb00af15409aa855dad118899"],["/index.html","154969bfa43bb2a8baa5731ac67d4ce4"],["/manifest.json","9221a95967eee7770beecfdd15d7913b"],["/route-404.chunk.ee716.js","c6f5084e3e0e2f0d694ada5ed0d9d40a"],["/route-contact.chunk.37b54.js","51ac24cba953e0827793934063765947"],["/route-home.chunk.ca1c9.js","1aecdfafdfb234f0684bb23e856c8612"],["/route-team.chunk.c4ce2.js","68c7e9dcc18f0cc4460f5ac07ddb1797"],["/route-thanks.chunk.20218.js","8d34236f0e66c45e9d4193273c17b72e"],["/style.151ee.css","f6b26f53fd41f9652445f51550c618c6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),s=createCacheKey(t,hashParamName,c,!1);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("index.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});