import { orientation } from './events.js';
import { render } from './render.js';

console.log('Hello, Vanilla JS!');
console.log('Before DOMContentLoaded');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  orientation();
  render('../../private/private.html', '#header');
});

console.log('After DOMContentLoaded');
const protectRoute = () => {
  const currentPath = window.location.pathname;
  const publicPaths = ['/index.html', '/login.html'];
  const isPublicPath = publicPaths.includes(currentPath);

  if (!isPublicPath && !isAuthenticated()) {
    window.location.href = '/authenticated/private.html';
  }
};
// document.addEventListener('DOMContentLoaded', () => {
//   const isAuthenticated = () => {
//       // Check if user is authenticated
//       // This example uses localStorage for simplicity
//       return localStorage.getItem('auth') === 'true';
//   };

//   const protectRoute = () => {
//       const currentPath = window.location.pathname;
//       const publicPaths = ['/index.html', '/login.html'];
//       const isPublicPath = publicPaths.includes(currentPath);

//       if (!isPublicPath && !isAuthenticated()) {
//           window.location.href = '/public/login.html';
//       }
//   };

//   const handleLogin = (event) => {
//       event.preventDefault();
//       const username = document.getElementById('username').value;
//       const password = document.getElementById('password').value;

//       // Simple authentication logic for demo purposes
//       if (username === 'user' && password === 'pass') {
//           localStorage.setItem('auth', 'true');
//           window.location.href = '/public/private.html';
//       } else {
//           alert('Invalid credentials!');
//       }
//   };

//   const loginForm = document.getElementById('loginForm');
//   if (loginForm) {
//       loginForm.addEventListener('submit', handleLogin);
//   }

//   protectRoute();
// });
