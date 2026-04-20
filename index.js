// Calculate Tax Function
function calculateTax(amount){
    let taxValue = amount * 0.10
    return taxValue
}


// Convert to Upper Case Function
function convertToUpperCase(text){
    let result = String(text).toUpperCase()
    return result
}


// Find Maximum Function
function findMaximum (num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}


// Palindrome Function
function isPalindrome(word) {
    return word === word.split('').reverse().join('')
}


// Function to calculate discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage/100)
    return originalPrice - discountAmount
}





// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };