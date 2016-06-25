



var a = 1;

function first() {

	var a  = 2;
	console.log("variable a at inner  = " + a);
	second();

}


function second() {

	console.log("variable a at outer = " + a);
}

first();
