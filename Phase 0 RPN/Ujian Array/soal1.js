function targetTerdekat(arr) {
    let x = -1; // -1? untuk menyimpan posisi x dan o,diatur menjadi -1 karena belum ditemukan
    let k = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("o")) {  //jika elemen saat ini berisi 'o', simpan posisi 'o'
            k = i;
        }
        else if(arr[i].includes("x")) { //jika elemen saat ini berisi 'o', simpan posisi 'o'
            x = i;
            break;
        }
    }   
    return Math.abs(x - k); //untuk menghitung jarak absolut antara x dan o kemudian mengembalikan nilai tsb
}

console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x']));//3
console.log(targetTerdekat(['x', '', 'o', '', '', 'x', '', 'x']));//1
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x']));//4



   
    