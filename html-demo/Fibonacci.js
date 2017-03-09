function* Fibonacci(){
	var i = 1;
	var arr = [];
	while(i>0){
		if(i<=2){
			//console.log('i:'+i);
			arr[i] = i;
			s = yield arr[i];
		}else{
			arr[i] = arr[i-1]+arr[i-2];
			s = yield arr[i];
		}
		i++;
		//console.log("i++:"+i);
	}
}
function getF(n){
	var f = Fibonacci();
	var ans = 0;
	for(var i = 1;i<=n;i++){
		ans = f.next();
	}
	return ans;
}

function recurFib(n) {
	if (n < 2) {
		return n;
	}else {
		return recurFib(n-1) + recurFib(n-2);
	}
}

function dynFib(n) {
	var val = [];
	for (var i = 0; i <= n; ++i) {
		val[i] = 0;
	}
	if (n == 1 || n == 2) {
		return 1;
	}else {
		val[1] = 1;
		val[2] = 2;
		for (var i = 3; i <= n; ++i) {
			val[i] = val[i-1] + val[i-2];
		}
		return val[n-1];
	}
}

/**************************test***/

var start = new Date().getTime();
console.log(recurFib(300));
var stop = new Date().getTime();
console.log(" 递归计算耗时 - " + (stop-start) + " 毫秒");
start = new Date().getTime();
console.log(dynFib(300));
stop = new Date().getTime();
console.log(" 动态规划耗时 - " + (stop-start) + " 毫秒");

start = new Date().getTime();
console.log(getF(300));
stop = new Date().getTime();
console.log(" genertor耗时 - " + (stop-start) + " 毫秒");
console.log(" end");