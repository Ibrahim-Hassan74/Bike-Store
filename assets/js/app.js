async function sendHttpsRequest(data) {
  try {
    const response = await axios.post(registerUrl, data);
    console.log(response);
    showCustomAlert('success check your email for verfication');
  } catch (error) {
    showCustomAlert('email already registered');
    showError(email, '');
    console.log('Error:', error.toJSON());
  }
}
/*
firstName,
      lastName,
      email,
      password,
      password2,
      phoneNumber,
*/
// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  if (formControl.className.includes('full'))
    formControl.className = 'input-container input-full error';
  else formControl.className = 'input-container error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  if (formControl.className.includes('full'))
    formControl.className = 'input-container success input-full';
  else formControl.className = 'input-container success';
}

// Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // console.log(input.value, re.test(input.value.trim()));
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, 'Email is not valid');
    return false;
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      return false;
    } else {
      showSuccess(input);
    }
  });
  return true;
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
    return false;
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
    return false;
  } else {
    showSuccess(input);
    return true;
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
    return false;
  }
  return true;
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function isTokenExpired(token) {
  try {
    const state = JSON.parse(atob(token.split('.')[1]));
    // console.log(state.exp * 1000 < Date.now());
    return state.exp * 1000 < Date.now();
  } catch (e) {
    return true;
  }
}

function showCustomAlert(message) {
  document.getElementById('alert-message').innerText = message;
  document.getElementById('alert-overlay').style.display = 'flex';
}

function hideCustomAlert() {
  document.getElementById('alert-overlay').style.display = 'none';
}

// async function refreshAccessToken() {
//   try {
//     const response = await axios.post(
//       refreshTokenUrl,
//       {},
//       {
//         withCredentials: true,
//       }
//     );
//     const { accessToken } = response.data;
//     localStorage.setItem('accessToken', accessToken);
//     return accessToken;
//   } catch (error) {
//     console.log('Failed to refresh token:', error.message);
//     return null;
//   }
// }

// const axios = require('axios');

// const instant = axios.create();

// axios.interceptors.request.use(
//   async (resolve) => {
//     let accessToken = localStorage.getItem('accessToken');

//     if (window.location.pathname.includes('login.html')) {
//       return resolve;
//     }

//     if (!accessToken || isTokenExpired(accessToken)) {
//       accessToken = await refreshAccessToken();
//       if (!accessToken) {
//         if (!window.location.pathname.includes('login.html')) {
//           window.location.href = 'login.html';
//         }
//         throw new Error('Authorization failed');
//       }
//     }

//     resolve.headers.Authorization = `Bearer ${accessToken}`;
//     return resolve;
//   },
//   (reject) => {
//     return Promise.reject(reject);
//   }
// );

// axios.interceptors.response.use(
//   (resolve) => resolve,
//   async (reject) => {
//     if (reject.response && reject.response.status === 401) {
//       if (!window.location.pathname.includes('login.html')) {
//         window.location.href = 'login.html';
//       }
//     }
//     return Promise.reject(reject);
//   }
// );
