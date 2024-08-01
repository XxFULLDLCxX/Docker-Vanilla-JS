import { orientation } from '../utils/events.js';
import { render } from '../utils/render.js';

console.log('Hello, Vanilla JS!');
console.log('Before DOMContentLoaded');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  orientation();
  render('pages/private/private.html', '#header');
});

console.log('After DOMContentLoaded');

const routes = {
  '/': '<h1>Home Page</h1><p>Welcome to the Home Page.</p>',
  '/about': '<h1>About Page</h1><p>Welcome to the About Page.</p>',
  '/private': '<h1>Private Page</h1><p>You need to log in to view this content.</p>',
};

 // Router function to handle URL changes
 const router = () => {
  const potentialMatch = Object.keys(routes).find(
    (route) => route === location.pathname
  );

  const app = document.querySelector('#app');
  if (potentialMatch) {
    app.innerHTML = routes[potentialMatch];
  } else {
    app.innerHTML = '<h1>404 - Page Not Found</h1>';
  }
};

// Handle back/forward browser buttons
window.addEventListener('popstate', router);

// Initial call to router to handle the initial URL
console.log('After popstate');
router();
console.log('Before popstate');


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
