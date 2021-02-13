var valor = 89;
var nota100 = 0;
var nota50 = 0;
var nota20 = 0;
var nota10 = 0;
var nota5 = 0;
var nota2 = 0;
var nota1 = 0;

if(valor != 0) {
if(valor >= 100) {
    nota100++;
    valor =- 100;
}

else if(valor >= 50) {
    nota50++;
    valor =- 50;
}

else if(valor >= 20) {
    nota20++;
    valor =- 20;
}

else if(valor >= 10) {
    nota10++;
    valor =- 10;
}

else if(valor >= 5) {
    nota5++;
    valor =- 5;
}

else if(valor >= 2) {
    nota2++;
    valor =- 2;
}

else if(valor = 1) {
    nota1++;
    valor =- 1;
    
}
}



console.log(`
${nota100} nota(s) de R$ 100,00\n
${nota50} nota(s) de R$ 50,00\n
${nota20} nota(s) de R$ 20,00\n
${nota10} nota(s) de R$ 10,00\n
${nota5} nota(s) de R$ 5,00\n
${nota2} nota(s) de R$ 2,00\n
${nota1} nota(s) de R$ 1,00\n
`)
