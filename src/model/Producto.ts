export class Producto {
    id!: number;
    nombre!: string;
    descripcion!: string;
    precio!: number;
    cantidad_disponible!: number;
    categoria_id : number;
    marca_id : number;

    constructor(id: number, nombre: string, descripcion:string, precio: number ,cantidad_disponible: number, categoria_id: number, marca_id: number) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad_disponible = cantidad_disponible;
        this.categoria_id = categoria_id;
        this.marca_id = marca_id;

    }
    static mapParseListJson(json:[]):Array<Producto>{
        return json.map(
            (element)=>{
                return element as Producto;
            }
        );
    }
}