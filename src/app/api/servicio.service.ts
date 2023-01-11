import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servicio,Detalle } from '../entidades';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  endpoint=environment.backEndServer + 'api/servicio/';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private httpClient:HttpClient) { }

  registrar(servicio:Servicio): Observable<any> {
    let finalUrl = this.endpoint+'create';
    return this.httpClient.post<Servicio>(finalUrl,JSON.stringify(servicio),this.httpOptions);
  }
  listar(id:Number): Observable<any> {
    let finalUrl = this.endpoint+'findAll/'+id;
    return this.httpClient.get<Servicio>(finalUrl);
  }
  eliminar(id:Number): Observable<any> {
    let finalUrl = this.endpoint+'delete/'+id;
    return this.httpClient.get(finalUrl);
  }
  actualizar(servicio:Servicio): Observable<any> {
    let finalUrl = this.endpoint+'update';
    return this.httpClient.post<Servicio>(finalUrl,JSON.stringify(servicio),this.httpOptions);
  }

  //Agregar el detalle//

  private detalles: Detalle[] = []
  private detalleObjeto: BehaviorSubject<Detalle[]> = new BehaviorSubject(this.detalles);
  public detalle2: Observable<Detalle[]> = this.detalleObjeto.asObservable();

  agregarAlCarrito(detalle: Detalle){
    let index = this.detalles.findIndex(b => b.servicioId === detalle.servicioId);
    if (index === -1) {
      this.detalles.push(detalle);
    }
    else {
      this.detalles[index].cantidad = this.detalles[index].cantidad + 1
      this.detalles[index].total = this.detalles[index].cantidad * this.detalles[index].precioUnitario
    }
    if (detalle.cantidad == 0) {
      this.detalles.splice(index, 1);
    }
    detalle.cantidad=1;
  }
  borrar(){
    this.detalles=[];
    this.detalleObjeto=new BehaviorSubject(this.detalles);
    this.detalle2=this.detalleObjeto.asObservable();
    
  }
}
