class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // function to be implemented 
    insert(data) {
        var node = new Node(data);
        if (!this.root) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(rootNode, node) {
        if (rootNode.data > node.data) {
            if (rootNode.left === null) {
                rootNode.left = node;
                return true;
            } else {
                this.insertNode(rootNode.left, node);
            }
        } else {
            if (rootNode.right === null) {
                rootNode.right = node;
                return true
            } else {
                this.insertNode(rootNode.right, node);
            }
        }
    }

    //Removing a node has three cases to it:
    //removing node with two children:
    //removing a leaf node:
    //removing a node with one child:

    remove(data) {
        if (this.root) {
            this.root = this.removeNode(this.root, data);
        }
    }

    removeNode(rootNode, key) {
        if (rootNode == null) {
            return null;
        }
        else if (key < rootNode.data) {
            rootNode.right = this.removeNode(node.left, key);
            return rootNode;
        }
        else if (key > rootNode.data) {
            rootNode.right = this.removeNode(rootNode.right, key);
            return rootNode;
        } else {
            if (rootNode.left == null && rootNode.right == null) {
                rootNode = null;
                return rootNode;
            }
            if (rootNode.left == null) {
                rootNode = rootNode.right;
                return rootNode;
            } else if (rootNode.right == null) {
                rootNode = rootNode.left;
                return rootNode;
            }
            var aux = this.findMinNode(rootNode.right);
            rootNode.data = aux.data;

            rootNode.right = this.removeNode(rootNode.right, aux.data);
            return rootNode;
        }

    }

    // Helper function: 
    findMinNode(node) {
        if (!node.left) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    getRootNode() {
        if (this.root != null) {
            return this.root;
        } else {
            return false;
        }
    }

    inorder(node) {
        if (node != null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    preorder(node) {
        if (node != null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node) {
        if (node != null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    // search(node, data) 
}

var bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(25);
bst.insert(22);
bst.insert(21);
bst.insert(2);
bst.insert(3);
bst.insert(7);
console.log(bst.getRootNode());
console.log(bst.findMinNode(bst.getRootNode()));
console.log('In order traversel');
bst.inorder(bst.getRootNode());
console.log('post order traversel');
bst.postorder(bst.getRootNode());
console.log('pre order traversal');
bst.preorder(bst.getRootNode());
bst.remove(10);
console.log(bst.getRootNode());