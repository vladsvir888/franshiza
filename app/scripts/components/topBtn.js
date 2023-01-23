const toggleBtn = () => {
  const topBtn = document.querySelector('.top-btn');
  const target = document.querySelector('.title--h1');

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        topBtn.classList.add('top-btn--active');
      } else {
        topBtn.classList.remove('top-btn--active');
      }
    });
  };

  const observer = new IntersectionObserver(callback);

  observer.observe(target);
};

export default toggleBtn;
