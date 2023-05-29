const shuffleArray = arr => {
	let currentIndex = arr.length,  randomIndex;

	while(currentIndex != 0) {
  
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
	
		[arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
	}
		
	return arr;
};

const removeGivenItemsFromArray = (arr, item) => {
	let i = 0;

	while(i < arr.length) {
		if(arr[i] === item) arr.splice(i, 1);
		else i++;
	}

	return arr;
};

export { shuffleArray, removeGivenItemsFromArray };