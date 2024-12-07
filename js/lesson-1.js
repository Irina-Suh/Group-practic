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

/* const numb = +prompt('Введи число');
let hours = numb / 60;
let hour = Math.floor(hours);
let min = numb % 60;
let finHour = String(hour).padStart(2, "0");
let finMin = String(min).padStart(2, "0");

console.log(`${finHour}:${finMin}`); */

//3. Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел
// * перепиши код на функцію getNumbers(min, max)

/* const max = 33;
const min = 3;
let total = 0;
for (let i = max; i >= min; i--) {
    if (i % 2 === 0) {
        total += i
    }
    console.log(i)

}
console.log(total) */

// function getNumbers(min, max) {
//   let total = 0;
//   for (let i = max; i >= min; i--) {
//     if (i % 2 === 0) {
//       total += i;
//     }
//     console.log(i);
//   }
//   return total;
// }

// console.log(getNumbers(3, 33));

// 4. Змінна num може набувати 4 значення: 1, 2, 3 або 4 (запитуй число у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишемо 'winter', якщо має значення '2' - 'spring' і т.д.
// Розв'яжіть завдання через switch-case.

// const number = +prompt("Введіть число від 1 до 4");
// let result = "";
// switch (number) {
//   case 1:
//     result = "winter";
//     break;
//   case 2:
//     result = "spring";
//     break;
//   case 3:
//     result = "summer";
//     break;
//   case 4:
//     result = "autumn";
//     break;
//   default:
//     result = "Введіть число від 1 до 4";
// }
// console.log(result);

// 6. Напишіть функцію checkNumber(num), яка перевіряє число:
// Якщо число ділитися на 3 повертати "fizz"
// Якщо ділитися на 5 повертати "buzz"
// Якщо ділитися на 3 і на 5 повернути "fizzbuzz"
// Додайте перевірку, що параметр дійсно є числом (в іншому випадку
// функція має повертати "Not a number")
// В якості дефолтного випадку повернути "Error!"

function checkNumber(num) {
  if (typeof num !== "number") {
    return "Not a number";
  }
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  }
  if (num % 3 === 0) {
    return "fizz";
  }
  if (num % 5 === 0) {
    return "buzz";
  }
  return "Error!";
}
console.log(checkNumber(7));
