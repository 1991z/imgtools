import{_ as e,r as t,o as a,c as l,a as i,w as n,b as s,e as u,v as o,k as h,f as c,F as d,i as v,t as r,h as g}from"./index-7793aea8.js";import{S as p}from"./SelectImage-2100df7f.js";import{i as m,S as f,a as w,s as b}from"./ShowDataObj-0bc172c5.js";const x=(e,t,a,l,i)=>new Promise(((n,s)=>{let[u,o,h,c,d]=l;if((0===e.length||t>e.length)&&s("error"),t===e.length){const e="image/jpeg",l=a.toDataURL(e,i);let s=l.length-`data:${e};base64,`.length;s=parseInt(s-s/4);const u=Date.parse(new Date)/100+t;return void n({size:s,type:e,timeStamp:u,base64:l})}const v=new Image;v.onload=()=>{const s=document.createElement("canvas");if(null===a){s.width=v.width+2*c,s.height=v.height+2*c;const e=s.getContext("2d");e.fillStyle=d,e.fillRect(0,0,s.width,s.height),e.drawImage(v,c,c)}else{const e=a.width-2*c,t=a.height-2*c,l=a.getContext("2d").getImageData(c,c,e,t);if(u)if(o){const t=e/v.width*v.height;s.width=a.width,s.height=a.height+t+h;const i=s.getContext("2d");i.fillStyle=d,i.fillRect(0,0,s.width,s.height),i.putImageData(l,c,c),i.drawImage(v,0,0,v.width,v.height,c,a.height-c+h,e,t)}else{const e=t/v.height*v.width;s.width=a.width+e+h,s.height=a.height;const i=s.getContext("2d");i.fillStyle=d,i.fillRect(0,0,s.width,s.height),i.putImageData(l,c,c),i.drawImage(v,0,0,v.width,v.height,a.width-c+h,c,e,t)}else if(o){const t=e>v.width?e:v.width;s.width=t+2*c,s.height=a.height+v.height+h;const i=s.getContext("2d");i.fillStyle=d,i.fillRect(0,0,s.width,s.height),i.putImageData(l,c,c),i.drawImage(v,c,a.height-c+h)}else{const e=t>v.height?a.height:v.height;s.width=a.width+v.width+h,s.height=e+2*c;const i=s.getContext("2d");i.fillStyle=d,i.fillRect(0,0,s.width,s.height),i.putImageData(l,c,c),i.drawImage(v,a.width-c+h,c)}}n(x(e,t+1,s,l,i))},v.src=e[t].base64})),y={key:0},k={key:0,class:"setBox"},I=["type"],S={class:"maxBox"},C=["src"],_={class:"selBox"},D=["value"],U=["onClick"],j={key:1,class:"res"},R=["src"],O="imagemerge",B=e({__name:"ImageMerge",setup(e){const B=t(m(O,[])),E=t([]);function L(e){E.value.push(e)}const V=t([]);function A(e){let t=parseInt(e.target.value);if(e.target.checked)V.value.push(t);else{let e=V.value;V.value=e.filter((e=>e!==t))}}const $=t(!0),z=t(!1),F=t("0"),G=t("0"),H=t("#ffffff"),M=t({});function P(){let e=[];if(V.value.forEach((t=>{for(let a=0;a<E.value.length;a++){const l=E.value[a];if(l.timeStamp===t){e.push({...l});break}}})),0===e.length)return;let t=[z.value,$.value,parseInt(F.value),parseInt(G.value),H.value];x(e,0,null,t,.3).then((e=>{M.value=e}))}function q(){let{base64:e,type:t,timeStamp:a}=M.value,l=e.replace(`data:${t};base64,`,""),i=window.atob(l),n=new Uint8Array(i.length);for(let o=0;o<i.length;++o)n[o]=i.charCodeAt(o);let s=new Blob([n],{type:t}),u=document.createElement("a");u.href=URL.createObjectURL(s),u.download=a,u.target="_blank",u.click()}const J=t("color");function K(){"color"===J.value?J.value="text":J.value="color"}function N(){let e={name:"",vertical:$.value,stretch:z.value,split:F.value,border:G.value,bgcolor:H.value};w(e,B.value)||(B.value.push(e),b(O,B.value))}function Q(e){$.value=e.vertical,z.value=e.stretch,F.value=e.split,G.value=e.border,H.value=e.bgcolor}function T(e){b(O,e)}return(e,t)=>(a(),l(d,null,[i(p,{multiple:"",onGetImage:L},{default:n((()=>[E.value.length>0?(a(),l("div",y,[void 0!==M.value.base64?(a(),l("button",{key:0,class:"mr",onClick:t[0]||(t[0]=e=>E.value.push(M.value))},"暂存结果")):c("",!0),s("button",{class:"stretch mr",onClick:t[1]||(t[1]=e=>z.value=!z.value)},r(z.value?"拉伸":"不拉伸"),1),s("button",{class:"mr",onClick:t[2]||(t[2]=e=>$.value=!$.value)},r($.value?"竖向":"横向"),1),s("button",{onClick:P},"合并")])):c("",!0)])),_:1}),E.value.length>0?(a(),l("div",k,[s("div",null,[t[6]||(t[6]=s("span",{class:"inp_t"},"间隔：",-1)),u(s("input",{type:"text",placeholder:"px","onUpdate:modelValue":t[3]||(t[3]=e=>F.value=e),class:"inp"},null,512),[[o,F.value]])]),s("div",null,[t[7]||(t[7]=s("span",{class:"inp_t"},"边框：",-1)),u(s("input",{type:"text",placeholder:"px","onUpdate:modelValue":t[4]||(t[4]=e=>G.value=e),class:"inp"},null,512),[[o,G.value]])]),s("div",null,[s("span",{onClick:K,class:"inp_t"},"背景："),u(s("input",{type:J.value,"onUpdate:modelValue":t[5]||(t[5]=e=>H.value=e),class:"inp_c"},null,8,I),[[h,H.value]])])])):c("",!0),s("div",S,[(a(!0),l(d,null,v(E.value,(e=>(a(),l("div",{key:e.timeStamp,class:"imgBox"},[s("img",{src:e.base64},null,8,C),s("div",_,[s("input",{type:"checkbox",value:e.timeStamp,onChange:A},null,40,D),u(s("b",null,r(V.value.indexOf(e.timeStamp)+1),513),[[g,-1!==V.value.indexOf(e.timeStamp)]]),s("button",{onClick:t=>function(e){let t=[];E.value.forEach((a=>{a.timeStamp!==e&&t.push({...a})})),E.value=t;let a=V.value;V.value=a.filter((t=>t!==e))}(e.timeStamp)},"删除",8,U)])])))),128))]),void 0!==M.value.base64?(a(),l("div",j,[s("img",{src:M.value.base64,onClick:q},null,8,R)])):c("",!0),i(f,{dataObj:B.value,onHistory:N,onUse:Q,onUpdata:T},null,8,["dataObj"])],64))}},[["__scopeId","data-v-5abdd456"]]);export{B as default};
