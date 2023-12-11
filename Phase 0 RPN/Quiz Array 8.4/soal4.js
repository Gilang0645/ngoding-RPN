function pasanganTerbesar (num) {
    let numStr = num.toString(); // mengkonversi angka yang diberkan ke dalam bentuk string dan menyimpan pd variabel
    //numStr untuk mengakses setiap digitnya

    let largestPair = ''; //menyimpan pasangan angka terbesar
    let largestValue = 0; // untuk menyimpaan nilai dari pasangan angka tersebut

    // looping untuk mencari pasangan terbesar
    for (let i = 0; i < numStr.length - 1; i++) { 
    
    let currentPair = numStr[i] + numStr[i + 1] //mengamnbil dua digit yang berdekatan dari string numStr dan menyatukan menjadi pasangan
    //angka dalam variabel curretpair
    let curretPairValue = parseInt(currentPair); // mengubah pasangan angka saat ini dari string menjadi integer dengan menggunakan 
    //fungsi parseInt() untuk memungkinkan membandingkan nilai pasangan angka terbesar yang sudah disimpan

    if (curretPairValue > largestValue) {
        //jika nilai saat ini lebih besar,update nilai terbesar dan pasangan terbesar yang disimpan
        largestValue = curretPairValue;
        largestPair = currentPair;
    }
}
    return parseInt(largestPair); //mengembalikan nilai pasangan terbesar yang ditemukan dalam bentuk integer
}

// test cases
console.log(pasanganTerbesar(641573))//73
console.log(pasanganTerbesar(456789))//89
console.log(pasanganTerbesar(910111))//91
console.log(pasanganTerbesar(234567))//67
console.log(pasanganTerbesar(202122))//22