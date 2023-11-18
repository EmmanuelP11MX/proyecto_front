export class Cliente {
    id!: number;
    nombre!: string;
    apellidos!: string;

    constructor(id: number, nombre: string, apellidos: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    static mapParseListJson(json: []): Array<Cliente> {
        return json.map(
            (element) => {
                return element as Cliente;
            }
        );
    }
}
