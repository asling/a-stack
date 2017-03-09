import {Node} from '../Node/Node'
import {BST} from '../Node/BST'

export function inOrder(node){
	if(!(node === null)){
		inOrder(node.left);
		console.log(node.show() + ' ');
		inOrder(node.right);
	}
}

export function preOrder(node){
	if(!(node === null)){
		console.log(node.show() + ' ');
		preOrder(node.left);
		preOrder(node.right);
	}
}

export function postOrder(node){
	if(!(node === null)){
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show() + ' ');
	}
}
