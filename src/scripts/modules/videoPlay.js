export default function videoPlay() {
  const allVideos = document.querySelectorAll('[data-video]');

  // eslint-disable-next-line no-useless-return
  if (!allVideos.length) return;

  allVideos.forEach((item) => {
    const videoDs = item.querySelector('.video__video--desk');
    const videoMb = item.querySelector('.video__video--mobile');
    const playBtn = item.querySelector('button');

    let videoLaunched = false;
    const mobileWidthMediaQuery = window.matchMedia('(min-width: 768px)');

    playBtn?.addEventListener('click', () => {
      if (!videoLaunched) {
        item.classList.add('play-video');
        playBtn.classList.add('hide');
        videoLaunched = true;

        if (mobileWidthMediaQuery.matches) {
          videoDs.play();
        } else {
          videoMb.play();
        }
      } else {
        if (mobileWidthMediaQuery.matches) {
          videoDs.pause();
        } else {
          videoMb.pause();
        }

        videoLaunched = false;
        playBtn.classList.remove('hide');
        item.classList.remove('play-video');
      }
    });
  });
}
