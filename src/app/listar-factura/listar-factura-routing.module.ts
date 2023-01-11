import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarFacturaPage } from './listar-factura.page';

const routes: Routes = [
  {
    path: '',
    component: ListarFacturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarFacturaPageRoutingModule {}
