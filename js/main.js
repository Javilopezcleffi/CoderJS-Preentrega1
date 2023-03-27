let nombre=prompt ("Cómo es tu nombre?")
console.log(nombre)
function presupuesto (largo, ancho) {


while (isNaN(largo)) {
    largo = prompt("Por favor, ingrese el largo en centímetros:");
  }
  
  while (isNaN(ancho)) {
    ancho = prompt("Ingrese el ancho en centímetros:");
  }
  
const costoVidrio = ancho * largo / 6.4
const perimetro = 2 * ancho + 2 * largo 
let costoMoldura
const precioMoldura = 200 
const costoOtros = 100

if (perimetro<244) {
costoMoldura = precioMoldura
} else if (perimetro >= 244 && perimetro <= 488) {
costoMoldura = (2 * precioMoldura);
  } else 
  costoMoldura = 3 * precioMoldura;

let costoEstimado = costoVidrio + costoMoldura + costoOtros
let precioFinal = parseInt (2 * costoEstimado)

let precioRedondeado = Math.ceil(precioFinal / 50) * 50;


console.log ("medidas: " + largo + "x" + ancho + " cm.");
console.log ("costo del vidrio: " + " " + parseInt(costoVidrio));
console.log ("perimetro: " + perimetro)
console.log ("costo de moldura: " + costoMoldura)
console.log ("precio final: " + precioRedondeado)

alert("El precio para tu marco de " + largo + " x " + ancho +" es de " + precioRedondeado + " pesos" )

}

presupuesto()

let repetir = prompt("¿Desea presupuestar otro marco? (si/no)");

if (repetir.toLowerCase() === "si") {
  presupuesto();
} else {
  alert("¡Hasta luego!");
}
