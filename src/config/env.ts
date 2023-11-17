import { Routes } from "@angular/router";
import { HomeComponent } from "src/app/componente/home/home.component";
import { CrearMarcasComponent } from "src/app/componente/crear-marcas/crear-marcas.component";
import { ListaMarcasComponent } from "src/app/componente/lista-marcas/lista-marcas.component";
import { MarcasComponent } from "src/app/componente/marcas/marcas.component";
import { LoginComponent } from "src/app/login/login.component";
import { ProductosComponent } from "src/app/componente/productos/productos.component";
import { ListaProductosComponent } from "src/app/componente/lista-productos/lista-productos.component";
import { CrearProductosComponent } from "src/app/componente/crear-productos/crear-productos.component";
import { ListaCategoriaComponent } from "src/app/componente/lista-categoria/lista-categoria.component";
import { CategoriasComponent } from "src/app/componente/categorias/categorias.component";
import { CrearCategoriasComponent } from "src/app/componente/crear-categorias/crear-categorias.component";
import { ListaClientesComponent } from "src/app/componente/lista-clientes/lista-clientes.component";
import { CrearClientesComponent } from "src/app/componente/crear-clientes/crear-clientes.component";
import { ClientesComponent } from "src/app/componente/clientes/clientes.component";

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
        new ItemMenu(6, 'Lista Categoria', 'lista-categoria'),
        new ItemMenu(7, 'Crear Categoria', 'crear-categoria'),
        new ItemMenu(8, 'Lista Clientes', 'lista-clientes'),
        new ItemMenu(9, 'Crear Clientes', 'crear-clientes'),
        new ItemMenu(10, 'Cerrar sesion', 'login'),
    ];

    export const routers: Routes = [
        { path: '', component: HomeComponent },
        { path: 'lista-marcas', component: ListaMarcasComponent },
        { path: 'crear-marcas', component: CrearMarcasComponent },
        { path: 'editar-marcas/:id', component: CrearMarcasComponent },
        { path: 'ver-marcas/:id', component: MarcasComponent },
        
        { path: 'lista-producto', component: ListaProductosComponent },
        { path: 'crear-producto', component: CrearProductosComponent }, //
        { path: 'editar-producto/:id', component: CrearProductosComponent },
        { path: 'ver-producto/:id', component: ProductosComponent },
        { path: 'lista-categoria', component: ListaCategoriaComponent },
        { path: 'crear-categoria', component: CrearCategoriasComponent }, //
        { path: 'editar-categoria/:id', component:CrearCategoriasComponent },
        { path: 'ver-categoria/:id', component: CategoriasComponent },
        { path: 'lista-clientes', component: ListaClientesComponent },
        { path: 'crear-clientes', component: CrearClientesComponent },
        { path: 'editar-clientes/:id', component: CrearClientesComponent },
        { path: 'ver-clientes/:id', component: ClientesComponent },
        

        { path: 'login', component: LoginComponent }
    ];

}