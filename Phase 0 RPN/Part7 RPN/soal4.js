function xo(str) {
    let x = 0;
    let o = 0;

    for (i = o; i < str.length; i++) {
        if (str[i] === 'x') {
            x++
        } else {
            0++
        }
    }
    return x === 0;
}

console.log(xo('xoxoxo')); //true
console.log(xo('oxooxo')); //false
console.log(xo('oxo')); //false
console.log(xo('xxxooo')); //true
console.log(xo('xoxooxxo')); //true