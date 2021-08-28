import { chat } from '../../index';

export class Page404 {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    document.body.innerHTML = this.template;
    this.afterRender();
  }

  afterRender() {
    const chatLink = document.querySelector('.link');

    chatLink.addEventListener('click', () => {
      chat.render();
    });
  }
}
