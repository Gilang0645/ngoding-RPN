// cara membust variabel
var a = 'a';
let b = 'b';
const c = 'c';

// variabel bisa menampung tipe data  string(text).interjent(number),bolean,array,object.

let nama = "gilang";  //string
let umur = "18"  //number
let apakahBenar = true;  // boolean
let uang = 5000.0 //number namun ada koma 

// operator aritmatika 

let angka1 = 10;
let angka2 = 20;

console.log(angka1 + angka2, 'pertambahan'); 
console.log(angka1 - angka2, 'pengurangan');
console.log(angka1 * angka2, 'perkalian');
console.log(angka1 / angka2, 'pembagian');
console.log(angka1 % angka2, 'modulus');

// Mengisi variabel
let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika); 

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika);

// string juga bisa ditambah namun string ga bisa dikurang dengan operator aritmatika
let firstname = 'agus';
let lastname = 'setiawan';
let fullname = firstname +' '+ lastname;
console.log(fullname)
console.log(firstname +' '+lastname);
console.log(firstname - lastname)//NaN

//alur pembacaan code
//untuk membaca code harus membacanya dari kiri ke kanan, dan atas ke bawah
//contoh

let number = 20;
console.log(number + 10);//20+10
number = 10;
console.log(number + 10);//10+10
number=false
console.log(number + 10);
number=true
console.log(number + 10);
//kenapa hasil false tetap 10?karena false=0 sedangkan true=1

//membaca error
// const hewan = 'jerapah';
// console.log(hewan)
// hewan = 'buaya'