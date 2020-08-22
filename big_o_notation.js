console.log('big_o_notation');

//Big O
//Describe the performance of an algrothm -- is it scalable or not?
//Certain operations are more costly depending on the input

// O(1) -- this method runs in 'constant time' (runtime complexity 1)
// Size of input doesn't matter
function log1(numbers) {
    console.log(numbers[0]);
}

//O(n) -- cost algorithm is LINEAR and increases in direct proportion to the input
// 1 million inputs has 1 million operations
// Additional individual operations (extra print statements before or after/extra loops in sequence)
// Are ignored because we still know the relative complexity is linear
function log2(numbers) {
    for(let i = 0; i < numbers.length -1; i ++) {
        console.log(numbers[i]);
    }

    //still O(n) because the runtime is still linear
    for(let i = 0; i < numbers.length -1; i ++) {
        console.log(numbers[i]);
    }
}

// O(n^2)
// 'Quadratic Time'
// Gets slower over time
function log3(numbers) {
    //O(n * n) => O(n^2)
    numbers.forEach((first) => { // O(n)
        numbers.forEach((second) => { //O(n)
            console.log(first + ', ' + second);
        })
    })

    //o(n)
    //combined with above O(n + n^2) => can drop first n when calculating performance
    numbers.forEach((number) => {
        console.log('third: ', 1);
    })
}
//
// let inputArray = [1, 2, 3, 4, 5, 6, 7];
// log3(inputArray);


// O(log n)
// More efficient than an algorithm that runs in linear time
// e.g. binary search which discards half of the array every time it runs.
// 1 million item array can find a number in MAX 19 operations
// ...we'll get there

// O(2^n)
// runs in exponential time
// not scalable at all
// opposite of log growth

// space complexity
// describes the amount of memory space that is required to solve a problem as a function of input
// considered the amount of space that is allocated for each input
// focuses on preserving limited the memory
