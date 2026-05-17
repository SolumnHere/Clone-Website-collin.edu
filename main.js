const video = document.querySelector('video');
const btn = document.getElementById('video-btn');

btn.addEventListener('click', () => {
  btn.classList.toggle('play');
  
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});