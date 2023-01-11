import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioDPageRoutingModule } from './servicio-d-routing.module';

import { ServicioDPage } from './servicio-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicioDPageRoutingModule
  ],
  declarations: [ServicioDPage]
})
export class ServicioDPageModule {}
