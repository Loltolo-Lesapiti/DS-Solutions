/**
 * Implementing LinkedList operations in JavaScript.
 * The operations include.
 * Add, size, delete, getLast, getLast, Clear. 
 */
    //Creating the node class.
    class Node{
        constructor(data){
            this.data=data;
            this.next=null;
        }

    }
    class LinkedList{
        constructor(){
            this.head=null;
            this.tail=null;
        }
        // Add a node to the end of the list.
        addToEnd=(data)=>{
            let newNode= new Node(data);
            if(!this.head){
                this.head=newNode;
                this.tail= newNode
            }else{
                this.tail.next=newNode;
                this.tail=newNode;
            }
        }
        //Add at the begining
        addToBegin=(data)=>{
            let newNode=new Node(data);
            if(!this.head){
                this.head=newNode;
                this.tail=newNode;
            }else{
              newNode.next=this.head;
              this.head=newNode;
              this.tail.next=null;
            }
        }
       // Insert a node at a particular position.
       insertNodeAtPos(data, position){
        let newNode= new Node(data);
        if(position===0){
            newNode.next=this.head;
            this.head=newNode;
            return;
        }
        let cur=this.head;
        let i=0;
        while(i<position-1 && cur){
            i++;
            cur=cur.next;
            if(cur){
                newNode.next=cur.next;
                cur.next=newNode;
            }

        }
       }
       // Deleting a node at the begining
       const 
        
        //Print elements of an array
        printAll=()=>{
            let cur=this.head;
            while(cur){
                console.log(cur.data);
                cur=cur.next;
            }
        }
        // Checking the size of the linkedList.
        size=()=>{
            let count=0;
            let node= this.head;
            while(node){
                count ++;
                node=node.next;
            }
            return count;
        }
    }
    
    let list= new LinkedList();
    list.addToBegin(10)
    list.addToBegin(9)
    list.addToBegin(11)
    list.insertNodeAtPos(7,2)

    list.printAll();
