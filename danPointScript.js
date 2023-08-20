
    const counters = document.querySelectorAll('.counter');
    const resetButton = document.getElementById('resetButton');
    const audioBloup = document.getElementById('bloup');
    const audioWave = document.getElementById('wave');
    const audioSplash = document.getElementById('splash');

/*
La musique de fond doit être indépendante de la partie.
Quand Reset : seulement les compteurs.
*/

    function resetCounters() {
      counters.forEach(counter => {
        const circles = counter.querySelectorAll('.circle');
        for (let i = 0; i < circles.length; i++) {
          circles[i].classList.remove('lost');
          circles[i].textContent = i + 1;
        }
      });
      
    }

    counters.forEach(counter => {
      const increaseButton = counter.querySelector('.increaseButton');
      const decreaseButton = counter.querySelector('.decreaseButton');
      const circles = counter.querySelectorAll('.circle');

      let points = 5;

      increaseButton.addEventListener('click', () => {
        audioBloup.play();
        if (points < 5) {
          points++;
          circles[points - 1].classList.remove('lost');
          circles[points - 1].textContent = points;
        }
      });

      decreaseButton.addEventListener('click', () => {
        audioBloup.play();
        if (points > 0) {
          circles[points - 1].textContent = '';
          circles[points - 1].classList.add('lost');
          points--;
        }
        if (points === 0) {
            audioSplash.play();
        }
      });
    });

    resetButton.addEventListener('click', () => {
        audioWave.play();
      resetCounters();
      setTimeout(() => {
        location.reload();
      }, 3000);
    });

    // menu 
    const toggleMusicLink = document.getElementById('toggleMusic');
    const audioMusicDan = document.getElementById('musicDan');
    let musicOn = true;

    audioMusicDan.addEventListener('canplaythrough', () => {
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






    /*
    const toggleMusic = () => {
  musicOn = !musicOn;

  if (musicOn) {
    console.log('Turning on music');
    toggleMusicLink.textContent = 'Music: ON/off';
    audioMusicDan.play();
  } else {
    console.log('Turning off music');
    toggleMusicLink.textContent = 'Music: on/OFF';
    audioMusicDan.pause();
        }
    };

    toggleMusic();

    toggleMusicLink.addEventListener('click', toggleMusic);
    */
