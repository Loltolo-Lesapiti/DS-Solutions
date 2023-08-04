//This file includes all the BST operations.
//Create a node class.
class Node{
    constructor(value){
        this.root=value;
        this.left=null;
        this.right=null;
    }
}
//Create a BST class.
class Bst{
    constructor(){
        this.root=null;
    }
    //Check if the tree is empty.
    isEmpty(){
        return this.root===null;
    }
    //Insert a node.
    insert(value){
        //create an instance of the node and pass the value.
        const newNode= new Node(value);
        //Check if its empty, call insertion method to help. 
        if(this.isEmpty){
            this.root=newNode;
        }else{
            this.insertNode(this.root, newNode);
        }
    }
    // The insertion method.
    insertNode(root, newNode){
        if(root.value>newNode.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNode(root.left, newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode;
            }else{
                this.insertNode(root.right, newNode);
            }
        }
    }
    //Finding if the node exists. 
    find(root, searchNode){
        if(this.isEmpty()){
            return false;
        }else{
            if(root.value===searchNode.value){
                return true;
            }else{
                if (root<searchNode){
                    return this.find(root.left, searchNode)
                }else{
                    return this.find(root.right, searchNode)
                }
            }
        }
    }
}
const bst= new Bst();
console.log(bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(6);


console.log(bst.find(bst.root,5));