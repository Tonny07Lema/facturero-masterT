import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarClientePageRoutingModule } from './buscar-cliente-routing.module';

import { BuscarClientePage } from './buscar-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BuscarClientePageRoutingModule
  ],
  declarations: [BuscarClientePage]
})
export class BuscarClientePageModule {}
