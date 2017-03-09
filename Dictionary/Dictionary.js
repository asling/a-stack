export class Dictionary(){
	constructor(){
		this.datastore = new Array();
	}
	add(key,value){
		this.datastore[key] = value;
	}
	find(key){
		return this.datastore[key];
	}
	remove(key){
		delete this.datastore[key];
	}
}