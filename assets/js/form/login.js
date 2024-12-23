const formLogin = document.querySelector('.login-form');
formLogin.addEventListener('submit', async function (event) {
  event.preventDefault();
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const data = {
    email: email.value,
    password: password.value,
  };
  // const formData = new FormData(formLogin);

  try {
    const ok = [
      checkRequired([email, password]),
      checkEmail(email),
      checkLength(password, 8, 25),
    ];
    // console.log(ok);
    if (!ok.includes(false)) {
      const response = await axios.post(loginUrl, data, {
        withCredentials: true,
      });
      localStorage.setItem('accessToken', response.data['access_token']);
      window.location.href = '../index.html';
      console.log(response);
    }
  } catch (error) {
    showCustomAlert('Wrong email or password');
    showError(email, '');
    showError(password, '');
    console.log('Error:', error.message);
  }
});
