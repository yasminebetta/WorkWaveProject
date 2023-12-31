import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { LoginguardGuard } from './Shared/loginguard.guard';
import { MainComponent } from './main/main.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { RegistersuccessComponent } from './registersuccess/registersuccess.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    // canActivate: [LoginguardGuard],
    children: [

      { path: '', component: DashboardComponentComponent },
      { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
      { path: 'users', canActivate: [LoginguardGuard], loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
    ]
  },
  { path: 'auth', component: AuthComponent },
  { path: 'registersuccess', component: RegistersuccessComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'reset', component: ResetComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
