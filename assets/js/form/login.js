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
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully',
      });
      setTimeout(() => {
        window.location.href = '../index.html';
      }, 2000);
      console.log(response);
    }
  } catch (error) {
    showCustomAlert(
      'Wrong',
      'Wrong email or password',
      'error',
      'Invalid email or password'
    );

    showError(email, '');
    showError(password, '');
    console.log('Error:', error.message);
  }
});
