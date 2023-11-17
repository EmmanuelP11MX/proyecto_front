import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompraProductoService } from 'src/app/services/compra-producto.service';
import { Compra_Producto } from 'src/model/Compra_Producto';

@Component({
  selector: 'app-lista-compra-producto',
  templateUrl: './lista-compra-producto.component.html',
  styleUrls: ['./lista-compra-producto.component.css']
})
export class ListaCompraProductoComponent {
  public listaCompraProducto: Compra_Producto[] = [];
  public mensaje?: string;
  public bloqueoBtnEliminar = false;
  ngOnInit() { }
  constructor(
    private compraProductoService: CompraProductoService,
    private router: Router
  ) {
    compraProductoService.getList().subscribe({
      next: (resp) => {
        console.log(resp);
        this.listaCompraProducto = Compra_Producto.mapParseListJson(resp.message);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
  editSolicitud(pID: number) {
    this.router.navigateByUrl('editar-compra-producto/' + pID);
  }
  mostrarSolicitud(pID: number) {
    this.router.navigateByUrl('ver-compra-producto/' + pID);
  }
  deleteCompraProducto(pID: number) {
    if (!this.bloqueoBtnEliminar) {
      this.bloqueoBtnEliminar = true;
      this.compraProductoService.delete(pID).subscribe({
        next: (resp) => {
          this.bloqueoBtnEliminar = false;
          console.log(resp);
          this.mensaje = 'Categoria Eliminado';
          this.compraProductoService.getList().subscribe({
            next: (resp) => {
              console.log(resp);
              this.listaCompraProducto = Compra_Producto.mapParseListJson(resp.message);
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
