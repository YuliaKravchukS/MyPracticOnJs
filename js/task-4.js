// Створення об'єкта:
// Створіть об'єкт, який представляє інформацію про вас.
//Об'єкт повинен містити властивості, такі як ім'я, вік, місто тощо.

// const myInfo = {
//     name: 'Yulia',
//     age: 34,
//     country: 'Ukraine',
//     city: 'Bucha',
// }

// console.log(myInfo);
// Метод об'єкта:
// Додайте до попереднього об'єкта метод, який виводить інформацію
//про вас в зручному форматі(наприклад, в консоль).


// const myInfo = {
//     name: 'Yulia',
//     age: 34,
//     country: 'Ukraine',
//     city: 'Bucha',

//     getInfo(myInfo) {
//     console.log(this.age, this.city, this.name, this.country);
//     }
// }

// myInfo.getInfo()


// Перебирання властивостей:
// Створіть функцію, яка приймає об'єкт і виводить в консоль всі його властивості
//та їхні значення.


// function printObjectProperties(obj) {
//     for (const key in obj) {
//         if (Object.hasOwnProperty.call(obj, key)) {
//             console.log(`${key}: ${obj[key]}`);
//         }
//     }
// }

// const exampleObject = {
//     name: 'John',
//     age: 25,
//     country: 'USA',
//     occupation: 'Developer'
// };

// printObjectProperties(exampleObject);

// Зміна властивостей:
// Додайте до попереднього об'єкта метод,
//який дозволяє змінювати значення певної властивості.

// const exampleObject = {
//     name: 'John',
//     age: 25,
//     country: 'USA',
//     occupation: 'Developer',

//     changeProperty(key, newValue) {
//         for (const prop in this) {
//             if (prop === key) {
//                 this[prop] = newValue;
//             }
//         }
//     }
// };

// exampleObject.changeProperty('name', 'Alice');

// Масив об'єктів:
// // Створіть масив об'єктів, де кожен об'єкт представляє інформацію
// //про різних користувачів(ім'я, вік, місто).

// const users = [
//   { name: 'John', age: 25, country: 'USA', occupation: 'Developer' },
//   { name: 'Yulia', age: 34, country: 'Ukraine', occupation: 'Developer' },
//   { name: 'Kos', age: 39, country: 'Ukraine', occupation: 'Developer' }
// ];

// Пошук об'єкта за властивістю:
// Напишіть функцію, яка приймає масив об'єктів і шукає користувача за ім'ям
//чи іншою властивістю.

const users = [
  { name: 'John', age: 25, country: 'USA', occupation: 'Developer' },
  { name: 'Yulia', age: 34, country: 'Ukraine', occupation: 'Developer' },
  { name: 'Kos', age: 39, country: 'Ukraine', occupation: 'Developer' }
];

function foo(users) {
    
}

// Метод map для об'єкта:
// Створіть метод об'єкта, який використовує подібний до map метод для 
//перетворення значень властивостей об'єкта.

// Метод filter для об'єкта:
// Створіть метод об'єкта, який використовує подібний до filter метод для 
//фільтрації об'єкта за певною умовою.

// Об'єкт для замовлення товарів:
// Створіть об'єкт, який представляє замовлення товарів. У цьому об'єкті 
//повинні бути властивості, такі як товари, кількість, адреса доставки тощо.

// Метод для підрахунку вартості:
// Додайте до об'єкта з попереднього завдання метод, який підраховує 
//загальну вартість замовлення(кількість товару помножити на ціну).