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

