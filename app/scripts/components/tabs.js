class Tabs {
  static selectors = {
    tab_list: '[role=tablist]',
    tab_btn: '[role=tab]',
  }

  static classes = {
    hidden: 'tabs--hidden',
  }

  constructor(groupNode) {
    this.tablistNode = groupNode;

    this.tabs = [...this.tablistNode.querySelectorAll(Tabs.selectors.tab_btn)];
    this.tabpanels = [];

    // eslint-disable-next-line prefer-destructuring
    this.firstTab = this.tabs[0];
    this.lastTab = this.tabs[this.tabs.length - 1];

    this.tabs.forEach((tab) => {
      const tabpanel = document.getElementById(tab.getAttribute('aria-controls'));

      tab.setAttribute('tabindex', -1);
      tab.setAttribute('aria-selected', 'false');
      this.tabpanels.push(tabpanel);

      tab.addEventListener('keydown', this.onKeydown.bind(this));
      tab.addEventListener('click', this.onClick.bind(this));
    });

    this.setSelectedTab(this.firstTab, false);
  }

  setSelectedTab(currentTab, setFocus) {
    if (typeof setFocus !== 'boolean') {
      // eslint-disable-next-line no-param-reassign
      setFocus = true;
    }

    this.tabs.forEach((tab, i) => {
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
      index = this.tabs.indexOf(currentTab);
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
