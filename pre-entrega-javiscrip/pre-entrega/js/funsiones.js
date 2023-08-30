function ingresarestudiante() {
   let sosestudiante =  prompt ("sos estudiante?\n1- si\n2- no");

    while (sosestudiante != 1 && coutas != 2) {
        alert("solo es posible indicar 1- sos estudiante o 2- no sos estudiante!");
        sosestudiante = prompt ("sos estudiante?\n1- si\n2- no");
    }
    console.log ("sos estudiante: " + sosestudiante);
    return sosestudiante;
}

function ingresartipopaquete() {
    let tipoPaquete = prompt("ingrese el tipo de paquete: identite/gold/otro:").toUpperCase();

    if (tipopaquete == "IDENTITE") {
        interespaquete = 30;
    } else if (tipopaquete == "GOLD") {
        interespaquete = 40;
    } else {
        interespaquete = 50;
    }
    console.log ("interes paquete: " + interespaquete);
    return tipoPaquete;
}

function calcularinterespaquete(tipoPaquete) {
    if (tipopaquete == "IDENTITE") {
        interespaquete = 30;
    } else if (tipopaquete == "GOLD") {
        interespaquete = 40;
    } else {
        interespaquete = 50;
    }
    
    return interespaquete;
}

function ingresarmontosolicitado() {
    let montoSolicitado = parseFloat(prompt("ingrese el monto del prestamo: (máx: $" + montoSolicitadoMax + ")"));


    while (montosolicitado > montoSolicitadoMax) {
        alert("superaste el monto maximo permitido! Máx: $" + montoSolicitadoMax);
        let montoSolicitado = parseFloat(prompt("ingrese el monto del prestamo: (máx: $" + montoSolicitadoMax + ")"));
        if (montoSolicitado <= montoSolicitadoMax) {
            break;
        }
    }
    
    return montoSolicitado;
}

function solicitarcoutas() {
    let coutas = parseInt(prompt("ingrese la cantidad de coutas: 12/24/36/48")); // 17

    while (coutas != 12 && coutas != 24 && coutas != 36 && coutas != 48) {
        alert("solo es posible solicitar en 12/24/36/48 coutas!");
        coutas = parseInt(prompt("ingrese la cantidad de coutas: 12/24/36/48"));
    }
    
    return coutas;

}

function calcularinterescouta(coutas) {
    if (coutas == 12 ) {
        interescouta = 80;
    } else if (coutas == 24 ) {
        interespaquete = 160;
    } else if (coutas == 36 ) {
        interescouta = 240;
    } else {
        interescouta = 320;
    }
    

    return interescouta;
}

function calculovalorcouta() {
        let coutapura = montoSolicitado / coutas;
    let interespaquetecouta = interespaquete / coutas;
    let interescoutacouta = interescouta / coutas;
    let tnacouta = TNA / coutas;
    let teacouta = TEA / coutas;
    let cfteacoutas = CFTEA / coutas;
    let coutapurainterespaquetecouta = (coutapura * interespaquetecouta) / 100;
    console. log (coutapurainterespaquetecouta);
    let coutapurainterescoutacouta = (coutapura * interespaquetecouta) / 100;
    console. log (coutapurainterespaquetecouta);
    let coutapuratnacouta= (coutapura * tnacouta) / 100;
    console. log (coutapuratnacouta);
    let coutapurateacouta = (coutapura * teacoutacouta) / 100;
    console. log (coutapurateacouta);
    let coutapuracfteacouta = (coutapura * cfteacoutascouta) / 100;
    console. log (coutapuracfteacouta);

    let valorcouta = coutapura + coutapurainterespaquetecouta + coutapurainterescoutacouta + coutapuratnacouta + coutapurateacouta + coutapuracfteacouta;
    console.log("valor de couta: $" + valorcouta);
return valorcouta;
}

function informarcalculodeprestamo() {
        if (sosestudiante == 1) {
            valorcouta = valorcouta - ((valorcouta * descuentoEstudiante) / 100);
            console.log("descuento aplicado: $" + valorcouta);
            estudiante = "si";
        }
        
        let salida = "SIMULADOR DE PRESTAMO:\n\n";
        salida += "sos estudiante: " + estudiante + "\n";
        salida += "tipo de paquete: " + tipoPaquete + "\n";
        salida += "monto del prestamo: $" + montoSolicitado + "\n";
        salida += "coutas: " + coutas + "\n\n";
        salida += "total a pagar: \n";
        salida += coutas + "coutas de $" + valorcouta.toFixed(2);
        alert(salida);
}