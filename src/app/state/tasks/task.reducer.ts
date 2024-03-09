import { createReducer, on, Action } from '@ngrx/store';
import { Task } from '../../models';
import * as TaskActions from './task.actions';
import { TaskState } from '../app.state';

const taskAdapter: EntityAdapter<Task> = createEntityAdapter<Task>({
  selectId: (task: Task) => task.id, // Specify how to select the ID from the Task object
  // Optionally define additional adapter options
});

const initialState: TaskState = taskAdapter.getInitialState();

const taskReducer = createReducer(
  initialState,
  // Add reducer cases for different actions
  on(TaskActions.addTask, (state, { task }) => taskAdapter.addOne(task, state)),
  on(TaskActions.updateTask, (state, { update }) => taskAdapter.updateOne(update, state)),
  on(TaskActions.deleteTask, (state, { id }) => taskAdapter.removeOne(id, state))
);

// Export the reducer function
export function reducer(state: TaskState | undefined, action: Action) {
  return taskReducer(state, action);
}
