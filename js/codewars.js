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