let nilaiUjian = 78;

console.log('=== Konversi Grade ===');
console.log('Nilai:', nilaiUjian);

if (nilaiUjian >= 90) {
    console.log('Grade: A (Sangat Baik)');
} else if (nilaiUjian >= 80) {
    console.log('Grade: B (Baik)');
} else if (nilaiUjian >= 70) {
    console.log('Grade: C (Cukup)');
} else if (nilaiUjian >= 60) {
    console.log('Grade: D (Kurang)');
} else {
    console.log('Grade: E (Tidak Lulus)');
}

let namaHari = 'Rabu';

console.log('\n=== Cek Jenis Hari ===');
switch (namaHari) {
    case 'Senin':
    case 'Selasa':
    case 'Rabu':
    case 'Kamis':
    case 'Jumat':
        console.log(`${namaHari} adalah hari kerja.`);
        break;
    case 'Sabtu':
    case 'Minggu':
        console.log(`${namaHari} adalah akhir pekan.`);
        break;
    default:
        console.log('Nama hari tidak dikenli.');
}

let nilaiAkhir = 65;
let statusLulus = nilaiAkhir >=  60 ? 'Lulus' : 'TIDAK LULUS';

console.log('\n=== Status Kelulusan ===');
console.log(`Nilai ${nilaiAkhir}: ${statusLulus}`);

console.log('\n=== Latihan 2 ===');

const bulan = 7;

let musim;

if (bulan === 12 || bulan === 1 || bulan === 2) {
  musim = "Dingin";
} else if (bulan >= 3 && bulan <= 5) {
  musim = "Semi";
} else if (bulan >= 6 && bulan <= 8) {
  musim = "Panas";
} else if (bulan >= 9 && bulan <= 11) {
  musim = "Gugur";
} else {
  musim = "Bulan tidak valid";
}

console.log(`Bulan: ${bulan}`);
console.log(`Musim: ${musim}`);

const adaAwan = true;
const adaAngin = false;

const mendungBerangin = adaAwan && adaAngin;
const adaAwanAtauAngin = adaAwan || adaAngin;
const cerah = !adaAwan;

console.log(`Apakah cuaca mendung dan berangin? ${mendungBerangin}`);
console.log(`Apakah ada awan atau angin? ${adaAwanAtauAngin}`);
console.log(`Apakah langit cerah (tidak ada awan)? ${cerah}`);