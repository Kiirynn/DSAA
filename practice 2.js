// PRACTICE

// Remember to console.log() to print 

// STACK ----------------------------------------------------------
class Stack{
    constructor(){
        this.items = {}
        this.size = 0
    }

    push(item){
        this.size++
      this.items[this.size] = item
    
    }

    pop(){
        let removed = this.items[this.size]
        delete this.items[this.size]
        this.size--
        return removed 
       

    }

    peek(){
      return  this.items.length -1
    }

    getSize(){
       return this.size
    }
}

let stack = new Stack();

console.log(stack)


// QUEUE ----------------------------------------------------------------
class Queue{
    constructor(){
        this.items = {}
        this.head = 0
        this.tail = 0
    }


    enqueue(item){
       this.items[this.tail] = item
       this.tail++

    }

    dequeue(){
      let removed = this.items[this.head]
      delete this.items[this.head]
      this.head++
      return removed
    }


}

    let queue = new Queue();

    console.log(queue)

// LINKED LIST ----------------------------------------------------------

// CHECK WORK <---------------------------- april 17 th

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}


class LinkedList{
    constructor(){
       this.head = null
       this.tail = null
       this.size = 0
    }


   insertFirst(data){
    let newNode = new Node(data)
       if(this.size === 0){
        this.head = newNode
        this.tail = newNode
       } else{
           newNode.next = this.head
           this.head = newNode
           this.size++  
       }
   }

   insertLast(data){
     let newNode = new Node(data)
     if(this.size === 0){
        this.head = newNode
        this.tail = newNode
     } else{
        let temp = this.tail
        this.tail = newNode
        temp.next = this.tail 
     }
    this.size++
   }

   insertAt(data, index){
     let newNode = new Node(data)
     if(index < 0 || index > this.size){
        return null
     } if(index < this.size){
         return this.insertFirst(data)
       } if(index === this.size){
           return this.insertLast(data)
       } else{
        let current = this.head
        let prev = null
        let counter = 0

        while(counter < index){
            prev = current
            current = current.next
            counter++
        }
        current = newNode
        prev.next = newNode
        
       }
       this.size++
   }


   removeFirst(){
    let dataVar = this.head.data
        if(this.size === 0){
            return null
        } if(this.size === 1){
            this.head = null
            this.tail = null
        } else{        
            this.head = this.head.next 
        }
     this.size--
     return dataVar
   }

   removeLast(){
    let dataVar = this.tail.data

    if(this.size === 0){
        return null
    } if(this.size === 1){
        this.head = null
        this.tail = null
    } else{
        let current = this.head
        while(current.next.next != null){
            current = current.next
        }
        current.next = this.tail
        this.tail = null
        current = this.tail
    }
      
     this.size--
     return dataVar
   }

   removeAt(index){
    if(index < 0 || index > this.size){
        return null
    } if(index === 0){
        return this.removeFirst()
    } if(index === this.size -1){
        return this.removeLast()
    } else{
        let current = this.head
        let prev = null
        let counter = 0

        while(index < counter){
            prev = current
            current = current.next
            counter++
        }
      current = null
      prev.next = current.next
      this.size--
    }

   return current.data
   }

   printList(){
     let data = ""
     let current = this.head
        while(current != null){
            data += current.data + " "
            current = current.next
        }

        console.log(data)
   }

}


const ll = new LinkedList()

console.log(ll)


// HASH TABLE ----------------------------------------------------------

const hash = (key, size) => {
   let hashedKey = 0
    
   for(let i = 0; i < key.length; i++){
      hashedKey += key.charCodeAt(i)
   }
    return hashedKey % size
}


class hashTable{
    constructor(){
        this.size = 20
        this.buckets = Array(this.size)

        for(let i = 0; i < this.buckets.length; i++){
            this.buckets[i] = new Map()
        }
    }
   
  getSize(){
      return this.size
  }  

  insert(key, data){
    let index = hash(key, this.size)
    this.buckets[index].set(key, data)
    this.size++
  }  

  remove(key){
    let index = hash(key, this.size)
    let removed = this.buckets[index].get(key)
    this.buckets[index].delete(key)
    return removed
  }  

