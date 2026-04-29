//Fungsi A: Intersection
// O(n^2)
function intersectionLambat(a, b) {
    let hasil = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) hasil.push(a[i]);
        }
    }
    return hasil;
}

// O(n)
function intersectionCepat(a, b) {
    let set = new Set(b);
    return a.filter(x => set.has(x));
}

// Fungsi B: Anagaram
function kelompokAnagram(arr) {
    let map = {};
    for (let kata of arr) {
        let key = kata.split('').sort().join('');
        if (!map[key]) map[key] = [];
        map[key].push(kata);
    }
    return Object.values(map);
}

// Fungsi C: Cek Kuadrat
// O(n^3)
function cekKuadratLambat(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (arr[i] + arr[j] === arr[k] * arr[k]) return true;
            }
        }
    }
    return false;
}

// O(n log n)
function cekKuadratCepat(arr) {
    let set = new Set(arr);
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let jumlah = arr[i] + arr[j];
            let akar = Math.sqrt(jumlah);
            if (Number.isInteger(akar) && set.has(akar)) return true;
        }
    }
    return false;
}

// TEST
console.log('Fungsi A:');
console.log(intersectionLambat([1,2,3,4], [3,4,5]));
console.log(intersectionCepat([1,2,3,4], [3,4,5]));

console.log('\n Fungsi B:');
console.log(kelompokAnagram(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

console.log('\n Fungsi C:');
console.log(cekKuadratLambat([1,2,3,4,5]));
console.log(cekKuadratCepat([1,2,3,4,5]));