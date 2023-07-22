const mergeArray = require('../arrays/mergeTwoSorted');

test('should return correct output', () => {
	const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8];
	const result = mergeArray([1, 3, 4, 5], [2, 6, 7, 8]);
	expect(result).toEqual(expectedOutput);
});

test('should return correct output #2', () => {
	const expectedOutput = [-2, -1, 0, 4, 5, 6, 7];
	const result = mergeArray([4, 5, 6], [-2, -1, 0, 7]);
	expect(result).toEqual(expectedOutput);
});
