// O(1)
function fn_O1(n) {
    return n + 1;
}

// O(n)
function fn_On(n) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += i;
    }
    return total;
}

// O(n log n)
function fn_OnLogn(n) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j *= 2) { // log2(n)
            total += j;
        }
    }
    return total;
}

// O(n^2)
function fn_On2(n) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            total += i + j;
        }
    }
    return total;
}

// Fungsi ukur waktu
function ukurWaktu(label, fn) {
    const mulai = Date.now();
    fn();
    const selesai = Date.now();
    console.log(label + ":", selesai - mulai, "ms");
}

// Benchmark 
function benchmarkSemua(ukuranData) {
    for (let n of ukuranData) {
        console.log("\nUkuran data:", n);

        ukurWaktu("O(1)     ", () => fn_O1(n));
        ukurWaktu("O(n)     ", () => fn_On(n));
        ukurWaktu("O(n log n)", () => fn_OnLogn(n));
        ukurWaktu("O(n^2)   ", () => fn_On2(n));
    }
}

// panggil
benchmarkSemua([100, 500, 1000, 5000, 10000]);

// ANALISIS 
/*
Hasil pengamatan:
- O(1) hampir tidak berubah walaupun n bertambah
- O(n) meningkat secara linear
- O(n log n) lebih cepat dari O(n^2) tetapi lebih lambat dari O(n)
- O(n^2) meningkat sangat cepat saat n besar

Kesimpulan:
Pola pertumbuhan sesuai dengan teori Big O, di mana semakin besar kompleksitas,
semakin cepat waktu eksekusi bertambah.
*/