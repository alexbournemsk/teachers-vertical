const playButton = document.querySelector('#play');
const someText = document.querySelector('.text-content');
const myPlayer = document.querySelector('#my-player');
const teacherName = document.querySelector('#full-name');
const teacherSubject = document.querySelector('#subject');
const teacherEducation = document.querySelector('#education');
const teacherAchievements = document.querySelector('#achievements');
const teacherGenre = document.querySelector('#genre');
const mainContainer = document.querySelector('.container');
const videoFile = document.querySelector('#video-src');




const onPlayPress = () => {
  if (!myPlayer.paused) {
    myPlayer.pause()
    playButton.style.display = 'block';
    myPlayer.muted= false;


  } else {
    myPlayer.play()
    playButton.style.display = 'none';

  }
}

myPlayer.addEventListener('click', onPlayPress)
playButton.addEventListener('click', onPlayPress)


//Generate data

const teachers = [

  {
    id: 0,
    subject: 'Педагог вокала',
    fullName: "Егор Летов",
    eName: 'egor',
    video: './video.mp4',
    education: '— Российская академия имени Гнесиных. (Магистр, ассистент-стажёр).',
    achievements: '— Лауреат всероссийских и международных конкурсов.',
    genre: '— Джаз, рок',
    genres: ['Джаз', 'рок']
  },

  {
    id: 1,
    subject: 'Педагог вокала',
    fullName: "Алексей Шанин",
    eName: 'shanin',
    video: './shanin2.mp4',
    education: '— РАМ им. Гнесиных',
    achievements: '— Лауреат Международных и Всероссийских конкурсов<br>— Опыт выступления на различных площадках более 10 лет<br>— Прошёл множество мастер-классов у звёзд эстрады<br>— Педагогический стаж 5 лет',
    genre: '— Эстрадно-джазовый вокал<br>—Поп-рок',
    genres: ['Джаз', 'Поп-рок']
  }
]

// Получение параметров get-запроса
function getUrlVar() {
  var urlVar = window.location.search; // получаем параметры из урла
  var arrayVar = []; // массив для хранения переменных
  var valueAndKey = []; // массив для временного хранения значения и имени переменной
  var resultArray = []; // массив для хранения переменных
  arrayVar = (urlVar.substr(1)).split('&'); // разбираем урл на параметры
  if (arrayVar[0] == "") {// если нет переменных в урле
    mainContainer.style = 'visibility: hidden'; //скрываем контейнер
    return false
  };
  for (i = 0; i < arrayVar.length; i++) { // перебираем все переменные из урла
    valueAndKey = arrayVar[i].split('='); // пишем в массив имя переменной и ее значение
    resultArray[valueAndKey[0]] = valueAndKey[1]; // пишем в итоговый массив имя переменной и ее значение
  }
  return resultArray; // возвращаем результат
}


//Берём имя из строки браузера
teacherEnglishNameGet = getUrlVar().name;

let teacherId = '';
try {
  teacherId = teachers.find(item => item.eName == teacherEnglishNameGet).id;
  teacherName.innerHTML = teachers[teacherId].fullName;
  teacherSubject.textContent = teachers[teacherId].subject;
  teacherEducation.innerHTML = teachers[teacherId].education;
  teacherAchievements.innerHTML = teachers[teacherId].achievements;
  teacherGenre.innerHTML = teachers[teacherId].genre;
  videoFile.src = teachers[teacherId].video;
  myPlayer.load();  
  
} catch (error) {
  mainContainer.style = 'visibility: hidden';
  console.log('error')
}







