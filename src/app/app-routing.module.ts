import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './layout/main-page/main-page.component';

const routes: Routes = [
  {path: 'dashboard', component: MainPageComponent},
  {path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)},
  {path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
