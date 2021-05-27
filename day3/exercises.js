console.log('Runtime\'s frontend onboarding')

// 1. Create a function to get the integers in range (x, y)
const getIntegers = (x, y) => {
    return [...Array(y - x + 1).keys()].map(i => i + x);
}

console.log(getIntegers(3,7))

// 2. Create a function that will move a value of an array to the end of the same array
const moveToEnd = (arr, v) => {
    if (arr == null || arr.length == 0) return [];
    if (!arr.includes(v)) return [];

    const vIndex = arr.indexOf(v); // Where v is
    arr.push(arr.splice(vIndex, 1)[0]); // Removing v, retrieving it (result_from_splice[0]), and pushing it to the end

    return arr
}

console.log(moveToEnd([1,2,6,4], 6))

// 3. Create a function that searches for a value in a nested object. 
// It returns true if the object contains that value.
const isInObject = (obj, v) => {
    if(obj == null) return false;
 
    var values = Object.values(obj);
    for (let i = 0; i < values.length; i++){
         let checkVal = values[i];
         if (typeof checkVal === "object") {
            // If it's an object, we'll get deeper in the nesting
            return isInObject(checkVal, v);
         } else {
             // Otherwise, we check if we have v
             if(checkVal === v) return true;  
         }      
     }
     return false;
 }

 var nestedObject = {
    data: {
        info: {
            stuff: {
                cenas: 44,
                thing: {
                    moreStuff: {
                        magicNumber: 42,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

console.log(isInObject(nestedObject, 46))

// 4. Create a function that should return an array containing repetitions of the
// number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times
// argument is negative, return an empty array.
const getReps = (reps, v) => {
    if (reps <= 0) return []
    return Array(reps).fill(v);
}

console.log(getReps(3,5))

// 5. Create a function that reverses a number.
const reverseNumber = v => {
    vAsString = String(v);
    return parseInt(vAsString.split("").reverse().join(""));
}

console.log(reverseNumber(2345))

// 6. Create a function that returns a passed string with letters in alphabetical order
const getAlphOrder = s => {
    if(s == null) return "String is null."
    if(s === "") return "String is empty."

    return [...s].sort((a, b) => a.localeCompare(b)).join("");
}

console.log(getAlphOrder("zatre"))

// 7. Create function that accepts a string as a parameter and converts the first
// letter of each word of the string in upper case

const capitalizeWords = s => {
    if(s == null) return "String is null."
    if(s === "") return "String is empty."

    return s.split(" ").map( w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

console.log(capitalizeWords("onboarding runtime"))

// 8. Write a JavaScript function that accepts a string as a parameter and finds the
// longest word within the string.
// This is calling for reduce
const getLongestWord = s => {
    if(s == null) return "String is null."
    if(s === "") return "String is empty."

    var longestWord = s.split(" ").reduce( (longest, current) => 
        current.length > longest.length ? current : longest )
    return longestWord;
}

console.log(getLongestWord("Javascript is cool"))

// 9. Write a JavaScript function that accepts a string as a parameter and counts
// the number of vowels within the string.
// This is calling for regexp. Another solution would be having a const array with all vowels and finding them...
const getHowManyVowels = s => {
    if(s == null) return "String is null."
    if(s === "") return "String is empty."

    return s.match(/[aeiou]/g).length; // g -> all matches
}

console.log(getHowManyVowels("abecedario"))

// 10. Create a function that accepts as a parameter an array with an unordered sequence of
// numbers, from which one is missing. Find out which value it is.

// Expression for the sum of a given n numbers sequence: n(n+1) / 2
// If we know this value, we know the missing one (by subctracting the existing ones from the total sum)
const findMissingValue = arr => {
    if (arr == null || arr.length == 0) return 0;

    // Nested function, just as an experiment
    const sumNNumbers = n => (
        (n*(n+1)) / 2
    )

    sum = sumNNumbers(arr.length)
    arr.forEach( num => sum -= num )

    return sum;
}

console.log(findMissingValue([1, 3, 4, null, 2]))