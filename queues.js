/**
 * Commonly used when you want to process jobs on the order they're recieved
 *
 * Similar to a stack but the first item is the one removed (FIFO as opposed to LIFO)
 *
 * 'Like a line, join from the back, leave from the front'
 *
 * Printers, Operating systems, web servers, live support systems all uses queues
 *
 * Multiple consumers line up & get access to the resource based on the queue
 *
 *  Operations:
 *      ALL RUN IN O(1) BECAUSE NO SEARCHING IS REQUIRED
 *
 *      enqueue
 *          add item to the back
 *
 *      dequeue
 *          remove item at the front
 *
 *      peek
 *          get item at the front w/o removing
 *
 *      isEmpty
 *
 *      isFull
 *
 *  there are THREE ways to implement a queue
 *  we can store the items in:
 *      an array
 *      a link list
 *      a stack
 **/

class Stack {
    constructor() {
        this.items = [];
    }
    //push
    push (item) {
        this.items.push(item)
    }
    //pop
    pop () {
        if (this.items.length === 0) {
            return 'Underflow';
        }
        return this.items.pop()
    }
    //peek
    peek () {
        return this.items[this.items.length - 1];
    }
    //isEmpty
    isEmpty () {
        return this.items.length === 0;
    }
}


class Queue {
    constructor(capacity) {
        this.items = [];
        this.capacity = capacity;
    }

    print() {
        console.log(this.items);
    }

    enqueue(item) {
        if (!this.isFull()) {
            this.items.unshift(item)
        }
    }

    dequeue() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    isFull() {
        return this.items.length >= this.capacity
    }

    reverse (queue) {
        let stack = new Stack();
        while (!this.isEmpty()) {
            stack.push(this.dequeue());
        }
        while (!stack.isEmpty()) {
            this.enqueue(stack.pop());
        }
    }
}

class ArrayQueue extends Queue {
    constructor(capacity) {
        super(capacity);
        this.items = [];
        this.frontPointer = 0;
    }

    enqueue(item) {
        if (!this.isEmpty()) {
            this.frontPointer += 1;
        }
        super.enqueue(item);
        console.log(this);
    }

    dequeue() {
        let result = this.items[this.frontPointer];
        this.frontPointer -= 1;
        console.log(this);
        return result;
    }
}

// let queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.print();
//
// queue.reverse(queue);
// queue.print();


let arrayQueue = new ArrayQueue(5);
arrayQueue.enqueue(10);
arrayQueue.enqueue(20);
arrayQueue.enqueue(30);
// arrayQueue.enqueue(40);

arrayQueue.print();

let dequeue1 = arrayQueue.dequeue()
console.log(dequeue1);
let dequeue2 = arrayQueue.dequeue()
console.log(dequeue2);
let dequeue3 = arrayQueue.dequeue()
console.log(dequeue3);

arrayQueue.enqueue(300);
let dequeue4 = arrayQueue.dequeue();
console.log(dequeue4);

arrayQueue.print()