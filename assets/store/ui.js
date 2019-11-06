import { observable, action, configure } from 'mobx';

configure({ enforceActions: 'observed' });

class UI {
  // 左侧展示隐藏
  @observable collapsed = false;
  @observable pageType = 'firstPage';
  @action toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
  @action reset() {
    this.collapsed = false;
  }
  @action handlePageType = (data) => {
    this.pageType = data;
  };
}

const ui = new UI();

export default ui;
