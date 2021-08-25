// import Handlebars from 'handlebars/dist/handlebars.runtime';
// import template from './button.hbs';
import authPageTemplate from './pages/auth-page/auth-page.hbs';
// const button = template({ buttonName: 'Кнопка' });
const authPage = authPageTemplate();
document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = authPage;
});
