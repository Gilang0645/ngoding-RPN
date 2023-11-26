// // Problem
// diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima
// dua parameter angka.
// function akan me-return nilai true jika angka2 lebih besar dari angka 1
// dan false jika sebaliknya.
// jika kedua angka bernilai sama , function akan me-return -1.

function bandingkanAngka(angka1, angka2) {
    //code disini
    if (angka1 > angka2) {
        return true;
    } else if (angka1 == angka2) {
        return -1;
    } else {
        return false;
    }
}

// Test cases
    console.log(bandingkanAngka(5, 8));
true
    console.log(bandingkanAngka(5, 3));
false
    console.log(bandingkanAngka(4, 4));
-1
    console.log(bandingkanAngka(3, 3));
-1
    console.log(bandingkanAngka(17, 2));
false

//-----------------------------------
console.log('')
//-----------------------------------