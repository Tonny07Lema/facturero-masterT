import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicioDPage } from './servicio-d.page';

const routes: Routes = [
  {
    path: '',
    component: ServicioDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicioDPageRoutingModule {}
