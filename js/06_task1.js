// Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)

// 		<div>
//       <p class="taskTitle">ЗАДАЧА 1</p>
//       <button id="alertButton">SHOW ME</button>
//       <input id="alertInput" type="text" />
//				<p class="js-title"></p>;
//     </div>

const refs = {
  button: document.querySelector("#alertButton"),
  input: document.querySelector("#alertInput"),
  p: document.querySelector(".js-title"),
};
const {button, input, p}=refs


button.addEventListener("click", showTextContent(input, p));

// function onClick(event) {
// 	refs.p.textContent = refs.input.value;
// }

function showTextContent(input, p) {
	
	return function () {
		p.textContent = input.value;
	}
}