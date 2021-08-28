import { chat, auth } from '../../index';

export class Register {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    document.body.innerHTML = this.template;
    this.afterRender();
  }

  afterRender() {
    const chatLink = document.querySelector('.link');
    const authLink = document.querySelector('.button');

    chatLink.addEventListener('click', () => {
      chat.render();
    });

    authLink.addEventListener('click', () => {
      auth.render();
    });
  }
}
