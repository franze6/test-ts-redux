import { Task } from './../../interfaces/index';


interface TodoState {
  todos: Task[],
  loading: boolean,
  error: null | string
}

const initialState : TodoState = {
  todos: [],
  loading: false,
  error: null
}

export enum TodoActionTypes {
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
  CREATE_TODO,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_ERROR,
  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_ERROR,
}

interface FetchTodosAction {
  type: TodoActionTypes.FETCH_TODOS
}

interface FetchTodosSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS,
  payload: Task[],
}

interface FetchTodosErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR
  payload: string
}

interface DeleteTodoAction {
  type: TodoActionTypes.DELETE_TODO
}

interface DeleteTodoErrorAction {
  type: TodoActionTypes.DELETE_TODO_ERROR,
  payload: string
}

interface DeleteTodoSuccessAction {
  type: TodoActionTypes.DELETE_TODO_SUCCESS
}

interface CreateTodoAction {
  type: TodoActionTypes.CREATE_TODO
}

interface CreateTodoErrorAction {
  type: TodoActionTypes.CREATE_TODO_ERROR,
  payload: string
}

interface CreateTodoSuccessAction {
  type: TodoActionTypes.CREATE_TODO_SUCCESS
}

interface UpdateTodoAction {
  type: TodoActionTypes.UPDATE_TODO
}

interface UpdateTodoErrorAction {
  type: TodoActionTypes.UPDATE_TODO_ERROR,
  payload: string
}

interface UpdateTodoSuccessAction {
  type: TodoActionTypes.UPDATE_TODO_SUCCESS
}

export type TodoAction = FetchTodosAction | FetchTodosErrorAction | FetchTodosSuccessAction | DeleteTodoAction | DeleteTodoErrorAction | DeleteTodoSuccessAction | CreateTodoAction | CreateTodoSuccessAction | CreateTodoErrorAction | UpdateTodoAction | UpdateTodoErrorAction | UpdateTodoSuccessAction;

export const todoReducer = (state = initialState, action: TodoAction): TodoState  => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return { loading: true, error: null, todos: []};
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { loading: false, error: null, todos: action.payload};
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return { loading: false, error: action.payload, todos: []};
    case TodoActionTypes.DELETE_TODO:
      return { ...state, loading: true };
    case TodoActionTypes.DELETE_TODO_SUCCESS:
      return { ...state, loading: false, error: null};
    case TodoActionTypes.DELETE_TODO_ERROR:
      return { ...state, loading: false, error: action.payload};
    case TodoActionTypes.CREATE_TODO:
      return { ...state, loading: true };
    case TodoActionTypes.CREATE_TODO_SUCCESS:
      return { ...state, loading: false, error: null};
    case TodoActionTypes.CREATE_TODO_ERROR:
      return { ...state, loading: false, error: action.payload};
    case TodoActionTypes.UPDATE_TODO:
      return { ...state, loading: true };
    case TodoActionTypes.UPDATE_TODO_SUCCESS:
      return { ...state, loading: false, error: null};
    case TodoActionTypes.UPDATE_TODO_ERROR:
      return { ...state, loading: false, error: action.payload};
    default:
      return state
  }
}