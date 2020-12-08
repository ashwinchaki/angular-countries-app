import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './views/default/default.component';
import { DetailsComponent } from './views/details/details.component';

const routes: Routes = [
  // default home page takes in no parameters (calls API for all countries)
  {
    path: '',
    component: DefaultComponent
  },
  // takes in country parameter for details page
  {
    path: ':country',
    component: DetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
