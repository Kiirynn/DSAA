
// // LINKED LIST

// // declare list

//     class linkedList{
//         constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//         }

// // prepend

//     insertFirst(data){
//         let newNode = new Node(data)
//         if(this.size === 0){
//             this.head = newNode
//             this.tail = newNode
//         } else{
//             newNode.next = this.head
//             this.head = newNode
//         }
//         this.size++

//     }

// // append

//     insertLast(data){
//         let newNode = new Node(data)
//         if(this.size === 0 || this.head === null || this.tail === null ){    // you can use any of these
//            this.head = newNode
//            this.tail = newNode
//         } 
//         if(this.size > 0){
//             const temp = this.tail
//             this.tail = newNode
//             temp.next = this.tail;
//         }
//         this.size++

//     }

// // insert at a specific index

//     insertAt(data, index){
      
//       if(index < 0 || index > this.size){
//         return 
//       } 
//       if(this.size === 0){
//           return this.insertFirst(data)
//       } 
//       else if(index === this.size){
//         return this.insertLast(data)
//       } else{
//         let newNode = new Node(data)
//           let current = this.head
//           let prev = null
//           let counter = 0
//           while(counter < index){
//                prev = current
//                current = current.next
//                counter++
//           }
//           newNode.next = current
//           prev.next = newNode
//           this.size++
//       }
//     }

// // remove first node
//     removeFirst(data){
//         let dataVar = this.head.data   // this just saves the header data in a variable
//         if(this.size === 0){
//            return null
//         }
//         if(this.size === 1){
//             this.head = null
//             this.tail = null
//         } 
//         else{
//             this.head = this.head.next
//             this.size--
//             return dataVar

//         }
        
      
       
//     }

//     // remove last node


//     removeLast(){
        
//         let dataVar = this.tail.data
//         if(this.size === 0 || this.head === null || this.tail === null ){   // you can use any of these conditionals
//             return null
//          } 
//          if(this.size === 1){
//            this.head = null
//            this.tail = null
//          } else {
//             let current = this.head
//             while(current.next.next != null){      // this makes it so you can access the second last node
//                 current = current.next

//             } 
//             current.next = null      // see notes
//             this.tail = current
//         }
//          this.size--
//          return dataVar
//     }


// // remove at a specific index

//     removeAt(index){
//         let dataVar = this.head.data
//         if(index < 0 || index > this.size){
//                 return null
//             } 
//             if(this.size === 0){
//                 return this.removeFirst()
//             } 
//             else if(index === this.size -1){
//                 return this.removeLast()
//             }
//             else{
//                 let current = this.head
//                 let counter = 0
//                 let prev = null
//               while(counter < index){
//                     prev = current
//                     current = current.next
//                     counter++
//                 }
//                 prev.next = current.next
                
//                 this.size--
//                 return dataVar
//              } 
//         }



//     // print list 

//      printList(){
//         let data = ""
//         let current = this.head
//         while(current != null){ 
//             data = data + current.data + " "
//             current = current.next
//     }
//          console.log(data)
//     }
 


// }

// // construct node

// class Node{
//     constructor(data){
//        this.data = data
//        this.next = null
     
//     }
// }

// const ll = new linkedList();

// ll.insertFirst(10)
// ll.insertLast(20)
// ll.insertLast(30)
// ll.insertAt(50, 2)
// ll.insertLast(68)

// ll.removeLast()

// ll.printList()

// LINKED LIST PRACTICE



// STACK -----------------------------------------------------


//  class Stack {
//     constructor(){
//         this.items = []   // (aka this.storage)
//         // this.size =  0
        
//     }

//    push(item){
//       this.items.push(item) 
//     //    or  
//     //    this.size++ 
//     //    this.items[this.size] = item
      
  
//    }


//    pop(){
//        return this.items.pop()
//     //    or 
//     //    let removed = this.items[this.size]
//     //    delete this.items[this.size]
//     //    this.size--
//     //    return removed
//    }

//    peek(){
//     if(this.items.length === 0){
//         return null
//     } else{
//         return this.items[this.items.length - 1]
//        }
//     //   or
//     //   return this.items[this.size -1]
      
//    }

//    getSize(){
//     return this.items.length 
//  }

//    isEmpty(){
//       return  this.getSize() === 0
//    }


// }

// let stack = new Stack();


// stack.push("honda")
// stack.push("toyota")
// stack.push("ferrari")
// stack.push("chevy")



// console.log(stack.getSize())

// // STACK PRACTICE


// // QUEUE -----------------------------------------------------


