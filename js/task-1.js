'use strict';

// 1.Задача на розгалуження:
// Створіть програму, яка приймає вік користувача та визначає, чи може він
// отримати водійські права.Відобразіть відповідне повідомлення.


// function checkAge(age) {
//     if (age >= 18) {
//         return "Yes, you can have driver's license";
//     } else {
//         return "Sorry, you cann't have driver's license";
//     }
// }
// console.log(checkAge(45));


// 2. Напишіть програму, яка виводить на екран таблицю множення для заданого числа.
// Наприклад, для числа 5 програма повинна вивести:

// function calc(number) {
//   for (let i = 1; i <= 10; i++) {
//     const result = number * i;
//     console.log(`${number} x ${i} = ${result}`);
//   }
// }

// console.log(calc(5));

//3.Задача на розгалуження та цикл:
//Створіть програму, яка перевіряє, чи є введене число простим.
//Виведіть відповідне повідомлення.

// function checkNum(num) {
//     if (num %2 === 0 && num !==2) {
//         return `${num} is not simple number.`
//     } else {
//         return `${num} is simple number.`
//     }
// }

// console.log(checkNum(10));

// це варыант чата gpt:
// function isPrimeNumber(number) {
//     if (number <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// const userInput = prompt("Введіть число:");
// const numberToCheck = parseInt(userInput);

// if (isNaN(numberToCheck)) {
//     console.log("Будь ласка, введіть коректне число.");
// } else {
//     const result = isPrimeNumber(numberToCheck);
//     const message = result
//         ? `${numberToCheck} є простим числом.`
//         : `${numberToCheck} не є простим числом.`;
//     console.log(message);
// }
// Ця програма використовує функцію isPrimeNumber, яка перевіряє, чи є число простим.Введене користувачем
// число перевіряється, і виводиться відповідне повідомлення.


// 4. Задача на рядки та цикли:
// Напишіть програму, яка обертає рядок задом наперед і виводить його. Наприклад,
//з рядка "Hello" має вийти "olleH".

// function reverseStr(str) {
//     let newStr = '';

//     for (let i = str.length -1; i >= 0; i--) {
//         newStr += str[i];
        
//     }
//     return newStr;
// }
// console.log(reverseStr('Hello'))
// function reverseString(str) {
    // Крок 1. Створіть порожній рядок, у якому буде розміщено новий створений рядок
    //var newString = "";
 
    // Крок 2. Створіть цикл FOR
    /* Початковою точкою циклу буде (str.length - 1), що відповідає 
        останньому символу рядка, "o"
       Поки «i» більше або дорівнює 0, цикл триватиме
       Ми зменшуємо «i» після кожної ітерації */
    //for (var i = str.length - 1; i >= 0; i--) { 
        //newString += str[i]; // або newString = newString + str[i];
    //}
    /* Довжина hello дорівнює 5
        Для кожної ітерації: i = str.length - 1 та newString = newString + str[i]
        Перша ітерація:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Друга ітерація:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Третя ітерація:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Четверта ітерація:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        П'ята ітерація:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    Кінець циклу FOR*/
 
    // Крок 3. Поверніть перевернутий рядок
   // return newString; // "olleh"
//}


// 5. Задача на вкладені цикли:
// Створіть програму для виведення патерну з зірочок:

// markdown
// Copy code
// *
// **
// ***
// ****
// *****



// function printStars() {
//     for (let i = 1; i <= 5; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += "*";
//         }
//         console.log(row);
//     }
// }

// printStars();


// 6. Задача на вкладені цикли (складніше):
// Створіть програму для виведення патерну піраміди:

// markdown
// Copy code
//     *
//    ***
//   *****
//  *******
// *********
// 7. Задача на розгалуження:
// Створіть програму для перевірки, чи введене слово є паліндромом 
//(читається однаково зліва направо та справа наліво).

// 8. Задача на цикли:
// Напишіть програму для знаходження суми всіх непарних чисел в заданому діапазоні.

// 9. Задача на розгалуження та цикл:
// Реалізуйте програму для конвертації температури з градусів Цельсія 
//в градуси Фаренгейта або навпаки, в залежності від вибору користувача.

// 10. Задача на вкладені цикли:
// Створіть програму для виведення таблиці Паскаля для заданого числа рядків.
