import { Component } from '@angular/core';
import { Compra_Producto } from 'src/model/Compra_Producto';
import { CompraProductoService } from 'src/app/services/compra-producto.service';

@Component({
  selector: 'app-crear-compra-producto',
  templateUrl: './crear-compra-producto.component.html',
  styleUrls: ['./crear-compra-producto.component.css']
})
export class CrearCompraProductoComponent {
  compra_producto!: Compra_Producto;
  mensaje!: string;
  cargando: any;
  constructor(private compraProductoService: CompraProductoService) {
    this.compra_producto = new Compra_Producto (-1, 0, 0,0,-1,-1, new Date(), new Date());
  }
  submit() {
    //this.categoria.estado_solicitud_id = 1;
    this.compraProductoService.create(this.compra_producto).subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
    this.mensaje = 'Compra-Producto Creada';
  }
}
