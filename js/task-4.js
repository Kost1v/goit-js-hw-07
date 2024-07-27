
const form = document.querySelector('.login-form')

form.addEventListener('submit', formSumbit);

function formSumbit (event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  };

  const formInfo = {
    email,
    password,
  }
  console.log(formInfo);

  form.reset();
}