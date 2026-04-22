const mahasiswa = {
    nama : 'Budi Santoso',
    umur : 20,
    jurusan : 'Teknik Informatika',
    ipk : 3.75,
    aktif : true,
};

console.log('=== Akses Property ===');
console.log('Nama :', mahasiswa.nama);
console.log('Jurusan :', mahasiswa['jurusan']);

const keyYangDicari = 'ipk';
console.log('IPK  :', mahasiswa[keyYangDicari]);

mahasiswa.email = 'budi@email.com';
mahasiswa.umue = 21;

console.log('\n Setelah diubah:', mahasiswa);

delete mahasiswa.aktif;
console.log('Setelah delete:',  mahasiswa);

const dosen = {
    nama : 'Dr. Ahmad Fauzi',
    mataKuliah : 'Struktur Data',
    pengalaman : 10, 

    perkenalan() {
        return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;
    },

    statusSenior() {
        if (this.pengalaman >= 10) {
            return `${this.nama} adalah dosen senior.`;
        }
        return `{this.nama} adalah dosen junior.`;
    }
}

    console.log('\n=== Method object ===');
    console.log(dosen.perkenalan());
    console.log(dosen.statusSenior());

    console.log('\n=== Iterasi Object');
    for (const key in dosen) {
        if (typeof dosen[key] !== 'function') {
            console.log(` ${key}: ${dosen[key]}`);
        }
    }
    // object.keys(), object.values(), object.entries()
    console.log('Keys :', Object.keys(mahasiswa));
    console.log('Values :', Object.values(mahasiswa));


    console.log('\n=== Latihan 1 ===');
    const koleksiBuku = [
        {
            judul: "Pemrograman JavaScript Dasar",
            pengarang: "Budi Santoso",
            tahunTerbit: 2022,
            harga: 100000,
            tersedia: true,

            info: function () {
                return  `Judul: ${this.judul}, pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: ${this.harga},  Tersedia: ${this.tersedia} `;
            },

            diskon: function (persen) {
                return this.harga - (this.harga * persen / 100);
            }
        },
        {
            judul: "Struktur Data dan Algoritma",
            pengarang: "Ahmad Wijaya",
            tahunTerbit: 2021,
            harga: 120000,
            tersedia: false,

            info: function () {
                return `Judul: ${this.judul}, pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: ${this.harga}, Tersedia: ${this.tersedia}`;
            },
            diskon: function () {
                return this.harga - (this.harga * persen / 100);
            }
        },
        {
            judul: "Basis Data MYSQL",
            pengarang: "Siti Riskia",
            tahunTerbit: 2023,
            harga: 90000,
            tersedia: true,

            info: function () {
                return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: ${this,this.harga}, Tersedia: ${this.tersedia}`;
            },
            diskon: function (persen) {
                return this.harga - (this.harga * persen / 100);
            }
        }
    ];

    console.log('=== SEMUA BUKU ===');
    koleksiBuku.forEach(buku => {
        console.log(buku.info());
    });

    console.log('\n=== BUKU TERSEDIA ===');
    const bukuTersedia = koleksiBuku.filter(buku => buku.tersedia === true);
    bukuTersedia.forEach(buku => {

        console.log(buku.info());
    });
    console.log('\n=== CONTOH DISKON  ===');
    console.log(koleksiBuku[0].diskon(10));