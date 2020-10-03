import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PvtRoutingModule } from './pvt-routing.module';
import { PvtComponent } from './pvt/pvt.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PvtHomeComponent } from './pvt-home/pvt-home.component';
import { CommunityEditComponent } from './community/community-edit/community-edit.component';
import { CommunityListComponent } from './community/community-list/community-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [PvtComponent, PvtHomeComponent, CommunityEditComponent, CommunityListComponent],
  imports: [
    CommonModule,
    PvtRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class PvtModule { }
