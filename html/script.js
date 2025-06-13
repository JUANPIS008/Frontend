function login() {
    window.location.href = "descripcioncitas.html";
}

function iracitas() {
    window.location.href = "citas.html";
}
function iraregistro() {
    window.location.href = "registros.html";
}
function descripcionregistro() {
    window.location.href = "registros.html";
}

function redirigirLogin() {
    window.location.href = "login.html";
}

function agendarCita() {
    var fechaCita = document.getElementById("fechaCita").value;
    var horaCita = document.getElementById("horaCita").value;
    var mensaje = document.getElementById("mensaje");

    if (!fechaCita) {
        mensaje.innerText = "Por favor, seleccione una fecha.";
        mensaje.style.display = "block";
        mensaje.style.color = "red";
        return;
    }

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

    let horaSeleccionada = parseInt(horaCita.split(":")[0]); 
    if (!horaCita || horaSeleccionada < 6 || horaSeleccionada > 18) {
        mensaje.innerText = "Seleccione un horario entre las 6:00 AM y 6:00 PM.";
        mensaje.style.display = "block";
        mensaje.style.color = "red";
        return;
    }

    mensaje.innerText = "Su cita fue agendada el día " + fechaCita + " a las " + horaCita + ".";
    mensaje.style.display = "block";
    mensaje.style.color = "green";
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("tipoCita").addEventListener("change", actualizarDoctores);
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("tipoCita").addEventListener("change", actualizarDoctores);
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("tipoCita").addEventListener("change", actualizarDoctores);
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("tipoCita").addEventListener("change", actualizarDoctores);
});

function actualizarDoctores() {
    let tipoCita = document.getElementById("tipoCita").value;
    let doctorCita = document.getElementById("doctorCita");

    doctorCita.innerHTML = "";

    let doctores = {
        general: ["Dra. Meredith Grey", "Dra. Miranda Bailey", "Dr. Richard Webber"],
        pediatria: ["Dra. Arizona Robbins", "Dr. Alex Karev", "Dra. Jo Wilson"],
        neurologia: ["Dra. Amelia Shepherd", "Dr. Dreck Shepherd", "Dra. Lexie Grey"]
    };

    if (doctores[tipoCita]) {
        doctorCita.style.display = "block";
        doctorCita.innerHTML = `<option value="">Seleccione un doctor</option>`;
        
        doctores[tipoCita].forEach(function (doctor) {
            let option = document.createElement("option");
            option.textContent = doctor;
            option.value = doctor;
            doctorCita.appendChild(option);
        });
    } else {
        doctorCita.style.display = "none";
    }
}