/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
const refs = {
  button: document.querySelector('#swapButton'),
  inputLeft: document.querySelector('#leftSwapInput'),
  inputRight: document.querySelector('#rightSwapInput'),
};
const { button, inputLeft, inputRight } = refs;
button.addEventListener('click', onChange);
function onChange() {
  const inputLeftValue = inputLeft.value;
  const inputRightValue = inputRight.value;
  inputLeft.value = inputRightValue;
  inputRight.value = inputLeftValue;
}

//  <div>
//    <p class="taskTitle">ЗАДАЧА 2</p>
//    <button id="swapButton">SWAP ME</button>
//    <input id="leftSwapInput" type="text" value="???" />
//    <input id="rightSwapInput" type="text" value="!!!" />
//  </div>;
