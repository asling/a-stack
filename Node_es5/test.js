var {genArray} = require("./gen_array");
var {LList} = require("./LList");
function getDiff(arr){
	var max = arr[0] - arr[1];
	for(var i = 0; i < arr.length-1;i++){
		for(var j = i+1; j < arr.length; j++ ){
			if(max < arr[i] - arr[j]){
				max = arr[i] - arr[j];
			}
		}
	}
	if(max < 0){
		max = -1;
	}
	return max
}

function removeNodes(list,x){
	var currNode = list.head;
	var currArr = [];
	var i = 0;
	var head;
	while(!(currNode.next == null)){
		currNode = currNode.next;
		console.log('data:'+currNode.data);
		console.log('x:'+x);
		if(currNode.data > x){
			currNode = currNode.previous;
			list.remove(currNode.next.data);
		}
		console.log(currNode.next);
	}




	return list
}

exports.getDiff = getDiff;
exports.removeNodes = removeNodes;