
//Variáveis de Controle de Interface
let seuVotoPara = document.querySelector('.cabecalho span');
let cargo = document.querySelector('.cargo span');
let info =  document.querySelector('.info');
let instrucoes = document.querySelector('.instrucoes');
let fotoColuna = document.querySelector('.tela-right');
let numeros = document.querySelector('.numeros');
let quadradinhos = document.querySelector('.numero');


//Variáveis de controle de ambiente
let etapaAtual = 0;



//Funções

function clickou(n){
    alert('Clicou em '+n);
}

function branco(){
    alert('Clicou em BRANCO');
}

function corrige(){
    alert('Clicou em CORRIGE ');
}

function confirma(){
    alert('Clicou em CONFIRMA');
}


function comecarEtapa(){
    let etapa = etapas[etapaAtual];
    let = numeroHTML = '';
    

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    info.innerHTML = '';
    instrucoes.style.display = 'none';
    fotoColuna.innerHTML = '';
    numeros.innerHTML = numeroHTML;

}
