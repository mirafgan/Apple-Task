import { useDispatch, useSelector } from "react-redux"
import Button from "../../atoms/Button/Button"
import { LOGOUT } from "../../../redux/authSlice";
import "./Dashboard.css"
import Todo from "../../molecules/Todo/Todo";
import { nanoid } from "@reduxjs/toolkit";
import { RiAddFill } from "react-icons/ri"
import Input from "../../atoms/Input/Input";
import { ChangeEvent, useState } from "react";
import { ADDTODO, selectTodos } from "redux/todoSlice";
import { USERLOG, selectUsers } from "redux/userSlice";
import { TodoProps, User } from "../../../interface/interfaces";
import TodoList from "components/organisms/TodoList/TodoList";
import { useNavigate } from "react-router-dom";
const DashboardPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inp, setInp] = useState('')
    const users = useSelector(selectUsers);
    const loggedUser = users.find((item: User) => item.login);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInp(e.target.value)
    const handleOut = () => {
        dispatch(USERLOG(loggedUser));
        dispatch(LOGOUT());
        navigate('/');
    }
    const handleTodo = () => {
        dispatch(ADDTODO({ id: nanoid(), userId: loggedUser.id, text: inp, check: false }));
        setInp('');
    }
    const todos = useSelector(selectTodos).filter((item: TodoProps) => item.userId === loggedUser.id);
    return (
        <div className="dashboard">
            <div className="dashboard__top">
                <div>
                    <h2>{loggedUser.username}</h2>
                </div>
                <div>
                    <h2>
                        Todo List
                    </h2>
                </div>
                <div>
                    <Button className="button" onClick={handleOut}>Log Out</Button>
                </div>
                T</div>
            <div className="dashboard__main">
                <div className="dashboard__main__top">
                    <Input
                        type="text"
                        placeholder="Your Todo"
                        value={inp}
                        onChange={handleChange} />
                    <Button className="button" onClick={handleTodo}>
                        <RiAddFill fill="white" size="18" />
                    </Button>
                </div>
                <TodoList>
                    {
                        todos.map((item: TodoProps) => <Todo key={item.id} {...item} />)
                    }
                </TodoList>
            </div>

        </div>
    )
}

export default DashboardPage