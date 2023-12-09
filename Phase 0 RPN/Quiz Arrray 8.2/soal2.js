let input = ["001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    let name = input[1] + " Elsharawy"; //input [1] ="roman alamsyah" + "Elshawaty" = "Roman Alamsyah elshawary"
    let provinsi = "Provinsi " + input [2]; // "provinsi" + input [2] = Provinsi Bandar lampung

    input.splice(1, 1, `${name}`); //Menambahkan 1 data pada index ke-1 dan menghapus 1 data
    input.splice(2, 1, `${provinsi}`); //menambahkan data pada index ke-2 dan menghapus 1 data
    input.splice(4, 1, "Pria", "SMA international Metro")
    console.log(input[0], input[1], input[2], input[3], input[4], input[5]);
    
    let bulan = input[3].split("/"); //input ke 3 = "21/05/1989" split("/") untuk menghapus /
    if (bulan[1] == "05") {
        console.log("Mei");
    }

    console.log([bulan[2], bulan[0], bulan[1]]); // "1989", "21", '05
    console.log(bulan.join("-")) // 21-05-1989
    console.log(input[1].substring(0,15)); // menampilkan 15 karakter saja
    
}
dataHandling(input);