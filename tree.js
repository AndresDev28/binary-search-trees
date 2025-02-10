// Import Node class
import { Node } from "./node.js";

export class Tree {
  constructor(array) {
    let processedArray = this.processArray(array);

    this.root = this.buildTree(processedArray);
  }

  // Method to sort the array and eliminate duplicates
  processArray(array) {
    if (!array || array.length === 0) {
      return [];
    }
    // Sort the array
    let sortedArray = [...array].sort((a, b) => a - b); // Copio el array con el spread operator y luego lo ordeno de forma ascendente
    // Eliminate duplicates
    let uniqueArray = [sortedArray[0]]; // Initialize with first element

    for (let i = 1; i < sortedArray.length; i++) {
      if (sortedArray[i] !== sortedArray[i - 1]) {
        uniqueArray.push(sortedArray[i]);
      }
    }
    return uniqueArray;
  }


  buildTree(array) {
    // Base case (Empty array)
    if (!array || array.length === 0) {
      return null;
    }

    // Calculo del punto medio
    const midIndex = Math.floor(array.length / 2) // To be sure to get an integre index

    // Create the node whit the root index value
    const rootNode = new Node(array[midIndex]);

    // Call recursivly buildTree to build left and right childrens
    rootNode.left = this.buildTree(array.slice(0, midIndex)); // Left half
    rootNode.right = this.buildTree(array.slice(midIndex + 1)) // Rigth half

    return rootNode;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    if (this.root !== null) {
      let currentNode = this.root;
      while(true) {
        if (value < currentNode.data) {
          if (currentNode.left === null) {
            currentNode.left = new Node(value); // Asignamos el nuevo nodo al atributo 'left'del nodo actual
            return; // Salimos del bucle
          }
          currentNode = currentNode.left; // Movemos el nodo actual al izquierdo
        } else if (value > currentNode.data) { // Caso si value es mayor y se mueve hacia la derecha
          if (currentNode.right === null) {
            currentNode.right = new Node(value);
            return;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  deleteItem(value) {
    if (!this.root) { // Árbol vacío
      return;
    }
    // Recorrer el árbol
    let currentNode = this.root;
    let parentNode = null; // Para saber cual es el padre del nodo a eliminar

    while (currentNode !== null) {
      // Comparar currentNode.data con value
      if (value < currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      }else if (value > currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }else {// value === currentNode.data
        // Aquí es donde entra la lógica de eliminación con el switch
        const childCount = (currentNode.left ? 1 : 0) + (currentNode.right ? 1 : 0);
        
        switch(childCount) {
          case 0: // Nodo hoja
            if (parentNode === null) { // El nodo es la raiz
              this.root = null;
            }else if (parentNode.left === currentNode) {
              parentNode.left = null;
            }else {
              parentNode.right = null;
            }
            this.size--;
            return true;

          case 1: // Nodo con un solo hijo
            const childNode = currentNode.left || currentNode.right; // Obtenemos el hijo del nodo a eliminar
            if (parentNode === null) { // El nodo a eliminar es la raíz
              this.root = childNode; // La raíz es ahora el hijo del nodo eliminado
            }else if (parentNode.left === currentNode) { // El nodo a eliminar es el hijo izquierdo del padre
              parentNode.left = childNode;
            }else { // El nodo a eliminar es el hijo derecho del padre
              parentNode.right = childNode; // El hijo derecho del padre ahora es el hijo del nodo eliminado
            }
            this.size--;
            return true;

          case 2: // Nodo con dos hijos
            function findInorderSuccesor(node) {
              // 1. Ir al subárbol derecho
              let current = node.right;
              // 2. Encontrar el nodo más a la izquierda
              while(current.left !== null) {
                current = current.left;
              }
              return current;
            }

            // Encontrar el sucesor inorder
            const successor = findInorderSuccesor(currentNode);
            // Copiar el valor del sucesor inorder al nodo acutal
            currentNode.data = successor.data;

            // Eliminarl el sucesor inorder (que ahora esta en la posicion de currentNode)
            if (successor === currentNode.right) {
              currentNode.right = successor.right;
            }else {
              let successorParent = currentNode.right;
              while (successorParent.left !== successor) {
                successorParent = successorParent.left;
              }
              successorParent.left = successor.right;
            }
            this.size--;
            return true;
        }
      }
    }

    console.log(`Error: Valor ${value} no encontrado`);
    return false;
  }

  find(value) {
    // Árbol vacío
    if (!this.root) {
      return null;
    }

    // Recorrer el árbol
    let currentNode = this.root;

    while (currentNode !== null) {
      if (value < currentNode.data) {
        currentNode = currentNode.left;
      }else if (value > currentNode.data) {
        currentNode = currentNode.right;
      }else {
        return currentNode;
      }
    }
    return null; // El valor no se encuentra
  }

  levelOrder(callback) {
    if (!callback) {
      throw new Error ("Callback as a parameter is necesary");
    }

    let queue = [this.root];

    while (queue.length > 0 ) {
      let dequeueNode = queue.shift();

      callback(dequeueNode); // Llamamos la función callback con el nodo desencolado

      if (dequeueNode.left) { // SI el nodo tiene hijo izquierdo
        queue.push(dequeueNode.left); // Lo encolamos
      }
      if (dequeueNode.right) {
        queue.push(dequeueNode.right);
      }
    }
  }

  inOrder(callback) { // Left, Root, Right
    if (!callback) {
      throw new Error ("Callback is required");
    }
    
    function traverseInOrder(node) {
      if (!node) return;

      traverseInOrder(node.left, callback) // Recorremos el subárbol izquierdo
      callback(node);
      traverseInOrder(node.right, callback) // Recorremos el subárbol derecho
    }

    traverseInOrder(this.root); // Llamar a la función interna con el nodo raíz
  }

  preOrder(callback) { // Root, Left, Right
    if (!callback) {
      throw new Error ("Callback is required");
    }

    function traversePreOrder(node){
      if (!node) return;

      callback(node);
      traversePreOrder(node.left, callback);
      traversePreOrder(node.right, callback);
    }

    traversePreOrder(this.root);
  }

  postOrder(callback) { // Left, Right, Root
    if (!callback) {
      throw new Error ("Callback is required");
    }

    function traversePostOrder(node) {
      if (!node) return;

      traversePostOrder(node.left, callback);
      traversePostOrder(node.right, callback);
      callback(node);
    }
    traversePostOrder(this.root);
  }

  height(node) {
    if (!node) return 0; // Caso base, la altura del nodo = 0

    const leftHeight = this.height(node.left); // Realizamos la recursividad por el subarbol izquierdo para calcular su altura
    const rightHeight = this.height(node.right); // Igual que leftHeight pero por el lado derecho

    return Math.max(leftHeight, rightHeight) + 1; // Retornar el máximo de las dos alturas, más 1
  }

  depth(targetNode) {
    // Primero verificamos si el nodo del árbol existe
    if (!this.root) return -1; 

    // Inicializamos una cola (queue) para realizar BFS.
    // Cada elemento de la cola será un objeto con dos propiedades: 'node' y 'level'
    let queue = [];
    // Empezamos agregando la raíz con nivel 0
    queue.push({node: this.root, level: 0});

    // Continuamos el recorrido mientras la cola no esté vacía
    while (queue.length > 0) {
      // Extraemos el primer elemento de la cola
      let currentElement = queue.shift();

      // Obtenemos el nodo actual y su nivel (profundidad)
      let currentNode = currentElement.node;
      let currentLevel = currentElement.level;

      // Comparamos el nodo actual con targetNode
      if (currentNode === targetNode) {
        // Si son iguales, retornamos el nivel (profundidad) actual
        return currentLevel;
      }

      // Si el nodo actual tiene hijo izquierdo, lo agregamos a la cola
      if (currentNode.left) {
        queue.push({node: currentNode.left, level: currentLevel + 1});
      }

      if (currentNode.right) {
        queue.push({node: currentNode.right, level: currentLevel + 1});
      }
    }

    // Si terminamos el recorrido y no encontramos el nodo, retornamos -1
    return -1;
  }

  isBalanced() {

    // Función arrow para que "this" se herede del contexto del método isBalanced.
    const isBalancedHelper = (node) => {
      if (!node) return true; // Un árbol vacío se considera balnceado

      // Calcular las alturas de los subárboles izquierdo y derecho
      const leftHeight = this.height(node.left);
      const rightHeight = this.height(node.right)

      // Comprobar si el subarbol izquierdo y derecho está balanceado y si la diferencia no es mayor a 1.
      return Math.abs(leftHeight - rightHeight) <= 1 && isBalancedHelper(node.left) && isBalancedHelper(node.right);
    };

    return isBalancedHelper(this.root);
  }

  rebalance() {
    // Si el árbol ya está balanceado no se hace nada
    if (this.isBalanced()) {
      console.log("El árbol ya está balanceado");
      return;
    }

    // Si no lo está...
    // Obtener todos los valores en orden mediante inOrder
    let values = [];
    this.inOrder(node => {
      values.push(node.data);
    });

    // Reconstruir el árbol balanceado utilizando buildTree
    this.root = this.buildTree(values);

    // Con este método, primero verificas si el árbol está balanceado. Si no lo está, reconstruyes el árbol a partir de la secuencia ordenada de valores, lo cual garantiza que quede balanceado.
  }
}
