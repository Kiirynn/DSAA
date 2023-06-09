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
        return this.items[this.size -1]
    }

    getSize(){
        return this.items.length
    }

    isEmpty(){
        return this.getSize() === 0
    }
}

let stack = new Stack();

stack.push("GOW")
stack.push("Wukong")
stack.push("Valorant")
stack.push("Halo")
stack.peek()

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

let queue = new Queue();

queue.enqueue("A")
queue.enqueue("B")
queue.enqueue("C")
queue.enqueue("D")
queue.dequeue()

console.log(queue)


// LINKED LIST ----------------------------------------------------------

class linkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    insertFirst(data){
       let newNode = new Node(data);
       if(this.size === 0){
            this.head = newNode
            this.tail = newNode
       } else{
           newNode.next = this.head
           this.head = newNode
       }
       this.size++
    }

    insertLast(data){
        let newNode = new Node(data);
        if(this.size === 0){
            this.head = newNode
            this.tail = newNode
        } else{
            const temp = this.tail
            this.tail = newNode
            temp.next = this.tail
            
        }

        this.size++
    }

    insertAt(data, index){
        let newNode = new Node(data);
        if(index < 0 || index > this.size){
            return null
        } if(index === 0){
            return this.insertFirst(data)
        } else if(index === this.size){
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
       }if(this.size === 1){
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
          current.next = null
          this.tail = current
          this.size--

       }
       return dataVar
    }
    removeAt(index){
        let dataVar = this.head.data
        if(index < 0 || index > this.size){
            return null
        } if(index === 0){
              return this.removeFirst()
        } else if(index === this.size -1){
            return this.removeLast()

        } else { 
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
            return current.data
        }
        // return dataVar
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

class Node{
    constructor(data){
        this.next = null
        this.data = data
    }
}



const ll = new linkedList();

ll.insertFirst(10)
ll.insertLast(20)
ll.insertLast(30)
ll.insertLast(40)
ll.insertLast(50)

ll.insertAt(43, 3)
ll.removeAt(2)



ll.print()



// HASH TABLE ----------------------------------------------------------


const  hash = (key, size) => {
    let hashedKey = 0
      for(let i = 0; i < key.length; i++){
         hashedKey += key.charCodeAt(i)
      }
      return hashedKey % size
 }


class HashTable{
     constructor(){
        this.size = 20
        this.buckets = Array(this.size)
    
        for(let i = 0; i < this.buckets.length; i++){
            this.buckets[i] = new Map()
        }
     }

     insert(key, value){
        let index = hash(key, this.size)
        this.buckets[index].set(key, value)
     }

     remove(key){
        let index = hash(key, this.size)
        let deleted = this.buckets[index].get(key)
        this.buckets[index].delete(key)
        return deleted
     }

     search(key){
        let index = hash(key, this.size)
        return this.buckets[index].get(key)
     }

    
}


const hashTable = new HashTable();

// hashTable.insert("Omen", "Controller")
// hashTable.insert("Jett", "Duelist")
// hashTable.insert("Cypher", "Sentinel")
// hashTable.insert("Skye", "Initiator")

hashTable.insert("omen", "controller")
hashTable.remove("omen")




console.log(hashTable)