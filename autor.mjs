export default class Autor {
    constructor(data = {}) {
        this.nombre = data.nombre || '';
        this.bio = data.bio || '';
        this.libros = data.libros || [''];
        this.generos = data.generos || [''];
        this.mail = data.mail || '';
    }

    setNombre(_nombre) {
        if(typeof _nombre === 'string'){
            this.nombre = _nombre;  
        } else {
            throw new Error('nombre must be a string');
        }   
    }
    setBio(_bio) {
        if(typeof _bio === 'string'){
            this.bio = _bio; 
        } else {
            throw new Error('bio must be a string');
        }   
        
    }
    setLibros(_libros) {
        if(Array.isArray(_libros)){
            this.libros = _libros;
        } else {
            throw new Error('libros must be an array');
        }   
        
    }
    setGeneros(_genero) {
        if(Array.isArray(_genero)){
            this.generos= _genero;
        } else {
            throw new Error('generos must be an array');
        }   
    }
    setMail(_mail) {
        if(typeof _mail === 'string'){
            this.mail= _mail;
        } else {
            throw new Error('mail must be a string');
        }  
    }

    getNombre() {
        return this.nombre;
    }
    getBio() {
        return this.bio;
    }
    getLibros() {
        return this.libros;
    }
    getGenero() {
        return this.generos;
    }
    getMail() {
        return this.mail;
    }
}