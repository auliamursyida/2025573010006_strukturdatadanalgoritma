class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    // Push -> 0(1)
    push(data) {
        const node = new Node(data);
        node.next = this.top;
        this.top = node;
        this.size++;
    }

    // Pop -> 0(1)
    pop() {
        if (this.isEmpty()) return null;
        const value = this.top.data;
        this.top = this.top.next;
        this.size--;

        return value;
    }

    // Peek -> 0(1)
    peek() {
        return this.top ? this.top.data : null;
    }

    // Is Empty -> 0(1)
    isEmpty() {
        return this.size === 0;
    }
}

class MinStack {
    constructor() {
        this.dataStack = new Stack(); 
        this.minStack = new Stack();
    }

    // Push -> 0(1)
    push(value) {
        this.dataStack.push(value);
        if (
            this.minStack.isEmpty() ||
            value <= this.minStack.peek()
        ) {
            this.minStack.push(value);
        }
    }

    // Pop -> 0(1)
    pop() {
        if (this.dataStack.isEmpty()) return null;
        const removed = this.dataStack.pop();
        if (removed === this.minStack.peek()) {
            this.minStack.pop();
        }

        return removed;
    }

    // Get Minimum -> 0(1)
    getMin() {
        return this.minStack.peek();
    }
}

const ms = new MinStack();
console.log("=== MIN STACK ===");
ms.push(5);
console.log("Push(5)");
ms.push(3);
console.log("Push(3)");
ms.push(7);
console.log("Push(7)");
ms.push(2);
console.log("Push(2)");

console.log("getMin() =", ms.getMin());

console.log("Pop() =", ms.pop());
console.log("getMin() =", ms.getMin());

console.log("Pop() =", ms.pop());
console.log("getMin() =", ms.getMin());