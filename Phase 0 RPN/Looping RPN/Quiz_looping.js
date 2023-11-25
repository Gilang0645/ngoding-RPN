//Soal 1 Membuat Looping while menghitung maju dan mundur

console.log("looping pertama")
let i = 0

while (i <= 10) {
    console.log(i);
    i++
}

console.log("looping Kedua")
let j = 10

while (j >= 0) {
    console.log(j);
    j--
}

//soal 2 membuat looping for menghitung maju dan mundur
console.log("forloop maju")
for(let i = 0; i <= 5; i++) {
    console.log(i)
}

console.log("forloop mundur")
for (let i = 5; i >= 0; i--) {
    console.log(i)
}

//soal 3 membuat looping angka ganjil dan genap
let k = 0;
while (k < 100) {
    k++;
    if(k % 2 === 1) {
        console.log(`${k} adalah ganjil`)
    }else if(k % 2 === 0) {
        console.log(`${k} adalah genap`)
    }
}

//Soal 4 Counter loop kelipatan
//kelipatan 3 counter pertambahan 2
for (let i = 1;i <= 100; i += 2) {
    if (i % 3 === 0) {
        console.log(`${i} Kelipatan 3`)
    } 
    
}

//kelipatan 6 counter pertambahan 5
for (let i = 1;i <= 100; i +=5) {
    if (i % 6 === 0) { 
        console.log(`${i} Kelipatan 6`)
    }
}

//kelipatan 10 counter kelipatan 9
for (let i = 1;i <= 100; i += 9) {
    if (i % 10 === 0) {
        console.log(`${i} Kelipatan 10`)
    }
}

//soal 5 bintang Asteriks
let input = 5;
for (let i = 0, j = ""; i < input; i++) {
    j += "*"
    console.log(j);
}