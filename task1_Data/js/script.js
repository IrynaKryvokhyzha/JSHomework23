// Задача  1. Користувач іде у відпустку на 56 днів. Визначити дату на момент його повернення.

function getVacationReturnDate(date, vacationsDays) {
	return new Date(date.setDate(date.getDate()+vacationsDays))
	
}
const currentDate = new Date()
const vacationsDays = parseInt(prompt('Введіть кількість днів відпустки'))
const returnDate = getVacationReturnDate(currentDate, vacationsDays)
alert(`Ви повернетесь ${returnDate}`);