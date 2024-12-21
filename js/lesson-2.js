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

// 4. Напишіть функцію calculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.

// function calculateAverage() {
//   let sum = 0;
//   let count = 0;

//   for (const arg of arguments) {
//     if (typeof arg === 'number') {
//       sum += arg;
//       count++;
//     }
//   }
//   return count > 0 ? sum / count : 0;
// }

// console.log(calculateAverage(2, 4, 12, 23, 65, 4, 45, 20));
// console.log(calculateAverage(2, 4, 12, 'єфвіа', 65, 4, 45, 20));
// console.log(calculateAverage());

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

// user.mood = 'happy'
// user.hobby = 'skydiving'
// user.premium = false

// const userKeys = Object.keys(user)

// for (const key of userKeys) {
//     console.log(`${key}: ${user[key]}`)
// }

// 9. Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх
// як властивості об'єкта
// sum() повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті)
// mult() перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// raise() возводить першу властивсть в ступінь другої і повертає результат (з перевіркою на наявність властивостей в об'єкті)
// * винеси перевірку на наявність властивостей в об'єкті в окремий метод exist ()

const calculator = {
  read(a, b) {
    this.valueA = a;
    this.valueB = b;
  },
  exist() {
    return this.valueA && this.valueB;
  },
  sum() {
    if (this.exist()) {
      return this.valueA + this.valueB;
    }
    return "Not value";
  },
  mult() {
    if (this.exist()) {
      return this.valueA * this.valueB;
    }
    return "Not value";
  },
  raice() {
    if (this.exist()) {
      return this.valueA ** this.valueB;
    }
    return "Not value";
  },
};

console.log(calculator.read(10, 4));
console.log(calculator.sum());
console.log(calculator.mult());
console.log(calculator.raice());
