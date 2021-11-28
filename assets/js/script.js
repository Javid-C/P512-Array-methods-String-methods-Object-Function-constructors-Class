function searchArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            return true
        }
    }
    return false;
}

let arr = [1, 5, 10, 15, 22];

// console.log(searchArray(arr, 5));

function Search(arr, num) {
    let result = false;
    arr.forEach(element => {
        if (element == num) {
            result = true;
        }
    });
    return result;
}

// console.log(Search(arr, 5));


function Even(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

// console.log(Even(arr));

let filter = arr.filter(ele => {
    return ele % 2 == 0
})

// console.log(filter);

let age = 20;
let nihad = {
    firstname: "Nihad",
    age: 17,
    getAge: () => {
        return nihad.age;
    }
}

// console.log(nihad.getAge());


let itArr = [1, 5, 20, 30, 42, "Madina"]

// console.log(iterationArr.includes(41));

// console.log(itArr.find((value, index, array) => {
//     return value == 21
// }));

// console.log(itArr.findIndex(value => {
//     return value == 32
// }));


function Arg() {
    return Array.from(arguments);
}

// console.log(Arg(5, 10, 80));

// let keys = itArr.keys()

// console.log(Array.from(keys));


// let join = itArr.join("")

// console.log(join);

// itArr.push(30)


// itArr.pop();
// itArr.pop();
// itArr.pop();

// itArr.shift();
// itArr.unshift("Ricat")

// console.log(itArr);

let str = " This is a string string "
console.log(str);
// console.log(str.slice(3, 4));

// console.log(str.substring(0, 10) + "...");

// console.log(str.substr(-4, 2));


// let newStr = str.replace(/sTring/ig, "number")
// console.log(newStr);

// let upper = str.toUpperCase();
// let lower = str.toLowerCase();

// console.log(upper);
// console.log(lower);



// let concat = str.concat("Sama", "Madina", "Ali", newStr)
// console.log(concat);

// console.log(str + "okay");

console.log(str.trim().length);

let nums = "1230"

let start = nums.padEnd(nums.length + 2, "3")
console.log(start);

let charAt = str.charAt(2)

let code = str.charCodeAt(1)
console.log(code);


let splitArr = str.trim().split("h")

console.log(splitArr);