function pesquisar() {
    var cep = document.getElementById('cep').value;
    var cidade = document.getElementById('cidade').value;
  
    // Verifica se o usuário digitou um CEP ou uma cidade
    if (!cep && !cidade) {
      alert('Digite um CEP ou uma cidade para pesquisa.');
      return;
    }
  
    // URL base do serviço ViaCEP
    var baseUrl = 'https://viacep.com.br/ws/';
  
    // Constrói a URL com base no tipo de pesquisa
    var url;
    if (cep) {
      url = baseUrl + cep + '/json/';
    } else {
      url = baseUrl + cidade + '/json/';
    }
  
    // Faz a requisição AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
  
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        var result = JSON.parse(xhr.responseText);
        exibirResultado(result);
      } else {
        alert('Erro na requisição. Tente novamente.');
      }
    };
  
    xhr.onerror = function () {
      alert('Erro na requisição. Tente novamente.');
    };
  
    xhr.send();
  }
  
  function exibirResultado(result) {
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
  
    if (result.erro) {
      resultDiv.innerHTML = 'CEP não encontrado.';
    } else {
      for (var prop in result) {
        if (result.hasOwnProperty(prop)) {
          resultDiv.innerHTML += '<strong>' + prop + ':</strong> ' + result[prop] + '<br>';
        }
      }
    }
  }