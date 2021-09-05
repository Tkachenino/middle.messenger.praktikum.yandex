import { chat, register } from '../../index';

interface IPage {
  template: string;
  render(): void;
  afterRender(): void;
}

export class Auth implements IPage {
  template: string;

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
