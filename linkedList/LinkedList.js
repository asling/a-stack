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
		newNode.previous = current;
	}

	display(){
		var currNode = this.head;
		while(!(currNode.next == null)){
			print(currNode.next.element);
			currNode = currNode.next;
		}
	}

	findPrevious(item){
		var currNode = this.head;
		while(!(currNode.next == null) && (currNode.next.element != item)){
			currNode = currNode.next;
		}
		return currNode;
	}

	remove(item){
		var currNode = this.find(item);
		if(!(currNode.next == null)){
			currNode.previous.next = currNode.next;
			currNode.next.previous = currNode.previous;
			currNode.next = null;
			currNode.previous = null;
		}
	}

	findLast(){
		var currNode = this.head;
		while(!(currNode.next == null)){
			currNode = currNode.next;
		}
		return currNode;
	}

	dispReverse(){
		var currNode = this.head;
		currNode = this.findLast();
		while(!(currNode.previous == null)){
			print(currNode.element);
			currNode = currNode.previous;
		}
	}


}