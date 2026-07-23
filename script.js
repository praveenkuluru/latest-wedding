
const target=new Date('2026-08-23T10:30:00+05:30');
const c=document.getElementById('countdown');
function update(){
 let diff=Math.max(0,target-new Date());
 const vals=[
 ['Days',Math.floor(diff/86400000)],
 ['Hours',Math.floor(diff%86400000/3600000)],
 ['Minutes',Math.floor(diff%3600000/60000)],
 ['Seconds',Math.floor(diff%60000/1000)]
 ];
 c.innerHTML=vals.map(v=>`<div class="box"><div class="num">${v[1]}</div><div>${v[0]}</div></div>`).join('');
}
setInterval(update,1000);update();
setInterval(()=>{
 const p=document.createElement('div');
 p.className='petal';
 p.style.left=Math.random()*100+'vw';
 p.style.animationDuration=(6+Math.random()*6)+'s';
 document.body.appendChild(p);
 setTimeout(()=>p.remove(),12000);
},350);
