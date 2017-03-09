function Node(data,left,right){
	this.data = data;
	this.next = null;
	this.previous = null;
	this.left = left;
	this.right = right;
	this.show = show;
}
function show(){
	return this.data;
}
exports.Node = Node;