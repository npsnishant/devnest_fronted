import React from 'react'
import { useState } from 'react';




const Counter = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    const click1 = (key) =>{
        setCount1(count1+1)
    }
    const click2 = (key) =>{
        setCount2(count2+1)
    }
    const click3 = (key) =>{
        setCount3(count3+1)
    }
    const click4 = (key) =>{
        setCount4(count4+1)
    }

    return (
        <div>
            <button onClick={click1}>{count1}</button>
            <button onClick={click2}>{count2}</button>
            <button onClick={click3}>{count3}</button>
            <button onClick={click4}>{count4}</button>
        </div>
    )
}

export default Counter
