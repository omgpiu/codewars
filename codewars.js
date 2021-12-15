//Mumbling kata 6

// function accum(s) {
//     return s.split('').map((e, i) =>
//         e.toUpperCase() + e.toLowerCase().repeat(i)
//     ).join('-')
// }
//
// console.log(accum("ZpglnRxqenU"))

//delete vowels

// function disemvowel(str) {
//     return str.split(' ').map(e=>{
//        return   e.split('').map(character => {
//              if(/[aeiouAEIOU]/.test(character)){
//              } else {return character}
//          }).join("")
//     }).join(' ')
// }
// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
// }
// console.log(disemvowel("This website is for losers LOL!"))

//return middle character (s)

// function getMiddle(s) {
//     let result = s.split('')
//     if (result.length === 1) return result[0]
//
//     if (result.length % 2 === 0) {
//         return result[(result.length / 2) - 1] + result[result.length / 2]
//     } else {
//         return result[Math.trunc(result.length / 2)]
//     }
//
// }
//
//function getMiddle(s)
// {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }
// console.log(getMiddle("testing"))

//Descending Order
// function descendingOrder(n) {
//     let a = n.toString().split('')
//     if (a.length === 1) {
//         return Number(a[0])
//     }
//     return Number(a.sort((a, b) => (b - a)).join(''))
//
// }
//function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''))
// }
// console.log(descendingOrder(123456789))
// function isIsogram(str) {
//     let a = str.toLowerCase().split('')
//     if (a.length <= 1) return true
//
//     if (a.length > Array.from(new Set(a)).length) {
//         return false
//     }
//     return true
// }
//
//  console.log(
// isIsogram("aba")
//  )
// function isIsogram(str){
//     return new Set(str.toUpperCase()).size == str.length;
// }
// function calc(x){
//     let sum = n => [...n].reduce((a,b) => +a + +b);
//     let total1 = x.replace(/./g, x => x.charCodeAt(0));
//     let total2 = total1.replace(/7/g,'1');
//     return sum(total1) - sum(total2);
// }
//
//
// function calc(x) {
//     let result = x.split('').map(e => e.charCodeAt(0)).join('').split('')
//     let result2 = result.map(e => {
//         return e == 7 ? '1' : e
//     })
//     let summ = result.reduce((acc, value) => Number(acc) + Number(value), [])
//     let sum2 = result2.reduce((acc, value) => Number(acc) + Number(value), [])
//
//     return summ - sum2
// }
//
// console.log(
//     calc('aaaaaddddr')
// )
// function catMouse(map,moves){
//     map=map.split('\n')
//     if (!map.some(v=>v.includes('C'))||!map.some(v=>v.includes('m'))) return 'boring without two animals'
//     let catX=map.map(v=>v.indexOf('C')).filter(v=>v>-1)*1
//     let catY=map.map(v=>v.includes('C')).indexOf(true)+1
//     let mX=map.map(v=>v.indexOf('m')).filter(v=>v>-1)*1
//     let mY=map.map(v=>v.includes('m')).indexOf(true)+1
//     return Math.abs(catX-mX)+Math.abs(catY-mY)<=moves?'Caught!':'Escaped!'
// }

// const flatter = arr => arr.reduce((arr, el)=> Array.isArray(el)? flatter([...arr,...el]) : [...arr,el],[])
// console.log(flatter(["a", "b", ["c", "d", ["e", ["f"]]], "g", ["h"]]))
// Реализовать функцию, которая валидирует скобки
//  '([]())[]' - valid
//  '[]]()' - wrong
//  '([)]' - wrong

