import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarServicioPageRoutingModule } from './registrar-servicio-routing.module';

import { RegistrarServicioPage } from './registrar-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistrarServicioPageRoutingModule
  ],
  declarations: [RegistrarServicioPage]
})
export class RegistrarServicioPageModule {}
