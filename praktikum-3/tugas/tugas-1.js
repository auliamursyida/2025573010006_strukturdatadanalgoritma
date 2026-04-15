const dataMahasiswa = [
    {nama: 'Bayu', nilai: 85},
    {nama: 'Siti', nilai: 92},
    {nama: 'Andi', nilai: 70},
    {nama: 'Rina', nilai: 60},
    {nama: 'Doni', nilai: 50},
    {nama: 'Lina', nilai: 78}
];

function hitungStatistik(arrMahasiswa) {
    const hasil = arrMahasiswa.reduce((acc, mhs) => {
        acc.total += 1;
        acc.jumlahNilai += mhs.nilai;
        acc.tertinggi = Math.max(acc.tertinggi, mhs.nilai);
        acc.terendah = Math.min(acc.terendah, mhs.nilai);
        return acc;
    }, {
        total: 0,
        jumlahNilai: 0,
        tertinggi: -Infinity,
        terendah: Infinity
    });
    return {
        total: hasil.total,
        rataRata: hasil.jumlahNilai / hasil.total,
        tertinggi: hasil.tertinggi,
        terendah: hasil.terendah
    };
}

function filterLulus(arrMahasiswa, batasLulus) {
    return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
}
        function tambahGrade(arrMahasiswa) {
            return arrMahasiswa.map(mhs => {
                let grade;

                if (mhs.nilai >= 90) grade = 'A';
                else if (mhs.nilai >= 80) grade = 'B';
                else if (mhs.nilai >= 70) grade = 'C';
                else if (mhs.nilai >= 60) grade = 'D';
                else grade = 'E';

                return {...mhs, grade};
            });
        }

        const statistik = hitungStatistik(dataMahasiswa);
        const lulus = filterLulus(dataMahasiswa, 60);
        const denganGrade = tambahGrade(dataMahasiswa);

        console.log('\n=== Statistik Mahasiswa ===');
        console.log(`Total : ${statistik.total}`);
        console.log(`Rata-rata : ${statistik.rataRata.toFixed(2)}`);
        console.log(`Tertinggi  : ${statistik.tertinggi}`);
        console.log(`Terendah : ${statistik.terendah}`);

        console.log('\n=== Mahasiswa Lulus ===');
        lulus.forEach(mhs => {
            console.log(`${mhs.nama} - ${mhs.nilai}`);
        });

        console.log('\n=== Data dengan Grade ===');
        denganGrade.forEach(mhs => {
            console.log(`${mhs.nama} - ${mhs.nilai} (Grade: ${mhs.grade})`);
        });



        
    
 
     