// Выбираем первый символ строки
// Если это открывающая скобка - помещаем ее в стек
// Если это закрывающая скобка, извлекаем последнее значение из стека и проверяем скобки на соответствие. Если стек пуст или закрывающая скобка не соответствует открывающей - прерываем выполнение и возвращаем false
// Переходим к следующему символу строки и повторяем действия с п.2
// Если по окончании выполнения алгоритма стек не пуст (это возможно, если открывающих скобок больше, чем закрывающих) - возвращаем false.
// const test = function (str) {
//     let chars = str.split(''),
//         stack = [],
//         open = ['{', '(', '['],
//         close = ['}', ')', ']'],
//         closeIndex,
//         openIndex;
//
//     // Проходимся по строке, проверяя каждый ее символ
//     for (let i = 0; i < chars.length; i++) {
//         openIndex = open.indexOf(chars[i]);
//         if (openIndex !== -1) {
//             // Нашли открывающую скобку. Помещаем ее в стек
//             stack.push(openIndex);
//             continue;
//         }
//
//         closeIndex = close.indexOf(chars[i]);
//         if (closeIndex !== -1) {
//             // Нашли закрывающую скобку. Проверяем ее соответствие открывающей
//             openIndex = stack.pop();
//             if (closeIndex !== openIndex) {
//                 return false;
//             }
//         }
//     }
//
//     // Проверяем дисбаланс открытых/закрытых скобок
//     if (stack.length !== 0) {
//         return false;
//     }
//
//     return true;
// }
// console.log(test('([]())[]'))
//
// function duplicateEncode(word) {
//     let obj = {}
//     let letter = word.toLowerCase().split('')
//     for (let i = 0; i < letter.length; i++) {
//         let x = letter[i]
//         if (obj[x] === undefined) {
//             obj[x] = 1;
//         } else {
//             obj[x] += 1
//         }
//
//     }
//     console.log(obj)
//     return letter.map(el => {
//         return obj[el] === 1 ? '(' : ')'
//     }).join('')
// }
// function duplicateEncode(word){
//     return word
//         .toLowerCase()
//         .split('')
//         .map( function (a, i, w) {
//             console.log(a)
//             console.log(w.indexOf(a)+' index')
//             console.log(w.lastIndexOf(a)+' last index')
//             return w.indexOf(a) === w.lastIndexOf(a) ? '(' : ')'
//         })
//         .join('');
// }
// console.log(duplicateEncode("Success"))
// function duplicateEncode(word) {
//     let letters = word.toLowerCase().split('')
//     return letters.map(function(c, i) {
//         return letters.some(function(x, j) { return x === c && i !== j }) ? ')' : '('
//     }).join('')
// }
//"()()()"
// function squares(x, n) {
//     if (n <= 0) {
//         return []
//     }
//     let array = []
//     let newArr = [x]
//     for (let i = 0; i < n; i++) {
//         array.push(x)
//
//     }
//     array.reduce(function (previousValue, currentValue, index, array) {
//         newArr.push(Math.pow(previousValue, 2))
//         return Math.pow(previousValue, 2)
//     });
//     return newArr
// }
//
//
// function squares(x, n) {
//     let ret = [];
//     for(let i=0; i<n; i++){
//         ret.push(x);
//         x*= x;
//     }
//     return ret;
// }
// console.log(squares(2, 5))
// [2,4,16,256,65536]
// function checkConcatenatedSum(checkNum, num) {
//     let array = Math.abs(checkNum).toString().split('')
//     for (let i = 0; i < array.length; i++) {
//         array[i] = array[i].repeat(num)
//     }
//
//     let finish = array.reduce((prev, current) => {
//          return Number(prev) + Number(current)
//     })
//     if (+finish === Math.abs(checkNum)) {
//         return true
//     }
//     return false
// }
// const checkConcatenatedSum = (num, n) => {
//     num = Math.abs(num);
//     return (num+'').split('').map(d=>d.repeat(n)).reduce((a,n)=>a+(+n),0) === num;
// };
// console.log(checkConcatenatedSum(198 ,2))
// function FilterString(value) {
//     return +value.replace(/\D/g,'')
// }
//
// console.log(FilterString("aa1bb2cc3dd"))
// function nth_fibonacci(n) {
//     if (n === 1) return 0
//     else if (n === 2) return 1
//     return nth_fibonacci(n - 1) + nth_fibonacci(n - 2)
//
// }
// function nthFibo(n) {
//     let a = 0, b = 1;
//
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return n == 1? a: b;
// }
// console.log(nth_fibonacci(10))
// function isPalindrome(line) {
//     return (String(line) == String(line).split('').reverse().join('') )
//
// }
// function isPalindrome(line) {
//
//     let a = line.toString().split('').reverse().join('')
//     return a === line.toString() ? true : false;
// }
// console.log(isPalindrome(12321))
// function isAnagram(test, original) {
//     return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
// }
//
// console.log(isAnagram("foefet", "toffee"))

