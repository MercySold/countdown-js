const daysVal = document.querySelector('#days')
const hoursVal = document.querySelector('#hours')
const minutesVal = document.querySelector('#minutes')
const secondsVal = document.querySelector('#seconds')

const daysText = document.querySelector('#daysText')
const hoursText = document.querySelector('#hoursText')
const minutesText = document.querySelector('#minutesText')
const secondsText = document.querySelector('#secondsText')

function declOfNum(number, titles) {
	cases = [2, 0, 1, 1, 1, 2]
	return titles[
		number % 100 > 4 && number % 100 < 20
			? 2
			: cases[number % 10 < 5 ? number % 10 : 5]
	]
}



const timeCount = () => {
  let now = new Date()
  let leftUntil = birthday - now
  
  let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24)
  let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24
  let minutes = Math.floor(leftUntil / 1000 / 60) % 60
  let seconds = Math.floor(leftUntil / 1000) % 60

  daysVal.textContent = days
  hoursVal.textContent = hours
  minutesVal.textContent = minutes
  secondsVal.textContent = seconds

  daysText.textContent = declOfNum(days, ['день', 'дня', 'дней'])
  hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов'])
  minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут'])
  secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд'])
}
timeCount()

setInterval(timeCount, 1000)