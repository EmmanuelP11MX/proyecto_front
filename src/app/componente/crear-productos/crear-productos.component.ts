import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/model/Producto';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent {
  producto!: Producto;
  mensaje!: string;
  constructor(private productosService: ProductoService) {
    this.producto = new Producto(-1, '',10,10, 3, 2,);
  }
  submit() {
    this.productosService.create(this.producto).subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
    this.mensaje = 'Productos Creada';
  }
}
