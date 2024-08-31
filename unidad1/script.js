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


function calcularFCI() {
    // Obtener los valores de entrada
    var Vout2 = parseFloat(document.getElementById('Vout2').value);
    var Iomax = parseFloat(document.getElementById('Iomax').value);
    var Vac = parseFloat(document.getElementById('Vac').value);
    var f2 = parseFloat(document.getElementById('f2').value);
    var Vinmax = parseFloat(document.getElementById('Vinmax').value);
    var Vinmin = parseFloat(document.getElementById('Vinmin').value);

    // Verificar que f no sea cero para evitar división por cero
    if (f2 === 0) {
        alert("El valor de f no puede ser cero.");
        return;
    }

    // Calcular el resultado
    var resultado1ci = (Vac*1.4142)/(Vinmax+1.4);
    var resultado2ci = (Iomax*1000000)/(2*f*(Vinmax-Vinmin));

    // Mostrar el resultado
    document.getElementById('resultado1ci').innerText = 'Resultado: ' + resultado1ci.toFixed(2);
    document.getElementById('resultado2ci').innerText = 'Resultado: ' + resultado2ci.toFixed(2);
}

function calcularIDmax() {
    var Vipico = parseFloat(document.getElementById('Vipico').value);
    var V1 = parseFloat(document.getElementById('V1').value);
    var V2 = parseFloat(document.getElementById('V2').value);
    var R1ap = parseFloat(document.getElementById('R1ap').value);
   

    // Verifica si los valores ingresados son válidos
    if (!isNaN(Vipico) && !isNaN(V1) && !isNaN(V2) && !isNaN(R1ap)) {
        // Convierte las entradas a números
        Vipico = parseFloat(Vipico);
        V1 = parseFloat(V1);
        V2 = parseFloat(V2);
        R1ap = parseFloat(R1ap);
        

        // Calcula
        var ID1max = (Vipico-(V1-0.7))/R1ap;
        var ID2max = ((V2-0.7)-(-Vipico))/R1ap;
        
        // Muestra los resultados
        document.getElementById('resultadoID1max').innerText = "ID1max: " + ID1max.toFixed(2) + " mA";
        document.getElementById('resultadoID2max2').innerText = "ID2max: " + ID2max.toFixed(2) + " mA";
       
    } else {
        document.getElementById('resultado1').innerText = "Por favor, ingrese valores válidos para todos los campos.";
    }
}