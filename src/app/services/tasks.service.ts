import { Injectable } from '@angular/core';
import { Task } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';

import { tasks as TASKS } from './../mock-data/tasks.mock';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(TASKS);
  tasks$: Observable<Task[]> = this.tasksSubject.asObservable();
  private tasks: Task[] = TASKS;

  constructor() {}

  getTasks(): void {
    this.tasksSubject.next(this.tasks);
  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.tasksSubject.next(this.tasks);
  }
}
