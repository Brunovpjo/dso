
let titleEl = document.querySelector('title');
let iconzudaEl = document.querySelector('#iconei');
let h1El = document.querySelector('h1');
let valor = localStorage.getItem("title");
let novoTexto = valor.toUpperCase();
titleEl.innerHTML = novoTexto;
h1El.innerHTML = novoTexto;
let p1 = document.querySelector('#p1');

p1.innerHTML = localStorage.getItem("conteudo");

let galeria = document.querySelector('.carousel');

galeria.innerHTML = localStorage.getItem("galeria");

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
	duration: 200,
	dist: -10,
	shift: 20
    });
});

iconzudaEl.href = localStorage.getItem("icon");
