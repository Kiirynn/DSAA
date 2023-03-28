
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
//                 prev.next = current
                
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




// STACK

//  class Stack {
//     constructor(){
//         this.items = []
        
//     }

//    push(item){
//       this.items.push(item)
//     //   let data = this.storage[this.top] 
//    }


//    pop(){
//        return this.items.pop()
//    }

//    peek(){
//     if(this.items.length === 0){
//         return null
//     } else{
//         return this.items[this.items.length - 1]
//        }
      
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


// QUEUE

// class Queue{
//     constructor(){
//        this.items = []
//     }

//     //add items 
//     enqueue(item){
//        this.items.push(item)
//     }

//     // remove items
//     dequeue(){
//         return this.items.shift()    // shift takes the first item off the array and returns it
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

// HASH TABLES
