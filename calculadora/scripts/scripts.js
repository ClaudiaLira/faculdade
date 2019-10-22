function calcular(operation, value1, value2) {
  try {
    let response = '';
    if (!Number(value1) || (value2 && !Number(value2)))
      throw 'Valor informado não é um número!'
    switch (operation) {
      case 'fatorial':
        response = fatorial(value1);
        break;
      case 'quadrado':
        response = value1 * value1;
        break;
      case 'cubo':
        response = value1 * value1 * value1;
        break;
      case 'raiz':
        response = Math.sqrt(value1);
        break;
      case 'seno':
        response = Math.sin(value1);
        break;
      case 'inverso':
        response = 1 / value1;
        break;
      case '+':
        response = Number(value1) + Number(value2);
        break;
      case '-':
        response = value1 - value2;
        break;
      case '*':
        response = value1 * value2;
        break;
      case '/':
        response = value1 / value2;
        break;
      case 'mod':
        response = value1 % value2;
        break;
    }

    document.getElementById('resposta').innerHTML = response;
  } catch (err) {
    alert(err);
  }
}

function fatorial(value) {
  let fat = 1;

  for (let index = 1; index <= value; index++) {
    fat = fat * index;
  }

  return fat;
}

function convertCurrency(originalValue, dolar, euro, type) {
  try {
    let convertedValue = '';
    if (!Number(originalValue))
      throw 'Informe um valor válido!';
    if (!type)
      throw 'Informe um tipo de conversão!';
    if (type.includes('dolar')) {
      if (!dolar)
        throw 'Informe a cotação do dólar';
      if (!Number(dolar))
        throw 'Informe uma cotação válida para o dolar';
    }
    if (type.includes('euro')) {
      if (!euro)
        throw 'Informe a cotação do euro';
      if (!Number(euro))
        throw 'Informe uma cotação válida para o euro';
    }
    switch (type) {
      case 'real-dolar':
        convertedValue = 'US$ ' + (originalValue / dolar).toFixed(2);
        break;
      case 'dolar-real':
        convertedValue = 'R$ ' + (originalValue * dolar).toFixed(2);
        break;
      case 'real-euro':
        convertedValue = '€ ' + (originalValue / euro).toFixed(2);
        break;
      case 'euro-real':
        convertedValue = 'R$ ' + (originalValue * euro).toFixed(2);
        break;
    }
    document.getElementById('result').innerHTML = convertedValue;

  } catch (err) {
    alert(err);
  }
}

function convertToFrom(numero, baseToFrom) {
  try {
    let result = '';
    if (!numero)
      throw 'Insira um número para converter';
    if (!Number(numero))
      throw 'Insira um número válido';
    if (!baseToFrom)
      throw 'Escolha uma operação';
    switch (baseToFrom) {
      case 'decBin':
        result = (numero >>> 0).toString(2);
        break;
      case 'decHex':
        result = (numero >>> 0).toString(16);
        break;
      case 'binDec':
        result = parseInt(binary, 2);
        break;
      case 'hexDec':
        result = parseInt(binary, 16);
        break;
    }
    document.getElementById('result').innerHTML = result.toUpperCase();
  } catch (err) {
    alert(err);
  }
}

function goBack() {
  window.history.back();
}
