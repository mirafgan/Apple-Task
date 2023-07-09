import { createSlice, nanoid } from "@reduxjs/toolkit";
import { TodoState } from "../interface/interfaces";
const initialState: TodoState = {
    todos: [
        {
            userId: '',
            id: nanoid(),
            check: false,
            text: 'test todo',
        }
    ]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        ADDTODO: (state, action) => {
            const todoArr = [...state.todos];
            todoArr.push(action.payload);
            state.todos = todoArr;
            return state;
        },
        TODO_EDIT: (state, action) => {
            const todoArr = [...state.todos];
            state.todos = todoArr.map(item => item.id === action.payload.id ?
                { ...item, text: action.payload.inp, check: action.payload.todoCheck }
                : item)
            return state;
        },
        TODO_DELETE: (state, action) => {
            const todoArr = [...state.todos];
            state.todos = todoArr.filter(item => item.id !== action.payload);
            return state;
        }
    },

})
export const selectTodos = (state: any) => state.todos.todos
export default todoSlice.reducer;
export const { ADDTODO, TODO_EDIT, TODO_DELETE } = todoSlice.actions
