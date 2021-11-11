import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const Increment = (e) => {
        e.preventDefault();
        setCount(count + 1);
    }

    const Decrement = (e) => {
        e.preventDefault();
        setCount(count - 1);
    }
    return (
        <>
            <h3 className="my-4">{count}</h3>
            <button onClick={Increment} className="btn btn-success mx-2">Increment</button>
            <button onClick={Decrement} className="btn btn-danger">Decrement</button>
        </>
    )
}

export default Counter
