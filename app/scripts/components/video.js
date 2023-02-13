import YouTubePlayer from 'youtube-player';

const initVideo = () => {
  const arr = [];

  function createIframe(id, video) {
    return YouTubePlayer(video.querySelector('.video__iframe'), {
      videoId: id,
    });
  }

  function parseMediaURL(media) {
    const regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    const url = media.src;
    const match = url.match(regexp);

    return match[1];
  }

  function setupVideo(video) {
    const link = video.querySelector('.video__link');
    const media = video.querySelector('.video__media');
    const button = video.querySelector('.video__btn');
    const id = parseMediaURL(media);

    video.addEventListener('click', () => {
      const iframe = createIframe(id, video);

      arr.push(iframe);

      link.remove();
      button.remove();

      arr.forEach((item) => item.pauseVideo());

      iframe.playVideo();
    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
  }

  function findVideos() {
    const videos = document.querySelectorAll('.video');

    videos.forEach((videoEl) => {
      setupVideo(videoEl);
    });
  }

  findVideos();
};

export default initVideo;
