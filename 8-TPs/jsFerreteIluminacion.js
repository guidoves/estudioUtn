/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	

 	var cantidad = document.getElementById('Cantidad').value;
  	var marca = document.getElementById('Marca').value;
  	var precioBruto = 35*cantidad;
  	var descuento;


 	switch (marca){

 		case "ArgentinaLuz":

 			if (cantidad == 3){

 				descuento = 0.85; //descuento 15%
 				
 			}else{

 				if (cantidad == 4){

 					descuento = 0.75; //descuento 25%

 				}else{

 					if( cantidad == 5){

 						descuento = 0.6; //descuento 40%
 					}else{

 						if( cantidad >= 6){

 							descuento = 0.5; //descuento 50%
 						}else{

 							descuento = 1; // sin descuento

 							}						
 						}
 					}
 				}

 				break; 	

 				case "FelipeLamparas" :

 			if (cantidad == 4){

 				descuento = 0.75; //descuento 25%
 			
 			}else{

 				if (cantidad == 3){

 					descuento = 0.9; //descuento 10%
 				
 				}else{

 					if (cantidad == 5){

 						descuento = 0.7; //descuento 30%
 					
 					}else{

 						if (cantidad >= 6){

 							descuento = 0.5; //descuento 50%
 						
 						}else{

 							descuento = 1; //sin descuento
 							
 							}	
 						}
 					}
 				}

 				break;

 				default:

 					if (cantidad >= 6){

 						descuento = 0.5; //descuento 50%

 					}else{

 						if (cantidad == 5){

 							descuento = 0.7; //descuento 30%
 						
 						}else{

 							if (cantidad == 4){

 								descuento = 0.8; //descuento 20%
 							
 							}else{

 								if (cantidad ==3){

 									descuento = 0.95; //descuento 5%
 								
 								}else{

 									descuento = 1; //sin descuento
 								}
 							}
 						}
 					}

 					break;

 			}//switch (marca)
 		


 	var precioNeto = precioBruto*descuento;
 	document.getElementById('precioDescuento').value=precioNeto;

 	if(precioNeto > 120){

 		var ingresosBrutos;
 		ingresosBrutos = precioNeto*0.1;

 		alert("Usted pago "+ingresosBrutos+"$ de impuestos.");
 	}

}//function CalcularPrecio () 
