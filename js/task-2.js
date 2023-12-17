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


// function printStars() {
//     let rows = 5;
//     for (let i = 1; i <= rows; i++) {
//              let row = "";
//         for (let k = 1; k <= rows - i; k++) {
//              row += " ";    
// }

//         for (let j = 1; j <= 2*i-1; j++) {
//             row += "*";
//         }
//         console.log(row);
//     }
// }

// printStars();

// lеt rows = 5;
 
// // pattеrn variablе carriеs thе final pattеrn in string format
// lеt pattеrn = "";
 
// // outеr loop runs for `rows` no. of timеs
// for (lеt n = 1; n <= rows; n++) {
//    // Innеr Loop - I -> prints spacеs
//    for (lеt spacе = 1; spacе <= rows - n; spacе++) {
//       pattеrn += " ";
//    }
 
//    // Innеr Loop - II -> prints stars
//    for (lеt num = 1; num <= 2 * n - 1; num++) {
//       pattеrn += "*";
//    }
//    pattеrn += "\n";
// }
// consolе.log(pattеrn);

// 7. Задача на розгалуження:
// Створіть програму для перевірки, чи введене слово є паліндромом 
//(читається однаково зліва направо та справа наліво).

// function isPalindrome(word) {
//     const reversedWord = word.split('').reverse().join('');

//     if (word === reversedWord) {
//         return `${word} is a palindrome.`;
//     } else {
//         return `${word} is not a palindrome.`;
//     }
// }

// 8. Задача на цикли:
// Напишіть програму для знаходження суми всіх непарних чисел в заданому діапазоні.

function sumNumber(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        if (i %2 !==0) {
          sum += i;    
        }
      
        }
    return sum
}

console.log(sumNumber(5));
// 9. Задача на розгалуження та цикл:
// Реалізуйте програму для конвертації температури з градусів Цельсія
//в градуси Фаренгейта або навпаки, в залежності від вибору користувача.

// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
// }

// function fahrenheitToCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5/9;
// }

// function convertTemperature() {
//     const choice = prompt("Оберіть опцію:\n1. Конвертувати з Цельсія в Фаренгейта\n2. Конвертувати з Фаренгейта в Цельсія");

//     if (choice === "1") {
//         const celsiusTemperature = parseFloat(prompt("Введіть температуру в градусах Цельсія:"));
//         const convertedTemperature = celsiusToFahrenheit(celsiusTemperature);
//         alert(`Температура в градусах Фаренгейта: ${convertedTemperature.toFixed(2)}`);
//     } else if (choice === "2") {
//         const fahrenheitTemperature = parseFloat(prompt("Введіть температуру в градусах Фаренгейта:"));
//         const convertedTemperature = fahrenheitToCelsius(fahrenheitTemperature);
//         alert(`Температура в градусах Цельсія: ${convertedTemperature.toFixed(2)}`);
//     } else {
//         alert("Неправильний вибір опції.");
//     }
// }

// convertTemperature();



// 10. Задача на вкладені цикли:
// Створіть програму для виведення таблиці Паскаля для заданого числа рядків.
