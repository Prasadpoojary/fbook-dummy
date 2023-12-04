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
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './helper/AuthGuard';
import { AuthGuardAdmin } from './helper/AuthGuardAdmin';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
  ,
  {
    path : 'forgot',
    component:ForgotPasswordComponent
  },
  {
    path : 'friends',
    component:FriendsComponent,
    canActivate:[AuthGuard]
  },
  {
    path : 'home',
    component:HomeComponent,
    canActivate:[AuthGuard]
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
    path : 'reset/:id',
    component:ResetPasswordComponent
  },
  {
    path : 'settings',
    component:SettingsComponent,
    canActivate:[AuthGuard]
  },
  {
    path : 'network',
    component:NetworkComponent,
    canActivate:[AuthGuard]
  },
  {
    path : 'users',
    component:UserComponent,
    canActivate:[AuthGuardAdmin]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
