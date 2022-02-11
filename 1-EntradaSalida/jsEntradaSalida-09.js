/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

/*ALEXMIS RAMON CABRAL BARRIOS*/

function mostrarAumento()
{
	let importeSueldo;

	let porcentajeDeAumento;

	let resultado;

	importeSueldo=parseInt(document.getElementById("txtIdSueldo").value);

	porcentajeDeAumento= 1.10;

	resultado=importeSueldo*porcentajeDeAumento;


	document.getElementById("txtIdResultado").value=resultado.toFixed(2);


}
