function tentukanDeretAritmatika(arr) {
   let selisih = arr[1] - arr[0]; // inisialisasi variabel selisih dengan selisih antara elemen kedua dan pertama

   for(let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== selisih) { //untuk memeriksa selisih antara elemen sekarang dan sebelumnya tetap konsisten
        return false;
    }
   }
   return true
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(tentukanDeretAritmatika([10,12,14,16,18, 19]))
console.log(tentukanDeretAritmatika([3,6,9,12,16]))
