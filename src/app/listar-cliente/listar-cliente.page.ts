import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../api/cliente.service';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ActualizarClientePage } from '../actualizar-cliente/actualizar-cliente.page';
import { Cliente } from '../entidades';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.page.html',
  styleUrls: ['./listar-cliente.page.scss'],
})
export class ListarClientePage implements OnInit {
  public listaCliente: any = [];
  constructor(
    private clienteService: ClienteService,
    private toastController: ToastController,
    private modalCtrl:ModalController,
  ) { }

  ngOnInit() {
    this.listarCliente();
  }
  listarCliente() {
    this.clienteService.listar().subscribe(data => {
      console.log(data);
      this.listaCliente = data;
    })
  }
  eliminarCliente(id:number) {
    this.clienteService.eliminar(id).subscribe(data => {
      console.log(data);
      this.listarCliente()
      this.mostrarMensaje('Cliente Eliminado')
    })
  }
  async actualizar(id:number) {
    const modal = await this.modalCtrl.create({
      component:ActualizarClientePage,
      componentProps:{
        'idCliente': id,
      }
    });
    await modal.present();
    await modal.onDidDismiss();
    this.listarCliente();
  }
  async actualizarCli(cliente:Cliente) {
    const modal = await this.modalCtrl.create({
      component:ActualizarClientePage,
      componentProps:{
        'clienteUpdate': cliente,
      }
    });
    await modal.present();
    await modal.onDidDismiss();
    this.listarCliente();
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
