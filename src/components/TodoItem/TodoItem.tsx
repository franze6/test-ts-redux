import { ChangeEvent, memo, NamedExoticComponent, useEffect, useMemo, useState } from "react";
import { Task } from "../../interfaces";
import style from './TodoItem.module.css'
import cn from 'classnames';
import axios from "axios";
import TodoList from "../TodoList/TodoList";

interface Props {
  data: Task,
  onChange: (data: Task) => void,
  onDelete?: (id: number) => void,
  newTask?: boolean
}

const TodoItem: NamedExoticComponent<Props> = memo(({ data, onChange, onDelete, newTask }) => {
  const [task, setTask] = useState<Task>(data);
  const [editMode, setEditMode] = useState(newTask);

  function onEditClick() {
    if (task.completed)
      return;
    if (editMode)
      onChange?.(task);
    setEditMode(e => !e || newTask);
  }

  function toggleTask(e: ChangeEvent<HTMLInputElement>) {
    onChange?.({ ...task, completed: e.target.checked })
  }

  useEffect(() => setTask(data), [data]);

  return (
    <div className={style.task}>
      <div className={style.about}>
        <div className={style.info}>
          {!newTask && <input type="checkbox" checked={task.completed} onChange={toggleTask} />}
          {
            !editMode ? (
              <div className={cn(style.title, { [style.completed]: task.completed })}>{task.title}</div>
            ) : (
              <input
                type="text"
                value={task.title}
                onChange={e => setTask({ ...task, title: e.target.value })}
              />
            )
          }
        </div>
        {
          !newTask ? (
            <div>
              <button disabled={task.completed} onClick={onEditClick}>Редактировать</button>
              <button disabled={task.completed} onClick={() => onDelete?.(data.id || 0)}>Удалить</button>
            </div>
          ) : (
            <button onClick={onEditClick}>Сохранить</button>
          )
        }
      </div>

    </div>
  )
});

TodoItem.displayName = 'TodoItem';

export default TodoItem;