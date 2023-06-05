// Задача 2 . Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності.
//  Визначити чи є він придатним на даний момент.
function getExpirationDate(year, month, day, validityDays) {
	const currentDate = new Date()
	const productionDate = new Date(year, month-1, day)
	const expirationDate = productionDate.setDate(productionDate.getDate()+validityDays)
	if (currentDate<=expirationDate) return 'Придатний до споживання'
	else return 'Не придатний до споживання'
}
const year = parseInt(prompt('Production Year'))
const month = parseInt(prompt('Production Month'))
const day = parseInt(prompt('Production Day'))
const validityDays = parseInt(prompt('Enter validity days'))
let expDate = getExpirationDate(year, month, day, validityDays)
alert(expDate)