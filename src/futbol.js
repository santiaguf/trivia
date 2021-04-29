function showName(){
  const nombreUsuario =  localStorage.getItem("nombre") === null ? 'personita': localStorage.getItem("nombre");
  document.getElementById("username").innerHTML=`${nombreUsuario}`;
}

showName();