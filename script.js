var i;

var indexValor=0;

const img = document.querySelectorAll('#cabana');

moverImg(indexValor);
        
function boton_mover(e){
    moverImg(indexValor += e);
}

function moverImg(e){

    if(e > img.length){indexValor = 1}

    if(e<1){indexValor = img.length}

    for(i=0;i < img.length; i++){
        img[i].style.display= "none";
        }
        img[indexValor-1].style.display= "block";

}