import { createReducer, on } from '@ngrx/store';
import { closeModal, deleteTask, loadInitialData, openCreateTaskModal, openViewTaskModal, showState, createTask, loginUser, logoutUser, sortTasksAsc, sortTasksDesc } from './actions';
import { AppState } from './app.state';
import { ModalComponents } from '../models';

export const initialState: AppState = {
  users: [],
  tasks: [],
  currentUser: null,
  isLoggedIn: false,
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
      currentUser: null,
    })
  }),

  on(loginUser, (state, {user}) => {
    return ({
      ...state,
      currentUser: user,
      isLoggedIn: true,
    })
  }),

  on(logoutUser, (state) => {
    return ({
      ...state,
      isLoggedIn: false,
      currentUser: null,
      modal: {
        isOpen: false,
        type: null,
        taskId: null,
      }
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

  on(createTask, (state, {task}) => {
    console.log('createTask', task);

    return ({
      ...state,
      tasks: [...state.tasks, task],
    })
  }),

  on(deleteTask, (state, {taskId}) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== taskId),
  })),

  on(sortTasksAsc, (state) => {
    const sortedTasks = [...state.tasks].sort((a, b) => {
      return a.date > b.date ? 1 : -1;
    });

    return ({
      ...state,
      tasks: sortedTasks,
    });
  }),

  on(sortTasksDesc, (state) => {
    const sortedTasks = [...state.tasks].sort((a, b) => {
      return a.date > b.date ? -1 : 1;
    });

    return ({
      ...state,
      tasks: sortedTasks,
    });
  }),

  on(showState, (state) => {
    console.log('STATE IS: ', state);
    return state;
  }),
);
