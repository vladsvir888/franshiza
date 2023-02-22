const topBtn = () => {
  const btn = document.querySelector('.top-btn');
  const target = document.querySelector('.breadcrumbs');

  if (!btn || !target) return;

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        btn.classList.add('top-btn--active');
      } else {
        btn.classList.remove('top-btn--active');
      }
    });
  };

  const observer = new IntersectionObserver(callback);

  observer.observe(target);
};

export default topBtn;
