class Node {
    constructor(data) {
        this.data = data;
        this.next =  null;
    }
}

function buatLinkedList(arr) {
    if (arr. length === 0)
        return null;
    let head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }
    return head;
}

function print(head) {
    let current = head;
    let result = '';
    while (current) {
        result += current.next ?
        `[${current.data}] -> `:
        `[${current.data}]`;
        current = current.next;
    }
    console.log(result);
}

function palindromLL(head) {
    let arr=[];
    let current = head;
    while (current) {
        arr.push(current.data);
        current = current.next;
    }
    let kiri = 0;
    let kanan = arr.length-1;
    while (kiri < kanan) {
        if (arr[kiri]!==arr[kanan])
            return false;
        kiri++;
        kanan--;
    }
    return true;
}

function hapusNDariAkhir(head,n) {
    let dummy = new Node(0);
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}

function tengahLinkedList(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

console.log('=== PALINDROM ===');
let p1 = buatLinkedList([1,2,3,2,1]);
print(p1);
console.log(palindromLL(p1));
let p2 = buatLinkedList([1,2,2,1]);
print(p2);
console.log(palindromLL(p2));
let p3 = buatLinkedList([1,2,3]);
print(p3);
console.log(palindromLL(p3));

console.log('\n=== HAPUS N DARI AKHIR ===');
let h1 = buatLinkedList([1,2,3,4,5]);
print(h1);
h1 = hapusNDariAkhir(h1,2);
print(h1);
let h2 = buatLinkedList([10,20,30,40]);
print(h2);
h2 = hapusNDariAkhir(h2,1);
print(h2);
let h3 = buatLinkedList([5,6,7]);
print(h3);
h3 = hapusNDariAkhir(h3,3);
print(h3);

console.log('\n=== NODE TENGAH ===');
let t1 = buatLinkedList([1,2,3,4,5]);
print(t1);
console.log(
    'Tengah:',
    tengahLinkedList(t1).data
);

let t2 = buatLinkedList([10,20,30,40]);
print(t2);
console.log(
    'Tengah',
    tengahLinkedList(t2).data
);

let t3 = buatLinkedList([7,8,9,10,11,12]);
print(t3);
console.log(
    'Tengah:',
    tengahLinkedList(t3).data
);