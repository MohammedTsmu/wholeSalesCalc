// document.addEventListener('DOMContentLoaded', function () {
//     const loginContainer = document.getElementById('loginContainer');
//     const loginForm = document.getElementById('loginForm');
//     const signupForm = document.getElementById('signupForm');
//     const logoutButton = document.getElementById('logoutButton');
//     const message = document.getElementById('message');

//     // Check if the user is already logged in
//     const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

//     // Check if user data is stored in localStorage
//     const users = JSON.parse(localStorage.getItem('users')) || [];

//     if (isLoggedIn) {
//         // User is logged in, show logout button and hide login/signup forms
//         loginContainer.style.display = 'none';
//         logoutButton.style.display = 'block';
//         const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
//         message.textContent = `Welcome, ${currentUser.username}!`;
//     } else {
//         // User is not logged in, show login/signup forms
//         loginContainer.style.display = 'block';
//     }

//     loginForm.addEventListener('submit', function (e) {
//         e.preventDefault();
//         const username = document.getElementById('loginUsername').value;
//         const password = document.getElementById('loginPassword').value;

//         const user = users.find(u => u.username === username && u.password === password);

//         if (user) {
//             sessionStorage.setItem('isLoggedIn', 'true');
//             sessionStorage.setItem('currentUser', JSON.stringify(user));
//             message.textContent = `Welcome, ${user.username}!`;
//             loginContainer.style.display = 'none';
//             logoutButton.style.display = 'block';
//         } else {
//             message.textContent = 'Invalid credentials. Please try again.';
//         }
//     });

//     signupForm.addEventListener('submit', function (e) {
//         e.preventDefault();
//         const username = document.getElementById('signupUsername').value;
//         const password = document.getElementById('signupPassword').value;

//         // Check if the username is already taken
//         const userExists = users.some(u => u.username === username);

//         if (userExists) {
//             message.textContent = 'Username is already taken. Please choose another one.';
//         } else {
//             // Add the new user to the array and update localStorage
//             const newUser = { username, password };
//             users.push(newUser);
//             localStorage.setItem('users', JSON.stringify(users));

//             sessionStorage.setItem('isLoggedIn', 'true');
//             sessionStorage.setItem('currentUser', JSON.stringify(newUser));

//             message.textContent = 'Account created successfully. You can now log in.';
//             loginContainer.style.display = 'none';
//             logoutButton.style.display = 'block';
//         }
//     });

//     logoutButton.addEventListener('click', function () {
//         // Log the user out by removing session data
//         sessionStorage.removeItem('currentUser');
//         sessionStorage.removeItem('isLoggedIn');
//         loginContainer.style.display = 'block';
//         logoutButton.style.display = 'none';
//         message.textContent = '';
//     });

//     // Check if the page is being closed or refreshed
//     window.addEventListener('beforeunload', function () {
//         if (sessionStorage.getItem('isLoggedIn') === 'true') {
//             // User is logged in, clear session data
//             sessionStorage.removeItem('currentUser');
//             sessionStorage.removeItem('isLoggedIn');
//         }
//     });
// });