const form = document.querySelector('.login-form');
form.addEventListener('submit', async function (event) {
  event.preventDefault();
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const data = {
    email: email.value,
    password: password.value,
  };
  const formData = new FormData(form);

  try {
    const response = await axios.post('', formData);
    console.log(response);
  } catch (error) {
    console.log('Error:', error.message);
  }
});
