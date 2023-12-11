function palindrom (kata) {
    let balikKata = '';

    for (let i = kata.length - 1; i >= 0; i--) { 
        balikKata += kata[i];
    }
    return kata === balikKata;

}

console.log(palindrom('katak')); // true
console.log(palindrom('blanked')); // false
console.log(palindrom('kasur rusak')); // true
console.log(palindrom('civic')); // true
console.log(palindrom('mister')); // false
