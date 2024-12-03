form.addEventListener('submit', (e) => {
  e.preventDefault();
  const ok = [
    checkRequired([
      firstName,
      lastName,
      email,
      password,
      password2,
      phoneNumber,
    ]),
    checkLength(firstName, 3, 15),
    checkLength(lastName, 3, 15),
    checkLength(password, 8, 25),
    checkEmail(email),
    checkPasswordsMatch(password, password2),
  ];

  if (!ok.includes(false)) {
    // const fd = new FormData(form);
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const password2Value = password2.value;
    const phoneNumberValue = phoneNumber.value;
    const data = {
      first_name: firstNameValue,
      last_name: lastNameValue,
      email: emailValue,
      password: passwordValue,
      password2: password2Value,
      phone_number: phoneNumberValue,
    };
    sendHttpsRequest(data);
  }
});
