import { memo, NamedExoticComponent } from "react";
import { Task } from "../../interfaces";
import TodoItem from "../TodoItem/TodoItem";
import style from "./TodoList.module.css";

interface Props {
  tasks: Array<Task>,
  onDelete?: (id:number) => void,
  onChange: (task:Task) => void
}

const TodoList: NamedExoticComponent<Props> = memo(({ tasks, onDelete, onChange }) => {
  return <div className={style.list}>{tasks.map(task => <TodoItem data={task} key={task.id} onDelete={onDelete} onChange={onChange} />)}</div>
});

TodoList.displayName = 'TodoList';

export default TodoList;