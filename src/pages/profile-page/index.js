import { chat, auth } from '../../index';

export class Profile {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    document.body.innerHTML = this.template;
    this.afterRender();
  }

  afterRender() {
    const chatLink = document.querySelector('.profile--nav');
    const authLink = document.querySelector('.exit');

    chatLink.addEventListener('click', () => {
      chat.render();
    });

    authLink.addEventListener('click', () => {
      auth.render();
    });
  }
}
