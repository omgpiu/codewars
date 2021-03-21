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