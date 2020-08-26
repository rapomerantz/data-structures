let LinkedList = require('./linked_lists');


/**
 * aka dictionaries
 * primary strength is super fast lookups
 * example uses:
 *      spellcheckers
 *      dictionaries
 *      compilers
 *      code editors
 *
 * in Java -> HashMap
 * in JS -> Object
 * in Python/C# -> Dictionary
 *
 * Store key->value pairs
 *
 * 'hash function' sits between request & object, setting/returning address in the hash table
 *      A hash function is DETERMINISTIC
 *          this means that every time we give it the same input, it will return the same value
 *
 *  Hash table has 3 elements
 *      Data
 *          the values associated to the keys
 *      Hash function
 *          maps data of arbitrary size to a calculated index
*       Storage buckets
 *          the location that stores values to be accessed;
 *
 *
 *  Operations: ALL IN CONSTANT TIME - O(1)
 *      Insert
 *
 *      Lookup
 *
 *      Delete
 *
 *
 *  containsKey: O(1)
 *  ContainsValue : O(n)
 *
 **/

//use a JS object to find the first non-repeated character in a string
function findFirstNonRepeatedCharacter(string) {
    const hashMap = {};
    let result = 0;
    let characters = string.split('');
    characters.forEach((character) => {
        if (character in hashMap) {
            hashMap[character] += 1;
        } else {
            hashMap[character] = 1;
        }
    });
    for (let i = 0; i < characters.length; i ++) {
        let key = characters[i];
        if (key !== ' ' && hashMap[key] === 1) {
            result = key;
            break;
        }
    }

    return result;
}
// console.log(findFirstNonRepeatedCharacter('taco meat'));

/**
 * Hash functions
 * Map a key to an index holding the required data
 * If bucket is empty, put the data there
 * If bucket is full, return the data
 *
 * Also also handles converting the key to a numerical index that is mathmatically related to the key
 *      For key of type number, uses % operator to find a value that will fit in memory
 *      For key of type string, uses encoding followed by % operator
 *
 * Collisions
 *
 * Chaining
 */
//
// function exampleHashFunction (key, max) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//         hash = (hash << 5) + hash + key.charCodeAt(i);
//         hash = hash & hash;
//         hash = Math.abs(hash);
//     }
//     return hash % max;
// }

// console.log(exampleHashFunction('abcedef', 100));

/**
 * COLLISIONS:
 * When a hash table runs into a duplicate key it has two options:
 *      1) Chaining:
 *          Keys are kept in a linked list - on collision, simply add a new link list node
 *          Linked lists can grow or shrink automatically
 *
 *      2) Open Addressing
 *          Find a different slot to store the second value
 *          Limitation is that tables can run out of space
 *          A few different open addressing algorithms:
 *              Linear probing -> (hash(key) + i) % max
 *                  Issue w/ clustering which makes future probings slower
 *
 *              Quadratic probing -> (hash(key) + i^2) % max
 *                  Reduces clustering by spreading keys out further
 *                  Big jumps have their own problem: you can end up in an infinite loop looking for a key
 *
 *              Double hashing -> (hash1 + i * hash2) % table_size
 *                  independent hash function
 *
 */

class Entry {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class HashTable {
    constructor(size) {
        this.size = size;
        this.entries = [];
        this.init();
    }

    init() {
        for (let i = 0; i < this.size; i ++) {
            this.entries.push(new LinkedList())
        }
    }

    print() {
        console.log(this.entries);
    }

    //put (k, v)
    put(key, value) {
        let index = this.hashFunction(key, this.size);
        let bucket = this.entries[index];
        for (let i = 0; i < bucket.length; i ++) {
            let entry = bucket[i];
            if (entry.key === key) {
                entry.value = value;
                return;
            }
        }

        bucket.addLast(new Entry(key, value));
    }

    //get(k): v
    get(key) {
        let result = null;
        let index = this.hashFunction(key, this.size);
        let bucket = this.entries[index];
        let node = bucket.findNodeByKey(key)

        return result;
    }

    //remove (k)

    hashFunction (key, max) {
        let hash = 0;
        if (isNaN(key)) {
            for (let i = 0; i < key.length; i++) {
                hash = (hash << 5) + hash + key.charCodeAt(i);
                hash = hash & hash;
                hash = Math.abs(hash);
            }
        } else {
            hash = key;
        }
        return hash % max;
    }
}

const hashTable = new HashTable(5);
hashTable.put(1, 'taco');
hashTable.put(2, 'burrito');
hashTable.put(3, 'tamale');
hashTable.put(4, 'tostada');
hashTable.put(55512341, 'pozole');

hashTable.get(4);

// hashTable.print();