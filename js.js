const entradaTexto = document.querySelector('#recebe-texto');
const saidaTexto = document.querySelector('#mostra-texto');
const btnCriptografar = document.querySelector('#btn-criptografar');
const btnDescriptografar = document.querySelector('#btn-descriptografar');
const btnCopiar = document.querySelector('#btn-copiar');
const matrixCod = [['e','enter'], ['i','imes'], ['a','ai'], ['o','ober'], ['u','ufat']];

btnCriptografar.onclick = encriptar;
btnDescriptografar.onclick = decriptar;
btnCopiar.onclick = copiaTexto;

function encriptar() {
    let aux = entradaTexto.value;
    for(let i = 0; i < matrixCod.length; i++) {
        if(aux.includes(matrixCod[i][0])) {
            aux = aux.replaceAll(matrixCod[i][0], matrixCod[i][1]);
        }
    }
    saidaTexto.value = aux;
    entradaTexto.value = '';
}

function decriptar() {
    let aux = entradaTexto.value;
    for(let i = 0; i < matrixCod.length; i++) {
        if(aux.includes(matrixCod[i][1])) {
            aux = aux.replaceAll(matrixCod[i][1], matrixCod[i][0]);
        }
    }
    saidaTexto.value = aux;
    entradaTexto.value = '';
}

function copiaTexto() {
    navigator.clipboard.writeText(saidaTexto.value);
    saidaTexto.value = "";
}





