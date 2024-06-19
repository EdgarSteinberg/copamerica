// Función para procesar y mostrar los resultados del prode
function submitProde() {
    const nombre = document.getElementById('name').value;
    // Definir estructura de partidos y resultados
    const partidos = [
        { equipo1: 'Argentina', equipo2: 'Canadá', resultado1: document.getElementById('argentinaResult').value, resultado2: document.getElementById('canadaResult').value },
        { equipo1: 'Chile', equipo2: 'Perú', resultado1: document.getElementById('chileResult').value, resultado2: document.getElementById('peruResult').value },
        { equipo1: 'Ecuador', equipo2: 'Venezuela', resultado1: document.getElementById('ecuadorResult').value, resultado2: document.getElementById('venezuelaResult').value },
        { equipo1: 'México', equipo2: 'Jamaica', resultado1: document.getElementById('mexicoResult').value, resultado2: document.getElementById('jamaicaResult').value },
        { equipo1: 'Estados Unidos', equipo2: 'Bolivia', resultado1: document.getElementById('estadosUnidosResult').value, resultado2: document.getElementById('boliviaResult').value },
        { equipo1: 'Uruguay', equipo2: 'Panamá', resultado1: document.getElementById('uruguayResult').value, resultado2: document.getElementById('panamaResult').value },
        { equipo1: 'Colombia', equipo2: 'Paraguay', resultado1: document.getElementById('colombiaResult').value, resultado2: document.getElementById('paraguayResult').value },
        { equipo1: 'Brasil', equipo2: 'Costa Rica', resultado1: document.getElementById('brasilResult').value, resultado2: document.getElementById('costaRicaResult').value }
    ];



    // Mostrar resultados en el contenedor #results
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Limpiar contenido anterior si hay alguno

    // Mostrar nombre del usuario
    const nombreElement = document.createElement('p');
    nombreElement.textContent = `Nombre: ${nombre}`;
    resultsContainer.appendChild(nombreElement);

    partidos.forEach(partido => {
        const resultadoPartido = document.createElement('p');
        resultadoPartido.textContent = `${partido.equipo1} ${partido.resultado1} - ${partido.resultado2} ${partido.equipo2}`;
        resultsContainer.appendChild(resultadoPartido);
    });
}
