export class Queue(){
	constructor(){
		this.dataStore = [];
	}
	enqueue(ele){
		this.dataStore.push(ele);
	}
	dequeue(){
		return this.dataStore.shift();
	}
	front(){
		return this.dataStore[0];
	}
	back(){
		return this.dataStore[this.dataStore.length - 1];
	}
	toString(){
		var retStr = '';
		for(let item of this.dataStore){
			retStr = retStr + item+ "\n";
		}
		return retStr;
	}
	empty(){
		if(this.dataStore.length === 0){
			return true;
		}else{
			return false;
		}
	}
}
