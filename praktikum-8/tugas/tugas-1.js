class HashMapLinearPorbing {
    constructor(kapasitas = 8) {
        this.kapasitas = kapasitas;
        this.ukuran = 0;
        this.collisionCount = 0;

        this.tabel = new Array(kapasitas).fill(null);
        this.DELETED = {deleted: true };
    }
    _hash(key) {
        let hash =  0;
        const PRIME = 31;

        for (let i = 0; i < key.length; i++) {
            hash = (hash * PRIME + key.charCodeAt(i))
            % this.kapasitas;
        }
        return hash;
    }

    _loadFactor() {
        return this.ukuran / this.kapasitas;
    }

    _resize() {
        console.log(`\n[RESIZE]  Kapasitas ${this.kapasitas} -> ${this.kapasitas * 2}`);
        const oldTable = this.tabel;
        this.kapasitas *= 2;
        this.tabel = new Array(this.kapasitas).fill(null);
        this.ukuran = 0;

        for (const item of oldTable) {
            if ( 
                item !== null &&
                item !==  this.DELETED
            ) {
                this.set(item.key, item.value);
            }
        }
    }

    set(key, value) {
        if (this._loadFactor() > 0.7) {
            this._resize();
        }
        let index = this._hash(key);
        while (
            this.tabel[index] !== null &&
            this.tabel[index] !== this.DELETED
        ) {
            this.collisionCount++;
            if (this.tabel[index].key === key) {
                this.tabel[index].value = value;
                return;
            }
            index = (index + 1) % this.kapasitas;
        }
        this.tabel[index] = {
            key, value
        };
        this.ukuran++;
    }

    get(key) {
        let index = this._hash(key);
        let start = index;
        while (this.tabel[index] !== null) {
            if (
                this.tabel[index] !== this.DELETED &&
                this.tabel[index].key === key
            ) {
                return this.tabel[index].value;
            }
            index = (index + 1) % this.kapasitas;

            if (index === start) {
                break;
            }
        }
        return undefined;
    }

    delete(key) {
        let index = this._hash(key);
        let start = index;
        while (this.tabel[index] !== null) {
            if (
                this.tabel[index] !== this.DELETED &&
                this.tabel[index].key === key
            ) {
                this.tabel[index] = this.DELETED;
                this.ukuran--;

                return true;
            }
            index = (index + 1) % this.kapasitas;

            if (index === start) {
                break;
            }
        }
        return false;
    }

    has(key) {
        return this.get(key) !== undefined;
    }

    print() {
        console.log('\n=== HASH TABLE');
        for (let i = 0; i < this.kapasitas; i++) {
            const slot = this.tabel[i];
            if(slot === null) {
                console.log(`${i} : kosong`);
            }
            else {
                console.log( `${i} : (${slot.key}, ${slot.value})`);
            }
        }
    }
}

const map = new  HashMapLinearPorbing(5);

console.log('=================================');
console.log('INSERT DATA');
console.log('============================');

map.set('Ali', 90);
map.set('Budi', 85);
map.set('Cici', 95);
map.set('Dodi', 88);
map.set('Eka', 92);

map.print();

console.log('\nUkuran :', map.ukuran);
console.log('Kapasitas :', map.kapasitas);
console.log('Collision :', map.collisionCount);

console.log("\n================================");
console.log("SEARCH");
console.log("================================");

console.log("Ali  :", map.get("Ali"));
console.log("Cici :", map.get("Cici"));
console.log("Zaki :", map.get("Zaki"));

console.log("\n================================");
console.log("DELETE");
console.log("================================");

console.log("Delete Budi :", map.delete("Budi"));

map.print();

console.log('\n==============================');
console.log('RESIZE TEST');
console.log('==========================');

map.set('Fani', 80);
map.set('Gina', 70);
map.set('Hana', 75);
map.set('Iwan', 89);
map.set('Joko', 91);

map.print();

console.log('\nUkuran :', map.ukuran);
console.log('Kapasitas :', map.kapasitas);
console.log('Collision :', map.collisionCount);
console.log('Load Factor :', (map.ukuran / map.kapasitas).toFixed(2));