// STACK

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
        return this.items.length - 1
    }

    getSize(){
        return this.items.length
    }

    isEmpty(){
          this.getSize() === 0
    }
}


const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
// stack.push(40)
// stack.push(50)


stack.pop()




console.log(stack)


// QUEUE

class Queue{
    constructor(){
        this.items = {}
        this.head = 0
        this.tail = 0
    }

    enqueue(item){
       this.tail++
       this.items[this.tail] = item
       
    }

    dequeue(){
        let removed = this.items[this.head]
        delete this.items[this.head]
        this.head++
        return removed
    }

    peek(){
        return this.items.length -1
    }
}


const queue = new Queue();

queue.enqueue("kierdag")
queue.enqueue("newmoney")
queue.enqueue("gang")
queue.enqueue("jesus")



queue.enqueue("portland")

console.log(queue)

// LINKED LIST

class linkedList{
     constructor(){
        this.head = null
        this.tail = null
        this.size = 0
     }

     insertFirst(data){
        
        let newNode = new Node();
        if(this.size === 0){
            this.head = newNode
            this.tail = newNode
        } 
        else{
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
      
     }

     insertLast(data){
        
        let newNode = new Node();
        if(this.size === 0){
            this.head = newNode
            this.tail = newNode
      
        } if(this.size > 0){
            let temp = this.tail
            this.tail = newNode
            temp.next = this.tail
       
            
        }
        
        this.size++
       
     }

     insertAt(data, index){
       
        let newNode = new Node();
        if(index < 0 || index > this.size){
            return null
        } if(this.size === 0){
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
            }
            newNode.next = current
            prev.next = newNode
           
        }
        this.size++
       
     }

     removeFirst(data){
        let dataVar = this.head.data
        if(this.size === 0){
            return null
        } 
        if(this.size === 1){
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.size--
            return dataVar
        }
       
     }
        
     removeLast(data){
        let dataVar = this.tail.data
       if(this.size === 0){
        return null
       }
       if(this.size === 1){
        this.head = null
        this.tail = null
       }
       else{
        let current = this.head
        while(current.next.next != null){
            current = current.next
        }
    
        current.next = null
        this.tail = current
       
       }
       this.size--
       return dataVar
     }

     removeAt(data, index){
        let dataVar = this.head.data
        if(index < 0 || index > this.size){
            return null
        } if(this.size === 0){
             return this.insertFirst(data)
        } else if(index === this.size -1){
            return this.insertLast(data)
        } else {
             let current = this.head
             let prev = null
             let counter = 0

             while(counter < index){
                let prev = current
                let current = current.next
             }
             prev.next = current
             this.size--
             return dataVar
        }
       
     }

     print(){
        let data = ""
        let current = this.head
        while(current != null){
          data = data + current.data + " "
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

ll.insertFirst(A)
ll.insertFirst(B)
ll.insertFirst(C)
ll.insertFirst(D)
ll.insertFirst(E)


ll.print()