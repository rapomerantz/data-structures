// store a list of items in sequence
// simplest data structure

// super fast to look up items in an array by address (i.e. key)
// this would be complexity O(1)

// drawbacks
//      some languages require you to know the number of items in an array & you can't change it (static)
//      if you guess wrong you need to copy into new array
//          (which would be an O(n) operation because cost increases with a larger array)
//      deleting is also O(n) operation because if you were to delete the first item in the array, every single other
//      item would need to be shifted

// When these issues are relevant a link list is a better option


//custom array prototype, treating arrays as if they're static
// useful to see how memory handles arrays
// ...obviously not useful otherwise
class CustomArrayClass {

    constructor(initialLength) {
        this.items = [];
        this.items.length = initialLength;

        this.count = 0;
    }

    //o(n)
    print () {
        for (let i = 0; i <= this.count - 1; i ++) {
            console.log(this.items[i]);
        }
    }

    //O(n)
    insert (newItem) {
        //if the array is full, resize it
        if (this.items.length === this.count) {
            let newItems = []
            newItems.length = this.count * 2;
            for (let i = 0; i < this.count; i++) {
                newItem[i] = this.items[i];
            }
            this.items = newItems
        }
        //add new item at the end of the current array
        this.items[this.count] = newItem;
        this.count ++;
    }

    // O(n)
    removeAt (index) {
        //validate the index (make sure it's in the right range)
        if (index < 0 || index >= this.count) {
            throw new Error('Illegal argument');
        }
        //shift the items to the left to fill the hole
        for (let i = index; i < this.count; i ++) {
            this.items[i] = this.items[i + 1];
        }
        //decrease array length
        this.count -= 1;
    }

    //complexity O(n)
    indexOf (itemToFind) {
        let result = -1;
        for (let i = 0; i < this.count; i ++) {
            if (this.items[i] === itemToFind) {
                result = i;
            }
        }

        return result
    }

    getMax() {
        let max = null;
        this.items.forEach((item) => {
            if (item > max) {
                max = item
            }
        })

        return max;
    }
}

let numbers = new CustomArrayClass(5);
numbers.insert(10);
numbers.insert(20);
numbers.insert(30);
numbers.insert(40);
numbers.insert(50);
// numbers.removeAt(4);
console.log(numbers.indexOf(30));
console.log(numbers.getMax());
// numbers.print();

