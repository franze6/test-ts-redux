import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Task } from './interfaces';
import TodoList from './components/TodoList/TodoList';
import TodoItem from './components/TodoItem/TodoItem';
import { useActions } from './hooks/useAction';
import { useTypedSelector } from './hooks/useTypedSelector';

const App = () => {

  const {fetchTodos, deleteTodo, createTodo, updateTodo} = useActions();

  const {error, loading, todos} = useTypedSelector(state => state.todo);

  useEffect(() => {
    fetchTodos();
  }, [])

  const onDeleteTask = useCallback(async (id: number) => {
    await deleteTodo(id);
    fetchTodos();
  }, []);

  const onChangeTask = useCallback(async (data: Task) => {
    if (!data.id) 
      await createTodo(data)
    else
      await updateTodo(data, data.id);
    fetchTodos();
  }, []);

  const uncomptetedTasks = todos.filter(todo => !todo.completed)
  const comptetedTasks = todos.filter(todo => todo.completed)


  return (
    <div className="App">
      <h1>Список задач</h1>
      <TodoItem data={{ title: '', completed: false }} newTask onChange={onChangeTask}></TodoItem>
      <h2>Текущие задачи</h2>
      <TodoList tasks={uncomptetedTasks} onDelete={onDeleteTask} onChange={onChangeTask}></TodoList>
      <h2>Завершенные</h2>
      <TodoList tasks={comptetedTasks} onChange={onChangeTask}></TodoList>  
    </div>
  );
}

export default App;
