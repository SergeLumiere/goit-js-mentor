//  *? Напишіть цикл, який виводить у консоль
//   *? числа від max до min за спаданням
//   *? Виведіть у консоль усіх парних чисел від min до max

const min = Number(prompt("Прошу ввести мінімальне число"));
const max = Number(prompt("Прошу ввести максимальне число"));

for (let i = min; i <= max; i += 1) {
    // console.log(!Boolean(i % 2) && i)
    // console.log(i % 2 === 0)
    if(i % 2 === 0) {
        console.log(i, "парне число");
    } 

}
