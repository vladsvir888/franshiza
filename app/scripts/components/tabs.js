class Tabs {
  static selectors = {
    tab_list: '[role=tablist]',
    tab_btn: '[role=tab]',
  }

  static classes = {
    hidden: 'tabs--hidden',
  }

  constructor(groupNode) { // обертка кнопок табов
    this.tablistNode = groupNode;

    this.tabs = [...this.tablistNode.querySelectorAll(Tabs.selectors.tab_btn)]; // каждая из кнопок табов
    this.tabpanels = []; // массив контентов табов

    this.firstTab = this.tabs[0];
    this.lastTab = this.tabs[this.tabs.length - 1];

    this.tabs.forEach((tab) => { // тут мы для всех кнопок табов устанавливает tabindex -1, aria-selected=false, пушим контентов табов в массив контентов табов, навешиваем обработчики
      const tabpanel = document.getElementById(tab.getAttribute('aria-controls'));

      tab.setAttribute('tabindex', -1);
      tab.setAttribute('aria-selected', 'false');
      this.tabpanels.push(tabpanel);

      tab.addEventListener('keydown', this.onKeydown.bind(this));
      tab.addEventListener('click', this.onClick.bind(this));
    });

    this.setSelectedTab(this.firstTab, false); // тут для первой кнопки табов устанавливаем aria-selected=true, удаляем tabindex, удаляем класс, который отвечает за скрытие табов и устанавливаем фокус
  }

  setSelectedTab(currentTab, setFocus) {
    if (typeof setFocus !== 'boolean') {
      setFocus = true;
    }

    this.tabs.forEach((tab, i) => { // проверяем условие (если кнопка кликнутого таба равна итерируемой кнопке)
      if (currentTab === tab) {
        tab.setAttribute('aria-selected', 'true');
        tab.removeAttribute('tabindex');
        this.tabpanels[i].classList.remove(Tabs.classes.hidden);

        if (setFocus) {
          tab.focus();
        }
      } else {
        tab.setAttribute('aria-selected', 'false');
        tab.setAttribute('tabindex', -1);
        this.tabpanels[i].classList.add(Tabs.classes.hidden);
      }
    });
  }

  setSelectedToPreviousTab(currentTab) {
    let index;

    if (currentTab === this.firstTab) {
      this.setSelectedTab(this.lastTab);
    } else {
      index = this.tabs.indexOf(currentTab); // находим индекс текущего таба (тот, с которого уходит фокус)
      this.setSelectedTab(this.tabs[index - 1]);
    }
  }

  setSelectedToNextTab(currentTab) {
    let index;

    if (currentTab === this.lastTab) {
      this.setSelectedTab(this.firstTab);
    } else {
      index = this.tabs.indexOf(currentTab);
      this.setSelectedTab(this.tabs[index + 1]);
    }
  }

  /* handlers */
  onKeydown(event) {
    const tgt = event.currentTarget;
    let flag = false;

    switch (event.key) {
      case 'ArrowLeft':
        this.setSelectedToPreviousTab(tgt);
        flag = true;
        break;

      case 'ArrowRight':
        this.setSelectedToNextTab(tgt);
        flag = true;
        break;

      case 'Home':
        this.setSelectedTab(this.firstTab);
        flag = true;
        break;

      case 'End':
        this.setSelectedTab(this.lastTab);
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  onClick(event) {
    this.setSelectedTab(event.currentTarget);
  }
}

export default Tabs;
