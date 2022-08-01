import React from 'react';
import { useDispatch } from 'react-redux';
import { remuveTodo, toggleTodo } from '../../store/actions/TodosActions';

export default function TodosItem({ todo }) {
  const dispatch = useDispatch()
  function onToggle() {
    dispatch(toggleTodo(todo.id));
  }

  function deleteItem(e) {
    e.stopPropagation();
    dispatch(remuveTodo(todo.id));
  }

  return (
    <li
      className={todo.isDone ? 'done' : ''}
      onClick={onToggle}>{todo.title}
      <span          
        className="delete-btn"
        onClick={deleteItem}>
        &#10006;
      </span>
    </li>
  )
}
