export default class Notas {
    constructor(data = {}) {
        this.autor = data.autor || '';
        this.nota = data.nota || '';
        this.fecha = data.fecha || '';
        this.tag = data.tag || [''];
    }
    getAutor() { return this.autor; };
    getNota() { return this.nota; };
    getFecha() { return this.fecha; };
    getTag() { return this.tag};

    setAutor(_autor) {
        this.autor = _autor;
    }
    setNota(_nota) {
        this.nota = _nota;
    }
    setFecha(_fecha) {
        this.fecha = _fecha;
    }
    setTag(_tag) {
        this.tag = _tag;
    } 
}