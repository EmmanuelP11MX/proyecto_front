import { Routes } from "@angular/router";
import { HomeComponent } from "src/app/componente/home/home.component";
import { CrearMarcasComponent } from "src/app/componente/crear-marcas/crear-marcas.component";
import { ListaMarcasComponent } from "src/app/componente/lista-marcas/lista-marcas.component";
import { MarcasComponent } from "src/app/componente/marcas/marcas.component";
import { LoginComponent } from "src/app/login/login.component";
import { ProductosComponent } from "src/app/componente/productos/productos.component";
import { ListaProductosComponent } from "src/app/componente/lista-productos/lista-productos.component";
import { CrearProductosComponent } from "src/app/componente/crear-productos/crear-productos.component";

export class ItemMenu {
    public id!: number;
    public name!: string;
    public href!: string;
    constructor(id: number, name: string, href: string) {
        this.id = id;
        this.name = name;
        this.href = href;
    }
}
export namespace env {
    export const menu: Array<ItemMenu> = [
        new ItemMenu(1, 'Inicio', '/'),
        new ItemMenu(2, 'Lista Marcas', 'lista-marcas'),
        new ItemMenu(3, 'Crear Marcas', 'crear-marcas'),
        new ItemMenu(4, 'Lista Producto', 'lista-producto'),
        new ItemMenu(5, 'Crear Producto', 'crear-producto'),
        new ItemMenu(6, 'Cerrar sesion', 'login'),
    ];

    export const routers: Routes = [
        { path: '', component: HomeComponent },
        { path: 'lista-marcas', component: ListaMarcasComponent },
        { path: 'crear-marcas', component: CrearMarcasComponent },
        { path: 'editar-marcas/:id', component: CrearMarcasComponent },
        { path: 'ver-marcas/:id', component: MarcasComponent },
        { path: 'lista-producto', component: ListaProductosComponent },
        { path: 'crear-producto', component: CrearProductosComponent },
        { path: 'editar-producto/:id', component: CrearProductosComponent },
        { path: 'ver-producto/:id', component: ProductosComponent },

        { path: 'login', component: LoginComponent }
    ];

}