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
}

const list = new LinkedList();
list.addLast(5);
list.addLast(6);
list.addLast(7);
list.addLast(8);
// list.indexOf(9);
// console.log(list.contains(9));

console.log(list.size);

// list.addFirst(1);
// list.addLast(2);
// list.addLast('taco');
// list.addLast(4);
// list.addLast(5);

// list.contains(9);
// list.size()

// list.indexOf('taco');
// list.indexOf(99);
// list.addFirst('fish');
// list.indexOf('fish');

