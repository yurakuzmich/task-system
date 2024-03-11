import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task, TaskWithUser } from '../../models';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { deleteTask, openViewTaskModal, showState } from '../../state/actions';
import { selectPaginatedTasks, selectTasksCount, selectTasksWithUsers } from '../../state/selectors';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'] // Corrected from styleUrl to styleUrls
})
export class TasksComponent implements OnInit, OnDestroy {

  //OF COURSE I CAN REMOVE MAGIC NUMBERS :)
  currentPage = 1;
  tasksPerPage = 5;
  totalPages = 1;

  tasks: TaskWithUser[] | null = null;
  tasks$!: Observable<Task[] | null>;
  tasksSubscription!: Subscription;

  tasksCount: number = 0;
  tasksCount$!: Observable<number>;
  tasksCountSubscription!: Subscription;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.tasks$ = this.store.pipe(select(selectPaginatedTasks(this.currentPage, this.tasksPerPage)));
    this.tasksSubscription = this.tasks$.subscribe(tasks => this.tasks = tasks);

    this.tasksCount$ = this.store.pipe(select(selectTasksCount));
    this.tasksCountSubscription = this.tasksCount$.subscribe(count => {
      this.tasksCount = count;
      this.totalPages = Math.ceil(count / this.tasksPerPage);
    });
  }

  handleClick(taskId: number) {
    this.store.dispatch(openViewTaskModal({taskId}));
  }

  loadTasks(): void {
    this.store.pipe(select(selectPaginatedTasks(this.currentPage, this.tasksPerPage))).subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  goNextPage(e: any) {
    e.preventDefault();
    this.currentPage = this.currentPage === this.totalPages ? this.currentPage : ++this.currentPage;
    this.loadTasks();
  }

  goPreviousPage(e: any) {
    e.preventDefault();
    this.currentPage = this.currentPage === 1 ? 1 : --this.currentPage;
    this.loadTasks();
  }

  deleteTask(e: any, taskId: number) {
    e.preventDefault();
    this.store.dispatch(deleteTask({ taskId }));
    this.store.dispatch(showState());
  }

  ngOnDestroy(): void {
    this.tasksSubscription.unsubscribe();
    this.tasksCountSubscription.unsubscribe();
  }
}
