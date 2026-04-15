function pangkat(basis, eksponen) {
    if (eksponen === 0) return 1;
    return basis * pangkat(basis, eksponen - 1);
}

console.log('=== Pangkat ===');
console.log(`2^3 = ${pangkat(2, 3)}`);
console.log(`5^2 = ${pangkat(5, 2)}`);
console.log(`3^4 = ${pangkat(3, 4)}`);

function balikString(str) {
    if (str.length <= 1) return str;
    return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}

console.log('\n=== Balik String ===');
console.log(`halo -> ${balikString('halo')}`);
console.log(`dunia ->  ${balikString('dunia')}`);

function cekPalindrom(str) {
    const hasilBalik = balikString(str);
    return str === hasilBalik;
}

console.log('\n=== Cek Palindrom ===');
const kata = ['katak', 'civic', 'level', 'buku'];

kata.forEach(k => {
    console.log(`${k} -> ${cekPalindrom(k) ? 'palindrom' : 'Bukan Palindrom'}`);
});