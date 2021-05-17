export interface Task {
  id?: number,
  title: string,
  completed: boolean,
  sequence?: number
  subtasks?: Subtask[]
}

export interface Subtask extends Task {
  taskId: number
}

