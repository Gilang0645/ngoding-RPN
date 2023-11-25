// let nilai = 30;

// console.log(nilai >=50)//(true/false) tergantung nilai

// if (nilai >= 50) {
//     console.log("lulus pintar");
// } else if (nilai >=40) {
//  console.log("tidak lulus")
// } else {
//     console.log("tidak lulus lulus")
// }

let nilai = 60;

if(nilai >= 80 && nilai <=100){
    nilai = "A";
} else if (nilai >=70 && nilai < 80) {
    nilai = "B";
} else if (nilai >= 60 && nilai < 70) {
    nilai = "C";
} else {
    nilai = "D";
}

console.log(nilai)
nilai = 60
//Semua kondisi harus terpenuhi lalu dia akan menghasilkan nilai true
//or salah satu kondisi harus terpenuhi lalu dia akan menghasilkan nilai true

let banding = nilai >= 80 && nilai <=100; //antara true or false
console.log(banding ,"&&") //and
banding = nilai >=80 || nilai < 100;
console.log(banding, "||") //or
let banding3 = nilai !=50
console.log(banding, "!") //not

//apa bedanya == dengan ===
let x =50;//number
let y ="50";//string

let banding4 = x == y; //true= tidak mementingkan tipe data
console.log(banding4);
let banding5 = x === y; //false= tipe data harus sama
console.log(banding5);

// if else bisa di bikin bersarang
let number = 6;
if(number > 5) {
    if (number % 2 === 0) { //modulus jika pembagian hasilnya tidak ada, maka hasilnya akan 0 
        console.log("lebih besar dari 5 dan genap")
    } else {
        console.log("lebih besar dari 5 dan ganjil")
    }
} else {
    if (number % 2 === 0) {
        console.log("lebih kecil atau sama dengan dari 5 dan genap")
    } else {
        console.log("lebih kecil atau sama dengan dari 5 dan ganjil")
    }
}