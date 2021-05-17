import { TodoActionTypes } from './../reducers/todoReducer';
import { Dispatch } from "react"
import { TodoAction } from "../reducers/todoReducer"
import { Task } from '../../interfaces';
import axios from 'axios';

export const fetchTodos = () => {
  return async (dispatch : Dispatch<TodoAction>) => {
    try {
      dispatch({type: TodoActionTypes.FETCH_TODOS});
      const res = await axios.get<Task[]>('http://185.246.66.84:3000/kandrusyak/tasks')
      dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: res.data})
    } catch (e) {
      dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: ''})
    }
  }
}

export const deleteTodo = (id: number) => {
  return async (dispatch : Dispatch<TodoAction>) => {
    try {
      dispatch({type: TodoActionTypes.DELETE_TODO});
      await axios.delete(`http://185.246.66.84:3000/kandrusyak/tasks/${id}`)
      dispatch({type: TodoActionTypes.DELETE_TODO_SUCCESS});
    }
    catch (e) {
      dispatch({type: TodoActionTypes.DELETE_TODO_ERROR, payload: ''})
    }
  }
}

export const createTodo = (data: Task) => {
  return async (dispatch : Dispatch<TodoAction>) => {
    try {
      dispatch({type: TodoActionTypes.CREATE_TODO});
      await axios.post(`http://185.246.66.84:3000/kandrusyak/tasks`, data)
      dispatch({type: TodoActionTypes.CREATE_TODO_SUCCESS});
    }
    catch (e) {
      dispatch({type: TodoActionTypes.CREATE_TODO_ERROR, payload: ''})
    }
  }
}

export const updateTodo = (data: Task, id: number) => {
  return async (dispatch : Dispatch<TodoAction>) => {
    try {
      dispatch({type: TodoActionTypes.UPDATE_TODO});
      await axios.put(`http://185.246.66.84:3000/kandrusyak/tasks/${id}`, data)
      dispatch({type: TodoActionTypes.UPDATE_TODO_SUCCESS});
    }
    catch (e) {
      dispatch({type: TodoActionTypes.UPDATE_TODO_ERROR, payload: ''})
    }
  }
}