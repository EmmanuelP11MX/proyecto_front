import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComprasService } from 'src/app/services/compras.service';
import { Compra } from 'src/model/Compra';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent {
  public listaCompras: Compra[] = [];
  public mensaje?: string;
  public bloqueoBtnEliminar = false;
  ngOnInit() { }
  constructor(
    private compraService: ComprasService,
    private router: Router
  ) {
    compraService.getList().subscribe({
      next: (resp) => {
        console.log(resp);
        this.listaCompras = Compra.mapParseListJson(resp.message);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
  editSolicitud(pID: number) {
    this.router.navigateByUrl('editar-compra/' + pID);
  }
  mostrarSolicitud(pID: number) {
    this.router.navigateByUrl('ver-compra/' + pID);
  }
  deleteCompra(pID: number) {
    if (!this.bloqueoBtnEliminar) {
      this.bloqueoBtnEliminar = true;
      this.compraService.delete(pID).subscribe({
        next: (resp) => {
          this.bloqueoBtnEliminar = false;
          console.log(resp);
          this.mensaje = 'Categoria Eliminado';
          this.compraService.getList().subscribe({
            next: (resp) => {
              console.log(resp);
              this.listaCompras = Compra.mapParseListJson(resp.message);
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
