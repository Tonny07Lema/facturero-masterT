import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarFacturaAnuladaPage } from './listar-factura-anulada.page';

const routes: Routes = [
  {
    path: '',
    component: ListarFacturaAnuladaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarFacturaAnuladaPageRoutingModule {}
