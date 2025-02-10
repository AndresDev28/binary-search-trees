import { Tree } from "./tree.js";
import { Node } from "./node.js";

// const myArray = [1, 2, 6, 7, 4, 1, 2, 9, 8, 4, 10, 9, 234];
// const myArray2 = [4, 7, 3, 9, 45, 20, 1, 6, 394, 13, 1];
// const myArray3 = [73, 12, 95, 42, 67, 23, 88, 15, 50, 7,
//   34, 99, 5, 61, 28, 79, 18, 55, 82, 3]
// const arrayTree = new Tree(myArray);
// const arrayTree2 = new Tree(myArray2);
// const arrayTree3 = new Tree(myArray3);

export const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};
// prettyPrint(arrayTree.root)


// // Imprimir el árbol original
// console.log("Árbol original:");
// prettyPrint(arrayTree.root);

// // Insertar por el lado derecho
// console.log("\nInsertar por el lado derecho:");
// arrayTree.insert(300); 
// prettyPrint(arrayTree.root);

// // Insertar por el lado izquierdo
// console.log("\nInsertar por el lado izquierdo:");
// arrayTree.insert(1.5);
// prettyPrint(arrayTree.root);

// // Eliminar un nodo hola
// console.log("\nEliminar el nodo hoja 10:");
// arrayTree.deleteItem(10);
// prettyPrint(arrayTree.root);

// // Eliminar un nodo con un solo hijo
// console.log("\nEliminar un nodo con un solo hijo 9:");
// arrayTree.deleteItem(9);
// prettyPrint(arrayTree.root);

// // Eliminar un nodo con dos hijos
// console.log("\nEliminar un nodo con dos hijos 6:");
// arrayTree.deleteItem(6);
// prettyPrint(arrayTree.root);

// // Eliminar un valor que no esta
// console.log(`\nEliminar un valor que no está:`);
// arrayTree.deleteItem(48);
// prettyPrint(arrayTree.root);

// /** Encontrar un valor con find(value) */
// console.log("\nBuscar un valor que no está (10):");
// let existingNode = arrayTree.find(10);
// console.log(existingNode ? "Valor encontrado: " + existingNode.data : "Valor no encontrado");

// console.log("\nBuscar un valor que si está (7):");
// existingNode = arrayTree.find(7);
// console.log(existingNode ? "Valor encontrado: " + existingNode.data : "Valor no encontrado");

// /** Probando el método levelOrder(callback) */
// console.log("\nRecorrido por niveles");
// arrayTree.levelOrder(node => {
//   console.log(node.data);
// });

// console.log("\nProbando el Error:");
// try {
//   arrayTree.levelOrder(); // Llamamos ál método sin parámetro
// }catch (error) {
//   if (error instanceof Error && error.message === "Callback as a parameter is necesary") {
//     console.log("Prueba exitosa: Se lanzó la excepción esperada");
//   }else {
//     console.error("Prueba fallida: Se lanzó una excepción inesperada", error);
//   }
// }

// /** Inorder Preorder and Postorder test */

// console.log("\nÁrbol original:");
// prettyPrint(arrayTree2.root);

// console.log("\nProbando inOrder:");
// console.log(arrayTree2.inOrder(node => {
//   console.log(node.data);
// }));

// console.log("\nProbando preOrder:");
// console.log(arrayTree2.preOrder(node => {
//   console.log(node.data);
// }));

// console.log("\nProbando postOrder:");
// console.log(arrayTree2.postOrder(node => {
//   console.log(node.data);
// }));

/** Height Test */
// console.log("\nÁrbol original:")
// prettyPrint(arrayTree2.root);
// const nodeHeight = arrayTree2.find(45);
// console.log("\nLa altura de 45 es:", arrayTree2.height(nodeHeight));

/** Depth Test */
// console.log("\nÁrbol original:")
// prettyPrint(arrayTree3.root);
// const nodeDepth = arrayTree3.find(50);
// console.log("\nLa profundidad de 50 es:", arrayTree3.depth(nodeDepth));

/** isBalnced Test */
// Crear un árbol balanceado
// const balancedArray = [1, 2, 3, 4, 5, 6, 7];
// const balancedTree = new Tree(balancedArray);
// console.log("\nEstá balanceado el árbol balanceado?:", balancedTree.isBalanced()); // true

// Crear un árbol no balanceado
// const unbalancedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const unbalancedTree = new Tree(unbalancedArray);
// unbalancedTree.insert(100); // Desbalancear el árbol
// unbalancedTree.insert(200); // Desbalancear el árbol
// // console.log("\nEstá balanceado el árbol desbalanceado?:", unbalancedTree.isBalanced()); // false

// /** rebalance() Test */
// console.log("\nEstá balanceado el árbol:", unbalancedTree.isBalanced());
// console.log("\nÁrbol desbalanceado:");
// prettyPrint(unbalancedTree.root);

// console.log("\nRebalanceando el árbol...");
// unbalancedTree.rebalance();
// prettyPrint(unbalancedTree.root);
// console.log("\nEstá ahora balanceado", unbalancedTree.isBalanced());