import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice';

const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => { dispatch(increment()) }}>+</button>
            <br />
            <h1>Counter : {count}</h1>
            <br />
            <button onClick={() => { dispatch(decrement()) }}>-</button>
        </div>
    )
}

export default Counter