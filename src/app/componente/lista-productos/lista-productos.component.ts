import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/model/Producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {
  public listaProductos: Producto[] = [];
  public mensaje?: string;
  public bloqueoBtnEliminar = false;
  ngOnInit() { }
  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {
    productoService.getList().subscribe({
      next: (resp) => {
        console.log(resp);
        this.listaProductos = Producto.mapParseListJson(resp.data);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
  crearProducto(){
    this.router.navigateByUrl('crear-producto');
  }
  editProducto(pID: number) {
    this.router.navigateByUrl('editar-producto/' + pID);
  }
  mostrarProducto(pID: number) {
    this.router.navigateByUrl('ver-producto/' + pID);
  }
  deleteProducto(pID: number) {
    if (!this.bloqueoBtnEliminar) {
      this.bloqueoBtnEliminar = true;
      this.productoService.delete(pID).subscribe({
        next: (resp) => {
          this.bloqueoBtnEliminar = false;
          console.log(resp);
          this.mensaje = 'Producto Eliminado';
          this.productoService.getList().subscribe({
            next: (resp) => {
              console.log(resp);
              this.listaProductos = Producto.mapParseListJson(resp.data);
            },
            error: (err) => {
              console.log(err.error.msg);
            },
          });
        },
        error: (err) => {
          console.log(err.error.msg);
        },
      });
    }
  }
}
