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
        return this.items[this.size - 1]
        
    }

    getSize(){
        return this.items.length
        
    }

    isEmpty(){
        return this.getSize() === 0
    }
}

const stack = new Stack();

stack.push("poopstain")
stack.push("new gang")
stack.push("mr noodle")

console.log(stack)

// QUEUE ----------------------------------------------------------

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

const queue = new Queue();

queue.enqueue("A")
queue.enqueue("B")
queue.enqueue("C")

console.log(queue)


// LINKED LIST ----------------------------------------------------------

class Node{
    constructor(data){
        this.next = null
        this.data = data
    }
}

class linkedList{
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
       } else {
          newNode.next = this.head
          this.head = newNode
          
          
       }
       this.size++
    }


    insertLast(data){
        let newNode = new Node(data)
        
        if(this.size === 0){
            this.head = newNode
            this.tail = newNode
        } else {
           const temp = this.tail
           this.tail = newNode
           temp.next = this.tail 
        }
        this.size++
    }


    insertAt(data, index){
        let newNode = new Node(data)
        if(index < 0 || index > this.size){
            return null
        } if(this.size === 0 ){
            return this.insertFirst(data)
        }  else if(index === this.size){
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
            newNode.next = current
            prev.next = newNode
            this.size++
        }
       
    }

    removeFirst(){
        let dataVar = this.head.data
        if(this.size === 0){
            return null
        } if(this.size === 1){
            this.head === null
            this.tail === null
        } else {
            this.head = this.head.next
            this.size--
            return dataVar

        }
        

    }

    removeLast(){
        let dataVar = this.tail.data
        if(this.size === 0){
            return null
        } if(this.size === 1){
            this.head === null
            this.tail === null
        } else{
            let current = this.head
            while(current.next.next != null){
                current = current.next
            }
            current.next = null;
            this.tail = current
            
        }
        this.size--
        return dataVar
    }

    removeAt(index){
       if(index < 0 || index > this.size){
        return null
       } if(index === 0){
          return this.removeFirst()
       } else if(index === this.size - 1){
        return this.removeLast()
       } else{
           let current = this.head
           let prev = null
           let counter = 0
           while(counter < index){
                  prev = current
                  current = current.next
                  counter++
           } 
           prev.next = current.next
           this.size--
       }
         
         return current.data
    }

    print(){
        let data = ""
        let current = this.head
        while(current != null){
            data += current.data + " "
            current = current.next
        }
        console.log(data) 
    }

    

}

const ll = new linkedList();

ll.print()



// HASH TABLE ----------------------------------------------------------

const hash = (key, size) => {
    let hashedKey = 0

    for(let i = 0 ; i < key.length; i++){
        hashedKey =+ key.charCodeAt(i)
    }
    return hashedKey % size
}

class HashTable{
    constructor(data){
          this.size = 20
          this.buckets = Array(this.size)

          for(let i = 0; i < this.buckets.length; i++){
               buckets[i] = new Map()
          }

    }

    insert(key, data){
      this.size++
      let index = hash(key, this.size)
      this.buckets[index].set(key, data)


    }

    remove(key){
        let index = hash(key, this.size)
        let removed = this.buckets[index].get(key)
        this.buckets[index].delete(key)
        return removed

    }

    search(key){
        let index = hash(key, this.size)
        return this.buckets[index].get(key)
      
    }
   
}


const hashTable = new HashTable();


console.log(hashTable)

// BINARY TREE ----------------------------------------------------------


class Node{
    constructor(data){
        this.left = null
        this.right = null
        this.data = data
    }
}


class BTS{
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

        if(data < current.data){
         
           if(!node.left){
            current.left = newNode
           }
           else{
            searchTree(node.left)
           }
        }
           else if(data > current.data){
          
           if(!node.right){
            current.right = newNode
           }
           else{
            searchTree(node.right)
           }
        }
    } 
       searchTree(this.root)
      
    }



    min(){
        let current = this.root
        
        while(current.left){
            current = current.left
        }
        return current.data
    }

    max(){
        let current = this.root
      
        while(current.right){
            current = current.right
        }
        return current.data
    }

    contains(){
        let current = this.root

        while(current){
            if(data === current.data)  return true;
            if(data < current.data)  current = current.left
            else{
                current = current.right
            }
        }
        return false
    }


    // Depth First Search

    // in order
    //left , root, right

    bfsInOrder(){
        
        let result = []

        const traverse = node =>{
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
    bfsPreOrder(){
        let result = []

        const traverse = node =>{

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
      // right root left

    bfsPostOrder(){
       
        let result = []

        const traverse = node =>{

            if(node.right){
                traverse(node.right)
             }

             result.push(node.data)
            
             if(node.left){
                traverse(node.left)
             }
                

          
        }


         traverse(this.root)
         return result
    }

    bfs(){
        let result = []
        let queue = []
     
        let current = queue.shift()

        while(queue.length){

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
}

const bst = new BST();





console.log(bst)