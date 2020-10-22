export interface Todo {
  id: number;
  message: string;
  creationDate: number;

  dueDate?: number;
  completed?: boolean;
}
