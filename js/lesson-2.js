// 1. Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте в кінець 'rock-n-roll'
// Заменіть значення 'blues' на 'classic'
// Напишіть функцію logItems(array), яка приймає
// масив і використовує цикл for, який для кожного елемента
// буде виводити повідомлення у форматі:
// <номер елемента> - <значення елемента>
// Нумерація має починатись з 1

const styles = ['jazz', 'blues'];
styles.push('rock-n-roll');
// styles[1] = 'classic';
let newValue = styles.indexOf('blues');
if (newValue !== -1) {
    styles[newValue] = 'classic'; 
};

function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i+1} ${array[i]}`)
    }
}

logItems(styles);