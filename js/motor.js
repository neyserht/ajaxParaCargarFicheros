function peticionServidor1(d1)
{
    let ajax1 = new XMLHttpRequest();

    // 1. Devolución del servidor
    ajax1.onreadystatechange = function(){
        if (ajax1.readyState==4 && ajax1.status==200)
        {
            document.getElementById(d1.id).innerHTML = ajax1.responseText;
        }
    };

    // 2. Envío de la petición al servidor
    ajax1.open('GET','fichero1.html', true);
    ajax1.send();
}

function peticionServidor2(d1)
{
}

// Cuando Todos los recursos se hayan cargado...
window.addEventListener("load", function(event){
    // Establecer una referecia de los elementos
    const b1 = document.getElementById("b1");
    const b2 = document.getElementById("b2");
    const d1 = document.getElementById("d1");

    // Asociar el elementoal evento y llamada a la función
    if(b1)
    {
        b1.addEventListener("click", function(event){
            event.preventDefault();
            peticionServidor1(d1);
        });
    }
});



