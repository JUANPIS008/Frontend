document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const datos = {
        nombre: document.getElementById('nombre').value,
        tipoIdentificacion: document.getElementById('tipoIdentificacion').value,
        numeroIdentificacion: document.getElementById('numeroIdentificacion').value,
        contrasena: document.getElementById('contrasena').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value
    };
    
    fetch('http://127.0.0.1:5000/registrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert(data.mensaje || data.error);
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
    });

});
