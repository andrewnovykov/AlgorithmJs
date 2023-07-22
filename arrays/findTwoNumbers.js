const findTwoNumbers = (arr, value) => {
	for (num of arr) {
		for (num2 of arr) {
			if (num + num2 === value) {
				return [num, num2];
			}
		}
	}

	return [];
};

//console.log(findTwoNumbers([1, 2, 3, 4, 5, 6], 11));

module.exports = findTwoNumbers;
