import { Component } from '@angular/core';
import { Marca } from 'src/model/Marca';
import { MarcaService } from '../../services/marca.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-marcas',
  templateUrl: './lista-marcas.component.html',
  styleUrls: ['./lista-marcas.component.css']
})
export class ListaMarcasComponent {
  public listaMarcas: Marca[] = [];
  public mensaje?: string;
  public bloqueoBtnEliminar = false;
  ngOnInit() { }
  constructor(
    private marcaService: MarcaService,
    private router: Router
  ) {
    marcaService.getList().subscribe({
      next: (resp) => {
        console.log(resp);
        this.listaMarcas = Marca.mapParseListJson(resp.data);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
  editMarca(pID: number) {
    this.router.navigateByUrl('editar-marcas/' + pID);
  }
  mostrarMarca(pID: number) {
    this.router.navigateByUrl('ver-marcas/' + pID);
  }
  deleteMarca(pID: number) {
    if (!this.bloqueoBtnEliminar) {
      this.bloqueoBtnEliminar = true;
      this.marcaService.delete(pID).subscribe({
        next: (resp) => {
          this.bloqueoBtnEliminar = false;
          console.log(resp);
          this.mensaje = 'Marca Eliminada';
          this.marcaService.getList().subscribe({
            next: (resp) => {
              console.log(resp);
              this.listaMarcas = Marca.mapParseListJson(resp.data);
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
