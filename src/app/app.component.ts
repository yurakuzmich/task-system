  import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalWindowService } from './services/modal-window.service';
import { Store, select } from '@ngrx/store';
import { tasks as TASKS } from './mock-data/tasks.mock';
import { users as USERS } from './mock-data/users.mock';
import { loadInitialData, openCreateTaskModal } from './state/actions';
import { Observable, Subscription } from 'rxjs';
import { User } from './models';
import { selectCurrentUser, selectIsModalOpen } from './state/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'task-system';

  isModalOpen = true;
  isModalOpen$!: Observable<boolean>;
  isModalOpenSubscription!: Subscription;

  initialTasks = TASKS;
  initialUsers = USERS;
  uinitialCurrentUser = USERS[0];

  currentUser: User | null = null;
  currentUser$!: Observable<User | null>;
  currentUserSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isModalOpen$ = this.store.pipe(select(selectIsModalOpen));
    this.isModalOpenSubscription = this.isModalOpen$.subscribe(isOpen => this.isModalOpen = isOpen);

    this.loadAppInitialData();

    this.currentUser$ = this.store.pipe(select(selectCurrentUser));
    this.currentUserSubscription = this.currentUser$.subscribe(user => this.currentUser = user);
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
    this.isModalOpenSubscription.unsubscribe();
  }

  loadAppInitialData() {
    this.store.dispatch(loadInitialData({users: this.initialUsers, tasks: this.initialTasks, currentUser: this.uinitialCurrentUser}));
  }

  openCreateTaskModal() {
    this.store.dispatch(openCreateTaskModal());
  }
}
