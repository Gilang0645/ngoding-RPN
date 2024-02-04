function cariMean(arr) {
    let total = 0; //untuk menyimpan total dari semua elemen pada array

    for (let i = 0; i < arr.length; i++ ) {
        total += arr[i]; //nilai dari setiap elemen array akan ditambahkan ke variabel total
    }
    return Math.round(total / arr.length); // math.round digunakan untuk membulatkan hasil mean yang dihasilkan oleh
    // total / arr.length sebagai proses untuk mencari mean

    // cara ke-2 tetapi output yg dihasilkan tidak dibulatkan 
    // let mean = total / arr.length
    // return mean // kenapa hasilnya tdk di bulatkan // karena return mean langsung mengembalikan nilai yang di hasilkan total/arr.length
    
}

//test cases
console.log(cariMean([1, 2, 3, 4, 5])); //3
console.log(cariMean([4, 6, 5, 2, 3])); //4
console.log(cariMean([10, 21, 42, 43]));//29
console.log(cariMean([100, 200, 150, 120])); //143 // kelau tdk dibulatkan maka hasilnya 142.5
console.log(cariMean([90, 87, 45, 42]));//66
console.log(cariMean([23, 42, 45, 70]));//45