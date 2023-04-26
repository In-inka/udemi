/* const mango = {
  username: 'Mango',
  showUsername() {
    console.log(this);
    console.log(`My username is: ${this.username}`);
  },
};

const btn = document.querySelector('.js-btn');

// ✅ Працює
mango.showUsername();

// ❌ this буде посилатися на button, якщо використовувати showUsername як callback
btn.addEventListener('click', mango.showUsername); // не працює

// ✅ Не забувайте прив'язувати контекст методів об'єкта
btn.addEventListener('click', mango.showUsername.bind(mango)); */

/* const button = document.querySelector('.btn');

const handleClick = event => {
  console.log(event);
  console.log(event.type);
};

button.addEventListener('click', handleClick); */

/* document.addEventListener('keydown', event => {
  console.log('Keydown: ', event);
});

document.addEventListener('keyup', event => {
  console.log('Keyup: ', event);
});

document.addEventListener('keydown', event => {
  console.log('key: ', event.key);
  console.log('code: ', event.code);
}); */

/* document.addEventListener('keydown', event => {
  event.preventDefault();

  if ((event.ctrlKey || event.metaKey) && event.code === 'KeyS') {
    console.log('«Ctrl + s» or «Command + s» combo');
  }
}); */
const textInput = document.querySelector('.text-input');

const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener('click', () => {
  textInput.focus();
});

removeFocusBtn.addEventListener('click', () => {
  textInput.blur();
});

textInput.addEventListener('focus', () => {
  textInput.value = 'This input has focus';
});

textInput.addEventListener('blur', () => {
  textInput.value = '';
});
