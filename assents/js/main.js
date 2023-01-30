const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=824ab9aa2838bb970a3bd608a9d6ea84";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const BUSCAAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=824ab9aa2838bb970a3bd608a9d6ea84&query=";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");
const header = document.getElementById("header");

//modal
const modal = document.getElementById("modal");

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

/* end nav*/
buscarFilmes(APIURL);

async function buscarFilmes(url) {
  const resp = await fetch(url);
  const respData = await resp.json();
  mostrarFilmes(respData.results);
}

function mostrarFilmes(filmes) {
  main.innerHTML = "";

  filmes.forEach(function (filme) {
    const { poster_path, title, vote_average, overview, id } = filme;

    const filmeItem = document.createElement("div");
    filmeItem.classList.add("filmes");

    filmeItem.innerHTML = ` <a href= javascript:void(0); onclick="return showModal(${id})"> 
        <img src="${IMGPATH + poster_path}" alt="${title}" />
			<div class="info-filmes">
				<h2>${title}</h2>
				<span class="${avaliacao(vote_average)}">
					${vote_average}
				</span>
			</div> 
			<div class="text">
				
			</div> 
        </a> `;
    main.appendChild(filmeItem);
  });
}

function avaliacao(avaliacao) {
  if (avaliacao >= 8) {
    return "verde";
  } else if (avaliacao >= 5) {
    return "laranja";
  } else {
    return "vermelho";
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const itemText = search.value;
  if (itemText) {
    buscarFilmes(BUSCAAPI + itemText);
    search.value = "";
  }
});

async function showModal(id) {
  const resp = await fetch(
    "https://api.themoviedb.org/3/movie/" +
      id +
      "?api_key=824ab9aa2838bb970a3bd608a9d6ea84"
  );
  const respData = await resp.json();
  if (respData) {
    const genero = [];
    respData.genres.map(function (item) {
      genero.push(item.name);
    });
    const poster = document.getElementById("poster");
    const title = document.getElementById("title");
    const genres = document.getElementById("genres");
    const voteAvarage = document.getElementById("vote-avarage");
    const overview = document.getElementById("overview");

    poster.setAttribute("src", IMGPATH + respData.poster_path);
    title.innerText = respData.title;
    overview.innerText = respData.overview;
    voteAvarage.innerText = respData.vote_average;
    genres.innerText = genero;

    modal.classList.add("show");
  }
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 150) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
