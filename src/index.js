// import Handlebars from 'handlebars/dist/handlebars.runtime';
// import template from './button.hbs';
import './components/input/input';
import './components/button/button';

// import authPageTemplate from './pages/auth-page/auth-page.hbs';
import registerPageTemplate from './pages/register-page/register-page.hbs';

// const button = template({ buttonName: 'Кнопка' });
// const authPage = authPageTemplate();
const registerPage = registerPageTemplate();
document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = registerPage;
});
