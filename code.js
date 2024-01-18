function sum(a) {
    var sum = 0;
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}

let testArray1 = [5, 10, 15]
let testArray2 = [1, 2]

console.log(sum(testArray1))
console.log(sum(testArray2))