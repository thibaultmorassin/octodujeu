(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[398],{5167:function(e,t,r){Promise.resolve().then(r.bind(r,7213))},7213:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(7437),a=r(1221),s=r(4086),o=r(3068),i=()=>(0,o.Z)("".concat(a.rk.game,"/add-to-storage"),async(e,t)=>{let{arg:r}=t;try{let e=(0,s.JU)(a.db,a.rk.game,r.gameId),t=(0,s.JU)(a.db,a.rk.storage,r.storageId),n=(await (0,s.QT)(e)).data();return await (0,s.pl)(e,{...n,storage:t})}catch(e){console.log(e)}}),l=r(2265),d=r(1424),c=r(575),u=r(3929),f=r(4754),m=r.n(f);let g=(e,t,r)=>{e&&(e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(r.x,r.y),e.lineWidth=4,e.strokeStyle="#FF3B58",e.stroke())},x=(e,t)=>{g(e,t.location.topLeftCorner,t.location.topRightCorner),g(e,t.location.topRightCorner,t.location.bottomRightCorner),g(e,t.location.bottomRightCorner,t.location.bottomLeftCorner),g(e,t.location.bottomLeftCorner,t.location.topLeftCorner)};var p=e=>{let{onScan:t}=e,r=(0,l.useRef)(),a=(0,l.useRef)(null),s=(0,l.useRef)(null),[o,i]=(0,l.useState)(void 0);(0,l.useEffect)(()=>{var e;let t=()=>{if(!a.current||!s.current)return;let e=a.current;if(e.readyState===e.HAVE_ENOUGH_DATA){s.current.hidden=!1;let t=s.current,n=e.videoWidth,a=e.videoHeight;if(t){t.height=a,t.width=n;let o=t.getContext("2d");if(o){o.drawImage(e,0,0,n,a);let t=o.getImageData(0,0,n,a),l=m()(t.data,t.width,t.height,{inversionAttempts:"dontInvert"});if(l){var r;x(null===(r=s.current)||void 0===r?void 0:r.getContext("2d"),l),i(l.data)}else console.log("No QR code detected.")}}}requestAnimationFrame(t)};navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment",frameRate:{ideal:30},width:400,height:400}}).then(e=>{r.current=e,a.current&&(a.current.srcObject=e,a.current.setAttribute("playsinline","true"),a.current.play(),requestAnimationFrame(t))});let n=null===(e=a.current)||void 0===e?void 0:e.srcObject;return()=>{n&&n.getTracks().forEach(e=>{e.stop(),n.removeTrack(e)}),d()}},[]);let d=()=>{r.current&&r.current.getTracks().forEach(e=>{var t;e.stop(),null===(t=r.current)||void 0===t||t.removeTrack(e)})};return(0,l.useEffect)(()=>{o&&t(o)},[o]),(0,n.jsxs)("div",{children:[(0,n.jsx)("canvas",{ref:s,className:"w-full max-w-sm max-h-[50svh] m-auto mb-4"}),(0,n.jsx)("video",{ref:a,id:"video",playsInline:!0,hidden:!0,autoPlay:!0})]})},h=e=>{let{selectedBox:t,handleClose:r}=e,{trigger:a}=i(),s=async e=>{if(!(null==t?void 0:t.id)){d.A.error("Une erreur est survenue, veuillez r\xe9essayer.");return}d.A.promise(a({gameId:e,storageId:t.id}),{loading:"Ajout en cours...",success:"Jeux correctement ajout\xe9 \xe0 la bo\xeete !",error:"Une erreur est survenue, veuillez r\xe9essayer."})};return(0,n.jsx)(u.dy,{open:null!=t,onClose:r,children:(0,n.jsxs)(u.sc,{children:[(0,n.jsxs)(u.OX,{className:"text-left",children:[(0,n.jsx)(u.iI,{children:null==t?void 0:t.name}),(0,n.jsxs)(u.u6,{children:["Scannez chaque jeu avant de la ranger dans la bo\xeete"," ",null==t?void 0:t.name,"."]})]}),(0,n.jsx)("div",{className:"min-h-[50svh] p-4",children:(0,n.jsx)(p,{onScan:s})}),(0,n.jsxs)(u.ze,{className:"pt-2",onClick:r,children:[(0,n.jsx)(c.z,{children:"J'ai termin\xe9"}),(0,n.jsx)(c.z,{variant:"outline",children:"Annuler"})]})]})})},v=r(5671),j=r(8704),b=r(4879),N=r(7625);function y(){return(0,n.jsxs)("main",{className:"animate-in",children:[(0,n.jsx)("div",{className:"mb-4 flex items-center space-x-1 text-sm text-muted-foreground",children:"S\xe9lectionnez d'abord une bo\xeete, puis scannez ensuite chacun des jeux au moment de le ranger \xe0 l'int\xe9rieur."}),(0,n.jsx)("div",{className:"grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}),[void 0,void 0,void 0].map((e,t)=>(0,n.jsx)(N.O,{className:"w-full md:w-[360px] h-[164px]"},t))]})}function w(){let{data:e,isLoading:t,mutate:r}=(0,j.Z)(),[a,s]=(0,l.useState)(null);return t?(0,n.jsx)(y,{}):(0,n.jsxs)("main",{className:"animate-in",children:[(0,n.jsx)("div",{className:"mb-4 flex items-center space-x-1 text-sm text-muted-foreground",children:"S\xe9lectionnez d'abord une bo\xeete, puis scannez ensuite chacun des jeux au moment de le ranger \xe0 l'int\xe9rieur."}),(0,n.jsxs)("div",{className:"grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3",children:[null==e?void 0:e.map(e=>(0,n.jsxs)(v.Zb,{children:[(0,n.jsxs)(v.Ol,{children:[(0,n.jsx)(v.ll,{children:e.name}),(0,n.jsx)(v.SZ,{children:e.gameCount?e.gameCount>1?"Contient actuellement ".concat(e.gameCount," jeux."):"Contient actuellement 1 jeu.":"Ne contient actuellement aucun jeu."})]}),(0,n.jsx)(v.eW,{className:"flex gap-4 justify-end",children:(0,n.jsxs)(c.z,{onClick:()=>s(e),children:[(0,n.jsx)(b.Z,{size:18}),"Commencer le rangement"]})})]},e.id)),(0,n.jsx)(h,{selectedBox:a,handleClose:()=>{r(),s(null)}})]})]})}},575:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var n=r(7437),a=r(2265),s=r(7256),o=r(9213),i=r(2169);let l=(0,o.j)("inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:r,variant:a,size:o,asChild:d=!1,...c}=e,u=d?s.g7:"button";return(0,n.jsx)(u,{className:(0,i.cn)(l({variant:a,size:o,className:r})),ref:t,...c})});d.displayName="Button"},5671:function(e,t,r){"use strict";r.d(t,{Ol:function(){return i},SZ:function(){return d},Zb:function(){return o},aY:function(){return c},eW:function(){return u},ll:function(){return l}});var n=r(7437),a=r(2265),s=r(2169);let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",r),...a})});o.displayName="Card";let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...a})});i.displayName="CardHeader";let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("h3",{ref:t,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",r),...a})});l.displayName="CardTitle";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-slate-500 dark:text-slate-400",r),...a})});d.displayName="CardDescription";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",r),...a})});c.displayName="CardContent";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",r),...a})});u.displayName="CardFooter"},3929:function(e,t,r){"use strict";r.d(t,{OX:function(){return f},Qz:function(){return l},dy:function(){return i},iI:function(){return g},sc:function(){return u},u6:function(){return x},ze:function(){return m}});var n=r(7437),a=r(2265),s=r(9633),o=r(2169);let i=e=>{let{shouldScaleBackground:t=!0,...r}=e;return(0,n.jsx)(s.d.Root,{shouldScaleBackground:t,...r})};i.displayName="Drawer";let l=s.d.Trigger,d=s.d.Portal;s.d.Close;let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.d.Overlay,{ref:t,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80",r),...a})});c.displayName=s.d.Overlay.displayName;let u=a.forwardRef((e,t)=>{let{className:r,children:a,...i}=e;return(0,n.jsxs)(d,{children:[(0,n.jsx)(c,{}),(0,n.jsxs)(s.d.Content,{ref:t,className:(0,o.cn)("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",r),...i,children:[(0,n.jsx)("div",{className:"mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"}),a]})]})});u.displayName="DrawerContent";let f=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,o.cn)("grid gap-1.5 p-4 text-center sm:text-left",t),...r})};f.displayName="DrawerHeader";let m=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,o.cn)("mt-auto flex flex-col gap-2 p-4",t),...r})};m.displayName="DrawerFooter";let g=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.d.Title,{ref:t,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",r),...a})});g.displayName=s.d.Title.displayName;let x=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.d.Description,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",r),...a})});x.displayName=s.d.Description.displayName},7625:function(e,t,r){"use strict";r.d(t,{O:function(){return s}});var n=r(7437),a=r(2169);function s(e){let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,a.cn)("animate-pulse rounded-md bg-slate-700/10",t),...r})}},8704:function(e,t,r){"use strict";var n=r(1221),a=r(4086),s=r(713);t.Z=e=>(0,s.ZP)(n.rk.storage,async()=>{let t=await (0,a.PL)((0,a.IO)(n.Hz,...e?[...e]:[])),r=[];for(let e of t.docs){let t=(0,a.IO)(n.jK,(0,a.ar)("storage","==",e.ref)),s=await (0,a.Yp)(t);r.push({id:e.id,gameCount:s.data().count,...e.data()})}return r})},1221:function(e,t,r){"use strict";r.d(t,{Hz:function(){return c},db:function(){return l},jK:function(){return d},rk:function(){return a}});var n,a,s=r(994),o=r(4086);(n=a||(a={})).game="game",n.storage="storage";let i=(0,s.ZF)({apiKey:"AIzaSyAHaBgnke0TdQ72e3plBNUTc3gaRN4P3_A",authDomain:"octodujeu.firebaseapp.com",projectId:"octodujeu",storageBucket:"octodujeu.appspot.com",messagingSenderId:"346449668727",appId:"1:346449668727:web:17bc7f41b559a9fa1c3472"}),l=(0,o.ad)(i),d=(0,o.hJ)(l,"game"),c=(0,o.hJ)(l,"storage")},2169:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var n=r(7042),a=r(4769);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}}},function(e){e.O(0,[358,148,61,54,712,424,143,971,938,744],function(){return e(e.s=5167)}),_N_E=e.O()}]);