  search(key){
    let index = hash(key, this.size)
    this.buckets[index].get(key)
  }

}

let ht = new hashTable()


console.log()

// BINARY TREE ----------------------------------------------------------

class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(data){
        this.size = 1
        this.root = new Node(data)
    }


    getSize(){
       return this.size
    }

    insert(data){
       let newNode = new Node(data)
       this.size++

       const searchTree = node => {
             if(data < node.data){
                  if(!node.left){
                    node.left = newNode
                  } else{
                    searchTree(node.left)
                  }
             }

             if(data > node.data){
                if(!node.right){
                  node.right = newNode
                } else{
                  searchTree(node.right)
                }
           }
       }
       searchTree(this.root)
    }

    max(){
       let current = this.root

       while(current.left){
        current = current.left
       }

       return current.data
    }

    min(){
        let current = this.root

        while(current.right){
         current = current.right
        }
 
        return current.data

    }

    contains(){
        let current = this.root
    while(current){
        if(current === current.data) return true
        if(current < current.data) current = current.left
        else{
            current = current.right
        }
      }
    
       return false
    }

    // depth first search

    // in order
    // left, root, right

    dfsInOrder(){
        let result = []
       
        const traverse = node => {
            if(node.left){
               traverse(node.left)
            }
            result.push(node.data)
         
            if(node.right){
            traverse(node.right)
           }
        }
     traverse(this.root)
     return result
    }

        // pre
    // root, left, right

    dfsPreOrder(){

        let result = []
       
        const traverse = node => {

            result.push(node.data)
            
            if(node.left){
               traverse(node.left)
            }
          
           
            if(node.right){
            traverse(node.right)
           }
        }
     traverse(this.root)
     return result
        
    }

        // post
    // left, right, root

    dfsPostOrder(){

        let result = []
       
        const traverse = node => {

            if(node.left){
               traverse(node.left)
            }

            if(!node.right){
                traverse(node.right)
               }
           
            result.push(node.data)
          
         
        }
     traverse(this.root)
     return result
        
    }

// bredth first search

    bfs(){
        let queue = []
        let result = []

        queue.push(this.root)

        while(queue.length){
            let current = queue.shift()

            result.push(current)

            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
        }
        return result
    }
}

const bst = new BST(15)

console.log(bst)

// BINARY HEAP iterative ----------------------------------------------------------

class minHeap{
    constructor(){
         this.items = []
         this.size = 0
    }

    // helper methods

    getParentIndex(index){
       return index - 1 / 2 
    }

    getLeftChildIndex(index){
        return index * 2 + 1
    }

    getRightChildIndex(index){
        return index * 2 + 2
    }

    hasParent(index){
        return this.getParentIndex(index) >= 0
    }

    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.size
    }

    hasRightChild(index){
        return this.getRightChildIndex(index) < this.size
    }

    parent(index){
        return this.items[this.getParentIndex(index)] 
    }

    leftChild(index){
        return this.items[this.getLeftChildIndex(index)] 
    }

    rightChild(index){
        return this.items[this.getLeftChildIndex(index)] 
    }

    swap(index1, index2){
      let temp = this.items[index1]
      this.items[index1] = this.items[index2]
      this.items[index2] = temp
    }

    // iterative methods

    insert(data){
     this.items[this.size] = data
     this.size++
     this.heapifyUp()
    }

    heapifyUp(){
      let index = this.items[this.size - 1]
      while(this.hasParent(index) && this.parent(index) > this.leftChild(index)){
            this.swap(this.getParentIndex(index), index)
      }
    }

    removeMin(){
       if(this.size == 0){
          throw new Error("empty heap")
       }
       let data = this.items[0]
       this.items[0] = this.items[this.size -1]
       this.size--
       this.heapifyDown()
       return data
    }

    heapifyDown(){
       let index = 0
       while(this.hasLeftChild(index)){
         let smallerChildIndex = this.getLeftChildIndex(index)
         if(this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index))
             smallerChildIndex = this.getRightChildIndex(index)
         if(this.items[index] < this.items[smallerChildIndex])
            break;
          else{
            this.swap(index, smallerChildIndex)
               index = smallerChildIndex
          }
       }
    }
}
