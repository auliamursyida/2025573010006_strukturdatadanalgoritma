class Node {
    constructor(data) {
        this.data= data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // append(data) -> O(1)
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // prepend(data) O(1)
    // tambah node di depan
    prepend(data) {
        const newNode = new Node(data) ;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // insertAt(data,index) O(n)
    insertAt(data,index) {
        if (index<0 || index>this.size) {
            console.log('Index di luar batas');
            return;
        }
        if (index === 0) {
            this.prepend(data);
            return;
        }
        if (index === this.size) {
            this.append(data);
            return;
        }
        const newNode = new Node(data);
        let current = this.head;
        for(let i=0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        newNode.prev = current;
        current.next.prev = newNode;
        current.next = newNode;
        this.size++;
    }

    // delete(data) O(n)
    delete(data) {
        if (!this.head) 
            return false;
        let current = this.head;
        while (current) {
            if (current.data===data) {
                if (current === this.head) {
                    this.head = current.next;
                    if (this.head) {
                        this.head.prev = null;
                    }
                }
                else if (current === this.tail) {
                    this.tail = current.prev;
                    this.tail.next = null;
                }
                else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                this.size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // reverse() O(n)
    reverse() {
        let current = this.head;
        let temp = null;
        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next=temp;
            current = current.prev;
        }
        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    // print dari depan O(n)
    printFoward() {
        let current = this.head;
        let result='';
        while (current) {
            result += current.next ?
            `[${current.data}] -> ` :
            `[${current.data}]`;
            current = current.next;
        }
        console.log('Depan :', result);
    }

    // print dari belakang O(n)
    // menggunakan tail
    printBackward() {
        let current = this.tail;
        let  result = '';
        while (current) {
            result += current.prev ?
            `[${current.data}] <- `:
            `[${current.data}]`;
            current = current.prev;
        }
        console.log('Belakang :', result);
    }
}

const dll = new DoublyLinkedList();

console.log('=== Append ===');
dll.append(10);
dll.append(20);
dll.append(30);
dll.append(40);
dll.printFoward();

console.log('\n=== Prepend ===');
dll.prepend(5);
dll.printFoward();

console.log('\n=== Insert index 2 ===');
dll.insertAt(15,2);
dll.printFoward();

console.log('\n=== Delete 20 ===');
dll.delete(20);
dll.printFoward();

console.log('\n=== Reverse ===');
dll.reverse();
dll.printFoward();

console.log('\n=== Print Belakang ===');
dll.printBackward();

console.log('\nJumlah Node:');
console.log(dll.size);