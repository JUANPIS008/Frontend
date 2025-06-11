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

    // Validar que la fecha no esté vacía
    if (!fechaCita) {
        mensaje.innerText = "Por favor, seleccione una fecha.";
        mensaje.style.display = "block";
        mensaje.style.color = "red";
        return;
    }

    // Validar que la fecha sea a partir de mañana
    let hoy = new Date();
    let mañana = new Date();
    mañana.setDate(hoy.getDate() + 1);
    let fechaSeleccionada = new Date(fechaCita + "T00:00:00");

    if (fechaSeleccionada < mañana) {
        mensaje.innerText = "Seleccione una fecha que sea a partir de mañana.";
        mensaje.style.display = "block";
        mensaje.style.color = "red";
        return;
    }

    // Validar que la hora esté entre 06:00 y 18:00
    let horaSeleccionada = parseInt(horaCita.split(":")[0]); // Extrae solo la hora
    if (!horaCita || horaSeleccionada < 6 || horaSeleccionada > 18) {
        mensaje.innerText = "Seleccione un horario entre las 6:00 AM y 6:00 PM.";
        mensaje.style.display = "block";
        mensaje.style.color = "red";
        return;
    }

    // Mensaje de confirmación
    mensaje.innerText = "Su cita fue agendada el día " + fechaCita + " a las " + horaCita + ".";
    mensaje.style.display = "block";
    mensaje.style.color = "green";
}