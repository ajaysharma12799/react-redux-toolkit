import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from '../features/Counter/counterSlice';
import UserReducer from '../features/Users/userSlice';

export const Store = configureStore({
    reducer: {
        counter: CounterReducer,
        users: UserReducer,
    }
});