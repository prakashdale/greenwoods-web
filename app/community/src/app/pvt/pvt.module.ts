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


@NgModule({
  declarations: [PvtComponent, PvtHomeComponent],
  imports: [
    CommonModule,
    PvtRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class PvtModule { }
