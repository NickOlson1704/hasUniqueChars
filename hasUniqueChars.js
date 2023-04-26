// Write your code below

//Given a word, return true if that word contains only unique characters. Return false otherwise.

//For example:

//hasUniqueChars("Monday")
// returns true
//hasUniqueChars("Moonday")
// returns false
//Uppercase and lowercase letters should be considered separately:

//hasUniqueChars("Bob")
// returns true

function hasUniqueChars(str) {
    for (let i = 0; i < str.length; i++) {
    for (let n = i + 1; n < str.length; n++)  {
        if(str[i] === str[n]) {
            return false
            }
        }   
    }
    return true

}

console.log(hasUniqueChars("Egha"))