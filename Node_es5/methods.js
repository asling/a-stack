function inOrder(node){
	if(!(node === null)){
		inOrder(node.left);
		console.log(node.show() + ' ');
		inOrder(node.right);
	}
}

function preOrder(node){
	if(!(node === null)){
		console.log(node.show() + ' ');
		preOrder(node.left);
		preOrder(node.right);
	}
}
function postOrder(node){
	if(!(node === null)){
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show() + ' ');
	}
}
exports.inOrder = inOrder;

exports.preOrder = preOrder; 

exports.postOrder = postOrder;