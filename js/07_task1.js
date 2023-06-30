const refs = {
  form: document.querySelector("#task-form"),
  taskList: document.querySelector("#task-list"),
};
const NAME_KEY = "input_value";

const { form, taskList } = refs;

render();

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const task = event.target.elements.taskName.value.trim();
  if (!task) return;
  saveData(task);
}

function saveData(data) {
  localStorage.setItem(NAME_KEY, data);
}

function createMarkup(data) {
  const line = `<li>
        <span>${data}</span>
        <button type="button">Delete</button>
    </li>`;
  taskList.insertAdjacentHTML("beforeend", line);
}

function render() {
  const dataFromLocalStorage = localStorage.getItem(NAME_KEY);
  if (!dataFromLocalStorage) return;
  createMarkup(dataFromLocalStorage);
}
