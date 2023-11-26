// tugas 1
// buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa halo function!
// Dan di tampilkan di console
function shoutOut() {
    return "Halo Function!";
}
console.log(shoutOut());

//--------------------------------
console.log('')
//--------------------------------

//tugas 2
// buatlah sebuah fungsi bernama calculatemultiply() yang mengembalikan nilai berupa hasil dari dua parameter yang dikirim.\

let num1 = 1
let num2 = 2

function calculateMultiply() {
    return num1 * num2
}

let hasilperkalian = calculateMultiply(num1,num2);
console.log(hasilperkalian);

//-------------------------------
console.log('')
//-------------------------------

// Tugas 3
function processSentence(name, age, address, hobby) {
     return `Nama saya ${name}, Umur saya ${age}, Alamat Saya ${address}, Dan Hobi Saya yaitu ${hobby}`;
}

let name = "Agus";
let age = 30;
let address = "jln. Malioboro, Yogyakarta";
let hobby = "gaming";

let fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);
