const refs = {
  form: document.querySelector('#task-form'),
  taskList: document.querySelector('#task-list'),
};
const NAME_KEY = 'input_value';

const { form, taskList } = refs;
const arr = [];
// const id = Math.random();
// arr.push({ name, id });
// const tasks = JSON.parse(localStorage.getItem(NAME_KEY));
// const filteredTasks = tasks.filter((task) => task.id !== id);
render();

form.addEventListener('submit', onSubmit);
taskList.addEventListener('click', onClick);
function onSubmit(event) {
  event.preventDefault();
  const task = event.target.elements.taskName.value.trim();
  if (!task) return;
  arr.push(task);
  saveData(arr);
  const dataFromLocalStorage = JSON.parse(localStorage.getItem(NAME_KEY));
  if (!dataFromLocalStorage) return;
  createMarkup(dataFromLocalStorage);
  event.target.reset();
}

function saveData(data) {
  localStorage.setItem(NAME_KEY, JSON.stringify(data));
}

function createMarkup(data) {
  console.log(data);
  const line = data
    .map(
      (elem) =>
        `<li>
        <span>${elem}</span>
        <button type="button">Delete</button>
    </li>`
    )
    .join('');
  console.log(line);
  taskList.innerHTML = '';
  taskList.insertAdjacentHTML('beforeend', line);
}

function render() {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem(NAME_KEY));
  if (!dataFromLocalStorage) return;
  createMarkup(dataFromLocalStorage);
}
function onClick(evt) {
  const textValue = evt.target.previousElementSibling.textContent;
  const dataFromLocalStorage = JSON.parse(localStorage.getItem(NAME_KEY));
  if (!dataFromLocalStorage) return;
  const idx = dataFromLocalStorage.indexOf(textValue);
  dataFromLocalStorage.splice(idx, 1);
  saveData(dataFromLocalStorage);
  createMarkup(dataFromLocalStorage);
}
