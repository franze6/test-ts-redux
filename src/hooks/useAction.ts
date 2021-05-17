import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as TodoActionCreators from '../store/action-creators/todo'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(TodoActionCreators, dispatch);
}