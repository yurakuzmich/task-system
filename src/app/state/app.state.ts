import { ModalComponents, Task, User } from "../models";

export interface AppState {
  users: User[];
  tasks: Task[];
  currentUser: User | null;
  modal: ModalState;
}

export interface ModalState {
  isOpen: boolean;
  type: ModalComponents | null;
  taskId?: number | null;
}


