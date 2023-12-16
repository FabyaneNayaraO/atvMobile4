const url = "https://economia.awesomeapi.com.br/last/";
const coins = "USD-BRL,EUR-BRL,BTC-BRL";

fetch(url + coins)
  .then(response => response.json())
  .then(data => {
    const dolarReal = data.USDBRL;

    // Verifique o nome correto do campo de data na resposta da API
    const rawDate = dolarReal.create_date;

    // Converta a data para um objeto Date
    const estaData = new Date(rawDate);

    // Atualize os elementos HTML com os dados obtidos da API
    document.getElementById('title').innerHTML = dolarReal.name;
    document.getElementById('thisdate').textContent = estaData.toLocaleString();
    document.getElementById('maxvalue').textContent = parseFloat(dolarReal.high).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    document.getElementById('minvalue').textContent = parseFloat(dolarReal.low).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  })
  .catch(error => {
    console.error("Erro na requisição:", error);
    alert("Ocorreu um erro ao obter os dados da API. Tente novamente.");
  });
