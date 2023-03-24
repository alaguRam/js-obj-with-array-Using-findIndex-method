

const employees = [
 { name: "David Carlson", age: 30 },
 { name: "John Cena", age: 34 },
 { name: "Mike Sheridan", age: 25 },
 { name: "John Carte", age: 50 }
];

//Print the record for the employee whose name is John using find method
let emp=employees.find(function(e){
	return e.name.indexOf("John")>=0;
	});
	console.log(emp);

//Print the  record for the employee whose name is John index position using findIndex method
let res=employees.findIndex(function(e){
	return e.name.indexOf("John")>=0;
	});
	console.log(res);