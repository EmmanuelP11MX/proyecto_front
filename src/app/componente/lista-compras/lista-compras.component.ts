import { Component } from '@angular/core';
import { Compra } from 'src/model/Compra';
import { CompraService } from '../../services/compra.service';
import { Router } from '@angular/router';

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
    private compraService: CompraService,
    private router: Router
  ) {
    compraService.getList().subscribe({
      next: (resp) => {
        console.log(resp);
        this.listaCompras = Compra.mapParseListJson(resp.data);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
  editCompra(pID: number) {
    this.router.navigateByUrl('editar-compras/' + pID);
  }
  mostrarCompra(pID: number) {
    this.router.navigateByUrl('ver-compras/' + pID);
  }
  crearCompra(){
    this.router.navigateByUrl('crear-compras');
  }
  deleteCompra(pID: number) {
    if (!this.bloqueoBtnEliminar) {
      this.bloqueoBtnEliminar = true;
      this.compraService.delete(pID).subscribe({
        next: (resp) => {
          this.bloqueoBtnEliminar = false;
          console.log(resp);
          this.mensaje = 'Compra Eliminado';
          this.compraService.getList().subscribe({
            next: (resp) => {
              console.log(resp);
              this.listaCompras = Compra.mapParseListJson(resp.data);
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
