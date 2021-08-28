import { chat, register } from '../../index';

export class Auth {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    document.body.innerHTML = this.template;
    this.afterRender();
  }

  afterRender() {
    const chatLink = document.querySelector('.button');
    const registerLink = document.querySelector('.link');

    chatLink.addEventListener('click', () => {
      chat.render();
    });

    registerLink.addEventListener('click', () => {
      register.render();
    });
  }
}
