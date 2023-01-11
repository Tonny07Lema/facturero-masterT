import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacturaDPage } from './factura-d.page';

const routes: Routes = [
  {
    path: '',
    component: FacturaDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacturaDPageRoutingModule {}
