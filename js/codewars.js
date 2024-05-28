// 1.
// function digitize(n) {
//     const numberArray = n.toString().split("").map(Number).toSorted((a, b) => a - b);
//     console.log(numberArray);
// }

// console.log(digitize(35231));

// 2.

// function pipeFix(numbers) {
//     const start = numbers[0];
//     const end = numbers[numbers.length - 1];

//     const fixedArray = Array.from({ length: end - start + 1 }, (_, index) => start + index);

//     console.log(fixedArray);
// }

// pipeFix([6,9]) //[6,7,8,9])

//3.

// function oddCount(n){
//     const arr = [];

//     for (let i = 0; i < n; i++) {
//         if(i%2 !== 0) arr.push(i);
//     }

//     console.log(arr.length);
//     return arr.length;

// }

// oddCount(15) //7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

//4.

// function accum(s) {
//     const arr = s.toUpperCase().split('');
//     let result = "";

//     arr.forEach((elem, idx) => {
//         if (idx !== 0) {
//             result += '-';
//         }

//         result += elem + elem.toLowerCase().repeat(idx);
//     });

//     console.log(result);
// // }

// function accum(s) {
//     console.log(s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-'));
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }

// accum("ZpglnRxqenU") //"Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

// 5.

// function add(n) {

//     return function Nunmb(k) {
//         return n + k;
//     }

// }

// 6.

// function averages(numbers) {
//     const averagesNumbArr = [];
//         if (numbers.length === 0 || numbers.length === 1) {
//             return averagesNumbArr;
//         } else {
//             for (let i = 0; i < numbers.length-1; i++) {
//                 const averagesNumb = (numbers[i] +numbers[i+1])/2;
//                 averagesNumbArr.push(averagesNumb)
//                 }
//     }
//     console.log(averagesNumbArr);
//         return averagesNumbArr;
// }

// averages([1, 3, 5, 1, -10]) //[2, 4, 3, -4.5]

// 7.

// function getSize(width, height, depth){
//   const arr=[];
//   const area = 2*(width*height +height*depth +width*depth);
//     const volume = width * height * depth;
//     arr.push(area,volume);
//     return arr;
// }

// getSize(4, 2, 6) /// [88, 48];

// 8.
// function removeDuplicateWords(s) {
//     const arr = s.split(' ').filter((el, idx, arr) => { return s.split(' ').indexOf(el) === idx });
//     return arr.join(' ');
// }

// removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta') //'alpha beta gamma delta'

// 9.

// function removeUrlAnchor(url){
//     if (url.includes('#')) {
//         console.log(url.slice(0, url.indexOf('#')));
//         return url.slice(0, url.indexOf('#'))
//     }
//    console.log(url);
//     return url;
// }

//  removeUrlAnchor('www.codewars.com#about') // 'www.codewars.com'
// removeUrlAnchor('www.codewars.com/katas/') // 'www.codewars.com/katas/

// 10.

// const alwaysOdd = n => !(n % 2) ? n-1 : n;
// console.log(alwaysOdd(1));

//11.

// function stray(numbers) {
//    for (let i = 0; i < numbers.length; i++) {
//        if (numbers[i] !== numbers[i + 1] && numbers[i] !== numbers[i + 2]) {
//            console.log(numbers[i]);
//            return numbers[i];
//        }

//    }

// }

// function stray(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] !== numbers[i + 1] && numbers[i] !== numbers[i + 2]) {
//             console.log(numbers[i]);
//             return numbers[i];
//         }
//     }
// }
// stray([1, 1, 2]) /// 2

// 12.

// function maxTriSum(numbers) {
//     let sum = 0;
//     const arr = numbers.filter((el, idx) => numbers.indexOf(el) === idx).toSorted((a, b) => b - a).slice(0, 3);
//     arr.forEach(el => {
//         sum += el;
//     });
//     console.log(sum);
//     return sum

// }

// maxTriSum([-14, -12, -7, -42, -809, -14, -12])//-33
// maxTriSum([-7,12,-7,29,-5,0,-7,0,0,29])//41

// function maxTriSum(numbers) {
//     // Видалимо дубльовані елементи
//     const uniqueNumbers = [...new Set(numbers)];

//     // Відсортуємо у порядку спадання
//     uniqueNumbers.sort((a, b) => b - a);

//     // Виберемо перші три елементи та знайдемо їх суму
//     return uniqueNumbers.slice(0, 3).reduce((sum, num) => sum + num, 0);

// 13.

// function findPath(mountain) {
//     const row = mountain.length;
//     const columns = mountain[0].length;

