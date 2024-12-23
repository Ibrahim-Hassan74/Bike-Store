const formLogin = document.querySelector('.login-form');
formLogin.addEventListener('submit', async function (event) {
  event.preventDefault();
  const password = document.getElementById('newpassword');
  const password2 = document.getElementById('confirmpassword');
  const data = {
    email: sessionStorage.getItem('email'),
    password: password.value,
    password2: password2.value,
  };
  try {
    const ok = [
      checkRequired([password, password2]),
      checkLength(password, 8, 25),
      checkLength(password2, 8, 25),
      checkPasswordsMatch(password, password2),
    ];
    if (!ok.includes(false)) {
      const response = await axios.post(setpassUrl, data);
      console.log(response);
      sessionStorage.removeItem('email');
      window.location.href = '/my-component/login.html';
    }
  } catch (error) {
    console.log('Error:', error.toJSON());
  }
});
