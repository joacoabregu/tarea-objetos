import Autor from "./autor.mjs";

let borges = new Autor({
    nombre: "Jorge Luis Borges",
    bio: "Jorge Francisco Isidoro Luis Borges (Buenos Aires, 24 de agosto de 1899-Ginebra, 14 de junio de 1986), más conocido como Jorge Luis Borges, fue un destacado escritor de cuentos, poemas y ensayos argentino, extensamente considerado una figura clave tanto para la literatura en habla hispana como para la literatura universal.​ También fue bibliotecario, profesor, conferencista, crítico literario y traductor. Sus dos libros más conocidos, Ficciones y El Aleph, publicados en los años cuarenta, son recopilaciones de cuentos conectados por temas comunes de forma fantástica; como los sueños, los laberintos, las bibliotecas, los espejos, los autores ficticios y las mitologías europeas (como la griega y la nórdica), con argumentos que exploran ideas filosóficas relacionadas, por ejemplo, con la memoria, la eternidad, la posmodernidad y la metaficción.3 Las obras de Borges han contribuido ampliamente a la literatura filosófica, al género fantástico y al posestructuralismo. Según marcan numerosos críticos, el comienzo del realismo mágico en la literatura hispanoamericana del siglo XX se debe en gran parte a su obra.",
    libros: ['Historia universal de la infamia', 'Ficciones', 'El Aleph'],
    generos: ['Poesía', 'Cuento', 'Ensayo'],
    mail: 'jorgitoborges@borges.com' 
});

// console.log(borges);
// console.log(borges.getBio());
// console.log(borges.getGenero());
// console.log(borges.getNombre());
// console.log(borges.getLibros());
// console.log(borges.getMail());

