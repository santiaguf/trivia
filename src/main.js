/*
  Aquí va tu JavaScript
*/

const saveName = () => {
  const nombreUsuario =  document.getElementById("name").value === null ? 'personita': document.getElementById("name").value;
  localStorage.setItem("nombre", nombreUsuario);
}

const getName = () => {
  const nombreUsuario =  localStorage.getItem("nombre") === null ? 'personita': localStorage.getItem("nombre");
  return document.getElementById("name").value=`${nombreUsuario}`;
}
