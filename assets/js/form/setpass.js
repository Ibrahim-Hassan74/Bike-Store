const formLogin = document.querySelector('.login-form');
formLogin.addEventListener('submit', async function (event) {
  event.preventDefault();
  const password = document.getElementById('newpassword');
  const password2 = document.getElementById('confirmpassword');
  const data = {
    password: password.value,
    password2: password2.value,
  };
  try {
    const response = await axios.post(setpassUrl, data);
    console.log(response);
  } catch (error) {
    console.log('Error:', error.toJSON());
  }
});
