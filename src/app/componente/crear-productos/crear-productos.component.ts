import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarcaService } from 'src/app/services/marca.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Marca } from 'src/model/Marca';
import { Producto } from 'src/model/Producto';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent {
  public listaMarcas: Marca[] = [];
  producto!: Producto;
  mensaje!: string;
  cargando: any;
  constructor(
    private marcaService: MarcaService,
    private productosService: ProductoService,
    private activaRouter: ActivatedRoute) {
    /*this.producto = new Producto(-1, '','',0,0, 0,0);*/
    marcaService.getList().subscribe({
      next: (resp) => {
        console.log(resp);
        this.listaMarcas = Marca.mapParseListJson(resp.data);
      },
      error: (err) => {
        console.log(err.error.msg);
      },
    });
    if(activaRouter.snapshot.paramMap.get('id') != null){
      this.cargando = true;
        productosService
          .get(Number(activaRouter.snapshot.paramMap.get('id')))
          .subscribe({
            next: (resp) => {
              this.producto = resp.data as Producto;
              this.cargando = false;
            },
            error: (err) => {
              console.log(err.error.msg);
              this.cargando = false;
            },
          });
    }else{
      this.producto = new Producto(-1, '','',0,0, 0,0);
    }
  }

  submit() {
    if(this.producto.id < 0){
      this.productosService.create(this.producto).subscribe({
        next: (resp) => {
          console.log(resp);
          this.mensaje = 'Producto Creado';
        },
        error: (err) => {
          console.log(err.error.msg);
          this.mensaje = err.error.msg;
        },
      });
    }else{
      this.productosService
        .update(this.producto.id, this.producto)
        .subscribe({
          next: (resp) => {
            console.log(resp);
            this.mensaje = 'Producto Actualizado';
          },
          error: (err) => {
            console.log(err.error.msg);
            this.mensaje = err.error.msg;
          },
        });
    }
    
  }
}
