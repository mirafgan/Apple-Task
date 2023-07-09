import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoSlice from '../redux/todoSlice';
import userSlice from '../redux/userSlice';
import authSlice from '../redux/authSlice';

const rootReducer = combineReducers({
    users: userSlice,
    todos: todoSlice,
    auth: authSlice
})

export const store = configureStore({
    reducer: rootReducer
})