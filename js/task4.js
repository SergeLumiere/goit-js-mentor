// *? Напишіть код, який запитуватиме
// *? логін за допомогою prompt та логувати результат
// *? у консоль браузера
    
// *? Якщо відвідувач вводить "Адмін",
// *? то prompt запитує пароль.
// *? Якщо нічого не ввели або натиснуто клавішу Esc
// *? вивести рядок "Скасовано"
// *? В іншому випадку вивести рядок "Я вас не знаю"
    
// *? Пароль перевіряти так:
// *? Якщо введено пароль "Я головний",
// *? то вивести рядок "Здрастуйте!"
// *? інакше виводити рядок "Невірний пароль!"

const login = prompt("ВВедіть логін").trim().toLowerCase();
console.log(login);
const loginPrompt = "Адмін".toLowerCase();
const PASSW_PROMPT = "Я головний";
if(login === loginPrompt){
    const passw = prompt("ВВедіть пароль"); 
    console.log(passw);
    if (passw === PASSW_PROMPT) {
        alert("Здрастуйте!");
    }  
    else{
        alert("Невірний пароль!");
    }
} else if (!login){
    alert("Скасовано");
}
else {
    alert("Я вас не знаю");
}
