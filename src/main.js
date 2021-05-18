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

const showResultStadium = () => {
  document.getElementById('question6').style.display = 'none';
  document.getElementById('enviarStadium').style.display = 'block';
}

const showQ6 = () => {
  document.getElementById('question5').style.display = 'none';
  document.getElementById('question6').style.display = 'block';
}

const showQ5 = () => {
  document.getElementById('question4').style.display = 'none';
  document.getElementById('question5').style.display = 'block';
}

const showQ4 = () => {
  document.getElementById('question4').style.display = 'block';
  document.getElementById('question5').style.display = 'none';
  document.getElementById('question6').style.display = 'none';
  document.getElementById('enviarStadium').style.display = 'none';
}

const showResultCup = () => {
  document.getElementById('question3').style.display = 'none';
  document.getElementById('enviarCup').style.display = 'block';
}

const showQ3 = () => {
  document.getElementById('question2').style.display = 'none';
  document.getElementById('question3').style.display = 'block';
}

const showQ2 = () => {
  document.getElementById('question1').style.display = 'none';
  document.getElementById('question2').style.display = 'block';
}

const showQ1 = () => {
  document.getElementById('question1').style.display = 'block';
  document.getElementById('question2').style.display = 'none';
  document.getElementById('question3').style.display = 'none';
  document.getElementById('enviarCup').style.display = 'none';
}

const showCup = () => {

  Array.from( document.querySelectorAll('input[name="p1"]:checked'), input => input.checked = false );
  Array.from( document.querySelectorAll('input[name="p2"]:checked'), input => input.checked = false );
  Array.from( document.querySelectorAll('input[name="p3"]:checked'), input => input.checked = false );

  document.getElementById('options').style.display = 'none';
  document.getElementById('stadium').style.display = 'none';
  document.getElementById('cup').style.display = 'block';
  showQ1();
}

const showStadium = () => {

  Array.from( document.querySelectorAll('input[name="p4"]:checked'), input => input.checked = false );
  Array.from( document.querySelectorAll('input[name="p5"]:checked'), input => input.checked = false );
  Array.from( document.querySelectorAll('input[name="p6"]:checked'), input => input.checked = false );

  document.getElementById('options').style.display = 'none';
  document.getElementById('stadium').style.display = 'block';
  document.getElementById('cup').style.display = 'none';
  showQ4();
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
    if (RealAnswers[index] === parseInt(UserAnswers[index], 10)) {
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

const q1Btn = document.getElementById('q1Btn');
q1Btn.addEventListener('click', () => {
  showQ2();
});

const q2Btn = document.getElementById('q2Btn');
q2Btn.addEventListener('click', () => {
  showQ3();
});

const q3Btn = document.getElementById('q3Btn');
q3Btn.addEventListener('click', () => {
  showResultCup();
});

const q4Btn = document.getElementById('q4Btn');
q4Btn.addEventListener('click', () => {
  showQ5();
});

const q5Btn = document.getElementById('q5Btn');
q5Btn.addEventListener('click', () => {
  showQ6();
});

const q6Btn = document.getElementById('q6Btn');
q6Btn.addEventListener('click', () => {
  showResultStadium();
});