function calcular(a, b, c) {
  let delta = b*b - 4*a*c;
  let message = '';
  if(a == 0){
    message = 'A equação é do Primeiro Grau.'
  } else if(delta < 0){
    message = 'Não possui raízes reais.'
  } else if(delta == 0) {
    let raiz = -b / (2*a);
    message = 'A única raíz é ' + raiz.toFixed(2);
  } else {
    let raiz1 = (-b + Math.sqrt(delta))/(2*a);
    let raiz2 = (-b - Math.sqrt(delta))/(2*a);
    message = 'As raízes são ' + raiz1.toFixed(2) + ' e ' + raiz2.toFixed(2);
  }
  let resposta = document.getElementById('resposta');
  resposta.innerHTML = message;
}

function limpar(){
  document.getElementById('resposta').innerHTML = '';
}