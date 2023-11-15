export class Marca {
    id!: number;
    nombre!: string;
    descripcion!: string;
    constructor(id: number, nombre: string, descripcion: string) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
    static mapParseListJson(json:[]):Array<Marca>{
        return json.map(
            (element)=>{
                return element as Marca;
            }
        );
    }
}