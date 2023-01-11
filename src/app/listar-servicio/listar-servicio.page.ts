import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../api/servicio.service';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Detalle, Servicio } from 'src/app/entidades';
import { ActualizarServicioPage } from '../actualizar-servicio/actualizar-servicio.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-servicio',
  templateUrl: './listar-servicio.page.html',
  styleUrls: ['./listar-servicio.page.scss'],
})
export class ListarServicioPage implements OnInit {
  IdUser: any="";
  public listaSerivicio: any = [];

  agregarC(service:Servicio): void{
    let detalle = new Detalle;
    detalle.cantidad = 1
    detalle.precioUnitario = service.precioUnitario
    detalle.total = service.precioUnitario
    detalle.servicioId = service.id
    detalle.nombreProducto = service.descripcion
    this.mostrarMensaje("Servicio Agregado a la factura");
    this.servicioService.agregarAlCarrito(detalle);
  }

  constructor(
    private servicioService: ServicioService,
    private toastController: ToastController,
    private modalCtrl:ModalController,
    private ruta: Router,
  ) { }

  ngOnInit() {
    this.IdUser = sessionStorage.getItem("IdUser");
    this.listarSerivicio();
  }
  listarSerivicio() {
    this.servicioService.listar(this.IdUser).subscribe(data => {
      console.log(this.IdUser);
      this.listaSerivicio = data;
    })
  }
  eliminarServicio(id:number) {
    this.servicioService.eliminar(id).subscribe(data => {
      console.log(data);
      this.listarSerivicio()
      this.mostrarMensaje('Servicio Eliminado')
    })
  }
  async actualizarServicio(servicio:Servicio) {
    const modal = await this.modalCtrl.create({
      component:ActualizarServicioPage,
      componentProps:{
        'servicioUp': servicio,
      }
    });
    await modal.present();
    await modal.onDidDismiss();
    this.listarSerivicio();
  }
  async mostrarMensaje(mensaje: any) {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }
  cerrarSesion(){
    // IdUser
    sessionStorage.getItem('IdUser');
    sessionStorage.removeItem('IdUser');
    this.ruta.navigate(['/'])
  }
}
