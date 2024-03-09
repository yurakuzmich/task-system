import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from './task.reducer';

export const selectTaskState = createFeatureSelector<TaskState>('tasks');

export const selectAllTasks = createSelector(
  selectTaskState,
  (state: TaskState) => state.tasks
);

export const selectTaskById = (taskId: string) => createSelector(
  selectAllTasks,
  (tasks) => tasks.find(task => task.id === taskId)
);

export const selectTasksByUserId = (userId: number) => createSelector(
  selectAllTasks,
  (tasks) => tasks.filter(task => task.userId === userId)
);

export const selectTasksByPriority = (priority: number) => createSelector(
  selectAllTasks,
  (tasks) => tasks.filter(task => task.priority === priority)
);
