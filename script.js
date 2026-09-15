const video = document.querySelector('#demo-video');
const prompt = document.querySelector('.video-prompt');

if (video && prompt) {
  prompt.addEventListener('click', async () => {
    await video.play();
    prompt.classList.add('hidden');
  });

  video.addEventListener('play', () => prompt.classList.add('hidden'));
  video.addEventListener('pause', () => {
    if (video.currentTime === 0 || video.ended) prompt.classList.remove('hidden');
  });
  video.addEventListener('ended', () => prompt.classList.remove('hidden'));
}
