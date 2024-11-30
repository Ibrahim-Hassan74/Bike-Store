form.addEventListener('submit', (e) => {
  e.preventDefault();
  const ok =
    checkRequired([
      firstName,
      lastName,
      email,
      password,
      password2,
      phoneNumber,
    ]) &&
    checkLength(username, 3, 15) &&
    checkLength(password, 6, 25) &&
    checkEmail(email) &&
    checkPasswordsMatch(password, password2);
  if (ok) {
    const fd = new FormData();
    fd.append('name', `${firstName.value} ${lastName.value}`);
    fd.append('email', email.value);
    fd.append('password', password.value);
    fd.append('password2', password2.value);
    fd.append('phone', phoneNumber.value);
    sendHttpsRequest('POST', fd);
    // form.reset();
  }
});
