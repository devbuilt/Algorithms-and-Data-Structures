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
    //find the second largest itme in the binary search tree
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



// Tests-------------------------------------------

let desc = 'full tree';
let treeRoot = new BinaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);
assertEquals(findSecondLargest(treeRoot), 70, desc);

desc = 'largest has a left child';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
assertEquals(findSecondLargest(treeRoot), 60, desc);

desc = 'largest has a left subtree';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
leftNode = rightNode.insertLeft(60);
leftNode.insertRight(65);
leftNode = leftNode.insertLeft(55);
leftNode.insertRight(58);
assertEquals(findSecondLargest(treeRoot), 65, desc);

desc = 'second largest is root node';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
assertEquals(findSecondLargest(treeRoot), 50, desc);

desc = 'descending linked list';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(40);
leftNode = leftNode.insertLeft(30);