import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcasComponent } from './componente/marcas/marcas.component';
import { ListaMarcasComponent } from './componente/lista-marcas/lista-marcas.component';
import { CrearMarcasComponent } from './componente/crear-marcas/crear-marcas.component';
import { HomeComponent } from './componente/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componente/login/login.component';
import { ProductosComponent } from './componente/productos/productos.component'
import { ListaProductosComponent } from './componente/lista-productos/lista-productos.component';
import { CrearProductosComponent } from './componente/crear-productos/crear-productos.component';
import { ListaCategoriaComponent } from './componente/lista-categoria/lista-categoria.component';
import { CrearCategoriasComponent } from './componente/crear-categorias/crear-categorias.component';
import { CategoriasComponent } from './componente/categorias/categorias.component';
import { ClientesComponent } from './componente/clientes/clientes.component';
import { CrearClientesComponent } from './componente/crear-clientes/crear-clientes.component';
import { ListaClientesComponent } from './componente/lista-clientes/lista-clientes.component';
import { ListaCompraProductoComponent } from './componente/lista-compra-producto/lista-compra-producto.component';
import { CambioPasswordComponent } from './componente/cambio-password/cambio-password.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcasComponent,
    ListaMarcasComponent,
    CrearMarcasComponent,
    HomeComponent,
    LoginComponent,
    ProductosComponent,
    ListaProductosComponent,
    CrearProductosComponent,
    ListaCategoriaComponent,
    CrearCategoriasComponent,
    CategoriasComponent,
    CategoriasComponent,
    ClientesComponent,
    CrearClientesComponent,
    ListaClientesComponent,
    ListaCompraProductoComponent,
    CambioPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
