import { User } from "./user";

export interface Task {
  id: number;
  date: number;
  title: string;
  description: string;
  priority: string;
  userId: number;
}

export interface TaskWithUser extends Task {
  user?: User;
}
