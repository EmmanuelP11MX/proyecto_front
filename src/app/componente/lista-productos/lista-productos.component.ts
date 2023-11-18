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
        this.listaProductos = Producto.mapParseListJson(resp.message);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
  editSolicitud(pID: number) {
    this.router.navigateByUrl('editar-solicitud/' + pID);
  }
  mostrarSolicitud(pID: number) {
    this.router.navigateByUrl('ver-solicitudes/' + pID);
  }
  deleteProducto(pID: number) {
    if (!this.bloqueoBtnEliminar) {
      this.bloqueoBtnEliminar = true;
      this.productoService.delete(pID).subscribe({
        next: (resp) => {
          this.bloqueoBtnEliminar = false;
          console.log(resp);
          this.mensaje = 'Registro Eliminado';
          this.productoService.getList().subscribe({
            next: (resp) => {
              console.log(resp);
              this.listaProductos = Producto.mapParseListJson(resp.message);
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
