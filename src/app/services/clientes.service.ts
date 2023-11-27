import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cliente } from 'src/model/Clientes';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  private hosting: string = 'http://127.0.0.1:8000/';
  private action: string = 'api/clientes'; 
  private options: any;
  private authSecretKey: string = 'Token_Bearer';

  constructor(private http: HttpClient) {
    this.options = {
      headers: new HttpHeaders({
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
    return this.http.post(this.hosting + this.action, cliente, this.options);
  }

  update(id: number, cliente: Cliente): Observable<any> {
    return this.http.put(this.hosting + this.action + '/' + id, cliente, this.options);
  }

  get(id: number): Observable<any> {
    return this.http.get(this.hosting + this.action + '/' + id);
  }
}
