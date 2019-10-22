// tabela
let dados = [
  { codigo: '1', cargo: 'Escrituário', percentual: 50 },
  { codigo: '2', cargo: 'Secretário', percentual: 35 },
  { codigo: '3', cargo: 'Caixa', percentual: 20 },
  { codigo: '4', cargo: 'Gerente', percentual: 10 },
  { codigo: '5', cargo: 'Diretor', percentual: null },
]


function calcular(codigo, salarioAtual) {
  let selecionado = dados.find(d => d.codigo == codigo);
  if (selecionado) {
    if (salarioAtual) {
      let cargoElement = document.getElementById('cargo');
      let valorElement = document.getElementById('valor');
      let novoSalarioElement = document.getElementById('novoSalario');
      let resposta = document.getElementById('resposta');
      resposta.style.display = 'initial';
      cargoElement.innerHTML = selecionado.cargo;
      if (selecionado.percentual == null) {
        valorElement.innerHTML = 'Não tem aumento';
      } else {
        valorElement.innerHTML = selecionado.percentual + '%';
      }
      let valorAumento = Number(salarioAtual) * selecionado.percentual / 100;
      valorElement.innerHTML = selecionado.percentual != null ? `R$ ${valorAumento.toFixed(2)}` : 'Não tem aumento';
      let novoSalario = selecionado.percentual != null ? Number(salarioAtual) + valorAumento : Number(salarioAtual);
      novoSalarioElement.innerHTML = `R$ ${novoSalario.toFixed(2)}`;
    } else {
      alert('Digite um salário!');
    }
  } else {
    alert('Código Inválido!');
  }
}

function limpar() {
  document.getElementById('cargo').innerHTML = '';
  document.getElementById('valor').innerHTML = '';
  document.getElementById('novoSalario').innerHTML = '';
  let resposta = document.getElementById('resposta');
  resposta.style.display = 'none';
}