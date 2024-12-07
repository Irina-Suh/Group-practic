//1. Використовуя if...else,
//напишіть код, який буде питати через prompt:
//"Яка офіційна назва JavaScript?"
// Якщо користувач вводить "ECMASCRIPT",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"
// *регістр не повинен впливати на правильну відповідь

const name_js = prompt('Яка офіційна назва JavaScript?').toLocaleUpperCase();
// if (name_js === 'ECMASCRIPT') {
//    alert("Вірно!")
// } else {
//     alert ("Не знаєте? ECMAScript!")
// }
alert(name_js === 'ECMASCRIPT' ? "Вірно!" : "Не знаєте? ECMAScript!");