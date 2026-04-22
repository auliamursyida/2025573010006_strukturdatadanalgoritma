class Produk {
    constructor(id, nama, harga, stok) {
        this.id = id;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }
    info() {
        console.log(`ID: ${this.id} | Nama: ${this.nama} | Harga: Rp${this.harga} | Stok: ${this.stok}`);
    }
    tersedia() {
        return this.stok > 0;
    }
    jual(jumlah) {

        if (jumlah <= 0) {
            console.log('Jumlah tidak valid');
            return;
        }
        if (jumlah > this.stok) {
            console.log('Stok tidak mencukupi');
            return;
        }
        this.stok -= jumlah;
        console.log(`${this.nama} terjual ${jumlah}`);
    }
}
class ProdukDigital extends Produk {
    constructor(id, nama, harga, ukuranFile, formatFile) {
        super(id, nama, harga, Infinity);
        this.ukuranFile = ukuranFile;
        this.formatFile = formatFile;
    }
    info() {
        console.log(`ID: ${this.id} | Nama: ${this.nama} | Harga: ${this.harga} | File: ${this.ukuranFile}MB (${this.formatFile})`);
    }
    download() {
        console.log(`Mengunduh ${this.nama}...`);
    }
    jual(jumlah) {
        console.log(`${this.nama} berhasil dibeli (produk digital)`);
    }
}
class ProdukFisik extends Produk {
    constructor(id, nama, harga, stok, beratGram, dimensi) {
        super(id, nama, harga, stok);
        this.beratGram = beratGram;
        this.dimensi = dimensi;
    }
    info() {
        console.log(`ID: ${this.id} | Nama: ${this.nama} | Harga: ${this.harga} | Stok: ${this.stok} | Berat: ${this.beratGram} | Dimensi: ${this.dimensi}`);
    }
    hitungOngkir(tarifPerKg) {
        const beratKg = this.beratGram / 1000;
        return beratKg * tarifPerKg;
    }
}
const p1 = new ProdukDigital(1, 'Ebook JavaScript', 50000, 5, 'PDF');
const p2 = new ProdukDigital(2, 'Video Tutorial', 75000, 500, 'MP4');
const p3 = new ProdukFisik(3, 'Laptop', 7000000, 5, 2000, '30x20x3 cm');
const p4 = new ProdukFisik(4, 'Mouse', 150000, 10, 200, '10x5x3 cm');

const daftarProduk = [p1, p2, p3, p4];
console.log('=== SEMUA PRODUK ===');
daftarProduk.forEach(p => p.info());

console.log('\n=== PRODUK TERSEDIA ===');
const tersedia = daftarProduk.filter(p => p.tersedia());
tersedia.forEach(p => p.info());

console.log('\n=== NAMA PRODUK ===');
const namaProduk = daftarProduk.map(p => p.nama);
console.log(namaProduk);
