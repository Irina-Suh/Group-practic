// 1. Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте в кінець 'rock-n-roll'
// Заменіть значення 'blues' на 'classic'
// Напишіть функцію logItems(array), яка приймає
// масив і використовує цикл for, який для кожного елемента
// буде виводити повідомлення у форматі:
// <номер елемента> - <значення елемента>
// Нумерація має починатись з 1

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// // styles[1] = 'classic';
// let newValue = styles.indexOf('blues');
// if (newValue !== -1) {
//     styles[newValue] = 'classic';
// };

// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${i+1} ${array[i]}`)
//     }
// }

// logItems(styles);

// 2. Напиши функцію checkLogin(array), яка перебирає масив логінів і перевіряє
// чи є ім'я введене в prompt у цьому масиві і у разі,
// якщо є - виводить повідомлення в alert "Welcome, <name>!"
// в іншому випадку - "User not found"

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//     const name = prompt("Enter your name");
//     if (array.includes(name)) {
//         alert(`Welcome, ${name}!`);
//     } else {
//         alert("User not found");
//     }
// }
// const logins = ["Peter", "John", "Igor", "Sasha"];
// checkLogin(logins)

// 3. Напишіть функцію, яка складатиме сусідні числа і пушитиме їх в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function newNumbers(array) {
//     let sum = [];
//     for (let i = 0; i < array.length-1; i++){
//         sum.push(array[i] + array[i + 1]);
        
//     }
//     return sum;
// }

// console.log(newNumbers(someArr))






// 7. Напиши скрипт, який для об'єкту user,
// послідовно:
// 1 - додасть поле mood зі значенням 'happy'
// 2 - замінить hobby на 'skydiving'
// 3 - замінить значення premium на false
// 4 - виводить зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of
// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };