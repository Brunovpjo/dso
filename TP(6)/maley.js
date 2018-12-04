document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.carousel');
  let instances = M.Carousel.init(elems,  {
    indicators: true,
    numVisibles: 3,
    dist: -50


  });
});

  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.modal');
    let instances = M.Modal.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.more');
    let instances = M.Dropdown.init(elems, {
      hover: true
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.materialboxed');
    let instances = M.Materialbox.init(elems);
  });

  let campoEL = document.querySelector("#Musicadesejada");
  let botaoGatilhoEl = document.querySelector("#ADDMUSIC");
  let listaMusicasEl = document.querySelector("#Musicas");

  let musicas = [
  ];
 musicas.forEach(insereamusica);
 botaoGatilhoEl.addEventListener('click', function(){
   let novaM = {
     nome: campoEL.value,
     link: 'www.youtube.com/results?search_query=' + campoEL.value
   }
   musicas.push(novaM);
   insereamusica(novaM);
 });

 function insereamusica(musica){
   listaMusicasEl.innerHTML+='<li id= "liw"> Nome da Musica: '+ musica.nome + '</li>'
 }
 let salva = document.querySelector('#salva');
 let carrega = document.querySelector('#carrega');
 let musica = localStorage.getItem('musicas');
 musica = JSON.parse(musica);

 salva.addEventListener('click', function save(evt){
   localStorage.setItem('musicas', JSON.stringify(musicas));
 });

carrega.addEventListener('click', function carregar(evt){
   musica.forEach(insereamusica);
 });
