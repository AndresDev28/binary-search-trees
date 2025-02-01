# Binary Search Tree (BST) Project
This project is an implementation of a Balanced Binary Search Tree (BST) in JavaScript. It includes a variety of operations such as insertion, deletion, traversal, balancing, and more. The goal is to demonstrate how BSTs work and how to maintain their balance for efficient operations.

## Features
- **`Node` Class**: Represents a node in the BST with data, left, and right attributes.

- **`Tree` Class**: Implements the BST with methods for building, inserting, deleting, and traversing the tree.

- **Balanced BST**: The tree is always kept balanced after insertions and deletions.

- **Traversal Methods**:

  - **Level-Order (BFS)**: Traverses the tree level by level.

  - **In-Order, Pre-Order, Post-Order (DFS)**: Depth-first traversal methods.

- **Utility Functions**:

  - **find(value)**: Finds and returns a node with the given value.

  - **height(node)**: Returns the height of a node.

  - **depth(node)**: Returns the depth of a node.

  - **isBalanced()**: Checks if the tree is balanced.

  - **rebalance()**: Rebalances the tree if it is unbalanced.

- **Pretty Print**: A helper function to visualize the tree structure in the console.

## How to Use

1. **Initialize the Tree**:

```javascript
const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);
```
2. **Insert and Delete Nodes**:

```javascript
tree.insert(10);
tree.deleteItem(5);
```
3. **Traverse the Tree**:

```javascript
console.log("In-Order Traversal:");
tree.inOrder((node) => console.log(node.data));

console.log("Level-Order Traversal:");
tree.levelOrder((node) => console.log(node.data));
```
4. **Check Balance and Rebalance**:

```javascript
console.log("Is Balanced:", tree.isBalanced());
tree.rebalance();
console.log("Is Balanced After Rebalance:", tree.isBalanced());
```

5. **Visualize the Tree**:

``prettyPrint(tree.root);``

# Example Driver Script

- **A driver script is included to demonstrate the functionality**:

  - **Creates a BST from an array of random numbers**.

  - **Confirms the tree is balanced**.

  - **Prints elements in level, pre, post, and in order**.

  - **Unbalances the tree by adding large numbers**.

  - **Confirms the tree is unbalanced**.

  - **Rebalances the tree and confirms balance**.

  - **Prints elements again**.

```javascript
  // Example driver script
const randomArray = generateRandomArray(15); // Generates an array of 15 random numbers < 100
const tree = new Tree(randomArray);

console.log("Is Balanced:", tree.isBalanced());

console.log("Level-Order Traversal:");
tree.levelOrder((node) => console.log(node.data));

console.log("Pre-Order Traversal:");
tree.preOrder((node) => console.log(node.data));

console.log("Post-Order Traversal:");
tree.postOrder((node) => console.log(node.data));

console.log("In-Order Traversal:");
tree.inOrder((node) => console.log(node.data));

// Unbalance the tree
tree.insert(101);
tree.insert(102);
tree.insert(103);

console.log("Is Balanced After Adding Large Numbers:", tree.isBalanced());

// Rebalance the tree
tree.rebalance();

console.log("Is Balanced After Rebalance:", tree.isBalanced());

console.log("Level-Order Traversal After Rebalance:");
tree.levelOrder((node) => console.log(node.data));
```
# Installation

1. **Clone the repository**:
```bash
git clone https://github.com/your-username/binary-search-tree-project.git
```
2. **Navigate to the project directory**:
```bash
cd binary-search-tree-project
```

3. **Run the script**:
```bash
node script.js
```

# Dependencies

- **Node.js** (for running the script).

# Acknowledgments

- Inspire by **The Odin Project's** FullStack curriculum.
- Special thanks to the open-source community for providing resources and tools.
