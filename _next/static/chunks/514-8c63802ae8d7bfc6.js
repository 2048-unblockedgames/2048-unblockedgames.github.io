"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[514],{5800:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(7401).A)("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]])},3140:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(7401).A)("Gamepad",[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]])},2104:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(7401).A)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]])},853:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(7401).A)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},7725:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(7401).A)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]])},6046:(e,t,r)=>{var n=r(6658);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},7970:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let n=r(306),i=r(9955),o=r(5155),a=i._(r(2115)),l=n._(r(7650)),s=n._(r(6107)),d=r(666),u=r(1159),c=r(3621);r(2363);let f=r(3576),m=n._(r(5514)),p=r(5353),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/unblocked-games/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,n,i,o,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function y(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let v=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:l,width:s,decoding:d,className:u,style:c,fetchPriority:f,placeholder:m,loading:h,unoptimized:v,fill:b,onLoadRef:w,onLoadingCompleteRef:_,setBlurComplete:S,setShowAltText:x,sizesInput:C,onLoad:k,onError:j,...P}=e,E=(0,a.useCallback)(e=>{e&&(j&&(e.src=e.src),e.complete&&g(e,m,w,_,S,v,C))},[r,m,w,_,S,j,v,C]),M=(0,p.useMergedRef)(t,E);return(0,o.jsx)("img",{...P,...y(f),loading:h,width:s,height:l,decoding:d,"data-nimg":b?"fill":"1",className:u,style:c,sizes:i,srcSet:n,src:r,ref:M,onLoad:e=>{g(e.currentTarget,m,w,_,S,v,C)},onError:e=>{x(!0),"empty"!==m&&S(!0),j&&j(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...y(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let w=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),n=(0,a.useContext)(c.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=h||n||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:s}=e,p=(0,a.useRef)(l);(0,a.useEffect)(()=>{p.current=l},[l]);let g=(0,a.useRef)(s);(0,a.useEffect)(()=>{g.current=s},[s]);let[y,w]=(0,a.useState)(!1),[_,S]=(0,a.useState)(!1),{props:x,meta:C}=(0,d.getImgProps)(e,{defaultLoader:m.default,imgConf:i,blurComplete:y,showAltText:_});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{...x,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:p,onLoadingCompleteRef:g,setBlurComplete:w,setShowAltText:S,sizesInput:e.sizes,ref:t}),C.priority?(0,o.jsx)(b,{isAppRouter:!r,imgAttributes:x}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3003:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(306)._(r(2115)).default.createContext({})},675:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},666:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(2363);let n=r(5859),i=r(1159);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,s,d,{src:u,sizes:c,unoptimized:f=!1,priority:m=!1,loading:p,className:h,quality:g,width:y,height:v,fill:b=!1,style:w,overrideSrc:_,onLoad:S,onLoadingComplete:x,placeholder:C="empty",blurDataURL:k,fetchPriority:j,decoding:P="async",layout:E,objectFit:M,objectPosition:O,lazyBoundary:A,lazyRoot:z,...I}=e,{imgConf:T,showAltText:R,blurComplete:D,defaultLoader:L}=t,N=T||i.imageConfigDefault;if("allSizes"in N)l=N;else{let e=[...N.deviceSizes,...N.imageSizes].sort((e,t)=>e-t),t=N.deviceSizes.sort((e,t)=>e-t);l={...N,allSizes:e,deviceSizes:t}}if(void 0===L)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let U=I.loader||L;delete I.loader,delete I.srcSet;let F="__next_img_default"in U;if(F){if("custom"===l.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:r,...n}=t;return e(n)}}if(E){"fill"===E&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!c&&(c=t)}let G="",W=a(y),B=a(v);if((r=u)&&"object"==typeof r&&(o(r)||void 0!==r.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,d=e.blurHeight,k=k||e.blurDataURL,G=e.src,!b){if(W||B){if(W&&!B){let t=W/e.width;B=Math.round(e.height*t)}else if(!W&&B){let t=B/e.height;W=Math.round(e.width*t)}}else W=e.width,B=e.height}}let q=!m&&("lazy"===p||void 0===p);(!(u="string"==typeof u?u:G)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,q=!1),l.unoptimized&&(f=!0),F&&!l.dangerouslyAllowSVG&&u.split("?",1)[0].endsWith(".svg")&&(f=!0);let H=a(g),V=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:O}:{},R?{}:{color:"transparent"},w),J=D||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:W,heightInt:B,blurWidth:s,blurHeight:d,blurDataURL:k||"",objectFit:V.objectFit})+'")':'url("'+C+'")',K=J?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},$=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:d}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),u=s.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:s.map((e,n)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===d?e:n+1)+d).join(", "),src:l({config:t,src:r,quality:o,width:s[u]})}}({config:l,src:u,unoptimized:f,width:W,quality:H,sizes:c,loader:U});return{props:{...I,loading:q?"lazy":p,fetchPriority:j,width:W,height:B,decoding:P,className:h,style:{...V,...K},sizes:$.sizes,srcSet:$.srcSet,src:_||$.src},meta:{unoptimized:f,priority:m,placeholder:C,fill:b}}}},6107:(e,t,r)=>{var n=r(2818);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return f}});let i=r(306),o=r(9955),a=r(5155),l=o._(r(2115)),s=i._(r(1172)),d=r(3003),u=r(1147),c=r(675);function f(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function m(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(2363);let p=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(m,[]).reverse().concat(f(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:i})})}let g=function(e){let{children:t}=e,r=(0,l.useContext)(d.AmpStateContext),n=(0,l.useContext)(u.HeadManagerContext);return(0,a.jsx)(s.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5859:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=n?40*n:t,s=i?40*i:r,d=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3621:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let n=r(306)._(r(2115)),i=r(1159),o=n.default.createContext(i.imageConfigDefault)},1159:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},5514:(e,t)=>{function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)+(r.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},3576:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(306)._(r(2115)).default.createContext(null)},1172:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(2115),i="undefined"==typeof window,o=i?()=>{}:n.useLayoutEffect,a=i?()=>{}:n.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}if(i){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),l()}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},6195:(e,t,r)=>{r.d(t,{b:()=>l});var n=r(2115),i=r(3360),o=r(5155),a=n.forwardRef((e,t)=>(0,o.jsx)(i.sG.label,{...e,ref:t,onMouseDown:t=>{var r;t.target.closest("button, input, select, textarea")||(null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));a.displayName="Label";var l=a},7113:(e,t,r)=>{r.d(t,{D:()=>u,N:()=>c});var n=r(2115),i=(e,t,r,n,i,o,a,l)=>{let s=document.documentElement,d=["light","dark"];function u(t){(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,n=r&&o?i.map(e=>o[e]||e):i;r?(s.classList.remove(...n),s.classList.add(o&&o[t]?o[t]:t)):s.setAttribute(e,t)}),l&&d.includes(t)&&(s.style.colorScheme=t)}if(n)u(n);else try{let e=localStorage.getItem(t)||r,n=a&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;u(n)}catch(e){}},o=["light","dark"],a="(prefers-color-scheme: dark)",l="undefined"==typeof window,s=n.createContext(void 0),d={setTheme:e=>{},themes:[]},u=()=>{var e;return null!=(e=n.useContext(s))?e:d},c=e=>n.useContext(s)?n.createElement(n.Fragment,null,e.children):n.createElement(m,{...e}),f=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:i=!0,enableColorScheme:l=!0,storageKey:d="theme",themes:u=f,defaultTheme:c=i?"system":"light",attribute:m="data-theme",value:v,children:b,nonce:w,scriptProps:_}=e,[S,x]=n.useState(()=>h(d,c)),[C,k]=n.useState(()=>"system"===S?y():S),j=v?Object.values(v):u,P=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&i&&(t=y());let n=v?v[t]:t,a=r?g(w):null,s=document.documentElement,d=e=>{"class"===e?(s.classList.remove(...j),n&&s.classList.add(n)):e.startsWith("data-")&&(n?s.setAttribute(e,n):s.removeAttribute(e))};if(Array.isArray(m)?m.forEach(d):d(m),l){let e=o.includes(c)?c:null,r=o.includes(t)?t:e;s.style.colorScheme=r}null==a||a()},[w]),E=n.useCallback(e=>{let t="function"==typeof e?e(S):e;x(t);try{localStorage.setItem(d,t)}catch(e){}},[S]),M=n.useCallback(e=>{k(y(e)),"system"===S&&i&&!t&&P("system")},[S,t]);n.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(M),M(e),()=>e.removeListener(M)},[M]),n.useEffect(()=>{let e=e=>{e.key===d&&(e.newValue?x(e.newValue):E(c))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[E]),n.useEffect(()=>{P(null!=t?t:S)},[t,S]);let O=n.useMemo(()=>({theme:S,setTheme:E,forcedTheme:t,resolvedTheme:"system"===S?C:S,themes:i?[...u,"system"]:u,systemTheme:i?C:void 0}),[S,E,t,C,i,u]);return n.createElement(s.Provider,{value:O},n.createElement(p,{forcedTheme:t,storageKey:d,attribute:m,enableSystem:i,enableColorScheme:l,defaultTheme:c,value:v,themes:u,nonce:w,scriptProps:_}),b)},p=n.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:o,enableSystem:a,enableColorScheme:l,defaultTheme:s,value:d,themes:u,nonce:c,scriptProps:f}=e,m=JSON.stringify([o,r,s,t,u,d,a,l]).slice(1,-1);return n.createElement("script",{...f,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?c:"",dangerouslySetInnerHTML:{__html:"(".concat(i.toString(),")(").concat(m,")")}})}),h=(e,t)=>{let r;if(!l){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},g=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},y=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")}}]);