import TodosForm from '../TodosForm/TodosForm';
import '../../css/index.css';
import TodosList from '../TodosList/TotosList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getList } from '../../store/actions/TodosActions';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList());
  }, []); 

  return (
    <>
      <TodosList/>
      <TodosForm/>
    </>
  );
}