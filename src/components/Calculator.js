/* eslint-disable no-undef */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import '../style.css';
import React, { useState } from 'react';
import calculate from './logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const onClickHandler = (e) => {
    const buttonName = e.target.innerText;
    const { total, next, operation } = calculate(state, buttonName);
    if (next === null && total === null) {
      setState({ next, total: '0', operation });
    } else {
      setState({ next, total, operation });
    }
  };

  return (
    <div className="calculator_div">
      <div className="calculator_main_container">

        <div className="answer">
          <input type="text" className="_answer" value={state.next || state.total || '0'} readOnly={true} />
        </div>

        <div className="colum_1">
          <h3 className="ac" onClick={onClickHandler}>AC</h3>
          <h3 className="add_sub" onClick={onClickHandler}>+/-</h3>
          <h3 className="percentage" onClick={onClickHandler}>%</h3>
          <h3 className="division" onClick={onClickHandler}>÷</h3>
        </div>

        <div className="colum_2">
          <h3 className="_7" onClick={onClickHandler}>7</h3>
          <h3 className="_8" onClick={onClickHandler}>8</h3>
          <h3 className="_9" onClick={onClickHandler}>9</h3>
          <h3 className="_x" onClick={onClickHandler}>x</h3>
        </div>

        <div className="colum_3">
          <h3 className="_4" onClick={onClickHandler}>4</h3>
          <h3 className="_5" onClick={onClickHandler}>5</h3>
          <h3 className="_6" onClick={onClickHandler}>6</h3>
          <h3 className="subtraction" onClick={onClickHandler}>-</h3>
        </div>

        <div className="colum_4">
          <h3 className="_1" onClick={onClickHandler}>1</h3>
          <h3 className="_2" onClick={onClickHandler}>2</h3>
          <h3 className="_3" onClick={onClickHandler}>3</h3>
          <h3 className="addition" onClick={onClickHandler}>+</h3>
        </div>

        <div className="colum_5">
          <h3 className="_0" onClick={onClickHandler}>0</h3>
          <h3 className="dot" onClick={onClickHandler}>.</h3>
          <h3 className="equal" onClick={onClickHandler}>=</h3>
        </div>

      </div>
    </div>
  );
}

export default Calculator;
