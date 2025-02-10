/** 
 * 1. Crear un Árbol con Números Aleatorios:
    - Crear una función que genere un array de números aleatorios menores que 100.
    - Crear una instancia de la clase Tree utilizando el array de números aleatorios

 * 2. Comprobar el Balanceo Inicial:
    - Llamar al método isBalanced() para verificar que el árbol inicial está balanceado.
    - Mostrar el resultado en la consola.

 * 3. Imprimir los Recorridos:
    - Llamar a los métodos levelOrder(), preOrder(), postOrder() e inOrder() para recorrer el árbol y mostrar los valores de los nodos en cada recorrido.

 * 4. Desbalancear el árbol:
    - Insertar varios números mayores que 100 en el árbol para desbalancearlo

 * 5. Comprobar el desbalanceo:
    - Llamar el método isBalanced() para comprobar que el árbol ya no esta balanceado
    - Mostrar el resultado por consola.

 * 6. Rebalancear el árbol:
    - Llamar al método rebalance() para rebalancear el árbol.

 * 7. Comprobar el balanceo final:
    - Llamar al método isBalanced() para comprobar que el árbol está balanceado después del rebalanceo.

 * 8. Imprimir recorridos finales:
    - Llamar a los métodos levelOrder(), preOrder(), postOrder() e inOrder() para recorrer el árbol rebalanceado y mostrar los valores de los nodos en cada recorrido.
 */

import { Tree } from "./tree.js";
import { Node } from "./node.js";
import { prettyPrint } from "./main.js";

/** 1. Crear un árbol con números aleatorios */ 

const numbers = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
console.log("Array de números aleatorios:\n", numbers);

// Instancia de la clase Tree para el array numbers
const myTree = new Tree(numbers);

/** 2. Comprobar el balanceo inicial: */
console.log("\nEstá balanceado myTree:", myTree.isBalanced());
prettyPrint(myTree.root);

/** 3. Imprimir los recorridos */
// levelOrder()
console.log("\nRecorrido por niveles:");
console.log("\nlevelOrder():");
myTree.levelOrder(node => {
  console.log(node.data);
});

// preOrder()
console.log("\npreOrder():");
myTree.preOrder(node => {
  console.log(node.data);
});

// postOrder()
console.log("\npostOrder():");
myTree.postOrder(node => {
  console.log(node.data);
});

// inOrder()
console.log("\ninOrder():");
myTree.inOrder(node => {
  console.log(node.data);
});

/** 4. Desbalancear el árbol */

myTree.insert(120);
myTree.insert(101);
myTree.insert(148);
myTree.insert(246);
myTree.insert(186);

/** 5. Comprobar el Desbalanceo: */
console.log("\nEstá balanceado ahora?", myTree.isBalanced())
prettyPrint(myTree.root);

/** 6. Rebalancear el Árbol: */
console.log("\nRebalanceamos el árbol nuevamente:")
myTree.rebalance();

/** 7. Comprobar balanceo final */
console.log("\nY ahora, está balanceado?", myTree.isBalanced())
prettyPrint(myTree.root);

/** 8. Imprimir los recorridos finales */
console.log("\nRecorremos por niveles nuevamente:");
// levelOrder()
console.log("\nlevelOrder():");
myTree.levelOrder(node => {
  console.log(node.data);
});

// preOrder()
console.log("\npreOrder():");
myTree.preOrder(node => {
  console.log(node.data);
});

// postOrder()
console.log("\npostOrder():");
myTree.postOrder(node => {
  console.log(node.data);
});

// inOrder()
console.log("\ninOrder():");
myTree.inOrder(node => {
  console.log(node.data);
});