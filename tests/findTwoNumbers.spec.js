const findTwoNumbers = require('../arrays/findTwoNumbers');

test('should return correct output', () => {
	const expectedOutput = [21, 60];
	const result = findTwoNumbers([1, 21, 3, 14, 5, 60, 7, 6], 81);
	expect(result).toEqual(expectedOutput);
});

test('should return correct output', () => {
	const expectedOutput = [5, 6];
	const result = findTwoNumbers([1, 2, 3, 4, 5, 6], 11);
	expect(result).toEqual(expectedOutput);
});