// class Queue{
//     constructor(){
//        this.items = []
//     //    or
//     //    this.head = 0
//     //    this.tail = 0
//     //    this.size = 0
       
//     }

//     //add items 
//     enqueue(item){
//        this.items.push(item)
//     //    or 
//     //    this.items[this.tail] = item
//     //    this.tail++
//     }

//     // remove items
//     dequeue(){
//         return this.items.shift()    // shift takes the first item off the array and returns it
//         // or
//         // let removed = this.items[this.head]
//         // delete this.items[this.head]
//         // this.head++
//         // return removed
//     }

//     // look at the top item
//     peek(){
//         if(this.items.length === 0){    
//             return null
//         }
//         return this.items[0]
//     }

//   // get the size
//     getSize(){
//    return this.items.length
//     }
 
//    // check if its empty
//     isEmpty(){
//          return this.getSize() === 0    }

// }

// let queue = new Queue();

// queue.enqueue("fendi")
// queue.enqueue("gucci")
// queue.enqueue("louie")



// console.log(queue.getSize())

// // QUEUE PRACTICE



// // HASH TABLES -----------------------------------------------------

// // hash function 

// const hash = (key, size) => {
//     let hashedKey = 0
//     for (let i = 0; i < key.length; i++) {
//       hashedKey += key.charCodeAt(i)
//     }
//     return hashedKey % size
//   }

//   // declare the table
  
//   class HashTable {
//     constructor() {
//       this.size = 20
//       this.buckets = Array(this.size) 
  
//       // populate each bucket with a Map()
//       for (let i = 0; this.buckets.length; i++) {
//         this.buckets[i] = new Map()
//       }
//     }

//     // insert new data method
  
//     insert(key, value) {
//       let idx = hash(key, this.size) 
//       this.buckets[idx].set(key, value)
//     }

//     //remove data method
  
//     remove(key) {
//       let idx = hash(key, this.size)
//       let deleted = this.buckets[idx].get(key)
//       this.buckets[idx].delete(key)
//       return deleted 
//     }

//     // search table index method
  
//     search(key) {
//       let idx = hash(key, this.size)
//       return this.buckets[idx].get(key)
//     }
//   }

//   // print
  
//   const hashTable = new HashTable()
  
//   hashTable.insert('serena', 'moon')
//   hashTable.insert('amy', 'mercury')
//   hashTable.insert('rei', 'mars')
//   hashTable.insert('lita', 'jupiter')
//   hashTable.insert('mina', 'venus')
//   hashTable.insert('darien', 'tuxedo mask')
  
//   hashTable.search('rei')
//   hashTable.search('lita')
//   hashTable.search('serena')
  
//   hashTable.remove('darien')
//   hashTable.remove('mina')
  
//  // HASH TABLE PRACTICE
  

// BINARY TREE recursive -----------------------------------------------------

class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(data){
         this.root = new Node(data)
         this.size = 1
    }


    size(){
        return this.size
    }


    insert(data){
        this.size++
        let newNode = new Node(data)

        const searchTree = node => {
        // if data is < node.data, go left
            if(data < node.data){

        // if no left child, append new node
            if(!node.left){
                 node.left = newNode
              }
        // if left child, look left again
              else{
              searchTree(node.left)
            }
        }

       // if data > node.data, go right
         else if(data > node.data){
              if(!node.right) {
                node.right = newNode
              }     

              //if right child, look right again
              else{
                searchTree(node.right)
              }
            } 
          }

          searchTree(this.root)
    }



    min(){
        let current = this.root

     // traverse right until no more children
        while(current.left){
            current = current.left
        }
       
        return current.data
    }

    max(){
        let current = this.root

        // traverse right until no more children
           while(current.right){
               current = current.right
           }
          
           return current.data
       }
        
    

    contains(data){
        let current = this.root
        
        while(current){
            if(data === current.data){
                return true
            } if(data < current.data){
               current = current.left
            } else {
                current = current.right
            } 
        }
        return false
    }

  // depth first search - branch by branch


  // left, root, right  
  // 2, 3, 12, 15, 28, 36, 39
  //in order
  dfsInOrder(){
     let result = []
     const traverse = node => {
        //if left child exists, go left again
         if(node.left){
            traverse(node.left)
         }
       // capture root node data
         result.push(node.data)
      // if right child exists, go right again    
         if(node.right){
            traverse(node.right)
         }
     }
     traverse(this.root)
     return result
  }

  // pre-order
  // root, left, right
  // 15, 3, 2, 12, 36, 28, 39
  dfsPreOrder(){
    let result = []
    const traverse = node => {

        // capture root node data
        result.push(node.data)

       //if left child exists, go left again
        if(node.left){
           traverse(node.left)
        }
 
      // if right child exists, go right again    
        if(node.right){
           traverse(node.right)
        }
    }
    traverse(this.root)
    return result
  }


  // post-order
  // left, right, root
  // 2, 12, 3, 28, 39, 36, 15
  dfsPostOrder(){
    let result = []
    const traverse = node => {

      //if left child exists, go left again
           if(node.left){
            traverse(node.left)
         }

      // if right child exists, go right again    
        if(node.right){
            traverse(node.right)
         }

         // capture root node data
        result.push(node.data)
     }

        
    traverse(this.root)
    return result
  }

