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

const plus = (a,b) => a+b

function zipWith(fn,a0,a1) {


  console.log(result)

}
console.log(zipWith(plus, [0,1,2,3,4,5], [6,5,4,3,2,1]))