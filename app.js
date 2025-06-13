
//JSON = JavaScript object notation

let filme1 = {
    titulo: "Jurassic Park ",
    foto: "Filme1.webp",
    avaliacao: "10/10",
    duracao: "1h50"

}


let filme2 = {
    titulo: "Karate Kid lendas",
    foto: "filme2.jpg",
    avaliacao: "8/10",
    duracao: "1h50"

}



let filme3 = {
    titulo: "Lilo & Stitch",
    foto: "Filme3.jpg",
    avaliacao: "10/10",
    duracao: "4h50"

}



let filme4 = {
    titulo: "Pecadores ",
    foto: "filme4.jpg",
    avaliacao: "10/10",
    duracao: "1h50"

}
let filme5 = {
    titulo: "Homem-Aranha",
    foto: "FILMEH.jpg",
    avaliacao: "6/10",
    duracao: "5h"
    
}



// function FnMontarCartao(filmeAtual){
//     document.querySelector(".lista-filmes").innerHTML += `
//     <div class="card-filme">
//             <img src="img/${filmeAtual.foto}">
//             <h3>${filmeAtual.titulo}</h3>
//             <span>⭐ ${filmeAtual.avaliacao}</span>
//         </div> `
// }


 //DOM - Document Object Model   
//FnMontarCartao(filme1)


// let todosOsFilmes = [filme1, filme2, filme3, filme4, filme5]

// todosOsFilmes.forEach((filmeAtual, indice) => {
//     document.querySelector(".lista-filmes").innerHTML += `
//     <div class="card-filme">
//     <img src="img/${filmeAtual.foto}">
//     <h3>${filmeAtual.titulo}</h3?>
//     <span>🌟 ${filmeAtual.avaliacao}</span>
//     </div>
//     `

    
// })


async function fnPegarFilmes() {
    let filmes = await fetch("dados-filmes.json")
    let filmesTratados = await filmes.json();

    filmesTratados.slice(0,4).forEach((filmeAtual) => {
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





