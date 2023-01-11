import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistarClientePage } from './registar-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: RegistarClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistarClientePageRoutingModule {}
