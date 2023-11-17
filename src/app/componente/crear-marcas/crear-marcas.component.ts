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
    this.marca = new Marca(-1, '', '');
    if (activaRouter.snapshot.paramMap.get('id') != null) {
      this.cargando = true;
      marcaService
        .get(Number(activaRouter.snapshot.paramMap.get('id')))
        .subscribe({
          next: (resp) => {
            this.marca = resp.data as Marca;
            this.cargando = false;
            //this.solicitud = new Solicitud(resp.data.id, resp.data.titulo_corto, resp.data.descripcion, 0);
          },
          error: (err) => {
            console.log(err.error.msg);
            this.cargando = false;
          },
        });
    } else {
      this.marca = new Marca(-1, '', '');
    }
  }
  submit() {
    //this.marca.estado_solicitud_id = 1;
    this.marcaService.create(this.marca).subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
    this.mensaje = 'Marca Creada';
  }
}