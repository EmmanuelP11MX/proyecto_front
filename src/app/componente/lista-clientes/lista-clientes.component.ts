import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/model/Clientes';
import { ClienteService } from '../../services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  public listaClientes: Cliente[] = [];
  public mensaje?: string;
  public bloqueoBtnEliminar = false;

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit() {
    this.clienteService.getList().subscribe({
      next: (resp) => {
        console.log(resp);
        this.listaClientes = Cliente.mapParseListJson(resp.data);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }

  editCliente(pID: number) { 
    this.router.navigateByUrl('editar-clientes/' + pID);
  }

  mostrarCliente(pID: number) {
    this.router.navigateByUrl('ver-clientes/' + pID);
  }

  crearCliente() {
    this.router.navigateByUrl('crear-clientes');
  }

  deleteCliente(pID: number) {
    if (!this.bloqueoBtnEliminar) {
      this.bloqueoBtnEliminar = true;
      this.clienteService.delete(pID).subscribe({
        next: (resp) => {
          this.bloqueoBtnEliminar = false;
          console.log(resp);
          this.mensaje = 'Cliente Eliminado';
          this.clienteService.getList().subscribe({
            next: (resp) => {
              console.log(resp);
              this.listaClientes = Cliente.mapParseListJson(resp.data);
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
