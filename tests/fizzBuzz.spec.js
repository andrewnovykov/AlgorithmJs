const fizzBuzz = require('../general/fizzBuzz');

test('fizzBuzz should return the correct output for numbers up to 15', () => {
	const expectedOutput = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'];

	const result = fizzBuzz(15);

	expect(result).toEqual(expectedOutput);
});
