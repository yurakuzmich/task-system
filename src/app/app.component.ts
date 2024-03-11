  import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalWindowService } from './services/modal-window.service';
import { Store, select } from '@ngrx/store';
import { tasks as TASKS } from './mock-data/tasks.mock';
import { users as USERS } from './mock-data/users.mock';
import { loadInitialData, openCreateTaskModal, sortTasksAsc, sortTasksDesc } from './state/actions';
import { Observable, Subscription } from 'rxjs';
import { User } from './models';
import { isLoggedIn, selectCurrentUser, selectIsModalOpen } from './state/selectors';
import { LoginService } from './services/login.service';
import { SortDirection } from './models/sort-direction.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'task-system';
  subscriptions: Subscription[] = [];

  isUserLoggedIn = false;
  isUserLoggedIn$!: Observable<boolean>;
  isUserLoggedInSubscription!: Subscription;

  isModalOpen = true;
  isModalOpen$!: Observable<boolean>;
  isModalOpenSubscription!: Subscription;

  initialTasks = TASKS;
  initialUsers = USERS;
  uinitialCurrentUser = USERS[0];

  currentUser: User | null = null;
  currentUser$!: Observable<User | null>;
  currentUserSubscription!: Subscription;

  tasksSortedByDateDirection = SortDirection.ASC;

  constructor(private store: Store, private loginService: LoginService) {}

  ngOnInit(): void {
    this.loadAppInitialData();

    this.checkToken();

    this.isUserLoggedIn$ = this.store.pipe(select(isLoggedIn));
    this.isUserLoggedInSubscription = this.isUserLoggedIn$.subscribe(isLoggedIn => this.isUserLoggedIn = isLoggedIn);
    this.subscriptions.push(this.isUserLoggedInSubscription);

    this.isModalOpen$ = this.store.pipe(select(selectIsModalOpen));
    this.isModalOpenSubscription = this.isModalOpen$.subscribe(isOpen => this.isModalOpen = isOpen);
    this.subscriptions.push(this.isModalOpenSubscription);



    this.currentUser$ = this.store.pipe(select(selectCurrentUser));
    this.currentUserSubscription = this.currentUser$.subscribe(user => this.currentUser = user);
    this.subscriptions.push(this.currentUserSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  checkToken() {
    const token = localStorage.getItem('authToken');
    if (!token) return;
    const userData = token.split(':');
    this.loginService.login(userData[0], userData[1]);
  }

  loadAppInitialData() {
    this.store.dispatch(loadInitialData({users: this.initialUsers, tasks: this.initialTasks, currentUser: this.uinitialCurrentUser}));
  }

  openCreateTaskModal() {
    this.store.dispatch(openCreateTaskModal());
  }

  sortTasksByDate() {
    if(this.tasksSortedByDateDirection === SortDirection.ASC) {
      this.store.dispatch(sortTasksAsc());
      this.tasksSortedByDateDirection = SortDirection.DESC;
    } else {
      this.store.dispatch(sortTasksDesc());
      this.tasksSortedByDateDirection = SortDirection.ASC;
    }
  }
}
