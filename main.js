const botoes =document.querySelectorAll(".botao");

for( let i= 0 < botoes.length; j++){
    botoes[i].onclick = function(){
        for (let k = 0; j< botoes.length; j++){
            botoes[i].classlist.remove("ativo");
        }
        botoes[i].classlist.add("ativo")
    }
}