// most common beyond array
// solve drawbacks of arrays

// can grow & shrink automatically
// a series of nodes, each with two values:
// 1) the value
// 2) the address of the next node
// first node is the HEAD, last node is the TAIL
/**
 * Originally memory devoted to an array ahead of runtime could NOT be used again
 * Linked lists soved this issue
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
 *      [aa~head]--[bb]--[cc]--[dd]
 *      [aa] {break link} [bb~head]--[cc]--[dd]
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
        this.head = null;
        this.tail = null;
    }

    print() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    //addLast
    addLast (data) {
        const newNode = new LinkedListNode(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }

            current.next = newNode;
        }
    }

    //addFirst
    addFirst (data) {
        const newNode = new LinkedListNode(data);

        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    indexOf (dataToFind) {
        let index = -1;
        let current = this.head;
        while (current !== null) {
            index += 1;
            if (current.data === dataToFind) {
                console.log('index of ', dataToFind, ' is: ', index);

                return index;
            }
            current = current.next;
        }

        console.log('not in list');

    }

    //deleteFirst
    deleteFirst() {
        console.log('---delete first---')

        const newFirst = this.head.next;
        this.head.next = null;
        this.head = newFirst;
    }

    //deleteLast
    deleteLast() {
        console.log('---delete last---')


    }

    //contains
    //indexOf
}

const list = new LinkedList();
list.addFirst(1);
list.addLast(2);
list.addLast('taco');
list.addLast(4);
list.addLast(5);


list.indexOf('taco');
list.indexOf(99);

list.addFirst('fish');
list.indexOf('fish');
// list.print()

// list.deleteFirst();

// list.print()



// list.addFirst(25);



// const head = new LinkedListNode(12);
// head.next = new LinkedListNode(33);
// head.next.next = new LinkedListNode(55);
//
// let current = head;
// while (current !== null) {
//     console.log(current.data);
//     current = current.next;
// }