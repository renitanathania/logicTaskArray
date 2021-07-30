// Nomor 1

let input = [1,2,3];
let count = 0
for (let i=0; i <= input.length; i++){
    count += i
}
console.log(count);

// Nomor 2
function reverseAll(angka) {
    function reverseElement(nomor) {
        let str = nomor.toString();
        let temp = "";
        for (let i = str.length - 1; i >= 0; i--){
            temp += str[i]
        }
        return Number(temp)
    }
    let reverseIndex = []
    for (let i = angka.length - 1; i >= 0; i--){
        if(typeof angka[i] !== "number")
    return "isi array harus number semua"

    reverseIndex.push(reverseElement(angka[i]))
    }
    return reverseIndex;
}
console.log(reverseAll([123, 456, 789]));

//Nomor 3
function uniqueArr(array){
    let hasil = []

    for(let i = 0; i < array.length; i++){
        if(typeof array[i] !== "number")
        return "isi array harus number semua"

        let same = false
        for (let k = 0; k <= hasil.length; k++){
            if(hasil[k] === array[i]){
                same = true;
                break
            }
        }
        if (same === false){
            hasil.push(array[i])
        }
    }
    return hasil
}
console.log(uniqueArr([1,2,3,4,5,6,7,1,3,4,"j",5,5]));
console.log(uniqueArr([1,2,3,4,5,6,7,1,3,4,5,5]));
