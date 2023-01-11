import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarServicioPageRoutingModule } from './listar-servicio-routing.module';

import { ListarServicioPage } from './listar-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ListarServicioPageRoutingModule
  ],
  declarations: [ListarServicioPage]
})
export class ListarServicioPageModule {}
