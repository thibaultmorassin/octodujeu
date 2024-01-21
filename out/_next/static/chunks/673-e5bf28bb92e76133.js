"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[673],{2673:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=a(7437),s=a(3508),n=a(6547),l=a(7625);function o(){return(0,r.jsxs)("main",{className:"animate-in space-y-4",children:[(0,r.jsx)("h1",{className:"text-lg font-medium",children:"Liste des jeux"}),(0,r.jsxs)("div",{className:"flex flex-col gap-4 md:flex-row justify-between",children:[(0,r.jsx)(n.E,{}),(0,r.jsx)(s.Z,{})]}),(0,r.jsx)("div",{className:"grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3",children:[void 0,void 0,void 0,void 0,void 0].map((e,t)=>(0,r.jsx)(l.O,{className:"h-[102px]"},t))})]})}},3508:function(e,t,a){a.d(t,{Z:function(){return X}});var r=a(7437),s=a(1221),n=a(4086),l=a(3068),o=a(5298),i=e=>(0,l.Z)(s.rk.game,async(e,t)=>{let{arg:a}=t;try{let e=(0,n.JU)(s.db,s.rk.storage,a.storage),t={...a,storage:e,nameLowercase:a.name.toLowerCase()},r=await (0,n.ET)(s.jK,a),l=await o.toDataURL(r.id);return await (0,n.pl)((0,n.JU)(s.db,s.rk.game,r.id),{...t,qrCode:l}),{id:r.id,...t,qrCode:l}}catch(e){console.log(e)}},{optimisticData:e}),d=a(8704),c=a(8110),u=a(2913),m=a(2265),f=a(1865),x=a(1424),p=a(4578),h=a(575),g=a(6216),j=a(2549),y=a(2169);let b=g.fC,v=g.xz,N=g.h_,w=g.x8,k=m.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(g.aV,{ref:t,className:(0,y.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...s})});k.displayName=g.aV.displayName;let R=m.forwardRef((e,t)=>{let{className:a,children:s,...n}=e;return(0,r.jsxs)(N,{children:[(0,r.jsx)(k,{}),(0,r.jsxs)(g.VY,{ref:t,className:(0,y.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",a),...n,children:[s,(0,r.jsxs)(g.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400",children:[(0,r.jsx)(j.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});R.displayName=g.VY.displayName;let C=e=>{let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,y.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};C.displayName="DialogHeader";let z=e=>{let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,y.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};z.displayName="DialogFooter";let I=m.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(g.Dx,{ref:t,className:(0,y.cn)("text-lg font-semibold leading-none tracking-tight",a),...s})});I.displayName=g.Dx.displayName,m.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(g.dk,{ref:t,className:(0,y.cn)("text-sm text-slate-500 dark:text-slate-400",a),...s})}).displayName=g.dk.displayName;var A=a(7256),_=a(6743);let Z=(0,a(9213).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),P=m.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(_.f,{ref:t,className:(0,y.cn)(Z(),a),...s})});P.displayName=_.f.displayName;let F=f.RV,S=m.createContext({}),L=e=>{let{...t}=e;return(0,r.jsx)(S.Provider,{value:{name:t.name},children:(0,r.jsx)(f.Qr,{...t})})},V=()=>{let e=m.useContext(S),t=m.useContext(D),{getFieldState:a,formState:r}=(0,f.Gc)(),s=a(e.name,r);if(!e)throw Error("useFormField should be used within <FormField>");let{id:n}=t;return{id:n,name:e.name,formItemId:"".concat(n,"-form-item"),formDescriptionId:"".concat(n,"-form-item-description"),formMessageId:"".concat(n,"-form-item-message"),...s}},D=m.createContext({}),E=m.forwardRef((e,t)=>{let{className:a,...s}=e,n=m.useId();return(0,r.jsx)(D.Provider,{value:{id:n},children:(0,r.jsx)("div",{ref:t,className:(0,y.cn)("space-y-2",a),...s})})});E.displayName="FormItem";let J=m.forwardRef((e,t)=>{let{className:a,...s}=e,{error:n,formItemId:l}=V();return(0,r.jsx)(P,{ref:t,className:(0,y.cn)(n&&"text-destructive",a),htmlFor:l,...s})});J.displayName="FormLabel";let U=m.forwardRef((e,t)=>{let{...a}=e,{error:s,formItemId:n,formDescriptionId:l,formMessageId:o}=V();return(0,r.jsx)(A.g7,{ref:t,id:n,"aria-describedby":s?"".concat(l," ").concat(o):"".concat(l),"aria-invalid":!!s,...a})});U.displayName="FormControl",m.forwardRef((e,t)=>{let{className:a,...s}=e,{formDescriptionId:n}=V();return(0,r.jsx)("p",{ref:t,id:n,className:(0,y.cn)("text-[0.8rem] text-muted-foreground",a),...s})}).displayName="FormDescription";let O=m.forwardRef((e,t)=>{let{className:a,children:s,...n}=e,{error:l,formMessageId:o}=V(),i=l?String(null==l?void 0:l.message):s;return i?(0,r.jsx)("p",{ref:t,id:o,className:(0,y.cn)("text-[0.8rem] font-medium text-destructive",a),...n,children:i}):null});O.displayName="FormMessage";var T=a(2782),B=a(9394),Y=a(3939);let G=Y.fC;Y.ZA;let H=Y.B4,K=m.forwardRef((e,t)=>{let{className:a,children:s,...n}=e;return(0,r.jsxs)(Y.xz,{ref:t,className:(0,y.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",a),...n,children:[s,(0,r.jsx)(Y.JO,{asChild:!0,children:(0,r.jsx)(B.jnn,{className:"h-4 w-4 opacity-50"})})]})});K.displayName=Y.xz.displayName;let q=m.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(Y.u_,{ref:t,className:(0,y.cn)("flex cursor-default items-center justify-center py-1",a),...s,children:(0,r.jsx)(B.g8U,{})})});q.displayName=Y.u_.displayName;let Q=m.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(Y.$G,{ref:t,className:(0,y.cn)("flex cursor-default items-center justify-center py-1",a),...s,children:(0,r.jsx)(B.v4q,{})})});Q.displayName=Y.$G.displayName;let M=m.forwardRef((e,t)=>{let{className:a,children:s,position:n="popper",...l}=e;return(0,r.jsx)(Y.h_,{children:(0,r.jsxs)(Y.VY,{ref:t,className:(0,y.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===n&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",a),position:n,...l,children:[(0,r.jsx)(q,{}),(0,r.jsx)(Y.l_,{className:(0,y.cn)("p-1","popper"===n&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s}),(0,r.jsx)(Q,{})]})})});M.displayName=Y.VY.displayName,m.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(Y.__,{ref:t,className:(0,y.cn)("px-2 py-1.5 text-sm font-semibold",a),...s})}).displayName=Y.__.displayName;let $=m.forwardRef((e,t)=>{let{className:a,children:s,...n}=e;return(0,r.jsxs)(Y.ck,{ref:t,className:(0,y.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...n,children:[(0,r.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(Y.wU,{children:(0,r.jsx)(B.nQG,{className:"h-4 w-4"})})}),(0,r.jsx)(Y.eT,{children:s})]})});$.displayName=Y.ck.displayName,m.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(Y.Z0,{ref:t,className:(0,y.cn)("-mx-1 my-1 h-px bg-muted",a),...s})}).displayName=Y.Z0.displayName;let W=p.Ry({name:p.Z_().min(2,{message:"Le nom doit avoir au minimum 2 caract\xe8res."}),minAge:p.Rx().int().positive(),maxAge:p.Rx().int().positive(),minPlayer:p.Rx().int().positive(),maxPlayer:p.Rx().int().positive(),picture:p.Z_().optional(),type:p.Z_().optional(),storage:p.Z_()});var X=()=>{let[e,t]=(0,m.useState)(!1),{data:a}=(0,d.Z)(),{trigger:s,isMutating:n}=i(),l=(0,f.cI)({resolver:(0,c.F)(W)}),o=async e=>{let a=await s(e);(null==a?void 0:a.id)&&(t(!1),x.A.success("Le jeu a bien \xe9t\xe9 cr\xe9\xe9."))};return(0,r.jsxs)(b,{open:e,onOpenChange:t,children:[(0,r.jsx)(v,{asChild:!0,children:(0,r.jsxs)(h.z,{children:[(0,r.jsx)(u.Z,{size:20}),"Ajouter un jeu"]})}),(0,r.jsx)(R,{className:"",children:(0,r.jsxs)("form",{onSubmit:l.handleSubmit(o),className:"space-y-4",children:[(0,r.jsx)(C,{children:(0,r.jsx)(I,{children:"Ajouter un jeu"})}),(0,r.jsxs)(F,{...l,children:[(0,r.jsx)(L,{control:l.control,name:"name",render:e=>{let{field:t}=e;return(0,r.jsxs)(E,{children:[(0,r.jsx)(J,{children:"Nom du jeu"}),(0,r.jsx)(U,{children:(0,r.jsx)(T.I,{placeholder:"Les Aventuriers du Rail",...t})}),(0,r.jsx)(O,{})]})}}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,r.jsx)(L,{control:l.control,name:"minPlayer",render:e=>{let{field:{onChange:t,...a}}=e;return(0,r.jsxs)(E,{children:[(0,r.jsx)(J,{children:"Joueurs min."}),(0,r.jsx)(U,{children:(0,r.jsx)(T.I,{type:"number",placeholder:"2",...a,onChange:e=>t(e.target.valueAsNumber)})}),(0,r.jsx)(O,{})]})}}),(0,r.jsx)(L,{control:l.control,name:"maxPlayer",render:e=>{let{field:{onChange:t,...a}}=e;return(0,r.jsxs)(E,{children:[(0,r.jsx)(J,{children:"Joueurs max."}),(0,r.jsx)(U,{children:(0,r.jsx)(T.I,{type:"number",placeholder:"10",min:l.watch("minPlayer"),...a,onChange:e=>t(e.target.valueAsNumber)})}),(0,r.jsx)(O,{})]})}})]}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,r.jsx)(L,{control:l.control,name:"minAge",render:e=>{let{field:{onChange:t,...a}}=e;return(0,r.jsxs)(E,{children:[(0,r.jsx)(J,{children:"\xc2ge min."}),(0,r.jsx)(U,{children:(0,r.jsx)(T.I,{type:"number",placeholder:"18",...a,onChange:e=>t(e.target.valueAsNumber)})}),(0,r.jsx)(O,{})]})}}),(0,r.jsx)(L,{control:l.control,name:"maxAge",render:e=>{let{field:{onChange:t,...a}}=e;return(0,r.jsxs)(E,{children:[(0,r.jsx)(J,{children:"\xc2ge max."}),(0,r.jsx)(U,{children:(0,r.jsx)(T.I,{type:"number",placeholder:"99",min:l.watch("minAge"),...a,onChange:e=>t(e.target.valueAsNumber)})}),(0,r.jsx)(O,{})]})}})]}),(0,r.jsx)(L,{control:l.control,name:"storage",render:e=>{let{field:t}=e;return(0,r.jsxs)(E,{children:[(0,r.jsx)(J,{children:"Rangement"}),(0,r.jsxs)(G,{onValueChange:t.onChange,children:[(0,r.jsx)(U,{children:(0,r.jsx)(K,{children:(0,r.jsx)(H,{placeholder:"S\xe9lectionnez la bo\xeete de rangement"})})}),(0,r.jsx)(M,{children:null==a?void 0:a.map(e=>(0,r.jsx)($,{value:e.id,children:e.name},e.id))})]}),(0,r.jsx)(O,{})]})}})]}),(0,r.jsxs)(z,{className:"gap-y-2",children:[(0,r.jsx)(w,{asChild:!0,children:(0,r.jsx)(h.z,{type:"button",variant:"secondary",children:"Annuler"})}),(0,r.jsx)(h.z,{type:"submit",disabled:n,children:"Ajouter le jeu"})]})]})})]})}},6547:function(e,t,a){a.d(t,{E:function(){return i}});var r=a(7437),s=a(4033),n=a(2265),l=()=>{let e=(0,s.useRouter)(),t=(0,s.usePathname)(),a=(0,s.useSearchParams)(),r=(0,n.useCallback)((e,t)=>{let r=new URLSearchParams(a);return t.length||r.delete(e),r.set(e,t),r.toString()},[a]);return{searchParams:a,pushSearchParams:(a,s)=>{e.push("".concat(t,"?").concat(r(a,s)))}}},o=a(2782);function i(){var e;let{searchParams:t,pushSearchParams:a}=l(),[s,i]=(0,n.useState)(null!==(e=t.get("search"))&&void 0!==e?e:""),d=function(e,t){let[a,r]=(0,n.useState)(e);return(0,n.useEffect)(()=>{let a=setTimeout(()=>{r(e)},t||500);return()=>{clearTimeout(a)}},[e,t]),a}(s,500);return(0,n.useEffect)(()=>{a("search",d)},[d]),(0,r.jsx)("div",{children:(0,r.jsx)(o.I,{value:s,onChange:e=>{i(e.target.value)},type:"search",placeholder:"Recherche...",className:"lg:w-[300px]"})})}},575:function(e,t,a){a.d(t,{z:function(){return d}});var r=a(7437),s=a(2265),n=a(7256),l=a(9213),o=a(2169);let i=(0,l.j)("inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:a,variant:s,size:l,asChild:d=!1,...c}=e,u=d?n.g7:"button";return(0,r.jsx)(u,{className:(0,o.cn)(i({variant:s,size:l,className:a})),ref:t,...c})});d.displayName="Button"},2782:function(e,t,a){a.d(t,{I:function(){return l}});var r=a(7437),s=a(2265),n=a(2169);let l=s.forwardRef((e,t)=>{let{className:a,type:s,...l}=e;return(0,r.jsx)("input",{type:s,className:(0,n.cn)("flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",a),ref:t,...l})});l.displayName="Input"},7625:function(e,t,a){a.d(t,{O:function(){return n}});var r=a(7437),s=a(2169);function n(e){let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,s.cn)("animate-pulse rounded-md bg-slate-700/10",t),...a})}},8704:function(e,t,a){var r=a(1221),s=a(4086),n=a(713);t.Z=e=>(0,n.ZP)(r.rk.storage,async()=>{let t=await (0,s.PL)((0,s.IO)(r.Hz,...e?[...e]:[])),a=[];for(let e of t.docs){let t=(0,s.IO)(r.jK,(0,s.ar)("storage","==",e.ref)),n=await (0,s.Yp)(t);a.push({id:e.id,gameCount:n.data().count,...e.data()})}return a})},1221:function(e,t,a){a.d(t,{Hz:function(){return c},db:function(){return i},jK:function(){return d},rk:function(){return s}});var r,s,n=a(994),l=a(4086);(r=s||(s={})).game="game",r.storage="storage";let o=(0,n.ZF)({apiKey:"AIzaSyAHaBgnke0TdQ72e3plBNUTc3gaRN4P3_A",authDomain:"octodujeu.firebaseapp.com",projectId:"octodujeu",storageBucket:"octodujeu.appspot.com",messagingSenderId:"346449668727",appId:"1:346449668727:web:17bc7f41b559a9fa1c3472"}),i=(0,l.ad)(o),d=(0,l.hJ)(i,"game"),c=(0,l.hJ)(i,"storage")},2169:function(e,t,a){a.d(t,{cn:function(){return n}});var r=a(7042),s=a(4769);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.m6)((0,r.W)(t))}}}]);