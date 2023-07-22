const isPalindrome = (string) => {
	string = string.toLowerCase();

	const characterArr = string.split('');
	const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

	let lettersArr = [];
	characterArr.forEach((char) => {
		if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
	});

	if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
	else return false;
};

module.exports = isPalindrome;
