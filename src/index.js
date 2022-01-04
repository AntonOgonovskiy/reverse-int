module.exports = function reverse(n) {
	let strNum = String(n);
	let result = '';
	for (let i = 0; i < strNum.length; i += 1) {
		if (strNum[i] === '-') {
			result = result;
		} else {
			result = `${strNum[i]}${result}`;
		}
	};
	return Number(result);
}
