import React, { useState } from 'react';
import "./App.css";
import {useSelector, useDispatch} from "react-redux";
import {incNumber, decNumber} from "./actions/index";

const App = () => {
const myState = useSelector((state) => state.changeTheNumber);
const dispatch = useDispatch();

  return (
    <div className='container'>
      <h1>Increment/Decrement Number</h1>
      <h4>Using React and Redux</h4>

      <div className='quantity'>
        {/* Button to decrement quantity */}
        <a className='quantity__minus' title='Decrement'  onClick={ () =>dispatch(decNumber())}><span>-</span></a>
        {/* Input to display and edit quantity */}
        <input
          name='quantity'
          type='text'
          className='quantity__input'
          value={myState} 
          readOnly  
        />
        {/* Button to increment quantity */}
        <a className='quantity__plus' title='Increment' onClick={ () =>dispatch(incNumber(5))}><span>+</span></a>
      </div>
    </div>
  );
};

export default App;