// function even_or_odd(number) {
//
//     return number % 2 ? 'Odd' : 'Even'
//
// }
// function highAndLow(numbers) {
//     let a = numbers.split(' ').map(e => +e).sort((a, b) => b-a)
//     return a[0] + ' ' + a[a.length - 1]
//
//
// }
//
// highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")
//
// function highestAndLowest(nums) {
//     let numbers = nums.split(' ');
//     let sorted = numbers.sort(function (a, b) {
//         return Number(a) - Number(b);
//     });
//     return sorted[0] + " " + sorted[sorted.length - 1];
// }
//
// function squareDigits(num) {
//     let a = Number(num.toString().split('').map(e => e * e).join(''))
//     console.log(a)
// }
//
// squareDigits(9119)
// function mygcd(x,y){
//     if (!y) {
//         return x;
//     }
//
//     return mygcd(y, (x % y))
//
// }
//
// console.log(mygcd(30,12))
// console.log(mygcd(8,9))

//
// function factorial(n) {
//   if (n < (-1) || n > 12) throw RangeError
//   return  n===0 ? 1:  n*factorial(n-1)
//
//
// }
//
// console.log(factorial(-1))
// function removeEveryOther(arr){
//   return  arr.filter(function(value, index) {
//     return index % 2 === 0;
//   });
//
// }
//
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// find duplicates!!
// function distinct(a) {
//   return a.reduce((acc, el, i, arr) => {
//     if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el);
//     return acc
//   }, [])
// }

// console.log(distinct([1, 2, 3, 1, 3, 1]))
// Убираем дубликаты
// function  distinct(arr){
//  return arr.filter((e, i, a) => a.indexOf(e) === i) // [1, 2, 3, 4]
// }
//
// console.log(distinct([1, 2, 3, 1, 3, 1]))

// function capital(capitals) {
//   let result =[]
//     capitals.forEach(el => {
//       result.push(Object.entries(el).map(e => {
//         if (e[0] == 'state' || e[0] == 'country') {
//           return  e[1]
//         } else {
//           return e[1]
//         }
//       }))
//       }
//     )
//  return result.map(e=>{
//    return  `The capital of ${e[0]} is ${e[1]}`
//   })
//
// }
// function capital(capitals){
//   return capitals.map(({country, state = country, capital}) => `The capital of ${state} is ${capital}`)
// }
// // state_capitals = [{ state: 'Maine', capital: 'Augusta' }]
// // capital(state_capitals)
//
// // "The capital of Maine is Augusta"
//
// country_capitals = [{ 'country': 'Spain', 'capital': 'Madrid' }]
// // capital(country_capitals)[0], "The capital of Spain is Madrid"
//
// mixed_capitals = [{ 'state': 'Maine', capital: 'Augusta' }, { country: 'Spain', 'capital': 'Madrid' }]
// // capital(mixed_capitals)[1], "The capital of Spain is Madrid"
// console.log(capital(mixed_capitals))

