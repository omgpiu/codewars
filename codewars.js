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

function getMiddle(s) {
    let result = s.split('')
    if (result.length === 1) return result[0]

    if (result.length % 2 === 0) {
        return result[(result.length / 2) - 1] + result[result.length / 2]
    } else {
        return result[Math.trunc(result.length / 2)]
    }

}


console.log(getMiddle("testing"))


