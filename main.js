const botoes = document.querySelectorAll(".botao");

for(let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
        }
    
    botoes [i].classList.add("ativo");
    };
}





const contadores = document.querySelectorAll(".contador");
const tempoObjetivol = new Date("2026-10T00:00:00"):
let tempoAtual = new Date();