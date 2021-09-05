import { auth } from '../../index';

export class Register {
  template: string;

  constructor({ template }) {
    this.template = template;
  }

  render() {
    document.body.innerHTML = this.template;
    this.afterRender();
  }

  afterRender() {
    const authLink = document.querySelector('.button');
    authLink.addEventListener('click', () => {
      auth.render();
    });
  }
}