// function fizzbuzz(n) {
//   return Array.from(Array(n), (_, i) => i + 1).map(e => {
//       if ((e % 5 === 0) && (e % 3 === 0)) {
//         return 'FizzBuzz'
//       } else if (e % 5 === 0) {
//         return 'Buzz'
//       } else if (e % 3 === 0){
//         return 'Fizz'
//       } else {
//         return e
//       }
//     }
//   )
//
//
// }
//
// console.log(fizzbuzz(15))
// console.log((3 % 5 === 0) && (15 % 3 === 0))
// function findShort(s) {
//
//   return s.split(' ').sort((a, b) => {
//     return a.length - b.length
//   })[0].length
//
//
// }
// function findShort(s) {
//   return s.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity);
// }
// console.log(findShort('bitcoin take over the world maybe who knows perhaps'))
// A = new Set([1,2]);
// B = new Set([2,3]);
// function inter(s1, s2){
//  const newSet = [...s1,...s2]
//   return new Set(newSet.reduce((acc, el, i, arr) => {
//     if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el);
//     return acc
//   }, []))
//
// }
// function inter(s1, s2){
//   return new Set( [...s1].filter( e => s2.has(e) ) )
// }
// function inter(s1, s2){
//   const firstArr = [...s1];
//   const secondArr = [...s2];
//   return new Set(firstArr.filter(elem => secondArr.includes(elem)));
// }
// const inter = (s1, s2) => new Set([...s1].filter(x => s2.has(x)))
// console.log(inter(A,B))
// function divCon(x){
//   const newA=x.filter(e=> typeof e === 'string').reduce((acc,el)=>+acc+(+el),0)
//   const newB=x.filter(e=> typeof e !== 'string').reduce((acc,el)=>acc+el,0)
//   return newB-newA
// }
//
// function divCon(x){
//   return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
// }
// const divCon=x=>x.reduce((a,b)=>a+(0+b==b?b:-+b),0)
// console.log(divCon([9, 3, '7', '3']))
// function findOdd(array) {
//   return array.reduce((c, v) =>{
//
//     return c ^ v;
//   }, 0);
// }
// findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])
// //5
// function findOdd(arr) {
//   return arr.find((item, index) => arr.filter(el => el == item).length % 2)
// }
// function findOutlier(integers) {
//   let odd = []
//   let even = []
//   integers.forEach(e => e % 2 === 0 ? even.push(e) : odd.push(e))
//   return odd.length > even.length ? even[0] : odd [0]
//
// }
// function findOutlier(int){
//   const even = int.filter(a=>a%2==0);
//   const odd = int.filter(a=>a%2!==0);
//   return even.length==1? even[0] : odd[0];
// }
// console.log(findOutlier([6, 8, 0, 1]))
//
// const plus = (a, b) => a + b
//
// function zipWith(fn, a0, a1) {
//   const short = Math.min(a0.length, a1.length);
//   let newArr = []
//   for (let i = 0; i < short; i++) {
//      newArr.push(fn(a0[i], a1[i]))
//
//   }
//   return newArr
// }
// function zipWith(f,A=[],B=[]) {
//   var smaller = B.length > A.length ? A : B
//   return smaller.map( (v,i,RA)=> f(A[i],B[i]) )
// }
// console.log(zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2, 1]))

// function starSign(date) {
//   const day = date.getDate();
//
//   switch(date.getMonth()){
//     case 0:  return day < 21 ? "Capricorn" : "Aquarius";
//     case 1:  return day < 20 ? "Aquarius" : "Pisces";
//     case 2:  return day < 21 ? "Pisces" : "Aries";
//     case 3:  return day < 21 ? "Aries" : "Taurus";
//     case 4:  return day < 22 ? "Taurus" : "Gemini";
//     case 5:  return day < 22 ? "Gemini" : "Cancer";
//     case 6:  return day < 23 ? "Cancer" : "Leo";
//     case 7:  return day < 24 ? "Leo" : "Virgo";
//     case 8:  return day < 24 ? "Virgo" : "Libra";
//     case 9:  return day < 24 ? "Libra" : "Scorpio";
//     case 10: return day < 23 ? "Scorpio" : "Sagittarius";
//     case 11: return day < 22 ? "Sagittarius" : "Capricorn";
//   }
// }
//
//
// // Aquarius ------ 21 January - 19 February
// // Pisces --------- 20 February - 20 March
// // Aries ---------- 21 March - 20 April
// // Taurus -------- 21 April - 21 May
// // Gemini -------- 22 May - 21 June
// // Cancer -------- 22 June - 22 July
// // Leo ------------- 23 July - 23 August
// // Virgo ----------- 24 August - 23 September
// // Libra ----------- 24 September - 23 October
// // Scorpio -------- 24 October - 22 November
// // Sagittarius ---- 23 November - 21 December
// // Capricorn ----- 22 December - 20 January
// console.log(starSign(new Date(1970, 5, 5)))
// function fridayTheThirteenths(start, end) {
//   end = end || start
//   let result = []
//   let months = [...Array(12).keys()]
//   let years = [...Array(end - start + 1)].map((_, i) => start + i)
//
//   years.forEach(year => {
//     months.forEach(month => {
//       let date = new Date(year, month, 13)
//       if (date.getDay() === 5)
//         result.push((1 + month) + '/13/' + year)
//     })
//   })
//
//   return result.join(' ')
// }
//
// console.log(fridayTheThirteenths(1981))
// let date = new Date(1999, 7, 13).toDateString()
// let newDate = date.split(' ')
// console.log(date)
// console.log(newDate)
// console.dir(date)
// function count(array) {
//
//   return array.reduce((count, word) => {
//     console.log(count, 'before count')
//     console.log(word, 'before word')
//     debugger
//     count[word] = count[word] ? count[word] + 1 : 1
//     console.log(count, 'after count')
//     console.log(word, 'after word')
//     return count
//   }, {})
// }
//
// console.log(count(['james', 'james', 'john','james', 'james', 'john','james', 'james', 'john','james', 'james', 'john']))

