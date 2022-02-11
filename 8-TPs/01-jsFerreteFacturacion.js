/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

/*Alexis Ramon Cabral Barrios*/

function Sumar () 
{
    let producto1;
    let producto2;
    let producto3;
    let resultadoSuma;

    producto1=parseInt(document.getElementById("txtIdPrecioUno").value);
    producto2=parseInt(document.getElementById("txtIdPrecioDos").value);
    producto3=parseInt(document.getElementById("txtIdPrecioTres").value);

    resultadoSuma=producto1+producto2+producto3;

    alert(" la suma es de " + resultadoSuma);
	
}


function Promedio () 
{


    let producto1;
    let producto2;
    let producto3;
    let resultadoFinal;

    producto1=parseInt(document.getElementById("txtIdPrecioUno").value);
    producto2=parseInt(document.getElementById("txtIdPrecioDos").value);
    producto3=parseInt(document.getElementById("txtIdPrecioTres").value);

    resultadoFinal=(producto1 + producto2 + producto3) / 3;

    alert(" El promedio es de " + resultadoFinal.toFixed(2));

	
}

function PrecioFinal () 
{

    let producto1;
    let producto2;
    let producto3;
    const IVA=1.21;
    let resultadoFinal;

    producto1=parseInt(document.getElementById("txtIdPrecioUno").value);
    producto2=parseInt(document.getElementById("txtIdPrecioDos").value);
    producto3=parseInt(document.getElementById("txtIdPrecioTres").value); 

    resultadoFinal=(producto1+producto2+producto3) * IVA;


    alert(" El precio final es de " + resultadoFinal.toFixed(2));
	
}