//     //const newArray = mountain.slice();
//     const newArray = [];
//     for (let i = 0; i < row; i++) {
//         newArray[i] = Array(columns).fill(0);
//     }
//     newArray[row - 1] = mountain[row - 1].slice();
//     for (let i = row-2; i >= 0; i--){
//         for (let j = 0; j < columns; j++) {
//             let down = newArray[i + 1][j];
//             let left = j > 0 ? newArray[i + 1][j - 1] : 0;
//             let right = j < columns - 1 ? newArray[i + 1][j + 1] : 0;

//             let maxNumberInRow = Math.max(down, left, right);
//             console.log('Math.max(down, left, right);: ', Math.max(down, left, right))
//             newArray[i][j] += maxNumberInRow;
//         }
//     }
//   console.log(Math.max.apply(null, newArray[0]));
//     return Math.max.apply(null, newArray[0]);
//  }

// function findPath(mountain) {
//     const rows = mountain.length;
//     const cols = mountain[rows - 1].length;

//     // Створюємо масив для зберігання найкращих значень для кожної клітини
//     const dp = new Array(rows).fill(null).map(() => new Array(cols).fill(0));

//     // Заповнюємо останній рядок значеннями гір
//     for (let j = 0; j < cols; j++) {
//         dp[rows - 1][j] = mountain[rows - 1][j];
//     }

//     // Обчислюємо найкращі значення для кожної клітини знизу вгору
//     for (let i = rows - 2; i >= 0; i--) {
//         for (let j = 0; j <= i; j++) {
//             dp[i][j] = mountain[i][j] + Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
//         }
//     }

//     // Повертаємо найкраще значення для клітини у верхньому рядку
//     return dp[0][0];
// }

//findPath([[6], [7, 10], [12, 11, 9], [90, 25, 13, 14]]) // 115
//findPath([[0], [0, 0], [0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 70], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]])//70//
//findPath([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]) //23
//findPath( [[1],[1,100],[1,1,1],[1,1,1,1]])//103
//findPath([[75],[95,64],[17,47,82],[18,35,87,10],[20,4,82,47,65],[19,1,23,75,3,34],[88,2,77,73,7,63,67],[99,65,4,28,6,16,70,92],[41,41,26,56,83,40,80,70,33],[41,48,72,33,47,32,37,16,94,29],[53,71,44,65,25,43,91,52,97,51,14],[70,11,33,28,77,73,17,78,39,68,17,57],[91,71,52,38,17,14,91,43,58,50,27,29,48],[63,66,4,68,89,53,67,30,73,16,69,87,40,31],[4,62,98,27,23,9,70,98,73,93,38,53,60,4,23]])//1074
//findPath([[90],[60,9],[50,23,66],[57,97,72,26],[73,77,92,97,79],[97,71,1,94,45,86],[25,72,89,34,28,54,7],[11,32,79,42,6,38,34,69],[84,89,84,22,19,53,15,83,16],[48,10,5,68,57,54,50,35,49,76]])//765
//findPath([[2],[7,53],[5,39,60],[15,81,47,67],[44,72,89,67,69],[11,35,61,28,91,8],[81,92,45,8,19,31,65],[2,61,43,43,65,34,71,56],[42,50,88,37,55,46,32,4,50],[62,42,59,12,29,40,35,15,77,7],[60,13,18,16,91,96,73,68,13,26,83],[80,64,73,49,80,43,34,59,20,47,54,53],[94,76,68,40,75,48,67,15,35,16,92,77,33],[5,46,49,15,77,7,97,41,36,5,75,45,79,49],[91,77,99,32,13,38,54,0,45,56,2,46,33,34,82],[51,81,22,71,59,42,3,18,36,9,24,21,30,49,0,84],[46,64,49,57,52,60,97,58,73,24,78,53,74,63,6,88,58],[73,29,29,73,23,34,94,82,20,98,19,46,17,85,55,87,22,39],[93,78,51,8,59,79,13,83,67,21,73,41,41,47,78,12,93,40,5],[8,70,91,12,9,76,21,30,92,35,28,14,14,53,28,32,90,67,87,10],[21,29,56,2,41,4,85,80,12,18,39,85,77,69,59,36,65,91,21,33,64],[28,81,78,63,1,73,53,20,11,5,86,13,79,75,18,27,73,57,35,73,86,8],[99,71,74,18,53,55,32,84,36,81,3,23,50,34,32,4,96,10,5,35,86,84,71],[63,51,1,83,87,26,3,41,55,81,59,0,97,54,53,55,43,70,5,69,2,61,21,86],[2,76,84,36,66,97,29,73,72,79,43,39,82,66,67,26,82,96,33,49,63,18,60,57,4],[26,5,97,77,49,36,63,40,25,10,74,51,95,66,80,63,27,47,10,96,98,79,40,85,87,12],[86,42,45,31,44,71,47,48,46,28,31,1,31,61,5,17,99,73,3,98,56,30,19,98,94,59,67],[55,49,9,27,19,27,23,54,97,86,94,18,23,81,95,0,98,87,81,36,60,30,28,20,35,18,52,23],[62,65,9,43,77,80,60,32,82,72,49,12,88,61,29,8,73,67,77,3,52,1,73,33,83,68,88,76,96],[40,86,8,15,21,61,9,91,95,71,60,2,29,34,42,73,30,96,30,70,18,67,39,73,57,97,13,21,66,14]]) //74134

