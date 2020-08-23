// most common beyond array
// solve drawbacks of arrays

// can grow & shrink automatically
// a series of nodes, each with two values:
// 1) the value
// 2) the address of the next node
// head node is the first, last node is the TAIL
/**
 * In many languages memory devoted to an array ahead of runtime could NOT be used again
 * Linked lists solved for this issue
 *
 */

//
/**
 * time complexity of various ops:
 *
 * Lookup:
 *  Value: O(n)
 *  By index: O(n) <-- compared to O(1) for array
 *
 * Insert:
 *  at the end: O(1) <-- compared to O(n) for array
 *  at the beginning: O(1) <-- compared to O(n) for array
 *  in the middle: O(n)
 *      find node: O(n)
 *      Update: O(1)
 *      total: O(n)
 *
 * Delete:
 *  Beginning: O(1)
 *      [aa~first]--[bb]--[cc]--[dd]
 *      [aa] {break link} [bb~first]--[cc]--[dd]
 *  End: O(n) (need to traverse all the way to the end & find second-to-last item)
 *      [aa]--[bb]--[cc]--[dd~end]
 *      [aa]--[bb]--[cc] {break-link} [dd]
 *      [aa]--[bb]--[cc~end]
 *  Middle: O(n)
 *      [aa]--[bb]--[cc]--[dd]--[ee]
 *      [aa]--[bb] {break-link} [cc] {break-link} [dd]--[ee]
 *      [aa]--[bb]--NEW LINK--[dd]--[ee]
 *
 *
 *
 *
 *  Arrays vs. Linked Lists
 *  Every problem has different solutions & every solution has different tradeoffs
 *
 *  SPACE:
 *  (static) Arrays have a fixed size -- they take up less space in memory than linked lists because they don't require
 *  an 'address' of the next array item.
 *  SO -> use an array when you know the number of items you want to store
 *
 *  PERFORMANCE:
 *  Lookup          Array       Linked List
 *      By Index    O(1)        O(n)
 *      By Value    O(n)        O(n)
 *
 *  Insert
 *   Beginning/End   O(n)       O(1)
 *      Middle      O(n)        O(n)
 *
 *  Delete:
 *      Beginning   O(n)        O(1)
 *      Middle      O(n)        O(n)
 *      End         O(n)        O(n)
 *
 *
 * ---------------------------------------
 * Singly vs. Doubly Link list
 *  SINGLY is as described above -> each node has a reference to it's next node [a]->[b]
 *  DOUBLY has a reference to its previous node as well [a]<->[b]
 *  CIRCULAR Linked List has a referenc to the first node in the last node
 *
 *  Doubly list deletes from the end at O(1), not O(n) because it doesn't have to traverse the entire array
 *
 *
 *
 *
 */


class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this._size = 0;
    }

    print() {
        let current = this.first;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    isEmpty() {
        return this.first === null;
    }

    //addLast
    addLast(data) {
        const newNode = new LinkedListNode(data);
        if (this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this._size++;
    }

    //addFirst
    addFirst(data) {
        const newNode = new LinkedListNode(data);

        if (this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }

        this._size++;
    }

    indexOf(dataToFind) {
        let index = 0;
        let current = this.first;
        while (current !== null) {
            if (current.data === dataToFind) {
                return index;
            }
            current = current.next;
            index += 1;
        }

        return -1;
    }

    contains(dataToFind) {
        return this.indexOf(dataToFind) !== -1;
    }

    deleteFirst() {
        console.log('---delete first---')
        if (this.isEmpty()) {
            throw new Error('Empty list');
        }

        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        } else {
            const second = this.first.next;
            this.first.next = null;
            this.first = second;
        }

        this._size--;
    }

    //O(n)
    deleteLast() {
        if (this.isEmpty()) {
            throw new Error('Empty list');
        }
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
            this._size = 0;

            return;
        }

        let previous = this.getPrevious(this.last);
        this.last = previous;
        this.last.next = null;

        this._size--;
    }

    //O(n)
    getPrevious(node) {
        let current = this.first;
        while (current !== null) {
            if (current.next === node) {
                return current;
            }
            current = current.next;
        }

        return null;
    }

    //O(1)
    get size() {
        return this._size;
    }

    toArray() {
        let array = [];
        let current = this.first;
        while (current !== null) {
            array.push(current.data);
            current = current.next;
        }

        return array;
    }

    reverse() {
        //[10 -> 20 -> 30 -> 40]
        // p     c      n
        //       p      c     n
        //              p     c      n
        //                    p     c      n
        if (!this.isEmpty()) {
            let previous = this.first;
            let current = this.first.next;

            while (current !== null) {
                let next = current.next;
                current.next = previous;
                previous = current;
                current = next;
            }

            this.last = this.first;
            this.last.next = null;
            this.first = previous;
        }
    }

    getKthFromTheEnd(k = 3) {
        if (this.isEmpty()) {
            throw new Error('List is empty')
        }
        if (k < 0 || k > this.size) {
            throw new Error('Input must be greater than 0 & shorter than list')
        }

        let firstPointer = this.first;
        let secondPointer = this.first;
        let distance = 0;
        while (distance < k) {
            firstPointer = firstPointer.next;
            distance ++;
        }
        while (firstPointer.next !== null) {
            secondPointer = secondPointer.next;
            firstPointer = firstPointer.next;
        }

        return secondPointer;
    }
}

const list = new LinkedList();
// list.addLast(10);
// list.addLast(20);
// list.addLast(30);
// list.addLast(40);
// list.addLast(50);

list.print();

console.log('-------')

console.log(list.getKthFromTheEnd(3));
console.log(list.getKthFromTheEnd(2));
console.log(list.getKthFromTheEnd(1));
console.log(list.getKthFromTheEnd(0));
console.log(list.getKthFromTheEnd(-1));

// console.log(list.getKthFromTheEnd(40));
// console.log(list.getKthFromTheEnd(-1));

