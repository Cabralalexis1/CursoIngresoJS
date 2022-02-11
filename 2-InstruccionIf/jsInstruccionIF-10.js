function mostrar()
{

	let numero;
	let maximo=10;
	let minimo=1;

	     numero=Math.round(Math.random() * (maximo - minimo) + minimo);

		 if(numero >= 9){
			 alert(" Excelente " + numero);

		 }
		 else if(numero < 4){
			 alert("vamos la proxiMA SE PUEDE " + numero);

		 }
		 else {
			 alert("Aprobo "+ numero);
		 }
	//Genero el número RANDOM entre 1 y 10 


}//FIN DE LA FUNCIÓN