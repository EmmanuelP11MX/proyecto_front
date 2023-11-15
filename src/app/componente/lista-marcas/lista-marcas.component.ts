import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marca } from 'src/model/Marca';
import { MarcaService } from '../../services/marca.service';

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
        this.listaMarcas = Marca.mapParseListJson(resp.message);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
  }
  editSolicitud(pID: number) {
    this.router.navigateByUrl('editar-solicitud/' + pID);
  }
  mostrarSolicitud(pID: number) {
    this.router.navigateByUrl('ver-solicitudes/' + pID);
  }
  deleteMarca(pID: number) {
    if (!this.bloqueoBtnEliminar) {
      this.bloqueoBtnEliminar = true;
      this.marcaService.delete(pID).subscribe({
        next: (resp) => {
          this.bloqueoBtnEliminar = false;
          console.log(resp);
          this.mensaje = 'Registro Eliminado';
          this.marcaService.getList().subscribe({
            next: (resp) => {
              console.log(resp);
              this.listaMarcas = Marca.mapParseListJson(resp.message);
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