//   breadth first search - level by level
//   typically use a queue
//   15 ,3, 36, 2, 12, 28, 39
   
    bfs(){
        let result = []
        let queue = []

        queue.push(this.root)
    
    while(queue.length){
        let current = queue.shift()

        result.push(current)

        if(current.left){
            queue.push(current.left)
        } 
        if(current.right){
            queue.push(current.right)

        }


       }    
    return result
    }


    // or for leetcode levelorder (bf)

   levelOrder = function(root) {
        if (!root) {
              return [];
          }
         
          let queue = [];
          let result = [];
      
          queue.push(root);
      
          while(queue.length) {
              let levelSize = queue.length;
              let currentLevel = [];
      
              for (let i = 0; i < levelSize; i++) {
                  let current = queue.shift();
                  currentLevel.push(current.val);
      
                  if(current.left) {
                     queue.push(current.left);
                  }
                  if(current.right) {
                     queue.push(current.right);
                  } 
              }
              result.push(currentLevel);
          }
          return result;
      };
}


const bst = new BST(15) 

bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

// bst.size()
// bst.max()
// bst.min()

// bst.contains(2)
// bst.contains(9)


// // // DFS!!!
// // // in-order: 2, 3, 12, 15, 28, 36, 39
// bst.dfsInOrder()

// // // pre-order: 15, 3, 2, 12, 36, 28, 39
// bst.dfsPreOrder()

// // // post-order: 2, 12, 3, 28, 39, 36, 15
// bst.dfsPostOrder()

// // // BFS!!!
// // // 15, 3, 36, 2, 12, 28, 39
// bst.bfs()


console.log(bst.bfs())


// BINARY HEAP iterative ----------------------------------------------------------

class MinHeap{
    constructor(){
        this.storage = [];
        this.size = 0;
    }

    getLeftChildIndex(index){
        return 2 * index + 1;
    }

    getRightChildIndex(index){
        return 2 * index + 2;
    }
    // check if this rounds down
    getParentIndex(index){
        return Math.floor((index - 1) / 2)
    }

    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.size;
    }

    hasRightChild(index){
        return this.getRightChildIndex(index) < this.size;
    }

    hasParent(index){
        return this.getParentIndex(index) >= 0;
    }

    leftChild(index){
        return this.storage[this.getLeftChildIndex(index)];
    }

    rightChild(index){
        return this.storage[this.getRightChildIndex(index)];
    }

    parent(index){
        return this.storage[this.getParentIndex(index)];
    }

    isFull(){
        return this.size == this.capacity;
    }
    
    swap(index1,index2){
        let temp = this.storage[index1];
        this.storage[index1] = this.storage[index2];
        this.storage[index2] = temp;
    }


    // --------------- effective interative methods

    insert(data){
        this.storage[this.size] = data;
        this.size += 1;
        this.heapifyUp();
    }
    
    heapifyUp(){
         let index = this.size - 1;
         while(this.hasParent(index) && this.parent(index) > this.storage[index]){
            this.swap(this.getParentIndex(index),index);
            index = this.getParentIndex(index);
         }
    }
    
    removeMin(){
        if(this.size == 0)
            throw new Error("Empty Heap");
        let data = this.storage[0];
        this.storage[0] = this.storage[this.size - 1];
        this.size -= 1;
        this.heapifyDown();
        return data;
    }   

    heapifyDown(){
        let index = 0;
        while(this.hasLeftChild(index)){
            let smallerChildIndex = this.getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index))
                smallerChildIndex = this.getRightChildIndex(index);
            if(this.storage[index] < this.storage[smallerChildIndex])
                break;
            else
                this.swap(index,smallerChildIndex);
            index = smallerChildIndex;
        }
    }     
}
