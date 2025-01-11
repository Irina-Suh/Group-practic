const tweets = [
  { id: "000", name: "Alex", gender: "male", likes: 5, tags: ["js", "nodejs"] },
  {
    id: "001",
    name: "Kate",
    gender: "female",
    likes: 2,
    tags: ["html", "css"],
  },
  {
    id: "002",
    name: "Maria",
    gender: "female",
    likes: 17,
    tags: ["html", "js", "nodejs"],
  },
  {
    id: "003",
    name: "Borys",
    gender: "male",
    likes: 8,
    tags: ["css", "react"],
  },
  {
    id: "004",
    name: "Jhon",
    gender: "male",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
  {
    id: "005",
    name: "Anna",
    gender: "female",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
  {
    id: "006",
    name: "Jhon",
    gender: "male",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
];

// 1. Створити функцію getNames(array), яка приймає масив об'єктів
// і повертає масив імен усіх користувачів (поле name).
// *зробити функцію універсальною getRandomValues(array, prop), щоб вона повертала
// масив значень будь-якої заданої властивості
// **з перевіркою наявності такої властивості:
// якщо властивості немає - повертати 'Sory, no such property in array!'

// function getNames(array) {
//   return array.map((element) => element.name);
// }
// console.log(getNames(tweets));

// function getRandomValues(array, prop) {
//   if (array[0][prop]) {
//     return array.map((element) => element[prop]);
//   }
//   return "Sory, no such property in array!";
// }
// console.log(getRandomValues(tweets, "tag"));

// 2. Напишіть функцію getUsersWithJs(array), яка приймає масив об'єктів і
// повертає масив тільки тих користувачів,
// у кого є тег "js" (властивість tags)

// function getUsersWithJs(array) {
//   return array.filter(element => element.tags.includes("js"));
// }

// console.log(getUsersWithJs(tweets))

// 3. Написати функцію getUsersWithGender(array, gender), яка приймає масив і стать
// і повертає масив імен користувачів по цій статі (властивість gender)

// function getUsersWithGender(array, gender) {
//   return array.filter(element => element.gender === gender).map(element => element.name);
// }

// function getUsersWithGender(array, gender) {
//   return array.reduce((names, element) => {
//     if (element.gender === gender) {
//       names.push(element.name);
//     }
//     return names;
//   }, []);
// }

// console.log(getUsersWithGender(tweets, "male"))

// 4. Написати функцію getSortedUniqueTags(array), яка приймає масив
// і повертає масив всіх тегів усіх користувачів (поле tags), при цьому не повинно бути
// повторювань тегів і вони мають бути відсортовані в алфавітному порядку.
// Використай ланцюжок методів.

// function getSortedUniqueTags(array) {
//   return array.flatMap(element => element.tags).filter((element, index, arr) => arr.indexOf(element) === index).toSorted((a, b) => a.localeCompare(b))

// }

// console.log(getSortedUniqueTags(tweets))

// 1. Створи клас User для створення користувача з такими властивостями:
// a. userName - ім'я, рядок
// b. age - вік, число
// c. numberOfPosts - кількість постів, число
// d. конструктор очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
// Додай метод getInfo(), який повертає рядок:
// `Користувачеві <name> <age> років і в нього <posts> публікацій.`
// Додай метод updateNumberOfPosts(amount), який оновлює кількість постів юзера
// де amount - це число, кількість постів, що має додаватись до вже існуючих у властивості numbersOfPost

// class User {
//   constructor (obj) {
//     this.userName = obj.userName;
//     this.age = obj.age;
//     this.numberOfPosts = obj.numberOfPosts;
// }
// getInfo() {
//   return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numberOfPosts} публікацій.`
// }
// updateNumberOfPosts(amount){
//  this.numberOfPosts += amount;
// }
// }
// const user = new User({
//   userName: "Alena",
//   age: 30,
//   numberOfPosts: 2,
// })
// console.log(user)
// console.log(user.updateNumberOfPosts(5))
// console.log(user.getInfo())

// 2. Напиши класс Client який створює об'єкт
// із властивостями login, email
// Об'яви приватні властивості #login і #email,
// доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set changeEmail(newEmail) перезаписує пошту користувача

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get getClientData() {
//     return { clientLogin: this.#login, clientGmail: this.#email };
//   }
//   set changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client = new Client("group", "group@gmail");

// console.log(client);
// console.log(client.getClientData);
// client.changeEmail = "group2@gmail";
// console.log(client.getClientData.clientGmail);

// 3. Напиши класс Notes який управляє коллекцієй нотаток у
// властивості items.
// Нотатка це  об'єкт з властивостями text, priority
// Додай класу статичну властивість Priority,
// в якій буде зберігатись об'єкт з пріорітетами ("high", "middle", "low").
// Додай методи getNotes(), addNote(note), removeNote(noteText)
// updatePriority(noteText, newPriority)

class Notes {
  static Priority = {
    HIGH: "high",
    MIDDLE: "middle",
    LOW: "low",
  };
  constructor() {
    this.items = [];
  }
  getNotes() {
    return this.items;
  }
  addNote(note) {
    this.items.push(note);
  }
  removeNote(noteText) {
    this.items = this.items.filter((item) => item.text !== noteText);
  }
  updatePriority(noteText, newPriority) {
    const note = this.items.find((item) => item.text === noteText);
    if (note) {
      note.priority = newPriority;
    }
  }
}

const notes = new Notes();

notes.addNote({
  text: "Hello Group!",
  priority: Notes.Priority.MIDDLE,
});

notes.addNote({
  text: "COOL Group!",
  priority: Notes.Priority.LOW,
});
notes.addNote({
  text: "Bay Group!",
  priority: Notes.Priority.HIGH,
});
console.log(notes.removeNote("COOL Group!"));
console.log(notes.updatePriority("Bay Group!", Notes.Priority.MIDDLE));
console.log(notes.getNotes());
