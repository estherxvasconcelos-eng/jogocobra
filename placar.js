const placar = {
largura:800,
altura:60,
corFundo:"grey",
corTexto:"white",
pontuação:0,
desenhar(){
    canvasCtx.fillStyle=this.corFundo;
    canvasCtx.fillRect(0,0,this.largura,this.altura)
    }


}
placar.desenhar();