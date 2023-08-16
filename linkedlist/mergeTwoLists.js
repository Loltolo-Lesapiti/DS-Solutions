// Node class.
class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    //Add nodes to the list.
    addNode=(value)=>{
        let newNode= new Node(value);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }else{
            newNode.next=this.head;
            this.head=newNode;
        }
    }
    //A function to merge two LinkedLists in a sorted order such that, the smaller comes first.
    mergeTwoLists=(l1,l2)=>{
        if(!l1 && !l2){
            return null;
        }else if(!l1){
            return l2
        }else if(!l2){
            return l1
        }else{
            if(l1.value>=l2.value){
                l2.next=this.mergeTwoLists(l2.next, l1)
                return l2;
            }else{
                l1.next=this.mergeTwoLists(l1.next, l2)
                return l1;
            }
        }
    }
    //Print all the nodes.
    printAll=()=>{
        let cur= this.head;
        while(cur){
            console.log(cur.value);
            cur=cur.next;
        }
    }
}
//Create instance of the LinkedList Class.
l1=new LinkedList();
l1.addNode(1)
l1.addNode(2)
l1.addNode(3)

l2=new LinkedList();
l2.addNode(4)
l2.addNode(5)
l2.addNode(6)

l3= new LinkedList();
l3.mergeTwoLists(l1,l2)
l2.printAll();



