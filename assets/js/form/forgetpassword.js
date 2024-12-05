const formLogin = document.querySelector('.login-form');
formLogin.addEventListener('submit', async function (event) {
  event.preventDefault();
  const email = document.getElementById('email');
  const data = {
    email: email.value,
  };
  sessionStorage.setItem('email', email.value);
  // const formData = new FormData(formLogin);
  try {
    const response = await axios.post(forgotpassUrl, data);
    console.log(response);
    window.location.href = '/my-component/Verifycode.html';
    // window.open('/../../../my-component/Verifycode.html');
  } catch (error) {
    console.log('Error:', error.toJSON());
  }
});
