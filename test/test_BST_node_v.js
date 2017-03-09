const {Node} = require('../Node_es5/Node_v2');
const {BST} = require('../Node_es5/BST');
const {LList} = require("../Node_es5/LList");
const {inOrder,preOrder,postOrder} = require('../Node_es5/methods');
const {genArray} = require("../Node_es5/gen_array");
const {removeNodes} = require("../Node_es5/test");


function test2(arr,x){
	var llist = new LList();
	var bst = new BST();
	for(var i = 0; i<arr.length;i++){
		bst.insert(arr[i]);
	}

	for(let i = 0; i<arr.length;i++){
		if(i === 0){
			llist.insert(arr[i],'head');
		}else{
			llist.insert(arr[i],arr[i-1]);
		}
	}
	var currNode1 = llist.head;
	while(!(currNode1.next == null)){
		console.log(currNode1.data);
		currNode1 = currNode1.next;
	}
	console.log("---------------remove_before--------------------");
	var result = removeNodes(llist,x);
	var currNode = result.head;
	console.log("---------------remove_after--------------------");
	while(!(currNode.next == null)){
		console.log(currNode.data);
		currNode = currNode.next;
	}
}
exports.test2 = test2;
/*console.log('------链表-------');
llist.display();
console.log('-------二叉树------');
inOrder(bst.root);
console.log('-------------');
preOrder(bst.root);
console.log('-------------');
postOrder(bst.root);*/

