import {Node} from '../Node/Node'
export class BST{
	constructor(){
		this.root = null;
	}
	insert(data){
		var n = new Node(data,null,null);
		if(this.root === null){
			this.root = n;
		}else{
			var current = this.root;
			var parent;
			while(true){
				parent = current;
				if(data < current.data){
					current = current.left;
					if(current === null){
						parent.left = n;
						break;
					}
				}else{
					current = current.right;
					if(current === null){
						parent.right = n;
						break;
					}
				}
				
			}
		}
	}
	getMin(){
		var current = this.root;
		while(!(current.left === null)){
			current = current.left;
		}
		return current;
	}
	getMax(){
		var current = this.root;
		while(!(current.right === null)){
			current = current.right;
		}
		return current;
	}
	find(data){
		var current = this.root;
		while(current !== null ){
			if(current.data === data){
				return current;
			}else if(data<current.data){
				current = current.left;
			}else{
				current = current.right;
			}
		}
		return null;
	}
	remove(data){
		root = removeNode(this.root,data);
	}
	removeNode(node,data){
		if(node === null){
			return null;
		}
		if(data === node.data){
			if(node.left === null && node.right === null){
				return null;
			}
			if(node.left === null){
				return node.right;
			}
			if(node.right === null){
				return node.left;
			}
			var tempNode = getSmallest(node.right);
			node.data = tempNode.data;
			node.right = removeNode(node.right,tempNode.data);
			return node;
		}else if(data < node.data){
			node.left = removeNode(node.left,data);
			return node;
		}else{
			node.right = removeNode(node.right,data);
			return node;
		}
	}
}