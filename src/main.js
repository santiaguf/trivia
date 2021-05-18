/*
  Aquí va tu JavaScript
*/

const saveName = () => {
  const nombreUsuario =  document.getElementById("name").value === null ? 'personita': document.getElementById("name").value;
  localStorage.setItem("nombre", nombreUsuario);

  document.getElementById('intro').style.display = 'none';
  document.getElementById('options').style.display = 'block';

  getName();
}

const getName = () => {
  const nombreUsuario =  localStorage.getItem("nombre") === null ? 'personita': localStorage.getItem("nombre");
  document.getElementById("name").value=`${nombreUsuario}`;
  document.getElementById("username").textContent =`${nombreUsuario}`;
}

const showIntro = () => {
  document.getElementById('intro').style.display = 'block';
  document.getElementById('options').style.display = 'none';
  document.getElementById('cup').style.display = 'none';
  document.getElementById('stadium').style.display = 'none';
}

const showCup = () => {
  document.getElementById('options').style.display = 'none';
  document.getElementById('stadium').style.display = 'none';
  document.getElementById('cup').style.display = 'block';
}

const showStadium = () => {
  document.getElementById('options').style.display = 'none';
  document.getElementById('stadium').style.display = 'block';
  document.getElementById('cup').style.display = 'none';
}

const clearRadioButtons = () => {
  Array.from( document.querySelectorAll('input[name="p1"]:checked'), input => input.checked = false );
  Array.from( document.querySelectorAll('input[name="p2"]:checked'), input => input.checked = false );
  Array.from( document.querySelectorAll('input[name="p3"]:checked'), input => input.checked = false );
  Array.from( document.querySelectorAll('input[name="p4"]:checked'), input => input.checked = false );
  Array.from( document.querySelectorAll('input[name="p5"]:checked'), input => input.checked = false );
  Array.from( document.querySelectorAll('input[name="p6"]:checked'), input => input.checked = false );
}

const validateRadioButtons = (groupname) => {
	for(var i=0;i<groupname.length;i++){
    if(groupname[i].checked){
      return true;
    }
  }
  return false;
}

const calculateFinalScore = (UserAnswers, RealAnswers) => {
  let score = 0;

  for (let index = 0; index < UserAnswers.length; index++) {
    if(UserAnswers[index] === RealAnswers[index]){
      score++;
    }
  }

  const scoresMessages = ['0 respuestas, sigue intentando','1 respuesta correcta, conoces algo','2 respuestas, vas por buen camino','3 respuestas, así se hace!'];
  alert(scoresMessages[score]);
}

const getCupScore = () => {

  if(!validateRadioButtons(document.getElementsByName('p1')) ||
  !validateRadioButtons(document.getElementsByName('p2'))  ||
  !validateRadioButtons(document.getElementsByName('p3'))){
    alert('hay preguntas sin responder');
  }else{
    let UserAnswers = [];
    UserAnswers.push(document.querySelector('input[name="p1"]:checked').value);
    UserAnswers.push(document.querySelector('input[name="p2"]:checked').value);
    UserAnswers.push(document.querySelector('input[name="p3"]:checked').value);

    const Realanswers = [2, 1, 3];
    calculateFinalScore(UserAnswers, Realanswers);

  }
}

const getStadiumScore = () => {

  if(!validateRadioButtons(document.getElementsByName('p4')) ||
  !validateRadioButtons(document.getElementsByName('p5'))  ||
  !validateRadioButtons(document.getElementsByName('p6'))){
    alert('hay preguntas sin responder');
  }else{
    let UserAnswers = [];
    UserAnswers.push(document.querySelector('input[name="p4"]:checked').value);
    UserAnswers.push(document.querySelector('input[name="p5"]:checked').value);
    UserAnswers.push(document.querySelector('input[name="p6"]:checked').value);

    const Realanswers = [3, 3, 3];
    calculateFinalScore(UserAnswers, Realanswers);

  }
}

const saveNameBtn = document.getElementById('saveName');
saveNameBtn.addEventListener('click', () => {
  saveName();
});

const cupScoreBtn = document.getElementById('submitCup');
cupScoreBtn.addEventListener('click', () => {
  getCupScore();
});

const stadiumScoreBtn = document.getElementById('submitStadium');
stadiumScoreBtn.addEventListener('click', () => {
  getStadiumScore();
});

const introBtn = document.getElementsByClassName('intro');
for(let el of introBtn){
  el.addEventListener('click', () => {
    showIntro();
  })
}

const cupBtn = document.getElementsByClassName('cup');
for(let el of cupBtn){
  el.addEventListener('click', () => {
    showCup();
  })
}

const stadiumBtn = document.getElementsByClassName('stadium');
for(let el of stadiumBtn){
  el.addEventListener('click', () => {
    showStadium();
  })
}

const clearBtn = document.getElementsByClassName('clear');
for(let el of clearBtn){
  el.addEventListener('click', () => {
    clearRadioButtons();
  })
}
