/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
Alegre Bartolucci, Matias*/
function mostrar()
{
let nombre;
nombre=prompt("Ingrese su nombre");
document.getElementById("txtIdNombre").value = nombre;
}

