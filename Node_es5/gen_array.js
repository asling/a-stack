function genArray(size){
	var nums = [];
	for (var i = 0; i < size; ++i) {
		nums[i] = Math.floor(Math.random() * 100001);
	}
	return nums;
}
exports.genArray = genArray;