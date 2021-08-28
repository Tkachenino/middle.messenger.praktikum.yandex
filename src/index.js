import './components/input';
import './components/button';
import './components/preview';
import './components/message';

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

const messages = [
  { text: 'GGdgdgdg', date: '10:20', own: false },
  { text: 'GGdgdgdg', date: '10:20', own: false },
  { text: 'GGdgdgdg', date: '10:20', own: true },
  { text: 'GGdgdgdg', date: '10:20', own: false },
  { text: 'GGdgdgdg', date: '10:20', own: false },
  { text: 'GGdgdgdg', date: '10:20', own: true },
  { text: 'GGdgdgdg', date: '10:20', own: false },
  { text: 'GGdgdgdg', date: '10:20', own: false },
  { text: 'GGdgdgdg', date: '10:20', own: true },
  { text: 'GGdgdgdg', date: '10:20', own: false }
];
import authPageTemplate from './pages/auth-page/auth-page.hbs';
import registerPageTemplate from './pages/register-page/register-page.hbs';
import chatPageTemplate from './pages/chat-page/chat-page.hbs';
import profilePageTemplate from './pages/profile-page/profile-page.hbs';
import Page500Template from './pages/500-page/index.hbs';
import Page404Template from './pages/404-page/index.hbs';
import { Chat } from './pages/chat-page';
import { Profile } from './pages/profile-page';
import { Auth } from './pages/auth-page';
import { Register } from './pages/register-page';
import { Page500 } from './pages/500-page';
import { Page404 } from './pages/404-page';

const authPage = authPageTemplate();
const registerPage = registerPageTemplate();
const chatPage = chatPageTemplate({ chats, messages });
const profilePage = profilePageTemplate();
const page500 = Page500Template();
const page404 = Page404Template();

export const chat = new Chat({ template: chatPage });
export const profile = new Profile({ template: profilePage });
export const auth = new Auth({ template: authPage });
export const register = new Register({ template: registerPage });
export const server_error_page = new Page500({ template: page500 });
export const not_found_page = new Page404({ template: page404 });

document.addEventListener('DOMContentLoaded', () => {
  let random = Math.random();
  if (random < 0.2) {
    server_error_page.render();
  } else if (random > 0.8) {
    not_found_page.render();
  } else {
    chat.render();
  }
});
