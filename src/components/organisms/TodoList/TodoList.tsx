import { FC, ReactNode } from "react"
import "./TodoList.css"
interface TodoListProps {
    children: ReactNode
}
const TodoList: FC<TodoListProps> = ({ children }) => {
    return (
        <>
            <ul className="todolist">
                {children}
            </ul>
        </>
    )
}

export default TodoList