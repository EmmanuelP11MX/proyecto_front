import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/model/Clientes';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent {
  public listaClientes: Cliente[] = [];
  public mensaje?: string;
  public bloqueoBtnEliminar = false;

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {
    clientesService.getList().subscribe({
      next: (resp) => {
        console.log(resp);
        this.listaClientes = Cliente.mapParseListJson(resp.message);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }

  editCliente(id: number) {
    this.router.navigateByUrl('editar-cliente/' + id);
  }

  verCliente(id: number) {
    this.router.navigateByUrl('ver-cliente/' + id);
  }

  deleteCliente(id: number) {
    if (!this.bloqueoBtnEliminar) {
      this.bloqueoBtnEliminar = true;
      this.clientesService.delete(id).subscribe({
        next: (resp) => {
          this.bloqueoBtnEliminar = false;
          console.log(resp);
          this.mensaje = 'Registro Eliminado';
          this.clientesService.getList().subscribe({
            next: (resp) => {
              console.log(resp);
              this.listaClientes = Cliente.mapParseListJson(resp.message);
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
