function binSearch(arr,data){
	var upperBound = arr.length-1;
	var lowerBound = 0;
	while(lowerBound <= upperBound){
		var mid = Math.floor((upperBound+lowerBound)/2);
		if(arr[mid] < data){
			lowerBound = mid+1;
		}else if(arr[mid] > data){
			lowerBound = mid - 1;
		}else{
			return mid;
		}

	}
	return -1;
}

function count(arr,data){
	var count = 0;
	var pos = binSearch(arr,data);
	if(pos > -1){
		++count;
		for(var i = pos-1;i > 0; i--){
			if(arr[i] === data){
				count++;
			}else{
				break;
			}
		}
		for(var i = pos+1;i<arr.length;i++){
			if(arr[i] === data){
				count++;
			}
			break;
		}
	}
	return count;
}