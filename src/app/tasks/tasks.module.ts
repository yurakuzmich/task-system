import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { PriorityPillComponent } from '../layout/priority-pill/priority-pill.component';

@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    PriorityPillComponent,
  ]
})
export class TasksModule { }
