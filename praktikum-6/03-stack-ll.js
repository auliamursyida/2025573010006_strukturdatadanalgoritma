class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    removeHead() {
        if (!this.head)
            return null;
        const removed = this.head.next;
        this.head = this.head.next;
        this.length--;
        return removed;
    }
    getHead() {
        return this.head ? this.head.data : null;
    }
    isEmpty() {
        return this.length === 0;
    }
    size() {
        return this.length;
    }
    print() {
        if (!this.head) {
            console.log('[Stack  kosong]');
            return;
        }
        let current = this.head;
        let result = '';
        while (current) {
            result += current.next ?
            `[${current.data}] -> ` :
            `[${current.data}]`;
            current = current.next;
        }
        console.log(result);
    }
}

class Stack {
    constructor() {
        this.list = new LinkedList();
    }
    push(data) {
        this.list.prepend(data);
    }
    pop() {
        return this.list.removeHead();
    }
    peek() {
        return this.list.getHead();
    }
    isEmpty() {
        return this.list.isEmpty();
    }
    size() {
        return this.list.size();
    }
    print() {
        this.list.print();
    }
}

const stack = new Stack();
console.log('=== PUSH ===');
stack.push('Buka File');
stack.push('Mengetik');
stack.push('Simpan');
stack.push('Hapus');

stack.print();

console.log('\nTop Stack:');
console.log(stack.peek());

console.log('\nJumlah Data:');
console.log(stack.size());

console.log('\n=== SIMULASI UNDO ===');
const aksi = [
    'Buka Dokumen',
    'Mengetik Kalimat',
    'Tambah Gambar',
    'Simpan File',
    'Hapus Teks'
];
for (let item of aksi) {
    console.log('Aksi:', item);
    stack.push(item);
}
console.log('\nIsi Stack:');
stack.print();

console.log('\nUndo:');
console.log('Undo:', stack.pop());
console.log('Undo:');
console.log('Undo:', stack.pop());

console.log('\nSetelah Undo:');
stack.print();

console.log('\nPeek:');
console.log(stack.peek());

console.log('\nKosong?');
console.log(stack.isEmpty());