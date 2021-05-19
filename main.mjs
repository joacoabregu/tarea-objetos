import Autor from "./autor.mjs";
import Notas from "./notas.mjs";

let borges = new Autor({
    nombre: "Jorge Luis Borges",
    bio: "Jorge Francisco Isidoro Luis Borges (Buenos Aires, 24 de agosto de 1899-Ginebra, 14 de junio de 1986), más conocido como Jorge Luis Borges, fue un destacado escritor de cuentos, poemas y ensayos argentino, extensamente considerado una figura clave tanto para la literatura en habla hispana como para la literatura universal.​ También fue bibliotecario, profesor, conferencista, crítico literario y traductor. Sus dos libros más conocidos, Ficciones y El Aleph, publicados en los años cuarenta, son recopilaciones de cuentos conectados por temas comunes de forma fantástica; como los sueños, los laberintos, las bibliotecas, los espejos, los autores ficticios y las mitologías europeas (como la griega y la nórdica), con argumentos que exploran ideas filosóficas relacionadas, por ejemplo, con la memoria, la eternidad, la posmodernidad y la metaficción.3 Las obras de Borges han contribuido ampliamente a la literatura filosófica, al género fantástico y al posestructuralismo. Según marcan numerosos críticos, el comienzo del realismo mágico en la literatura hispanoamericana del siglo XX se debe en gran parte a su obra.",
    libros: ['Historia universal de la infamia', 'Ficciones', 'El Aleph'],
    generos: ['Poesía', 'Cuento', 'Ensayo'],
    mail: 'jorgitoborges@borges.com' 
});

let notaBorges = new Notas({
    nota: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis sapien, hendrerit ut arcu eu, gravida porttitor felis. Cras libero elit, imperdiet eu ipsum in, feugiat vestibulum sem. Suspendisse potenti. Pellentesque elementum quam quis ex luctus tempus sed id est. Suspendisse vitae magna venenatis, tristique velit a, convallis sem. Fusce tristique risus a vulputate pulvinar. Phasellus maximus neque a sagittis rutrum. Aliquam erat volutpat. Vestibulum nec libero a purus dapibus rutrum. Pellentesque finibus ultricies laoreet. Nulla fringilla hendrerit ante ac venenatis. Maecenas pulvinar lacinia accumsan. Nulla libero dolor, molestie aliquet sagittis nec, consequat eu mauris. Pellentesque dui sem, bibendum dignissim venenatis a, placerat quis libero. Ut non sollicitudin eros. Etiam tempus, sapien nec egestas dignissim, ipsum quam tempor nunc, vel fermentum sapien sapien nec lacus. Cras eu felis massa. Nullam volutpat iaculis turpis fringilla commodo. Quisque ac dui eu augue pharetra iaculis. Proin maximus lacus at facilisis condimentum. Nam ultrices consectetur eros, eu pellentesque diam tempor vel. In sodales tincidunt est sollicitudin viverra. ',
    fecha: '19/5/1955',
    tag: ['nuevo', 'poesia']
});

// console.log(borges);
// console.log(borges.getBio());
// console.log(borges.getGenero());
// console.log(borges.getNombre());
// console.log(borges.getLibros());
// console.log(borges.getMail());

/* try {
    borges.setNombre('Julio')
} catch (error) {
    console.error(error.message)
}
try {
    borges.setMail('jor@borges.com')
} catch (error) {
    console.error(error.message)
}
try {
    borges.setGeneros(['Ciencia Ficcion'])
} catch (error) {
    console.error(error.message)
}
try {
    borges.setBio('Probando Bio')
} catch (error) {
    console.error(error.message)
}
try {
    borges.setLibros(['Harry Potter'])
} catch (error) {
    console.error(error.message)
}

 console.log(borges); */

 // console.log(notaBorges);
// console.log(notaBorges.getNota());
// console.log(notaBorges.getFecha());
// console.log(notaBorges.getTag());

/* try {
    notaBorges.setNota('Probando 123')
} catch (error) {
    console.error(error.message)
}
try {
    notaBorges.setFecha('12/12/1960')
} catch (error) {
    console.error(error.message)
}
try {
    notaBorges.setTag(['Probando 123', 'Probando 456'])
} catch (error) {
    console.error(error.message)
}
console.log(notaBorges); */