//fungsi A
function fnA(n){
    return n * 2;
}
// big o, karena operasi nya hanya 1 kali saja, dan tidak berganti kepada n

//fungsi b
function fnB(n){
    for (let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            console.log(i,j);
        }
    }
}

//big o(n^2), karena perulangan bersarang, n x n

// fungsi c
function fnC(n){
    for(let i = 1; i < n; i *= 2){
        console.log(i);
    }
}

//big o(log n), karena i dikali kan 2 setiap iterasi nya

//fungsi d
function fnD(arr){
    arr.forEach(x => {
        arr.forEach(y =>{
            arr.forEach(z => {
                console.log(x,y,z);
            });
        });
    });
}

//big O(n^3), 3 loop bersarang, n x n x n

function hitungKompleksitas(n, fn){
    const start = Date.now();

    fn(n);

    const end = Date.now();
    console.log(`waktu eksekusi: ${end - start} ms`);
}

function fnB(n){
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){

        }
    }
}

function fnc(n){
    for(let i = 1; i < n; i *= 2){}
}

function fnD(arr){
    arr.forEach(x => {
        arr.forEach(y =>{
            arr.forEach(z => {
            
            });
        });
    });
}

console.log('fungsi A');
hitungKompleksitas(1000,fnA);

console.log('fungsi B');
hitungKompleksitas(1000,fnB)

console.log('fungsi C');
hitungKompleksitas(1000,fnC)

console.log('fungsi D');
hitungKompleksitas(1000, (n) => {
    const arr = new Array(n).fill(0);
    fnD(arr);
});