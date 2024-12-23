const formLogin = document.querySelector('.login-form');
let cnt = 0;
let userId;
async function handleSubmit(event) {
  event.preventDefault();
  const code = document.getElementById('code');
  const data = {
    OTP: code.value,
    email: sessionStorage.getItem('email'),
  };
  try {
    if (checkRequired([code])) {
      const response = await axios.post(verifyUrl, data);
      console.log(response);
      if (response.status === 200) {
        window.location.href = '/my-component/setpassword.html';
      }
    }
  } catch (error) {
    showCustomAlert('Wrong OTP');
    showError(code, 'Invalid OTP');
    console.log('Error:', error.toJSON());
  }
}
formLogin.addEventListener('submit', handleSubmit);
