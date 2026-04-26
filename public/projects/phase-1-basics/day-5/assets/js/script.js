passwordToggle();
handleFormSubmit();

function handleFormSubmit() {
  const passwordInvalid = document.querySelector("#passwordInvalid");
  const emailInvalid = document.querySelector("#emailInvalid");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const form = document.querySelector("form");


  form.addEventListener("submit", (e) => {
    let errors = { email: false, password: false };
    e.preventDefault();
    validateForm(errors);
    
    if(Object.keys(errors).some(key => errors[key] === true)){
      return;
    } else {
      alert("form submitted");
      form.reset();
    }
  })

  function validateForm(errors) {
    const EMAILREGEX = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
    const PASSWORDREGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    validateEmail();
    validatePassword();

    function validateEmail() {
      if (email.value.trim() === '') {
        showError(emailInvalid);
      } else if (!EMAILREGEX.test(email.value)) {
        showError(emailInvalid);
      } else {
        hideError(emailInvalid);
      }
    }

    function validatePassword() {
      if (password.value.trim() === '') {
        showError(passwordInvalid);
        errors.password = true;
      } else if (!PASSWORDREGEX.test(password.value)) {
        showError(passwordInvalid);
        errors.password = true;
      } else {
        hideError(passwordInvalid);
        errors.password = false;
      }
    }

    function showError(error) {
      error.classList.remove("opacity-0");
      error.classList.add("shake");
      setTimeout(() => {
        error.classList.remove("shake");
      }, 500)
    }
    function hideError(error) {
      error.classList.add("opacity-0");
    }
  }

}

function passwordToggle() {
  const PASSWORD = 'password'
  const TEXT = 'text'

  const passwordIcon = document.querySelector('.preview_icon')
  const passwordField = document.querySelector('.password_input')
  const eyeIcon = document.querySelector('.fas')

  eyeIcon.classList.add('fa-eye')

  function togglePassword() {
    if (passwordField.type === PASSWORD) {
      passwordField.type = TEXT

      eyeIcon.classList.remove('fa-eye')
      eyeIcon.classList.add('fa-eye-slash')
    } else {
      passwordField.type = PASSWORD

      eyeIcon.classList.add('fa-eye')
      eyeIcon.classList.remove('fa-eye-slash')
    }
  }

  passwordIcon.addEventListener('click', togglePassword);

}