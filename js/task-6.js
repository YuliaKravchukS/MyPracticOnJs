// Створення класу:
// Створіть клас Person, який має властивості name та age.
//Напишіть метод getInfo, який повертає рядок з інформацією про особу.


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getInfo() {
//         return ` This is ${this.name}. I am ${this.age} old`;
//     }
// }

// const yulia = new Person('Yulia', 34)

// console.log(yulia.getInfo());


// Наслідування класів:
// Створіть клас Student, який наслідує від класу Person. Додайте нову властивість grade
// та оновіть метод getInfo так, щоб він включав інформацію про оцінку студента.


// class Person {
//     constructor(name, age, grade) {
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//     }

//     getInfo() {
//         return ` This is ${this.name}. I am ${this.age} old. My grade : ${this.grade}`;
//     }
// }

// class Student extends Person {
//     constructor(name, age, grade) {
//         super(name, age);
//         this.grade = grade;
//     }

//     getInfo() {
//         return `This is ${this.name}. I am ${this.age} years old, and my grade is ${this.grade}`;
//     }
// }

// const yulia = new Student('Yulia', 34, 'A');

// console.log(yulia.getInfo());

// Контекст функції:
// Створіть функцію printName, яка приймає параметр callback і викликає його з контекстом об'єкту
//{ name: "John" }. Передайте до цієї функції звичайну функцію, яка виводить ім'я.

// function printName(callback) {
//     const contextObject = { name: "John" };
//     callback.call(contextObject);
// }

// function printNameCallback() {
//     console.log(this.name);
// }


// Зміна контексту:
// Створіть об'єкт user з методом sayHello. Змініть контекст цього методу так, щоб він виводив Hello,
//{ім'я}! за допомогою властивості об'єкту user.

// const user = {
//     name: 'John',
//     sayHello() {
//         console.log(`Hello, ${this.name}!`);
//     }
// };

// user.sayHello();


// Динамічна зміна контексту:
// Створіть функцію changeContext, яка приймає об'єкт та функцію. Викликайте цю функцію з контекстом,
//що передається, та перевірте, чи вона правильно викликає функцію.


// function changeContext(obj, func) {
//     func.call(obj);
// }

// const user = {
//     name: 'John',
//     sayHello() {
//         console.log(`Hello, ${this.name}!`);
//     }
// };

// changeContext(user, user.sayHello); // Виведе "Hello, John!"

// Клас зі статичним методом:
// Створіть клас Calculator зі статичним методом add, який приймає два числа та повертає їхню суму.


// class Calculator {
//     static add(a, b) {
//         return a + b;
//     }
// }
// const result = Calculator.add(5, 7);
// console.log(result); // Виведе 12


// Клас зі статичною властивістю:
// Створіть клас Counter зі статичною властивістю count, яка зберігає кількість екземплярів класу.
 //Зробіть так, щоб при створенні нового екземпляру Counter, значення count збільшувалося на 1.

// class Counter {
//     static count = 0;

//     constructor() {
//         Counter.count++;
//     }

//     // Інші методи та властивості класу, якщо необхідно
// }

// // При створенні екземплярів count буде збільшуватися
// const counter1 = new Counter();
// console.log(Counter.count); // Виведе 1

// const counter2 = new Counter();
// console.log(Counter.count); // Виведе 2




// Створення об'єкту за допомогою класу:
// Створіть клас Product, який має властивості name та price. Створіть об'єкт product1 за
//допомогою цього класу з ім'ям "Laptop" та ціною 1000.


// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;

//     }
// }

// const user = new Product("Laptop", 1000);
// console.log(user);

// Використання super:
// Створіть батьківський клас Animal з методом makeSound. Створіть клас Dog, який наслідує
//від Animal і перевизначає метод makeSound, виводячи "Woof!"

// class Animal {
  
//     constructor(sound) {

//         this.sound = sound;
//     }
//     makeSound() {
//         return this.sound;
//     }
// }

// class Dog extends Animal {
//     constructor(sound) {
//         super(sound);
//          }
// }

// const yulia = new Dog('Woof!');

// console.log(yulia.makeSound());

// Контекст та методи об'єкту:
// Створіть об'єкт person з методом sayHello. Передайте цей метод як колбек до функції,
//де контекст виклику буде іншим об'





// const person = {
//     name: 'John',
//     sayHello() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// function greet(callback) {
//     const contextObject = {
//         name: 'Alice'
//     };
//     callback.call(contextObject);
// }

// // Passing sayHello method as a callback to greet function
// greet(person.sayHello); // Output: Hello, my name is Alice