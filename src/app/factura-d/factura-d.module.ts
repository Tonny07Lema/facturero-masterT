import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacturaDPageRoutingModule } from './factura-d-routing.module';

import { FacturaDPage } from './factura-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacturaDPageRoutingModule
  ],
  declarations: [FacturaDPage]
})
export class FacturaDPageModule {}
