import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorias } from 'src/model/Categorias';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-crear-categorias',
  templateUrl: './crear-categorias.component.html',
  styleUrls: ['./crear-categorias.component.css']
})
export class CrearCategoriasComponent {
  categorias!: Categorias;
  mensaje!: string;
  cargando: boolean = false;
  constructor(
    private categoriaService: CategoriasService, 
    private activaRouter: ActivatedRoute
    ) {
    if (activaRouter.snapshot.paramMap.get('id') != null) {
      this.cargando = true;
      categoriaService
        .get(Number(activaRouter.snapshot.paramMap.get('id')))
        .subscribe({
          next: (resp) => {
            this.categorias = resp.data as Categorias;
            this.cargando = false;
          },
          error: (err) => {
            console.log(err.error.msg);
            this.cargando = false;
          },
        });
    } else {
      this.categorias = new Categorias(-1, '', '');
    }
  }
  submit() {
    this.categorias.estado_solicitud_id = 1;
    if (this.categorias.id < 0) {
      this.categoriaService.create(this.categorias).subscribe({
        next: (resp) => {
          console.log(resp);
          this.mensaje = 'Categorias Creada';
        },
        error: (err) => {
          console.log(err.error.msg);
          this.mensaje = err.error.msg;
        },
      });
    } else {
      this.categoriaService
        .update(this.categorias.id, this.categorias)
        .subscribe({
          next: (resp) => {
            console.log(resp);
            this.mensaje = 'Categorias Actualizada';
          },
          error: (err) => {
            console.log(err.error.msg);
            this.mensaje = err.error.msg;
          },
        });
    }
  }
}
