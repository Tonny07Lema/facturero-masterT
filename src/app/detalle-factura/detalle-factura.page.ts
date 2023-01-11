import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { Factura } from '../entidades';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.page.html',
  styleUrls: ['./detalle-factura.page.scss'],
})
export class DetalleFacturaPage implements OnInit {
  @Input() detalle: any;
  public listaDetalles: any;
  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private toast: ToastController,
  ) { }
  ngOnInit() {
    this.listaFacturaDetalles();
  }
  listaFacturaDetalles() {
    let facturaDela = new Factura
    facturaDela = this.detalle
    this.listaDetalles = facturaDela.detalles
  }
  regresar() {
    this.modalCtrl.dismiss();
  }
}