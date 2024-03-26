const serverUrl = 'http://localhost:3000';

// Function to show the login form and hide others
function showLoginForm() {
  $('#loginForm').show();
  $('#registerForm').hide();
  $('#loggedInPage').hide();
  $('#loginLink').hide();
  $('#registerLink').show();
}

// Function to show the register form and hide others
function showRegisterForm() {
  $('#loginForm').hide();
  $('#registerForm').show();
  $('#loggedInPage').hide();
  $('#loginLink').show();
  $('#registerLink').hide();
}

// Function to handle login process
function login(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the username and password values
  var username = document.getElementById('loginUsername').value;
  var password = document.getElementById('loginPassword').value;

  // Send the login data to the server
  $.ajax({
    type: 'POST',
    url: `${serverUrl}/login`,
    contentType: 'application/json',
    data: JSON.stringify({ username, password }),
  })
    .done((response) => {
      if (response.success) {
        console.log('Login successful');
        showLoggedInPage(response.id, username, password);
      } else {
        console.error('Login failed', response.error);
        alert('Invalid credentials. Please try again.');
        clearFields();
      }
    })
    .fail((error) => {
      console.error('Login failed', error.responseText);
      alert('Invalid credentials. Please try again.');
      clearFields();
    });
}

// Function to handle registration process
function register(event) {
  // If event is not provided, create a dummy event object
  if (!event) {
    event = new Event('click');
  }

  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the username, password, and email values
  var username = document.getElementById('registerUsername').value;
  var password = document.getElementById('registerPassword').value;
  var email = document.getElementById('registerEmail').value;

  // Send the registration data to the server
  $.ajax({
    type: 'POST',
    url: `${serverUrl}/register`,
    contentType: 'application/json',
    data: JSON.stringify({ username, password, email }),
  })
    .done((response) => {
      console.log('Registration successful');
      showLoginForm();
      clearFields();
    })
    .fail((error) => {
      console.error('Registration failed', error.responseText);
      alert('Registration failed. Please try again.');
      clearFields();
    });
}

// Function to show the logged-in page
function showLoggedInPage(id, username, password) {
  // Hide login and register forms and links
  showSection('loggedInPage');

  // Update the logged-in page with user information
  document.getElementById('loggedInUsername').textContent = username;
  document.getElementById('loggedInId').textContent = id;
  document.getElementById('loggedInPassword').textContent = password;

  // Store the user's logged-in state in session storage
  sessionStorage.setItem('isLoggedIn', true);
  sessionStorage.setItem('userId', id);
  sessionStorage.setItem('username', username);
  sessionStorage.setItem('password', password);
}

function logout() {
  // Remove the user's logged-in state from session storage
  sessionStorage.removeItem('isLoggedIn');
  sessionStorage.removeItem('userId');
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('password');

  // Perform any necessary logout actions
  showLoginForm();
  clearFields();
}

// Helper function to show a section and hide others
function showSection(sectionId) {
  $('#loginForm').hide();
  $('#registerForm').hide();
  $('#loggedInPage').hide();
  $('#loginLink').hide();
  $('#registerLink').hide();
  $(`#${sectionId}`).show();
}

// Check if the user is logged in when the page loads
window.onload = function () {
  var isLoggedIn = sessionStorage.getItem('isLoggedIn');
  if (isLoggedIn) {
    var userId = sessionStorage.getItem('userId');
    var username = sessionStorage.getItem('username');
    var password = sessionStorage.getItem('password');
    showLoggedInPage(userId, username, password);
  } else {
    showLoginForm();
  }
};

function clearFields() {
  $('#loginUsername').val('');
  $('#loginPassword').val('');
  $('#registerUsername').val('');
  $('#registerPassword').val('');
  $('#registerEmail').val('');
}

// Add event listeners
document.getElementById('loginButton').addEventListener('click', login);
document.getElementById('registerButton').addEventListener('click', register);