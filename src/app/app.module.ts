import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcasComponent } from './componente/marcas/marcas.component';
import { ListaMarcasComponent } from './componente/lista-marcas/lista-marcas.component';
import { CrearMarcasComponent } from './componente/crear-marcas/crear-marcas.component';
import { HomeComponent } from './componente/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MarcasComponent,
    ListaMarcasComponent,
    CrearMarcasComponent,
    HomeComponent
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
