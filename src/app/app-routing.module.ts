import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';

import { AuthGuard } from './auth/services/auth.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  /* {
    path: 'auth',
    loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule)
  }, */
  /* {
    path: '**',
    component: notFoundC
  }, */
];

export const AppRoutingModule = RouterModule.forRoot(routes);


/* @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } */
