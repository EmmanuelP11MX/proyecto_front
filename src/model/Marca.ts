export class Marca {
    id!: number;
    nombre!: string;
    descripcion!: string;
    estado_solicitud_id!: number;
    constructor(id: number, nombre: string, descripcion: string, estado_solicitud_id: number) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.estado_solicitud_id = estado_solicitud_id;
    }
    static mapParseListJson(json:[]):Array<Marca>{
        return json.map(
            (element)=>{
                return element as Marca;
            }
        );
    }
}