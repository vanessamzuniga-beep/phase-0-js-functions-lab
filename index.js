function calculateTax (amount) {
    return amount * 0.01
}

function convertToUpperCase (text) {
    return string.toUpperCase()
}

function findMaximum (num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

function isPalindrome(word) {
    return word === word.split('').reverse().join('')
}

function calculateDiscountedPrice(originalPrice, discountedPercentage) {
    const discountAmount = originalPrice * (discountPercentage/100)
    return originalPrice - discountAmount
}
const originalPrice = 100
const discountPercentage = 20
const cost = calculateDiscountedPrice(100,20)
console.log(cost)





// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };