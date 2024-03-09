import { Injectable } from '@angular/core';
import { Task } from '../models';

import { tasks as TASKS } from './../mock-data/tasks.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = TASKS;
  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }
}
