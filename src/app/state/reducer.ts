import { createReducer, on } from '@ngrx/store';
import { closeModal, deleteTask, loadInitialData, openCreateTaskModal, openViewTaskModal, showState } from './actions';
import { AppState } from './app.state';
import { ModalComponents } from '../models';

export const initialState: AppState = {
  users: [],
  tasks: [],
  currentUser: null,
  modal: {
    isOpen: false,
    type: null,
    taskId: null,
  }
};

export const appReducer = createReducer(
  initialState,

  on(loadInitialData, (state, { users, tasks, currentUser }) => {
    console.log('loadInitialData', users, tasks, currentUser);
    return ({
      ...state,
      users,
      tasks,
      currentUser
    })
  }),

  on(openCreateTaskModal, (state) => {
    return ({
      ...state,
      modal: {
        isOpen: true,
        type: 'add-task' as ModalComponents
      }
    });
  }),

  on(openViewTaskModal, (state, {taskId}) => {
    return ({
      ...state,
      modal: {
        isOpen: true,
        type: 'task' as ModalComponents,
        taskId: taskId,
      }
    });
  }),

  on(closeModal, (state) => {
    return ({
      ...state,
      modal: {
        isOpen: false,
        type: null,
        taskId: null,
      }
    });
  }),

  on(deleteTask, (state, {taskId}) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== taskId),
  })),

  on(showState, (state) => {
    console.log('STATE IS: ', state);
    return state;
  }),
);
