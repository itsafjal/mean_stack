

var numbers = [1,2,3,4,5,6,7];

for ( number in numbers) {
	

	if (numbers[number]==4) {
		console.log("loop break");
		break;
			}
		console.log(number);
 }

for ( number in numbers) {


        if (numbers[number]==4) {
		console.log("continue statement here");	

                continue;
                        }
                console.log(number);
 }

