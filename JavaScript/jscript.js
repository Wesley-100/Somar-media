function info(msg){
    Swal.fire(
        'info',
        msg,
        'info'
      )
}

function alert(msg){
    Swal.fire(
        'Erro',
        msg,
        'error'
      )
}

var modal = document.getElementById('janelaModal');
var jsonDataArray = [];
const jsonText = document.getElementById('novo');
const json = document.getElementById('json');
const aluno = document.getElementById('nome');
const nota1 = document.getElementById('nota1');
const nota2 = document.getElementById('nota2');
const nota3 = document.getElementById('nota3');
const nota4 = document.getElementById('nota4');
const spam = document.getElementById('cnome');
const spamN1 = document.getElementById('ne1');
const spamN2 = document.getElementById('ne2');
const spamN3 = document.getElementById('ne3');
const spamN4 = document.getElementById('ne4');

function calculateSumAndAverage(){
    const valor1 = parseFloat(nota1.value);
    const valor2 = parseFloat(nota2.value);
    const valor3 = parseFloat(nota3.value);
    const valor4 = parseFloat(nota4.value);       
}
    
// ERRO (NOME)
function errorNome(){
    aluno.style.border = '2px solid #FF0000'; // VERMELHO
    spam.style.display = 'block';
}

// TUDO CERTO (NOME)
function successNome(){
    aluno.style.border = '1px solid #00ff00'; // VERDE
    spam.style.display = 'none';
}

// ERRO (NOTA 1)
function ErroNota1(){
    nota1.style.border = '2px solid #FF0000'; // VERMELHO
    spamN1.style.display = 'block';
}

// TUDO CERTO (NOTA 1)
function SuccessNota1(){
    nota1.style.border = '1px solid #00ff00'; // VERDE
    spamN1.style.display = 'none';
}

// ERRO (NOTA 2)
function ErroNota2(){
    nota2.style.border = '2px solid #FF0000'; // VERMELHO
    spamN2.style.display = 'block';
}

// TUDO CERTO (NOTA 2)
function SuccessNota2(){
    nota2.style.border = '1px solid #00ff00'; // VERDE
    spamN2.style.display = 'none';
}

// ERRO (NOTA 3)
function ErroNota3(){
    nota3.style.border = '2px solid #FF0000'; // VERMELHO
    spamN3.style.display = 'block';
}

// TUDO CERTO (NOTA 3)
function SuccessNota3(){
    nota3.style.border = '1px solid #00ff00'; // VERDE
    spamN3.style.display = 'none';
}

// ERRO (NOTA 4)
function ErroNota4(){
    nota4.style.border = '2px solid #FF0000'; // VERMELHO
    spamN4.style.display = 'block';
}

// TUDO CERTO (NOTA 4)
function SuccessNota4(){
    nota4.style.border = '1px solid #00ff00'; // VERDE
    spamN4.style.display = 'none';
}

/* ==================================================== VALIDAÇÃO ====================================================
   ==================================================== IF / ELSE ====================================================
*/
// VALIDAÇÃO (NOME)
function finalizar(){
    if(aluno.value.length < 3 || aluno.value == ''){
        errorNome(aluno);
    }
    else{
        successNome(aluno);        
    }
}

// VALIDAÇÃO (NOTA 1)
function finalizarnota1(){
    if(nota1.value < 0 || nota1.value > 10 || nota1.value == ''){
        ErroNota1(nota1)
    }
    else(
        SuccessNota1(nota1)
    )
}

// VALIDAÇÃO (NOTA 2)
function finalizarnota2(){
    if(nota2.value < 0 || nota2.value > 10 || nota2.value == ''){
        ErroNota2(nota2)
    }
    else(
        SuccessNota2(nota2)
    )
}

// VALIDAÇÃO (NOTA 3)
function finalizarnota3(){
    if(nota3.value < 0 || nota3.value > 10 || nota3.value == ''){
        ErroNota3(nota3)
    }
    else(
        SuccessNota3(nota3)
    )
}

