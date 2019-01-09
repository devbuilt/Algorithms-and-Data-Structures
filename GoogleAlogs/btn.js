//Simple Node class

class BinaryTreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;

    }
    insertLeft(value){
        this.left = new BinaryTreeNode(value)
        return this.left
    }

    insertRight(value){
        this.right = new BinaryTreeNode(value)
        return this.right
    }
}


//We will create a function to find the largest first

function findLargest(rootNode){
    if(!rootNode){
        throw new Error("Tree must have at least 1 node")
    }
    if(rootNode.rigth){
        return findLargest(rootNode.right)
    }
    return rootNode.value 
}



function findSecondLargest(rootNode){
    //find the second largest item in the binary search tree
    if(!rootNodev|| (!rootNode.left && !rootNode.right)){
        throw new Error ('Tree Must have at least 2 nodes')
    }
    //Case we're currently at largest, and largest has a left subtree,
    // so 2nd largest is largest in said subtree

    if(rootNode.left && !rootNode.right){
        return findLargest(rootNode.left)
    }

    //Case we're at parent of largest, and largest has no ledft subtree
    // so 2nd largest must be current node
    if(
        rootNode.right
        && !rootNode.right.left
        && !rootNode.right.right
    ){
        return rootNode.value;
    }
    return findSecondLargest(rootNode.right)
}
