// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
// Input: num1 = "123", num2 = "456"
// Output: "579"
// Input: num1 = "123", num2 = "2578"
// Output: "2701"
// 2578
//  123
// 2701
function sumStrings(num1, num2){
    let array1 = num1.split('')
    let array2 = num2.split('')
    let output = []
    let sum = 0
    let carry = 0

    if(array2.length < array1.length){
        fillArray = new Array(array1.length - array2.length).fill('0')
        array2 = fillArray.concat(array2)
    } else if (array2.length > array1.length){
        fillArray = new Array(array2.length - array1.length).fill('0')
        array1 = fillArray.concat(array1)
    }

    for(let i=[array1.length - 1]; i >= 0; i--){
        sum = +array1[i] + +array2[i] + carry
        carry = Math.floor(sum / 10)
        output.push(sum % 10)
    }
    carry > 0 ? output.push(carry) : null
    return output.reverse().join('')
}

console.log('output:', sumStrings("123", "456")) // pass
console.log('output:', sumStrings("123", "45")) // pass
console.log('output:', sumStrings("9", "9")) // pass
console.log('output:', sumStrings("66", "66")) // pass
console.log('output:', sumStrings("99", "99")) // pass
console.log('output:', sumStrings("953", "8475")) // pass
console.log('output:', sumStrings("8475", "953")) // pass
console.log('output:', sumStrings("2538", "123")) // pass
console.log('output:', sumStrings("123", "789")) // pass
console.log('output:', sumStrings("2578", "123")) // pass