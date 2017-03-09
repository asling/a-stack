const {Node}  = require('./Node_v2');
function LList(){
	this.head = new Node('head',null,null);

	this.find = find;
	this.insert = insert;
	this.display = display;
	this.findPrevious = findPrevious;
	this.remove = remove;
	this.findLast = findLast;
	this.dispReverse = dispReverse;
}

	function find(item){
		var currNode = this.head;
		while(currNode.data != item){
			currNode = currNode.next;
		}
		return currNode;
	}

	function insert(newElement,item){
		var newNode = new Node(newElement,null,null);
		var current = this.find(item);
		newNode.next = current.next;
		current.next = newNode;
		newNode.previous = current;
	}

	function display(){
		var currNode = this.head;
		while(!(currNode.next == null)){
			console.log(currNode.next.data);
			currNode = currNode.next;
		}
	}

	function findPrevious(item){
		var currNode = this.head;
		while(!(currNode.next == null) && (currNode.next.data != item)){
			currNode = currNode.next;
		}
		return currNode;
	}

	function remove(item){
		var currNode = this.find(item);
		if(!(currNode.next == null)){
			currNode.previous.next = currNode.next;
			currNode.next.previous = currNode.previous;
			currNode.next = null;
			currNode.previous = null;
		}else{
			currNode.previous.next = null;
		}
	}

	function findLast(){
		var currNode = this.head;
		while(!(currNode.next == null)){
			currNode = currNode.next;
		}
		return currNode;
	}

	function dispReverse(){
		var currNode = this.head;
		currNode = this.findLast();
		while(!(currNode.previous == null)){
			console.log(currNode.data);
			currNode = currNode.previous;
		}
	}

exports.LList = LList;