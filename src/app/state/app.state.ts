import { Task, User } from "../models";

export interface AppState {
  users: UserState;
  tasks: TaskState;
}

export interface UserState {
  users: User[];
}

export interface TaskState {
  tasks: Task[];
}
