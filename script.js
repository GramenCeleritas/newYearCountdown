window.onload = function() { 
  const newYears = "1 January 2024"
  function countdown() {
    const newYearDate = new Date(newYears)
    const currentDate = new Date();
  
    const totalSec = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSec/3600/24);
    const hours = Math.floor(totalSec/3600)%24;
    const mins = Math.floor(totalSec/60)%60;
  
    const secs = Math.floor(totalSec)%60;
  
  
    contentMaker()

    function contentMaker() {
      daysElement.textContent = days.toString(10);
      hoursElement.textContent = hours.toString();
      minsElement.textContent = mins.toString();
      secsElement.textContent = secs.toString();
      body.classList.add('visible')
    }
    
  }
  setInterval(countdown, 1000)
  const body = document.querySelector('body')
  const daysElement = document.getElementsByClassName('days')[0];
  const hoursElement = document.getElementsByClassName('hours')[0];
  const minsElement = document.getElementsByClassName('mins')[0];
  const secsElement = document.getElementsByClassName('seconds')[0];

  const audio = document.getElementById('testAudio')

 
  audio.volume = 0.02;

  const headerText = document.getElementsByClassName('headerText')[0];
  
  
  
  

  
  /// intialize the countdown
  

  
}  