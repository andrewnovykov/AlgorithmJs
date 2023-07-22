const removeEven = (arr) => {
	const odds = [];

	for (let num of arr) {
		if (num % 2 != 0)
			// Check if the item in the list is NOT even ('%' is the modulus symbol!)
			odds.push(num);
	}

	return odds;
};
// console.log(removeEven([3, 2, 41, 3, 34]));

module.exports = removeEven;
