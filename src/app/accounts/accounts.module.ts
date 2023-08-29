import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CheckMailComponent } from './check-mail/check-mail.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes = [
    {path: 'login', component: LoginComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'check-mail', component: CheckMailComponent},
    {path: 'reset-password', component: ResetPasswordComponent},
]

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, CheckMailComponent, ResetPasswordComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),SharedModule
  ]
})
export class AccountModule { }
