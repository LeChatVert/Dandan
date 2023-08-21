const counters = document.querySelectorAll('.counter');
const resetButton = document.getElementById('resetButton');
const audioBloup = document.getElementById('bloup');
const audioWave = document.getElementById('wave');
const audioSplash = document.getElementById('splash');
const audioBackground = document.getElementById('background'); 

// parametres des différents jeux
const gameConfigs = [
  {
    name: 'blueDan',
    background: 'dandan2.jpg', 
    bloup: 'bloup.mp3',
    wave: 'wave.mp3',
    splash: 'splash.mp3',
    music: 'musicDan.mp3',
  },
  {
    name: 'blackDan',
    background: 'barrow.jpg',
    bloup: 'bloupNoir.mp3',
    wave: 'wave.mp3',
    splash: 'splashNoir.mp3',
    music: 'musicNoir.mp3',
  },
  {
    name: 'redDan',
    background: 'bolt.jpg',
    bloup: 'bloupNoir.mp3',
    wave: 'wave.mp3',
    splash: 'splashNoir.mp3',
    music: 'musicRed.mp3',
  },
  {
    name: 'whiteDan',
    background: 'white.jpg',
    bloup: 'bloupNoir.mp3',
    wave: 'wave.mp3',
    splash: 'splashNoir.mp3',
    music: 'musicDan.mp3',
  },
  
];

let currentGameConfigIndex = 0;

    //autoriser le changement de config en utilisant le nom
function setGameConfigByName(configName) {
    const config = gameConfigs.find(config => config.name === configName);
  
    if (config) {
      document.body.style.backgroundImage = `url(${config.background})`;
      audioBloup.src = `sons/${config.bloup}`;
      audioWave.src = `sons/${config.wave}`;
      audioSplash.src = `sons/${config.splash}`;
      if (musicOn) {
        audioMusicDan.pause();
        audioMusicDan.src = `sons/${config.music}`;
        audioMusicDan.play();
      }
    } else {
      console.log(`Configuration '${configName}' not found.`);
    }
  }

  //reset des points
function resetCounters() {
  counters.forEach(counter => {
    counter.points = 5;
    const circles = counter.querySelectorAll('.circle');
    for (let i = 0; i < circles.length; i++) {
      circles[i].classList.remove('lost');
      circles[i].textContent = i + 1;
    }
  });
}

//les 5 cercles représentant les points, qui changent de couleur, activés par un bouton + ou - :
counters.forEach(counter => {
    const increaseButton = counter.querySelector('.increaseButton');
    const decreaseButton = counter.querySelector('.decreaseButton');
    const circles = counter.querySelectorAll('.circle');
    
    counter.points = 5;

    increaseButton.addEventListener('click', () => {
        if (soundsOn === true) {
            audioBloup.play();
        }
        if (counter.points < 5) {
        counter.points++;
        circles[counter.points - 1].classList.remove('lost');
        circles[counter.points - 1].textContent = counter.points;
      }
    });

    decreaseButton.addEventListener('click', () => {
        if (soundsOn === true) {
            audioBloup.play();
        }
      if (counter.points > 0) {
        circles[counter.points - 1].textContent = '';
        circles[counter.points - 1].classList.add('lost');
        counter.points--;
      }
      if (counter.points === 0 && soundsOn === true) {
          audioSplash.play();
      }
    });
  });

resetButton.addEventListener('click', () => {
    if (soundsOn === true) {
        audioWave.play();
    }
  resetCounters();
});

// MENU OPTIONS

//musique on-off
const toggleMusicLink = document.getElementById('toggleMusic');
const audioMusicDan = document.getElementById('musicDan');
let musicOn = true;

audioMusicDan.addEventListener('canplaythrough', () => { //utilité de ce bloc ?
  if (musicOn) {
    audioMusicDan.play();
  }
});

const toggleMusic = () => {
  if (!musicOn) {
    console.log('Turning on music');
    toggleMusicLink.textContent = 'Music: ON/off';
    audioMusicDan.play();
  } else {
    console.log('Turning off music');
    toggleMusicLink.textContent = 'Music: on/OFF';
    audioMusicDan.pause();
  }
  musicOn = !musicOn;
};
toggleMusicLink.addEventListener('click', toggleMusic);

//sons on-off
const toggleSoundsLink = document.getElementById('toggleSounds');
let soundsOn = true;

const toggleSounds = () => {
    if (!soundsOn) {
      console.log('Turning on sounds');
      toggleSoundsLink.textContent = 'Sounds: ON/off';
    } else {
      console.log('Turning off sounds');
      toggleSoundsLink.textContent = 'Sounds: on/OFF';
    }
    soundsOn = !soundsOn;
  };
  toggleSoundsLink.addEventListener('click', toggleSounds);



//event listener pour les changements de jeu
const changeGameLinkBlack = document.getElementById('blackDan');
changeGameLinkBlack.addEventListener('click', () => {
    setGameConfigByName('blackDan');
  resetCounters();
});

const changeGameLinkRed = document.getElementById('redDan');
changeGameLinkRed.addEventListener('click', () => {
    setGameConfigByName('redDan');
  resetCounters();
});

const changeGameLinkWhite = document.getElementById('whiteDan');
changeGameLinkWhite.addEventListener('click', () => {
    setGameConfigByName('whiteDan');
  resetCounters();
});

const changeGameLinkBlue = document.getElementById('blueDan');
changeGameLinkBlue.addEventListener('click', () => {
    setGameConfigByName('blueDan');
  resetCounters();
});
