
// SAMPLE DATA STRUCTURE

/* 

var x = 4;
if( x == 2 ){
	alert('hy')
} 
else if( x > 0){

	if( x < 100 ){
		alert('hey')
	} else {
		alert('boo')
	}
}
else {
	alert("bi")
}

*/

nodes = [
	{
		type: "START"
	},
	{
		type: 'VARIABLE',
		value: 4
	},
	{
		type: 'CONDITIONAL',
		value: 'x == 2',
		answer: false,
	},
	{
		type: 'CONDITIONAL',
		value: 'x > 0',
		asnwer: true,
		// inside:[
		// 	{
		// 		type: 'CONDITIONAL',
		// 		value: 'x > 100',
		// 		answer: false,
		// 	},
		// 	{
		// 		type: 'CONDITIONAL',
		// 		answer: true,
		// 	}	
		// ]
	},
	{
		type: 'CONDITIONAL',
		answer: false
	},
	{
		type: 'END'
	}
];