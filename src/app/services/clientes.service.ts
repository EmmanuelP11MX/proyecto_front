import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from 'src/model/Clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private hosting: string = 'http://127.0.0.1:8000/';
  private action: string = 'api/clientes';
  private options: any;
  private authSecretKey: string = 'Token_Bearer';

  constructor(private http: HttpClient) {
    this.options = {
      headers: new Headers({
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem(this.authSecretKey)
      })
    };
  }

  getList(): Observable<any> {
    return this.http.get(this.hosting + this.action);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.hosting + this.action + '/' + id);
  }

  create(cliente: Cliente): Observable<any> {
    return this.http.post(this.hosting + this.action, cliente);
  }

  update(id: number, cliente: Cliente): Observable<any> {
    return this.http.put(this.hosting + this.action + '/' + id, cliente);
  }

  get(id: number): Observable<any> {
    return this.http.get(this.hosting + this.action + '/' + id);
  }
}
