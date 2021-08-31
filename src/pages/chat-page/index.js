import { profile } from '../../index';

export class Chat {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    document.body.innerHTML = this.template;
    this.afterRender();
  }

  afterRender() {
    const profileLink = document.querySelector(
      '.control-panel--button-profile'
    );

    profileLink.addEventListener('click', () => {
      profile.render();
    });
  }
}
