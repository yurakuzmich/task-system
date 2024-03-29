import { createAction, props } from '@ngrx/store';
import { Task, User } from '../models';

export const loadInitialData = createAction(
  '[App] Load Initial Data',
  props<{ users: User[]; tasks: Task[]; currentUser: User | null }>()
);

export const loginUser = createAction(
  '[App] Login User',
  props<{ user: User }>()
);

export const logoutUser = createAction(
  '[App] Logout User',
);

export const createTask = createAction(
  '[Tasks] Create Task',
  props<{ task: Task }>()
);

export const deleteTask = createAction(
  '[Tasks] Delete Task',
  props<{ taskId: number }>()
);

export const sortTasksAsc = createAction(
    '[Tasks] Sort Tasks Asc',
);

export const sortTasksDesc = createAction(
  '[Tasks] Sort Tasks Desc',
);

export const showState = createAction(
  '[App] Show State',
);

export const openCreateTaskModal = createAction(
  '[App] Open Create Task Modal',
);

export const openViewTaskModal = createAction(
  '[App] Open View Task Modal',
  props<{ taskId: number }>()
);

export const closeModal = createAction(
  '[App] Close Modal',
);

