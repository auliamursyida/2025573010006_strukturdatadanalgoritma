const nilaiMahasiswa = [75, 90, 55, 82, 68, 95, 48, 77];

console.log('=== forEach: Tampilkan Semua Nilai ===');
nilaiMahasiswa.forEach((nilai, indexs) => {
    console.log(` Mahasiswa-${indexs + 1}: ${nilai}`);
});

const gradeHuruf = nilaiMahasiswa.map(nilai => {
    if (nilai >= 90) return 'A';
    if (nilai >= 80) return 'B';
    if (nilai >= 70) return 'C';
    if (nilai >= 60) return 'D';
    return 'E';
});

console.log('\n=== map: Nilai ke Grade ===');
console.log('Nilai :', nilaiMahasiswa);
console.log('Grade :', gradeHuruf);

const nilaiLulus = nilaiMahasiswa.filter(nilai => nilai => 60);
const nilaiGagal = nilaiMahasiswa.filter(nilai => nilai < 60);

console.log('\n=== filter: Lulus dan Tidak Lulus ===');
console.log('Semua nilai :', nilaiMahasiswa);
console.log('Nilai Lulus :', nilaiLulus);
console.log('Nilai gagal :', nilaiGagal);

const totalNilai = nilaiMahasiswa.reduce((akumulator, nilai) => {
    return akumulator + nilai;
}, 0);

const rataRata = totalNilai / nilaiMahasiswa.length;

console.log('\n=== reduce: Statistik Nilai ===');
console.log('Total nilai :', totalNilai);
console.log('Rata-rata :', rataRata.toFixed(2));

const rataRataNilaiLulus = nilaiMahasiswa
      .filter(nilai => nilai >= 60)
      .reduce((acc, val, idx, arr) => {
        return acc + val / arr.length;
      }, 0);

console.log('\n=== Method Chaiining ===');
console.log('Rata-rata nilai lulus:', rataRataNilaiLulus.toFixed(2));

console.log('\n=== Latihan 4 ===');
const produk = [
    {nama: 'Laptop', harga: 8500000, stok: 5},
    {nama: 'Mouse', harga: 150000, stok: 0},
    {nama: 'Keyboard', harga: 450000, stok: 12},
    {nama: 'Monitor', harga: 3200000, stok: 0},
    {nama: 'Headset', harga: 350000, stok: 8}
];

const produkTersedia = produk.filter(p => p.stok > 0);
console.log('Produk tersedia:', produkTersedia);

const namaProduk = produkTersedia.map(p => p.nama);
console.log('Nama produk tersedia:', namaProduk);

const totalInvestaris = produkTersedia.reduce((total, p) => {
    return total + (p.harga * p.stok);
}, 0);

console.log('Total nilai investaris:', totalInvestaris);

produk.forEach(p => {
    if (p.stok > 0) {
        console.log(`[TERSEDIA] ${p.nama} - Rp${p.harga} (${p.stok} unit)`);
    } else {
        console.log(`[HABIS] ${p.nama} - Rp${p.harga}`);
    }
});
