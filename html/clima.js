document.getElementById('climaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const ciudad = document.getElementById('ciudad').value;
    fetch(`http://localhost:5000/weather?city=${ciudad}`)
    .then(response => response.json())
    .then(data => {
        if (data.weather) {
            const clima = data.weather[0].description;
            const temp = data.main.temp;
            document.getElementById('resultadoClima').innerHTML = `
            <p><strong>Clima:</strong> ${clima}</p>
            <p><strong>Temperatura:</strong> ${temp} °C</p>`;
        } else {
            document.getElementById('resultadoClima').innerHTML = `<p>No se pudo obtener el clima.</p>`;
        }
    })
    .catch(() => {
        document.getElementById('resultadoClima').innerHTML = `<p>Error al consultar el clima.</p>`;
    });
});