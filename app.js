// Función para calcular el IMC
function calcularIMC() {
    // Solicitar los datos al usuario
    const peso = parseFloat(prompt("Por favor, ingresa tu peso en kg:"));
    const altura = parseFloat(prompt("Por favor, ingresa tu altura en metros:"));

    // Validar que los datos sean números positivos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, ingresa valores válidos para peso y altura.");
        return;
    }

    // Calcular el IMC
    const imc = peso / (altura * altura);
    
    // Mostrar el resultado con dos decimales
    const imcFormatted = imc.toFixed(2);
    
    // Interpretar el IMC y asignar una imagen correspondiente
    let interpretacion = "";
    let imagenSrc = "";
    
    if (imc < 18.5) {
        interpretacion = "Bajo peso";
        imagenSrc = "https://cdn-icons-png.flaticon.com/512/4813/4813807.png";  // Ruta de la imagen para bajo peso
    } else if (imc >= 18.5 && imc <= 24.9) {
        interpretacion = "Peso normal";
        imagenSrc = "https://cdn-icons-png.flaticon.com/512/14777/14777350.png";  // Ruta de la imagen para peso normal
    } else if (imc >= 25 && imc <= 29.9) {
        interpretacion = "Sobrepeso";
        imagenSrc = "https://cdn-icons-png.flaticon.com/512/3476/3476048.png";  // Ruta de la imagen para sobrepeso
    } else {
        interpretacion = "Obesidad";
        imagenSrc = "https://cdn-icons-png.flaticon.com/512/11962/11962976.png";  // Ruta de la imagen para obesidad
    }

    // Mostrar el resultado en el contenedor
    const resultadoDiv = document.getElementById('resultado');
    const imagenDiv = document.getElementById('imagenResultado');
    
    resultadoDiv.innerHTML = `
        <h2>Resultado:</h2>
        <p id="valorIMC">IMC: ${imcFormatted}</p>
        <p id="interpretacion">Interpretación: ${interpretacion}</p>
    `;
    
    // Mostrar la imagen según el resultado
    imagenDiv.innerHTML = `<img src="${imagenSrc}" alt="${interpretacion}" />`;

    // Hacer visible el resultado y la imagen
    resultadoDiv.style.display = 'block';
}

// Función para recargar la página
function recargarPagina() {
    window.location.reload();
}

// Llamar a la función para calcular el IMC cuando la página cargue
window.onload = calcularIMC;
