import React from 'react'
import  { useSelector }  from 'react-redux';
import { selectTodosList } from '../../store/selectors/todosSelectors';
import TodosItem from '../TodosItem/TodosItem';


export default function TodosList() {
  const list = useSelector(selectTodosList);
  return (
    <ol className="input_blocks">
      {list.map((item) => (
          <TodosItem
              key={item.id}
              todo={item}
          />
      ))}
    </ol>
  )
}