function getArray(){
	const array = []
	for (let i = 0; i < 1000; i++) {
		array.push(Math.floor(Math.random()*800)+1)
	}
	return array
}
function bubbleSortArr(arr) {
	let start = new Date()
	let changed
	do{
		changed = false
		for (let i = 0; i < arr.length; i++) {
			if(arr[i-1]>arr[i]){
				let tmp = arr[i-1]
				arr[i-1] = arr[i]
				arr[i] = tmp
				changed = true
			}
			
		}
	}
	while (changed) 
	let end = new Date()
	milisecondsCount = end-start
	return 	`${arr} <br>Сортування бульбашкою зайняло ${milisecondsCount} мс`
}
function insertionSortArr(arr) {
	let start = new Date()
	let key, i
	for (let k = 0; k < arr.length; k++) {
		key = arr[k]
		i = k-1
		while (i>=0 && arr[i]>key) {
			arr[i+1] = arr[i]
			i = i-1
		}
		arr[i+1]=key
	}
	let end = new Date()
	milisecondsCount = end-start
	return 	`${arr} <br>Сортування вставкою зайняло ${milisecondsCount} мс`
}

const arr = getArray()
document.write(`${arr}<br>`)
const arr2 = bubbleSortArr(arr)
document.write(`${arr2} <br>`)
const arr3 = insertionSortArr(arr)
document.write(`${arr3} <br>`)