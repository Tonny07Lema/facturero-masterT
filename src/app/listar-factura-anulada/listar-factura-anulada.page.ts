import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../api/factura.service';
import { ModalController, ToastController } from '@ionic/angular';
import { Factura } from '../entidades';
import { Router } from '@angular/router';
import { DetalleFacturaPage } from '../detalle-factura/detalle-factura.page';


@Component({
  selector: 'app-listar-factura-anulada',
  templateUrl: './listar-factura-anulada.page.html',
  styleUrls: ['./listar-factura-anulada.page.scss'],
})
export class ListarFacturaAnuladaPage implements OnInit {
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
    this.facturaService.ListarTodasFacturasAnuladas(this.IdUser).subscribe(data => {
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
