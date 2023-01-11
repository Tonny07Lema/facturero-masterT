import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarFacturaEmitidasPage } from './listar-factura-emitidas.page';

const routes: Routes = [
  {
    path: '',
    component: ListarFacturaEmitidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarFacturaEmitidasPageRoutingModule {}
