// Sửa lời chúc và chữ ký ở đây
const LOI_CHUC=[
  "Hôm nay là 20/10, con muốn nói với mẹ vài điều mà ngày thường con hay ngại nói.",
  "Cảm ơn mẹ vì những bữa cơm mẹ nấu, vì những lần mẹ mắng, và vì mẹ luôn tin con ngay cả khi con chưa làm được điều gì lớn lao.",
  "Mười bông hoa này con xin gửi mẹ. Con mong mẹ luôn khỏe, luôn vui, và nhớ rằng con thương mẹ rất nhiều.",
  "Chúc mẹ một ngày 20/10 thật vui."
];
const KY_TEN="Con trai của mẹ";

const $=s=>document.querySelector(s),R=(n,f)=>Array.from({length:n},(_,i)=>f(i)).join('');
const C=['#86aedb','#a3c2e6','#6f98cc','#bcd3ee'];
const P=(r,a,c)=>`<use href="#fl" x="${(r*Math.cos(a*Math.PI/180)).toFixed(1)}" y="${(r*Math.sin(a*Math.PI/180)).toFixed(1)}" style="--c:${c}"/>`;

// Bốn loại hoa: hướng dương, hoa hồng, cẩm tú cầu, lan
$('#defs').innerHTML=
`<g id="fl" style="fill:var(--c)"><circle cx="-5" r="4.8"/><circle cx="5" r="4.8"/><circle cy="-5" r="4.8"/><circle cy="5" r="4.8"/><circle r="1.6" style="fill:#f8f1da"/></g>`+
`<g id="sun">${R(14,i=>`<ellipse cy="-24" rx="6.5" ry="13" fill="#e19a16" transform="rotate(${i*360/14})"/>`)}${R(14,i=>`<ellipse cy="-20" rx="6" ry="11" fill="#f6c944" transform="rotate(${i*360/14+180/14})"/>`)}<circle r="14" fill="#5b3a1a"/><circle r="9" fill="#3a2310"/>${R(6,i=>`<circle cy="-5" r="1.2" fill="#8a6234" transform="rotate(${i*60})"/>`)}</g>`+
`<g id="rose"><circle r="30" fill="#a3253a"/>${R(5,i=>`<circle cy="-17" r="14" fill="#c93a50" stroke="#8c1c2f" transform="rotate(${i*72})"/>`)}<circle r="16" fill="#d9475d" stroke="#8c1c2f"/><circle r="10" fill="#c93a50" stroke="#8c1c2f"/><path d="M0 0C4-2 6 2 3 5C-1 8-8 3-6-3C-4-9 5-10 9-5" fill="none" stroke="#8c1c2f" stroke-width="1.6" stroke-linecap="round"/></g>`+
`<g id="hyd"><circle r="33" fill="#6f98cc"/>${R(12,i=>P(26,i*30+15,C[i%4]))}${R(6,i=>P(14,i*60,C[(i+1)%4]))}${P(0,0,'#dbe7f6')}</g>`+
`<g id="orc" fill="#fdf3f6" stroke="#d79ab2" stroke-width="1"><ellipse cy="-21" rx="10" ry="18"/><ellipse cy="-21" rx="10" ry="18" transform="rotate(120)"/><ellipse cy="-21" rx="10" ry="18" transform="rotate(-120)"/><ellipse cx="-19" cy="-3" rx="19" ry="15" transform="rotate(-15 -19 -3)"/><ellipse cx="19" cy="-3" rx="19" ry="15" transform="rotate(15 19 -3)"/><path d="M0 1C-9 5-11 17 0 23C11 17 9 5 0 1Z" fill="#c13d7e" stroke="#9c2a62"/><circle cy="-2" r="3.6" fill="#f2c13d" stroke="none"/></g>`;

// Thêm chi tiết cho hoa
$('#sun').insertAdjacentHTML('beforeend',R(46,i=>{const r=1.3*Math.sqrt(i+1),a=i*2.4;return `<circle cx="${(r*Math.cos(a)).toFixed(1)}" cy="${(r*Math.sin(a)).toFixed(1)}" r=".9" fill="#a37a42"/>`}));
$('#rose').insertAdjacentHTML('beforeend',R(5,i=>`<path d="M-7-26Q0-30 7-26" fill="none" stroke="#f08a9a" stroke-width="1.4" stroke-linecap="round" transform="rotate(${i*72+20})"/>`)+`<path d="M-7-8Q0-14 7-8" fill="none" stroke="#f08a9a" stroke-width="1.2" stroke-linecap="round"/>`);
$('#hyd').insertAdjacentHTML('beforeend','<circle cx="-10" cy="-11" r="14" fill="#fff" opacity=".14"/>');
$('#orc').insertAdjacentHTML('beforeend','<path d="M-4-3L-30-8M-4-2L-32-2M-4-1L-29 5M4-3L30-8M4-2L32-2M4-1L29 5M0-6L0-33" fill="none" stroke="#e3a8bf" stroke-width=".8" stroke-linecap="round"/>');

// Lá của bó hoa rỗng
$('#leaves').innerHTML=[-72,-46,-20,20,46,72].map((a,i)=>`<path d="M0 0C20-25 20-70 0-105C-20-70-20-25 0 0Z" transform="translate(200 300) rotate(${a}) scale(${1+i%2*.2})" fill="${i%2?'#3b6a3a':'#4f8048'}"/>`).join('');

$('#msg').innerHTML=LOI_CHUC.map(p=>`<p>${p}</p>`).join('')+`<p class="sg">${KY_TEN}</p>`;

