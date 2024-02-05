function groupAnimals(animals) {
    animals.sort(); //mengurutkan animals sesuai alfabet
    let result = [];
    let group = [];
    
    for (let i = 0; i < animals.length; i++) {//
        if (group.length === 0 || animals[i][0] === group[0][0]) {// untuk mengecek apakah group kosong atau huruf awal hewan saat ini sama dengan huruf awal hewan di group                                                             //jika iya maka hewan saat ini di tambahkan ke group
            group.push(animals[i]); //menambahkan hewaan saat ini kedalam array group
        } else {
            result.push(group);
            group = [animals[i]];
        }
    }
    if (group.length > 0) {
        result.push(group);
    }
    return result;
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil'])); //[ [ 'anoa', 'ayam' ], [ 'cacing' ], [ 'kancil', 'kuda' ] ]
console.log(groupAnimals(['katak', 'buaya', 'gorila', 'kelinci', 'singa']));  //[ [ 'buaya' ], [ 'gorila' ], [ 'katak', 'kelinci' ], [ 'singa' ] ]
console.log(groupAnimals(['jerapah', 'kuda', 'anoa', 'anjing', 'katak'])); //[ [ 'anjing', 'anoa' ], [ 'jerapah' ], [ 'katak', 'kuda' ] ]