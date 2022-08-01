import { useDispatch } from "react-redux/es/exports";
import { addNewTitle } from "../../store/actions/TodosActions";

export default function TodosForm() {
  const dispatch = useDispatch()
  function SubmitForm(e) {
    e.preventDefault();

    const newTitle = {
      title: e.target.elements.title.value,
    }

    dispatch(addNewTitle(newTitle));
  }

  return (
    <>
      <form className="input_block" onSubmit={SubmitForm}>
        <input className="input_text" name="title" />
        <button className="input_btn">Send Task</button>
      </form>
    </>
  )
}

