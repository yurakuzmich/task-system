import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './layout/main-page/main-page.component';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './layout/login/login.component';

const routes: Routes = [
  {path: 'dashboard', component: MainPageComponent, canActivate: [authGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule),canActivate: [authGuard]},
  {path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule), canActivate: [authGuard]},
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
