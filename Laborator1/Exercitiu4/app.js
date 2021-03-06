var a = 1;
var b = 1;

function getFibonacci(n)
{
	if(n===1) return a;
	else if(n===2) return a + ' ' + b;
	else if(n===3)
	{
		var c;
		c = a + b;
		return a + ' ' + b + ' ' + c;
	}
	else if(n===4)
	{
		var c;
		var d;
		c = a + b;
		d = b + c;
		return a + ' ' + b + ' ' + c + ' ' + d;
	}
	else if(n===5)
	{
		var c;
		var d;
		var e;
		c = a + b;
		d = b + c;
		e = c + d;
		return a + ' ' + b + ' ' + c + ' ' + d + ' ' + e;
	}
	else if(n===6)
	{
		var c;
		var d;
		var e;
		var f;
		c = a + b;
		d = b + c;
		e = c + d;
		f = d + e;
		return a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f;
	}
	else if(n===7)
	{
		var c;
		var d;
		var e;
		var f;
		var g;
		c = a + b;
		d = b + c;
		e = c + d;
		f = d + e;
		g = e + f;
		return a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;
	}
	else if(n===8)
	{
		var c;
		var d;
		var e;
		var f;
		var g;
		var h;
		c = a + b;
		d = b + c;
		e = c + d;
		f = d + e;
		g = e + f;
		h = f + g;
		return a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g + ' ' + h;
	}
	else if(n===9)
	{
		var c;
		var d;
		var e;
		var f;
		var g;
		var h;
		var i;
		c = a + b;
		d = b + c;
		e = c + d;
		f = d + e;
		g = e + f;
		h = f + g;
		i = g + h;
		return a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g + ' ' + h + ' ' + i;
	}
	else if(n===10)
	{
		var c;
		var d;
		var e;
		var f;
		var g;
		var h;
		var i;
		var j;
		c = a + b;
		d = b + c;
		e = c + d;
		f = d + e;
		g = e + f;
		h = f + g;
		i = g + h;
		j = h + i;
		return a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g + ' ' + h + ' ' + i + ' ' + j;
	}
	else return 'Not allowed';
}

console.log(getFibonacci(1));
console.log(getFibonacci(2));
console.log(getFibonacci(3));
console.log(getFibonacci(4));
console.log(getFibonacci(5));
console.log(getFibonacci(6));
console.log(getFibonacci(7));
console.log(getFibonacci(8));
console.log(getFibonacci(9))
console.log(getFibonacci(10))
console.log(getFibonacci(11))
console.log(getFibonacci(0));
console.log(getFibonacci(-5))
console.log(getFibonacci('t'));