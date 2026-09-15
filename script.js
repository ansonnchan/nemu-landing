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

document.querySelectorAll('.copy-button').forEach((button) => {
  button.addEventListener('click', async () => {
    const value = button.dataset.copy;
    if (!value) return;

    try {
      await navigator.clipboard.writeText(value);
      const previous = button.textContent;
      button.textContent = 'copied';
      window.setTimeout(() => {
        button.textContent = previous;
      }, 1400);
    } catch {
      button.textContent = 'select';
    }
  });
});
