function alterarStatus(numDoJogo){
    let jogo = document.getElementById(`game-${numDoJogo}`);
    let imagem = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');
    
    if(imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContentL = 'Alugar'
    } else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver'
    }
}