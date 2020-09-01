/**
 * NON-LINEAR DATA STRUCTURE
 *
 * Trees are ~super~ common
 * And are popular interview questions
 *
 * Stores elements in a hierarchy
 * Contains nodes (data) & edges (connections
 * Arranged in parent-child relationships
 *
 * Top node is called the ROOT
 * bottom nodes (w/o any children nodes) are LEAF nodes
 *
 * Binary trees have max TWO child nodes
 *
 * Applications:
 *      hierarchical data (org chart)
 *      databases (indexing)
 *      autocomplete
 *      compilers (use syntax trees)
 *      compression algorithms
 *
 * Operations:
 *      Binary search tree
 *          used to quickly look up data (able to remove half of values on each iteration)
 *          any given node is greater than the value of its left child and less than the value of its right child
 *          left < NODE < right
 *
 *          Looking up: O(log n)
 *              continuously narrows down the # of comparisons required
 *
 *          Insert: O(log n)
 *              requires a lookup (O log n)
 *              adding a node is constant time O(n) -> mantains log time
 *
 *          Delete
 *              Same as insert
 *
 *      NOTE: if a tree is not structured properly its speed will decrees
 *
 * EXAMPLE TREE
 *              7
 *             /  \
 *           4     9
 *         /  \   /  \
 *       1    6  8   10
 *
 *
 *  Tree Traversal
 *      Two main ways to traverse a tree:
 *
 *          BREADTH FIRST (a.k.a. level order)
 *              search across the entire level before proceeding
 *              for example tree visit order:
 *                  7, 4, 9, 1, 6, 8, 10
 *
 *                  20, 10, 30, 6, 14, 24, 3, 8, 26
 *
 *          DEPTH FIRST
 *              Three methods:
 *                  pre-order -- first root, then all the way down left, then right & back up:
 *                      ROOT, left, right
 *                          7, 4, 1, 6, 9, 8, 10
 *                          20, 10, 6, 3, 8, 14, 30, 24, 26
 *
 *                  in-order -- all the way down to the left-most child, up to left most child root, then right of that root:
 *                      left, ROOT, right
 *                          1, 4, 6, 7, 8, 9, 10
 *                              THIS WILL ALWAYS COME OUT IN ascending ORDER - to get descending order, do right ROOT left
 *
 *                              3, 6, 8, 10, 14, 20, 24, 26, 30
 *
 *                  post-order -- visits leaf nodes first!!!:
 *                      left, right, ROOT
 *                          1, 6, 4, 8, 10, 10, 7
 *
 *                          3, 8, 6, 14, 10, 26, 24, 30, 20
 *
 **/

class TreeNode {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}


class BinaryTree {

    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode
        } else {
            let current = this.root;
            let keepLooking = true;
            while (true) {
                if (value < current.value) {
                    if (current.leftChild === null) {
                        keepLooking = false;
                        current.leftChild = newNode;
                        break;
                    }

                    current = current.leftChild;
                } else {
                    if (current.rightChild === null) {
                        keepLooking = false;
                        current.rightChild = newNode
                        break;
                    }

                    current = current.rightChild
                }
            }
        }
    }

    find (valueToFind) {
        let valueExists = false;
        let current = this.root;
        while (current !== null) {
            if (valueToFind < current.value) {
                current = current.leftChild;
            } else if (valueToFind > current.value) {
                current = current.rightChild;
            } else {
                valueExists = true;
                break;
            }
        }

        return valueExists;
    }
}

let binaryTree = new BinaryTree();
binaryTree.insert(7);
binaryTree.insert(4);
binaryTree.insert(9);
binaryTree.insert(5);
binaryTree.insert(1);
binaryTree.insert(6);
binaryTree.insert(8);
binaryTree.insert(10);

console.log(binaryTree)

console.log(binaryTree.find(10));
console.log(binaryTree.find(11));