//
// function killer(suspectInfo, dead) {
//   for (let person in suspectInfo) {
//     if (suspectInfo[person].some(killed => dead.includes(killed))) return person;
//   }
// }
//
//
// // console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']))
// console.log(killer({ 'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': [] }, ['Ben']))
// //James
// function validPass(password){
//   const reg = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]){4,20}$/
//  return  password.match(reg) ?  'VALID' : 'INVALID'
//
// }
// function validPass(password){
//   return /(?=.+[a-z])(?=.+\d)^[a-z\d]{3,20}$/i.test(password) ? 'VALID' : 'INVALID';
// }
// function getCount(str) {
//   return str.split('').filter(e=>e.match(/^[aeiou]+$/)).length
// }
//
// console.log(getCount('abracadabra'))
// //result 5
// function solution(number) {
//   let newArrr = Array.from({ length: number-1 }, (v, k) => k + 1)
//   let secondArr = newArrr.map(e => {
//       if ((e % 5 === 0) && (e % 3 === 0)) {
//
//         return e
//       } else if (e % 5 === 0) {
//         return  e
//       } else if (e % 3 === 0) {
//         return e
//       } else {
//         return 0
//       }
//     }
//   )
//
//
//
//   return console.log(secondArr.reduce((acc,num)=>acc+num,0))
// }
//
// console.log(solution(50))
// //result 23
// function countString(string) {
//   return string.split('').reduce((count, word) => {
//     count[word] = count[word] ? count[word] + 1 : 1
//     return count
//   }, {})
// }
// console.log(countString("aba"))
// console.log(countString(""))
//
// let moveZeros = function (arr) {
//   let zeros = []
//   let numbers = []
//   arr.forEach(e => {
//     if (e === 0) {
//       zeros.push(e)
//     } else {
//       numbers.push(e)
//     }
//   })
// return  numbers.concat(zeros)
// }
// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))
// //moveZeros([1,2,0,1,0,1,0,3,0,1]
//Сорртировка по количеству повторений в массиве
// function count(array) {
//   return array.reduce((count, word) => {

//     count[word] = count[word] ? count[word] + 1 : 1
//     return count
//   }, {})
// }
// const list = count(['orange', 'orange', 'orange', 'orange', 'banana', 'banana', 'banana', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple', 'milk'])
// const keysSorted = Object.keys(list)
//   .sort((a, b) => list[a] - list[b])

//
//
// function countString(string) {
//   return string.split('').reduce((count, word) => {
//     count[word] = count[word] ? count[word] + 1 : 1
//     return count
//   }, {})
// }
// console.log(countString("aba"))
// console.log(countString(""))
//
// let moveZeros = function (arr) {
//   let zeros = []
//   let numbers = []
//   arr.forEach(e => {
//     if (e === 0) {
//       zeros.push(e)
//     } else {
//       numbers.push(e)
//     }
//   })
// return  numbers.concat(zeros)
// }
// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))
// //moveZeros([1,2,0,1,0,1,0,3,0,1]

