import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../api/factura.service';
import { ToastController } from '@ionic/angular';

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
}
