import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from '../../models';
import { TasksService } from '../../services/tasks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit, OnDestroy{
  tasks!: Task[];
  tasks$ = this.tasksService.getTasks();
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
