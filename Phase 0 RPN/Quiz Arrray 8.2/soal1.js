let input = [
    ['0001', 'Roman Alamsyah', 'Bandar lampung', '25/05/1989', 'membaca'],
    ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Main gitar'],
    ['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
    ['0004', 'Bintang Sanjaya', 'Martapura', '06/04/1970', 'Berkebun']
];

function dataHandling(arr) {
   let hasil = '';
   for (let i = 0;i < arr.length;i++) {
    const data = arr[i];

    hasil += `Nomor ID : ${data[0]}\n`;
    hasil += `Nama Lengkap : ${data[1]}\n`;
    hasil += `TTL : ${data[2],[3]}`;
    hasil += `Hobi : ${data[4]} \n\n`;
   }
   return hasil;
}

console.log(dataHandling(input));


