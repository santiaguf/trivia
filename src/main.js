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

const saveNameBtn = document.getElementById('saveName');
saveNameBtn.addEventListener('click', () => {
  saveName();
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
