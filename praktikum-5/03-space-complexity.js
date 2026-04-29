function jumlahArray(arr) {
    let total = 0;
    for (const x of arr) total += x;
    return total;
}

function duplikasiArray(arr) {
    const baru = [];
    for (const x of arr) baru.push(x * 2);
    return baru;
}

function faktorialRekursi(n) {
    if (n <= 1) return 1;
    return n * faktorialRekursi(n - 1);
}

function faktorialIteratif(n) {
    let hasil = 1;
    for (let i = 2; i <= n; i++) hasil *= i;
    return hasil;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Jumlah array :', jumlahArray(arr));
console.log('Duplikasi array:', duplikasiArray(arr));
console.log('Faktorial 10 rekursif :', faktorialRekursi(10));
console.log('Faktorial 10 iteratif :', faktorialIteratif(10));

function hitungUnik(arr) {
    const seen = new Set(); 
    for (const x of arr) seen.add(x);
    return seen.size;
}

const dataAcak = [1, 2, 3, 4, 5, 3, 6, 4, 7];
console.log('Elemen unik:', hitungUnik(dataAcak));



console.log('\nLATIHAN 3');
class BankAccount {
    constructor (owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amountt;
        }
    }
}

function cariPasanganLambat(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}

function cariPasanganCepat(arr, target) {
    const seen = new Set();

    for (let num of arr) {
        let complement = target - num;

        if (seen.has(complement)) {
            return [complement, num];
        }
        seen.add(num);
    }

    return null;
}

const arr1 = [2, 7, 11, 15];
const target1 = 9;

console.log('Lambat:', cariPasanganLambat(arr1, target1));
console.log('Cepat:', cariPasanganCepat(arr1, target1));

const arr2 = [];
for (let i = 0; i < 50000; i++) {
    arr2.push(Math.floor(Math.random() * 100000));
}

const target2 = -999999;

console.time('Lambat 50k');
cariPasanganLambat(arr2, target2);
console.timeEnd('Lambat 50k');

console.time('Cepat 50k');
cariPasanganCepat(arr2, target2);
console.timeEnd('Cepat 50k');
