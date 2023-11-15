import { Component } from '@angular/core';
import { Marca } from 'src/model/Marca';
import { MarcaService } from 'src/app/services/marca.service';

@Component({
  selector: 'app-crear-marcas',
  templateUrl: './crear-marcas.component.html',
  styleUrls: ['./crear-marcas.component.css']
})
export class CrearMarcasComponent {
  marca!: Marca;
  mensaje!: string;
  constructor(private marcaService: MarcaService) {
    this.marca = new Marca(-1, '', '');
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
