export class Queue(){
	constructor(){
		this.dataStore = [];
	}
	enqueue(ele){
		this.dataStore.push(ele);
	}
	dequeue(){
		var priority = this.dataStore[0].code;
		var index = 0;
		for(var i = 1;i<this.dataStore.length; ++i){
			if(this.dataStore[i].code < priority){
				index = i;
				priority = this.dataStore[i];
			}
		}
		return this.dataStore.splice(index,1);
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
