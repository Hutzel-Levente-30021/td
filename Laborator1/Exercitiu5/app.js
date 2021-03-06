plus = document.getElementById("plus");
function plusOperation()
{
	let nr1 = document.getElementById('nr1');
	let nr2 = document.getElementById('nr2');
	let sum = parseInt(nr1.value) + parseInt(nr2.value);
	$('#result').html(sum);
}
plus.addEventListener('click', plusOperation);

minus = document.getElementById("minus");
function minusOperation()
{
	let nr1 = document.getElementById('nr1');
	let nr2 = document.getElementById('nr2');
	let diff = parseInt(nr1.value) - parseInt(nr2.value);
	$('#result').html(diff);
}
minus.addEventListener('click', minusOperation);

multiply = document.getElementById("multiply");
function multiplyOperation()
{
	let nr1 = document.getElementById('nr1');
	let nr2 = document.getElementById('nr2');
	let mul = parseInt(nr1.value) * parseInt(nr2.value);
	$('#result').html(mul);
}
multiply.addEventListener('click', multiplyOperation);

divide = document.getElementById("divide");
function divideOperation()
{
	let nr1 = document.getElementById('nr1');
	let nr2 = document.getElementById('nr2');
	let divi = parseInt(nr1.value) / parseInt(nr2.value);
	$('#result').html(divi);
}
divide.addEventListener('click', divideOperation)

mod = document.getElementById("mod");
function modOperation()
{
	let nr1 = document.getElementById('nr1');
	let nr2 = document.getElementById('nr2');
	let md = parseInt(nr1.value) % parseInt(nr2.value);
	$('#result').html(md);
}
mod.addEventListener('click', modOperation)