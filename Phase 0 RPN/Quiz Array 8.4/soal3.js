function hitungJumlahkata(kalimat) {
    let jumlahKata = kalimat.split(' ').length; // menggunakan method split untuk menjadikan spasi(' ') sebgai pemisah setiap kata
    return jumlahKata;
}

console.log(hitungJumlahkata('i have a dream'))//4
console.log(hitungJumlahkata('never eat shredded wheat or cake'))//6
console.log(hitungJumlahkata('i believe i can code'))//5
console.log(hitungJumlahkata('bulat kanan bulat kanan kiri kotak segitiga atas'))//8
console.log(hitungJumlahkata('y e a m p l o w w'))//9