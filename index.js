/* // Función para procesar y mostrar los resultados del prode
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
 */
/** 
const partidos = [
    { fecha: '21:00 - 20/6', grupo: 'Grupo A', equipo1: { nombre: 'Argentina', bandera: 'https://flagcdn.com/ar.svg' }, equipo2: { nombre: 'Canadá', bandera: 'https://flagcdn.com/ca.svg' } },
    { fecha: '21:00 - 21/6', grupo: 'Grupo A', equipo1: { nombre: 'Chile', bandera: 'https://flagcdn.com/cl.svg' }, equipo2: { nombre: 'Perú', bandera: 'https://flagcdn.com/pe.svg' } },
    { fecha: '19:00 - 22/6', grupo: 'Grupo B', equipo1: { nombre: 'Ecuador', bandera: 'https://flagcdn.com/ec.svg' }, equipo2: { nombre: 'Venezuela', bandera: 'https://flagcdn.com/ve.svg' } },
    { fecha: '22:00 - 22/6', grupo: 'Grupo B', equipo1: { nombre: 'México', bandera: 'https://flagcdn.com/mx.svg' }, equipo2: { nombre: 'Jamaica', bandera: 'https://flagcdn.com/jm.svg' } },
    { fecha: '19:00 - 23/6', grupo: 'Grupo C', equipo1: { nombre: 'Estados Unidos', bandera: 'https://flagcdn.com/us.svg' }, equipo2: { nombre: 'Bolivia', bandera: 'https://flagcdn.com/bo.svg' } },
    { fecha: '22:00 - 23/6', grupo: 'Grupo C', equipo1: { nombre: 'Uruguay', bandera: 'https://flagcdn.com/uy.svg' }, equipo2: { nombre: 'Panamá', bandera: 'https://flagcdn.com/pa.svg' } },
    { fecha: '19:00 - 24/6', grupo: 'Grupo D', equipo1: { nombre: 'Colombia', bandera: 'https://flagcdn.com/co.svg' }, equipo2: { nombre: 'Paraguay', bandera: 'https://flagcdn.com/py.svg' } },
    { fecha: '22:00 - 24/6', grupo: 'Grupo D', equipo1: { nombre: 'Brasil', bandera: 'https://flagcdn.com/br.svg' }, equipo2: { nombre: 'Costa Rica', bandera: 'https://flagcdn.com/cr.svg' } }
];
**/
const partidos = [
    { fecha: '19:00 - 25/6', grupo: 'Grupo A', equipo1: { nombre: 'Perú', bandera: 'https://flagcdn.com/pe.svg' }, equipo2: { nombre: 'Canadá', bandera: 'https://flagcdn.com/ca.svg' } },
    { fecha: '22:00 - 25/6', grupo: 'Grupo A', equipo1: { nombre: 'Chile', bandera: 'https://flagcdn.com/cl.svg' }, equipo2: { nombre: 'Argentina', bandera: 'https://flagcdn.com/ar.svg' } },
    { fecha: '19:00 - 26/6', grupo: 'Grupo B', equipo1: { nombre: 'Ecuador', bandera: 'https://flagcdn.com/ec.svg' }, equipo2: { nombre: 'Jamaica', bandera: 'https://flagcdn.com/jm.svg' } },
    { fecha: '22:00 - 26/6', grupo: 'Grupo B', equipo1: { nombre: 'Venezuela', bandera: 'https://flagcdn.com/ve.svg' }, equipo2: { nombre: 'México', bandera: 'https://flagcdn.com/mx.svg' } },
    { fecha: '19:00 - 27/6', grupo: 'Grupo C', equipo1: { nombre: 'Panamá', bandera: 'https://flagcdn.com/pa.svg' }, equipo2: { nombre: 'Estados Unidos', bandera: 'https://flagcdn.com/us.svg' } },
    { fecha: '22:00 - 27/6', grupo: 'Grupo C', equipo1: { nombre: 'Uruguay', bandera: 'https://flagcdn.com/uy.svg' }, equipo2: { nombre: 'Bolivia', bandera: 'https://flagcdn.com/bo.svg' } },
    { fecha: '19:00 - 28/6', grupo: 'Grupo D', equipo1: { nombre: 'Colombia', bandera: 'https://flagcdn.com/co.svg' }, equipo2: { nombre: 'Costa Rica', bandera: 'https://flagcdn.com/cr.svg' } },
    { fecha: '22:00 - 28/6', grupo: 'Grupo D', equipo1: { nombre: 'Paraguay', bandera: 'https://flagcdn.com/py.svg' }, equipo2: { nombre: 'Brasil', bandera: 'https://flagcdn.com/br.svg' } }
];

