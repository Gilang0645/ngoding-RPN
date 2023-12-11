function angkapalindrom(angka) {
    function palindrom(num) { //fungsi untuk memeriksa apakah suatu angka adalah palindrom
        const numString = num.toString() //mengubah angka menjadi string
        const reversedString = numString.split('').reverse().join(''); //untuk membalikkan nilai string
        return numString === reversedString; // mengembalikan true jika string asli dan string yang di balik sama 
    }
    while (true) {
        angka++; // perulangan untuk mencari angka palindrom dengan menambah setiap angka sampai menemukan angka palindrom

        if(palindrom(angka)) { // untuk memeriksa apakah angka tersebut adalah palindrom
            return angka; //mengembalikan angka tersebut jika palindrom

        }
    }
}

//TEST CASES
console.log(angkapalindrom(8)) // 9= kenapa 9?karena 9 juga merupakan palindrom
console.log(angkapalindrom(10)) // 11
console.log(angkapalindrom(20)) //22
console.log(angkapalindrom(42)) // 44
console.log(angkapalindrom(53)) // 55
console.log(angkapalindrom(175)) // 5181
console.log(angkapalindrom(1000)) // 1001
