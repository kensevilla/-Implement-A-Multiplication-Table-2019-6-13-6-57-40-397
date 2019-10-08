const functionList = require('../index');

it('should return true given start less than end', () => {
	const startNum = 2;
	const endNum = 4;
	const result = functionList.isStartSmallerThanEnd(startNum, endNum);
	expect(result).toBe(true);
});

it('should return false given start less than end', () => {
	const startNum = 4;
	const endNum = 2;
	const result = functionList.isStartSmallerThanEnd(startNum, endNum);
	expect(result).toBe(false);
});

it('should return true given number in between 1 and 1000', () => {
	const number = 4;
	const result = functionList.isInRange(number);
	expect(result).toBe(true);
});

it('should return false given number exceeding 1000', () => {
	const number = 1001;
	const result = functionList.isInRange(number);
	expect(result).toBe(false);
});

it('should return false given negative number', () => {
	const number = -1;
	const result = functionList.isInRange(number);
	expect(result).toBe(false);
});

it('should return multiple table given 2 and 4', () => {
	const result = functionList.getMultiplyTable(2, 4);
	console.log(result);
	expect(result).toBe('2*2=4 \n2*3=6 3*3=9 \n2*4=8 3*4=12 4*4=16 \n');
});

it('should return error message given end smaller then start', () => {
	const result = functionList.createMultiplyTable(4, 2);
	console.log(result);
	expect(result).toBe('Start number should be smaller than end number.');
});

it('should return error message when inputs are not in range', () => {
	const result = functionList.createMultiplyTable(2, 1001);
	console.log(result);
	expect(result).toBe('Given inputs should be in range of 1 - 1000.');
});

it('should return correct output given 2 and 4', () => {
	const result = functionList.getMultiplyTable(2, 4);
	console.log(result);
	expect(result).toBe('2*2=4 \n2*3=6 3*3=9 \n2*4=8 3*4=12 4*4=16 \n');
});