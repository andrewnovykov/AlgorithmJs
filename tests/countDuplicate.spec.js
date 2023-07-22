const countDuplicate = require('../arrays/countDuplicate');

test('should return correct output', () => {
	const expectedOutput = 2;
	const result = countDuplicate([1, 3, 1, 4, 5, 6, 3, 2]);
	expect(result).toEqual(expectedOutput);
});

test('should return correct output #2', () => {
	const expectedOutput = 2;
	const result = countDuplicate([8, 1, 3, 1, 4, 5, 6, 3, 2]);
	expect(result).toEqual(expectedOutput);
});

test('should return correct output #3', () => {
	const expectedOutput = 2;
	const result = countDuplicate([1, 1, 2, 2, 2, 3]);
	expect(result).toEqual(expectedOutput);
});

test('should return correct output #4', () => {
	const expectedOutput = 1;
	const result = countDuplicate([1, 1, 1, 1]);
	expect(result).toEqual(expectedOutput);
});
