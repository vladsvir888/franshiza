import YouTubePlayer from 'youtube-player';

const initVideo = () => {
  const arr = [];

  function stopVideo(playerId) {
    arr.forEach((item) => {
      item.getIframe().then((res) => {
        if (res.id !== playerId) {
          item.pauseVideo();
        }
      });
    });
  }

  function createIframe(id, video) {
    const player = YouTubePlayer(video.querySelector('.video__iframe'), {
      videoId: id,
    });

    player.on('stateChange', (event) => {
      if (event.data === 1) {
        stopVideo(event.target.h.id);
      }
    });

    arr.push(player);

    player.playVideo();
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
      createIframe(id, video);

      link.remove();
      button.remove();
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
