function login() {
    window.location.href = "citas.html"; 
}

function redirigirLogin() {
    window.location.href = "login.html";
}

function agendarCita() {
    var fechaCita = document.getElementById("fechaCita").value;
    var horaCita = document.getElementById("horaCita").value;
    var mensaje = document.getElementById("mensaje");

    if (fechaCita && horaCita) {
        mensaje.innerText = "Su cita fue agendada el día " + fechaCita + " a las " + horaCita + ".";
        mensaje.style.display = "block";
    } else {
        mensaje.innerText = "Por favor, seleccione una fecha y hora.";
        mensaje.style.display = "block";
        mensaje.style.color = "red";
    }
}