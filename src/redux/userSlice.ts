import { createSlice, nanoid } from "@reduxjs/toolkit";
import { UserState } from "../interface/interfaces";


const initialState: UserState = {
    users: [
        {
            id: nanoid(),
            username: 'miri',
            password: 'miri123',
            login: false
        }
    ]
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        USERADD: (state, action) => {
            const userArray = [...state.users];
            userArray.push({
                id: nanoid(),
                username: action.payload.username,
                password: action.payload.password,
                login: false
            })
            state.users = userArray;
            return state;
        },
        USERLOG: (state, action) => {
            const userArray = [...state.users];
            state.users = userArray.map(item => item.username === action.payload.username ? { ...action.payload, login: !action.payload.login } : item);
            return state;
        }
    }

})

export default userSlice.reducer;
export const selectUsers = (state: any) => state.users.users
export const { USERADD,USERLOG } = userSlice.actions