function showSection(sectionId) {
    // Oculta todas las secciones
    var sections = document.querySelectorAll('.section-content');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Muestra la sección seleccionada
    var sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

function calcular() {
    // Obtener los valores de entrada
    var frecuencia = parseFloat(document.getElementById('frecuencia').value);
    var n = parseFloat(document.getElementById('n').value);
    var vi = parseFloat(document.getElementById('vi').value);

    // Verificar que n no sea cero para evitar división por cero
    if (n === 0) {
        alert("El valor de n no puede ser cero.");
        return;
    }

    // Calcular el resultado
    var resultado = (vi * 1.4142 / n) - 1.4;

    // Mostrar el resultado
    document.getElementById('resultado').innerText = 'Resultado: ' + resultado.toFixed(2);
}