// Найти квадратное число

// function isSquare(n) {
//   return Math.sqrt(n) % 1 === 0;
// }
// const isSquare = n => Number.isInteger(Math.sqrt(n));

//LEETCODE
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
//   You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//   You can return the answer in any order.
//   Example 1:
//
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// const twoSum = function(nums, target) {
//   for(let i =0;i<nums.length;i++){
//     for(let j=i+1; j<nums.length;j++){
//       if(nums[j]===target-nums[i]){
//         return [i,j]
//       }
//     }
//   }
// };


// Description:
//   Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// function XO(str) {
//   let lower = str.toLowerCase().split('')
//   let x = lower.filter(e=>e==='x').length
//   let o = lower.filter(e=>e==='o').length
//   return  (x-o)===0
//
// }
// console.log(XO("xxOo"))

// Jaden Casing Strings

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// String.prototype.toJadenCase = function () {
//   let fistStep = this.split(' ').map(e => {
//     let b = e.slice(1)
//     return [e[0].toUpperCase(), ...b]
//   })
//   return fistStep.map(e => e.join('')).join(' ')
//
// };
// String.prototype.toJadenCase = function() {
//   return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
// };
// String.prototype.toJadenCase = function () {
//   return this.split(" ").map(function(word){
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   }).join(" ");
// }
// var str = "How can mirrors be real if our eyes aren't real"
// str.toJadenCase()

//НЕ РЕШИЛ
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// let runningSum = function (nums) {
//   let newArr = []
//   for (let i = 0; i <nums.length; i++) {
//
//   return newArr
// }}
// console.log(runningSum([3,1,2,10,1]))

//<------------------------------------------------------------------>>
// Task.

// Calculate area of given triangle.
// Create a function t_area that will take a string which will represent triangle, find area of the triangle,
// one space will be equal to one length unit. The smallest triangle will have one length unit.
// function tArea(tStr) {
//   let split = tStr.split('\n')
//   let A = split.length - 3
//   let B = split[split.length - 2].split(' ').length - 1
//   return (A * B) / 2
// }
//
// function tArea(tStr) {
//   let count = 0;
//   for (let i = 0; i < tStr.length; i++) {
//     if (tStr[i] === '\n') count++;
//   }
//   const area = ((count - 2) ** 2) / 2;.
//   return area;
// }
//<------------------------------------------------------------------>>
//<------------------------------------------------------------------>>
// Task
// You've just moved into a perfectly straight street with exactly n identical houses on either side ' +
// 'of the road. Naturally, you would like to find out the house number of the people on the other side' +
// ' of the street. The street looks something like this:
// https://www.codewars.com/kata/5f0ed36164f2bc00283aed07 Over The Road.
// let hodd = (r,n) => 1 + (r-1)*2; // house odd.
// let heven = (r,n) => 2*n - (r-1)*2; // house even.
// let rodd = (h,n) => (h+1)/2; // row for odd house.
// let reven = (h,n) => (2*n+2-h)/2; //row for even house.
//
// let overTheRoad = (h, n) => {
//   //console.log("Start",h,n);
//   if(0 == n%2){
//     var r = reven(h,n);
//     var ans = hodd(r,n);
//     //console.log(`Even house ${h} and row us ${r}, next house is ${ans}.`);
//     return ans;
//   }
//   var r = rodd(h,n);
//   var ans = heven(r,n);
//   //console.log(`Odd house ${h} and row us ${r}, next house is ${ans}.`);
//   return ans;
// }
// function overTheRoad(address, n){
//   var maximumPlusMinimum = n * 2 + 1;  // maximum adress is double n // the opposing of Maximum is always 1
//   // adress + opposingAddress = n * 2 + 1
//   // the opposite address is the maximumPlusMinimum minus your address
//   return maximumPlusMinimum - address;
// }
//<------------------------------------------------------------------>>
//<------------------------------------------------------------------>>
// var myList = [];
// for(let i=0; i<5;i++){
//   let firstElem = myList.length+'Chocko'
//   myList.push([firstElem,i])
// }
// console.log(myList)
// function solution(str, ending){
//   if(ending==='') return false
//   return str.split('').splice(-ending.length).join('')===ending
//
// }
//
// console.log(solution('abc',''))

