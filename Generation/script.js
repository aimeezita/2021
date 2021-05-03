

    
function enviar(){
 
    var nome = document.querySelector("#nome").value;
    var email = document.querySelector("#email").value;
    var mensagem = document.querySelector("#msg").value;

    
    if (nome != "" && email != "" &&  mensagem != ""){
        alert("Muito Obrigade " + nome + " pelo seu contato")
    }
    
    else{
        alert("Você precisa preencher todos os campos")
    }
    
    }