const participantes = [
    {
        nombre: 'Tincho',
        img: './img/aguara.jpg'
    },
    {
        nombre: 'Memeito',
        img: './img/aguara.jpg'
    },
    {
        nombre: 'Marto',
        img: './img/aguara.jpg'
    },
    {
        nombre: 'Sucio Can',
        img: './img/aguara.jpg'
    },
    {
        nombre: 'K K K BEZA',
        img: './img/aguara.jpg'
    },
    {
        nombre: 'Cagavedgar',
        img: './img/aguara.jpg'
    },
    {
        nombre: 'El Negro73',
        img: './img/aguara.jpg'
    }
]

// Función para generar los partidos dinámicamente
function generateMatches() {
    const container = document.getElementById('matchesContainer');

    partidos.forEach((partido, index) => {
        // Con createElemente creo un div y lo almceno en una variable
        const matchDiv = document.createElement('div');
        // A mi variable le agrego una clase para css
        matchDiv.classList.add('match');
        // A mi variable le inserto un innerHTML para crear mi partido
        matchDiv.innerHTML = `
            <p>${partido.fecha} - ${partido.equipo1.nombre} vs. ${partido.equipo2.nombre} (${partido.grupo})</p>
            <div class="team">
                <img src="${partido.equipo1.bandera}" alt="${partido.equipo1.nombre}" class="flag">
                <input type="number" id="result_${index}_1" min="0" placeholder="0">
                <span>vs</span>
                <input type="number" id="result_${index}_2" min="0" placeholder="0">
                <img src="${partido.equipo2.bandera}" alt="${partido.equipo2.nombre}" class="flag">
            </div>
        `;

        container.appendChild(matchDiv);
    });
}

// Llamar a la función para generar los partidos al cargar la página
document.addEventListener('DOMContentLoaded', generateMatches);

// Función para procesar y mostrar los resultados del prode
function submitProde() {

    const nombre = document.getElementById('name').value;
    const resultsContainer = document.getElementById('results');

    const campeon = document.getElementById('campeon').value;

    resultsContainer.innerHTML = ''; // Limpiar contenido anterior si hay alguno

    const nombreElement = document.createElement('p');
    nombreElement.textContent = `Nombre: ${nombre}`;
    resultsContainer.appendChild(nombreElement);

    const participante = participantes.find(participante => participante.nombre.toLowerCase() === nombre.toLowerCase());
    if (participante) {
        const imgElement = document.createElement('img');
        imgElement.src = participante.img;
        imgElement.alt = participante.nombre;
        imgElement.classList.add('participant-img'); // Agrega una clase CSS
        resultsContainer.appendChild(imgElement);
    }

    const campeonElement = document.createElement('p');
    campeonElement.textContent = `Seleccion Campeona: ${campeon}`
    resultsContainer.appendChild(campeonElement)

    partidos.forEach((partido, index) => {
        const resultado1 = document.getElementById(`result_${index}_1`).value || 0;
        const resultado2 = document.getElementById(`result_${index}_2`).value || 0;

        const resultadoPartido = document.createElement('p');
        resultadoPartido.textContent = `${partido.equipo1.nombre} ${resultado1} - ${resultado2} ${partido.equipo2.nombre}`;
        resultsContainer.appendChild(resultadoPartido);
    });
}

const jugadoresContainer = document.getElementById('jugadores')
participantes.forEach(jugador => {
    const jugadorDiv = document.createElement('div')
    jugadorDiv.classList.add('jugadores')
    jugadorDiv.innerHTML = `
        <p>${jugador.nombre}</p>
        <img src=${jugador.img} alt=${jugador.nombre} class="participant-img">
    `

    jugadoresContainer.appendChild(jugadorDiv)
})
//mongodb://host.docker.internal:27017/coder_53120