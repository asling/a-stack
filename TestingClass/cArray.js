export class cArray(numElements){
	constructor(){
		this.datastore = [];
		this.pos = 0;
		this.numElements = numElements;
		this.gaps = [5,3,1];
		for(var i = 0; i < numElements; i++){
			this.datastore[i] = i;
		}
	}
	setData(){
		for(var i =0; i<this.numElements;i++){
			this.datastore[i] = Math.floor(Math.random()*(this.numElements+1));
		}
	}
	clear(){
		for(var i =0;i<this.datastore.length;i++){
			this.datastore[i] = 0;
		}
	}
	insert(element){
		this.datastore[this.pos++] = element;
	}
	toString(){
		var reset = '';
		for(var i =0;i<this.datastore.length;i++){
			if(i>0 & i%10 === 0){
				retStr += '\n';
			}
		}
		return retStr
	}
	swap(arr,index1,index2){
		var temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;
	}

	insertionSort(){
		var temp,inner;
		for(var outer = 1;outer <= this.datastore.length;outer++){
			temp = this.datastore[outer];
			inner = outer;
			while(inner>0 && (this.datastore[inner-1] >= temp)){
				this.datastore[inner] = this.datastore[inner-1];
					--inner;
			}
			this.datastore[inner] = temp;
		}
	}
	selectionSort(){
		var min,temp;
		for(var outer = 0; outer < this.datastore.length-1; outer++){
			min = outer;
			for(var inner = outer+1; inner < this.datastore.length; inner++){
				if(this.datastore[inner] < this.datastore[min]){
					min = inner;
				}
				swap(this.datastore,outer,min);
			}
		}
	}
	bubbleSort(){
		var numElements = this.datastore.length;
		var temp;
		for(var outer = numElements; outer > 1;outer--){
			for(var inner = 0;inner < outer; inner++){
				if(this.datastore[inner] > this.datastore[inner+1]){
					swap(this.datastore,inner,inner+1);
				}
			}
			print(this.toString());
		}
	}
	shellsort(){
		for(var g=0;g<this.gaps.length;++g){
			for(var i = this.gaps[g]; i<this.datastore.length;i++){
				var temp = this.datastore[i];
				for(var j=i;j>=this.gaps[g] && this.datastore[j-this.gaps[g]] > temp; j -= this.gaps[g]){
					this.datastore[j] = this.data[j-this.gaps[g]];
				}
				this.datastore[j] = temp;
			}
		}
	}
	setGaps(arr){
		this.gaps = arr;
	}
}