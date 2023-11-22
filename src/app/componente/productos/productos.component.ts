import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/model/Producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  private cargando: boolean = true;
  public producto?: Producto;

  constructor(
    private productoService: ProductoService,
    private activaRouter: ActivatedRoute,
    private router: Router
  ) {
    productoService
      .get(Number(activaRouter.snapshot.paramMap.get('id')))
      .subscribe({
        next: (resp) => {
          this.producto = resp.data as Producto;
          console.log(resp);
          this.cargando = false;
        },
        error: (err) => {
          console.log(err.error.msg);
          this.cargando = false;
        },
      });
  }
  eliminarProducto(pID: number) {
    this.productoService.delete(pID).subscribe({
      next: (resp) => {
        this.router.navigate(['lista-producto']);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }

}
