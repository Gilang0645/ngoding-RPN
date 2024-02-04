function perkalianUnik (arr) {
    let result = [] ; //array kosong untuk hasil

    for (let i = 0; i < arr.length ; i++) { //mengiterasi melalui setiap element dalam input (arr)
        let kali = 1; //digunakan untuk menyimpan setiap hasil perkalian pada elemen
        for (let k = 0; k < arr.length; k++) { //loop kedua 
            if (i !== k) { //digunakan supaya tidak mengalikan elemen pada index yg sama,agar bisa mengalikan elemen lain kecuali elemen pada indeks i
                kali *= arr[k];
            }
        }
        result.push(kali);
    }
    return result;
}
console.log(perkalianUnik ([2, 4, 6]));
console.log(perkalianUnik ([5, 7, 8]));
console.log(perkalianUnik ([9, 10, 11]));