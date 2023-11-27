import { Component } from '@angular/core';
import { Cliente } from 'src/model/Clientes';
import { ClienteService } from 'src/app/services/clientes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.css']
})
export class CrearClientesComponent {
  cliente!: Cliente;
  mensaje!: string;
  cargando: boolean = false;

  constructor(
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute
  ) {
    if (activatedRoute.snapshot.paramMap.get('id') != null) {
      this.cargando = true;
      clienteService
        .get(Number(activatedRoute.snapshot.paramMap.get('id')))
        .subscribe({
          next: (resp) => {
            this.cliente = resp.data as Cliente;
            this.cargando = false;
          },
          error: (err) => {
            console.log(err.error.msg);
            this.cargando = false;
          },
        });
    } else {
      this.cliente = new Cliente(-1, '', '', 0);
    }
  }

  submit() {
    if (this.cliente.id < 0) {
      this.clienteService.create(this.cliente).subscribe({
        next: (resp) => {
          console.log(resp);
          this.mensaje = 'Cliente Creado';
        },
        error: (err) => {
          console.log(err.error.msg);
          this.mensaje = err.error.msg;
        },
      });
    } else {
      this.clienteService
        .update(this.cliente.id, this.cliente)
        .subscribe({
          next: (resp) => {
            console.log(resp);
            this.mensaje = 'Cliente Actualizado';
          },
          error: (err) => {
            console.log(err.error.msg);
            this.mensaje = err.error.msg;
          },
        });
    }
  }
}
