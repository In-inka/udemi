const parent = document.querySelector('#parent');

parent.addEventListener('click', event => {
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
});

parent.addEventListener('click', () => {
  alert(
    'Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!'
  );
});

child.addEventListener('click', () => {
  alert(
    'Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!'
  );
});

descendant.addEventListener('click', event => {
  event.stopPropagation();
  alert('Descendant click handler');
});
