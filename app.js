// 12-amaliy mashg'ulot

// let color1 = 'oq';
// let color2 = 'qora';
// let tempColor = color1
// color1 = color2;
// color2 = tempColor;
// console.log(color1);
// console.log(color2);

// 19-amaliy mashg'ulot

// let number = getMax(3,2)
// function getMax(a, b) {
//     if (a > b)
//         return a;
//     else
//     return b;
// }
// console.log(number)

// qisqartirish

// let number = getMax(3, 3)
// console.log(number)
// function getMax(a, b) {
//     return (a > b) ? a : b;
// }

// 19-amaliy mashg'ulot 2-qism

// function isLandscape(width, height) {
//     return (width > height);
// }

// 20-Amaliy mashg'ulot FizzBuzz

// let result = FizzBuzz(15);
// console.log(result)
// function FizzBuzz(input){
//     if (typeof input !== 'number')
//         return 'Son emas';
//     if ((input % 3 ===0) && (input % 5 ===0))
//         return "FizzBuzz";
//     if (input % 3 === 0)
//         return "Fizz";
//     if (input % 5 === 0)
//         return 'Buzz';
//     return input;
// }

// 21-Amaliy mashg'ulot

// const SPEED_LIMIT = 70;
// const KM_PER_POINT = 5;
// const MAX_POINTS = 12;
// checkspeed(129)

// function checkspeed(speed) {
//     if (speed < SPEED_LIMIT + KM_PER_POINT) {
//         console.log('Ok');
//         return;
//     }

//     const points = Math.floor((speed - SPEED_LIMIT) / KM_PER_POINT);
//     if (points >= MAX_POINTS) {
//         console.log('Guvohnoma olib qo\'yiladi');
//     }
//     else {
//         console.log(points);
//     }

// }

// 22-Amaliy mashg'ulot 1-qism

// console.log(sum(10))
// function sum (limit) {
//     let sum = 0;
//     for (let i = 0; i <= limit; i++){
//         if ((i % 3 ===0) || (i % 5 === 0))
//             sum +=i;
//     }

//     return sum;
// }

// 22-Amaliy mashg'ulot 2-qism

// let car = {
//     model: 'Toyota',
//     make: 'Estima',
//     year: 2016,
//     price: 50000
//   }
// function showProperties(obj) {
//     for(let key in obj) {
//         if (typeof obj[key] === 'string')
//             console.log(key, obj[key]);
//     }
// }
// showProperties(car);

// 23-Amaliy mashg'ulot

// const marks = [81, 99, 86, 89, 77];
// console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//     let avrg = calculateAverage(marks)
//     if (avrg < 50) return "F";
//     if (avrg < 50) return "D";
//     if (avrg < 50) return "C";
//     if (avrg < 80) return "B";
//     return 'A';
// }

// function calculateAverage(array) {
//     let sum = 0;
//     for (let value of array)
//         sum += value;

//     let avrg = sum / array.length;
//     return avrg;
// }

// 24-Amaliy mashg'ulot 

// showPrimeNumbers(20);

// function showPrimeNumbers(limit) {
//   for (let number = 2; number <= limit; number++) 
//         if (isPrime(number)) console.log(number);   
// }

// function isPrime (number) {
//     for (let factor = 2; factor < number; factor++)
//         if (number % factor === 0)
//             return false;

//     return true;
// }
///////////////////////////////////////////////////////
// 40-Amaliy mashg'ulot 1-qism
// let numbers = arrayFromRange(-6, 1);
// console.log(numbers);
// function arrayFromRange(min, max) {
//     let result = [];
//     for(let i = min; i <=max;i++)
//         result.push(i);

//     return result;
// }

// 40-Amaliy mashg'ulot 2-qism
// const numbers = [1, 2, ,3 ,4 ,5];
// console.log(numbers.includes(3));
// let exist = includes(numbers, 3);
// console.log(exist);

// function includes(array, elementToFind) {
//     for (let element of array)
//         if (element === elementToFind)
//             return true;
//     return false;
// }


// 41-Amaliy Mashg'ulot 
// let numbers = [1, 2, 3, 4];
// let output = move(numbers, 1, 5);

// console.log(output);

// function move (array, index, offset) {
//     let position = index + offset;
//     if (position >= array.length || position < 0) {

//         return 'Invalid Offset';
//     }
//     let result  = [...array];
//     let element = result.splice(index, 1)[0];
//     result.splice(position, 0, element);
//     return result;
// }

// 42-Amaliy Mashg'ulot 

// 1-usul 
// let numbers = [1,2,3,4,5];
// let maxNumber = getMaxNumber(numbers);
// console.log(maxNumber);

// function getMaxNumber(array) {
//     if (array.length === 0) 
//         return undefined;

//     let maxNumber = array[0];
//     for (let i = 1; i < array.length; i++)
//         if (array[i] > maxNumber)
//             maxNumber = array[i];

//     return maxNumber;
// }

// let numbers = [1,2,3,4,5];
// let maxNumber = getMaxNumber(numbers);
// console.log(maxNumber);

// function getMaxNumber(array) {
//     if (array.length === 0) 
//         return undefined;

//     let maxNumber = array.reduce((a, b) => (a > b) ? a : b);

//// let maxNumber = array[0];
//// for (let i = 1; i < array.length; i++)
////     if (array[i] > maxNumber)
////         maxNumber = array[i];

//     return maxNumber;
// }


// 43-Amaliy mashg'ulot
// const books = [
//     { title: 'Clean code', year: 2008, rating: 8.2 },
//     { title: 'Code Complete, 2nd edition', year: 1993, rating: 9.3 },
//     { title: 'Design Patterns', year: 1994, rating: 7.1 },
//     { title: 'Soft Skills', year: 2014, rating: 8.2 },
//     { title: 'Refactoring, 2nd edition', year: 2018, rating: 9.7 },
//     { title: 'The Pragmatic Programmer', year: 1999, rating: 8.4 },
//     { title: 'Introduction to Algorithms, 3rd edition', year: 2009, rating: 7.7 },
//     { title: 'Working Effectively with Legacy Code', year: 2004, rating: 6.9 },
// ];

// let titles = books
//     .filter(b => b.year > 2010 && b.rating > 8)
//     .sort((a, b) => a.rating - b.rating)
//     .reverse()
//     .map(b => b.title);

// console.log(titles);


