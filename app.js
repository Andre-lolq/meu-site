function pesquisar() {
  const campoPesquisa = document.getElementById("campo-pesquisa");
  const resultadosSection = document.getElementById("resultados-pesquisa");

  const pesquisa = campoPesquisa.value.trim().toLowerCase();

  if (pesquisa === "") {
    resultadosSection.innerHTML = "<p>Não encontramos nenhuma temporada :(</p>";
    return;
  }
  
  let resultados = "";

  dados.forEach(dado => {
    if (dado.titulo.toLowerCase().includes(pesquisa))
      {
      resultados += `
        <div class="item-resultado">
          <img src="https://upload.wikimedia.org/wikipedia/en/3/31/The_Walking_A Dead%2C_Season_One_cover.jpeg" alt="Descrição da imagem">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações da temporada neste link</a>
        </div>`;
    }
  });

  resultadosSection.innerHTML = resultados;
}