export class Compra {
    id!: number;
    subtotal!: number;
    total!: number;
    created_at: Date;
    updated_at: Date;
    constructor(id: number, subtotal: number, total: number, created_at: Date, updated_at: Date) {
        this.id = id;
        this.subtotal = subtotal;
        this.total = total;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    static mapParseListJson(json:[]):Array<Compra>{
        return json.map(
            (element)=>{
                return element as Compra;
            }
        );
    }
}