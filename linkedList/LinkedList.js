import {Node} from './Node'

export class LinkedList(){
	constructor(){
		this.head = new Node('head');
	}
	find(item){
		var currNode = this.head;
		while(currNode.element != item){
			currNode = currNode.next;
		}
		return currNode;
	}

	insert(newElement,item){
		var newNode = new Node(newElement);
		var current = this.find(item);
		newNode.next = current.next;
		current.next = newNode;
	}

	display(){
		var currNode = this.head;
		while(!(currNode.next == null)){
			print(currNode.next.element);
			currNode = currNode.next;
		}
	}
}