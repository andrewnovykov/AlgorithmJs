const removeEven = require('../arrays/removeEvenInt');

test(`should return correct output`, () => {
	const expectedOutput = [1, 5, 3];
	const result = removeEven([1, 2, 4, 5, 10, 6, 3]);
	expect(result).toEqual(expectedOutput);
});

test(`should return correct output #2`, () => {
	const expectedOutput = [3, 41, 3];
	const result = removeEven([3, 2, 41, 3, 34]);
	expect(result).toEqual(expectedOutput);
});
