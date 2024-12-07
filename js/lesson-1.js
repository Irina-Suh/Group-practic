//1. Використовуя if...else,
//напишіть код, який буде питати через prompt:
//"Яка офіційна назва JavaScript?"
// Якщо користувач вводить "ECMASCRIPT",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"
// *регістр не повинен впливати на правильну відповідь

// const name_js = prompt('Яка офіційна назва JavaScript?').toLocaleUpperCase();
// // if (name_js === 'ECMASCRIPT') {
// //    alert("Вірно!")
// // } else {
// //     alert ("Не знаєте? ECMAScript!")
// // }
// alert(name_js === 'ECMASCRIPT' ? "Вірно!" : "Не знаєте? ECMAScript!");


//2. Напишіть программу, яка отримує від користувача
//число (кількість хвилин) через prompt і виводить у консоль
//рядок у форматі годин та хвилин
// 70 === 01:10
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples


const numb = +prompt('Введи число');
let hours = numb / 60;
let hour = Math.floor(hours);
let min = numb % 60;
let finHour = String(hour).padStart(2, "0");
let finMin = String(min).padStart(2, "0");

console.log(`${finHour}:${finMin}`);
