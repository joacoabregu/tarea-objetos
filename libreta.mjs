export default class Libreta {

    getNotasAutor(nombre){
        let notas = [];
        for (let i in this) {
            if(this[i].autor === nombre){
                notas.push(this[i].nota);
            }
        };

        return notas;
    }
}
