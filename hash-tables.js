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

console.log(findFirstNonRepeatedCharacter('taco meat'));
