import { Component } from '@angular/core';
import { Compra } from 'src/model/Compra';
import { ComprasService } from 'src/app/services/compras.service';

@Component({
  selector: 'app-crear-compras',
  templateUrl: './crear-compras.component.html',
  styleUrls: ['./crear-compras.component.css']
})
export class CrearComprasComponent {
  compra!: Compra;
  mensaje!: string;
  cargando: any;
  constructor(private compraService: ComprasService) {
    this.compra = new Compra (-1, 0, 0, new Date(), new Date());
  }
  submit() {
    //this.categoria.estado_solicitud_id = 1;
    this.compraService.create(this.compra).subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
    this.mensaje = 'Compra Creada';
  }
}
