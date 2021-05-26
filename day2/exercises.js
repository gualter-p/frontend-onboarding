console.log('Runtime\'s frontend onboarding')

// 1. Create a function to get the integers in range (x, y)
const getIntegers = (x, y) => {
    if (x >= y) return [];

    var res = [];
    for (let i = x; i <= y; i++)
        res.push(i)
    return res;
}

const getIntegersES6 = (x, y) => {
    return [...Array(y - x + 1).keys()].map(i => i + x);
}

console.log(getIntegers(3,7))
console.log(getIntegersES6(3,7))

// 2. Create a function that will move a value of an array to the end of the same array
const moveToEnd = (arr, v) => {
    if (arr === undefined || arr.length == 0) return [];
    if (!arr.includes(v)) return [];

    const vIndex = arr.indexOf(v); // Where v is
    const toIndex = arr.length-1; // Where v will be
    const buffer = arr[toIndex]; // Buffer storing arr's last value

    arr[toIndex] = v;
    arr[vIndex] = buffer;

    return arr;
}

console.log(moveToEnd([1,2,6,4], 6))

// 3. Create a function that searches for a value in a nested object. 
// It returns true if the object contains that value.
const isInObject = (obj, v) => {
   var values = Object.values(obj);
   var res = false;
   for (let i = 0; i < values.length; i++){
        let checkVal = values[i];
        if (typeof checkVal === "object") {
           // If it's an object, we'll get deeper in the nesting
           return isInObject(checkVal, v);
        } else {
            // Otherwise, we check if we have v
            if(checkVal === v) res = true;  
        }      
    }
    return res;
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

console.log(isInObject(nestedObject, 44))

// 4. Create a function that should return an array containing repetitions of the
// number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times
// argument is negative, return an empty array.
const getReps = (reps, v) => {
    if (reps <= 0) return []

    return Array(reps).fill(v);
}

// 5. Create a function that reverses a number.
const reverseNumber = v => {
    vAsString = String(v);
    return parseInt(vAsString.split("").reverse().join(""));
}
