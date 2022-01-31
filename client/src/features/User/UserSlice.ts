import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './../../models/IUser';

interface IUserState {
    user: IUser[],
    isLogin: boolean,
    isLoading: boolean,
    error: null | string
}

const initialState: IUserState = {
    user: [],
    isLogin: false,
    isLoading: false,
    error: null
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       login(state, action: PayloadAction<[]>) {
            state.user = action.payload
       }     
    },
    extraReducers: {

    }
})

export const {login} = UserSlice.actions;

export default UserSlice.reducer;