// // Please write a program that generates a list of 10,000 numbers in random order each time it is run. Each number in the list must be unique and be between 1 and 10,000 (inclusive).
// //
// const list = document.querySelector("#list");
// let arrNumb = [];
// let arrRandomNumb = [];
// for (let i = 1; i <= 10; i++) {
//   arrNumb.push(i);
// }
// function shuffledArray() {
//   while (arrNumb.length > 1) {
//     const idx = Math.floor(Math.random() * arrNumb.length);
//     arrRandomNumb.push(arrNumb[idx]);
//     arrNumb.splice(idx, 1);
//   }
// }

// function randomNumber() {
//   //   shuffledArray();
//   //   arrRandomNumb.forEach((el) => {
//   //     const item = document.createElement("li");
//   //     item.textContent = el;
//   //     list.append(item);
//   //   });
// }
// // randomNumber();
// var findAverage = function (nums) {
//   const acc = nums.reduce((acc, el) => acc + el, 0);
//   const averages = acc / nums.length;
//   return averages;
// };

// findAverage([1, 3, 5, 7]);

// function formatMoney(amount) {
//   console.log(`$${Number(amount).toFixed(2)}`);
// }

// formatMoney(39.99); //, '$39.99
// formatMoney(3); //, '$3.00
// // formatMoney(3.1); //, '$3.10

// function isolateIt(arr) {
//   return arr.map((el) => {
//     let leftPart;
//     let rightPart;
//     if (el.length % 2) {
//       leftPart = el.slice(0, el.length / 2);
//       rightPart = el.slice(1 + el.length / 2);
//     } else {
//       leftPart = el.slice(0, el.length / 2);
//       rightPart = el.slice(el.length / 2);
//     },
//     return `${leftPart}|${rightPart}`;
//   });
// }

// isolateIt(["abcd", "efgh"]); //, ["ab|cd","ef|gh"]);
// isolateIt(["abcde", "fghij"]); //, ["ab|de","fg|ij"]);
// isolateIt(["1234", "56789"]); //, ["12|34","56|89"]);

// function barTriang(p1, p2, p3) {
//   const x = ((p1[0] + p2[0] + p3[0]) / 3).toFixed(4);
//   const y = ((p1[1] + p2[1] + p3[1]) / 3).toFixed(4);
//   let coordinates = [];
//   coordinates.push(x.toString(), y.toString());
//   console.log(coordinates);
//   return coordinates;
// }

// barTriang([4, 6], [12, 4], [10, 10]); // [8.6667, 6.6667];

// const flip = (d, a) => {
//   if (d === "R") {
//     a.sort((c, b) => c - b);
//   } else {
//     a.sort((c, b) => b - c);
//   }

//   return a;
// };

// flip("R", [3, 2, 1, 2]); //, [1, 2, 2, 3]);
// flip("L", [1, 4, 5, 3, 5]); ///, [5, 5, 4, 3, 1]);

// function fakeBin(x) {
//   let str = "";
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] < 5) {
//       str += 0;
//     } else {
//       str += 1;
//     }
//   }
//   console.log(str);
//   return str;
// }

// fakeBin("45385593107843568"); //, '01011110001100111')

// function smash(words) {
//   return words.join(" ");
// }

// smash(["this", "is", "a", "really", "long", "sentence"]); //, "this is a really long sentence")

// function arrayPlusArray(arr1, arr2) {
//   const sum = [...arr1, ...arr2].reduce((acc, el) => acc + el, 0);
//   console.log("sum: ", sum);

//   return sum; //something went wrong
// }

// arrayPlusArray([-1, -2, -3], [-4, -5, -6]); //, -21)

function differenceInAges(ages) {
  let newArray = [];
  const agesSorted = ages.sort((a, b) => a - b);
  const dif = agesSorted[agesSorted.length - 1] - agesSorted[0];
  newArray.push(agesSorted[0], agesSorted[agesSorted.length - 1], dif);
  console.log("newArray: ", newArray);
  return newArray;
}

differenceInAges([57, 99, 14, 32]); //, [14, 99, 85];
