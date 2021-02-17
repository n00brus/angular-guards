import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthenticationComponent } from './authentication/authentication.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
