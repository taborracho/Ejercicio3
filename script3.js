let edades = [5];

function comprobarEdades(){
    edades[0] = document.getElementById("persona1").value;
    edades[1] = document.getElementById("persona2").value;
    edades[2] = document.getElementById("persona3").value;
    edades[3] = document.getElementById("persona4").value;
    edades[4] = document.getElementById("persona5").value;

    const promesa = new Promise((resolve, reject) =>{
    if(edades[0] >= 18 && edades[1] >= 18 && edades[2] >= 18 && edades[3] >= 18 && edades[4] >= 18 ){
        resolve("<center><h3><b> LAS 5 PERSONAS SON MAYORES DE EDAD</b></h3></center>");
    }else{
        reject("<center><h3><b> AL MENOS UNA PERSONA NO ES MAYOR DE EDAD</b></h3></center>");
    }
    });
    
    promesa.then(res =>{
        document.body.innerHTML += res;
    })
    .catch(error=>{
        document.body.innerHTML += error;
    });

}

