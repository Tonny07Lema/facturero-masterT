import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarfacturaPageRoutingModule } from './registrarfactura-routing.module';

import { RegistrarfacturaPage } from './registrarfactura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegistrarfacturaPageRoutingModule
  ],
  declarations: [RegistrarfacturaPage]
})
export class RegistrarfacturaPageModule {}
