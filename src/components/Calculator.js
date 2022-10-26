import '../style.css';
import React, { PureComponent } from 'react';

class Calculator extends PureComponent {
  render() {
    return (
      <div className="calculator_div">
        <div className="calculator_main_container">

          <div className="answer">
            <h2 className="_answer">0</h2>
          </div>

          <div className="colum_1">
            <h3 className="ac">AC</h3>
            <h3 className="add_sub">+/-</h3>
            <h3 className="percentage">%</h3>
            <h3 className="division">÷</h3>
          </div>

          <div className="colum_2">
            <h3 className="_7">7</h3>
            <h3 className="_8">8</h3>
            <h3 className="_9">9</h3>
            <h3 className="_x">X</h3>
          </div>

          <div className="colum_3">
            <h3 className="_4">4</h3>
            <h3 className="_5">5</h3>
            <h3 className="_6">6</h3>
            <h3 className="subtraction">-</h3>
          </div>

          <div className="colum_4">
            <h3 className="_1">1</h3>
            <h3 className="_2">2</h3>
            <h3 className="_3">3</h3>
            <h3 className="addition">+</h3>
          </div>

          <div className="colum_5">
            <h3 className="_0">0</h3>
            <h3 className="dot">.</h3>
            <h3 className="equal">=</h3>
          </div>

        </div>
      </div>
    );
  }
}

export default Calculator;
