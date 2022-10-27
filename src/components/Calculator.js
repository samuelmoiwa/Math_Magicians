/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import '../style.css';
import React, { PureComponent } from 'react';
import calculate from './logic/calculate';

class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  onClickHandler = (e) => {
    const buttonName = e.target.innerText;
    const { total, next, operation } = calculate(this.state, buttonName);
    if (next === null && total === null) {
      this.setState({ next, total: '0', operation });
    } else {
      this.setState({ next, total, operation });
    }
  }

  render() {
    return (
      <div className="calculator_div">
        <div className="calculator_main_container">

          <div className="answer">
            <input type="text" className="_answer" value={this.state.next || this.state.total || '0'} readOnly={true} />
          </div>

          <div className="colum_1">
            <h3 className="ac" onClick={this.onClickHandler}>AC</h3>
            <h3 className="add_sub" onClick={this.onClickHandler}>+/-</h3>
            <h3 className="percentage" onClick={this.onClickHandler}>%</h3>
            <h3 className="division" onClick={this.onClickHandler}>÷</h3>
          </div>

          <div className="colum_2">
            <h3 className="_7" onClick={this.onClickHandler}>7</h3>
            <h3 className="_8" onClick={this.onClickHandler}>8</h3>
            <h3 className="_9" onClick={this.onClickHandler}>9</h3>
            <h3 className="_x" onClick={this.onClickHandler}>x</h3>
          </div>

          <div className="colum_3">
            <h3 className="_4" onClick={this.onClickHandler}>4</h3>
            <h3 className="_5" onClick={this.onClickHandler}>5</h3>
            <h3 className="_6" onClick={this.onClickHandler}>6</h3>
            <h3 className="subtraction" onClick={this.onClickHandler}>-</h3>
          </div>

          <div className="colum_4">
            <h3 className="_1" onClick={this.onClickHandler}>1</h3>
            <h3 className="_2" onClick={this.onClickHandler}>2</h3>
            <h3 className="_3" onClick={this.onClickHandler}>3</h3>
            <h3 className="addition" onClick={this.onClickHandler}>+</h3>
          </div>

          <div className="colum_5">
            <h3 className="_0" onClick={this.onClickHandler}>0</h3>
            <h3 className="dot" onClick={this.onClickHandler}>.</h3>
            <h3 className="equal" onClick={this.onClickHandler}>=</h3>
          </div>

        </div>
      </div>
    );
  }
}

export default Calculator;
