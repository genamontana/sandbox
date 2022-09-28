function findAverage(array) {
	// your code here
	if (array.length === 0) {
		return 0;
	};
	let r = 0;
	for (i = 0; i < array.length; i++) {
		r += array[i];
	};
	return r / array.length;
}