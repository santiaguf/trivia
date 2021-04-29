const showName = () => {
  const nombreUsuario =  localStorage.getItem("nombre") === null ? 'personita': localStorage.getItem("nombre");
  document.getElementById("username").innerHTML=`${nombreUsuario}`;
}

const validateRadioButtons = (groupname) => {
	for(var i=0;i<groupname.length;i++){
    if(groupname[i].checked){
      return true;
    }
  }
  return false;
}

const getCupScore = () => {

  if(!validateRadioButtons(document.getElementsByName('p1')) ||
  !validateRadioButtons(document.getElementsByName('p2'))  ||
  !validateRadioButtons(document.getElementsByName('p3'))){
    alert('hay preguntas sin responder');
  }else{
    const answer1 = document.querySelector('input[name="p1"]:checked').value;
    const answer2 = document.querySelector('input[name="p2"]:checked').value;
    const answer3 = document.querySelector('input[name="p3"]:checked').value;

    const answers = [3, 3, 3];
    let score = 0;
    if(answer1 == answers[0]){
      score++;
    }
    if(answer2 == answers[1]){
      score++;
    }
    if(answer3 == answers[2]){
      score++;
    }

    switch (score) {
      case 0:
        alert('0 respuestas, sigue intentando');
      case 1:
        alert('1 respuesta correcta, conoces algo');
        break;
      case 2:
        alert('2 respuestas, vas por buen camino');
        break;
      case 3:
        alert('3 respuestas, así se hace!');
        break;
    }
  }
}

showName();

document.getElementById('clear-button').addEventListener('click', function () {
  const options = ["p1o1", "p1o2", "p1o3", "p1o4", "p2o1", "p2o2", "p2o3", "p2o4", "p3o1", "p3o2", "p3o3", "p3o4"];
  options.forEach(function(id) {
    document.getElementById(id).checked = false;
  });
  return false;
})
