import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FriendsComponent } from './components/friends/friends.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NetworkComponent } from './components/network/network.component';

const routes: Routes = [
  {
    path : 'forgot',
    component:ForgotPasswordComponent
  },
  {
    path : 'friends',
    component:FriendsComponent
  },
  {
    path : '',
    component:HomeComponent
  },
  {
    path : 'login',
    component:LoginComponent
  },
  {
    path : 'register',
    component:RegisterComponent
  },
  {
    path : 'reset',
    component:ResetPasswordComponent
  },
  {
    path : 'settings',
    component:SettingsComponent
  },
  {
    path : 'network',
    component:NetworkComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
