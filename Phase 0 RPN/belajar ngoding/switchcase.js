//kamu akan diberikan tanggal dalam tiga variabel yaitu hari,bulan,tahun. 
//disini kamu diminta untuk membuat format tanggal. misal tanggal yang diberikan hari 1, bulan 5 ,tahun 1945.
//maka output yang harus kamu output harus menjadi 1 mei 1945
//GUNAKAN SWITCH CASE UNTUK KASUS INI

let hari = "17"
let bulan = "8"
let tahun = "1945"

switch (bulan) {
    case 1 :
        bulan ="Januari";
        break;
    case 2 :
        bulan ="Februari";
        break;
    case 3 :
        bulan ="Maret";
        break;
    case 4 :
        bulan ="April";
        break;
    case 5 :
        bulan ="Mei";
        break;
    case 6 :
        bulan ="Juni";
        break;
    case 7 :
        bulan ="Juli";
        break;
    case 8 :
        bulan ="Agustus";
        break;
    case 9 :
        bulan ="September";
        break;
    case 10 :
        bulan ="Oktober";
        break;
    case 11 :
        bulan ="November";
        break;
    case 12 :
        bulan ="Desember";
        break;
        
}
console.log('Tanggal : ${hari}${bulan}${tahun}');