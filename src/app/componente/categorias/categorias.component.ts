import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Categorias } from 'src/model/Categorias';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
[x: string]: any;
  private cargando: boolean = true;
  public categorias?: Categorias;

  constructor(
    private categoriaService: CategoriasService,
    private activaRouter: ActivatedRoute,
    private router: Router
  ) {
    categoriaService
      .get(Number(activaRouter.snapshot.paramMap.get('id')))
      .subscribe({
        next: (resp) => {
          this.categorias = resp.data as Categorias;
          console.log(resp);
          this.cargando = false;
        },
        error: (err) => {
          console.log(err.error.msg);
          this.cargando = false;
        },
      });
  }
  eliminarCategorias(pID: number) {
    this.categoriaService.delete(pID).subscribe({
      next: (resp) => {
        this.router.navigate(['lista-categoria']);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
}
