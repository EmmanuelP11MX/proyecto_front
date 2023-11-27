export class Cliente {
    id!: number;
    nombre!: string;
    apellidos!: string;
    estado_solicitud_id!: number;
    constructor(id: number, nombre: string, apellidos: string, estado_solicitud_id: number) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.estado_solicitud_id = estado_solicitud_id;
    }
    static mapParseListJson(json:[]):Array<Cliente>{
        return json.map(
            (element)=>{
                return element as Cliente;
            }
        );
    }
}