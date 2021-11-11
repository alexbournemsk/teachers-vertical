const playButton = document.querySelector('#play');
const someText = document.querySelector('.text-content');
const myPlayer = document.querySelector('#my-player');
//const pauseIsOn = false;

const onPlayPress = () => {
  if (!myPlayer.paused) {
    myPlayer.pause()
    // playButton.innerHTML = "Play";
    playButton.style.display = 'block';


  } else {
  myPlayer.play()
  // playButton.innerHTML = "Pause";
  playButton.style.display = 'none';

  }
}

myPlayer.addEventListener('click', onPlayPress)
playButton.addEventListener('click', onPlayPress)


//Generate data

const teachers = [

  {
    id: 0,
    fullName: "Анна Болдырева",
    video: './video.mp4',
    education: '— Российская академия имени Гнесиных. (Магистр, ассистент-стажёр).',
    achievments: '— Лауреат всероссийских и международных конкурсов.',
    genre: '— Джаз, рок',
    genres:['Джаз', 'рок']  
  },

  {
    id: 1,
    fullName: "Александр Литвак",
    video: './video.mp4',
    education: 'ГМПИ им. М.М. Ипполитова-Иванова. Класс профессора Есиповой Е.В.',
    achievments: '— Лично обучил более 1000 человек',
    genre: '— Джаз, рок',
    genres:['Джаз', 'классика'] 
  }
]
