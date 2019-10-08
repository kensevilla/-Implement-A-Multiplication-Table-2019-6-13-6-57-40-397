function createMultiplyTable(start, end){
	if(isStartSmallerThanEnd(start, end)){
		if(isInRange(start) && isInRange(end)){
			return getMultiplyTable(start, end);
		}
		else{
			return 'Given inputs should be in range of 1 - 1000.';
		}
	}
	else{
		return 'Start number should be smaller than end number.';
	}
};

function isStartSmallerThanEnd(start, end){
	return start < end;
};

function isInRange(number){
	return number >= 1 && number <= 1000;
};

function getMultiplyTable(start, end){
	let multiplyTable = '';
	const finalStart = start;
	for(; start <= end; start++){
		let multipliedBy = finalStart;
		let currentNum = start;
		while(multipliedBy <= currentNum){
			multiplyTable+=(multipliedBy + '*' + currentNum + '=' + multipliedBy*currentNum) + ' ';
			multipliedBy++;
		}
		multiplyTable+='\n'
	}
	return multiplyTable;
};


module.exports = {
	createMultiplyTable : createMultiplyTable,
	isStartSmallerThanEnd : isStartSmallerThanEnd,
	isInRange : isInRange,
	getMultiplyTable : getMultiplyTable
};