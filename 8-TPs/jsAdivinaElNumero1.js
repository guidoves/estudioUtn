/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	
	alert("Bienvenido y mucha suerte!");		 
	numeroSecreto = Math.floor((Math.random()*100)+1);
	contadorIntentos=1;
}

function verificar()
{
	if (contadorIntentos>=1){

			var ingreso = document.getElementById('numero').value;

		if(numeroSecreto == ingreso){

			alert("Usted es el ganador, y solo en "+contadorIntentos+" intentos.");

			contadorIntentos=0;
	
		}else{

			contadorIntentos++;

			if(ingreso > numeroSecreto){

				alert("Se paso!");
			}else{
				alert("Le falto!");
			}
		}
	}else{

		alert("Primero debe presionar el boton comenzar!");	
	
	}
	
	
}