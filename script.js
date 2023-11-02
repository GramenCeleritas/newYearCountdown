window.onload = function() { 
  const newYears = "1 January 2024"

  const daysElement = document.getElementsByClassName('days')[0];
  const hoursElement = document.getElementsByClassName('hours')[0];
  const minsElement = document.getElementsByClassName('mins')[0];
  const secsElement = document.getElementsByClassName('seconds')[0];

  const audio = document.getElementById('testAudio')

  audio.volume = 0.005;

  const headerText = document.getElementsByClassName('headerText')[0];
  
  function countdown() {
    const newYearDate = new Date(newYears)
    const currentDate = new Date();
  
    const totalSec = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSec/3600/24);
    const hours = Math.floor(totalSec/3600)%24;
    const mins = Math.floor(totalSec/60)%60;
  
    const secs = Math.floor(totalSec)%60;
  
  
    console.log('new Year date ' + newYearDate, 'curent date ' + currentDate)
    console.log('total seconds ' + totalSec)
    console.log(days,hours,mins,secs)
  
    daysElement.textContent = days.toString(10);
    hoursElement.textContent = hours.toString();
    minsElement.textContent = mins.toString();
    secsElement.textContent = secs.toString();
  }
  
  
  let number = 1233333;
  console.log(number.toString())
  
  
  /// intialize the countdown
  setInterval(countdown, 1000)


}  

