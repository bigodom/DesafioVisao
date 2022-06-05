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
