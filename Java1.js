
function Uno() {
    let numUsu1 = document.getElementById('numUsu1').value
    let resultado1 = 0
    for (a = 0; a <= numUsu1; a++) {
        resultado1 = resultado1 + a
    }
    document.getElementById('resultado1').innerHTML = resultado1
}

function Dos() {
    let numUsu2 = document.getElementById('numUsu2').value
    if (numUsu2 % 2 == 0) {
        let resultado2 = document.getElementById('resultado2')
        resultado2.innerHTML = " " + "Par";
    } else {
        resultado2.innerHTML = " " + "Impar";
    }
}

function Tres() {
    let menorMayorEdad = document.getElementById('Edad').value
    let genero = document.getElementById('Genero')
    let reclamar = document.getElementById('reclamar')
    if (menorMayorEdad <= 10) {
        reclamar.innerHTML = " " + "reclama un jugo"
        let reclamar2 = document.getElementById('reclamar2')
        reclamar2.innerHTML = "";
    } else if (menorMayorEdad >= 18){
        reclamar.innerHTML = " " + "reclama una cerveza"
        let reclamar2 = document.getElementById('reclamar2')
        if (genero.value == 'Hombre') {
            reclamar2.innerHTML = " Una porcion de pizza tres carnes";
        } else if (genero.value == "Mujer") {
            reclamar2.innerHTML = " Una porcion de pizza Hawaiana";
        }
    
    }else if(menorMayorEdad >= 10 && menorMayorEdad <= 18){
        reclamar.innerHTML = "No recibes nada"
        let reclamar2 = document.getElementById('reclamar2')
        reclamar2.innerHTML = "";
    }
    }


function Quinto() {
        let numeroSolicitado = document.getElementById("numero").value
        let cantidad = document.getElementById("hasta_cuanto").value
        let tablacompleta = document.getElementById("tabla_multiplicar")
        for (let x = 0; x <= cantidad; x++) {
            console.log('tabla_multiplicar')
            tablacompleta.innerHTML += `${x} x ${numeroSolicitado} = ${numeroSolicitado * x} <br>`
        }
    }
        

function Sexto() {
    let promedio = document.getElementById("promedio").value
    let valorMatricula = 1000000
    let Matricula1 = document.getElementById("Matricula")
    if (promedio <= 3) {
        Matricula1.innerHTML = " " + "1000000" +  " " + "No tienes descuento"
    } else if (promedio > 3 && promedio <= 4) {
        Matricula1.innerHTML = (" " + valorMatricula*.95)
    } else {
        Matricula1.innerHTML = (" " + valorMatricula*.5)
    }
}









