function angkaPrima(angka) {

    if (angka < 2) { //mengecek jika angka angka kurang dari 2 maka angka tersebut bukan prima karna angka prima harus besar dari 1
        return false
    }
   //Mengecek pembagian
  // Loop dari 2 hingga akar kuadrat dari angka
    for(let i = 2; i <= Math.sqrt(angka); i++ ) {
        if (angka % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false