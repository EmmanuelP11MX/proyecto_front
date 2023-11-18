import { Component } from '@angular/core';
import { Cliente } from 'src/model/Clientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.css']
})
export class CrearClientesComponent {
  cliente!: Cliente;
  mensaje!: string;

  constructor(private clientesService: ClientesService) {
    this.cliente = new Cliente(-1, '', '');
  }

  submit() {
    this.clientesService.create(this.cliente).subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
    this.mensaje = 'Cliente Creado';
  }
}
