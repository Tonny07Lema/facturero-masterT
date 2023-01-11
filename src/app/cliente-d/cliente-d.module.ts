import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteDPageRoutingModule } from './cliente-d-routing.module';

import { ClienteDPage } from './cliente-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteDPageRoutingModule
  ],
  declarations: [ClienteDPage]
})
export class ClienteDPageModule {}
