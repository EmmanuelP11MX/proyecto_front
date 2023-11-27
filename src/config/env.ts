import { Routes } from "@angular/router";
import { authGuardGuard } from 'src/app/guards/auth-guard.guard';
import { HomeComponent } from "src/app/componente/home/home.component";
import { CrearMarcasComponent } from "src/app/componente/crear-marcas/crear-marcas.component";
import { ListaMarcasComponent } from "src/app/componente/lista-marcas/lista-marcas.component";
import { MarcasComponent } from "src/app/componente/marcas/marcas.component";
import { LoginComponent } from "src/app/componente/login/login.component";
import { ProductosComponent } from "src/app/componente/productos/productos.component";
import { ListaProductosComponent } from "src/app/componente/lista-productos/lista-productos.component";
import { CrearProductosComponent } from "src/app/componente/crear-productos/crear-productos.component";
import { ListaCategoriaComponent } from "src/app/componente/lista-categoria/lista-categoria.component";
import { CategoriasComponent } from "src/app/componente/categorias/categorias.component";
import { CrearCategoriasComponent } from "src/app/componente/crear-categorias/crear-categorias.component";
import { ListaClientesComponent } from "src/app/componente/lista-clientes/lista-clientes.component";
import { CrearClientesComponent } from "src/app/componente/crear-clientes/crear-clientes.component";
import { ClientesComponent } from "src/app/componente/clientes/clientes.component";
import { CrearComprasComponent } from "src/app/componente/crear-compras/crear-compras.component";
import { ListaComprasComponent } from "src/app/componente/lista-compras/lista-compras.component";
import { CrearCompraProductoComponent } from "src/app/componente/crear-compra-producto/crear-compra-producto.component";
import { ListaCompraProductoComponent } from "src/app/componente/lista-compra-producto/lista-compra-producto.component";
import { CambioPasswordComponent } from "src/app/componente/cambio-password/cambio-password.component";

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
        new ItemMenu(1, 'Home', '/'),
        new ItemMenu(2, 'Marcas', 'lista-marcas'),
        new ItemMenu(3, 'Productos', 'lista-producto'),
        new ItemMenu(5, 'Lista Categoria', 'lista-categoria'),
        new ItemMenu(6, 'Crear Categoria', 'crear-categoria'),
        new ItemMenu(7, 'Lista Clientes', 'lista-clientes'),
        new ItemMenu(8, 'Crear Clientes', 'crear-clientes'),
        new ItemMenu(9, 'Crear Compra','crear-compra'),
        new ItemMenu(10, 'Listar Compras', 'listar-compras'),
        new ItemMenu(11, 'Crear Compra-Producto', 'crear-compra-producto'),
        new ItemMenu(12, 'Listar Compra-Producto', 'listar-compra-producto'),
        new ItemMenu(13, 'Cambiar Password', 'cambio-password'),
        
    ];

    export const routers: Routes = [
        { path: '', component: HomeComponent, canActivate: [authGuardGuard] },
        { path: 'lista-marcas', component: ListaMarcasComponent, canActivate: [authGuardGuard] },
        { path: 'crear-marcas', component: CrearMarcasComponent, canActivate: [authGuardGuard] },
        { path: 'editar-marcas/:id', component: CrearMarcasComponent, canActivate: [authGuardGuard] },
        { path: 'ver-marcas/:id', component: MarcasComponent, canActivate: [authGuardGuard] },
        
        { path: 'lista-producto', component: ListaProductosComponent, canActivate: [authGuardGuard] },
        { path: 'crear-producto', component: CrearProductosComponent, canActivate: [authGuardGuard] }, 
        { path: 'editar-producto/:id', component: CrearProductosComponent, canActivate: [authGuardGuard] },
        { path: 'ver-producto/:id', component: ProductosComponent, canActivate: [authGuardGuard] },

        { path: 'lista-categoria', component: ListaCategoriaComponent, canActivate: [authGuardGuard] },
        { path: 'crear-categoria', component: CrearCategoriasComponent, canActivate: [authGuardGuard] }, 
        { path: 'editar-categoria/:id', component:CrearCategoriasComponent, canActivate: [authGuardGuard] },
        { path: 'ver-categoria/:id', component: CategoriasComponent, canActivate: [authGuardGuard] },

        { path: 'lista-clientes', component: ListaClientesComponent, canActivate: [authGuardGuard] },
        { path: 'crear-clientes', component: CrearClientesComponent, canActivate: [authGuardGuard] },
        { path: 'editar-clientes/:id', component: CrearClientesComponent, canActivate: [authGuardGuard] },
        { path: 'ver-clientes/:id', component: ClientesComponent, canActivate: [authGuardGuard]},
        
        { path: 'crear-compra', component: CrearComprasComponent, canActivate: [authGuardGuard]},
        { path: 'listar-compras', component: ListaComprasComponent, canActivate: [authGuardGuard]},
        { path: 'editar-compras/id', component: CrearComprasComponent, canActivate: [authGuardGuard]},
        { path: 'crear-compra-producto', component: CrearCompraProductoComponent, canActivate: [authGuardGuard]},
        { path: 'listar-compra-producto', component: ListaCompraProductoComponent, canActivate: [authGuardGuard]},
        { path: 'editar-compra-producto', component: CrearCompraProductoComponent, canActivate: [authGuardGuard]},
        

        { path: 'cambio-password', component: CambioPasswordComponent, canActivate: [authGuardGuard] },
        { path: 'login', component: LoginComponent }
    ];

}