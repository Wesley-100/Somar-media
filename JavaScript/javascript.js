
const form = document.getElementById('form1');
const nome = document.getElementById('professor'); 
const turma = document.getElementById('turma');
const spam1 = document.getElementById('um');
const spam2 = document.getElementById('dois');
const nulo = document.getElementById('nulo');
const vazio = document.getElementById('vazio');

// NOME
function setError(){
    nome.style.border = '2px solid red';
    spam1.style.display = 'block';
}
function setSuccess(){
    nome.style.border = '1px solid #00ff00';
    spam1.style.display = 'none';
}

// TURMA
function setERROR(){
    turma.style.border = '2px solid red';
    spam2.style.display = 'block';
}
function setSUCCESS(){
    turma.style.border = '1px solid #00ff00';
    spam2.style.display = 'none';
}

// VALIDAÇÃO NOME
function validacaoNome(){
    if(nome.value.length < 3){
        setError(nome, spam1)
    }
    else{
        setSuccess(nome, spam1)
    }
}

function validacaoTurma(){
    if(turma.value.length < 3){
        setERROR(turma, spam2)
    }
    else{
        setSUCCESS(turma, spam2)
    }
}

function validacaoBotão(){
    if(nome.value.length > 2 & turma.value.length > 2){
        window.location.href = "dados.html"
    }

    else{
        setError(nome, spam1);
        setERROR(turma, spam2);
        
        if (nome.value.length > 2){
            setSuccess(nome);
        }

        else if (turma.value.length > 2){
            setSUCCESS(turma);
        }
        else if (nome.value.length < 3){
            setError(nome, spam1);  
        }
    
        else if (turma.value.length < 3){
            setERROR(turma, spam2);
        }
    }
}