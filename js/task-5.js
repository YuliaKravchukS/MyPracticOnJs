// Підрахунок суми:
// Створіть функцію, яка приймає масив чисел і повертає їхню суму.

// const numbers = [1, 13, 15, 19, 50];
// function foo(numbers) {
//     let total = 0;
//     for (const i of numbers) {
//         total += i;
//     }
//     return total
// }

// console.log(foo(numbers));

// Фільтрація парних чисел:
// Створіть функцію, яка приймає масив чисел і повертає новий масив, який містить лише парні числа.


// const numbers = [1, 2, 13, 15, 19, 50];
// function foo(numbers) {
//     const evenNumb = numbers.filter(num => num % 2 === 0)
//     return evenNumb
// }

// console.log(foo(numbers));
// Знаходження максимального елемента:
// Створіть функцію, яка приймає масив чисел і повертає найбільший елемент у цьому масиві.

// const numbers = [30, 1, 2, 13, 15, 190, 50];
// function foo(arr) {
//   if (arr.length === 0) {
//     return "Масив порожній";
//   }

//   return Math.max(...arr);
// }

// console.log(foo(numbers));
// Перетворення масиву:
// Створіть функцію, яка приймає масив чисел і повертає новий масив, в якому кожен елемент збільшений
//на 2.

//  const numbers = [30, 1, 2, 13, 15, 190, 50];
// const foo = (arr) => arr.map(elem=> elem+2 )


// console.log(foo(numbers));
// Перевірка на парність:
// Створіть функцію, яка приймає масив чисел і повертає true, якщо всі числа парні,
//та false в іншому випадку.

// const numbers = [30, 1, 2, 13, 15, 190, 50];
// const foo = (arr) => arr.every(elem=> elem %2 ===0 )


// console.log(foo(numbers));
// Фільтрація за умовою:
// Створіть функцію, яка приймає масив користувачів (об'єктів) і фільтрує їх за
//певною умовою(наприклад, вік більше 25).

// const users = [
//   { id: 1, name: 'John', age: 25 },
//   { id: 2, name: 'Anna', age: 30 },
//   { id: 3, name: 'Bob', age: 22 }
// ];

// const foo = (arr) => arr.filter(elem => elem.age <= 25)


// console.log(foo(users));

// exempel ghat gpt
// const filterUsers = (arr, condition) => arr.filter(condition);

// // Приклад фільтрації за віком менше або дорівнює 25
// const ageCondition = user => user.age <= 25;
// const filteredUsersByAge = filterUsers(users, ageCondition);
// console.log(filteredUsersByAge);

// // Приклад фільтрації за ім'ям
// const nameCondition = user => user.name.startsWith('A');
// const filteredUsersByName = filterUsers(users, nameCondition);
// console.log(filteredUsersByName);


// Об'єднання масивів:
// Створіть функцію, яка приймає декілька масивів і об'єднує їх в один.

// const users1 = [
//   { id: 1, name: 'John', age: 25 },
//   { id: 2, name: 'Anna', age: 30 },
//   { id: 3, name: 'Bob', age: 22 }
// ];

// const users2 = [
//   { id: 1, name: 'John', age: 25 },
//   { id: 2, name: 'Anna', age: 30 },
//   { id: 3, name: 'Bob', age: 22 }
// ];

// const foo = (arr1, arr2) => [...arr1, ...arr2]


// console.log(foo(users1, users2));

// Знаходження перший парного числа:
// Створіть функцію, яка приймає масив чисел і повертає перше парне число.

// Знаходження індексу елемента:
// Створіть функцію, яка приймає масив та елемент і повертає індекс цього елемента в масиві (або -1, якщо елемент не знайдено).

// Сортування об'єктів за властивістю:
// Створіть функцію, яка приймає масив об'єктів і сортує їх за певною властивістю (наприклад, вік чи ім'я).