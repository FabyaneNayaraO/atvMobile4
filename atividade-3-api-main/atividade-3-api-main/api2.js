function loadPokemon() {
    const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.clear();
            console.log(data);

            document.getElementById("nome").innerHTML = data.name;
            document.getElementById("numero").innerHTML = data.id;

            const img = data.sprites.front_default;

            document.getElementById("pic").setAttribute('src', img);
        })
        .catch(error => {
            console.error("Erro: ", error);
            alert("Ocorreu um erro ao carregar os dados do Pokémon. Tente novamente.");
        });
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn1").onclick = loadPokemon;
});
