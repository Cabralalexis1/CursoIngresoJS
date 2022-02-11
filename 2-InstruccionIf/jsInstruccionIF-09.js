

function mostrar()
{
	let numero;
	let maximo=10;
	let minimo=1;

	     numero=Math.round(Math.random() * (maximo - minimo) + minimo);

		 if(numero > 9){
			 alert(Excelente);

		 }
		 else if(numero > 4){
			 alert("Aprobo");
		 }

}//FIN DE LA FUNCIÓN