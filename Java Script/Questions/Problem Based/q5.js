// Check whether a number is case Palindrome or not


function isPalindrome(text){
    let new_str = text.trim().toLowerCase().split(',').reduce((prev, curr)=>`${prev}${curr}`).split('')

    let og = new_str.reduce((prev, curr)=>`${prev}${curr.trim()}`)
    console.log(og)
    new_str = new_str.reverse().reduce((prev, curr)=>`${prev}${curr.trim()}`)
    console.log(new_str)

    if (og === new_str) return true
    return false
}


const text = "racecar"

console.log(isPalindrome(text))