var Leonardo = window.document.getElementById("Leonardo")
var Bruna = window.document.getElementById("Bruna")
var Samanta = window.document.getElementById("Samanta")
var Setd = window.document.getElementById("seta-direita")
var Setesq = window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    Leonardo.style = "display:none"
    Samanta.style = "display:flex"
    Setd.style = "display:none"
    Setesq.style = "display:flex; margin-top: 55px"
}

function RolarParaEsquerda(){
    Leonardo.style = "display: flex"
    Samanta.style = "display: none"
    Setd.style = "display: flex; margin-top: 55px"
    Setesq.style = "display: none"
}