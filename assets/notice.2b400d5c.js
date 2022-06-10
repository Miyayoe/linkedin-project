import{_ as m,r as _,o as k,a as p,b as a,d as r,e as s,m as C,F as n,f as d,l as w,p as f,i as y,A as x,t as g}from"./index.b83ec8f2.js";const u=i=>(f("data-v-21039c02"),i=i(),y(),i),I={class:"container"},b={class:"sidebar"},M=w('<div class="side-nav" data-v-21039c02><ul data-v-21039c02><li class="active" data-v-21039c02><div class="hover-box" data-v-21039c02></div><p class="item-title" data-v-21039c02>NOTIFICATIONS</p></li><li data-v-21039c02><div class="hover-box" data-v-21039c02></div><p class="item-title" data-v-21039c02>NOTIFICATION SETTINGS</p></li></ul></div>',1),T={class:"content"},N=u(()=>s("div",{class:"filter"},[s("hr"),s("p",null,"RECENT"),s("hr")],-1)),A={class:"images"},H=["src"],S={class:"item-info"},Z=["innerHTML"],j={class:"info-time"},E=u(()=>s("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"#181818","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),s("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"#181818","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),s("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"#181818","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),q=u(()=>s("div",{class:"filter"},[s("hr"),s("p",null,"EARLIER"),s("hr")],-1)),L={class:"images"},O=["src"],R={class:"item-info"},B=["innerHTML"],F={class:"info-time"},G=u(()=>s("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"#181818","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),s("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"#181818","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),s("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"#181818","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),W={name:"notice",setup(i){const c=_([]),h=_([]);return k(()=>{(async()=>{let e=await p.get("https://api.unsplash.com/search/photos?query=users&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8"),o=await p.get("https://api.unsplash.com/search/photos?query=google-logo&client_id=cZdfd8fqxmmbqYfHGbYbeHxf7nO9WRv4lxG0Wv4_Cc8");c.value=[{images:[o.data.results[0].urls.regular,o.data.results[1].urls.regular,o.data.results[2].urls.regular],title:"<span>You appeared in 9 searches</span> this week",ago:"3 hours"},{images:[e.data.results[0].urls.regular,e.data.results[1].urls.regular,e.data.results[2].urls.regular],title:"Audrey Alexander and 10 others <span>viewed your profile</span>",ago:"9 hours"},{images:[e.data.results[7].urls.regular,e.data.results[8].urls.regular,e.data.results[9].urls.regular],title:"Eduardo Russel and 4 others <span>liked your post \xAB1,000 connections! My network growth, so many\xBB</span>",ago:"12 hours"}],h.value=[{images:[o.data.results[4].urls.regular,o.data.results[5].urls.regular,o.data.results[6].urls.regular],title:"We found jobs that you may be interested",ago:"2 day ago"},{images:[e.data.results[0].urls.regular,e.data.results[4].urls.regular,e.data.results[6].urls.regular],title:"Kyle Fisher and 17 others viewed your profile",ago:"9 hours"}]})()}),(e,o)=>{const v=x;return a(),r("section",null,[s("div",I,[s("div",b,[M,C(v)]),s("div",T,[N,(a(!0),r(n,null,d(c.value,t=>(a(),r("div",{key:t.title,class:"notice-item"},[s("div",A,[(a(!0),r(n,null,d(t.images,l=>(a(),r("img",{src:l,key:l,alt:""},null,8,H))),128))]),s("div",S,[s("p",{innerHTML:t.title},null,8,Z),s("span",j,g(t.ago),1)]),E]))),128)),q,(a(!0),r(n,null,d(h.value,t=>(a(),r("div",{key:t.title,class:"notice-item"},[s("div",L,[(a(!0),r(n,null,d(t.images,l=>(a(),r("img",{src:l,key:l,alt:""},null,8,O))),128))]),s("div",R,[s("p",{innerHTML:t.title},null,8,B),s("span",F,g(t.ago),1)]),G]))),128))])])])}}};var V=m(W,[["__scopeId","data-v-21039c02"]]);export{V as default};