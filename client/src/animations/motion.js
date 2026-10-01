// GSAP + ScrollTrigger choreography: pinned achievements-free layout, reveals, tabs, cursor, magnetic buttons.
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let started = false
export function initMotion() {
  if (started) return
  started = true

var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
/* tabs */
$$('.tabs[role=tablist]').forEach(function(tl){var t=$$('.tab',tl);t.forEach(function(x){x.onclick=function(){t.forEach(function(y){y.setAttribute('aria-selected',y===x);var p=document.getElementById(y.getAttribute('aria-controls'));p.hidden=y!==x});
var p=document.getElementById(x.getAttribute('aria-controls'));if(gsap&&!rm)gsap.fromTo(p,{opacity:0,y:10},{opacity:1,y:0,duration:.35})}})});
/* water */
var n=$('#wnote');$$('#wbar div').forEach(function(d){var f=function(){$$('#wbar div').forEach(function(x){x.classList.remove('on')});d.classList.add('on');n.textContent=d.dataset.t};d.onmouseenter=f;d.onfocus=f;d.onclick=f});
var st=$$('#flow .step'),i=0,auto;function go(k){st.forEach(function(s,j){s.classList.toggle('on',j===k)});i=k}
st.forEach(function(s,k){s.onclick=function(){clearInterval(auto);go(k)}});
/* roles */
var rt={Farmer:'Farmers sign in, list their products and speak with customers directly, with no broker in between.',Customer:'Customers browse farmer listings and buy straight from the source, in a language they prefer.'};
var rb=$$('#roles .tab');rb.forEach(function(x){x.onclick=function(){rb.forEach(function(y){y.setAttribute('aria-selected',y===x)});$('#rnote').textContent=rt[x.textContent]}});
/* copy */
$$('[data-copy]').forEach(function(c){c.onclick=function(){var t=c.dataset.copy;(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).catch(function(){}).then(function(){c.textContent='Copied';setTimeout(function(){c.textContent='Copy'},1600)})}});
/* motion */
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(rm){document.documentElement.classList.add('rm');return}
document.documentElement.classList.add('js');
if(!gsap)return;
gsap.registerPlugin(ScrollTrigger);
auto=setInterval(function(){go((i+1)%st.length)},2400);
var tl=gsap.timeline({defaults:{ease:'power3.out'}});
tl.from('.hero .ln',{yPercent:110,opacity:0,duration:1,stagger:.12},0)
.from('.hero .mono,.hero .role,.hero .lead,.hero .cta,.hero .links',{y:20,opacity:0,duration:.7,stagger:.08},.4)
.fromTo('#pf',{clipPath:'inset(100% 0 0 0)'},{clipPath:'inset(0% 0 0 0)',duration:1.2,ease:'power4.inOut'},.2)
.from('.tag',{opacity:0,x:-14,duration:.6},1.1);
gsap.to('#pf img',{yPercent:-6,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
if(matchMedia('(pointer:fine)').matches){var p=$('.portrait'),im=$('#pf img');p.addEventListener('pointermove',function(e){var r=p.getBoundingClientRect();gsap.to(im,{x:(e.clientX-r.left-r.width/2)/r.width*-14,duration:.6,overwrite:'auto'})});p.addEventListener('pointerleave',function(){gsap.to(im,{x:0,duration:.8})})}
$$('.rv').forEach(function(el){gsap.to(el,{opacity:1,y:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}})});
gsap.to('#tl .fill',{scaleY:1,ease:'none',scrollTrigger:{trigger:'#tl',start:'top 70%',end:'bottom 70%',scrub:true}});

gsap.to('#bar',{scaleX:1,ease:'none',scrollTrigger:{scrub:.3,start:0,end:'max'}});
gsap.from('.bk',{scaleY:0,transformOrigin:'bottom',duration:1,stagger:.12,ease:'power3.out',delay:.3});
gsap.to('.b1',{yPercent:-10,ease:'none',scrollTrigger:{trigger:'.hero',scrub:true,start:'top top',end:'bottom top'}});
gsap.to('.b2',{yPercent:12,ease:'none',scrollTrigger:{trigger:'.hero',scrub:true,start:'top top',end:'bottom top'}});
$$('main h2').forEach(function(h){var t=h.textContent.trim();h.setAttribute('aria-label',t);h.innerHTML=t.split(/\s+/).map(function(x){return'<span class="w" aria-hidden="true"><span>'+x+'</span></span>'}).join(' ');
gsap.from(h.querySelectorAll('.w>span'),{yPercent:115,duration:.9,stagger:.06,ease:'power4.out',scrollTrigger:{trigger:h,start:'top 88%',once:true}})});
$$('.big').forEach(function(el){var t=el.textContent,v=parseFloat(t),s=t.replace(/[\d.]/g,''),d=t.indexOf('.')>-1?t.split('.')[1].replace(/\D/g,'').length:0,o={v:0};
ScrollTrigger.create({trigger:el,start:'top 88%',once:true,onEnter:function(){gsap.to(o,{v:v,duration:1.6,ease:'power2.out',onUpdate:function(){el.textContent=o.v.toFixed(d)+s}})}})});
gsap.from('#wbar div',{flex:.01,duration:1,stagger:.15,ease:'power3.out',scrollTrigger:{trigger:'#wbar',start:'top 92%',once:true}});
if(matchMedia('(pointer:fine)').matches){var c=$('#cur');c.style.display='block';var cx=gsap.quickTo(c,'x',{duration:.25,ease:'power3'}),cy=gsap.quickTo(c,'y',{duration:.25,ease:'power3'});
addEventListener('pointermove',function(e){cx(e.clientX);cy(e.clientY)},{passive:true});
document.addEventListener('pointerover',function(e){gsap.to(c,{scale:e.target.closest('a,button,.chip,.m')?2.2:1,duration:.25})});
$$('.btn').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.25,y:(e.clientY-r.top-r.height/2)*.35,duration:.3})});b.addEventListener('pointerleave',function(){gsap.to(b,{x:0,y:0,duration:.6,ease:'elastic.out(1,.4)'})})})}
var links=$$('#menu a');
$$('main section[id]').forEach(function(s){ScrollTrigger.create({trigger:s,start:'top 45%',end:'bottom 45%',onToggle:function(x){if(x.isActive)links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+s.id)});var on=$('#menu a.on'),nv=$('nav[aria-label=Primary]');if(on&&innerWidth<=1040)nv.scrollTo({left:on.getBoundingClientRect().left-nv.getBoundingClientRect().left+nv.scrollLeft-24,behavior:'smooth'})}})});

}
