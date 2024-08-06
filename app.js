
const btnGuardar = document.getElementById("btnGuardar");
btnGuardar.addEventListener("click", function(){
    console.log('Haciendo click ');
    alert("Correcto");
    const nombres = document.getElementById("txtNombres").value;
    const email = document.getElementById("txtEmail").value;
    const telefono = document.getElementById("txtTelefono").value;
    const direccion = document.getElementById("txtDireccion").value;
    
    console.log('Nombres' + nombres + ',Email' + email + ',Telefono' + telefono + ',Direccion' + direccion);
    alert('Nombres' + nombres + ',Email' + email + ',Telefono' + telefono + ',Direccion' + direccion);

    const nombredemascota = document.getElementById("txtNombredeMascota").value;
    const tipodemascota = document.getElementById("txtTipodeMascota").value;
    const raza = document.getElementById("txtRaza").value;
    const edad = document.getElementById("txtEdad").value;
    
    console.log(',NombredeMascota' + nombredemascota + ',TipodeMascota' +tipodemascota + ',Raza' +raza +',Edad' + edad );
    alert(',NombredeMascota' + nombredemascota + ',TipodeMascota' +tipodemascota + ',Raza' +raza +',Edad' + edad );

});

function hola(nombres, email, telefono, direccion){
    console.log(nombres, email, telefono, direccion);
}

function hello(nombredemascota,tipodemascota,raza,edad){
    console.log(nombredemascota,tipodemascota,raza,edad);
}

