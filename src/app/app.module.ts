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
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './componente/productos/productos.component'
import { ListaProductosComponent } from './componente/lista-productos/lista-productos.component';
import { CrearProductosComponent } from './componente/crear-productos/crear-productos.component';

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
    CrearProductosComponent
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