// const flatter = arr => arr.reduce((arr, el) => Array.isArray(el) ? flatter([...arr, ...el]) : [...arr, el], [])
//
//
// const newArr = []
// const externalArray = [
//   {
//     1: [
//       { quantity: 1, descr: 'blahblahblah' },
//       { quantity: 10, descr: 'blah3blah3blah' }
//     ]
//   },
//   {
//     2: [
//       { quantity: 3, descr: 'blahblahblah2' }
//     ]
//   }
// ]
// externalArray.forEach(e => {
//   newArr.push(Object.values(e))
// })
//
// const flattedArray = newArr.flat().flat()
// const count = flattedArray.reduce((acc, curr) => acc + curr.quantity, 0)
// console.log('count: ', count)//14

// console.log(newArr)
// Example 0
//
// function useState(initialValue) {
//   var _val = initialValue
//
//   function state() {
//     return _val // state() uses _val, declared by parent funciton
//   }
//
//   function setState(newVal) {
//
//     _val = newVal
//   }
//
//   return [state, setState] // exposing functions for external use
// }
//
// var [foo, setFoo] = useState(0) // using array destructuring
// console.log(foo()) // logs 0 - the initialValue we gave
// setFoo(1) // sets _val inside useState's scope
// console.log(foo()) // logs 1 - new initialValue, despite exact same call
//
// const MyReact = (function () {
//   let _val // hold our state in module scope
//   return {
//     render(Component) {
//       const Comp = Component()
//       Comp.render()
//       return Comp
//     },
//     useState(initialValue) {
//       _val = _val || initialValue // assign anew every run
//       function setState(newVal) {
//         _val = newVal
//       }
//       return [_val, setState]
//     }
//   }
// })()
// function Counter() {
//   const [count, setCount] = MyReact.useState(0)
//   return {
//     click: () => setCount(count + 1),
//     render: () => console.log('render:', { count })
//   }
// }
// let App
// App = MyReact.render(Counter) // render: { count: 0 }
// App.click()
// App = MyReact.render(Counter) // render: { count: 1 }

// <---- 6 kyu  Create Phone Number ---->
// function createPhoneNumber(numbers) {
//   const resultedNumber = ['(']
//   numbers.forEach((e, index) => {
//     if (index === 2) {
//       resultedNumber.push(`${e}`)
//       resultedNumber.push(')')
//       resultedNumber.push(' ')
//     } else if (index === 6) {
//       resultedNumber.push('-')
//       resultedNumber.push(`${e}`)
//     } else {
//       resultedNumber.push(`${e}`)
//     }
//   })
//   return resultedNumber.join('')
// }
//
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

//Who likes it?
// function likes(names) {
//   let nameStr = 'name, name'
//   let schema = ' and name like this'
//   switch (names.length) {
//     case 0 : {
//       return 'no one likes this'
//     }
//     case 1 : {
//       return names[0] + ' likes this'
//     }
//
//     case 2: {
//       schema = 'name' + schema
//       break
//     }
//     case 3: {
//       schema = nameStr + schema
//       break
//     }
//     default: {
//       schema = nameStr + ` and ${names.length - 2} others like this`
//     }
//   }
//   return names.reduce((name, second) => name.replace('name', second), schema)
//
// }
//
// console.log('likes([\'Jacob\', \'Alex\']): ', likes(['Jacob', 'Alex']))
// console.log('likes([\'Jacob\', \'Alex\']): ', likes(['Alex', 'Jacob', 'Mark', 'Max', 'Mark', 'Max']))
// console.log('likes([\'Jacob\', \'Alex\']): ', likes(['Max', 'John', 'Mark']))

// Stop gninnipS My sdroW!
// function spinWords(string) {
//   const splitedStrind = string.split(' ')
//   return splitedStrind.map(e => {
//     if (e.length > 4) {
//
//       return e.split('').reverse().join('')
//     }
//     return e
//   }).join(' ')
// }
//
// console.log(spinWords('Welcome'))
