import{_ as e,r as a,o as t,c as s,a as n,w as o,b as l,d as u,F as i,e as m,v as d,f as r,g as c,h as g}from"./index-62ba23d4.js";import{S as p}from"./SelectImage-a77911a7.js";import{S as v,D as h}from"./DownloadImage-9866353f.js";const b={class:"doBox"},f=e({__name:"ImageZip",setup(e){const f=a([]);function w(e){f.value.push(e)}const I=a(30),_=a([]);function D(){_.value=[],f.value.forEach(((e,a)=>{((e,a,t)=>new Promise(((s,n)=>{if(void 0===e.base64)return void n("image no base64");if(a<0||a>.97)return void n("quality must be between 0 and 0.97");const o=new Image;o.onload=()=>{const e=document.createElement("canvas");e.width=o.width,e.height=o.height,e.getContext("2d").drawImage(o,0,0);const n="image/jpeg",l=e.toDataURL(n,a);let u=l.length-`data:${n};base64,`.length;u=parseInt(u-u/4);const i=Date.parse(new Date)/100+t;s({size:u,type:n,timeStamp:i,base64:l})},o.src=e.base64})))(e,I.value/100,a).then((e=>{_.value.push(e)})).catch((e=>{}))}))}return(e,a)=>(t(),s(i,null,[n(p,{multiple:"",onGetImage:w},{default:o((()=>[m(r("div",b,[c(" 压缩质量(0~97)："),m(r("input",{type:"number","onUpdate:modelValue":a[0]||(a[0]=e=>I.value=e)},null,512),[[g,I.value]]),r("button",{onClick:D},"压缩")],512),[[d,f.value.length>0]])])),_:1}),n(v,{images:f.value},null,8,["images"]),_.value.length>0?(t(),l(h,{key:0,images:_.value},null,8,["images"])):u("",!0)],64))}},[["__scopeId","data-v-90a37bab"]]);export{f as default};
