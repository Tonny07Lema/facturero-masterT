import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarFacturaEmitidasPageRoutingModule } from './listar-factura-emitidas-routing.module';

import { ListarFacturaEmitidasPage } from './listar-factura-emitidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ListarFacturaEmitidasPageRoutingModule
  ],
  declarations: [ListarFacturaEmitidasPage]
})
export class ListarFacturaEmitidasPageModule {}
