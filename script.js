 //arreglo que contiene las respueas correctas
let correctas = [3,3,1,1,1,2,2,1,3,3];

//arreglo donde se guardan las respuetas del usuario
let opcion_elegida=[];

let cantidad_correctas=0;

//funcion que toma el num de pregunta y el input elegido de esa pregunta
function respuesta(num_pregunta, seleccionada){
    //Guardo la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;


    id="p" + num_pregunta;

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";

    
    seleccionada.parentNode.style.backgroundColor = "#6B1CB5";
}


function corregir(){
    cantidad_correctas=0;
    for(i=0; i<correctas.length; i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }
    }

    document.getElementById("resultado").innerHTML = cantidad_correctas;
} 