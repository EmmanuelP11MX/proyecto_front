export class Compra_Producto {
    id!: number;
    precio!: number;
    cantidad!: number;
    subtotal!: number;
    compra_id: number;
    producto_id!: number;
    created_at: Date;
    updated_at: Date;
    constructor(id: number, precio: number, cantidad: number, subtotal:number, compra_id:number, producto_id:number, created_at: Date, updated_at: Date) {
        this.id = id;
        this.precio = precio;
        this.cantidad = cantidad;
        this.subtotal = subtotal;
        this.compra_id = compra_id;
        this.producto_id = producto_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    static mapParseListJson(json:[]):Array<Compra_Producto>{
        return json.map(
            (element)=>{
                return element as Compra_Producto;
            }
        );
    }
}