"use strict";(self.webpackChunkDemoPWA=self.webpackChunkDemoPWA||[]).push([[7350],{4121:(V,S,I)=>{I.d(S,{A:()=>Q,B:()=>Le,C:()=>h,D:()=>We,E:()=>m,F:()=>be,G:()=>ve,H:()=>Se,I:()=>je,J:()=>$,K:()=>me,L:()=>pe,M:()=>Ce,N:()=>se,O:()=>ce,P:()=>R,Q:()=>Y,R:()=>le,S:()=>Z,T:()=>Te,a:()=>we,b:()=>w,c:()=>v,d:()=>W,e:()=>b,f:()=>x,g:()=>De,h:()=>oe,i:()=>T,j:()=>te,k:()=>re,l:()=>ue,m:()=>ie,n:()=>de,o:()=>P,p:()=>ee,q:()=>F,r:()=>_,s:()=>H,t:()=>$e,u:()=>fe,v:()=>ye,w:()=>U,x:()=>y,y:()=>Ne,z:()=>He});var C=I(6710);const v=(e,n)=>e.month===n.month&&e.day===n.day&&e.year===n.year,T=(e,n)=>e.year<n.year||e.year===n.year&&e.month<n.month||e.year===n.year&&e.month===n.month&&null!==e.day&&e.day<n.day,w=(e,n)=>e.year>n.year||e.year===n.year&&e.month>n.month||e.year===n.year&&e.month===n.month&&null!==e.day&&e.day>n.day,U=(e,n,t)=>{const o=Array.isArray(e)?e:[e];for(const r of o)if(void 0!==n&&T(r,n)||void 0!==t&&w(r,t)){(0,C.p)(`The value provided to ion-datetime is out of bounds.\n\nMin: ${JSON.stringify(n)}\nMax: ${JSON.stringify(t)}\nValue: ${JSON.stringify(e)}`);break}},$=(e,n)=>{if(void 0!==n)return"h23"===n;const t=new Intl.DateTimeFormat(e,{hour:"numeric"}),o=t.resolvedOptions();if(void 0!==o.hourCycle)return"h23"===o.hourCycle;const u=t.formatToParts(new Date("5/18/2021 00:00")).find(i=>"hour"===i.type);if(!u)throw new Error("Hour value not found from DateTimeFormat");return"00"===u.value},y=(e,n)=>4===e||6===e||9===e||11===e?30:2===e?(e=>e%4==0&&e%100!=0||e%400==0)(n)?29:28:31,h=(e,n={month:"numeric",year:"numeric"})=>"month"===new Intl.DateTimeFormat(e,n).formatToParts(new Date)[0].type,m=e=>"dayPeriod"===new Intl.DateTimeFormat(e,{hour:"numeric"}).formatToParts(new Date)[0].type,k=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,E=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,_=e=>{if(void 0===e)return;let t,n=e;return"string"==typeof e&&(n=e.replace(/\[|\]|\s/g,"").split(",")),t=Array.isArray(n)?n.map(o=>parseInt(o,10)).filter(isFinite):[n],t},x=e=>({month:parseInt(e.getAttribute("data-month"),10),day:parseInt(e.getAttribute("data-day"),10),year:parseInt(e.getAttribute("data-year"),10),dayOfWeek:parseInt(e.getAttribute("data-day-of-week"),10)});function F(e){if(Array.isArray(e)){const t=[];for(const o of e){const r=F(o);if(!r)return;t.push(r)}return t}let n=null;if(null!=e&&""!==e&&(n=E.exec(e),n?(n.unshift(void 0,void 0),n[2]=n[3]=void 0):n=k.exec(e)),null!==n){for(let t=1;t<8;t++)n[t]=void 0!==n[t]?parseInt(n[t],10):void 0;return{year:n[1],month:n[2],day:n[3],hour:n[4],minute:n[5],ampm:n[4]<12?"am":"pm"}}(0,C.p)(`Unable to parse date string: ${e}. Please provide a valid ISO 8601 datetime string.`)}const R=(e,n,t)=>n&&T(e,n)?n:t&&w(e,t)?t:e,Y=e=>e>=12?"pm":"am",P=(e,n)=>{const t=F(e);if(void 0===t)return;const{month:o,day:r,year:d,hour:u,minute:i}=t,c=d??n.year,a=o??12;return{month:a,day:r??y(a,c),year:c,hour:u??23,minute:i??59}},ee=(e,n)=>{const t=F(e);if(void 0===t)return;const{month:o,day:r,year:d,hour:u,minute:i}=t;return{month:o??1,day:r??1,year:d??n.year,hour:u??0,minute:i??0}},M=e=>("0"+(void 0!==e?Math.abs(e):"0")).slice(-2),ne=e=>("000"+(void 0!==e?Math.abs(e):"0")).slice(-4);function H(e){if(Array.isArray(e))return e.map(t=>H(t));let n="";return void 0!==e.year?(n=ne(e.year),void 0!==e.month&&(n+="-"+M(e.month),void 0!==e.day&&(n+="-"+M(e.day),void 0!==e.hour&&(n+=`T${M(e.hour)}:${M(e.minute)}:00`)))):void 0!==e.hour&&(n=M(e.hour)+":"+M(e.minute)),n}const G=(e,n)=>void 0===n?e:"am"===n?12===e?0:e:12===e?12:e+12,te=e=>{const{dayOfWeek:n}=e;if(null==n)throw new Error("No day of week provided");return L(e,n)},oe=e=>{const{dayOfWeek:n}=e;if(null==n)throw new Error("No day of week provided");return N(e,6-n)},ue=e=>N(e,1),re=e=>L(e,1),ie=e=>L(e,7),de=e=>N(e,7),L=(e,n)=>{const{month:t,day:o,year:r}=e;if(null===o)throw new Error("No day provided");const d={month:t,day:o,year:r};if(d.day=o-n,d.day<1&&(d.month-=1),d.month<1&&(d.month=12,d.year-=1),d.day<1){const u=y(d.month,d.year);d.day=u+d.day}return d},N=(e,n)=>{const{month:t,day:o,year:r}=e;if(null===o)throw new Error("No day provided");const d={month:t,day:o,year:r},u=y(t,r);return d.day=o+n,d.day>u&&(d.day-=u,d.month+=1),d.month>12&&(d.month=1,d.year+=1),d},W=e=>{const n=1===e.month?12:e.month-1,t=1===e.month?e.year-1:e.year,o=y(n,t);return{month:n,year:t,day:o<e.day?o:e.day}},b=e=>{const n=12===e.month?1:e.month+1,t=12===e.month?e.year+1:e.year,o=y(n,t);return{month:n,year:t,day:o<e.day?o:e.day}},B=(e,n)=>{const t=e.month,o=e.year+n,r=y(t,o);return{month:t,year:o,day:r<e.day?r:e.day}},ce=e=>B(e,-1),se=e=>B(e,1),ae=(e,n,t)=>n?e:G(e,t),le=(e,n)=>{const{ampm:t,hour:o}=e;let r=o;return"am"===t&&"pm"===n?r=G(r,"pm"):"pm"===t&&"am"===n&&(r=Math.abs(r-12)),r},ye=(e,n,t)=>{const{month:o,day:r,year:d}=e,u=R(Object.assign({},e),n,t),i=y(o,d);return null!==r&&i<r&&(u.day=i),void 0!==n&&v(u,n)&&void 0!==u.hour&&void 0!==n.hour&&(u.hour<n.hour?(u.hour=n.hour,u.minute=n.minute):u.hour===n.hour&&void 0!==u.minute&&void 0!==n.minute&&u.minute<n.minute&&(u.minute=n.minute)),void 0!==t&&v(e,t)&&void 0!==u.hour&&void 0!==t.hour&&(u.hour>t.hour?(u.hour=t.hour,u.minute=t.minute):u.hour===t.hour&&void 0!==u.minute&&void 0!==t.minute&&u.minute>t.minute&&(u.minute=t.minute)),u},fe=(e,n,t,o,r,d)=>{const{hour:u,minute:i,day:c,month:a,year:l}=e,s=Object.assign(Object.assign({},e),{dayOfWeek:void 0});return void 0!==n&&(s.month=A(a,n)),null!==c&&void 0!==t&&(s.day=A(c,t)),void 0!==o&&(s.year=A(l,o)),void 0!==u&&void 0!==r&&(s.hour=A(u,r),s.ampm=Y(s.hour)),void 0!==i&&void 0!==d&&(s.minute=A(i,d)),s},A=(e,n)=>{let t=n[0],o=Math.abs(t-e);for(let r=1;r<n.length;r++){const d=n[r],u=Math.abs(d-e);u<o&&(t=d,o=u)}return t},me=(e,n,t)=>{const o={hour:n.hour,minute:n.minute};return void 0===o.hour||void 0===o.minute?"Invalid Time":new Intl.DateTimeFormat(e,{hour:"numeric",minute:"numeric",timeZone:"UTC",hourCycle:t?"h23":"h12"}).format(new Date(H(Object.assign({year:2023,day:1,month:1},o))+"Z"))},J=e=>{const n=e.toString();return n.length>1?n:`0${n}`},ge=(e,n)=>n?J(e):0===e?"12":e.toString(),De=(e,n,t)=>{if(null===t.day)return null;const o=O(t),r=new Intl.DateTimeFormat(e,{weekday:"long",month:"long",day:"numeric",timeZone:"UTC"}).format(o);return n?`Today, ${r}`:r},pe=(e,n)=>{const t=O(n);return new Intl.DateTimeFormat(e,{weekday:"short",month:"short",day:"numeric",timeZone:"UTC"}).format(t)},ve=(e,n)=>{const t=O(n);return new Intl.DateTimeFormat(e,{month:"long",year:"numeric",timeZone:"UTC"}).format(t)},Te=(e,n)=>Z(e,n,{month:"short",day:"numeric",year:"numeric"}),we=(e,n)=>Ie(e,n,{day:"numeric"}).find(t=>"day"===t.type).value,Me=(e,n)=>Z(e,n,{year:"numeric"}),O=e=>{var n,t,o;return new Date(`${null!==(n=e.month)&&void 0!==n?n:1}/${null!==(t=e.day)&&void 0!==t?t:1}/${null!==(o=e.year)&&void 0!==o?o:2023}${void 0!==e.hour&&void 0!==e.minute?` ${e.hour}:${e.minute}`:""} GMT+0000`)},Z=(e,n,t)=>{const o=O(n);return K(e,t).format(o)},Ie=(e,n,t)=>{const o=O(n);return K(e,t).formatToParts(o)},K=(e,n)=>new Intl.DateTimeFormat(e,Object.assign(Object.assign({},n),{timeZone:"UTC"})),_e=e=>{if("RelativeTimeFormat"in Intl){const n=new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(0,"day");return n.charAt(0).toUpperCase()+n.slice(1)}return"Today"},z=e=>{const n=e.getTimezoneOffset();return e.setMinutes(e.getMinutes()-n),e},Ae=z(new Date("2022T01:00")),Oe=z(new Date("2022T13:00")),X=(e,n)=>{const t="am"===n?Ae:Oe,o=new Intl.DateTimeFormat(e,{hour:"numeric",timeZone:"UTC"}).formatToParts(t).find(r=>"dayPeriod"===r.type);return o?o.value:(e=>void 0===e?"":e.toUpperCase())(n)},Ce=e=>Array.isArray(e)?e.join(","):e,$e=()=>z(new Date).toISOString(),ke=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],Ee=[0,1,2,3,4,5,6,7,8,9,10,11],Fe=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],be=(e,n,t=0)=>{const r=new Intl.DateTimeFormat(e,{weekday:"ios"===n?"short":"narrow"}),d=new Date("11/01/2020"),u=[];for(let i=t;i<t+7;i++){const c=new Date(d);c.setDate(c.getDate()+i),u.push(r.format(c))}return u},Se=(e,n,t)=>{const o=y(e,n),r=new Date(`${e}/1/${n}`).getDay(),d=r>=t?r-(t+1):6-(t-r);let u=[];for(let i=1;i<=o;i++)u.push({day:i,dayOfWeek:(d+i)%7});for(let i=0;i<=d;i++)u=[{day:null,dayOfWeek:null},...u];return u},je=(e,n)=>{const t={month:e.month,year:e.year,day:e.day};if(void 0!==n&&(e.month!==n.month||e.year!==n.year)){const o={month:n.month,year:n.year,day:n.day};return T(o,t)?[o,t,b(e)]:[W(e),t,o]}return[W(e),t,b(e)]},He=(e,n,t,o,r,d={month:"long"})=>{const{year:u}=n,i=[];if(void 0!==r){let c=r;void 0!==o?.month&&(c=c.filter(a=>a<=o.month)),void 0!==t?.month&&(c=c.filter(a=>a>=t.month)),c.forEach(a=>{const l=new Date(`${a}/1/${u} GMT+0000`),s=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},d),{timeZone:"UTC"})).format(l);i.push({text:s,value:a})})}else{const c=o&&o.year===u?o.month:12;for(let l=t&&t.year===u?t.month:1;l<=c;l++){const s=new Date(`${l}/1/${u} GMT+0000`),f=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},d),{timeZone:"UTC"})).format(s);i.push({text:f,value:l})}}return i},Q=(e,n,t,o,r,d={day:"numeric"})=>{const{month:u,year:i}=n,c=[],a=y(u,i),l=null!=o?.day&&o.year===i&&o.month===u?o.day:a,s=null!=t?.day&&t.year===i&&t.month===u?t.day:1;if(void 0!==r){let f=r;f=f.filter(g=>g>=s&&g<=l),f.forEach(g=>{const D=new Date(`${u}/${g}/${i} GMT+0000`),p=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},d),{timeZone:"UTC"})).format(D);c.push({text:p,value:g})})}else for(let f=s;f<=l;f++){const g=new Date(`${u}/${f}/${i} GMT+0000`),D=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},d),{timeZone:"UTC"})).format(g);c.push({text:D,value:f})}return c},Le=(e,n,t,o,r)=>{var d,u;let i=[];if(void 0!==r)i=r,void 0!==o?.year&&(i=i.filter(c=>c<=o.year)),void 0!==t?.year&&(i=i.filter(c=>c>=t.year));else{const{year:c}=n,a=null!==(d=o?.year)&&void 0!==d?d:c;for(let s=null!==(u=t?.year)&&void 0!==u?u:c-100;s<=a;s++)i.push(s)}return i.map(c=>({text:Me(e,{year:c,month:n.month,day:n.day}),value:c}))},q=(e,n)=>e.month===n.month&&e.year===n.year?[e]:[e,...q(b(e),n)],Ne=(e,n,t,o,r,d)=>{let u=[],i=[],c=q(t,o);return d&&(c=c.filter(({month:a})=>d.includes(a))),c.forEach(a=>{const l={month:a.month,day:null,year:a.year},s=Q(e,l,t,o,r,{month:"short",day:"numeric",weekday:"short"}),f=[],g=[];s.forEach(D=>{const p=v(Object.assign(Object.assign({},l),{day:D.value}),n);g.push({text:p?_e(e):D.text,value:`${l.year}-${l.month}-${D.value}`}),f.push({month:l.month,year:l.year,day:D.value})}),i=[...i,...f],u=[...u,...g]}),{parts:i,items:u}},We=(e,n,t,o,r,d,u)=>{const i=$(e,t),{hours:c,minutes:a,am:l,pm:s}=((e,n="h12",t,o,r,d)=>{const u="h23"===n;let i=u?Fe:Ee,c=ke,a=!0,l=!0;if(r&&(i=i.filter(s=>r.includes(s))),d&&(c=c.filter(s=>d.includes(s))),t)if(v(e,t)){if(void 0!==t.hour&&(i=i.filter(s=>(u?s:"pm"===e.ampm?(s+12)%24:s)>=t.hour),a=t.hour<13),void 0!==t.minute){let s=!1;void 0!==t.hour&&void 0!==e.hour&&e.hour>t.hour&&(s=!0),c=c.filter(f=>!!s||f>=t.minute)}}else T(e,t)&&(i=[],c=[],a=l=!1);return o&&(v(e,o)?(void 0!==o.hour&&(i=i.filter(s=>(u?s:"pm"===e.ampm?(s+12)%24:s)<=o.hour),l=o.hour>=12),void 0!==o.minute&&e.hour===o.hour&&(c=c.filter(s=>s<=o.minute))):w(e,o)&&(i=[],c=[],a=l=!1)),{hours:i,minutes:c,am:a,pm:l}})(n,i?"h23":"h12",o,r,d,u),f=c.map(p=>({text:ge(p,i),value:ae(p,i,n.ampm)})),g=a.map(p=>({text:J(p),value:p})),D=[];return l&&!i&&D.push({text:X(e,"am"),value:"am"}),s&&!i&&D.push({text:X(e,"pm"),value:"pm"}),{minutesData:g,hoursData:f,dayPeriodData:D}}},3567:(V,S,I)=>{I.d(S,{c:()=>T,g:()=>U,h:()=>v,o:()=>$});var C=I(5861);const v=(y,h)=>null!==h.closest(y),T=(y,h)=>"string"==typeof y&&y.length>0?Object.assign({"ion-color":!0,[`ion-color-${y}`]:!0},h):h,U=y=>{const h={};return(y=>void 0!==y?(Array.isArray(y)?y:y.split(" ")).filter(m=>null!=m).map(m=>m.trim()).filter(m=>""!==m):[])(y).forEach(m=>h[m]=!0),h},j=/^[a-z][a-z0-9+\-.]*:/,$=function(){var y=(0,C.Z)(function*(h,m,k,E){if(null!=h&&"#"!==h[0]&&!j.test(h)){const _=document.querySelector("ion-router");if(_)return m?.preventDefault(),_.push(h,k,E)}return!1});return function(m,k,E,_){return y.apply(this,arguments)}}()}}]);