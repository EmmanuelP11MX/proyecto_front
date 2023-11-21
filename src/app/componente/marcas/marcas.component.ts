import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MarcaService } from 'src/app/services/marca.service';
import { Marca } from 'src/model/Marca';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent {
  private cargando: boolean = true;
  public marca?: Marca;

  constructor(
    private marcaService: MarcaService,
    private activaRouter: ActivatedRoute,
    private router: Router
  ) {
    marcaService
      .get(Number(activaRouter.snapshot.paramMap.get('id')))
      .subscribe({
        next: (resp) => {
          this.marca = resp.data as Marca;
          console.log(resp);
          this.cargando = false;
        },
        error: (err) => {
          console.log(err.error.msg);
          this.cargando = false;
        },
      });
  }
  eliminarMarca(pID: number) {
    this.marcaService.delete(pID).subscribe({
      next: (resp) => {
        this.router.navigate(['lista-marcas']);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
}
