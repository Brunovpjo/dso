let paragrafo = document.querySelector("#amox");
let titulo = document.querySelector("#amore");

let pgrammy = document.querySelector("#grammys");
function colocaGrammy(qtd){
for(i=0; i<qtd; i++){
  pgrammy.innerHTML += '<img id = "grammy" src = "https://cdn4.iconfinder.com/data/icons/awards-5/154/grammy-award-512.png">';
}
}
let pmeta = document.querySelector("#blackpink");
function colocamedia(nota){
  pmeta.innerHTML = nota;
  if(nota<60){
    pmeta.style.backgroundColor = 'red';
  }
  if(nota==60){
    pmeta.style.backgroundColor = 'yellow';
  }
  if(nota>60){
    pmeta.style.backgroundColor = 'green';
  }
}

let artistas = [
  {
    nome: 'Lady Gaga',
    grammys: 6,
    nascimento: 'N.Y',
    descricao: 'Fada que tem uma tia morta e um filme acamado pelo meta, coisa que a k8 doceira rata eh sedenta pra ter.'
    , meta: 75
  },
  {
    nome: 'Madonna',
    grammys: 7,
    nascimento: 'Bay City',
    descricao: 'Fashion Icon criadora de muitas tendencias hoje existentes no mundo do pop.'
    , meta: 70
  }
  ,
  {
    nome: 'Jennifer Lopez',
    grammys: 0,
    nascimento: 'Castel Hill',
    descricao: 'Atriz bem sucedida alem de uma das pioneiras dos clipes bem sucedidos e dos feats.'
    , meta: 50
  }
  ,
  {
    nome: 'Selena Gomez',
    grammys: 0,
    nascimento: 'Grand Pairie',
    descricao: 'Atriz desde criança, Instagrammer, e a segunda mulher a ser a mais ouvida no spotify.'
    , meta: 55
  }
  ,
  {
    nome: 'Ariana Grande',
    grammys: 0,
    nascimento: 'Boca Raton',
    descricao: 'Vocal queen, começou como artista e hoje mostra sua versatilidade por meio de clipes iconicos, smashs e performances.'
    , meta: 80
  }
  ,
  {
    nome: 'Demi Lovato',
    grammys: 0,
    nascimento: 'Albuquerque',
    descricao: 'Ex act vocal da Disney, nao vende tanto mas está sempre nos brindando com performances de tirar o fôlego.'
    , meta: 78
  }
  ,
  {
    nome: 'Miley Cyrus',
    grammys: 0,
    nascimento: 'Novo Mexico',
    descricao: 'Fada, vocal um pouco estragado pelo cigarro. Eximia atriz hollywoodiana, sempre servindo looks iconicos.'
    , meta: 70
  }
  ,
  {
    nome: 'Cindy Lauper',
    grammys: 2,
    nascimento: 'Astoria',
    descricao: 'Fada que tem uma tia morta e um filme acamado pelo meta, coisa que a k8 doceira rata eh sedenta pra ter.'
    , meta: 70
  }
  ,
  {
    nome: 'Michael Jackson',
    grammys: 23,
    nascimento: 'Los Angeles',
    descricao: '[R.I.P] Ícone precurssor do pop juntamente com sua familia, serviu looks, performances e açoes huumanitarias iconicas.'
    , meta: 85
  }
  ,
  {
    nome: 'Beyoncé',
    grammys: 24,
    nascimento: 'Louisiana',
    descricao: 'Fada Milituda negra, criou o conceito limonada. Sempre servindo vocais icônicos e performances inesqueciveis.'
    , meta: 88
  }
]




let nomeart = document.querySelector('#search');


nomeart.addEventListener('change', function(){
    for(let i=0; i<artistas.length; i++){
      if(artistas[i].nome == nomeart.value){
        titulo.innerHTML = artistas[i].nome;
        paragrafo.innerHTML = artistas[i].descricao;
        colocaGrammy(artistas[i].grammys);
        colocamedia(artistas[i].meta);
      }

    }
});
