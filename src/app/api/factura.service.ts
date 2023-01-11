import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Factura } from 'src/app/entidades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  endpoint=environment.backEndServer + 'api/factura/';

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }

  nuevaFactura(factura:Factura) : Observable<any> {
    let finalUrl = this.endpoint+'create';
    return this.httpClient.post<Factura>(finalUrl,JSON.stringify(factura),this.httpOptions);
  }

  ListarTodasFacturas(idU:Number): Observable<any> {
    let finalUrl = this.endpoint+'findAll/'+idU;
    return this.httpClient.get(finalUrl);
  }
  ListarTodasFacturasUsuario(idU:Number): Observable<any> {
    let finalUrl = this.endpoint+'findAll/issued/'+idU;
    return this.httpClient.get(finalUrl);
  }
  ListarTodasFacturasAnuladas(idU:Number): Observable<any> {
    let finalUrl = this.endpoint+'findAll/cancel/'+idU;
    return this.httpClient.get(finalUrl);
  }
  anularFactura(idF:Number): Observable<any> {
    let finalUrl = this.endpoint+'cancel/'+idF;
    return this.httpClient.get(finalUrl);
  }
}
