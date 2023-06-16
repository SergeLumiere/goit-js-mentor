// Завдання 3
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

//     <div>
//       <p class="taskTitle">ЗАДАЧА 3</p>
//       <input id="passwordInput" type="text" />
//       <button id="passwordButton">Скрыть</button>
//     </div>

const refs = {
  input: document.querySelector("#passwordInput"),
  button: document.querySelector("#passwordButton"),
};

const { input, button } = refs;

button.addEventListener("click", onClick);

function onClick() {
  const typeInput = input.getAttribute("type");
  if (typeInput === "text") {
    input.setAttribute("type", "password");
    button.textContent = "Раскрыть";
  } else {
    input.setAttribute("type", "text");
    button.textContent = "Скрыть";
  }
}
