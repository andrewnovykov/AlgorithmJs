const findTwoNumbers = (arr, value) => {
	for (let num of arr) {
		for (let num2 of arr) {
			if (num + num2 === value) {
				return [num, num2];
			}
		}
	}

	return [];
};

//console.log(findTwoNumbers([1, 2, 3, 4, 5, 6], 11));

module.exports = findTwoNumbers;
