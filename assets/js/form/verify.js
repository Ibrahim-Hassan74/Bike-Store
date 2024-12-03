const formLogin = document.querySelector('.login-form');
let cnt = 0;
let userId;
formLogin.addEventListener('submit', async function (event) {
  event.preventDefault();
  if (cnt === 0) {
    const code = document.getElementById('code');
    const data = {
      OTP: code.value,
    };
    // const formData = new FormData(formLogin);
    try {
      const response = await axios.post(verifyUrl, data);
      console.log(response);
      if (response.status === 200) {
        const container = document.querySelector('.container');
        userId = response.data['user_id'];
        container.innerHTML = `
          <h1 class="heading-primary">Set a password</h1>
          <p class="login-description">
            Your previous password has been reseted. Please set a new password for
            your account.
          </p>
    
          <form class="login-form">
            <div class="input-container">
              <label for="newpassword">Create Password</label>
              <input type="password" id="newpassword" name="newpassword" required />
            </div>
            <div class="input-container">
              <label for="confirmpassword">Re-enter Password</label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                required
              />
            </div>
            <button type="submit" class="login-button">Set Password</button>
          </form>
          `;
        cnt = 1;
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  } else {
    const newPassword = document.getElementById('newpassword');
    const confirmPassword = document.getElementById('confirmpassword');
    const data = {
      user_id: userId,
      password: newPassword.value,
      confirm_password: confirmPassword.value,
    };
    try {
      const response = await axios.post(setpassUrl, data);
      console.log(response);
      if (response.status === 200) {
        // alert('Password set successfully!');
        window.location.href = '/my-component/login.html';
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  }
});
