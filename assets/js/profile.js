const fName = document.getElementById('first-name');
const lName = document.getElementById('last-name');
const e = document.getElementById('email');
const curr = JSON.parse(atob(token.split('.')[1]));
const frmProfile = document.getElementById('profile-form');
const currentPassword = document.getElementById('Password');
const newPassword = document.getElementById('new-Password');
const confirmPassword = document.getElementById('confirm-new-Password');

fName.value = curr.data.first_name || '';

lName.value = curr.data.last_name || '';

e.value = curr.data.email || '';

frmProfile.addEventListener('submit', async function (event) {
  event.preventDefault();
  const ok = [
    checkRequired([
      fName,
      lName,
      e,
      currentPassword,
      newPassword,
      confirmPassword,
    ]),
    checkLength(fName, 3, 15),
    checkLength(lName, 3, 15),
    checkLength(currentPassword, 8, 25),
    checkLength(newPassword, 8, 25),
    checkLength(confirmPassword, 8, 25),
    checkEmail(e),
    checkPasswordsMatch(newPassword, confirmPassword),
  ];
  const data = {
    first_name: fName.value,
    last_name: lName.value,
    email: e.value,
    current_password: currentPassword.value,
    password: newPassword.value,
    confirm_password: confirmPassword.value,
    token: token,
  };
  try {
    if (!ok.includes(false)) {
      const response = axios.post(profileUrl, data, {
        withCredentials: true,
      });
      showCustomAlert('Profile updated successfully!');
      location.reload();
    }
  } catch (err) {
    console.log(err.message);
    showCustomAlert('Failed to update profile');
  }
});
