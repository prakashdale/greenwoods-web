import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { GuestComponent } from './guest/guest.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'guest', component: GuestComponent, children: [
    { path: 'login', component: LoginComponent},
    { path: 'forgot-password', component: ForgotPasswordComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'home', component: GuestHomeComponent},
    { path: '', redirectTo: '/guest/home', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
