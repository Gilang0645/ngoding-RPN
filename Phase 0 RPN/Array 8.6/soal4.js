function deretGeometri(arr) {
    let rasio = arr[1] / arr[0]; 

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] / arr[i - 1] !== rasio) {
            return false;
        }
     }
     return true
}
console.log(deretGeometri([1, 3, 9, 27, 81]));
console.log(deretGeometri([1, 2, 4, 7, 9]));

 