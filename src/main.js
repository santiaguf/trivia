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

const intro = () => {
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