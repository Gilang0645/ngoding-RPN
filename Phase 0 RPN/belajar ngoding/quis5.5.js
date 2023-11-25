// 1. let's form a sentence
// problem
// pada tugas ini kamu diminta untuk melalukan penambahan string menggunakan simbol (+)
// disediakan variabel word tambahkan nilai word satu per satu dengan nilai variabel lain 
// untuk membentuk sebuah kalimat jangan lupa menambahkan spasi di setiap kata ,
// dan tampilkan di console hasil penggabungannyal

let word = 'javascript'
let second = 'is'
let third = 'awesome'
let fourth = 'and'
let fifth = 'i'
let sixth = 'love'
let seventh = 'it'

console.log(word +' '+ second +' '+ third +' '+ fourth +' '+ fifth +' '+ sixth +' '+ seventh)
console.log(' ')

// 2. index accessing - 1 by 1
// problem
// pada tugas ini kamu diminta untuk "memecah"sebuah kalimat dan menampilkan setiap kata didalamnya.
// untuk soal ini gunakan akses satu per satu karakter dari string untuk mengambil huruf di setiap kata
// Hints 
// saat kamu mendapatkan hurus untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata

let word2 ='wow javaScript is so cool';
let firstword = word2[0] + word[1]+ word [2];
let secondword = word2[4] + word2[5] + word[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13];
let thirdword = word2[15] + word2[16];
let fourthword = word2[18] + word2[19];
let fifthword = word2[21] + word2[22] + word2[23] + word2[24];

console.log('firstword: ' + firstword);
console.log('secondword: ' + secondword);
console.log('thirdword: ' + thirdword);
console.log('fourthword: ' + fourthword);
console.log('fifthword; ' + fifthword);

// 3. Breaking sentence (again) using substring
// problem
// mirip seperti Soal no 2,namun gunakan substring untuk mengambil potongan dari setiap kata

let word3 ='wow javaScript is so cool';
let firstword3 = word3.substring (0,3);
let secondword3 = word3.substring (4,14);
let thirdword3 = word3.substring (15,17);
let fourthword3 = word3.substring (18,20);
let fifthword3 = word3.substring (21,25);

console.log('firstword3: ' + firstword3);
console.log('secondword3: ' + secondword3);
console.log('thirdword3: ' + thirdword3);
console.log('fourthword3: ' + fourthword3);
console.log('fifthword3: ' + fifthword3);

// 4. Breaking sentence (yet again) and count each length
// problem
// mirip soal no 3 tetapi tampilkan juga panjang kata masing masing

let word4 = 'wow javaScript is so cool';
let firstword4 = word4.substring (0,3);
let secondword4 = word4.substring (4,14);
let thirdword4 = word4.substring (15,17);
let fourthword4 = word4.substring (18,20);
let fifthword4 = word4.substring (21,25);

let firstwordlenght = firstword4.length;
let secondwordlenght = secondword4.length;
let thirdwordlenght = thirdword4.length;
let fourthwordlenght = fourthword4.length;
let fifthwordlenght = fifthword4.length;

console.log('first word: ' + firstword4 + ' ,with lenght: ' + firstwordlenght);
console.log('second word: ' + secondword4 + ' ,with lenght: ' + secondwordlenght);
console.log('third word: ' + thirdword4 + ' ,with lenght: ' + thirdwordlenght);
console.log('fourth vword: ' + fourthword4 + ' ,with lenght: ' + fourthwordlenght);
console.log('fifth word: ' + fifthword4 + ' ,with lenght: ' + fifthwordlenght);








