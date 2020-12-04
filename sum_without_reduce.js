// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Input: num1 = "123", num2 = "456"
// Output: "579"

// Input: num1 = "123", num2 = "2578"
// Output: "2701"

// 2578
//  123
// 2701

function sumStrings(num1, num2){
    const array1 = num1.split('')
    const array2 = num2.split('')
    let output = []
    let carry = 0
    let remainder = 0

    if(array2.length < array1.length){
        zeroArray = new Array(array1.length - array2.length).fill("0")
        array2 = zeroArray.concat(array2)

    } else if (array2.length > array1.length){
        zeroArray = new Array(array2.length - array1.length).fill("0")
        array1 = zeroArray.concat(array1)
    }

    for(let i=array1.length - 1; i >= 0; i--){
        sum = output.push(parseInt(array1[i]) + parseInt(array2[i])) + carry
        carry = Math.floor(parseInt(array1[i]) + parseInt(array2[i]) / 10)
        remainder = remainder > 1 ? sum % 10 : null
        output.push(remainder)
    }
    return output.reverse().join('')
}

console.log(sumStrings("120", "120"))
