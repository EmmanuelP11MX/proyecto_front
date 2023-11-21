import { Component } from '@angular/core';
import { Marca } from 'src/model/Marca';
import { MarcaService } from 'src/app/services/marca.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-marcas',
  templateUrl: './crear-marcas.component.html',
  styleUrls: ['./crear-marcas.component.css']
})
export class CrearMarcasComponent {
  marca!: Marca;
  mensaje!: string;
  cargando: boolean = false;
  constructor(
    private marcaService: MarcaService, 
    private activaRouter: ActivatedRoute
    ) {
    if (activaRouter.snapshot.paramMap.get('id') != null) {
      this.cargando = true;
      marcaService
        .get(Number(activaRouter.snapshot.paramMap.get('id')))
        .subscribe({
          next: (resp) => {
            this.marca = resp.data as Marca;
            this.cargando = false;
          },
          error: (err) => {
            console.log(err.error.msg);
            this.cargando = false;
          },
        });
    } else {
      this.marca = new Marca(-1, '', '', 0);
    }
  }
  submit() {
    this.marca.estado_solicitud_id = 1;
    if (this.marca.id < 0) {
      this.marcaService.create(this.marca).subscribe({
        next: (resp) => {
          console.log(resp);
          this.mensaje = 'Marca Creada';
        },
        error: (err) => {
          console.log(err.error.msg);
          this.mensaje = err.error.msg;
        },
      });
    } else {
      this.marcaService
        .update(this.marca.id, this.marca)
        .subscribe({
          next: (resp) => {
            console.log(resp);
            this.mensaje = 'Marca Actualizada';
          },
          error: (err) => {
            console.log(err.error.msg);
            this.mensaje = err.error.msg;
          },
        });
    }
  }
}
