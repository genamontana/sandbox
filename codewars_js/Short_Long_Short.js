function solution(a, b) {
	// your code here
	let s = '', l = '';
	if (a.length > b.length) {
		l = a;
		s = b;
	} else {
		l = b;
		s = a;
	}

	return `${s}${l}${s}`
}
