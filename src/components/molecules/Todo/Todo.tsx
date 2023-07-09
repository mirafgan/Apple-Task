import { FC, useState, ChangeEvent, useEffect } from "react"
import { TodoProps } from "../../../interface/interfaces"
import { BsFillTrash3Fill, BsFillPencilFill, BsCheckCircleFill } from "react-icons/bs"
import Input from "../../atoms/Input/Input"
import Button from "../../atoms/Button/Button"
import { useDispatch } from "react-redux"
import { TODO_DELETE, TODO_EDIT } from "../../../redux/todoSlice"

const Todo: FC<TodoProps> = ({ check, text, id }) => {
    const [inp, setInp] = useState(text);
    const [read, setRead] = useState(true);
    const [todoCheck, setTodoCheck] = useState(check);
    const dispatch = useDispatch();
    const handleEdit = () => {
        setRead(st => !st);
    };
    const handleDelete = () => dispatch(TODO_DELETE(id));
    const handleCheck = () => setTodoCheck(st => !st);
    const handleValue = (e: ChangeEvent<HTMLInputElement>) => setInp(e.target.value);

    useEffect(() => {
        dispatch(TODO_EDIT({ id, inp, todoCheck }))
    }, [read, todoCheck, dispatch, id, inp]);
    return (
        <li className="todolist__item">
            <Input type="checkbox" defaultChecked={todoCheck} onChange={handleCheck} />
            <Input type="text" defaultValue={inp} onChange={handleValue} readOnly={read} className={`${todoCheck ? '' : 'todolist__item__input-lt'}`} />
            <div>
                <Button onClick={handleEdit} className="button button-p10">
                    {!read ? <BsCheckCircleFill color="green" /> : <BsFillPencilFill />}
                </Button>
                <Button onClick={handleDelete} className="button button-p10 button-ml10">
                    <BsFillTrash3Fill />
                </Button>
            </div>
        </li>
    )
}

export default Todo