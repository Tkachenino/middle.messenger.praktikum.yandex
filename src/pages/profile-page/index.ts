import { chat, auth } from '../../index';

export class Profile {
  template: string;

  constructor({ template }) {
    this.template = template;
  }

  render() {
    document.body.innerHTML = this.template;
    this.afterRender();
  }

  afterRender() {
    const chatLink = document.querySelector('.profile--nav');
    const authLink = document.querySelector('#logout');
    const changeProfile = document.querySelector('#change-info');
    const changePassword = document.querySelector('#change-password');

    const profileData = document.querySelector('.profile-data');
    const profileForm = document.querySelector('.profile-form--data');
    const passwordForm = document.querySelector('.profile-form--password');

    chatLink.addEventListener('click', () => {
      chat.render();
    });

    authLink.addEventListener('click', () => {
      auth.render();
    });

    changeProfile.addEventListener('click', () => {
      if (profileForm.classList.contains('shadow')) {
        profileData.classList.add('shadow');
        profileForm.classList.remove('shadow');
        passwordForm.classList.add('shadow');
      } else {
        profileData.classList.remove('shadow');
        profileForm.classList.add('shadow');
        passwordForm.classList.add('shadow');
      }
    });

    changePassword.addEventListener('click', () => {
      if (passwordForm.classList.contains('shadow')) {
        profileData.classList.add('shadow');
        profileForm.classList.add('shadow');
        passwordForm.classList.remove('shadow');
      } else {
        profileData.classList.remove('shadow');
        profileForm.classList.add('shadow');
        passwordForm.classList.add('shadow');
      }
    });
  }
}
