const form = document.querySelector('.form');

form.addEventListener('submit', onformSubmit);

function onformSubmit(event) {
  event.preventDefault();

  const {
    elements: { login, password },
  } = event.currentTarget;

  if (login.value === '' || login.password === '') {
    alert('Please fill in all the fields!');
  }

  const data = {
    login: login.value,
    password: password.value,
  };
  console.log(data);
}
