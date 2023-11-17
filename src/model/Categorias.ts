export class Categorias {
    id!: number;
    nombre!: string;
    descripcion!: string;
    created_at: Date;
    updated_at: Date;
    estado_solicitud_id!: number;
    constructor(id: number, nombre: string, descripcion: string, created_at: Date, updated_at: Date) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    static mapParseListJson(json:[]):Array<Categorias>{
        return json.map(
            (element)=>{
                return element as Categorias;
            }
        );
    }
}