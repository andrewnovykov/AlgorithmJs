const countDuplicate = (arr) => {
	const myMap = new Map();
	let dupCount = 0;

	//count occur for each number
	for (const num of arr) {
		if (myMap.has(num)) {
			myMap.set(num, myMap.get(num) + 1);
		} else {
			myMap.set(num, 1);
		}
	}

	// count dups
	for (const count of myMap.values()) {
		if (count > 1) {
			dupCount++;
		}
	}

	return dupCount;
};

//console.log(countDuplicate([1, 1, 2, 2, 2, 3]));

module.exports = countDuplicate;
