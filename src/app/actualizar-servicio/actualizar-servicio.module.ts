import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarServicioPageRoutingModule } from './actualizar-servicio-routing.module';

import { ActualizarServicioPage } from './actualizar-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ActualizarServicioPageRoutingModule
  ],
  declarations: [ActualizarServicioPage]
})
export class ActualizarServicioPageModule {}
