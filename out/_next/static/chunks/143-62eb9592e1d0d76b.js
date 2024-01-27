"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[143],{4879:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.306.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(2898).Z)("ArchiveRestore",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]])},3068:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(2265),o=n(713),i=n(4796);let a=i.w6?e=>{e()}:r.startTransition,u=e=>{let[,t]=(0,r.useState)({}),n=(0,r.useRef)(!1),o=(0,r.useRef)(e),a=(0,r.useRef)({data:!1,error:!1,isValidating:!1}),u=(0,r.useCallback)(e=>{let r=!1,i=o.current;for(let t in e)i[t]!==e[t]&&(i[t]=e[t],a.current[t]&&(r=!0));r&&!n.current&&t({})},[]);return(0,i.LI)(()=>(n.current=!1,()=>{n.current=!0})),[o,a.current,u]},l=(0,i.xD)(o.ZP,()=>(e,t,n={})=>{let{mutate:l}=(0,o.kY)(),s=(0,r.useRef)(e),c=(0,r.useRef)(t),d=(0,r.useRef)(n),f=(0,r.useRef)(0),[p,m,g]=u({data:i.i_,error:i.i_,isMutating:!1}),h=p.current,v=(0,r.useCallback)(async(e,t)=>{var n,r;let[o,u]=(0,i.qC)(s.current);if(!c.current)throw Error("Can’t trigger the mutation: missing fetcher.");if(!o)throw Error("Can’t trigger the mutation: missing key.");let p=(0,i.PM)((0,i.PM)({populateCache:!1,throwOnError:!0},d.current),t),m=(0,i.u3)();f.current=m,g({isMutating:!0});try{let t=await l(o,c.current(u,{arg:e}),(0,i.PM)(p,{throwOnError:!0}));return f.current<=m&&(a(()=>g({data:t,isMutating:!1,error:void 0})),null==(n=p.onSuccess)||n.call(p,t,o,p)),t}catch(e){if(f.current<=m&&(a(()=>g({error:e,isMutating:!1})),null==(r=p.onError)||r.call(p,e,o,p),p.throwOnError))throw e}},[]),w=(0,r.useCallback)(()=>{f.current=(0,i.u3)(),g({data:i.i_,error:i.i_,isMutating:!1})},[]);return(0,i.LI)(()=>{s.current=e,c.current=t,d.current=n}),{trigger:v,reset:w,get data(){return m.data=!0,h.data},get error(){return m.error=!0,h.error},get isMutating(){return m.isMutating=!0,h.isMutating}}})},9633:function(e,t,n){n.d(t,{d:function(){return N}});var r=n(8712),o=n(2265),i=o.createContext({drawerRef:{current:null},overlayRef:{current:null},scaleBackground:()=>{},onPress:()=>{},onRelease:()=>{},onDrag:()=>{},onNestedDrag:()=>{},onNestedOpenChange:()=>{},onNestedRelease:()=>{},openProp:void 0,dismissible:!1,isOpen:!1,keyboardIsOpen:{current:!1},snapPointsOffset:null,snapPoints:null,modal:!1,shouldFade:!1,activeSnapPoint:null,onOpenChange:()=>{},setActiveSnapPoint:()=>{},visible:!1,closeDrawer:()=>{},setVisible:()=>{}}),a=()=>o.useContext(i);!function(e,{insertAt:t}={}){if(!e||"undefined"==typeof document)return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}(`[vaul-drawer]{touch-action:none;transform:translate3d(0,100%,0);transition:transform .5s cubic-bezier(.32,.72,0,1)}.vaul-dragging .vaul-scrollable{overflow-y:hidden!important}[vaul-drawer][vaul-drawer-visible=true]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;top:100%;background:inherit;background-color:inherit;left:0;right:0;height:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);var u="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;function l(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}function s(){return c(/^iPhone/)||c(/^iPad/)||c(/^Mac/)&&navigator.maxTouchPoints>1}function c(e){return"undefined"!=typeof window&&null!=window.navigator?e.test(window.navigator.platform):void 0}var d="undefined"!=typeof document&&window.visualViewport;function f(e){let t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}function p(e){for(f(e)&&(e=e.parentElement);e&&!f(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}var m,g=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]),h=0;function v(e,t,n){let r=e.style[t];return e.style[t]=n,()=>{e.style[t]=r}}function w(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function y(e){let t=document.scrollingElement||document.documentElement;for(;e&&e!==t;){let t=p(e);if(t!==document.documentElement&&t!==document.body&&t!==e){let n=t.getBoundingClientRect().top,r=e.getBoundingClientRect().top;e.getBoundingClientRect().bottom>t.getBoundingClientRect().bottom&&(t.scrollTop+=r-n)}e=t.parentElement}}function b(e){return e instanceof HTMLInputElement&&!g.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}function E(...e){return o.useCallback(function(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}(...e),e)}var R=null,P=new WeakMap;function D(e,t,n=!1){if(!e||!(e instanceof HTMLElement)||!t)return;let r={};Object.entries(t).forEach(([t,n])=>{if(t.startsWith("--")){e.style.setProperty(t,n);return}r[t]=e.style[t],e.style[t]=n}),n||P.set(e,r)}function x(e,t){if(!e||!(e instanceof HTMLElement))return;let n=P.get(e);n&&(t?e.style[t]=n[t]:Object.entries(n).forEach(([t,n])=>{e.style[t]=n}))}function T(e){let t=window.getComputedStyle(e),n=t.transform||t.webkitTransform||t.mozTransform,r=n.match(/^matrix3d\((.+)\)$/);return r?parseFloat(r[1].split(", ")[13]):(r=n.match(/^matrix\((.+)\)$/))?parseFloat(r[1].split(", ")[5]):null}var S={DURATION:.5,EASE:[.32,.72,0,1]};function C(e){let t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...e)=>{var n;return null==(n=t.current)?void 0:n.call(t,...e)},[])}var O="vaul-dragging";function $({open:e,onOpenChange:t,children:n,shouldScaleBackground:a,onDrag:c,onRelease:f,snapPoints:g,nested:E,closeThreshold:P=.25,scrollLockTimeout:$=100,dismissible:A=!0,fadeFromIndex:M=g&&g.length-1,activeSnapPoint:N,setActiveSnapPoint:k,fixed:I,modal:L=!0,onClose:z}){var F;let[H=!1,B]=o.useState(!1),[U,j]=o.useState(!1),[W,q]=o.useState(!1),[Y,V]=o.useState(!1),[_,Z]=o.useState(!1),[X,G]=o.useState(!1),J=o.useRef(null),K=o.useRef(null),Q=o.useRef(null),ee=o.useRef(null),et=o.useRef(null),en=o.useRef(!1),er=o.useRef(null),eo=o.useRef(0),ei=o.useRef(!1),ea=o.useRef(0),eu=o.useRef(null),el=o.useRef((null==(F=eu.current)?void 0:F.getBoundingClientRect().height)||0),es=o.useRef(0),ec=o.useCallback(e=>{g&&e===eg.length-1&&(K.current=new Date)},[]),{activeSnapPoint:ed,activeSnapPointIndex:ef,setActiveSnapPoint:ep,onRelease:em,snapPointsOffset:eg,onDrag:eh,shouldFade:ev,getPercentageDragged:ew}=function({activeSnapPointProp:e,setActiveSnapPointProp:t,snapPoints:n,drawerRef:r,overlayRef:i,fadeFromIndex:a,onSnapPointChange:u}){let[l,s]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,i]=function({defaultProp:e,onChange:t}){let n=o.useState(e),[r]=n,i=o.useRef(r),a=C(t);return o.useEffect(()=>{i.current!==r&&(a(r),i.current=r)},[r,i,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,u=a?e:r,l=C(n);return[u,o.useCallback(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else i(t)},[a,e,i,l])]}({prop:e,defaultProp:null==n?void 0:n[0],onChange:t}),c=o.useMemo(()=>l===(null==n?void 0:n[n.length-1]),[n,l]),d=n&&n.length>0&&(a||0===a)&&!Number.isNaN(a)&&n[a]===l||!n,f=o.useMemo(()=>{var e;return null!=(e=null==n?void 0:n.findIndex(e=>e===l))?e:null},[n,l]),p=o.useMemo(()=>{var e;return null!=(e=null==n?void 0:n.map(e=>{let t="undefined"!=typeof window,n="string"==typeof e,r=0;n&&(r=parseInt(e,10));let o=n?r:t?e*window.innerHeight:0;return t?window.innerHeight-o:o}))?e:[]},[n]),m=o.useMemo(()=>null!==f?null==p?void 0:p[f]:null,[p,f]),g=o.useCallback(e=>{var t;let o=null!=(t=null==p?void 0:p.findIndex(t=>t===e))?t:null;u(o),D(r.current,{transition:`transform ${S.DURATION}s cubic-bezier(${S.EASE.join(",")})`,transform:`translate3d(0, ${e}px, 0)`}),p&&o!==p.length-1&&o!==a?D(i.current,{transition:`opacity ${S.DURATION}s cubic-bezier(${S.EASE.join(",")})`,opacity:"0"}):D(i.current,{transition:`opacity ${S.DURATION}s cubic-bezier(${S.EASE.join(",")})`,opacity:"1"}),s(null!==o?null==n?void 0:n[o]:null)},[r.current,n,p,a,i,s]);return o.useEffect(()=>{var t;if(e){let r=null!=(t=null==n?void 0:n.findIndex(t=>t===e))?t:null;p&&r&&"number"==typeof p[r]&&g(p[r])}},[e,n,p,g]),{isLastSnapPoint:c,activeSnapPoint:l,shouldFade:d,getPercentageDragged:function(e,t){if(!n||"number"!=typeof f||!p||void 0===a)return null;let r=f===a-1;if(f>=a&&t)return 0;if(r&&!t)return 1;if(!d&&!r)return null;let o=r?f+1:f-1,i=e/Math.abs(r?p[o]-p[o-1]:p[o+1]-p[o]);return r?1-i:i},setActiveSnapPoint:s,activeSnapPointIndex:f,onRelease:function({draggedDistance:e,closeDrawer:t,velocity:r,dismissible:o}){if(void 0===a)return;let u=m-e,l=f===a-1,s=0===f,d=e>0;if(l&&D(i.current,{transition:`opacity ${S.DURATION}s cubic-bezier(${S.EASE.join(",")})`}),r>2&&!d){o?t():g(p[0]);return}if(r>2&&d&&p&&n){g(p[n.length-1]);return}let h=null==p?void 0:p.reduce((e,t)=>"number"!=typeof e||"number"!=typeof t?e:Math.abs(t-u)<Math.abs(e-u)?t:e);if(r>.4&&Math.abs(e)<.4*window.innerHeight){let e=d?1:-1;if(e>0&&c){g(p[n.length-1]);return}if(s&&e<0&&o&&t(),null===f)return;g(p[f+e]);return}g(h)},onDrag:function({draggedDistance:e}){null!==m&&D(r.current,{transform:`translate3d(0, ${m-e}px, 0)`})},snapPointsOffset:p}}({snapPoints:g,activeSnapPointProp:N,setActiveSnapPointProp:k,drawerRef:eu,fadeFromIndex:M,overlayRef:J,onSnapPointChange:ec});!function(e={}){let{isDisabled:t}=e;u(()=>{if(!t){let e,t,n,r,o,i;return 1==++h&&(m=s()?(t=0,n=window.pageXOffset,r=window.pageYOffset,o=l(v(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),v(document.documentElement,"overflow","hidden")),window.scrollTo(0,0),i=l(w(document,"touchstart",n=>{(e=p(n.target))===document.documentElement&&e===document.body||(t=n.changedTouches[0].pageY)},{passive:!1,capture:!0}),w(document,"touchmove",n=>{if(!e||e===document.documentElement||e===document.body){n.preventDefault();return}let r=n.changedTouches[0].pageY,o=e.scrollTop,i=e.scrollHeight-e.clientHeight;0!==i&&((o<=0&&r>t||o>=i&&r<t)&&n.preventDefault(),t=r)},{passive:!1,capture:!0}),w(document,"touchend",e=>{let t=e.target;b(t)&&t!==document.activeElement&&(e.preventDefault(),t.style.transform="translateY(-2000px)",t.focus(),requestAnimationFrame(()=>{t.style.transform=""}))},{passive:!1,capture:!0}),w(document,"focus",e=>{let t=e.target;b(t)&&(t.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{t.style.transform="",d&&(d.height<window.innerHeight?requestAnimationFrame(()=>{y(t)}):d.addEventListener("resize",()=>y(t),{once:!0}))}))},!0),w(window,"scroll",()=>{window.scrollTo(0,0)})),()=>{o(),i(),window.scrollTo(n,r)}):l(v(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),v(document.documentElement,"overflow","hidden"))),()=>{0==--h&&m()}}},[t])}({isDisabled:!H||_||!L||X||!U});let{restorePositionSetting:ey}=function({isOpen:e,modal:t,nested:n,hasBeenOpened:r}){let[i,a]=o.useState("undefined"!=typeof window?window.location.href:""),u=o.useRef(0);function l(){if(null!==R){let e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=R.position,document.body.style.top=R.top,document.body.style.left=R.left,document.body.style.height=R.height,document.body.style.right="unset",requestAnimationFrame(()=>{if(i!==window.location.href){a(window.location.href);return}window.scrollTo(t,e)}),R=null}}return o.useEffect(()=>{function e(){u.current=window.scrollY}return e(),window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),o.useEffect(()=>{n||!r||(e?(function(){if(null===R&&e){R={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left,height:document.body.style.height};let{scrollX:e,innerHeight:t}=window;document.body.style.setProperty("position","fixed","important"),document.body.style.top=`${-u.current}px`,document.body.style.left=`${-e}px`,document.body.style.right="0px",document.body.style.height="auto",setTimeout(()=>requestAnimationFrame(()=>{let e=t-window.innerHeight;e&&u.current>=t&&(document.body.style.top=`${-(u.current+e)}px`)}),300)}}(),t||setTimeout(()=>{l()},500)):l())},[e,r,i]),{restorePositionSetting:l}}({isOpen:H,modal:L,nested:E,hasBeenOpened:U});function eb(){return(window.innerWidth-26)/window.innerWidth}function eE(e,t){var n;let r=e,o=null==(n=window.getSelection())?void 0:n.toString(),i=eu.current?T(eu.current):null,a=new Date;if(K.current&&a.getTime()-K.current.getTime()<500)return!1;if(i>0)return!0;if(o&&o.length>0)return!1;if(et.current&&a.getTime()-et.current.getTime()<$&&0===i||t)return et.current=a,!1;for(;r;){if(r.scrollHeight>r.clientHeight){if(0!==r.scrollTop)return et.current=new Date,!1;if("dialog"===r.getAttribute("role"))break}r=r.parentNode}return!0}function eR(){eu.current&&(null==z||z(),D(eu.current,{transform:"translate3d(0, 100%, 0)",transition:`transform ${S.DURATION}s cubic-bezier(${S.EASE.join(",")})`}),D(J.current,{opacity:"0",transition:`opacity ${S.DURATION}s cubic-bezier(${S.EASE.join(",")})`}),eD(!1),setTimeout(()=>{q(!1),B(!1)},300),setTimeout(()=>{g&&ep(g[0])},1e3*S.DURATION))}function eP(){if(!eu.current)return;let e=document.querySelector("[vaul-drawer-wrapper]"),t=T(eu.current);D(eu.current,{transform:"translate3d(0, 0, 0)",transition:`transform ${S.DURATION}s cubic-bezier(${S.EASE.join(",")})`}),D(J.current,{transition:`opacity ${S.DURATION}s cubic-bezier(${S.EASE.join(",")})`,opacity:"1"}),a&&t&&t>0&&H&&D(e,{borderRadius:"8px",overflow:"hidden",transform:`scale(${eb()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top",transitionProperty:"transform, border-radius",transitionDuration:`${S.DURATION}s`,transitionTimingFunction:`cubic-bezier(${S.EASE.join(",")})`},!0)}function eD(e){let t=document.querySelector("[vaul-drawer-wrapper]");t&&a&&(e?(D(document.body,{background:"black"},!0),D(t,{borderRadius:"8px",overflow:"hidden",transform:`scale(${eb()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top",transitionProperty:"transform, border-radius",transitionDuration:`${S.DURATION}s`,transitionTimingFunction:`cubic-bezier(${S.EASE.join(",")})`})):(x(t,"overflow"),x(t,"transform"),x(t,"borderRadius"),D(t,{transitionProperty:"transform, border-radius",transitionDuration:`${S.DURATION}s`,transitionTimingFunction:`cubic-bezier(${S.EASE.join(",")})`})))}return o.useEffect(()=>()=>{eD(!1),ey()},[]),o.useEffect(()=>{var e;function t(){var e;if(eu.current&&(b(document.activeElement)||ei.current)){let t=(null==(e=window.visualViewport)?void 0:e.height)||0,n=window.innerHeight-t,r=eu.current.getBoundingClientRect().height||0;es.current||(es.current=r);let o=eu.current.getBoundingClientRect().top;if(Math.abs(ea.current-n)>60&&(ei.current=!ei.current),g&&g.length>0&&eg&&ef&&(n+=eg[ef]||0),ea.current=n,r>t||ei.current){let e=eu.current.getBoundingClientRect().height,r=e;e>t&&(r=t-26),I?eu.current.style.height=`${e-Math.max(n,0)}px`:eu.current.style.height=`${Math.max(r,t-o)}px`}else eu.current.style.height=`${es.current}px`;g&&g.length>0&&!ei.current?eu.current.style.bottom="0px":eu.current.style.bottom=`${Math.max(n,0)}px`}}return null==(e=window.visualViewport)||e.addEventListener("resize",t),()=>{var e;return null==(e=window.visualViewport)?void 0:e.removeEventListener("resize",t)}},[ef,g,eg]),o.useEffect(()=>{if(!H&&a){let e=setTimeout(()=>{x(document.body)},200);return()=>clearTimeout(e)}},[H,a]),o.useEffect(()=>{e?(B(!0),j(!0)):eR()},[e]),o.useEffect(()=>{Y&&(null==t||t(H))},[H]),o.useEffect(()=>{V(!0)},[]),o.useEffect(()=>{H&&(K.current=new Date,eD(!0))},[H]),o.useEffect(()=>{W&&eu.current.querySelectorAll("*").forEach(e=>{(e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth)&&e.classList.add("vaul-scrollable")})},[W]),o.createElement(r.fC,{modal:L,onOpenChange:n=>{if(void 0!==e){null==t||t(n);return}n?(j(!0),B(n)):eR()},open:H},o.createElement(i.Provider,{value:{visible:W,activeSnapPoint:ed,snapPoints:g,setActiveSnapPoint:ep,drawerRef:eu,overlayRef:J,scaleBackground:eD,onOpenChange:t,onPress:function(e){var t;(A||g)&&(!eu.current||eu.current.contains(e.target))&&(el.current=(null==(t=eu.current)?void 0:t.getBoundingClientRect().height)||0,Z(!0),Q.current=new Date,s()&&window.addEventListener("touchend",()=>en.current=!1,{once:!0}),e.target.setPointerCapture(e.pointerId),eo.current=e.screenY)},setVisible:q,onRelease:function(e){var t;if(!_||!eu.current)return;en.current&&b(e.target)&&e.target.blur(),eu.current.classList.remove(O),en.current=!1,Z(!1),ee.current=new Date;let n=T(eu.current);if(!eE(e.target,!1)||!n||Number.isNaN(n)||null===Q.current)return;let r=ee.current.getTime()-Q.current.getTime(),o=eo.current-e.screenY,i=Math.abs(o)/r;if(i>.05&&(G(!0),setTimeout(()=>{G(!1)},200)),g){em({draggedDistance:o,closeDrawer:eR,velocity:i,dismissible:A}),null==f||f(e,!0);return}if(o>0){eP(),null==f||f(e,!0);return}if(i>.4||n>=Math.min(null!=(t=eu.current.getBoundingClientRect().height)?t:0,window.innerHeight)*P){eR(),null==f||f(e,!1);return}null==f||f(e,!0),eP()},onDrag:function(e){if(_){let t=eo.current-e.screenY,n=t>0;if(g&&0===ef&&!A||!en.current&&!eE(e.target,n))return;if(eu.current.classList.add(O),en.current=!0,D(eu.current,{transition:"none"}),D(J.current,{transition:"none"}),g&&eh({draggedDistance:t}),n&&!g){let e=8*(Math.log(t+1)-2);D(eu.current,{transform:`translate3d(0, ${Math.min(-1*e,0)}px, 0)`});return}let r=Math.abs(t),o=document.querySelector("[vaul-drawer-wrapper]"),i=r/el.current,u=ew(r,n);null!==u&&(i=u);let l=1-i;if((ev||M&&ef===M-1)&&(null==c||c(e,i),D(J.current,{opacity:`${l}`,transition:"none"},!0)),o&&J.current&&a){let e=Math.min(eb()+i*(1-eb()),1),t=8-8*i,n=Math.max(0,14-14*i);D(o,{borderRadius:`${t}px`,transform:`scale(${e}) translate3d(0, ${n}px, 0)`,transition:"none"},!0)}g||D(eu.current,{transform:`translate3d(0, ${r}px, 0)`})}},dismissible:A,isOpen:H,shouldFade:ev,closeDrawer:eR,onNestedDrag:function(e,t){if(t<0)return;let n=(window.innerWidth-16)/window.innerWidth;D(eu.current,{transform:`scale(${n+t*(1-n)}) translate3d(0, ${-16+16*t}px, 0)`,transition:"none"})},onNestedOpenChange:function(e){let t=e?(window.innerWidth-16)/window.innerWidth:1;er.current&&window.clearTimeout(er.current),D(eu.current,{transition:`transform ${S.DURATION}s cubic-bezier(${S.EASE.join(",")})`,transform:`scale(${t}) translate3d(0, ${e?-16:0}px, 0)`}),!e&&eu.current&&(er.current=setTimeout(()=>{D(eu.current,{transition:"none",transform:`translate3d(0, ${T(eu.current)}px, 0)`})},500))},onNestedRelease:function(e,t){let n=t?(window.innerWidth-16)/window.innerWidth:1;t&&D(eu.current,{transition:`transform ${S.DURATION}s cubic-bezier(${S.EASE.join(",")})`,transform:`scale(${n}) translate3d(0, ${t?-16:0}px, 0)`})},keyboardIsOpen:ei,openProp:e,modal:L,snapPointsOffset:eg}},n))}var A=o.forwardRef(function({children:e,...t},n){let{overlayRef:i,snapPoints:u,onRelease:l,shouldFade:s,isOpen:c,visible:d}=a(),f=E(n,i),p=u&&u.length>0;return o.createElement(r.aV,{onMouseUp:l,ref:f,"vaul-drawer-visible":d?"true":"false","vaul-overlay":"","vaul-snap-points":c&&p?"true":"false","vaul-snap-points-overlay":c&&s?"true":"false",...t})});A.displayName="Drawer.Overlay";var M=o.forwardRef(function({onOpenAutoFocus:e,onPointerDownOutside:t,onAnimationEnd:n,style:i,...u},l){let{drawerRef:s,onPress:c,onRelease:d,onDrag:f,dismissible:p,keyboardIsOpen:m,snapPointsOffset:g,visible:h,closeDrawer:v,modal:w,openProp:y,onOpenChange:b,setVisible:R}=a(),P=E(l,s);return o.useEffect(()=>{R(!0)},[]),o.createElement(r.VY,{onOpenAutoFocus:t=>{e?e(t):(t.preventDefault(),s.current.focus())},onPointerDown:c,onPointerDownOutside:e=>{if(null==t||t(e),!w){e.preventDefault();return}m.current&&(m.current=!1),e.preventDefault(),null==b||b(!1),p&&void 0===y&&v()},onPointerMove:f,onPointerUp:d,ref:P,style:g&&g.length>0?{"--snap-point-height":`${g[0]}px`,...i}:i,...u,"vaul-drawer":"","vaul-drawer-visible":h?"true":"false"})});M.displayName="Drawer.Content";var N={Root:$,NestedRoot:function({onDrag:e,onOpenChange:t,...n}){let{onNestedDrag:r,onNestedOpenChange:i,onNestedRelease:u}=a();if(!r)throw Error("Drawer.NestedRoot must be placed in another drawer");return o.createElement($,{nested:!0,onClose:()=>{i(!1)},onDrag:(t,n)=>{r(t,n),null==e||e(t,n)},onOpenChange:e=>{e&&i(e),null==t||t(e)},onRelease:u,...n})},Content:M,Overlay:A,Trigger:r.xz,Portal:r.h_,Close:r.x8,Title:r.Dx,Description:r.dk}}}]);