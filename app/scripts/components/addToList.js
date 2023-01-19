const addToList = () => {
  document.addEventListener('click', (e) => {
    const { target } = e;

    const closestEl = target.closest('.btn--toggle');

    if (!closestEl) return;

    const useEl = closestEl.querySelector('use');
    const textEl = closestEl.querySelector('span');

    const useElAttr = useEl.getAttribute('href');

    const arr = useElAttr.split('#');

    if (!closestEl.classList.contains('btn--toggle-active')) {
      closestEl.classList.add('btn--toggle-active');
      useEl.setAttribute('href', `${arr[0]}#square_active`);
      textEl.textContent = 'Добавлена в список';
    } else {
      closestEl.classList.remove('btn--toggle-active');
      useEl.setAttribute('href', `${arr[0]}#square`);
      textEl.textContent = 'Добавить в список';
    }
  });
};

export default addToList;
