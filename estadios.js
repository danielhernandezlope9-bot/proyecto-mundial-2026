const estadios = [

{
    nombre: "Estadio Azteca",
    imagen: "img/azteca.jpg",
    ciudad: "Ciudad de México, México",
    capacidad: "87,523 espectadores",
    año: "1966",
    dato: "Primer estadio en recibir tres Copas del Mundo.",
    ubicacion: "https://maps.google.com/?q=Estadio+Azteca+Mexico"
},

{
    nombre: "Estadio BBVA",
    imagen: "img/bbva.jpg",
    ciudad: "Monterrey, México",
    capacidad: "53,500 espectadores",
    año: "2015",
    dato: "Casa de los Rayados de Monterrey.",
    ubicacion: "https://maps.google.com/?q=Estadio+BBVA+Monterrey"
},

{
    nombre: "Estadio Akron",
    imagen: "img/akron.jpg",
    ciudad: "Guadalajara, México",
    capacidad: "49,850 espectadores",
    año: "2010",
    dato: "Casa del Club Deportivo Guadalajara.",
    ubicacion: "https://maps.google.com/?q=Estadio+Akron+Guadalajara"
},

{
    nombre: "Mercedes-Benz Stadium",
    imagen: "img/mercedes-benz.jpg",
    ciudad: "Atlanta, Estados Unidos",
    capacidad: "71,000 espectadores",
    año: "2017",
    dato: "Casa del Atlanta United y Atlanta Falcons.",
    ubicacion: "https://maps.google.com/?q=Mercedes-Benz+Stadium+Atlanta"
},

{
    nombre: "Gillette Stadium",
    imagen: "img/gillette.jpg",
    ciudad: "Foxborough, Estados Unidos",
    capacidad: "65,878 espectadores",
    año: "2002",
    dato: "Casa de los New England Patriots.",
    ubicacion: "https://maps.google.com/?q=Gillette+Stadium+Foxborough"
},

{
    nombre: "AT&T Stadium",
    imagen: "img/att-stadium.jpg",
    ciudad: "Arlington, Estados Unidos",
    capacidad: "80,000 espectadores",
    año: "2009",
    dato: "Casa de los Dallas Cowboys.",
    ubicacion: "https://maps.google.com/?q=AT&T+Stadium+Arlington"
},

{
    nombre: "NRG Stadium",
    imagen: "img/nrg-stadium.jpg",
    ciudad: "Houston, Estados Unidos",
    capacidad: "72,220 espectadores",
    año: "2002",
    dato: "Primer estadio de la NFL con techo retráctil.",
    ubicacion: "https://maps.google.com/?q=NRG+Stadium+Houston"
},

{
    nombre: "Arrowhead Stadium",
    imagen: "img/arrowhead.jpg",
    ciudad: "Kansas City, Estados Unidos",
    capacidad: "76,416 espectadores",
    año: "1972",
    dato: "Casa de los Kansas City Chiefs.",
    ubicacion: "https://maps.google.com/?q=Arrowhead+Stadium+Kansas+City"
},

{
    nombre: "SoFi Stadium",
    imagen: "img/sofi-stadium.jpg",
    ciudad: "Los Ángeles, Estados Unidos",
    capacidad: "70,000 espectadores",
    año: "2020",
    dato: "Uno de los estadios más modernos del mundo.",
    ubicacion: "https://maps.google.com/?q=SoFi+Stadium+Los+Angeles"
},

{
    nombre: "Hard Rock Stadium",
    imagen: "img/hard-rock.jpg",
    ciudad: "Miami, Estados Unidos",
    capacidad: "64,767 espectadores",
    año: "1987",
    dato: "Casa de los Miami Dolphins.",
    ubicacion: "https://maps.google.com/?q=Hard+Rock+Stadium+Miami"
},

{
    nombre: "MetLife Stadium",
    imagen: "img/metlife.jpg",
    ciudad: "Nueva York/Nueva Jersey, Estados Unidos",
    capacidad: "82,500 espectadores",
    año: "2010",
    dato: "Sede de la final del Mundial 2026.",
    ubicacion: "https://maps.google.com/?q=MetLife+Stadium+New+Jersey"
},

{
    nombre: "Lincoln Financial Field",
    imagen: "img/lincoln-financial.jpg",
    ciudad: "Filadelfia, Estados Unidos",
    capacidad: "69,176 espectadores",
    año: "2003",
    dato: "Casa de los Philadelphia Eagles.",
    ubicacion: "https://maps.google.com/?q=Lincoln+Financial+Field+Philadelphia"
},

{
    nombre: "Levi's Stadium",
    imagen: "img/levis-stadium.jpg",
    ciudad: "Santa Clara, Estados Unidos",
    capacidad: "70,000 espectadores",
    año: "2014",
    dato: "Casa de los San Francisco 49ers.",
    ubicacion: "https://maps.google.com/?q=Levis+Stadium+Santa+Clara"
},

{
    nombre: "Lumen Field",
    imagen: "img/lumen-field.jpg",
    ciudad: "Seattle, Estados Unidos",
    capacidad: "69,000 espectadores",
    año: "2002",
    dato: "Casa de Seattle Seahawks y Sounders.",
    ubicacion: "https://maps.google.com/?q=Lumen+Field+Seattle"
},

{
    nombre: "BMO Field",
    imagen: "img/bmo-field.jpg",
    ciudad: "Toronto, Canadá",
    capacidad: "45,736 espectadores",
    año: "2007",
    dato: "Casa del Toronto FC.",
    ubicacion: "https://maps.google.com/?q=BMO+Field+Toronto"
},

{
    nombre: "BC Place",
    imagen: "img/bc-place.jpg",
    ciudad: "Vancouver, Canadá",
    capacidad: "54,500 espectadores",
    año: "1983",
    dato: "Estadio con techo retráctil.",
    ubicacion: "https://maps.google.com/?q=BC+Place+Vancouver"
}

];



const contenedor = document.getElementById("lista-estadios");


estadios.forEach(estadio => {

    contenedor.innerHTML += `

    <div class="estadio">

        <h3>${estadio.nombre}</h3>

        <div class="info-estadio">

            <img src="${estadio.imagen}" alt="${estadio.nombre}">

            <h3>${estadio.nombre}</h3>

            <p><b>Ciudad:</b> ${estadio.ciudad}</p>

            <p><b>Capacidad:</b> ${estadio.capacidad}</p>

            <p><b>Año:</b> ${estadio.año}</p>

            <p><b>Dato:</b> ${estadio.dato}</p>

            <a href="${estadio.ubicacion}" target="_blank">
                Ver ubicación
            </a>

        </div>

    </div>

    `;

});