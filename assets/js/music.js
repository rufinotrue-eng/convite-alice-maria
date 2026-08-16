(function(){
  const audio = new Audio('assets/music/musica-fundo-alice.mp3');
  audio.loop = true;
  audio.volume = 0.28;
  let playing = false;
  function play(){
    audio.play().then(()=>{playing=true; update();}).catch(()=>{});
  }
  function update(){
    const b=document.querySelector('.music-toggle');
    if(!b)return;
    b.textContent=playing?'🔊':'🔇';
    b.classList.toggle('off',!playing);
    b.title=playing?'Pausar música':'Ativar música';
  }
  window.addEventListener('pointerdown',function(){ if(!playing) play(); },{once:true});
  window.addEventListener('keydown',function(){ if(!playing) play(); },{once:true});
  document.addEventListener('DOMContentLoaded',function(){
    const b=document.querySelector('.music-toggle');
    if(b){b.addEventListener('click',function(e){e.preventDefault();e.stopPropagation(); if(playing){audio.pause();playing=false;}else{play();} update();});update();}
    play();
  });
})();
