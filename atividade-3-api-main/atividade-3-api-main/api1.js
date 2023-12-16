function consultaEndereco() {

    let cep = document.querySelector('#cep').value;


    if (cep.length !== 8) {
        alert("CEP Inválido!");
        return;
    }


    let url = `https://viacep.com.br/ws/${cep}/json/`;


    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            exibirEndereco(data); 
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            alert('Erro na consulta do endereço. Tente novamente.');
        });
}

function exibirEndereco(dados) {

    let resultado = document.querySelector('#resultado');


    if (dados.erro) {
        resultado.innerHTML = "Não foi possível localizar esse endereço";
    } else {

        resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                               <p>Complemento: ${dados.complemento}</p> 
                               <p>Bairro: ${dados.bairro}</p>
                               <p>Cidade: ${dados.localidade} - ${dados.uf}</p>`;
    }
}
