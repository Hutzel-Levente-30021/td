(function(){
	console.log(sum(0)==0?"Passed":"Failed");
	console.log(sum(0)=='n is undefined'?"Passed":"Failed");
	console.log(sum('asd')=="not a number?"?"it is a string":"it is a number");
	console.log(sum(true)=="not a number"?"it is a boolean":"it is a number");
})();