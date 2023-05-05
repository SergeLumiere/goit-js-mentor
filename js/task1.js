//   *? напишіть код, який запитуватиме:
//   *? "Яка офіційна назва JavaScript?"
//   *? Якщо користувач вводить "ECMAScript",
//   *? то показати через alert: "Вірно!"
//   *? інакше відобразити:"Не знаєте? ECMAScript!"

let title = "Off name JavaScript?";

// // Дальше - свойство
// console.log(title.length);
// // Дальше - метод
// console.log(title.toLowerCase());

const result = prompt(title).trim().toLowerCase();

if (result == "ECMAScript".toLowerCase()) {
  alert("Virno!");
} else {
  alert("Не знаєте? ECMAScript!");
}
