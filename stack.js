export class Stack(){
	constructor(){
		this.dataStore = [];
		this.top = 0;		
	}

	push(ele){
		this.dataStore[this.top++] = ele;
	}

	pop(){
		return this.dataStore[--this.top];
	}

	peek(){
		return this.dataStore[this.top-1];
	}

	clear(){
		this.top = 0;
	}

	length(){
		return this.top;
	}
}