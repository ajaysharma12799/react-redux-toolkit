import React from 'react'
import { useSelector } from 'react-redux'

const Coin = () => {
    const count = useSelector(state => state.counter.count);

    return (
        <div>
            <h1>Counter : {count}</h1>
        </div>
    )
}

export default Coin