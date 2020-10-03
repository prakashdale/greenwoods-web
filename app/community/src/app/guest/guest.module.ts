import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { LoginComponent } from './login/login.component';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { GuestComponent } from './guest/guest.component';
import { GuestFooterComponent } from './guest-footer/guest-footer.component';
import { GuestHeaderComponent } from './guest-header/guest-header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    LoginComponent,
    GuestHomeComponent,
    GuestComponent,
    GuestFooterComponent,
    GuestHeaderComponent,
    ForgotPasswordComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    GuestRoutingModule
  ]
})
export class GuestModule { }
