let biodata =
[
	{
		name: 'Tatas',
		company: 'Arkademy',
		job: 'Trainer',
		status: 'single',
		city: 'Jogja'
    }, 
	{
		name: 'Pratama',
		company: 'Emago',
		job: 'Trainer',
		status: 'single',
		city: 'Jakarta'
	}
]

let biodatanew = biodata.map(a => {
	const returnValue = {...a};

	if (a.name == "Tatas") {
	    returnValue.status = "married";
	    returnValue.city = "Jakarta";
	} else {
		returnValue.company = "Arkademy";
		returnValue.city = "Jogja";
	}

	return returnValue
})



//console.log(biodata)
console.log(biodata )
console.log(biodatanew )
