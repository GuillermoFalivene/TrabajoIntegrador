var i;

var indexValue=0;

moverImg(indexValue);
        
function boton_mover(e){moverImg(indexValue += e);}

function moverImg(e){
const img = document.querySelectorAll('#cabana');

if(e > img.length){indexValue = 1}
if(e<1){indexValue = img.length}

for(i=0;i < img.length; i++){
    img[i].style.display= "none";
    }
    img[indexValue-1].style.display= "block";
}