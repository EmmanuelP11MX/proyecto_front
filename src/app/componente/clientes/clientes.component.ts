import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/model/Clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  private cargando: boolean = true;
  public cliente?: Cliente;

  constructor(
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    clienteService
      .get(Number(activatedRoute.snapshot.paramMap.get('id')))
      .subscribe({
        next: (resp) => {
          this.cliente = resp.data as Cliente;
          console.log(resp);
          this.cargando = false;
        },
        error: (err) => {
          console.log(err.error.msg);
          this.cargando = false;
        },
      });
  }

  eliminarCliente(pID: number) {
    this.clienteService.delete(pID).subscribe({
      next: (resp) => {
        this.router.navigate(['lista-clientes']);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
}
