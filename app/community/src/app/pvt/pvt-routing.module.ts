import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PvtComponent } from './pvt/pvt.component';
import { PvtHomeComponent } from './pvt-home/pvt-home.component';
import { CommunityEditComponent } from './community/community-edit/community-edit.component';
import { CommunityListComponent } from './community/community-list/community-list.component';
const routes: Routes = [
  { path: 'pvt', component: PvtComponent, children: [
      { path: 'home', component: PvtHomeComponent },
      {path: 'community/:mode/:id', component: CommunityEditComponent},
      {path: 'community/:mode', component: CommunityEditComponent},
      {path: 'community/list', component: CommunityListComponent},
      {path: 'community', redirectTo: '/pvt/community/list', pathMatch: 'full'},
      { path: '', redirectTo: '/pvt/home', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PvtRoutingModule { }
