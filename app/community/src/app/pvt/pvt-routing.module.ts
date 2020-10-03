import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PvtComponent } from './pvt/pvt.component';
import { PvtHomeComponent } from './pvt-home/pvt-home.component';

const routes: Routes = [
  { path: 'pvt', component: PvtComponent, children: [
      { 'path': 'home', component: PvtHomeComponent },
      { 'path': '', redirectTo: '/pvt/home', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PvtRoutingModule { }
