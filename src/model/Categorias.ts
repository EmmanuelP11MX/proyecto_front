export class Categorias {
    id!: number;
    nombre!: string;
    descripcion!: string;
    estado_solicitud_id!: number;
    constructor(id: number, nombre: string, descripcion: string) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
    static mapParseListJson(json:[]):Array<Categorias>{
        return json.map(
            (element)=>{
                return element as Categorias;
            }
        );
    }
}