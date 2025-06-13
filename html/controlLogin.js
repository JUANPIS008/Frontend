function login() {
    const numeroIdentificacion = parseInt(document.querySelector('input[placeholder="Usuario"]').value);
    const contrasena = document.querySelector('input[placeholder="Contraseña"]').value;

    fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            numeroIdentificacion,
            contrasena
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.mensaje) {
            alert(data.mensaje);
            window.location.href = "descripcioncitas.html"; // Redirige solo si el login es exitoso
        } else {
            alert(data.error);
        }
    })
    .catch(error => {
        console.error('Error en el login:', error);
    });
}
