(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[398],{5167:function(e,t,n){Promise.resolve().then(n.bind(n,4681))},4681:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ee}});var r=n(7437),o=n(575),i=n(5671),a=n(8704);/**
 * @license lucide-react v0.306.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,n(2898).Z)("ArchiveRestore",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]]);var s=n(7625);function u(){return(0,r.jsx)(r.Fragment,{children:[void 0,void 0,void 0].map((e,t)=>(0,r.jsx)(s.O,{className:"w-full md:w-[360px] h-[164px]"},t))})}var c=n(2265),d=n(6216),f=c.createContext({drawerRef:{current:null},overlayRef:{current:null},scaleBackground:()=>{},onPress:()=>{},onRelease:()=>{},onDrag:()=>{},onNestedDrag:()=>{},onNestedOpenChange:()=>{},onNestedRelease:()=>{},openProp:void 0,dismissible:!1,isOpen:!1,keyboardIsOpen:{current:!1},snapPointsOffset:null,snapPoints:null,modal:!1,shouldFade:!1,activeSnapPoint:null,onOpenChange:()=>{},setActiveSnapPoint:()=>{},visible:!1,closeDrawer:()=>{},setVisible:()=>{}}),m=()=>c.useContext(f);!function(e,{insertAt:t}={}){if(!e||"undefined"==typeof document)return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}(`[vaul-drawer]{touch-action:none;transform:translate3d(0,100%,0);transition:transform .5s cubic-bezier(.32,.72,0,1)}.vaul-dragging .vaul-scrollable{overflow-y:hidden!important}[vaul-drawer][vaul-drawer-visible=true]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;top:100%;background:inherit;background-color:inherit;left:0;right:0;height:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);var p="undefined"!=typeof window?c.useLayoutEffect:c.useEffect;function g(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}function h(){return v(/^iPhone/)||v(/^iPad/)||v(/^Mac/)&&navigator.maxTouchPoints>1}function v(e){return"undefined"!=typeof window&&null!=window.navigator?e.test(window.navigator.platform):void 0}var w="undefined"!=typeof document&&window.visualViewport;function y(e){let t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}function b(e){for(y(e)&&(e=e.parentElement);e&&!y(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}var x,E=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]),R=0;function N(e,t,n){let r=e.style[t];return e.style[t]=n,()=>{e.style[t]=r}}function C(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function j(e){let t=document.scrollingElement||document.documentElement;for(;e&&e!==t;){let t=b(e);if(t!==document.documentElement&&t!==document.body&&t!==e){let n=t.getBoundingClientRect().top,r=e.getBoundingClientRect().top;e.getBoundingClientRect().bottom>t.getBoundingClientRect().bottom&&(t.scrollTop+=r-n)}e=t.parentElement}}function D(e){return e instanceof HTMLInputElement&&!E.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}function P(...e){return c.useCallback(function(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}(...e),e)}var T=null,S=new WeakMap;function O(e,t,n=!1){if(!e||!(e instanceof HTMLElement)||!t)return;let r={};Object.entries(t).forEach(([t,n])=>{if(t.startsWith("--")){e.style.setProperty(t,n);return}r[t]=e.style[t],e.style[t]=n}),n||S.set(e,r)}function A(e,t){if(!e||!(e instanceof HTMLElement))return;let n=S.get(e);n&&(t?e.style[t]=n[t]:Object.entries(n).forEach(([t,n])=>{e.style[t]=n}))}function $(e){let t=window.getComputedStyle(e),n=t.transform||t.webkitTransform||t.mozTransform,r=n.match(/^matrix3d\((.+)\)$/);return r?parseFloat(r[1].split(", ")[13]):(r=n.match(/^matrix\((.+)\)$/))?parseFloat(r[1].split(", ")[5]):null}var k={DURATION:.5,EASE:[.32,.72,0,1]};function I(e){let t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useMemo(()=>(...e)=>{var n;return null==(n=t.current)?void 0:n.call(t,...e)},[])}var F="vaul-dragging";function M({open:e,onOpenChange:t,children:n,shouldScaleBackground:r,onDrag:o,onRelease:i,snapPoints:a,nested:l,closeThreshold:s=.25,scrollLockTimeout:u=100,dismissible:m=!0,fadeFromIndex:v=a&&a.length-1,activeSnapPoint:y,setActiveSnapPoint:E,fixed:P,modal:S=!0,onClose:M}){var z;let[B=!1,H]=c.useState(!1),[L,W]=c.useState(!1),[U,q]=c.useState(!1),[Y,V]=c.useState(!1),[_,Z]=c.useState(!1),[J,X]=c.useState(!1),K=c.useRef(null),Q=c.useRef(null),G=c.useRef(null),ee=c.useRef(null),et=c.useRef(null),en=c.useRef(!1),er=c.useRef(null),eo=c.useRef(0),ei=c.useRef(!1),ea=c.useRef(0),el=c.useRef(null),es=c.useRef((null==(z=el.current)?void 0:z.getBoundingClientRect().height)||0),eu=c.useRef(0),ec=c.useCallback(e=>{a&&e===eg.length-1&&(Q.current=new Date)},[]),{activeSnapPoint:ed,activeSnapPointIndex:ef,setActiveSnapPoint:em,onRelease:ep,snapPointsOffset:eg,onDrag:eh,shouldFade:ev,getPercentageDragged:ew}=function({activeSnapPointProp:e,setActiveSnapPointProp:t,snapPoints:n,drawerRef:r,overlayRef:o,fadeFromIndex:i,onSnapPointChange:a}){let[l,s]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,o]=function({defaultProp:e,onChange:t}){let n=c.useState(e),[r]=n,o=c.useRef(r),i=I(t);return c.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}({defaultProp:t,onChange:n}),i=void 0!==e,a=i?e:r,l=I(n);return[a,c.useCallback(t=>{if(i){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else o(t)},[i,e,o,l])]}({prop:e,defaultProp:null==n?void 0:n[0],onChange:t}),u=c.useMemo(()=>l===(null==n?void 0:n[n.length-1]),[n,l]),d=n&&n.length>0&&(i||0===i)&&!Number.isNaN(i)&&n[i]===l||!n,f=c.useMemo(()=>{var e;return null!=(e=null==n?void 0:n.findIndex(e=>e===l))?e:null},[n,l]),m=c.useMemo(()=>{var e;return null!=(e=null==n?void 0:n.map(e=>{let t="undefined"!=typeof window,n="string"==typeof e,r=0;n&&(r=parseInt(e,10));let o=n?r:t?e*window.innerHeight:0;return t?window.innerHeight-o:o}))?e:[]},[n]),p=c.useMemo(()=>null!==f?null==m?void 0:m[f]:null,[m,f]),g=c.useCallback(e=>{var t;let l=null!=(t=null==m?void 0:m.findIndex(t=>t===e))?t:null;a(l),O(r.current,{transition:`transform ${k.DURATION}s cubic-bezier(${k.EASE.join(",")})`,transform:`translate3d(0, ${e}px, 0)`}),m&&l!==m.length-1&&l!==i?O(o.current,{transition:`opacity ${k.DURATION}s cubic-bezier(${k.EASE.join(",")})`,opacity:"0"}):O(o.current,{transition:`opacity ${k.DURATION}s cubic-bezier(${k.EASE.join(",")})`,opacity:"1"}),s(null!==l?null==n?void 0:n[l]:null)},[r.current,n,m,i,o,s]);return c.useEffect(()=>{var t;if(e){let r=null!=(t=null==n?void 0:n.findIndex(t=>t===e))?t:null;m&&r&&"number"==typeof m[r]&&g(m[r])}},[e,n,m,g]),{isLastSnapPoint:u,activeSnapPoint:l,shouldFade:d,getPercentageDragged:function(e,t){if(!n||"number"!=typeof f||!m||void 0===i)return null;let r=f===i-1;if(f>=i&&t)return 0;if(r&&!t)return 1;if(!d&&!r)return null;let o=r?f+1:f-1,a=e/Math.abs(r?m[o]-m[o-1]:m[o+1]-m[o]);return r?1-a:a},setActiveSnapPoint:s,activeSnapPointIndex:f,onRelease:function({draggedDistance:e,closeDrawer:t,velocity:r,dismissible:a}){if(void 0===i)return;let l=p-e,s=f===i-1,c=0===f,d=e>0;if(s&&O(o.current,{transition:`opacity ${k.DURATION}s cubic-bezier(${k.EASE.join(",")})`}),r>2&&!d){a?t():g(m[0]);return}if(r>2&&d&&m&&n){g(m[n.length-1]);return}let h=null==m?void 0:m.reduce((e,t)=>"number"!=typeof e||"number"!=typeof t?e:Math.abs(t-l)<Math.abs(e-l)?t:e);if(r>.4&&Math.abs(e)<.4*window.innerHeight){let e=d?1:-1;if(e>0&&u){g(m[n.length-1]);return}if(c&&e<0&&a&&t(),null===f)return;g(m[f+e]);return}g(h)},onDrag:function({draggedDistance:e}){null!==p&&O(r.current,{transform:`translate3d(0, ${p-e}px, 0)`})},snapPointsOffset:m}}({snapPoints:a,activeSnapPointProp:y,setActiveSnapPointProp:E,drawerRef:el,fadeFromIndex:v,overlayRef:K,onSnapPointChange:ec});!function(e={}){let{isDisabled:t}=e;p(()=>{if(!t){let e,t,n,r,o,i;return 1==++R&&(x=h()?(t=0,n=window.pageXOffset,r=window.pageYOffset,o=g(N(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),N(document.documentElement,"overflow","hidden")),window.scrollTo(0,0),i=g(C(document,"touchstart",n=>{(e=b(n.target))===document.documentElement&&e===document.body||(t=n.changedTouches[0].pageY)},{passive:!1,capture:!0}),C(document,"touchmove",n=>{if(!e||e===document.documentElement||e===document.body){n.preventDefault();return}let r=n.changedTouches[0].pageY,o=e.scrollTop,i=e.scrollHeight-e.clientHeight;0!==i&&((o<=0&&r>t||o>=i&&r<t)&&n.preventDefault(),t=r)},{passive:!1,capture:!0}),C(document,"touchend",e=>{let t=e.target;D(t)&&t!==document.activeElement&&(e.preventDefault(),t.style.transform="translateY(-2000px)",t.focus(),requestAnimationFrame(()=>{t.style.transform=""}))},{passive:!1,capture:!0}),C(document,"focus",e=>{let t=e.target;D(t)&&(t.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{t.style.transform="",w&&(w.height<window.innerHeight?requestAnimationFrame(()=>{j(t)}):w.addEventListener("resize",()=>j(t),{once:!0}))}))},!0),C(window,"scroll",()=>{window.scrollTo(0,0)})),()=>{o(),i(),window.scrollTo(n,r)}):g(N(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),N(document.documentElement,"overflow","hidden"))),()=>{0==--R&&x()}}},[t])}({isDisabled:!B||_||!S||J||!L});let{restorePositionSetting:ey}=function({isOpen:e,modal:t,nested:n,hasBeenOpened:r}){let[o,i]=c.useState("undefined"!=typeof window?window.location.href:""),a=c.useRef(0);function l(){if(null!==T){let e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=T.position,document.body.style.top=T.top,document.body.style.left=T.left,document.body.style.height=T.height,document.body.style.right="unset",requestAnimationFrame(()=>{if(o!==window.location.href){i(window.location.href);return}window.scrollTo(t,e)}),T=null}}return c.useEffect(()=>{function e(){a.current=window.scrollY}return e(),window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),c.useEffect(()=>{n||!r||(e?(function(){if(null===T&&e){T={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left,height:document.body.style.height};let{scrollX:e,innerHeight:t}=window;document.body.style.setProperty("position","fixed","important"),document.body.style.top=`${-a.current}px`,document.body.style.left=`${-e}px`,document.body.style.right="0px",document.body.style.height="auto",setTimeout(()=>requestAnimationFrame(()=>{let e=t-window.innerHeight;e&&a.current>=t&&(document.body.style.top=`${-(a.current+e)}px`)}),300)}}(),t||setTimeout(()=>{l()},500)):l())},[e,r,o]),{restorePositionSetting:l}}({isOpen:B,modal:S,nested:l,hasBeenOpened:L});function eb(){return(window.innerWidth-26)/window.innerWidth}function ex(e,t){var n;let r=e,o=null==(n=window.getSelection())?void 0:n.toString(),i=el.current?$(el.current):null,a=new Date;if(Q.current&&a.getTime()-Q.current.getTime()<500)return!1;if(i>0)return!0;if(o&&o.length>0)return!1;if(et.current&&a.getTime()-et.current.getTime()<u&&0===i||t)return et.current=a,!1;for(;r;){if(r.scrollHeight>r.clientHeight){if(0!==r.scrollTop)return et.current=new Date,!1;if("dialog"===r.getAttribute("role"))break}r=r.parentNode}return!0}function eE(){el.current&&(null==M||M(),O(el.current,{transform:"translate3d(0, 100%, 0)",transition:`transform ${k.DURATION}s cubic-bezier(${k.EASE.join(",")})`}),O(K.current,{opacity:"0",transition:`opacity ${k.DURATION}s cubic-bezier(${k.EASE.join(",")})`}),eN(!1),setTimeout(()=>{q(!1),H(!1)},300),setTimeout(()=>{a&&em(a[0])},1e3*k.DURATION))}function eR(){if(!el.current)return;let e=document.querySelector("[vaul-drawer-wrapper]"),t=$(el.current);O(el.current,{transform:"translate3d(0, 0, 0)",transition:`transform ${k.DURATION}s cubic-bezier(${k.EASE.join(",")})`}),O(K.current,{transition:`opacity ${k.DURATION}s cubic-bezier(${k.EASE.join(",")})`,opacity:"1"}),r&&t&&t>0&&B&&O(e,{borderRadius:"8px",overflow:"hidden",transform:`scale(${eb()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top",transitionProperty:"transform, border-radius",transitionDuration:`${k.DURATION}s`,transitionTimingFunction:`cubic-bezier(${k.EASE.join(",")})`},!0)}function eN(e){let t=document.querySelector("[vaul-drawer-wrapper]");t&&r&&(e?(O(document.body,{background:"black"},!0),O(t,{borderRadius:"8px",overflow:"hidden",transform:`scale(${eb()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top",transitionProperty:"transform, border-radius",transitionDuration:`${k.DURATION}s`,transitionTimingFunction:`cubic-bezier(${k.EASE.join(",")})`})):(A(t,"overflow"),A(t,"transform"),A(t,"borderRadius"),O(t,{transitionProperty:"transform, border-radius",transitionDuration:`${k.DURATION}s`,transitionTimingFunction:`cubic-bezier(${k.EASE.join(",")})`})))}return c.useEffect(()=>()=>{eN(!1),ey()},[]),c.useEffect(()=>{var e;function t(){var e;if(el.current&&(D(document.activeElement)||ei.current)){let t=(null==(e=window.visualViewport)?void 0:e.height)||0,n=window.innerHeight-t,r=el.current.getBoundingClientRect().height||0;eu.current||(eu.current=r);let o=el.current.getBoundingClientRect().top;if(Math.abs(ea.current-n)>60&&(ei.current=!ei.current),a&&a.length>0&&eg&&ef&&(n+=eg[ef]||0),ea.current=n,r>t||ei.current){let e=el.current.getBoundingClientRect().height,r=e;e>t&&(r=t-26),P?el.current.style.height=`${e-Math.max(n,0)}px`:el.current.style.height=`${Math.max(r,t-o)}px`}else el.current.style.height=`${eu.current}px`;a&&a.length>0&&!ei.current?el.current.style.bottom="0px":el.current.style.bottom=`${Math.max(n,0)}px`}}return null==(e=window.visualViewport)||e.addEventListener("resize",t),()=>{var e;return null==(e=window.visualViewport)?void 0:e.removeEventListener("resize",t)}},[ef,a,eg]),c.useEffect(()=>{if(!B&&r){let e=setTimeout(()=>{A(document.body)},200);return()=>clearTimeout(e)}},[B,r]),c.useEffect(()=>{e?(H(!0),W(!0)):eE()},[e]),c.useEffect(()=>{Y&&(null==t||t(B))},[B]),c.useEffect(()=>{V(!0)},[]),c.useEffect(()=>{B&&(Q.current=new Date,eN(!0))},[B]),c.useEffect(()=>{U&&el.current.querySelectorAll("*").forEach(e=>{(e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth)&&e.classList.add("vaul-scrollable")})},[U]),c.createElement(d.fC,{modal:S,onOpenChange:n=>{if(void 0!==e){null==t||t(n);return}n?(W(!0),H(n)):eE()},open:B},c.createElement(f.Provider,{value:{visible:U,activeSnapPoint:ed,snapPoints:a,setActiveSnapPoint:em,drawerRef:el,overlayRef:K,scaleBackground:eN,onOpenChange:t,onPress:function(e){var t;(m||a)&&(!el.current||el.current.contains(e.target))&&(es.current=(null==(t=el.current)?void 0:t.getBoundingClientRect().height)||0,Z(!0),G.current=new Date,h()&&window.addEventListener("touchend",()=>en.current=!1,{once:!0}),e.target.setPointerCapture(e.pointerId),eo.current=e.screenY)},setVisible:q,onRelease:function(e){var t;if(!_||!el.current)return;en.current&&D(e.target)&&e.target.blur(),el.current.classList.remove(F),en.current=!1,Z(!1),ee.current=new Date;let n=$(el.current);if(!ex(e.target,!1)||!n||Number.isNaN(n)||null===G.current)return;let r=ee.current.getTime()-G.current.getTime(),o=eo.current-e.screenY,l=Math.abs(o)/r;if(l>.05&&(X(!0),setTimeout(()=>{X(!1)},200)),a){ep({draggedDistance:o,closeDrawer:eE,velocity:l,dismissible:m}),null==i||i(e,!0);return}if(o>0){eR(),null==i||i(e,!0);return}if(l>.4||n>=Math.min(null!=(t=el.current.getBoundingClientRect().height)?t:0,window.innerHeight)*s){eE(),null==i||i(e,!1);return}null==i||i(e,!0),eR()},onDrag:function(e){if(_){let t=eo.current-e.screenY,n=t>0;if(a&&0===ef&&!m||!en.current&&!ex(e.target,n))return;if(el.current.classList.add(F),en.current=!0,O(el.current,{transition:"none"}),O(K.current,{transition:"none"}),a&&eh({draggedDistance:t}),n&&!a){let e=8*(Math.log(t+1)-2);O(el.current,{transform:`translate3d(0, ${Math.min(-1*e,0)}px, 0)`});return}let i=Math.abs(t),l=document.querySelector("[vaul-drawer-wrapper]"),s=i/es.current,u=ew(i,n);null!==u&&(s=u);let c=1-s;if((ev||v&&ef===v-1)&&(null==o||o(e,s),O(K.current,{opacity:`${c}`,transition:"none"},!0)),l&&K.current&&r){let e=Math.min(eb()+s*(1-eb()),1),t=8-8*s,n=Math.max(0,14-14*s);O(l,{borderRadius:`${t}px`,transform:`scale(${e}) translate3d(0, ${n}px, 0)`,transition:"none"},!0)}a||O(el.current,{transform:`translate3d(0, ${i}px, 0)`})}},dismissible:m,isOpen:B,shouldFade:ev,closeDrawer:eE,onNestedDrag:function(e,t){if(t<0)return;let n=(window.innerWidth-16)/window.innerWidth;O(el.current,{transform:`scale(${n+t*(1-n)}) translate3d(0, ${-16+16*t}px, 0)`,transition:"none"})},onNestedOpenChange:function(e){let t=e?(window.innerWidth-16)/window.innerWidth:1;er.current&&window.clearTimeout(er.current),O(el.current,{transition:`transform ${k.DURATION}s cubic-bezier(${k.EASE.join(",")})`,transform:`scale(${t}) translate3d(0, ${e?-16:0}px, 0)`}),!e&&el.current&&(er.current=setTimeout(()=>{O(el.current,{transition:"none",transform:`translate3d(0, ${$(el.current)}px, 0)`})},500))},onNestedRelease:function(e,t){let n=t?(window.innerWidth-16)/window.innerWidth:1;t&&O(el.current,{transition:`transform ${k.DURATION}s cubic-bezier(${k.EASE.join(",")})`,transform:`scale(${n}) translate3d(0, ${t?-16:0}px, 0)`})},keyboardIsOpen:ei,openProp:e,modal:S,snapPointsOffset:eg}},n))}var z=c.forwardRef(function({children:e,...t},n){let{overlayRef:r,snapPoints:o,onRelease:i,shouldFade:a,isOpen:l,visible:s}=m(),u=P(n,r),f=o&&o.length>0;return c.createElement(d.aV,{onMouseUp:i,ref:u,"vaul-drawer-visible":s?"true":"false","vaul-overlay":"","vaul-snap-points":l&&f?"true":"false","vaul-snap-points-overlay":l&&a?"true":"false",...t})});z.displayName="Drawer.Overlay";var B=c.forwardRef(function({onOpenAutoFocus:e,onPointerDownOutside:t,onAnimationEnd:n,style:r,...o},i){let{drawerRef:a,onPress:l,onRelease:s,onDrag:u,dismissible:f,keyboardIsOpen:p,snapPointsOffset:g,visible:h,closeDrawer:v,modal:w,openProp:y,onOpenChange:b,setVisible:x}=m(),E=P(i,a);return c.useEffect(()=>{x(!0)},[]),c.createElement(d.VY,{onOpenAutoFocus:t=>{e?e(t):(t.preventDefault(),a.current.focus())},onPointerDown:l,onPointerDownOutside:e=>{if(null==t||t(e),!w){e.preventDefault();return}p.current&&(p.current=!1),e.preventDefault(),null==b||b(!1),f&&void 0===y&&v()},onPointerMove:u,onPointerUp:s,ref:E,style:g&&g.length>0?{"--snap-point-height":`${g[0]}px`,...r}:r,...o,"vaul-drawer":"","vaul-drawer-visible":h?"true":"false"})});B.displayName="Drawer.Content";var H={Root:M,NestedRoot:function({onDrag:e,onOpenChange:t,...n}){let{onNestedDrag:r,onNestedOpenChange:o,onNestedRelease:i}=m();if(!r)throw Error("Drawer.NestedRoot must be placed in another drawer");return c.createElement(M,{nested:!0,onClose:()=>{o(!1)},onDrag:(t,n)=>{r(t,n),null==e||e(t,n)},onOpenChange:e=>{e&&o(e),null==t||t(e)},onRelease:i,...n})},Content:B,Overlay:z,Trigger:d.xz,Portal:d.h_,Close:d.x8,Title:d.Dx,Description:d.dk},L=n(2169);let W=e=>{let{shouldScaleBackground:t=!0,...n}=e;return(0,r.jsx)(H.Root,{shouldScaleBackground:t,...n})};W.displayName="Drawer",H.Trigger;let U=H.Portal;H.Close;let q=c.forwardRef((e,t)=>{let{className:n,...o}=e;return(0,r.jsx)(H.Overlay,{ref:t,className:(0,L.cn)("fixed inset-0 z-50 bg-black/80",n),...o})});q.displayName=H.Overlay.displayName;let Y=c.forwardRef((e,t)=>{let{className:n,children:o,...i}=e;return(0,r.jsxs)(U,{children:[(0,r.jsx)(q,{}),(0,r.jsxs)(H.Content,{ref:t,className:(0,L.cn)("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",n),...i,children:[(0,r.jsx)("div",{className:"mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"}),o]})]})});Y.displayName="DrawerContent";let V=e=>{let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,L.cn)("grid gap-1.5 p-4 text-center sm:text-left",t),...n})};V.displayName="DrawerHeader";let _=e=>{let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,L.cn)("mt-auto flex flex-col gap-2 p-4",t),...n})};_.displayName="DrawerFooter";let Z=c.forwardRef((e,t)=>{let{className:n,...o}=e;return(0,r.jsx)(H.Title,{ref:t,className:(0,L.cn)("text-lg font-semibold leading-none tracking-tight",n),...o})});Z.displayName=H.Title.displayName;let J=c.forwardRef((e,t)=>{let{className:n,...o}=e;return(0,r.jsx)(H.Description,{ref:t,className:(0,L.cn)("text-sm text-muted-foreground",n),...o})});J.displayName=H.Description.displayName;var X=n(4754),K=n.n(X),Q=()=>{let e=(0,c.useRef)(null),t=(0,c.useRef)(null),[n,o]=(0,c.useState)(void 0);return(0,c.useEffect)(()=>{var n;let r=(e,n,r)=>{var o;let i=null===(o=t.current)||void 0===o?void 0:o.getContext("2d");i&&(i.beginPath(),i.moveTo(e.x,e.y),i.lineTo(n.x,n.y),i.lineWidth=4,i.strokeStyle=r,i.stroke())},i=()=>{if(!e.current||!t.current)return;let n=e.current;if(n.readyState===n.HAVE_ENOUGH_DATA){t.current.hidden=!1;let e=t.current,i=n.videoWidth,a=n.videoHeight;if(e){e.height=a,e.width=i;let t=e.getContext("2d");if(t){t.drawImage(n,0,0,i,a);let e=t.getImageData(0,0,i,a),l=K()(e.data,e.width,e.height,{inversionAttempts:"dontInvert"});l?(r(l.location.topLeftCorner,l.location.topRightCorner,"#FF3B58"),r(l.location.topRightCorner,l.location.bottomRightCorner,"#FF3B58"),r(l.location.bottomRightCorner,l.location.bottomLeftCorner,"#FF3B58"),r(l.location.bottomLeftCorner,l.location.topLeftCorner,"#FF3B58"),o(l.data)):console.log("No QR code detected.")}}}requestAnimationFrame(i)};navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then(t=>{e.current&&(e.current.srcObject=t,e.current.setAttribute("playsinline","true"),e.current.play(),requestAnimationFrame(i))});let a=null===(n=e.current)||void 0===n?void 0:n.srcObject;return()=>{a&&a.getTracks().forEach(e=>{e.stop()})}},[]),(0,r.jsxs)("div",{children:[(0,r.jsx)("canvas",{ref:t,className:"w-full mb-4"}),(0,r.jsx)("video",{ref:e,id:"video",playsInline:!0,hidden:!0,autoPlay:!0}),(0,r.jsx)("b",{children:"Data:"})," ",(0,r.jsx)("pre",{children:JSON.stringify(n)})]})},G=e=>{let{selectedBox:t,handleClose:n}=e;return(0,r.jsx)(W,{open:null!=t,onClose:n,children:(0,r.jsxs)(Y,{children:[(0,r.jsxs)(V,{className:"text-left",children:[(0,r.jsx)(Z,{children:null==t?void 0:t.name}),(0,r.jsxs)(J,{children:["Scannez chaque bo\xeete avant de la ranger dans la bo\xeete"," ",null==t?void 0:t.name,"."]})]}),(0,r.jsx)("div",{className:"min-h-[50svh] p-4",children:(0,r.jsx)(Q,{})}),(0,r.jsxs)(_,{className:"pt-2",onClick:n,children:[(0,r.jsx)(o.z,{children:"J'ai termin\xe9"}),(0,r.jsx)(o.z,{variant:"outline",children:"Annuler"})]})]})})};function ee(){let{data:e,isLoading:t}=(0,a.Z)(),[n,s]=(0,c.useState)(null);return t?(0,r.jsx)(u,{}):(0,r.jsxs)(r.Fragment,{children:[null==e?void 0:e.map(e=>(0,r.jsxs)(i.Zb,{children:[(0,r.jsxs)(i.Ol,{children:[(0,r.jsx)(i.ll,{children:e.name}),(0,r.jsx)(i.SZ,{children:e.gameCount?e.gameCount>1?"Contient actuellement ".concat(e.gameCount," jeux."):"Contient actuellement 1 jeu.":"Ne contient actuellement aucun jeu."})]}),(0,r.jsx)(i.eW,{className:"flex gap-4 justify-end",children:(0,r.jsxs)(o.z,{onClick:()=>s(e),children:[(0,r.jsx)(l,{size:18}),"Commencer le rangement"]})})]},e.id)),(0,r.jsx)(G,{selectedBox:n,handleClose:()=>s(null)})]})}},575:function(e,t,n){"use strict";n.d(t,{z:function(){return u}});var r=n(7437),o=n(2265),i=n(7256),a=n(9213),l=n(2169);let s=(0,a.j)("inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=o.forwardRef((e,t)=>{let{className:n,variant:o,size:a,asChild:u=!1,...c}=e,d=u?i.g7:"button";return(0,r.jsx)(d,{className:(0,l.cn)(s({variant:o,size:a,className:n})),ref:t,...c})});u.displayName="Button"},5671:function(e,t,n){"use strict";n.d(t,{Ol:function(){return l},SZ:function(){return u},Zb:function(){return a},aY:function(){return c},eW:function(){return d},ll:function(){return s}});var r=n(7437),o=n(2265),i=n(2169);let a=o.forwardRef((e,t)=>{let{className:n,...o}=e;return(0,r.jsx)("div",{ref:t,className:(0,i.cn)("rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",n),...o})});a.displayName="Card";let l=o.forwardRef((e,t)=>{let{className:n,...o}=e;return(0,r.jsx)("div",{ref:t,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",n),...o})});l.displayName="CardHeader";let s=o.forwardRef((e,t)=>{let{className:n,...o}=e;return(0,r.jsx)("h3",{ref:t,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",n),...o})});s.displayName="CardTitle";let u=o.forwardRef((e,t)=>{let{className:n,...o}=e;return(0,r.jsx)("p",{ref:t,className:(0,i.cn)("text-sm text-slate-500 dark:text-slate-400",n),...o})});u.displayName="CardDescription";let c=o.forwardRef((e,t)=>{let{className:n,...o}=e;return(0,r.jsx)("div",{ref:t,className:(0,i.cn)("p-6 pt-0",n),...o})});c.displayName="CardContent";let d=o.forwardRef((e,t)=>{let{className:n,...o}=e;return(0,r.jsx)("div",{ref:t,className:(0,i.cn)("flex items-center p-6 pt-0",n),...o})});d.displayName="CardFooter"},7625:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});var r=n(7437),o=n(2169);function i(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,o.cn)("animate-pulse rounded-md bg-slate-700/10",t),...n})}},8704:function(e,t,n){"use strict";var r=n(1221),o=n(4086),i=n(713);t.Z=e=>(0,i.ZP)(r.rk.storage,async()=>{let t=await (0,o.PL)((0,o.IO)(r.Hz,...e?[...e]:[])),n=[];return t.forEach(e=>n.push({id:e.id,...e.data()})),n})},1221:function(e,t,n){"use strict";n.d(t,{Hz:function(){return c},db:function(){return s},jK:function(){return u},rk:function(){return o}});var r,o,i=n(994),a=n(4086);(r=o||(o={})).game="game",r.storage="storage";let l=(0,i.ZF)({apiKey:"AIzaSyAHaBgnke0TdQ72e3plBNUTc3gaRN4P3_A",authDomain:"octodujeu.firebaseapp.com",projectId:"octodujeu",storageBucket:"octodujeu.appspot.com",messagingSenderId:"346449668727",appId:"1:346449668727:web:17bc7f41b559a9fa1c3472"}),s=(0,a.ad)(l),u=(0,a.hJ)(s,"game"),c=(0,a.hJ)(s,"storage")},2169:function(e,t,n){"use strict";n.d(t,{cn:function(){return i}});var r=n(7042),o=n(4769);function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.m6)((0,r.W)(t))}}},function(e){e.O(0,[358,148,61,672,216,971,938,744],function(){return e(e.s=5167)}),_N_E=e.O()}]);