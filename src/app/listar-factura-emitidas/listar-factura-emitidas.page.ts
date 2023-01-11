import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../api/factura.service';
import { ModalController, ToastController } from '@ionic/angular';
import { Factura } from '../entidades';
import { DetalleFacturaPage } from '../detalle-factura/detalle-factura.page';

@Component({
  selector: 'app-listar-factura-emitidas',
  templateUrl: './listar-factura-emitidas.page.html',
  styleUrls: ['./listar-factura-emitidas.page.scss'],
})
export class ListarFacturaEmitidasPage implements OnInit {
  IdUser: any = "";
  public listaFactura: any = [];
  constructor(
    private facturaService: FacturaService,
    private toastController: ToastController,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.IdUser = sessionStorage.getItem("IdUser");
    this.listarFacturas();
  }
  listarFacturas() {
    this.facturaService.ListarTodasFacturasUsuario(this.IdUser).subscribe(data => {
      console.log(this.IdUser);
      this.listaFactura = data;
    })
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
}
