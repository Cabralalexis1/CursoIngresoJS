/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

/*ALEXIS RAMON CABRAL BARRIOS*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let cantidadAlambre;

    largo=parseFloat(document.getElementById("txtIdLargo").value);
    ancho=parseFloat(document.getElementById("txtIdAncho").value);

    perimetro=(largo * ancho) * 2;

    cantidadAlambre=perimetro * 3;

    alert("La cantidad de alambre a comprar es " + cantidadAlambre.toFixed(2));
      
}

function Circulo () 
{
    let radio;
    let perimetro;
    let cantidadAlambre;

    radio=parseFloat(document.getElementById("txtIdRadio").value);
    perimetro=(2 * 3.14) * radio;
    cantidadAlambre=perimetro * 3;

    alert("La cantidad de alambre necesaria es " + cantidadAlambre.toFixed(2));


	
}
function Materiales () 
{
    let largo;
    let ancho;
    let area;
    let material1;
    let material2;

    largo=parseFloat(document.getElementById("txtIdLargo").value);
    ancho=parseFloat(document.getElementById("txtIdAncho").value);
    area=largo * ancho

    material1= area * 2;
    material2=area * 3;

    alert("La cantidad de cemento necesaria es " + material1 + " y la cantida de cal es " + material2);


}