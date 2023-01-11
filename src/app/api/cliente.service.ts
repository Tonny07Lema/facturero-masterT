import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../entidades';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  endpoint=environment.backEndServer + 'api/cliente/';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private httpClient:HttpClient ) { }

  registrar(cliente:Cliente): Observable<any> {
    let finalUrl = this.endpoint+'create';
    return this.httpClient.post<Cliente>(finalUrl,JSON.stringify(cliente),this.httpOptions);
  }
  listar(): Observable<any> {
    let finalUrl = this.endpoint+'findAll';
    return this.httpClient.get<Cliente>(finalUrl);
  }
  eliminar(id:Number): Observable<any> {
    let finalUrl = this.endpoint+'delete/'+id;
    return this.httpClient.get(finalUrl);
  }
  actualizar(cliente:Cliente): Observable<any> {
    let finalUrl = this.endpoint+'update';
    return this.httpClient.post<Cliente>(finalUrl,JSON.stringify(cliente),this.httpOptions);
  }
  buscar(cedula:string): Observable<any> {
    let finalUrl = this.endpoint+'findByCedula/'+cedula;
    return this.httpClient.get<Cliente>(finalUrl);
  }

}
