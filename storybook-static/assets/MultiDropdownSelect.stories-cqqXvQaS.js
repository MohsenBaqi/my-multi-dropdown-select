import{j as l}from"./jsx-runtime-DEdD30eg.js";import{r as s}from"./index-RYns6xqu.js";function I(t){var r,o,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var d=t.length;for(r=0;r<d;r++)t[r]&&(o=I(t[r]))&&(n&&(n+=" "),n+=o)}else for(o in t)t[o]&&(n&&(n+=" "),n+=o);return n}function j(){for(var t,r,o=0,n="",d=arguments.length;o<d;o++)(t=arguments[o])&&(r=I(t))&&(n&&(n+=" "),n+=r);return n}const Y=t=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:24,height:24,...t},s.createElement("title",null,"Artboard-67"),s.createElement("g",{id:"Down"},s.createElement("path",{d:"M12,15a1,1,0,0,1-.707-.293l-4-4A1,1,0,1,1,8.707,9.293L12,12.586l3.293-3.293a1,1,0,0,1,1.414,1.414l-4,4A1,1,0,0,1,12,15Z",fill:"inherit"}))),W=t=>s.createElement("svg",{height:12,width:12,id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 17.837 17.837",xmlSpace:"preserve",...t},s.createElement("g",null,s.createElement("path",{fill:"inherit",d:"M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0 L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"}))),F={arrow:Y,checked:W};function h({name:t}){const r=F[t];return l.jsx(r,{})}h.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"union",raw:"keyof typeof Icons",elements:[{name:"literal",value:"arrow"},{name:"literal",value:"checked"}]},description:""}}};const V=({name:t,className:r,onChange:o,defaultValue:n,initialOtions:d,onOptionsUpdate:R,fullWidth:L,color:M})=>{const T=s.useRef(null),w=s.useRef(null),[b,S]=s.useState(!1),[c,E]=s.useState([]),[m,y]=s.useState(""),[i,k]=s.useState([]),$=()=>{if(w.current){const e=new Event("change",{bubbles:!0});w.current.dispatchEvent(e)}},O=e=>{T.current&&!T.current.contains(e.target)&&(S(!1),setTimeout(()=>{y("")},500),$())},x=e=>{const a=e.toString();k(u=>u.includes(a)?u.filter(G=>G!==e):[...u,a])},H=e=>{(e.key==="Enter"||e.keyCode===13)&&m!==void 0&&(e.preventDefault(),m&&(E(a=>[m,...a]),x(m),y(""),R&&R(c)))},p=e=>(e==null?void 0:e.toString().toLowerCase())||"",v=e=>i&&i.includes(e.toString()),B=()=>{if(typeof i!="object")return i;{let e="";return i&&c&&c.map(a=>{i.includes(typeof a!="object"?a.toString():a.value.toString())&&(e=e+`${e!=""?", ":""}${typeof a!="object"?a:a.customTitle||a.value}`)}),e}};return s.useEffect(()=>(d&&E(d),document.addEventListener("mousedown",O),()=>{document.removeEventListener("mousedown",O)}),[]),s.useEffect(()=>{n&&k(n)},[n]),l.jsxs("div",{ref:T,className:j("mainContainer",r,L&&"fullWidth",b&&"focused"),style:{"--base-color":M},children:[l.jsxs("div",{className:"inputContainer",children:[l.jsx("input",{type:"text",value:b?m:B(),onChange:e=>y(e.target.value),onFocus:()=>{S(!0)},onKeyDown:H}),l.jsx(h,{name:"arrow"})]}),l.jsx("ul",{children:c&&c.map((e,a)=>{const u=p(m);return typeof e=="object"?(p(e.value).includes(u)||e.customTitle&&p(e.customTitle).includes(u))&&l.jsxs("li",{className:j(v(e.value)&&"active"),onClick:()=>x(e.value),children:[e.customTitle||e.value," ",v(e.value)&&l.jsx(h,{name:"checked"})]},`dsp-opt-${t}-${a}`):p(e).includes(u)&&l.jsxs("li",{className:j(v(e)&&"active"),onClick:()=>x(e),children:[e,v(e)&&l.jsx(h,{name:"checked"})]},`dsp-opt-${t}-${a}`)})}),l.jsx("select",{ref:w,multiple:!0,name:t,value:i,onChange:o,children:c&&c.map((e,a)=>l.jsx("option",{value:typeof e!="object"?e:e==null?void 0:e.value},`opt-${t}-${a}`))})]})};V.__docgenInfo={description:"",methods:[],displayName:"MultiDropdownSelect",props:{defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},initialOtions:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| { value: string; customTitle?: React.ReactNode }
| string`,elements:[{name:"signature",type:"object",raw:"{ value: string; customTitle?: React.ReactNode }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"customTitle",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}},{name:"string"}]}],raw:"MultiDropdownSelectOptionsType[]"},description:""},onOptionsUpdate:{required:!1,tsType:{name:"signature",type:"function",raw:"(arg0: MultiDropdownSelectOptionsType[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:`| { value: string; customTitle?: React.ReactNode }
| string`,elements:[{name:"signature",type:"object",raw:"{ value: string; customTitle?: React.ReactNode }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"customTitle",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}},{name:"string"}]}],raw:"MultiDropdownSelectOptionsType[]"},name:"arg0"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},color:{required:!1,tsType:{name:"string"},description:""}},composes:["Pick"]};const P={title:"Example/Multi Dropdown Select",component:V,parameters:{layout:"padded",style:{padding:"400px"}},tags:["autodocs"],argTypes:{initialOtions:{control:{type:"object"},description:"Array of simple strings or objects like { value: string; customTitle?: React.ReactNode } which defines initial options"},defaultValue:{control:{type:"object"},description:"Array of strings which defines default value and pre-selected options"},fullWidth:{control:{type:"boolean"}},color:{control:"color"},className:{control:"text"},name:{control:"text"},onChange:{control:{disable:!0},description:"Handle selected items in case client made any changes!"},onOptionsUpdate:{control:{disable:!0},description:"Handle new items in case client entered new options!"}}},g={args:{initialOtions:[{value:"education",customTitle:"Education 🎓"},{value:"science",customTitle:"Yeeeah, science! ⚗️"},{value:"art",customTitle:"Art 🎭"},{value:"sport",customTitle:"Sport ⚽️"},{value:"games",customTitle:"Games 🎮"},{value:"health",customTitle:"Health 🏥"},{value:"1",customTitle:"Option one"},{value:"Two"},"Three","4"],color:"blue",defaultValue:["education"],className:"",name:"my_multi_dropdown_select"}},f={args:{initialOtions:[{value:"education",customTitle:"Education 🎓"},{value:"science",customTitle:"Yeeeah, science! ⚗️"},{value:"art",customTitle:"Art 🎭"},{value:"sport",customTitle:"Sport ⚽️"},{value:"games",customTitle:"Games 🎮"},{value:"health",customTitle:"Health 🏥"},{value:"1",customTitle:"Option one"},{value:"Two"},"Three","4"],color:"red",defaultValue:["science"]}};var N,A,_;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    initialOtions: [{
      value: "education",
      customTitle: "Education 🎓"
    }, {
      value: "science",
      customTitle: "Yeeeah, science! ⚗️"
    }, {
      value: "art",
      customTitle: "Art 🎭"
    }, {
      value: "sport",
      customTitle: "Sport ⚽️"
    }, {
      value: "games",
      customTitle: "Games 🎮"
    }, {
      value: "health",
      customTitle: "Health 🏥"
    }, {
      value: "1",
      customTitle: "Option one"
    }, {
      value: "Two"
    }, "Three", "4"],
    color: "blue",
    defaultValue: ["education"],
    className: "",
    name: "my_multi_dropdown_select"
  }
}`,...(_=(A=g.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var C,q,D;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    initialOtions: [{
      value: "education",
      customTitle: "Education 🎓"
    }, {
      value: "science",
      customTitle: "Yeeeah, science! ⚗️"
    }, {
      value: "art",
      customTitle: "Art 🎭"
    }, {
      value: "sport",
      customTitle: "Sport ⚽️"
    }, {
      value: "games",
      customTitle: "Games 🎮"
    }, {
      value: "health",
      customTitle: "Health 🏥"
    }, {
      value: "1",
      customTitle: "Option one"
    }, {
      value: "Two"
    }, "Three", "4"],
    color: "red",
    defaultValue: ["science"]
  }
}`,...(D=(q=f.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const U=["Blue","Red"];export{g as Blue,f as Red,U as __namedExportsOrder,P as default};
