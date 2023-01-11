import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../api/factura.service';
import { ToastController } from '@ionic/angular';


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

}
