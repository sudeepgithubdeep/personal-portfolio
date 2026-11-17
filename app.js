const copyButton=document.getElementById('copy');copyButton.addEventListener('click',async()=>{const status=document.getElementById('copy-status');try{await navigator.clipboard.writeText('sudeepdeep46@gmail.com');status.textContent='Email address copied.';copyButton.textContent='Copied ✓';setTimeout(()=>{copyButton.textContent='Copy email ⧉'},2500)}catch{status.textContent='You can copy this email address: sudeepdeep46@gmail.com'}});

// Small, progressive interactions: all original content works without JavaScript.
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
let motionOff=motionPreference.matches;
const motionButton=document.createElement('button');
motionButton.className='motion-toggle';
motionButton.setAttribute('aria-label','Pause visual motion');
document.querySelector('.nav').append(motionButton);
function syncMotion(){document.body.classList.toggle('motion-off',motionOff);motionButton.textContent=motionOff?'Motion: off':'Motion: on';motionButton.setAttribute('aria-pressed',String(motionOff));}
motionButton.addEventListener('click',()=>{motionOff=!motionOff;syncMotion()});
motionPreference.addEventListener('change',e=>{motionOff=e.matches;syncMotion()});syncMotion();
const name=document.querySelector('h1 strong');name.classList.add('dimensional-name');name.setAttribute('aria-label','Sudeep.');
name.innerHTML=[...'Sudeep.'].map((c,i)=>`<span aria-hidden="true" class="name-letter ${c==='.'?'orange':''}" style="--n:${i}">${c}</span>`).join('');
const portrait=document.querySelector('.hero-art');
portrait.insertAdjacentHTML('beforeend','<button class="portrait-switch" aria-pressed="false">✦ Switch portrait mood</button>');
portrait.querySelector('button').addEventListener('click',e=>{const active=portrait.classList.toggle('studio-mode');e.currentTarget.setAttribute('aria-pressed',String(active));e.currentTarget.textContent=active?'✦ Restore warm mood':'✦ Switch portrait mood'});
// Pointer depth is bounded, with touch controls provided separately.
[portrait,name,...document.querySelectorAll('.project-visual')].forEach(el=>{
 el.classList.add('depth-surface');
 el.addEventListener('pointermove',e=>{if(motionOff||e.pointerType==='touch')return;const r=el.getBoundingClientRect();el.style.setProperty('--rx',`${(0.5-(e.clientY-r.top)/r.height)*7}deg`);el.style.setProperty('--ry',`${((e.clientX-r.left)/r.width-0.5)*9}deg`);el.style.setProperty('--light-x',`${(e.clientX-r.left)/r.width*100}%`)});
 el.addEventListener('pointerleave',()=>{el.style.setProperty('--rx','0deg');el.style.setProperty('--ry','0deg')});
});
const vision=document.querySelector('.vision');
vision.insertAdjacentHTML('beforeend','<div class="demo-controls"><button id="scan-demo">Run detection <span aria-hidden="true">↻</span></button><span id="scan-status" role="status">Illustrative demo · ready</span></div>');
vision.querySelector('button').addEventListener('click',e=>{const b=e.currentTarget;b.disabled=true;vision.classList.remove('scan-complete');vision.classList.add('scanning');document.getElementById('scan-status').textContent='Scanning the scene…';setTimeout(()=>{vision.classList.remove('scanning');vision.classList.add('scan-complete');document.getElementById('scan-status').textContent='2 objects located · demo complete';b.disabled=false;b.innerHTML='Scan again <span aria-hidden="true">↻</span>'},motionOff?0:1400)});
const signal=document.querySelector('.telemetry');
signal.insertAdjacentHTML('beforeend','<div class="demo-controls signal-controls"><label for="pipeline-load">Demo load <output id="load-value">50%</output></label><input id="pipeline-load" type="range" min="10" max="100" value="50" step="10"><span id="load-note">Illustrative signal · drag to explore</span></div>');
const signalPath=signal.querySelector('path');
document.getElementById('pipeline-load').addEventListener('input',e=>{const load=Number(e.target.value);document.getElementById('load-value').textContent=load+'%';const points=Array.from({length:17},(_,i)=>`${i*25},${Math.round(80-i*3+Math.sin(i*2.1+load/20)*(load/4))}`);signalPath.setAttribute('d','M'+points.join(' L'));signal.classList.add('signal-active')});
const analytics=document.querySelector('.analytics');
analytics.insertAdjacentHTML('beforeend','<div class="demo-controls analytics-controls"><div class="chart-switch" role="group" aria-label="Illustrative dashboard metric"><button data-chart="throughput" aria-pressed="true">Throughput</button><button data-chart="errors" aria-pressed="false">Errors</button></div><span id="chart-note" role="status">Demo · throughput trend</span></div>');
const series={throughput:[25,42,55,68,38,49,45,82,75,62,50,90],errors:[90,75,82,62,65,48,53,39,32,38,23,18]};
function chart(metric){analytics.querySelectorAll('.bars i').forEach((bar,i)=>{bar.style.height=series[metric][i]+'%';bar.style.setProperty('--bar-index',i)});analytics.querySelectorAll('[data-chart]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.chart===metric)));document.getElementById('chart-note').textContent=metric==='errors'?'Demo · declining ingestion errors':'Demo · throughput trend';analytics.classList.toggle('errors-view',metric==='errors')}
analytics.querySelectorAll('[data-chart]').forEach(b=>b.addEventListener('click',()=>chart(b.dataset.chart)));chart('throughput');
const contact=document.querySelector('#contact');
contact.querySelector('h2 .serif').classList.add('conversation-word');
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('motion-visible');observer.unobserve(e.target)}})},{threshold:.25});
observer.observe(contact);

// Editorial heading reveals; native buttons also support touch and keyboard replay.
const animatedHeadings=[
 {el:document.querySelector('#about h2'),lines:['Logic in my toolkit.','Curiosity at heart.'],kind:'curiosity'},
 {el:document.querySelector('#experience h2'),lines:['Experience that','shapes my perspective.'],kind:'perspective'}
];
animatedHeadings.forEach(({el,lines,kind})=>{
 el.classList.add('animated-heading',kind);
 const button=document.createElement('button');button.type='button';button.className='heading-play';
 button.setAttribute('aria-label',lines.join(' ')+' — replay animation');button.title='Tap to replay';
 button.innerHTML=lines.map((line,i)=>`<span class="heading-line heading-line-${i}"><span>${line}</span></span>`).join('');
 el.replaceChildren(button);observer.observe(el);
 let resetTimer;
 button.addEventListener('click',()=>{if(motionOff)return;clearTimeout(resetTimer);el.classList.remove('motion-visible');resetTimer=setTimeout(()=>el.classList.add('motion-visible'),40)});
});
const closingLine=document.getElementById('copy-status');closingLine.classList.add('creative-closing');
closingLine.innerHTML='<span>Exploring opportunities in <em>design.</em></span> <span>Open to meaningful collaborations.</span>';
observer.observe(closingLine);
