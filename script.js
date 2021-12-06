// Carne - 400g por pessoa, + de 6 horas passa a ser 650g
// Cerveja - 1200ml por pessoa, + de 6 horas passa a ser 2000ml
// Refrigerante/água - 1000ml por pessoa, + de 6 horas passa a ser 1500ml

// Criança vale por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("result");
 

let qtdTotalCarne = null;
let qtdTotalCerveja = null;
let qtdTotalBebidas = null;


function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    qtdTotalCarne = (carnePP(duracao) * adultos) + (carnePP(duracao) * criancas / 2);
    qtdTotalCerveja = cervejaPP(duracao) * adultos;
    qtdTotalBebidas = (bebidaPP(duracao) * adultos) + (bebidaPP(duracao) * criancas / 2);

    mostrar();
}

function carnePP(duracao) {
    if(duracao >= 6) {
        return 650
    }else {
        return 400
    }
}

function cervejaPP(duracao) {
    if(duracao >= 6) {
        return 2000
    }else {
        return 1200
    }
}

function bebidaPP(duracao) {
    if(duracao >= 6) {
        return 1500
    }else {
        return 1000
    }
}


function mostrar(){
    resultado.innerHTML = `<div class="icon"> <img src="assets/beef.png"> <span>${qtdTotalCarne / 1000} Kg de carne</span></div>`;
    resultado.innerHTML += `<div class="icon"> <img src="assets/beer.png"> <span>${Math.ceil(qtdTotalCerveja / 269)} Latas de cerveja</span> </div>`;
    resultado.innerHTML += `<div class="icon"> <img src="assets/bottle.png"> <span>${Math.ceil(qtdTotalBebidas / 2000)} Garrafas de Refrigerante/Água<span> </div>`;

    resultado.innerHTML += `<p> Bom churrasco! <p>`;
}

function limpar() {
    document.location.reload();
}