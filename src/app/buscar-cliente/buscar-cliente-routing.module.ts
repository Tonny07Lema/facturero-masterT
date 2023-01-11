import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarClientePage } from './buscar-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarClientePageRoutingModule {}
