import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from '../../services/categorias.service';
import { Categorias } from 'src/model/Categorias';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent {
  public listaCategorias: Categorias[] = [];
  public mensaje?: string;
  public bloqueoBtnEliminar = false;
  ngOnInit() { }
  constructor(
    private categoriaService: CategoriasService,
    private router: Router
  ) {
    categoriaService.getList().subscribe({
      next: (resp) => {
        console.log(resp);
        this.listaCategorias = Categorias.mapParseListJson(resp.data);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
  ediCategoria(pID: number) {
    this.router.navigateByUrl('editar-categoria/' + pID);
  }
  mostrarCategoria(pID: number) {
    this.router.navigateByUrl('ver-categoria/' + pID);
  }
  crearCategoria(){
    this.router.navigateByUrl('crear-categoria');
  }
  deleteCategoria(pID: number) {
    if (!this.bloqueoBtnEliminar) {
      this.bloqueoBtnEliminar = true;
      this.categoriaService.delete(pID).subscribe({
        next: (resp) => {
          this.bloqueoBtnEliminar = false;
          console.log(resp);
          this.mensaje = 'Categoria Eliminado';
          this.categoriaService.getList().subscribe({
            next: (resp) => {
              console.log(resp);
              this.listaCategorias = Categorias.mapParseListJson(resp.data);
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
