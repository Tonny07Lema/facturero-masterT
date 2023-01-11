import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarServicioPage } from './listar-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: ListarServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarServicioPageRoutingModule {}
