function sum(a) {
    var sum = 0;
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}

let testArray = [5, 10, 15]

console.log(sum(testArray))