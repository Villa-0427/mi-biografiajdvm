/**
 * Este archivo contiene el contenido de mi biografía.
 */

export const biografia = {
    // Datos que aparecen en la cabecera y en la portada.
    iniciales: 'JV',
    nombre: 'Juan David Villamizar',
    etiqueta: 'Ing. Sistemas',
    profesion: 'Estudiante de Ingeniería en Sistemas de la Universidad el Bosque',
    ubicacion: 'Bogotá 2026',
    correo: 'villamizarmorenojuandavid1@gmail.com',

    portada: {
        indicador: '01 — Mi Vida',
        tituloPrincipal: 'No llegué',
        tituloAcento: 'aquí de golpe.',
        descripcion:
            'Soy Juan David Villamizar Moreno. Esta es la historia de cómo fue que llegué aquí hoy',
        textoBoton: 'Leer el recorrido',
    },

    retrato: {
        subtitulo: 'programación · deporte · disciplina',
        contador: '04 / 06',
        pieIzquierdo: 'Selfie en Raleigh',
        pieDerecho: 'Archivo personal / 2025',
        imagen: 'images/sfjd.jpeg',
    },

    historia: {
        indicador: '02 — Introducción',
        titulo: 'Mi formación',
        tituloAcento: 'académica y origenes',
        ubicacion: 'Bogotá, Colegio Calasanz',
        cita:
            '“La educación no cambia el mundo, cambia a las personas que van a cambiar el mundo” - Paulo Freire',
        parrafos: [
            'Nací en Marzo del año 2008, en un hogar lleno de amor y ternura, nunca me faltó nada siendo hijo único para ese entonces. ' +
            'Estudié en el Jardín Las pequeñas semillas en Cedritos y la mayor parte de mi vida se desarrolló en el norte de la ciudad',
            'Toda mi vida estudié en el mismo colegio, el Calasanz del Norte. No tengo mucho más que contar que ' +
            'salí del mismo felizmente graduado y con mi diploma de Bachillerato Internacional',
        ],
    },

    // Estos son los tres hitos que se muestran antes de la línea del tiempo.
    hitos: [
        {
            numero: '30 / 11',
            etiqueta: '2024 · Prom',
            titulo: 'Mi Graduación del Colegio',
        },
        {
            numero: '14 / 02',
            etiqueta: '2025 · Nuevo Comienzo',
            titulo: 'Mi llegada a la Universidad',
        },
        {
            numero: '11 / 08',
            etiqueta: '2026 · El presente',
            titulo: 'Yo en la actualidad',
        },
    ],

    principios: [
        {
            numero: '01',
            titulo: 'Me gusta Millonarios',
            descripcion:
                'Mi papá, desde que tengo memoria, me llevaba al estadio a apoyar a su equipo del alma ' +
                'y se me prendió la pasión',
        },
        {
            numero: '02',
            titulo: 'Amo el Voley',
            descripcion:
                'Me costaba encajar en el colegio y como era pequeño no servía para muchos deportes ' +
                'de selección estudiantil. Un día llegó un profesor y me propuso entrar al equipo y ' +
                'desde entonces no he parado de amar este deporte',
        },
        {
            numero: '03',
            titulo: 'No podría vivir sin música',
            descripcion:
                'Amo la música y es muy necesaria en mi día a día, con ella siento más energía y me ' +
                'ayuda a complementar etapas del día como estudiar, jugar videojuegos o simplemente descansar',
        },
        {
            numero: '04',
            titulo: 'Los videojuegos son lo mejor',
            descripcion:
                'Tuve una Nintendo WII y un xbox360. Fui un niño gamer y ahora soy un adulto joven gamer :)',
        },
    ],

    contacto: {
        indicador: '06 — Actualidad',
        tituloPrincipal: '¿Que hago',
        tituloAcento: 'hoy en mi actualidad?',
        descripcion:
            'Hoy juego videojuegos, estudio fuerte en la Universidad, juego voley con mis amigos, ' +
            'cuido de mi familia y estoy en búsqueda de un trabajo',
    },

    redes: {
        linkedin:
            'https://www.linkedin.com/in/juan-david-villamizar-moreno-6193683ba?utm_source=share_via&utm_content=profile&utm_medium=member_android',
        instagram:
            'https://www.instagram.com/juanda.villa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    },
} as const;

/**
 * Cada objeto representa una parada de la línea del tiempo.
 * side indica en qué lado aparece la tarjeta en pantallas grandes.
 */
export const lineaDelTiempo = [
    {
        year: '2008',
        title: 'Mi Nacimiento',
        place: 'Bogotá, Colombia',
        copy:
            'Nací en la clínica Colombia a las 4:00pm un 13 de Marzo. Fui el primer hijo (y el único) de mi ' +
            'madre y mi padre como pareja. Papá: Néstor Villamizar - Mamá: Lilia Moreno',
        note: 'Tenía la cabeza un poco deforme según mi padre',
        imagen: 'https://i.imgur.com/emhc25h.jpeg',
        side: 'left',
    },
    {
        year: '2012',
        title: 'Primer Día de clases',
        place: 'Colegio Calasanz, Bogotá',
        copy: 'Estaba bastante nervioso pero allí pude hacer mis primeros amigos y amigas que durarían hasta hoy',
        note: 'Pocas amistades son tan valiosas como las escolares',
        imagen: 'https://i.imgur.com/fmtaOSr.jpeg',
        side: 'right',
    },
    {
        year: '2014',
        title: 'Jose Gabriel',
        place: 'Clínica Cardio Infantil, Bogotá',
        copy:
            'Nacería el segundo hijo para mis padres, solo que con una cardiopatía de ventrículo izquierdo ' +
            'y estaría en la familia 40 días hasta su fallecimiento',
        note: 'De los momentos más duros de mi vida',
        side: 'left',
    },
    {
        year: '2019',
        title: 'Millonarios',
        place: 'Xcoli, Bogotá',
        copy:
            'Empezaría a jugar fútbol en la academia de mis sueños debido a las posibilidades económicas de ' +
            'mi familia. Mi pasión se vio reflejada en mis primeros días de entrenos',
        note: 'Ganamos varios torneos y fui considerado para un equipo con nivel más elevado',
        imagen: 'https://a.espncdn.com/i/teamlogos/soccer/500/5484.png',
        side: 'right',
    },
    {
        year: '2019',
        title: 'Salida con los jugadores',
        place: 'Estadio el Campín, Bogotá',
        copy:
            'Esta vez salí con los jugadores para un partido de liga que tenían, fue bastante ' +
            'emocionante para mí, no lo olvidaré jamás',
        note: 'SML <3',
        imagen: 'https://i.imgur.com/0BjXxNf.jpeg',
        side: 'left',
    },
    {
        year: '2020',
        title: 'Sinding Larsen Johanson',
        place: 'Bogotá, Colombia',
        copy:
            'Fui diagnosticado con una enfermedad/lesión en la rodilla que era detonada por mi crecimiento, ' +
            'por lo que no podría volver a jugar fútbol hasta que terminara de crecer completamente, sino el dolor ' +
            'no me dejaría continuar jugando',
        note: 'Mi primera decepción con el deporte',
        side: 'right',
    },
    {
        year: '2024',
        title: 'Mi Graduación',
        place: 'Hace tan solo un par de años',
        copy: 'La ceremonia fue increíble y pocas veces la pasé tan bien en un evento tan formal',
        note: 'Fue una noche bonita',
        imagen: 'https://i.imgur.com/R79hOGn.jpeg',
        side: 'left',
    },
    {
        year: '2026',
        title: 'Mi Actualidad',
        place: 'Ahora',
        copy:
            'Ahora he seguido estudiando, amando el voley y la ingeniería y espero que sea un ' +
            'camino bastante fructífero',
        note: 'Grandes Expectativas',
        imagen: 'https://i.imgur.com/2z00ek1.jpeg',
        side: 'right',
    },
] as const;