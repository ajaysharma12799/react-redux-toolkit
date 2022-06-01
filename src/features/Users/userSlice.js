import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    users: []
}

export const fetchAsyncUsers = createAsyncThunk('users/FetchAsyncUsers', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = response.data;
    return data;
});

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUsers: (state, {payload}) => {
            state.users = payload;
        }
    },
    extraReducers: {
        [fetchAsyncUsers.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                users: payload,
            };
        }
    }
});

export const { addUsers } = userSlice.actions;

export default userSlice.reducer;