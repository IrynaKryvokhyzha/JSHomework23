function getRandomNum(minV, maxV) {
	return minV+Math.floor(Math.random()*(maxV-minV+1))
}

function getTask() {
	const randNum1 = getRandomNum(minV, maxV)
	const randNum2 = getRandomNum(minV, maxV)
	const task = `${randNum1} + ${randNum2}`
	const correctAnswer = randNum1 + randNum2
	const start = new Date()
	let userResult = parseInt(prompt(`Скільки буде ${task} ?`))
	const end = new Date()
	seconds = Math.floor((end-start)/1000)
	if(userResult===correctAnswer)return `Correct, it took ${seconds} s`
	else return `Incorrect, it took ${seconds} s`
}
const minV = 1
const maxV = 100
let task = getTask()
alert(task)
