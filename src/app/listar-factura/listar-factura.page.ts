import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../api/factura.service';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Factura } from '../entidades';
import { DetalleFacturaPage } from '../detalle-factura/detalle-factura.page';

@Component({
  selector: 'app-listar-factura',
  templateUrl: './listar-factura.page.html',
  styleUrls: ['./listar-factura.page.scss'],
})
export class ListarFacturaPage implements OnInit {
  IdUser: any = "";
  public listaFactura: any = [];
  constructor(
    private facturaService: FacturaService,
    private toastController: ToastController,
    private modalCtrl: ModalController,
    private ruta: Router,
  ) { }

  ngOnInit() {
    this.IdUser = sessionStorage.getItem("IdUser");
    this.listarFacturas();
  }
  listarFacturas() {
    this.facturaService.ListarTodasFacturas(this.IdUser).subscribe(data => {
      console.log(this.IdUser);
      this.listaFactura = data;
    })
  }
  eliminarFactura(id:number) {
    this.facturaService.anularFactura(id).subscribe(data => {
      console.log(data);
      this.listarFacturas();
      this.mostrarMensaje('Factura Anulada');
    })
  }
  async mostrarMensaje(mensaje: any) {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }
  async detallefac(factura:Factura) {
    const modal = await this.modalCtrl.create({
      component: DetalleFacturaPage,
      componentProps: {
        'detalle': factura,
      }
    });
    await modal.present();
    await modal.onDidDismiss();
  }
  cerrarSesion(){
    // IdUser
    sessionStorage.getItem('IdUser');
    sessionStorage.removeItem('IdUser');
    this.ruta.navigate(['/'])
  }
}
