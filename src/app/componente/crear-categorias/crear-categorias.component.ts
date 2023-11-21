import { Component } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Categorias } from 'src/model/Categorias';

@Component({
  selector: 'app-crear-categorias',
  templateUrl: './crear-categorias.component.html',
  styleUrls: ['./crear-categorias.component.css']
})
export class CrearCategoriasComponent {
  categoria!: Categorias;
  mensaje!: string;
  cargando: any;
  constructor(private categoriaService: CategoriasService) {
    this.categoria = new Categorias (-1, '', '');
  }
  submit() {
    //this.categoria.estado_solicitud_id = 1;
    this.categoriaService.create(this.categoria).subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
    this.mensaje = 'Categoria Creada';
  }
}
