import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarClientePageRoutingModule } from './listar-cliente-routing.module';

import { ListarClientePage } from './listar-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ListarClientePageRoutingModule
  ],
  declarations: [ListarClientePage]
})
export class ListarClientePageModule {}
