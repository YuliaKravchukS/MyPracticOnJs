// Сума елементів масиву:
// Напишіть функцію, яка приймає масив чисел та повертає їхню суму.
// function sumArray(num) {
//     let sum = 0;
//     for (const i of num) {
//         sum += i;
//     }
//     return sum
// }
// console.log(sumArray([13, 11, 55, 85]));

// Максимальний елемент:
// Напишіть функцію, яка приймає масив чисел та повертає найбільший елемент у цьому масиві.

// function findMax(arr) {
//   if (arr.length === 0) {
//     // Якщо масив порожній, повертаємо null або інше значення за замовчуванням
//     return null;
//   }

//   // Початкове припущення: перший елемент масиву - найбільший
//   let max = arr[0];

//   // Перевіряємо кожен елемент масиву
//   for (let i = 1; i < arr.length; i++) {
//     // Якщо поточний елемент більший за попередній максимум,
//     // оновлюємо значення максимуму
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   // Повертаємо знайдений максимум
//   return max;
// }

// Фільтр парних чисел:
// Напишіть функцію, яка приймає масив чисел та повертає новий масив, який містить лише парні числа.

// const arrNumb = (array) => {
//     const newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             newArr.push(array[i]);
//         }
//     }
//     return newArr;
// }

// console.log(arrNumb([13, 110, 550, 8, 5]));



// Пошук елементу:
// Напишіть функцію, яка приймає масив і елемент, і повертає true,
//якщо елемент знаходиться в масиві, та false в іншому випадку.

// const arrNumb = (array, elem) => array.includes(elem);

// console.log(arrNumb([13, 110, 550, 8, 5], 0));

// Об'єднання масивів:
// Напишіть функцію, яка приймає два масиви і об'єднує їх у новий масив.

//  const arrNumb = (array1, array2) => array1.concat(array2);

// console.log(arrNumb([13, 110, 550, 8, 5], [0]));


// Сортування масиву:
// Напишіть функцію, яка сортує масив чисел в зростаючому порядку.

//  const arrNumb = (elem) => elem.toSorted((a, b)=>a-b);

// console.log(arrNumb([13, 110, 550, 8, 5]));

// Підрахунок кількості входжень елемента:
// Напишіть функцію, яка приймає масив і елемент, і повертає кількість разів,
//як цей елемент зустрічається в масиві.

// 4 варианти ришення:
// const countOccurrences = (array, element) => {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === element) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countOccurrences([13, 110, 5, 50, 5, 8, 5], 5));
    
// const countOccurrences = (array, element) => {
//   return array.reduce((count, currentElement) => {
//     return count + (currentElement === element ? 1 : 0);
//   }, 0);
// };
// console.log(countOccurrences([13, 110, 5, 50, 5, 8, 5], 5));

// const countOccurrences = (array, element) => {
//   return array.filter((item) => item === element).length;
// };
    
// console.log(countOccurrences([13, 110, 5, 50, 5, 8, 5], 5));

// const countOccurrences = (array, element) => {
//   let count = 0;
//   array.forEach((item) => {
//     if (item === element) {
//       count++;
//     }
//   });
//   return count;
// };
// console.log(countOccurrences([13, 110, 5, 50, 5, 8, 5], 5));


// Відфільтрувати слова за довжиною:
// Напишіть функцію, яка приймає масив слів і числове значення (наприклад, довжину)
// та повертає новий масив, який містить слова, довжина яких менше
//або дорівнює заданому значенню.

// function filterWordFromLength(arr, numb) {
//     const newArr = arr.filter(elem => elem.length <= numb);
//     return newArr;
// }

// console.log(filterWordFromLength(['Abram', 'Adamd', 'Kolyunya'], 5));
// Розвернення масиву:
// Напишіть функцію, яка приймає масив та повертає новий масив з елементами
//у зворотньому порядку.

// function filterWordFromLength(arr) {
//     const newArr = arr.slice().reverse();
//     return newArr;
// }

// console.log(filterWordFromLength(['Abram', 'Adamd', 'Kolyunya']));

// Середнє арифметичне чисел:
// Напишіть функцію, яка приймає масив чисел та повертає їхнє середнє арифметичне.

// const countOccurrences = (array) => {
//   let totalcount = 0;
//   array.forEach((item) => {
//     totalcount += item;
//   });
//   return totalcount/array.length;
// };
// console.log(countOccurrences([13, 110, 5, 50, 5, 8, 5]));