// Nền: vòm hoa, luống hoa, cánh hoa rơi, bướm
const GD=$('#garden'),KS=['sun','rose','hyd','orc'],rnd=(a,b)=>a+Math.random()*(b-a);
const LF=(x,y,a,s)=>`<path d="M0 0C14-14 14-42 0-62C-14-42-14-14 0 0Z" transform="translate(${x.toFixed(0)} ${y.toFixed(0)}) rotate(${a.toFixed(0)}) scale(${s.toFixed(2)})" fill="${Math.random()<.5?'#3b6a3a':'#4f8048'}"/>`;
const FL=(x,y,r)=>`<use href="#${KS[Math.floor(Math.random()*4)]}" transform="translate(${x.toFixed(0)} ${y.toFixed(0)}) rotate(${rnd(-30,30).toFixed(0)}) scale(${(r/36).toFixed(2)})"/>`;
function garden(){
  const W=innerWidth,H=innerHeight,r=Math.max(26,Math.min(60,Math.min(W,H)*.075)),xl=r*.55,cy=H*.6,rx=W/2-xl,ry=cy-r*.45,s=r*1.5;
  let l='',f='';
  const put=(x,y,k)=>{l+=LF(x,y,rnd(-80,80),r/40)+LF(x,y,rnd(100,260),r/40);if(k)f+=FL(x,y,r*rnd(.8,1.1))};
  const n=Math.ceil(Math.PI*Math.sqrt((rx*rx+ry*ry)/2)/s);
  for(let i=0;i<=n;i++){const t=Math.PI*(1+i/n);put(W/2+rx*Math.cos(t),cy+ry*Math.sin(t),i%2==0)}
  for(let y=cy+s,j=0;y<H+s;y+=s,j++){put(xl,y,j%2==0);put(W-xl,y,j%2==0)}
  for(let x=-r*.3;x<W+r;x+=r*1.15){l+=LF(x,H,rnd(-50,50),r/28);f+=FL(x,H-r*rnd(.1,.55),r*rnd(.8,1.3))}
  GD.setAttribute('viewBox',`0 0 ${W} ${H}`);GD.setAttribute('preserveAspectRatio','xMidYMax slice');
  GD.innerHTML=l+f;
}
let gw=innerWidth;garden();
addEventListener('resize',()=>{if(Math.abs(innerWidth-gw)>40){gw=innerWidth;garden()}});
const PC=['#e88b9c','#f4b6c2','#fffaf0','#f2c75a','#a3c2e6'];
document.body.insertAdjacentHTML('beforeend',R(16,i=>`<i class="ptl" style="--x:${rnd(0,100).toFixed(0)}vw;--w:${rnd(9,16).toFixed(0)}px;--c:${PC[i%5]};--t:${rnd(12,22).toFixed(1)}s;--d:-${rnd(0,20).toFixed(1)}s;--dx:${rnd(-18,18).toFixed(0)}vw"></i>`)+R(3,i=>`<b class="bf" aria-hidden="true" style="--y:${[22,40,56][i]}vh;--c:${['#e8a920','#c93a50','#4f86c6'][i]};--t:${[26,32,38][i]}s;--d:-${i*11}s"><svg viewBox="-14 -10 28 20"><g class="w"><ellipse cx="-7" cy="-3" rx="7" ry="5"/><ellipse cx="7" cy="-3" rx="7" ry="5"/><ellipse cx="-5" cy="5" rx="4.5" ry="3.5"/><ellipse cx="5" cy="5" rx="4.5" ry="3.5"/></g></svg></b>`));

// Mở cổng
const G=$('#gate'),B=$('#bq'),E=$('#env'),W=$('#cw');
function enter(){
  if(G.classList.contains('open'))return;
  G.classList.add('open');document.body.classList.add('in');
  setTimeout(()=>{G.remove();B.focus({preventScroll:true})},2100);
}
G.onclick=enter;
G.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();enter()}};

// Tạo bó hoa: mỗi lần nhấn thêm một bông ngẫu nhiên
const SP=[[200,150],[138,178],[262,178],[200,86],[140,108],[260,108],[84,150],[316,150],[82,214],[318,214]],K=['sun','rose','hyd','orc'];
let n=0;
B.onclick=()=>{
  if(n>9)return;
  const [x,y]=SP[n++],k=K[Math.floor(Math.random()*4)],s=(.84+Math.random()*.14).toFixed(2),r=Math.round(Math.random()*50-25);
  $('#stems').insertAdjacentHTML('beforeend',`<path class="stem" pathLength="1" d="M200 300Q${200+(x-200)*.3} ${(300+y)/2} ${x} ${y}"/>`);
  $('#heads').insertAdjacentHTML('beforeend',`<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})"><g class="pop"><use href="#${k}"/></g></g>`);
  $('#cnt').textContent=n+' / 10';
  if(n===10)done();
};
function done(){
  B.disabled=true;
  $('#hint').textContent='Đủ mười bông rồi';
  setTimeout(()=>{$('#prog').hidden=true;E.hidden=false;$('#et').hidden=false},900);
}

// Mở thư, xem thiệp
E.onclick=()=>{
  const was=E.classList.contains('open');
  E.classList.add('open');
  setTimeout(()=>{const c=$('#cv');c.classList.remove('open');W.hidden=false;$('#x').focus();setTimeout(()=>c.classList.add('open'),1100)},was?0:750);
};
$('#x').onclick=()=>{W.hidden=true;E.focus({preventScroll:true})};
