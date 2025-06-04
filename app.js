console.log("Funcionou")

//JSON = JavaScript object notation

let filme1 = {
    titulo: "Jurassic Park ",
    foto: "Filme.webp",
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



function FnMontarCartao(filmeAtual){
    document.querySelector(".lista-filmes").innerHTML = `
    <div class="card-filme">
            <img src="img/${filmeAtual.foto}">
            <h3>${filmeAtual.titulo}</h3>
            <span>⭐ ${filmeAtual.avaliacao}</span>
        </div> `
}


    
FnMontarCartao(filme1)
FnMontarCartao(filme2)
FnMontarCartao(filme3)
FnMontarCartao(filme4)

//dom

document.querySelector("h1").innerText = "oi"

console.log(document.querySelector("h1"))




