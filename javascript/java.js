/*declarando variáveis*/
let altura;
let peso;
let imc;
/*criando uma função para calculo do IMC*/
/*comentario de bloco*/
//comentario de linha*/
function calcImc(){
    let altura = (document.getElementById("al").value)/100;//divisão por100 para converter em metros.
    let peso = document.getElementById("ps").value.

    //converter para número
    altura = parseFloat(altura);
    /*
    tipod de dados:
    int = números interos
    float = de ponto flutuante, exemplo o preço da gasolina 6,27
    string = texto
    boolean = verdadeiro ou falso
    */
   peso = parseFloat(peso);


imc = peso / (altura * altura)//calcular o IMC
window.alert('Seu IMC é:'+imc);//mostrando o imc em janela
}
function alternarTema_escuro(){
    const corpo = document.body; //corpo do html
    corpo.classList.toggle("escuro");
    corpo.classList.toggle("claro");
}
function alternarTema_escuro(){
    const corpo = document.body; //corpo do html
    corpo.classList.toggle("escuro");
    corpo.classList.toggle("claro");
 }