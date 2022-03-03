import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { plusNumber, minusNumber } from '../action/index';
import './strike.css';
const Strike = () => {
    const mystate = useSelector((state) => state.convertNumber)
    const dispatch = useDispatch();
    const inputChangeHandler = (event) => {
        const updatedKeyword = event.target.mystate
    }
    return (
        <div className='container'>
            <h1>Reduxxx</h1>
            <div className='quantity'>
                <button className='quantity_minus' title='DECREMENT'
                    onClick={() => dispatch(minusNumber())}>--</button>
                <input className='input' name='quantity' type="text" value={mystate}
                    onChange={inputChangeHandler} />
                <button className='quantity_plus' title='INCREMENT'
                    onClick={() => dispatch(plusNumber())}>++</button>
            </div>
        </div>
    )
}

export default Strike