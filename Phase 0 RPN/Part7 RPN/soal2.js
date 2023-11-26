// problem
// diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa String.
// function akan me-return kata yang dibalik, contoh, jika kata adalah "john doe" 
// function akan me-return "eod nhoj"

function balikKata(kata) {
    let balikKata ="";
    for ( i = kata.length - 1; i >= 0; i--) {
        balikKata += kata[i];
    }
    return balikKata;
}

//Test cases
console.log(balikKata('Hello World and Coders'));
console.log(balikKata('Jhon doe'));
console.log(balikKata('I am Bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));

//-------------------
console.log('')
//-------------------

