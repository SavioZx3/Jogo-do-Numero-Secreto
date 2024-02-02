let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
mensagemInicial();


function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 100 + 1);
}



function mensagemInicial() {
  mostraTextoNaTela('h1', 'Jogo do número secreto');
  mostraTextoNaTela('P', `escolha um número de 1 a 100`);
  
}
function mostraTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}




function verificarChute() {
   let chute = document.querySelector('input').value;

   if(chute == numeroSecreto){
    mostraTextoNaTela('h1', 'Você acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemAcerto = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`;
    mostraTextoNaTela('p', mensagemAcerto);
    document.getElementById('reiniciar').removeAttribute('disabled');

   } else{
    if(chute > numeroSecreto){
      mostraTextoNaTela('p', 'O número secreto é menor que ' + chute);
    } else {
      mostraTextoNaTela('p', 'O número secreto é maior que ' + chute);
    }
   }  
   tentativas++;
   apagaChute();
}



function apagaChute() {
  chute = document.querySelector('input');
  chute.value = '';
}



function reiniciarJogo() {
  gerarNumeroAleatorio();
  apagaChute();
  tentativas = 1;
  mensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}