// simulador de prestamos
// entradas

const TNA = 137.50;
const TEA = 267.92;
const CFTEA = 375.60;
const descuentoEstudiante = 10;
const montoSolicitadoMax = 5000000;
let interespaquete;  
let interescouta;   
let estudiante = "no";                                            

// preguntar si sos estudiante
let sosestudiante = ingresarestudiante();


// preguntar por tu tipo de paquete
let tipoPaquete = ingresartipopaquete();
interespaquete = calcularinterespaquete(tipoPaquete);

// preguntar por el monto del prestamo
let montoSolicitado = ingresarmontosolicitado();
// preguntar por la cantidad de coutas
let coutas = solicitarcoutas();
interescouta = calcularinterescouta(coutas);

if (coutas == 12 ) {
    interescouta = 80;
} else if (coutas == 24 ) {
    interespaquete = 160;
} else if (coutas == 36 ) {
    interescouta = 240;
} else {
    interescouta = 320;
}
console.log ("interes couta: " + interescouta);

// calculos de interes
valorcouta = calculovalorcouta()
// salida


// verificar si soy estudiante, realizo descuento
informarcalculodeprestamo();





 