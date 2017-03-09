export class HashTable(){
	constructor(){
		this.table = new Array(137);
	}
	put(key,data){
		var pos = this.betterHash(key);
		if(this.table[pos] === undefined){
			this.table[pos] = key;
			this.values[pos] = data;
		}else{
			while(this.table[pos] !== undefined){
				pos++;
			}
			this.table[pos] = key;
			this.values[pos] = data;
		}
	}
	get(key){
		var pos = this.betterHash[pos];
		return this.table[pos];
	}
	betterHash(){
		const H = 37;
		var total = 0;
		for(var i = 0; i< string.length; i++){
			total += H * total + string.charCodeAt(i);
		}
		total = total % this.table.length - 1;
		if(total < 0){
			total += this.table.length -1;
		}
		return parseInt(total);
	}
}