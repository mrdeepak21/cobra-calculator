(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=React;var a=e.n(t);const n=ReactDOM;var r=e.n(n);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l,o,i=[],u=!0,c=!1;try{if(l=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;u=!1}else for(;!(u=(n=l.call(a)).done)&&(i.push(n.value),i.length!==t);u=!0);}catch(e){c=!0,r=e}finally{try{if(!u&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(c)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}var i=(0,t.createContext)(),u=function(e){var n=e.children,r=l((0,t.useState)(""),2),o=r[0],u=r[1],c=l((0,t.useState)(),2),s=c[0],m=c[1],d=l((0,t.useState)(),2),p=d[0],v=d[1],f=l((0,t.useState)(0),2),g=f[0],E=f[1],b=l((0,t.useState)(2),2),y=b[0],h=b[1],C=l((0,t.useState)(18),2),x=C[0],D=C[1],N=l((0,t.useState)(1),2),S=N[0],w=N[1],k=l((0,t.useState)(1),2),F=k[0],A=k[1],P=l((0,t.useState)(0),2),_=P[0],O=P[1],T=l((0,t.useState)("Calculate"),2),j=T[0],I=T[1],M=l((0,t.useState)(0),2),R=M[0],B=M[1],L=l((0,t.useState)(),2),H=L[0],$=L[1],q=l((0,t.useState)(0),2),V=q[0],Q=q[1],U=l((0,t.useState)(!1),2),W=U[0],Z=U[1];return(0,t.useEffect)((function(){B(parseFloat(g)*(parseInt(F)+parseFloat(y))),Q(R*parseInt(x));var e=new Date(s),t=e.setMonth(e.getMonth()+x);s&&$(new Date(t).toDateString()),!s&&$("Please pick a date"),I("Calculate"),Z(!0)}),[j]),a().createElement(i.Provider,{value:{email:o,setEmail:u,terminationDate:s,setTerminationDate:m,lastCoverageDate:p,setLastCoverageDate:v,basePremium:g,setBasePremium:E,adminFee:y,setAdminFee:h,coverageDuration:x,setCoverageDuration:D,planType:S,setPlanType:w,dependents:F,setDependents:A,qualifyingEvent:_,setQualifyingEvent:O,calculate:j,setCalculate:I,premium:R,setPremium:B,cobraEndDate:H,setCobraEndDate:$,cost:V,setCost:Q,isResultDisplayed:W}},n)},c=function(){return(0,t.useContext)(i)};function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l,o,i=[],u=!0,c=!1;try{if(l=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;u=!1}else for(;!(u=(n=l.call(a)).done)&&(i.push(n.value),i.length!==t);u=!0);}catch(e){c=!0,r=e}finally{try{if(!u&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(c)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}function d(){var e=s((0,t.useState)(!1),2),n=e[0],r=e[1],l=s((0,t.useState)("number"),2),o=l[0],i=l[1],u=c(),m=u.email,d=u.setEmail,p=u.terminationDate,v=u.setTerminationDate,f=u.lastCoverageDate,g=u.setLastCoverageDate,E=u.basePremium,b=u.setBasePremium,y=u.adminFee,h=u.setAdminFee,C=u.coverageDuration,x=u.setCoverageDuration,D=u.planType,N=u.setPlanType,S=u.dependents,w=u.setDependents,k=u.qualifyingEvent,F=u.setQualifyingEvent,A=u.calculate,P=u.setCalculate,_=new Date,O=new Date(_.setMonth(_.getMonth()+6)).toISOString().split("T")[0];return(0,t.useEffect)((function(){var e;switch(k){case 2:case 3:e=36;break;default:e=18}x(e)}),[k]),(0,t.useEffect)((function(){var e;r(null!==(e=0==D)&&void 0!==e&&e),i(0==D?"text":"number"),w(0==D?"N/A":1)}),[D]),a().createElement("div",{className:"mb-10 text-[16px] grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-10 bg-white rounded-xl p-10"},a().createElement("div",{className:"input-area mt-4"},a().createElement("label",{htmlFor:"email"},"Email "),a().createElement("input",{type:"email",id:"email",className:"input-box",placeholder:"Work email only",value:m,onChange:function(e){return d(e.target.value)}})),a().createElement("div",{className:"input-area mt-4"},a().createElement("label",{htmlFor:"termination_date"},"Employee Termination Date"),a().createElement("input",{type:"date",id:"termination_date",className:"input-box",placeholder:"",value:p,max:O,onChange:function(e){return v(e.target.value)}})),a().createElement("div",{className:"input-area mt-4"},a().createElement("label",{htmlFor:"last_coverage_date"},"Last Day of Coverage"),a().createElement("input",{type:"date",id:"last_coverage_date",className:"input-box",placeholder:"",value:f,max:O,onChange:function(e){return g(e.target.value)}})),a().createElement("div",{className:"input-area mt-4"},a().createElement("label",{htmlFor:"base_premium"}," Plan Premium Cost"),a().createElement("div",{className:"flex items-center"},a().createElement("span",{className:"bg-gray-100 p-5 flex items-center pre-label"},"$"),a().createElement("input",{type:"number",id:"base_premium",className:"input-box",min:0,placeholder:"",value:E,onChange:function(e){return b(parseFloat(e.target.value))}}))),a().createElement("div",{className:"input-area mt-4"},a().createElement("label",{htmlFor:"admin_fee"}," Administration Fee: ",y,"%"),a().createElement("input",{type:"range",id:"admin_fee",className:"input-box mt-6",placeholder:"",value:y,onChange:function(e){return h(e.target.value)},step:1,min:1,max:10})),a().createElement("div",{className:"input-area mt-4"},a().createElement("label",{htmlFor:"qualifying_event"}," Qualifying Event Type"),a().createElement("select",{id:"qualifying_event",className:"input-box",value:k,onChange:function(e){return F(parseInt(e.target.value))}},a().createElement("option",{value:0}," Voluntary Termination"),a().createElement("option",{value:1},"Reduction in Hours"),a().createElement("option",{value:2},"Divorce or legal seperation"),a().createElement("option",{value:3},"Death of covered employee"))),a().createElement("div",{className:"input-area mt-4"},a().createElement("label",{htmlFor:"coverage_duration"}," Coverage Duration (months)"),a().createElement("input",{type:"number",id:"coverage_duration",className:"input-box",placeholder:"",value:C,disabled:!0})),a().createElement("div",{className:"input-area mt-4"},a().createElement("label",{htmlFor:"plan_type"}," Plan Type"),a().createElement("select",{id:"plan_type",className:"input-box",value:D,onChange:function(e){return N(parseInt(e.target.value))}},a().createElement("option",{value:0},"Individual"),a().createElement("option",{value:1},"Family"))),a().createElement("div",{className:"input-area mt-4"},a().createElement("label",{htmlFor:"dependents"}," Dependents"),a().createElement("input",{type:o,id:"dependents",className:"input-box",placeholder:"",value:S,disabled:n,onChange:function(e){return w(e.target.value)}})),a().createElement("div",{className:"input-area mt-4"},a().createElement("input",{type:"submit",id:"calculate",className:"input-box button rounded-full",value:A,onClick:function(e){return P("Processing...")}})))}function p(){var e=c(),t=e.premium,n=(e.setPremium,e.cobraEndDate),r=(e.setCobraEndDate,e.cost),l=(e.setCost,e.coverageDuration);return a().createElement("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 text-center gap-10"},a().createElement("div",{className:"bg-white rounded-xl p-10"},a().createElement("div",null,"$",t),a().createElement("p",{className:"text-[1.5rem]"},"Monthly COBRA Premium")),a().createElement("div",{className:"bg-white rounded-xl p-10"},a().createElement("div",null,n),a().createElement("p",{className:"text-[1.5rem]"},"COBRA Coverage End Date")),a().createElement("div",{className:"bg-white rounded-xl p-10"},a().createElement("div",null,"$",r),a().createElement("p",{className:"text-[1.5rem]"},"Total COBRA Cost for ",l," months")))}function v(){return a().createElement("div",{className:"fixed right-1 bottom-5"},a().createElement("button",{title:"Export PDF",onClick:function(e){e.preventDefault()},className:"rounded button"},a().createElement("svg",{width:"25px",height:"25px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M4 4C4 3.44772 4.44772 3 5 3H14H14.5858C14.851 3 15.1054 3.10536 15.2929 3.29289L19.7071 7.70711C19.8946 7.89464 20 8.149 20 8.41421V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4Z",stroke:"var(--e-global-color-primary)","stroke-width":"2","stroke-linecap":"round"}),a().createElement("path",{d:"M20 8H15V3",stroke:"var(--e-global-color-primary)","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),a().createElement("path",{d:"M12 9L12 17",stroke:"var(--e-global-color-primary)","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),a().createElement("path",{d:"M9 14L12 17L15 14",stroke:"var(--e-global-color-primary)","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),"Export PDF "))}function f(){var e=c().isResultDisplayed;return a().createElement("div",{className:"calculator container mt-10"},a().createElement(d,null),e&&a().createElement(p,null),a().createElement(v,null))}var g=document.getElementById("app");g&&r().render(a().createElement(u,null,a().createElement(f,null)),g)})();