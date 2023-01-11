import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarServicioPage } from './actualizar-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarServicioPageRoutingModule {}
