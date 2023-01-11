import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../api/servicio.service';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Detalle, Servicio } from 'src/app/entidades';
import { ActualizarServicioPage } from '../actualizar-servicio/actualizar-servicio.page';

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
    this.mostrarMensaje("Servicio Agregado a la factura");
    this.servicioService.agregarAlCarrito(detalle);
  }

  constructor(
    private servicioService: ServicioService,
    private toastController: ToastController,
    private modalCtrl:ModalController,
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
  async actualizarServicio(id:number) {
    const modal = await this.modalCtrl.create({
      component:ActualizarServicioPage,
      componentProps:{
        'idCliente': id,
      }
    });
    await modal.present();
    await modal.onDidDismiss();
    this.listarSerivicio();
  }
  async mostrarMensaje(mensaje: any) {
    const toast = await this.toastController.create({
      position: 'top',
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }

}
