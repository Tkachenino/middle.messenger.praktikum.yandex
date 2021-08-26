// import Handlebars from 'handlebars/dist/handlebars.runtime';
// import template from './button.hbs';
import './components/input/input';
import './components/button/button';
import './components/preview/preview';

const chats = [
  {
    name: 'Влад',
    image:
      'https://images.unsplash.com/profile-1589352637695-cd91ccd020f0image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
    text: 'Text message',
    date: '11:23',
    count: '12'
  },
  {
    name: 'Влад',
    image:
      'https://images.unsplash.com/profile-1589352637695-cd91ccd020f0image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
    text: 'Text message',
    date: '11:23',
    count: '12'
  },
  {
    name: 'Влад',
    image:
      'https://images.unsplash.com/profile-1589352637695-cd91ccd020f0image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
    text: 'Text message',
    date: '11:23',
    count: '12'
  },
  {
    name: 'Влад',
    image:
      'https://images.unsplash.com/profile-1589352637695-cd91ccd020f0image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
    text: 'Text message',
    date: '11:23',
    count: '12'
  },
  {
    name: 'Влад',
    image:
      'https://images.unsplash.com/profile-1589352637695-cd91ccd020f0image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
    text: 'Text message',
    date: '11:23',
    count: '12'
  },
  {
    name: 'Влад',
    image:
      'https://images.unsplash.com/profile-1589352637695-cd91ccd020f0image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
    text: 'Text message',
    date: '11:23',
    count: '12'
  },
  {
    name: 'Влад',
    image:
      'https://images.unsplash.com/profile-1589352637695-cd91ccd020f0image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
    text: 'Text message',
    date: '11:23',
    count: '12'
  },
  {
    name: 'Влад',
    image:
      'https://images.unsplash.com/profile-1589352637695-cd91ccd020f0image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
    text: 'Text message',
    date: '11:23',
    count: '12'
  }
];

// import authPageTemplate from './pages/auth-page/auth-page.hbs';
import registerPageTemplate from './pages/register-page/register-page.hbs';
import chatPageTemplate from './pages/chat-page/chat-page.hbs';

// const authPage = authPageTemplate();
// const registerPage = registerPageTemplate();
const chatPage = chatPageTemplate({ chats });

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = chatPage;
});
