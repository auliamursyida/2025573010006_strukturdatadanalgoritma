function subArrayJumlahK(arr, k) {
    const map = new Map();

    map.set(0, 1);

    let prefixSum = 0;
    let jumlah = 0;

    for (const angka of arr) {
        prefixSum += angka;

        if (map.has(prefixSum - k)) {
            jumlah += map.get(prefixSum - k);
        }

        map.set(
            prefixSum,
            (map.get(prefixSum) || 0) + 1
        );
    }

    return jumlah;
}

function karakterPertamaUnik(s) {
    const freq = new Map();

    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (freq.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
}

function topKFrequent(arr, k) {
    const freq = new Map();

    for (const num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    return [...freq.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(item => item[0]);
}

console.log("================================");
console.log("1. SUBARRAY JUMLAH K");
console.log("================================");

console.log(
    "[1,1,1], k=2 =>",
    subArrayJumlahK([1, 1, 1], 2)
);

console.log(
    "[1,2,3], k=3 =>",
    subArrayJumlahK([1, 2, 3], 3)
);


console.log("\n================================");
console.log("2. KARAKTER PERTAMA UNIK");
console.log("================================");

console.log(
    "leetcode =>",
    karakterPertamaUnik("leetcode")
);

console.log(
    "loveleetcode =>",
    karakterPertamaUnik("loveleetcode")
);

console.log(
    "aabb =>",
    karakterPertamaUnik("aabb")
);


console.log("\n================================");
console.log("3. TOP K FREQUENT");
console.log("================================");

console.log(
    "[1,1,1,2,2,3], k=2 =>",
    topKFrequent([1,1,1,2,2,3], 2)
);

console.log(
    "[4,4,4,5,5,6], k=1 =>",
    topKFrequent([4,4,4,5,5,6], 1)
);
