import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../api/factura.service';
import { ToastController } from '@ionic/angular';

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
}
