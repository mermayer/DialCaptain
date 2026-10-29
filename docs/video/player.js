/* Browser video controls only. No USB, device API or configuration access. */
(() => {
  'use strict';
  const data=JSON.parse(document.getElementById('tutorial-data').textContent);
  const video=document.getElementById('video'),list=document.getElementById('chapters');
  const now=document.getElementById('now'),hint=document.getElementById('stepHint');
  const back=document.getElementById('back'),next=document.getElementById('next');
  let active=-1,scene=-1;
  const clock=t=>`${Math.floor(t/60)}:${String(Math.floor(t%60)).padStart(2,'0')}`;
  const selected=()=>{let i=0;for(let n=0;n<data.chapters.length;n++)if(video.currentTime>=data.chapters[n].start-.05)i=n;return i;};
  function update(){
    const i=selected();
    if(active!==i){
      active=i;[...list.children].forEach((button,j)=>button.setAttribute('aria-current',String(i===j)));
      now.textContent=`${data.chapterLabel} ${i+1} · ${data.chapters[i].title}`;
    }
    let s=0;for(let n=0;n<data.scenes.length;n++)if(video.currentTime>=data.scenes[n].start-.05)s=n;
    if(scene!==s){scene=s;hint.textContent=data.scenes[s].caption;
      document.querySelectorAll('[data-language]').forEach(a=>{const u=new URL(a.getAttribute('href'),location.href);u.searchParams.set('chapter',data.scenes[s].id);a.href=u.href;});}
    back.disabled=video.currentTime<.1;next.disabled=i===data.chapters.length-1;
  }
  async function jump(t){
    if(!video.readyState){video.load();await new Promise((resolve,reject)=>{video.addEventListener('loadedmetadata',resolve,{once:true});video.addEventListener('error',reject,{once:true});});}
    video.currentTime=Math.max(0,Math.min(t,video.duration||t));update();
  }
  data.chapters.forEach(c=>{
    const button=document.createElement('button');button.type='button';button.className='button';
    const time=document.createElement('time');time.textContent=clock(c.start);const title=document.createElement('span');title.textContent=c.title;
    button.append(time,title);button.setAttribute('aria-label',`${c.title} · ${time.textContent}`);button.addEventListener('click',()=>void jump(c.start).catch(()=>{}));list.append(button);
  });
  back.addEventListener('click',()=>void jump(video.currentTime-15).catch(()=>{}));
  next.addEventListener('click',()=>void jump(data.chapters[Math.min(selected()+1,data.chapters.length-1)].start).catch(()=>{}));
  document.getElementById('speed').addEventListener('change',e=>{video.playbackRate=Number(e.target.value);});
  ['timeupdate','seeked','loadedmetadata','durationchange'].forEach(event=>video.addEventListener(event,update));
  video.addEventListener('error',()=>{document.getElementById('error').hidden=false;});
  update();
  const requested=new URLSearchParams(location.search).get('chapter');
  if(requested){const s=data.scenes.find(s=>s.id===requested);if(s)void jump(s.start).catch(()=>{});}
})();
