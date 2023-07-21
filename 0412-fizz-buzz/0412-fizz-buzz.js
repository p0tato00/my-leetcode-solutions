/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arr = []
    for (let i = 1; i <= n; i++){
        let val = ""
        if (i % 3 && i % 5){val += i.toString()}
        if (!(i % 3)){val += "Fizz"} 
        if (!(i % 5)){val += "Buzz"} 
        arr.push(val)
    }
    return arr
};