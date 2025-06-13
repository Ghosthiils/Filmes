async function fnPegarFilmes() {
  let filmes = await fetch("dados-filmes.json")
  let filmesTratados = await filmes.json()
  filmesTratados.forEach((filmeAtual) => {
    document.querySelector(".lista-filmes").innerHTML += `
    <div class="card-filme">
    <img src="${filmeAtual.foto}">
    <h3>${filmeAtual.titulo}</h3?>
    <span>🌟 ${filmeAtual.avaliacao}</span>
    </div>
    `
   
  })
}

fnPegarFilmes();

