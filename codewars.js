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
// console.log(squares(2, 0))
// [2,4,16,256,65536]