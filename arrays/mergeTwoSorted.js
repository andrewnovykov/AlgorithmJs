const mergeArray = (arr1, arr2) => {
	const mergedArr = [];
	const result = mergedArr.concat(arr1, arr2).sort((a, b) => a - b);
	return result;
};

module.exports = mergeArray;
