# Catálogo de Filmes

## 🎥Gif Projet:

![img]()

## Sobre o projeto:

Este projeto tem como objetivo fornecer um catálogo de filmes atualizado, utilizando a API pública da <a href="https://www.themoviedb.org/">The Movie DB.</a> O catálogo inclui informações como sinopse, qualidade e nota dos filmes.

## Principais Características

- Utilização da API da The Movie DB: A API é utilizada para obter informações sobre filmes, como sinopse, qualidade e nota

- Filtro de Busca: Os usuários podem filtrar a lista de filmes por nome.

- Detalhes do Filme: Quando um filme é selecionado, é exibido um painel com mais informações sobre o filme, incluindo sinopse e qualidade.

## Códigos em Destaque

```javascript
const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=824ab9aa2838bb970a3bd608a9d6ea84";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const BUSCAAPI = "https://api.themoviedb.org/3/search/movie?&api_key=824ab9aa2838bb970a3bd608a9d6ea84&query=";
const form = document.getElementById("form");
const search = document.getElementById("search");
```
> A constante APIURL é a URL da API do The Movie Database (TMDB), que é usada para obter informações sobre filmes. A constante IMGPATH no código é a URL base usada para exibir imagens dos filmes. A constante BUSCAAPI é a URL da API de busca do TMDB. As constantes form, search, main, header, modal são variáveis que armazenam referências a elementos HTML.

```javascript
buscarFilmes(APIURL);
async function buscarFilmes(url) {
  const resp = await fetch(url);
  const respData = await resp.json();
  mostrarFilmes(respData.results);
}
```
> A função buscarFilmes usa a URL da API fornecida como argumento para obter informações sobre filmes e, em seguida, chama a função mostrarFilmes para exibir as informações na página.

```javascript
function avaliacao(avaliacao) {
  if (avaliacao >= 8) {
    return "verde";
  } else if (avaliacao >= 5) {
    return "laranja";
  } else {
    return "vermelho";
  }
}
```
> A função avaliacao é usada para determinar a cor de uma classificação baseada na nota do filme.
```javascript
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const itemText = search.value;
  if (itemText) {
    buscarFilmes(BUSCAAPI + itemText);
    search.value = "";
  }
});
```
> O evento submit é adicionado ao formulário para fazer uma busca quando o usuário envia o formulário.


## Tecnologias Utilizadas:

- HTML
- CSS
- JavaScript

 
## Como visualizar em seu dispositivo:

- Faça o clone do repositório

  `git clone https://github.com/joaorezend3/Pagina-de-streaming-clone-Netflix.git` 

- Abra o arquivo index.html em um navegador

## Conclusão:

O projeto foi uma boa oportunidade para trabalhar com posicionamento absoluto e outras funcionalidades do CSS para alinhar elementos. Além disso, foi possível simular uma página da Netflix utilizando HTML, CSS e JavaScript.

```javascript
alert("Por gentileza, caso refaça o projeto, peça sua chave key no sit: https://www.themoviedb.org/
caso queira somente utilizar ou visualizar o projeto não ha necessidades, obrigado😁");
```
Créditos: https://www.themoviedb.org/
