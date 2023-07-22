const isPalindrome = require('../strings/isPalindrome');

test(`'it is java' should return false`, () => {
	const expectedOutput = false;
	const result = isPalindrome('it is java');
	expect(result).toEqual(expectedOutput);
});

test(`'race car' should return false`, () => {
	const expectedOutput = true;
	const result = isPalindrome('race car');
	expect(result).toEqual(expectedOutput);
});

test(`'Madam im Adam' should return false`, () => {
	const expectedOutput = true;
	const result = isPalindrome('Madam i`m Adam');
	expect(result).toEqual(expectedOutput);
});
