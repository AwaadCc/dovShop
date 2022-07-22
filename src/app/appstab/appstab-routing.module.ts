import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppstabPage } from './appstab.page';

const routes: Routes = [
  {
    path: '',
    component: AppstabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppstabPageRoutingModule {}
