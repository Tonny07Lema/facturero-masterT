import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarServicioPage } from './registrar-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarServicioPageRoutingModule {}
