const modalCadastro = document.getElementById("modal-cadastro")


const pedido = document.getElementById("pedido");

function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    console.log(modal);
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
        if(e.target.id == modalID){
            modal.classList.remove('mostrar');

            document.getElementById("cadastro-form").reset();

        } 
    });
}

function a() {
    $("#modal-cadastro").on("hidden.bs.modal", function (e) {
      console.log("Modal hidden");
      $("#placeholder-div1").html("");
    });
  };

pedido.addEventListener('click', () => iniciaModal('modal-cadastro'));


//iniciaModal('modal-cadastro');


// quando clicar a seta avançar temos que esconder todas as imagens
// e mostrar a proxima imagem
// a imagem atal começa no 0, clicando no avançar adiciona +1

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

setaAvancar.addEventListener('click',function(){
  if(imagemAtual === imagensPainel.length -1){
    imagemAtual = -1;
  }

  imagemAtual++;

  // removendo o mostrar da imagem:
  imagensPainel.forEach(imagem =>{
    imagem.classList.remove('mostrar');
  })

  // mostrar a proxima imagem:
  imagensPainel[imagemAtual].classList.add('mostrar');
})

setaVoltar.addEventListener('click', function(){

  if(imagemAtual === 0){
      imagemAtual = 3;
  }

  imagemAtual--;
  
  // removendo o mostrar da imagem:
  imagensPainel.forEach(imagem =>{
      imagem.classList.remove('mostrar');
  })

  // mostrar a proxima imagem:
  imagensPainel[imagemAtual].classList.add('mostrar');
})