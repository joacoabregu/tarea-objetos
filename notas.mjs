export default class Notas {
    constructor(data = {}) {
        this.nota = data.nota || '';
        this.fecha = data.fecha || '';
        this.tag = data.tag || [''];
    }

    getNota() { return this.nota; };
    getFecha() { return this.fecha; };
    getTag() { return this.tag};

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