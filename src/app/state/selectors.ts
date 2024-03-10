import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { Task, TaskWithUser, User } from '../models';
import { state } from '@angular/animations';

export const selectAppState = createFeatureSelector<AppState>('app');

//APP
export const selectIsModalOpen = createSelector(
    selectAppState,
    (state: AppState) => state.modal.isOpen
);

export const selectModalComponent = createSelector(
  selectAppState,
  (state: AppState) => state.modal.type
);

export const selectModalTaskId = createSelector(
  selectAppState,
  (state: AppState) => state.modal.taskId || null
);

//USERS
export const selectCurrentUser = createSelector(
  selectAppState,
  (state: AppState) => state.currentUser
);

export const selectUsers = createSelector(
  selectAppState,
  (state: AppState) => state.users
);

export const selectUser = (userId: number) => createSelector(
  selectUsers,
  (users: User[]) => users.find(user => user.id === userId)
);

//TASKS
export const selectTasks = createSelector(
  selectAppState,
  (state: AppState) => state.tasks
);

export const selectTasksCount = createSelector(
  selectAppState,
  (state: AppState) => state.tasks.length
);

export const selectTasksWithUsers = createSelector(
  selectTasks,
  selectUsers,
  (tasks: Task[], users: User[]) => tasks.map(task => ({...task, user: users.find(user => user.id === task.userId)}))
);

export const selectPaginatedTasks = (page: number, limit: number) => createSelector(
  selectTasksWithUsers,
  (tasks: TaskWithUser[]) => tasks.slice((page - 1) * limit, page * limit)
)

export const selectTask = (taskId: number) => createSelector(
  selectTasksWithUsers,
  (tasks: TaskWithUser[]) => tasks.find(task => task.id === taskId)
);

export const selectModalTask = createSelector(
  selectModalTaskId,
  selectTasksWithUsers,
  (taskId: number | null, tasks: TaskWithUser[]) => tasks.find(task => task.id === taskId) || null
);
