
function agendarCita() {
    const tipoCita = document.getElementById('tipoCita').value;
    const doctorCita = document.getElementById('doctorCita').value;
    const fechaCita = document.getElementById('fechaCita').value;
    const horaCita = document.getElementById('horaCita').value;

    fetch('http://localhost:5000/agendar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tipoCita,
            doctorCita,
            fechaCita,
            horaCita,
            usuarioId: 1 // Este valor debe venir de la sesión o login
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('mensaje').textContent = data.mensaje;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}