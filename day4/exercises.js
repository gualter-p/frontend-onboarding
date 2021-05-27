// 1. Merge the following Object

const obj1= {a: 1, b:2}
const obj2= {c: 3, d:4}

const mergeObj = (o1, o2) => ({...o1, ...o2})

console.log(mergeObj(obj1,obj2))

// 2. Create a function that accepts an array of objects and it should filter the
// objects that doesn’t have the property name

const oArr = [ 
    {id: 2},    
    {id: 3, name: "Susan"}, 
    {id: 3, name: "Jane"},
    {number: 3},
    {number: 5, name: "Mark"}
]

const filterNoName = (oArr) =>  oArr.filter( o => o.name == null )

console.log(filterNoName(oArr))

// 3. Create a function that returns array of all the properties of an Object

o3 = { name : "David Rayy", sclass : "VI", rollno : 12 };

const getProperties = o => Object.keys(o)

console.log(getProperties(o3))

// 4. Use the object assign method to change the value of the properties name and
// street, of this Object:

const o4 = { 
            name : "Jane",
            lastName: "Spencer",
            address: { 
                        street: "xpto",
                        number: 89 
                      }
            }

const changeProperties = (o4, newName, newStreet) => 
    Object.assign(o4, {
        name: newName,
        address: {
            ...o4.address,
            street: newStreet
        }
    })

console.log(changeProperties(o4, "Mark", "alecrim"))

// 5. Create a function to delete the a property of a Object.

const o5 = {a:1, b:2, c: 3, d:4} 

const deleteProperty = (o, delProp) => {
    delete o[delProp]
    return o
}

console.log(deleteProperty(o5, "c"))

// 6. Create a function to retrieve all the values of an object's properties

const o6 = {a:1, b:2, c:3, d:4} 

const getValues = o => Object.values(o)

console.log(getValues(o6))

// 7. Create a function to convert an object into a list of `[key, value]` pairs

const o7 = {a:1, b:2, c:3, d:4} 

const getObjectAsList = o => Object.entries(o)

console.log(getObjectAsList(o6))

// 8. Create a function to get a copy of the object where the keys have become the
// values and the values the keys

const o8 = {a:1, b:2, c:3, d:4} 

const switchValuesKeys = o => {
    const res = {};
    Object.keys(o).forEach(key => {
      res[o[key]] = key;
    });
    return res;
}

console.log(switchValuesKeys(o8))

// 9. Create a function to check if an object contains given property

const o9 = {a:1, b:2, c:3, d:4} 

const checkProperty = (o, p) => o.hasOwnProperty(p)

console.log(checkProperty(o9, "c"))
console.log(checkProperty(o9, "e"))

// 10. Create a function to get the first element of an array. Passing a parameter 'n'
// will return the first 'n' elements of the array.

const getFirstN = (arr, n=1) => {
    if(n <= 0) return []
    return arr.slice(0, n)
}

console.log(getFirstN([7, 9, 0, -2]))
console.log(getFirstN([],3))
console.log(getFirstN([7, 9, 0, -2],3))
console.log(getFirstN([7, 9, 0, -2],6))
console.log(getFirstN([7, 9, 0, -2],-3))

// 11. Create a function to join all elements of the following array into a string

myColor = ["Red", "Green", "White", "Black"];

const joinToString = arr => arr.join(",")

console.log(joinToString(myColor))

// 12. Write a JavaScript script which accept a number as input and insert dashes
// (-) between each two even numbers.

const dashEven = n => {
    const nAsString = n.toString()
    var res = [nAsString[0]] // Pre-fill with first value, so we can always access the "before" value relative to i

    const isEven = v => v % 2 === 0

    for(let i = 1; i < nAsString.length; i++)
        if( isEven(nAsString[i-1]) && isEven(nAsString[i]) )     
            res.push('-', nAsString[i]);
        else
            res.push(nAsString[i]);    

    return res.join("")
}

console.log(dashEven(224568))

// 13: Write a JavaScript script to find the most frequent item of an array

const a13 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

const getMostFrequent = arr => {
    var frequencies = [];
    var mostFreq = null; 
    var mostFreqTimes = 0;

    arr.forEach ( v => {
        frequencies[v] ? frequencies[v]++ : frequencies[v] = 1; // If v already seen, i++, if first time 1
        if(frequencies[v] > mostFreqTimes) { // Getting most freq value and its frequency
            mostFreq = v; 
            mostFreqTimes = frequencies[v];
        } 
    })

    return `${mostFreq} (${mostFreqTimes} times)`
}

console.log(getMostFrequent(a13))

// 14: There are two arrays with individual values, write a JavaScript program to
// compute the sum of each individual index value from the given arrays

const array1_14 = [1,0,2,3,4];
const array2_14 = [3,5,6,7,8,13];

const sumArrays = (arr1, arr2) => {

    var sumIndex = 0;

    // Sum matching indexes
    var sum = arr1.map( (num, i) => {
        sumIndex++
        return num + arr2[i];
    });

    // Sum exceeding indexes
    if (sumIndex === arr1.length) 
        for (x = sumIndex; x < arr2.length; x++)   
            sum.push(arr2[x]);        
    else 
        for (x = sumIndex; x < arr1.length; x++) 
            sum.push(arr1[x]);
        
    return sum;
}

console.log(sumArrays(array1_14, array2_14))

// 15. Create a function to merge two arrays.

const array1_15 = [1,0,2,3,4];
const array2_15 = [3,5,6,7,8,13];

const mergeArrays = (arr1, arr2) =>  arr1.concat(arr2)

console.log(mergeArrays(array1_15, array2_15))

// 16. Create a function to remove duplicate values

const arr16 = [1,2,3,5,3,5,6,7,8]

const remoDuplicates = arr => [...new Set(arr)] // A set has no dups by definition

console.log(remoDuplicates(arr16))

// 17. Create a function to find the difference of two arrays

const array1_17 = [1, 2, 3]
const array2_17 = [100, 2, 1, 10]

const getDifference = (arr1, arr2) => 
    [ ...arr1.filter(val => !arr2.includes(val)), // The ones in arr1 not in arr2
      ...arr2.filter(val => !arr1.includes(val))] // The ones in arr2 not in arr1


console.log(getDifference(array1_17, array2_17))

// 18. Create a function to remove. 'null', '0', ‘’, 'false', 'undefined' and 'NaN' values
// from an array.
// All unwanted values are "falsy" values -- at first I thought they were "nully"
const array18 =  [NaN, 0, 15, false, -22, '', undefined, 47, null]

const removeFalsyValues = arr => arr.filter( Boolean )

console.log(removeFalsyValues(array18))

// 19. Write a JavaScript function to merge two arrays and removes all
// duplicates elements.

const array1_19 = [1, 2, 3];
const array2_19 = [2, 30, 1];

const mergeArraysNoDups = (arr1, arr2) => [...new Set(arr1.concat(arr2))]

console.log(mergeArraysNoDups(array1_19, array2_19))

// 20. Write a JavaScript function to remove a specific element from an array

const array20 = [2, 5, 9, 6]

const removeValue = (arr, v) => {
   arr.splice(arr.indexOf(v), 1)
   return arr;
}

console.log(removeValue(array20, 5))
