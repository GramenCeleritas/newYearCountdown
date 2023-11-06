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

//// DOM ELEMENTS

  const body = document.querySelector('body')
  const daysElement = document.getElementsByClassName('days')[0];
  const hoursElement = document.getElementsByClassName('hours')[0];
  const minsElement = document.getElementsByClassName('mins')[0];
  const secsElement = document.getElementsByClassName('seconds')[0];
  const textForNotif = document.getElementsByClassName('notificationText')[0];
  const notification = document.getElementsByClassName('notification')[0];
  const audio = document.getElementById('testAudio')
  const playerIcon = document.getElementsByClassName('playerIcon')[0]
  const notificationAudio = document.getElementsByClassName('notificationAudio')[0];
  const notificationAudioText = document.getElementsByClassName('notificationAudioText')[0];

 

  playerIcon.addEventListener('click', () => {
    
    if (audio.hasAttribute('controls')) {
      audio.removeAttribute('controls') 
    } else {
      audio.setAttribute('controls','')
    }
  })



  playerIcon.addEventListener('mouseover', () => {
    playerIcon.classList.add('playerIconAnim')
    
    if (!notificationAudio.classList.contains('shoved')) {
      notificationAudio.classList.add('notificationAudioAppear')
      notificationAudioText.classList.add('notificationAudioTextAppear')
      notificationAudio.classList.add('shoved')
    }

  })

  playerIcon.addEventListener('mouseleave', () => {
    playerIcon.classList.remove('playerIconAnim');
    
    playerIcon.classList.add('playerIconAnimDown');
    setTimeout(()=> {
      playerIcon.classList.remove('playerIconAnimDown');
    },500);

    setTimeout(()=> {
      notificationAudio.classList.remove('notificationAudioAppear')
      notificationAudioText.classList.remove('notificationAudioTextAppear')
    }, 4000)
  })



  setTimeout(() => {
    textForNotif.classList.add('visibleElement');
    notification.classList.add('visibleElementNotification');
  }, 1200)




  
  
  

  window.addEventListener('click', () => {
    textForNotif.innerHTML = "audio is anabled, enjoy &#128521;"

    setTimeout(() => {
      textForNotif.classList.remove('visibleElement');
      notification.classList.remove('visibleElementNotification');
    }, 6000)
    audio.play()
    console.log('you have clicked')
    
    if (!audio.paused) {
      playerIcon.classList.add('appearPlayerIcon')
      console.log('audio is playing now')
    }

  })

  

  setTimeout(() => {
    textForNotif.classList.remove('visibleElement');
    notification.classList.remove('visibleElementNotification');
  }, 1500000)

  audio.volume = 0.3;
  
  const headerText = document.getElementsByClassName('headerText')[0];
  
  
  
  

  
  /// intialize the countdown
  

  
}  