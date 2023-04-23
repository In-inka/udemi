const select = document.querySelector('.pizza-select');
const textOutput = document.querySelector('.text-output');
const valueOutput = document.querySelector('.value-output');

select.addEventListener('change', onSelectChange);

function onSelectChange() {
  const selectOptValue = select.value;

  const selectOptIndex = select.selectedIndex;

  const selectOptText = select.options[selectOptIndex].text;

  textOutput.textContent = selectOptText;
  valueOutput.textContent = selectOptValue;
}
