import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarFacturaAnuladaPageRoutingModule } from './listar-factura-anulada-routing.module';

import { ListarFacturaAnuladaPage } from './listar-factura-anulada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ListarFacturaAnuladaPageRoutingModule
  ],
  declarations: [ListarFacturaAnuladaPage]
})
export class ListarFacturaAnuladaPageModule {}