// VALIDAÇÃO (NOTA 4)
function finalizarnota4(){
    if(nota4.value < 0 || nota4.value > 10 || nota4.value == ''){
        ErroNota4(nota4)
    }
    else(
        SuccessNota4(nota4)
    )
}

// ================================================ FUNÇÃO DOS BOTÕES ================================================

// ============================================== FUNÇÃO DO BOTÃO "NOVO" =============================================
jsonText.addEventListener("click", function(){
    if(aluno.value.length > 2){
        successNome();
    } if(nota1.value > -1 && nota1.value < 11){
        SuccessNota1();
    } if(nota2.value > -1 && nota2.value < 11){
        SuccessNota2();
    } if(nota3.value > -1 && nota3.value < 11){
        SuccessNota3();
    } if(nota4.value > -1 && nota4.value < 11){
        SuccessNota4();
    } if(aluno.value.length < 3 || nota1.value == '' || nota2.value == '' || nota3.value == '' || nota4.value == '' || 
        nota1.value > 10 || nota2.value > 10 || nota3.value > 10 || nota4.value > 10 || nota1.value < 0 || nota2.value < 0 || nota3.value < 0 || nota4.value < 0){
        alert('Preencha todos os campos corretamente')
        if(aluno.value.length == '' || aluno.value.length < 2){
            errorNome();
        }
        if(nota1.value == ''){
            ErroNota1();
        }
        if(nota2.value == ''){
            ErroNota2();
        }
        if(nota3.value == ''){
            ErroNota3();
        }
        if(nota4.value == ''){
            ErroNota4();
        }
    }else{
            const soma = parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value) + parseFloat(nota4.value);
            const media = soma / 4;
            var Cod = jsonDataArray.length +1;
            var data = {
                "Cod": Cod,
                "Nome": aluno.value,
                "Nota1": nota1.value,
                "Nota2": nota2.value,
                "Nota3": nota3.value,
                "Nota4": nota4.value,
                "Media": media.toFixed(2),
            }
            jsonDataArray.push(data);
            LimpaCampos();
        }
        
});


// =========================================== FUNÇÃO DO BOTÃO "FINALIZAR" ===========================================

const codigosNaTabela = {}; // Objeto para manter o controle dos códigos na tabela

function bvalidacao() {

    if(jsonDataArray.length > 0){
        var tableBody = document.querySelector("#tabela tbody");
        
        $('#modal').modal('show');

        document.getElementById("tabela").style.display = 'block';

        jsonDataArray.forEach(function (data) {

            if (!codigosNaTabela[data.Cod]){ 
                var row = tableBody.insertRow();

                row.insertCell(0).textContent = data.Nome;
                row.insertCell(1).textContent = data.Nota1;
                row.insertCell(2).textContent = data.Nota2;
                row.insertCell(3).textContent = data.Nota3;
                row.insertCell(4).textContent = data.Nota4;
                row.insertCell(5).textContent = data.Media;

                codigosNaTabela[data.Cod] = true;
            }
        });
    }else{
        info("Informe o nome e as notas de pelo menos um aluno para continuar")
    }
    
}


// =========================================== FUNÇÃO DO BOTÃO "TROCAR TURMA" ========================================
function tTurma(){
    window.location.href = 'index1.html'
}

// ADICIONAR OS DADOS QUE FORAM DECLARADOS PARA QUE OS CAMPOS SEJAM LIMPOS
function LimpaCampos(){
    document.getElementById('nome').value = ''
    document.getElementById('nota1').value = ''
    document.getElementById('nota2').value = ''
    document.getElementById('nota3').value = ''
    document.getElementById('nota4').value = ''

    aluno.style.border = 'none';
    nota1.style.border = 'none';
    nota2.style.border = 'none';
    nota3.style.border = 'none';
    nota4.style.border = 'none';
}