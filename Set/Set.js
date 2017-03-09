export class Set(){
	constructor(){
		this.datastore = [];
	}
	add(data){
		if(this.datastore.indexOf(data) < 0){
			this.datastore.push(data);
			return true;
		}else{
			return false;
		}
	}
	remove(data){
		var pos = this.datastore.indexOf(data);
		if(pos > -1){
			this.datastore.splice(pos,1);
			return true;
		}else{
			return false;
		}
	}
	show(){
		return this.datastore;
	}
	contains(data){
		if(this.datastore.indexOf(data) < -1){
			return true;
		}else{
			return false;
		}
	}
	union(set){
		var tempSet = new Set();
		for(var i=0; i < this.datastore.length; ++i){
			tempSet.add(this.datastore[i]);
		}
		for(var i =0; i< set.datastore.length;i++){
			if(!tempSet.contains(set.datastore[i])){
				tempSet.datastore.push(set.datastore[i]);
			}
		}
		return tempSet;
	}
	intersect(set){
		var tempSet = new Set();
		for(var i=0; i < this.datastore.length; ++i){
			if(set.contains(this.datastore[i])){
				tempSet.add(this.datastore[i]);
			}
		}
		return tempSet;
	}
 	subset(set){
		if(this.size() > set.size()){
			return false;
		}else{
			 forEach( var member in this.datastore){
				if(!set.contains(member)){
					return false;
				}
			}
		}
		return true;
	}
	size(){
		return this.datastore.length;
	}
	difference(set){
		var tempSet = new Set();
		for (var i = 0; i < this.dataStore.length; ++i) {
			if (!set.contains(this.dataStore[i])) {
				tempSet.add(this.dataStore[i]);
			}
		}
		return tempSet;
	}
}