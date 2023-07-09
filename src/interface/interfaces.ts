import { ReactNode } from "react"

interface UserState {
    users: User[]
}

interface User {
    id: string,
    username: string,
    password: string,
    login: boolean
}

interface AuthProps {
    children: ReactNode
}

interface FormProps {
    onSubmit: (username: string, password: string) => void,
    children: ReactNode
}

interface ButtonProps {
    children: ReactNode;
    className: string;
    onClick: () => void
}
interface AuthState {
    isLogged: boolean
}
interface TodoState {
    todos: TodoProps[]
}
interface TodoProps {
    userId: string,
    id: string,
    check: boolean,
    text: string
}
export type { UserState, User, AuthProps, FormProps, ButtonProps, AuthState, TodoState, TodoProps }